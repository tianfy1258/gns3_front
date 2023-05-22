// 检查所有的结点，并删除已经删除的连线
const refreshNode = (layer) => {
  let nodes = layer.getAllNodes();
  let links = layer.getAllLinks();
  nodes.forEach((node) => {
    // 检查node的inLinks和outLinks
    let inLinks = node.inLinks ?? [];
    let outLinks = node.outLinks ?? [];
    // 遍历inLinks，并检查是否在links中
    for (let i = inLinks.length - 1; i >= 0; i--) {
      if (!links.includes(inLinks[i])) {
        console.log("delete")
        delete inLinks[i];
      }
    }
    // 遍历outLinks，并检查是否在links中
    for (let i = outLinks.length - 1; i >= 0; i--) {
      if (!links.includes(outLinks[i])) {
        console.log("delete")
        delete outLinks[i];
      }
    }
    node.inLinks = inLinks.length === 0 ? undefined : inLinks;
    node.outLinks = outLinks.length === 0 ? undefined : outLinks;
  });

}



// 查询某个结点的可用端口列表
const getAvailablePorts = (node) => {
  //  1. 获取结点的所有端口
  let ports = node.userData.ports;
  //  2. 获取所有连线
  let links = node.getLinks();
  //  3. 获取所有连线的端口
  let usedPorts = [];
  console.log(node.getLinks());
  links.forEach((link) => {
    if (link.begin.target === node) {
      usedPorts.push(link.userData.beginPort);
    } else if (link.end.target === node) {
      usedPorts.push(link.userData.endPort);
    } else {
      console.log("getAvailablePorts Error");
    }
  });
  console.log(usedPorts);
  //  4. 获取可用端口
  let availablePorts = [];
  ports.forEach((port) => {
    if (!usedPorts.includes(port)) {
      availablePorts.push(port);
    }
  });
  console.log(availablePorts);
  return availablePorts;
};


// 获取某个结点的菜单
const getMenuHtml = (node) => {
  let baseHtml = `
    <div class="header">操作</div>
    <a>删除</a>
    <div class="header">端口</div>
`;
  const availablePorts = getAvailablePorts(node);
  const ports = node.userData.ports;
  console.log(availablePorts, ports);
  ports.forEach((port) => {
    if (availablePorts.includes(port)) {
      baseHtml += `<a>🔴${port}</a>`;
    } else {
      baseHtml += `<a>🟢${port}</a>`;
    }
  });
  return baseHtml;
}

// 构建网络拓扑json格式
const buildJson = (layer) => {
  // 获取所有连线
  let links = layer.getAllLinks();
  // 遍历连线
  let json = [];
  links.forEach((link) => {
    // 获取连线的起点和终点
    let beginNode = link.begin.target;
    let endNode = link.end.target;
    // 获取连线的起点和终点的端口
    let beginPort = link.userData.beginPort;
    let endPort = link.userData.endPort;
    // 构建json
    json.push({
      beginNode: beginNode.id,
      beginPort: beginPort,
      endNode: endNode.id,
      endPort: endPort,
    });
    return json;
  });

}
// 判断两个端口是否可以连线
const isPortLinkable = (beginPort, endPort) => {
  let typeA = beginPort[0];
  let typeB = endPort[0];
  let linkable = true;
  let message = "";
  if ((typeA === 'f' && typeB === 's') || (typeA === 's' && typeB === 'f')) {
    linkable = false;
    message = "Connecting a serial interface to a ethernet interface is not allowed";
  }

  return {linkable, message};


};
// export
export {getAvailablePorts, getMenuHtml,isPortLinkable,refreshNode};
