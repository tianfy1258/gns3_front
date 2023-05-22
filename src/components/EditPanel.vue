<template>
  <div style="height:88vh;">
    <div id="panel" style="height:85vh;width:auto;border:1px solid gray">
      <button @click="showMessage">showMessage</button>
      <div id="truePanel" ref="panel"></div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {Editor, IconsPanel, Layer, Link, PopupMenu, Stage, Style, TextNode} from "@jtopo/core";
import * as dat from 'dat.gui';
import Panel from "../utils/panel.js";
import {getMenuHtml, isPortLinkable, refreshNode} from "../utils/jtopoUtils.js";
import {ElMessage} from "element-plus";
import {request} from "../network/request.js";

window.dat = dat; // 将dat分配给全局变量

const panel = ref(null);
const publicPath = import.meta.env.BASE_URL
let map = {};
let selectPort = null;
let selectNode = [];
let stage = null;
let layer = null;
let editor = null;
let theme = {
  // backgroud: "white url('./assets/img/grid.png') repeat",
  backgroud: "white",
  borderWidth: 3,
  lineColor: '#000000',
  lineFontColor: '#000000',
  textNodeColor: '#000000',
  fontColor: '#000000',
};

const addLink = (node0, node1, portName0, portName1, linkPopupMenu, linkName = "") => {
  let link = new Link(linkName);
  link.on('mouseup', function (event) {
    // 阻止默认菜单和行为
    event.preventDefault();
    let eventDetails = event.details;
    if (event.button === 2) { // right button
      linkPopupMenu.showAt(eventDetails.x, eventDetails.y);
    }
  });
  // 记录端口
  link.setBegin(node0);
  link.setEnd(node1);
  link.css({
    border: 'solid 2px black',
  });

  link.label.css({
    textBaseline: 'top'
  });
// 起止偏移
  link.beginOffset = {
    x: 0,
    y: 0
  };
  link.endOffset = {
    x: 0,
    y: 0
  };
  let textNode0 = new TextNode(portName0);
  let textStyle = new Style({
    textPosition: 'center',
    textAlign: 'center',
    textBaseline: 'middle',

  });
  textNode0.originAutoRotate = false;
  textNode0.origin = [0, 0.3];
  textNode0.style = textStyle;
  let textNode1 = new TextNode(portName1);
  textNode1.originAutoRotate = false;
  textNode1.origin = [0, 0.7];
  textNode1.style = textStyle;

  // disable edit , drag and  connect
  textNode0.editable = false;
  textNode0.connectable = false;
  textNode0.draggable = false;
  textNode0.deep = 10;
  textNode0.textOffsetY = 10;
  textNode1.editable = false;
  textNode1.connectable = false;
  textNode1.draggable = false;
  textNode1.zIndex = -1;
  textNode1.textOffsetY = 10;

  // disable drag
  link.draggable = false;
  // disable edit
  link.editable = false;

  // 记录端口
  link.userData = {
    beginPort: portName0,
    endPort: portName1,
  }
  layer.addChild(link);
  link.addChild(textNode0);
  link.addChild(textNode1);
}
const prepareLeftPanel = () => {
  // 左侧图元面板配置
  const leftPanelConfig = {
    items: [
      {
        name: 'VPCS',
        className: 'Node',
        iconHtml: `
            <img width="100%" style="padding:2px;" src="${publicPath}computer.svg" alt=""/>
         `,
        properties: {
          text: 'VPCS',
          image: publicPath + "computer.svg",
          sizeToImage: true,
          css: {
            'textPosition': 'cb',
            'borderWidth': 0,
            'color': theme.fontColor,
          },
          editable: false,
          connectable: false,
          userData: {
            ports: ['f0/0'],
          }
        },

      },
      {
        name: 'Router',
        className: 'Node',
        iconHtml: `
            <img width="100%" style="padding:2px;" src="${publicPath}router.svg" alt=""/>
         `,
        properties: {
          text: 'Router',
          image: publicPath + "router.svg",
          sizeToImage: true,
          css: {
            'textPosition': 'cb',
            'borderWidth': 0,
            'color': theme.fontColor,
          },
          editable: false,
          connectable: false,
          userData: {
            ports: ['f0/0', 'f0/1', 's1/0', 's1/1', 's1/2', 's1/3'],
          }
        }
      }
    ]
  };
// 从节点画出线的线配置
  editor.LinkClassName = 'AutoFoldLink';
// 样式
  editor.newLinkProperties = {
    css: {
      'borderWidth': 2,
      'borderColor': theme.lineColor
    }
  };

// 创建左侧的图标面板，并设置图标数据
  let iconPanel = new IconsPanel(stage);
  iconPanel.setConfig(leftPanelConfig).show();

// 右侧属性编辑面板
//   let propertiesPanel = new PropertiesPanel(editor);
  let propertiesPanel = new Panel(panel.value);

// 左侧拖拽开始
  iconPanel.on('dragstart', function (event) {
    const config = event.config;
    event.dataTransfer.setData('drop_data', JSON.stringify(config));
  });
  return propertiesPanel;
}

const resetSelect = () => {
  selectPort = null;
  // clear all the node css
  selectNode.forEach((node) => {
    node.css(
        {
          border: 'solid 0px',
        }
    )
  })
  selectNode = [];
}

const prepareMenu = () => {
  // 右键菜单
  let nodePopupMenu = new PopupMenu(stage);
  nodePopupMenu.setHtml(`
    <div class="header">操作</div>
    <a>删除</a>
    <div class="header">端口</div>
`);

  let linkPopupMenu = new PopupMenu(stage);
  linkPopupMenu.setHtml(`
    <div class="header">操作</div>
    <a>删除</a>
    `);

// 节点菜单选择事件处理
  nodePopupMenu.on('select', function (event) {


    //event.item： 选中的菜单文本
    if (event.item === "删除") {
      let node = stage.pickedObject;
      // 首先删除和结点连接的连线
      node.getLinks().forEach((link) => {
        link.removeFromParent();
      });
      // 然后删除结点
      node.removeFromParent();
      refreshNode(layer);
      return;
    }


    let emoji = event.item.slice(0, 2)
    if (emoji === "🟢") {
      ElMessage({
        message: '端口已占用',
        type: 'warning'
      });
      return;
    }
    // 去掉第一个emoji字符
    event.item = event.item.slice(2);

    if (selectPort != null) {
      console.log(`from ${selectNode[0].text} (${selectPort}) to ${selectNode[1].text} (${event.item})`);
      if (selectNode[0] === selectNode[1]) {
        ElMessage({
          message: '不能连接自己',
          type: 'warning'
        });
        return;
      }
      let {linkable, message} = isPortLinkable(selectPort, event.item);
      if (!linkable) {
        ElMessage({
          message: message,
          type: 'warning',
          duration: 5000,
          showClose: true,
        });

      } else {
        addLink(selectNode[0], selectNode[1], selectPort, event.item, linkPopupMenu);
      }
      resetSelect();
      return;
    }
    selectPort = event.item;
    selectNode[selectNode.length - 1].css(
        {
          border: 'solid red 2px',
        }
    );

  });
// 连线菜单选择事件处理
  linkPopupMenu.on('select', function (event) {
    //event.item： 选中的菜单文本
    if (event.item === "删除") {
      stage.pickedObject.removeFromParent();
      refreshNode(layer);
      return;
    }
  });
  return {nodePopupMenu, linkPopupMenu};
}
const setStageEvent = (nodePopupMenu, linkPopupMenu, propertiesPanel) => {
// 鼠标点中的对象在右侧显示属性面板
  stage.on('mousedown', function (e) {
    nodePopupMenu.hide();
    linkPopupMenu.hide();
    const pickedObject = stage.pickedObject;
    window.target = pickedObject;
    if (pickedObject && pickedObject.isNode) {
      propertiesPanel.showProperty(pickedObject);
    }
  });
  stage.on('mouseup', (e) => {
    e.preventDefault();
  });

// 取消右键菜单
  editor.editable = false;

  stage.on("mouseup",(e) => e.preventDefault());
  editor.on("mouseup",(e) => e.preventDefault());
  layer.on("mouseup",(e) => e.preventDefault());
  stage.on('click', function (event) {
    resetSelect();
  });

}
const setEditorEvent = (nodePopupMenu, propertiesPanel) => {
  // 画布接收到拖拽结束
  editor.on('drop', function (event) {
    const json = event.dataTransfer.getData('drop_data');
    const config = JSON.parse(json);
    // 画布上生成的实例
    editor.record('添加');
    const nodeOrLink = editor.create(config);
    nodeOrLink.text = nodeOrLink.text + " " + (nodeOrLink.id - 8);
    // 右键松开时显示
    nodeOrLink.on('mouseup', function (event) {
      // 阻止默认菜单和行为
      event.preventDefault();
      // 记录当前选中的节点
      selectNode.push(nodeOrLink);
      if (selectNode.length > 2) selectNode.shift()
      // 取画布上的坐标x,y
      let eventDetails = event.details;
      if (event.button === 2) { // right button4
        nodePopupMenu.setHtml(getMenuHtml(nodeOrLink));
        nodePopupMenu.showAt(eventDetails.x, eventDetails.y);
      }
    });
    editor.recordEnd('添加');
    // 在右侧显示属性面板
    propertiesPanel.showProperty(nodeOrLink);
  });
}
const endProcess = () => {
// 左下角显示缩略图
  stage.showOverview({
    left: 0,
    bottom: -1
  });

// 打开最后一次保存
  editor.openLasted();
  layer.css({
    background: theme.backgroud,
  });
}
const disableStageHotkeys = () => {
  // 禁止键盘快捷键操作
  stage.keyboard.bindKey("Control+c", () => {
  }, false);
  stage.keyboard.bindKey("Control+v", () => {
  }, false);
  stage.keyboard.bindKey("Control+x", () => {
  }, false);
  stage.keyboard.bindKey("delete", () => {
  }, false);
  stage.keyboard.bindKey("Control+z", () => {
  }, false);
  stage.keyboard.bindKey("Control+Shift+z", () => {
  }, false);
  stage.keyboard.bindKey("Control+a", () => {
  }, false);
  stage.keyboard.bindKey("Control+i", () => {
  }, false);
  stage.keyboard.bindKey("Shift+c", () => {
  }, false);
  stage.keyboard.bindKey("Shift+v", () => {
  }, false);
  stage.keyboard.bindKey("Control+s", () => {
  }, false);
  stage.keyboard.bindKey("Control+o", () => {
  }, false);
  stage.keyboard.bindKey("ArrowUp", () => {
  }, false);
  stage.keyboard.bindKey("ArrowDown", () => {
  }, false);
  stage.keyboard.bindKey("ArrowLeft", () => {
  }, false);
  stage.keyboard.bindKey("ArrowRight", () => {
  }, false);
  stage.keyboard.bindKey("h", () => {
  }, false);
  stage.keyboard.bindKey("g", () => {
  }, false);
  stage.keyboard.bindKey("t", () => {
  }, false);
}

const initVariables = () => {
  stage = new Stage("panel")
  layer = new Layer();
  stage.addChild(layer);
  stage.show();
  editor = new Editor(stage);
  stage.setMode('edit');

}
const setToolBar = () => {
  const disabledButtons = ["默认", "框选模式"]
  stage.toolbar.buttons.forEach((button) => {
    if (disabledButtons.includes(button.title)) {
      button.remove();
    }
  });
  let clearButton = document.createElement('button');
  clearButton.title = "清空拓扑";
  clearButton.className = "item"
  clearButton.setAttribute('group', 'custom');
  clearButton.setAttribute('iconid', 'clear');
  clearButton.innerHTML =
      `
<svg t="1684224791703" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2695" width="16" height="16"><path d="M228 385v488.782c0 29.34 24.03 53.218 53.784 53.218h460.432C771.97 927 796 903.123 796 873.782V385H228z m640 0v488.782C868 942.99 811.634 999 742.216 999H281.784C212.366 999 156 942.99 156 873.782V385H87c-19.882 0-36-16.118-36-36v-33.575c0-38.642 14.962-78.077 41.31-108.02C121.451 174.289 162.222 155 208.593 155h607.143c46.387 0 87.094 19.174 116.128 52.197C958.151 237.096 973 276.53 973 315.425V349c0 19.882-16.118 36-36 36h-69zM352 118.5c-19.882 0-36-16.118-36-36s16.118-36 36-36h320c19.882 0 36 16.118 36 36s-16.118 36-36 36H352z m525.791 136.238C862.17 236.97 841.003 227 815.736 227H208.593c-25.208 0-46.47 10.06-62.23 27.969-14.246 16.19-22.7 37.655-23.326 58.031h777.927c-0.612-20.673-9.003-42.145-23.173-58.262zM336.5 528c0-19.882 16.118-36 36-36s36 16.118 36 36v263c0 19.882-16.118 36-36 36s-36-16.118-36-36V528z m140 0c0-19.882 16.118-36 36-36s36 16.118 36 36v263c0 19.882-16.118 36-36 36s-36-16.118-36-36V528z m140 0c0-19.882 16.118-36 36-36s36 16.118 36 36v263c0 19.882-16.118 36-36 36s-36-16.118-36-36V528z" fill="#707070" p-id="2696"></path></svg>
      `
  clearButton.addEventListener('click', function () {
    // 清空拓扑
    // 遍历所有结点
    let nodes = layer.getAllNodes();
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      node.removeFromParent();
    }
    // 遍历所有连线
    let links = layer.getAllLinks();
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      link.removeFromParent();
    }
    // 重置selectNodes和selectEdges
    resetSelect();
    refreshNode(layer);
  });

  let syncButton = document.createElement('button');
  syncButton.title = "同步拓扑";
  syncButton.className = "item"
  syncButton.setAttribute('group', 'custom');
  syncButton.setAttribute('iconid', 'sync');
  syncButton.innerHTML =
      `
<svg t="1684243048326" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2375" width="16" height="16"><path d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27c40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8zM924 512h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4S687 811.7 646 829c-42.4 17.9-87.4 27-133.9 27s-91.5-9.1-133.9-27c-40.9-17.3-77.7-42.1-109.3-73.8-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47c5.3-4.1 3.5-12.5-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-0.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8 0.1-4.5-3.5-8.2-8-8.2z" p-id="2376" fill="#707070"></path></svg>
      `
  syncButton.addEventListener('click', function () {
    request({

    })
    resetSelect();
    refreshNode(layer);
  });

  let dom = stage.toolbar.getDom();
  // 创建一个<div class="group">
  let group = document.createElement('div');
  group.className = 'group';

  // 将按钮添加到group中
  group.appendChild(clearButton);
  group.appendChild(syncButton)

  // 将group添加到toolbar中，成为第一个元素
  dom.insertBefore(group, dom.firstChild);


};
const createStage = () => {

  initVariables();
  disableStageHotkeys();
  setToolBar();

  let propertiesPanel = prepareLeftPanel();
  let {nodePopupMenu, linkPopupMenu} = prepareMenu();
  setEditorEvent(nodePopupMenu, propertiesPanel);
  setStageEvent(nodePopupMenu, linkPopupMenu, propertiesPanel);
  endProcess();
};

onMounted(() => {
  createStage();
});
const showMessage = () => {
  console.log(layer.getAllNodes());
  console.log(layer.getAllLinks());
}
</script>
<style scoped>
#panel {
  position: relative;
  /* 设置宽度和高度以便看到dat.gui面板 */

  background-color: #efefef;
}

#truePanel {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.text {
  border: 1px solid #ff0000;
}
</style>
