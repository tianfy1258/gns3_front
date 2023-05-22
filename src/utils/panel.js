
import {Node} from '@jtopo/core';
import * as dat from 'dat.gui'
// 引入dat.GUI库

class Panel {
  constructor(parent) {
    // 创建dat.GUI实例
    // 创建指向目标div的配置对象
    const guiConfig = {
      autoPlace: false, // 禁用GUI放置在页面的右上角
    };

// 创建dat.GUI实例并传递目标div的ID
    this.gui = new dat.GUI(guiConfig);
    // 将dat.GUI面板插入到目标div
    parent.appendChild(this.gui.domElement);
    // 创建一个节点属性追踪folder
    this.folder = this.gui.addFolder('Properties');
    this.folder.open();
  }

  showProperty(node) {
    // 确保传递的对象是JTopo的节点类型
    if (!(node instanceof Node)) {
      throw new Error('Node must be an instance of JTopo.Node');
    }

    // 清除folder中的现有控件
    for (let i = this.folder.__controllers.length - 1; i >= 0; i--) {
      this.folder.remove(this.folder.__controllers[i]);
    }

    // 添加一个文本输入控件
    this.folder
      .add(node, 'text')
      .name('Label')
      .onChange(function (value) {
        node.text = value;
      });

    // 如果节点有其它属性，可以添加更多控制
    // 例如, 控制节点的位置，颜色等
  }
}

export default Panel
