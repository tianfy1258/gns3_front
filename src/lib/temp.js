function c(e) {
  if (e && 'undefined' != typeof window) {
    const f = document['createElement']('style');
    return f['setAttribute']('type', 'text/css'), f['innerHTML'] = e, document['head']['appendChild'](f), e;
  }
}

var i = ['setTo', 'min', 'max', 'createFromPoints', 'length', 'normal', 'abs', 'sign', 'width', 'height', 'getRect', 'clone', 'toString', '[x:\x20', '\x20y:', '\x20width:', 'equals', 'containsRect', 'getRight', 'getBottom', 'isIntersectRect', 'isEmpty', 'setToEmpty'];
!function (j) {
  !function (k) {
    for (; --k;) j['push'](j['shift']());
  }(0x1ec);
}(i);
var n = function (p, q) {
  return i[p = +p];
};

class u {
  constructor(v, A, B, C) {
    this['x'] = 0x0 | v, this['y'] = 0x0 | A, this[n('0x0')] = 0x0 | B, this['height'] = 0x0 | C;
  }

  ['setTo'](D, E, I, J) {
    this['x'] = D, this['y'] = E, this[n('0x0')] = I, this[n('0x1')] = J;
  }

  [n('0x2')]() {
    return this;
  }

  [n('0x3')]() {
    return new u(this['x'], this['y'], this[n('0x0')], this[n('0x1')]);
  }

  [n('0x4')]() {
    return n('0x5') + this['x'] + n('0x6') + this['y'] + n('0x7') + this[n('0x0')] + '\x20height:' + this[n('0x1')] + ']';
  }

  [n('0x8')](K) {
    return K['x'] == this['x'] && K['y'] == this['y'] && K[n('0x0')] == this[n('0x0')] && K[n('0x1')] == this[n('0x1')];
  }

  [n('0x9')](L) {
    return L['x'] > this['x'] && L[n('0xa')]() < this['getRight']() && L['y'] > this['y'] && L[n('0xb')]() < this[n('0xb')]();
  }

  ['contains'](M, N) {
    return M >= this['x'] && M <= this['x'] + this[n('0x0')] && N >= this['y'] && N <= this['y'] + this['height'];
  }

  [n('0xc')](O) {
    return !(O['x'] > this[n('0xa')]() || O['y'] > this[n('0xb')]()) && !(O[n('0xa')]() < this['x'] || O[n('0xb')]() < this['y']);
  }

  ['getRight']() {
    return this['x'] + this[n('0x0')];
  }

  [n('0xb')]() {
    return this['y'] + this[n('0x1')];
  }

  [n('0xd')]() {
    return 0x0 === this['x'] && 0x0 === this['y'] && 0x0 === this[n('0x0')] && 0x0 === this['height'];
  }

  [n('0xe')](P) {
    this[n('0xf')](0x0, 0x0, 0x0, 0x0);
  }

  ['union'](Q) {
    var R = Math[n('0x10')](this['x'], Q['x']), S = Math[n('0x10')](this['y'], Q['y']),
      T = Math[n('0x11')](this[n('0xa')](), Q['getRight']()), Q = Math[n('0x11')](this[n('0xb')](), Q[n('0xb')]());
    return new u(R, S, T - R, Q - S);
  }

  ['getCenter']() {
    return {'x': this['x'] + this['width'] / 0x2, 'y': this['y'] + this[n('0x1')] / 0x2};
  }

  ['getCornerPoints']() {
    return [{'x': this['x'], 'y': this['y']}, {
      'x': this['x'] + this['width'],
      'y': this['y']
    }, {'x': this['x'] + this[n('0x0')], 'y': this['y'] + this[n('0x1')]}, {
      'x': this['x'],
      'y': this['y'] + this['height']
    }];
  }
}

u[n('0x12')] = function (V) {
  let W = V[0x0]['x'], X = V[0x0]['y'], Y = W, Z = X;
  for (var a0 = 0x1; a0 < V[n('0x13')]; a0++) {
    var a1 = V[a0];
    W = Math[n('0x10')](W, a1['x']), X = Math[n('0x10')](X, a1['y']), Y = Math[n('0x11')](Y, a1['x']), Z = Math[n('0x11')](Z, a1['y']);
  }
  return new u(W, X, Y - W, Z - X);
}, u[n('0x14')] = function (a2, a3) {
  var a4 = a3['x'] - a2['x'], a2 = a3['y'] - a2['y'];
  return Math[n('0x15')](a4) > Math[n('0x15')](a2) ? [Math[n('0x16')](a4), 0x0] : [0x0, Math[n('0x16')](a2)];
};
var a6 = ['scale', 'getScale', 'cos', 'sin', 'rotateTarget', 'translate', 'rotate', 'getTranslation', 'skew', 'copy', 'translateTo', 'atan2', 'getMatrix', 'slice', 'point', 'points', 'length', 'push', 'getCornerPoints'];
!function (a7) {
  !function (a8) {
    for (; --a8;) a7['push'](a7['shift']());
  }(0xf2);
}(a6);
var a9 = function (aa, ab) {
  return a6[aa = +aa];
};

class ac {
  constructor(ad) {
    this['m'] = ad && ad[a9('0x0')]() || [0x1, 0x0, 0x0, 0x1, 0x0, 0x0];
  }

  ['copy']() {
    return new ac(this['m']);
  }

  ['identity']() {
    this['m'] = [0x1, 0x0, 0x0, 0x1, 0x0, 0x0];
  }

  [a9('0x1')](ae) {
    var af = this['m'];
    return {'x': af[0x0] * ae['x'] + af[0x2] * ae['y'] + af[0x4], 'y': af[0x3] * ae['y'] + af[0x1] * ae['x'] + af[0x5]};
  }

  [a9('0x2')](ag) {
    let ah = [];
    for (var ai = 0x0; ai < ag[a9('0x3')]; ai++) {
      var aj = ag[ai];
      ah[a9('0x4')](this[a9('0x1')](aj));
    }
    return ah;
  }

  ['rectangle'](ak) {
    ak = this[a9('0x2')](ak[a9('0x5')]());
    return u['createFromPoints'](ak);
  }

  ['translate'](al, am) {
    return this['m'][0x4] += this['m'][0x0] * al + this['m'][0x2] * am, this['m'][0x5] += this['m'][0x1] * al + this['m'][0x3] * am, this;
  }

  ['translateTo'](an, ao) {
    return this['m'][0x4] = an, this['m'][0x5] = ao, this;
  }

  [a9('0x6')](ap, aq) {
    return this['m'][0x0] *= ap, this['m'][0x1] *= ap, this['m'][0x2] *= aq, this['m'][0x3] *= aq, this;
  }

  [a9('0x7')]() {
    return {'x': this['m'][0x0], 'y': this['m'][0x3]};
  }

  ['rotate'](ar) {
    var ax = Math[a9('0x8')](ar), at = Math[a9('0x9')](ar), au = this['m'][0x0] * ax + this['m'][0x2] * at,
      av = this['m'][0x1] * ax + this['m'][0x3] * at, ar = this['m'][0x0] * -at + this['m'][0x2] * ax,
      ax = this['m'][0x1] * -at + this['m'][0x3] * ax;
    return this['m'][0x0] = au, this['m'][0x1] = av, this['m'][0x2] = ar, this['m'][0x3] = ax, this;
  }

  [a9('0xa')](ay, az, aA) {
    this[a9('0xb')](az, aA), this[a9('0xc')](ay), this['translate'](-az, -aA);
  }

  [a9('0xd')]() {
    return {'x': this['m'][0x4], 'y': this['m'][0x5]};
  }

  [a9('0xe')](aB, aC) {
    return this['m'][0x1] = aB, this['m'][0x2] = aC, this;
  }

  ['getRotation']() {
    let aD = this[a9('0xf')]();
    aD[a9('0x10')](0x0, 0x0);
    var aE = aD[a9('0x1')]({'x': 0x0, 'y': 0x0});
    return Math[a9('0x11')](aE['y'], aE['x']);
  }

  ['multiply'](aF) {
    var aG = this['m'][0x0] * aF['m'][0x0] + this['m'][0x2] * aF['m'][0x1],
      aH = this['m'][0x1] * aF['m'][0x0] + this['m'][0x3] * aF['m'][0x1],
      aI = this['m'][0x0] * aF['m'][0x2] + this['m'][0x2] * aF['m'][0x3],
      aJ = this['m'][0x1] * aF['m'][0x2] + this['m'][0x3] * aF['m'][0x3],
      aK = this['m'][0x0] * aF['m'][0x4] + this['m'][0x2] * aF['m'][0x5] + this['m'][0x4],
      aF = this['m'][0x1] * aF['m'][0x4] + this['m'][0x3] * aF['m'][0x5] + this['m'][0x5];
    return this['m'][0x0] = aG, this['m'][0x1] = aH, this['m'][0x2] = aI, this['m'][0x3] = aJ, this['m'][0x4] = aK, this['m'][0x5] = aF, this;
  }

  ['invert']() {
    var aS = 0x1 / (this['m'][0x0] * this['m'][0x3] - this['m'][0x1] * this['m'][0x2]), aN = this['m'][0x3] * aS,
      aO = -this['m'][0x1] * aS, aP = -this['m'][0x2] * aS, aQ = this['m'][0x0] * aS,
      aR = aS * (this['m'][0x2] * this['m'][0x5] - this['m'][0x3] * this['m'][0x4]),
      aS = aS * (this['m'][0x1] * this['m'][0x4] - this['m'][0x0] * this['m'][0x5]);
    return this['m'][0x0] = aN, this['m'][0x1] = aO, this['m'][0x2] = aP, this['m'][0x3] = aQ, this['m'][0x4] = aR, this['m'][0x5] = aS, this;
  }

  [a9('0x12')]() {
    return this['m'];
  }

  ['setAbsolutePosition'](aT, aU) {
    var b1 = this['m'][0x0], b0 = this['m'][0x1], aX = this['m'][0x2], aY = this['m'][0x3], aZ = this['m'][0x4],
      b0 = (b1 * (aU - this['m'][0x5]) - b0 * (aT - aZ)) / (b1 * aY - b0 * aX), b1 = (aT - aZ - aX * b0) / b1;
    return this[a9('0xb')](b1, b0);
  }
}

var b2 = ['forEach', 'remove', 'insertAt', 'clear', 'setChildIndex', 'dirty', 'flatten', 'children', 'concat', 'toIdMap', 'getAABB', 'union', 'getRect', 'getNoChildrensObjects', 'parent', 'hasChild', 'indexOf', 'notContains', 'addAll', 'length', 'push', 'splice', 'removeAt', 'removeArr'];
!function (b3) {
  !function (b4) {
    for (; --b4;) b3['push'](b3['shift']());
  }(0xa0);
}(b2);
var b5 = function (b6, b7) {
  return b2[b6 = +b6];
};

class b8 extends Array {
  [b5('0x0')](b9) {
    return -0x1 != this[b5('0x1')](b9);
  }

  [b5('0x2')](ba) {
    return -0x1 == this[b5('0x1')](ba);
  }

  [b5('0x3')](bb) {
    for (var bc = 0x0; bc < bb[b5('0x4')]; bc++) {
      var bd = bb[bc];
      this[b5('0x5')](bd);
    }
    return this;
  }

  ['removeAt'](be) {
    return this[b5('0x6')](be, 0x1);
  }

  ['remove'](bf) {
    bf = this[b5('0x1')](bf);
    return -0x1 == bf ? this : this[b5('0x7')](bf);
  }

  [b5('0x8')](bg) {
    let bh = this;
    return bg[b5('0x9')](bg => {
      bh[b5('0xa')](bg);
    }), this;
  }

  [b5('0xb')](bj, bk) {
    this['splice'](bk || 0x0, 0x0, bj);
  }

  ['swap'](bl, bm) {
    bl = this[b5('0x1')](bl), bm = this[b5('0x1')](bm);
    this['swapAt'](bl, bm);
  }

  ['swapAt'](bn, bo) {
    var bp = this[bn];
    this[bo] = this[bn], this[bn] = bp;
  }

  [b5('0xc')]() {
    this[b5('0x4')] = 0x0;
  }

  [b5('0xd')](bq, br) {
    this[b5('0xe')] = !0x0, this['removeChild'](bq), this['insertChildAt'](bq, br);
  }

  [b5('0xf')](bs) {
    let bt = new b8();
    for (var bu, bv = 0x0; bv < this['length']; bv++) {
      let bw = this[bv];
      null != bs && 0x1 != bs(bw) || (bt[b5('0x5')](bw), bw['children'] && 0x0 < bw['children'][b5('0x4')] && (bu = bw[b5('0x10')][b5('0xf')](bs), bt = bt[b5('0x11')](bu)));
    }
    return bt;
  }

  [b5('0x12')]() {
    let bx = {};
    return this[b5('0x9')](by => {
      bx[by['id']] = by;
    }), bx;
  }

  [b5('0x13')](bz, bA) {
    let bB = this[0x0][b5('0x13')](bz, bA);
    for (let bC = 0x1; bC < this['length']; bC++) bB = bB[b5('0x14')](this[bC]['getAABB'](bz, bA));
    return bB;
  }

  [b5('0x15')]() {
    let bD = this[0x0]['getRect']();
    for (let bE = 0x1; bE < this[b5('0x4')]; bE++) bD = bD[b5('0x14')](this[bE]['getRect']());
    return bD;
  }

  [b5('0x16')]() {
    let bF = this['flatten']();
    return bF = this[b5('0xf')](bG => bF[b5('0x2')](bG[b5('0x17')])), bF;
  }
}

var bH = ['create', 'writable', 'enumerable', 'prototype'];
!function (bI) {
  !function (bJ) {
    for (; --bJ;) bI['push'](bI['shift']());
  }(0x190);
}(bH);
var bK = function (bL, bM) {
  return bH[bL = +bL];
};

function bN(bO, bP) {
  for (var bQ in bP) bR(bO, bQ, bP[bQ]);
}

function bR(bS, bT, bU) {
  null == bU[bK('0x2')] && (bU[bK('0x2')] = !0x0), null == bU[bK('0x3')] && (bU[bK('0x3')] = !0x0), Object['defineProperty'](bS, bT, bU);
}

var bV = ['modeChange', 'groupdrag', 'groupdragend', '1.4.6_5', 'drag', 'edit', 'normal', 'select', 'move', 's-resize', 'w-resize', 'e-resize', 'horizontal', 'vertical', 'begin', 'end', 'ctrlPoint', 'ctrlPoint1', 'ctrlPoint2', 'fold1', 'fold2', 'mid', 'mid1', 'mid2', 'down', 'left', 'point', 'fixedName', 'lineSegment', 'nearest', 'function', 'log', 'forEach', 'assertTrue\x20failed', 'drop_data', 'zoom', 'zoomAfter'];
!function (bW) {
  !function (bX) {
    for (; --bX;) bW['push'](bW['shift']());
  }(0xe2);
}(bV);
var bY = function (bZ, c0) {
  return bV[bZ = +bZ];
};
const c1 = {}, c2 = bY('0x0'),
  c3 = {'drag': bY('0x1'), 'edit': bY('0x2'), 'normal': bY('0x3'), 'select': bY('0x4'), 'view': 'view'}, c4 = {
    'move': bY('0x5'),
    'corosshair': 'corosshair',
    's_resize': bY('0x6'),
    'n_resize': 'n-resize',
    'w_resize': bY('0x7'),
    'e_resize': bY('0x8')
  }, c5 = {'horizontal': bY('0x9'), 'vertical': bY('0xa')}, c6 = {
    'lt': 'lt',
    'ct': 'ct',
    'rt': 'rt',
    'lm': 'lm',
    'center': 'center',
    'rm': 'rm',
    'lb': 'lb',
    'cb': 'cb',
    'rb': 'rb',
    'nearest': 'nearest',
    'begin': bY('0xb'),
    'end': bY('0xc'),
    'ctrlPoint': bY('0xd'),
    'ctrlPoint1': bY('0xe'),
    'ctrlPoint2': bY('0xf'),
    'fold1': bY('0x10'),
    'fold2': bY('0x11'),
    'mid': bY('0x12'),
    'mid1': bY('0x13'),
    'mid2': bY('0x14'),
    'up': 'up',
    'down': bY('0x15'),
    'left': bY('0x16'),
    'right': 'right'
  }, c7 = {
    'point': bY('0x17'),
    'fixedName': bY('0x18'),
    'lineSegment': bY('0x19'),
    'nearest': bY('0x1a'),
    'function': bY('0x1b')
  }, c8 = {
    'lt': c6['rb'],
    'ct': c6['cb'],
    'rt': c6['lb'],
    'rm': c6['lm'],
    'rb': c6['lt'],
    'cb': c6['ct'],
    'lb': c6['rt'],
    'lm': c6['rm']
  }, c9 = {
    'HandlerLayerCanvas': 0x63,
    'Layer3DCanvas': 0x3e8,
    'FullWindowDom': 0x3e8,
    'Link': 0x1,
    'Node': 0x2,
    'EditorNewLink': 0x3,
    'IntersectPoint': 0x3e7,
    'NodeCtrlBox': 0x3e8,
    'LinkCtrlBox': 0x3e9
  };

function cc(cd, ...ce) {
  if (null == cd) throw console['log'](ce), new Error(ce);
}

function cf(cg, ch, ...ci) {
  if (cg != ch) throw console[bY('0x1c')](ci), new Error(ci);
}

function cj(ck, ...cl) {
  if (0x1 != ck) throw cl[bY('0x1d')](ck => {
    console[bY('0x1c')](ck);
  }), new Error(bY('0x1e'));
}

const cn = 0x0, co = 0x1;
bY('0x1f');
const cp = {
  'zoom': bY('0x20'),
  'resize': 'resize',
  'zoomAfter': bY('0x21'),
  'fullWindow': 'fullWindow',
  'modeChange': bY('0x22'),
  'groupdrag': bY('0x23'),
  'groupdragend': bY('0x24'),
  'selectObject': 'selectObject'
};
var cq = ['type', 'call', 'listeners', 'hasListener', 'addEventListener', 'push', 'removeEventListener', 'length', 'splice'];
!function (cr) {
  !function (cs) {
    for (; --cs;) cr['push'](cr['shift']());
  }(0x150);
}(cq);
var cu = function (cv, cw) {
  return cq[cv = +cv];
};

class cz {
  constructor() {
    this[cu('0x0')] = {};
  }

  [cu('0x1')](cA) {
    return cA in this['listeners'];
  }

  [cu('0x2')](cB, cC) {
    cB in this[cu('0x0')] || (this[cu('0x0')][cB] = []), this['listeners'][cB][cu('0x3')](cC);
  }

  [cu('0x4')](cD, cE) {
    if (cD in this[cu('0x0')]) {
      let cF = this[cu('0x0')][cD];
      for (var cG = 0x0, cH = cF[cu('0x5')]; cG < cH; cG++) if (cF[cG] === cE) return cF[cu('0x6')](cG, 0x1), this[cu('0x4')](cD, cE);
    }
  }

  ['dispatchEvent'](cI) {
    if (cI[cu('0x7')] in this[cu('0x0')]) {
      let cJ = this[cu('0x0')][cI[cu('0x7')]];
      for (var cK = 0x0, cL = cJ[cu('0x5')]; cK < cL; cK++) cJ[cK][cu('0x8')](this, cI);
    }
  }

  ['on'](cM, cN) {
    return this[cu('0x2')](cM, cN);
  }
}

var cO = ['hasLoaded', 'isHtmlImage', 'src', 'clearCache', 'loadImage', 'lastResource'];
!function (cP) {
  !function (cQ) {
    for (; --cQ;) cP['push'](cP['shift']());
  }(0xbe);
}(cO);
var cR = function (cT, cU) {
  return cO[cT = +cT];
}, cS = {};

class cV {
  [cR('0x0')]() {
    cS = {};
  }

  [cR('0x1')](cW, cX) {
    let cY = this;

    function cZ(cW) {
      cX(cW), cY[cR('0x3')] = !0x0;
    }

    cY[cR('0x2')] = cW;
    let d1 = cS[cW];
    null == d1 ? 0x1 != cW[cR('0x4')] ? (d1 = new Image(), d1[cR('0x5')] = cW, d1['onload'] = function () {
      cS[cW] = d1, cZ(d1);
    }) : cW['getCanvas']()['then'](cZ) : cZ(d1);
  }
}

var d3 = new cV(),
  d4 = ['top', 'bottom', 'backgroundPositionX', 'backgroundPositionXRate', 'backgroundPositionY', 'backgroundPositionYRate', 'backgroundRepeat', 'no-repeat', 'font', 'textAlign', 'textBaseline', 'getGradient', 'lineGap', 'lineCap', 'lineJoin', 'miterLimit', 'lineDash', 'setLineDash', 'lineDashOffset', 'globalAlpha', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'globalCompositeOperation', 'fromPojo', '_backgroundImage', 'backgroundImage', 'Style', 'prototype', 'defineProperties', '_border', 'toLowerCase', 'replace', 'split', 'borderStyle', 'substring', 'startsWith', 'url(', 'length', 'loadImage', '_backgroundSize', 'endsWith', '_backgroundPosition', '_background', 'backgroundColor', 'backgroundAttachment', 'url', 'indexOf', 'inherit', 'right', 'none,hidden,dotted,dashed,solid,doubble,groove,ridge,inseet,outset,inherit', '119119119046106116111112111046099111109', 'startX', 'startY', 'stopX', 'cache', 'addColorStop', 'colors', 'push', 'stopY', 'yStart', 'radiusStart', 'xStop', 'yStop', 'radiusEnd', 'createRadialGradient', 'xStart', 'image', 'string', 'src', 'pattern', 'createPattern', 'assign', 'toPojo', '_backgroundImageObject', 'fontColor', 'strokeStyle', 'fillStyle', 'roundRadius', 'lineWidth', 'setStyles', 'set', 'getBackgroundRect', 'borderWidth', 'backgroundWidth', 'backgroundWidthRate', 'width', 'backgroundHeight', 'backgroundHeightRate', 'height', 'backgroundPositionXName', 'backgroundPositionYName', 'left', 'center'];
!function (d5) {
  !function (d6) {
    for (; --d6;) d5['push'](d5['shift']());
  }(0x108);
}(d4);
var d7 = function (d8, d9) {
  return d4[d8 = +d8];
};

class da {
  constructor(db) {
    null != db && Object[d7('0x0')](this, db);
  }

  [d7('0x1')]() {
    let dc = {};
    return Object['assign'](dc, this), delete dc[d7('0x2')], delete dc[d7('0x3')], delete dc[d7('0x4')], delete dc[d7('0x5')], delete dc[d7('0x6')], delete dc[d7('0x7')], dc;
  }

  [d7('0x8')](dd) {
    null != dd && Object[d7('0x0')](this, dd);
  }

  [d7('0x9')](de, df) {
    this[de] = df;
  }

  [d7('0xa')](dg, dh, di) {
    var dj, dk = this[d7('0xb')] || 0x0;
    let dl = dk, dm = dk, dn = dg, dp = dh;
    return null != this[d7('0xc')] ? dn = this[d7('0xc')] : null != this['backgroundWidthRate'] ? dn = dg * this[d7('0xd')] : null != this['_backgroundImageObject'] && (dn = this['_backgroundImageObject'][d7('0xe')]), null != this[d7('0xf')] ? dp = this[d7('0xf')] : null != this[d7('0x10')] ? dp = dh * this['backgroundHeightRate'] : null != this[d7('0x2')] && (dp = this[d7('0x2')][d7('0x11')]), null != this[d7('0x12')] ? (dj = this[d7('0x12')], dk = this[d7('0x13')], 'center' == dj ? dl += 0.5 * dg - 0.5 * dn : dj == d7('0x14') || 'right' == dj && (dl += dg - dn), dk == d7('0x15') ? dm += 0.5 * dh - 0.5 * dp : dk == d7('0x16') || dk == d7('0x17') && (dm += dh - dp)) : (null != this[d7('0x18')] ? dl += this[d7('0x18')] : null != this[d7('0x19')] && (dl += dg * this[d7('0x19')]), null != this[d7('0x1a')] ? dm += this[d7('0x1a')] : null != this['backgroundPositionYRate'] && (dm += dh * this[d7('0x1b')])), this[d7('0x1c')], d7('0x1d'), {
      'x': dl,
      'y': dm,
      'width': dn,
      'height': dp
    };
  }

  ['applyTo'](dq) {
    var dr = this;
    null != dr[d7('0x1e')] && (dq[d7('0x1e')] = dr[d7('0x1e')]), null != dr[d7('0x1f')] && (dq[d7('0x1f')] = dr[d7('0x1f')]), null != dr['textBaseline'] && (dq[d7('0x20')] = dr[d7('0x20')]), null != dr[d7('0x5')] && (null == dr['fillStyle'][d7('0x21')] ? dq['fillStyle'] = dr['fillStyle'] : dq[d7('0x5')] = dr['fillStyle'][d7('0x21')](dq)), null != dr[d7('0x4')] && (null == dr[d7('0x4')]['getGradient'] ? dq[d7('0x4')] = dr['strokeStyle'] : dq[d7('0x4')] = dr[d7('0x4')][d7('0x21')](dq)), null != dr[d7('0x22')] && (dq[d7('0x23')] = dr['lineCap']), null != dr[d7('0x24')] && (dq[d7('0x24')] = dr[d7('0x24')]), null != dr[d7('0x7')] && (dq[d7('0x7')] = dr[d7('0x7')]), null != dr[d7('0x25')] && (dq[d7('0x25')] = dr[d7('0x25')]), null != dr[d7('0x26')] ? dq[d7('0x27')](dr[d7('0x26')]) : dq['setLineDash']([]), null != dr[d7('0x28')] && (dq[d7('0x28')] = dr[d7('0x28')]), null != dr[d7('0x29')] && (dq[d7('0x29')] = dr[d7('0x29')]), null != dr[d7('0x2a')] && (dq[d7('0x2a')] = dr[d7('0x2a')]), null != dr[d7('0x2b')] && (dq['shadowColor'] = dr[d7('0x2b')]), null != dr[d7('0x2c')] && (dq['shadowOffsetX'] = dr['shadowOffsetX']), null != dr[d7('0x2d')] && (dq['shadowOffsetY'] = dr['shadowOffsetY']), null != dr[d7('0x2e')] && (dq[d7('0x2e')] = dr[d7('0x2e')]);
  }
}

function ds(dt) {
  return dt == d7('0x14') || dt == d7('0x48') || 'center' == dt || dt == d7('0x16') || dt == d7('0x17');
}

function du(dv) {
  let dw = d7('0x49');
  return -0x1 != dw[d7('0x46')](dv);
}

da[d7('0x2f')] = function (dz) {
  let dA = new da(dz);
  return null != dz[d7('0x30')] && (dA[d7('0x31')] = dz[d7('0x30')]), dA;
}, bN(da['prototype'], {
  'className': {'value': d7('0x32')},
  'dirty': {'value': !0x1},
  'globalAlpha': {},
  'globalCompositeOperation': {},
  'fillStyle': {},
  'strokeStyle': {},
  'shadowBlur': {},
  'shadowColor': {},
  'shadowOffsetX': {},
  'shadowOffsetY': {},
  'lineCap': {},
  'lineJoin': {},
  'lineWidth': {'value': 0x1},
  'miterLimit': {},
  'font': {},
  'textAlign': {},
  'textBaseline': {},
  'textPosition': {},
  'lineDash': {},
  'lineDashOffset': {},
  'lineSpacing': {'value': 0x0}
}), Object[d7('0x0')](da[d7('0x33')], {
  'padding': void 0x0,
  'paddingLeft': void 0x0,
  'paddingRight': void 0x0,
  'paddingTop': void 0x0,
  'paddingBottom': void 0x0,
  '_border': void 0x0,
  'borderStyle': void 0x0,
  'borderWidth': void 0x0,
  'borderColor': void 0x0,
  'borderRadius': void 0x0,
  '_background': void 0x0,
  '_backgroundImageObject': void 0x0,
  '_backgroundPosition': void 0x0,
  'backgroundRepeat': void 0x0,
  'backgroundColor': void 0x0,
  'backgroundSize': void 0x0,
  'backgroundWidth': void 0x0,
  'backgroundHeight': void 0x0,
  'backgroundWidthRate': void 0x0,
  'backgroundHeightRate': void 0x0,
  'backgroundPositionX': void 0x0,
  'backgroundPositionY': void 0x0,
  'backgroundPositionXRate': void 0x0,
  'backgroundPositionYRate': void 0x0,
  'backgroundPositionXName': void 0x0,
  'backgroundPositionYName': void 0x0,
  '_backgroundImage': void 0x0,
  'backgroundImage': void 0x0,
  'backgroundAttachment': void 0x0,
  'textAlign': void 0x0,
  'verticalAlign': void 0x0,
  'lineHeight': void 0x0,
  'color': void 0x0
}), Object[d7('0x34')](da['prototype'], {
  'border': {
    'get'() {
      return this[d7('0x35')];
    }, 'set'(dB) {
      if (null != dB) {
        this['borderStyle'] = void 0x0, this[d7('0xb')] = void 0x0, this['borderColor'] = void 0x0;
        var dC = dB[d7('0x36')]()[d7('0x37')](/\s+/gi, '\x20')[d7('0x38')]('\x20');
        for (let dD = 0x0; dD < dC['length']; dD++) {
          let dB = dC[dD];
          du(dB) ? this[d7('0x39')] = dB : dB['endsWith']('px') ? this[d7('0xb')] = parseFloat(dB[d7('0x3a')](0x0, dB['length'] - 0x2)) : this['borderColor'] = dB;
        }
      }
      this[d7('0x35')] = dB;
    }
  }, 'backgroundImage': {
    'get'() {
      return this['_backgroundImage'];
    }, 'set'(dF) {
      if (null != dF) {
        this[d7('0x2')] = void 0x0;
        let dG = dF['toLowerCase']();
        dG[d7('0x3b')](d7('0x3c')) && (dG = dG['replace'](/\s+/gi, '\x20'), dG = dG[d7('0x3a')](0x5, dG[d7('0x3d')] - 0x2)), this[d7('0x30')] = dG, this[d7('0x30')] = dG;
        let dH = this;
        d3[d7('0x3e')](dG, function (dG) {
          dH[d7('0x2')] = dG;
        });
      } else this['_backgroundImage'] = dF;
    }
  }, 'backgroundSize': {
    'get'() {
      return this[d7('0x3f')];
    }, 'set'(dJ) {
      if (null != dJ) {
        var dK = (dJ = dJ[d7('0x36')]()[d7('0x37')](/\s+/gi, '\x20'))[d7('0x38')]('\x20');
        if (this[d7('0xc')] = void 0x0, this[d7('0xf')] = void 0x0, this[d7('0xd')] = void 0x0, this['backgroundHeightRate'] = void 0x0, 0x0 < dK['length']) {
          let dJ = dK[0x0];
          dJ[d7('0x40')]('px') ? this['backgroundWidth'] = parseFloat(dJ[d7('0x3a')](0x0, dJ[d7('0x3d')] - 0x2)) : this[d7('0xd')] = parseFloat(dJ[d7('0x3a')](0x0, dJ[d7('0x3d')] - 0x1)) / 0x64;
        }
        if (0x1 < dK[d7('0x3d')]) {
          let dJ = dK[0x1];
          dJ[d7('0x40')]('px') ? this[d7('0xf')] = parseFloat(dJ) : this[d7('0x10')] = parseFloat(dJ[d7('0x3a')](0x0, dJ[d7('0x3d')] - 0x1)) / 0x64;
        }
      }
      this[d7('0x3f')] = dJ;
    }
  }, 'backgroundPosition': {
    'get'() {
      return this[d7('0x41')];
    }, 'set'(dN) {
      if (null != dN) {
        var dO = (dN = dN['toLowerCase']()['replace'](/\s+/gi, '\x20'))[d7('0x38')]('\x20');
        if (this[d7('0x12')] = void 0x0, this[d7('0x13')] = void 0x0, this['backgroundPositionX'] = void 0x0, this['backgroundPositionY'] = void 0x0, this[d7('0x19')] = void 0x0, this[d7('0x1b')] = void 0x0, 0x0 < dO[d7('0x3d')]) {
          let dN = dO[0x0];
          var dQ = dN['endsWith']('px'), dR = dN['endsWith']('%');
          ds(dN) ? this[d7('0x12')] = dN : dR ? this[d7('0x19')] = parseFloat(dN[d7('0x3a')](0x0, dN[d7('0x3d')] - 0x1)) : dQ && (this[d7('0x18')] = parseFloat(dN['substring'](0x0, dN['length'] - 0x2))), this[d7('0x13')] = 'center';
        }
        if (0x1 < dO['length']) {
          let dN = dO[0x1];
          dQ = dN[d7('0x40')]('px'), dO = dN[d7('0x40')]('%');
          ds(dN) ? this[d7('0x13')] = dN : dO ? this[d7('0x1b')] = parseFloat(dN['substring'](0x0, dN[d7('0x3d')] - 0x1)) : dQ && (this['backgroundPositionY'] = parseFloat(dN[d7('0x3a')](0x0, dN[d7('0x3d')] - 0x2)));
        }
      }
      this['_backgroundPosition'] = dN;
    }
  }, 'background': {
    'get'() {
      return this[d7('0x42')];
    }, 'set'(dT) {
      if (this[d7('0x1c')] = void 0x0, this[d7('0x43')] = void 0x0, this['backgroundSize'] = void 0x0, this[d7('0xc')] = void 0x0, this[d7('0xf')] = void 0x0, this[d7('0xd')] = void 0x0, this[d7('0x10')] = void 0x0, this[d7('0x18')] = void 0x0, this[d7('0x1a')] = void 0x0, this[d7('0x19')] = void 0x0, this[d7('0x1b')] = void 0x0, this[d7('0x30')] = void 0x0, this[d7('0x31')] = void 0x0, this[d7('0x44')] = void 0x0, null != dT) {
        var dU, dV, dW = (dT = dT['toLowerCase']()[d7('0x37')](/\s+/gi, '\x20'))[d7('0x38')]('\x20');
        let dX, dY, dZ, e0;
        for (let e1 = 0x0; e1 < dW[d7('0x3d')]; e1++) {
          let dT = dW[e1];
          'fixed' != dT ? (dV = dT['endsWith']('px'), dU = dT[d7('0x40')]('%'), dT[d7('0x3b')](d7('0x45')) ? this[d7('0x31')] = dT : -0x1 != dT[d7('0x46')]('repeat') || dT == d7('0x47') ? this[d7('0x1c')] = dT : dU ? (dU = parseFloat(dT[d7('0x3a')](0x0, dT[d7('0x3d')] - 0x1)) / 0x64, null == dX && null == dZ ? dZ = dU : e0 = dU) : dV ? (dV = parseFloat(dT[d7('0x3a')](0x0, dT['length'] - 0x2)), null == dX && null == dZ ? dX = dV : dY = dV) : this[d7('0x43')] = dT) : this[d7('0x44')] = dT;
        }
        null != dX && (this[d7('0x18')] = dX, this[d7('0x19')] = void 0x0), null != dY && (this[d7('0x1a')] = dY, this[d7('0x1b')] = void 0x0), null != dZ && (this['backgroundPositionXRate'] = dZ, this[d7('0x18')] = void 0x0), null != e0 && (this[d7('0x1b')] = e0, this[d7('0x1a')] = void 0x0);
      }
      this[d7('0x42')] = dT;
    }
  }
}), d3['w'] = d7('0x4a');

class e3 {
  constructor(e4, e5, e6, e7) {
    this[d7('0x4b')] = e4, this[d7('0x4c')] = e5, this[d7('0x4d')] = e6, this['stopY'] = e7, this[d7('0x4e')] = !0x1;
  }

  [d7('0x4f')](e8, e9) {
    null == this[d7('0x50')] && (this[d7('0x50')] = []), this[d7('0x50')][d7('0x51')]([e8, e9]);
  }

  [d7('0x21')](ea) {
    let eb = ea['createLinearGradient'](this['startX'], this[d7('0x4c')], this['stopX'], this[d7('0x52')]);
    if (null != this[d7('0x50')]) for (var ec = 0x0; ec < this['colors'][d7('0x3d')]; ec++) {
      var ed = this[d7('0x50')][ec];
      eb[d7('0x4f')](ed[0x0], ed[0x1]);
    }
    return eb;
  }
}

class ee {
  constructor(ef, eg, eh, ei, ej, ek) {
    this['xStart'] = ef, this[d7('0x53')] = eg, this[d7('0x54')] = eh, this[d7('0x55')] = ei, this[d7('0x56')] = ej, this[d7('0x57')] = ek;
  }

  ['addColorStop'](el, em) {
    null == this[d7('0x50')] && (this[d7('0x50')] = []), this[d7('0x50')]['push']([el, em]);
  }

  [d7('0x21')](en) {
    let eo = en[d7('0x58')](this[d7('0x59')], this[d7('0x53')], this['radiusStart'], this[d7('0x55')], this[d7('0x56')], this['radiusEnd']);
    if (null != this[d7('0x50')]) for (var ep = 0x0; ep < this[d7('0x50')]['length']; ep++) {
      var eq = this[d7('0x50')][ep];
      eo[d7('0x4f')](eq[0x0], eq[0x1]);
    }
    return eo;
  }
}

class er {
  constructor(es, et) {
    let eu = this;
    typeof (this[d7('0x5a')] = es) == d7('0x5b') && (this['image'] = new Image(), this['image'][d7('0x5c')] = es, d3[d7('0x3e')](es, function (es) {
      eu['image'] = es;
    })), this['repetition'] = et || 'no-repeat';
  }

  ['getGradient'](ew) {
    return null == this[d7('0x5d')] && (this[d7('0x5d')] = ew[d7('0x5e')](this[d7('0x5a')], this['repetition'])), this[d7('0x5d')];
  }
}

var ex = ['dot', 'sqrt', 'multiplyC', 'len', 'negate', 'add', 'normalize'];
!function (ey) {
  !function (ez) {
    for (; --ez;) ey['push'](ey['shift']());
  }(0x9c);
}(ex);
var eA = function (eC, eD) {
  return ex[eC = +eC];
}, eB = {};

function eE(eF, eG, eH) {
  return eF[0x0] = eG[0x0] + eH[0x0], eF[0x1] = eG[0x1] + eH[0x1], eF;
}

function eI(eJ, eK, eL) {
  return eJ[0x0] = eK[0x0] * eL, eJ[0x1] = eK[0x1] * eL, eJ;
}

function eM(eN, eO, eP) {
  return eN[0x0] = eO[0x0] * eP, eN[0x1] = eO[0x1] * eP, eN;
}

function eQ(eR, eS) {
  return eR[0x0] = -eS[0x0], eR[0x1] = -eS[0x1], eR;
}

function eT(eU, eV) {
  var eW = Math[eA('0x0')](eV[0x0] * eV[0x0] + eV[0x1] * eV[0x1]);
  return eU[0x0] = eV[0x0] / eW, eU[0x1] = eV[0x1] / eW, eU;
}

function eX(eY) {
  return Math[eA('0x0')](eY[0x0] * eY[0x0] + eY[0x1] * eY[0x1]);
}

function eZ(f0, f1) {
  return f0[0x0] * f1[0x0] + f0[0x1] * f1[0x1];
}

function f2(f3, f4, f5) {
  return eI(f3, f5, eZ(f4, f5)), f3;
}

eB[eA('0x1')] = eI, eB['scale'] = eM, eB[eA('0x2')] = eX, eB[eA('0x3')] = eQ, eB[eA('0x4')] = eE, eB[eA('0x5')] = eT, eB[eA('0x6')] = eZ, eB['projection'] = f2;
var f6 = ['forEach', 'cos', 'sin', 'push', 'multiplyC', 'atan2', 'sqrt', 'length', 'points.length\x20<\x202', 'log', 'moveTo', 'lineTo', 'MAX_SAFE_INTEGER', 'MIN_SAFE_INTEGER'];
!function (f7) {
  !function (f8) {
    for (; --f8;) f7['push'](f7['shift']());
  }(0x1a3);
}(f6);
var f9 = function (fa, fb) {
  return f6[fa = +fa];
};

function fc(fd) {
  let fe = Number[f9('0x0')], ff = Number[f9('0x0')], fg = Number[f9('0x1')], fh = Number[f9('0x1')];
  return fd[f9('0x2')](function (fd) {
    fd[0x0] < fe && (fe = fd[0x0]), fd[0x1] < ff && (ff = fd[0x1]), fd[0x0] > fg && (fg = fd[0x0]), fd[0x1] > fh && (fh = fd[0x1]);
  }), new u(fe, ff, fg - fe, fh - ff);
}

function fj(fk, fl, fm, fo, fp, fq) {
  let fr = [];
  var fs = 0x2 * Math['PI'] / fk;
  null == fo && (fo = 0x1), null == fp && (fp = 0x1);
  for (var ft = 0x0; ft < fk; ft++) {
    var fu = fl + fo * Math[f9('0x3')](fq + ft * fs), fv = fm + fp * Math[f9('0x4')](fq + ft * fs);
    fr[f9('0x5')]({'x': fu, 'y': fv});
  }
  return fr;
}

function fw(fx, fy, fz, fA) {
  var fB = (0x1 - fz) * fx['x'], fC = (0x1 - fz) * fx['y'];
  let fD = {'x': fB + fz * fy['x'], 'y': fC + fz * fy['y']};
  return fA && (fx = Math[f9('0x7')](fy['y'] - fx['y'], fy['x'] - fx['x']), fD = {
    'x': fD['x'] + fA * Math[f9('0x3')](fx),
    'y': fD['y'] + fA * Math[f9('0x4')](fx)
  }), fD;
}

function fE(fF, fG) {
  var fH = fG['x'] - fF['x'], fF = fG['y'] - fF['y'];
  return Math[f9('0x8')](fH * fH + fF * fF);
}

function fJ(fK) {
  var fL = fK[f9('0x9')];
  if (fL < 0x2) throw new Error('points.length\x20<\x202');
  var fM = fK[0x0], fN = fK[fL - 0x1];
  if (0x2 == fK['length']) return fE(fM, fN);
  let fO = 0x0;
  for (var fP = 0x1; fP < fL; fP++) fO += fE(fK[fP - 0x1], fK[fP]);
  return fO;
}

function fQ(fR, fS, fT) {
  var fU = fR[f9('0x9')];
  if (fR[f9('0x9')] < 0x2) throw new Error(f9('0xa'));
  var fV = fR[0x0], fW = fR[fR[f9('0x9')] - 0x1];
  if (0x2 == fR['length']) return fw(fV, fW, fS, fT);
  if (fS < 0x0) return fw(fR[0x0], fR[0x1], fS, fT);
  if (0x1 < fS) return fw(fR[fR[f9('0x9')] - 0x2], fR[fR[f9('0x9')] - 0x1], fS, fT);
  var fX = fJ(fR) * fS;
  let fY = 0x0;
  for (var fZ = 0x1; fZ < fU; fZ++) {
    var g0 = fE(fR[fZ - 0x1], fR[fZ]);
    if (fX >= fY && fX <= fY + g0) {
      var g1 = fX - fY;
      return fw(fR[fZ - 0x1], fR[fZ], g1 / g0, fT);
    }
    fY += g0;
  }
  throw console[f9('0xb')](fR, fS), new Error('assert\x20error\x20betweenPoints');
}

function g2(g3, g4) {
  var ga = g4['x'] - g3['x'], g6 = g4['y'] - g3['y'], g7 = (g4['x'] + g3['x']) / 0x2, g4 = (g4['y'] + g3['y']) / 0x2,
    g3 = Math['sqrt'](ga * ga + g6 * g6) / 0x2, ga = Math[f9('0x7')](g6, ga) + Math['PI'] / 0x2;
  return {'x': g7 + g3 * Math['cos'](ga), 'y': g4 + g3 * Math[f9('0x4')](ga)};
}

var gb = ['compare', 'getMax', 'resetTo'];
!function (gd) {
  !function (ge) {
    for (; --ge;) gd['push'](gd['shift']());
  }(0x1d9);
}(gb);
var gf = function (gg, gh) {
  return gb[gg = +gg];
};
let gi = 0x0;

class gj {
}

gj['next'] = function () {
  return ++gi;
}, gj['back'] = function () {
  return --gi;
}, gj[gf('0x0')] = function () {
  return gi;
}, gj[gf('0x1')] = function (gk) {
  gi = gk;
}, gj[gf('0x2')] = function (gl) {
  null != gl && gl > gi && gj[gf('0x1')](gl + 0x1);
};
var gm = ['key', 'DragEvent', 'raw', 'type', 'preventDefault', 'call', 'time', 'now', 'previous'];
!function (gn) {
  !function (go) {
    for (; --go;) gn['push'](gn['shift']());
  }(0x124);
}(gm);
var gp = function (gq, gr) {
  return gm[gq = +gq];
};
let gs;

function gt(gu) {
  let gv = new KeyboardEvent(gu[gp('0x0')], gu), gw = gv['preventDefault'];
  var gx, gy;
  return gv[gp('0x1')] = function () {
    gu[gp('0x1')](), gw[gp('0x2')](this);
  }, gv[gp('0x3')] = Date[gp('0x4')](), gv[gp('0x5')] = gs, gs && (gx = gu[gp('0x6')] == gs[gp('0x6')], gy = gv[gp('0x3')] - gs[gp('0x3')], gx && gy < 0x190 && (gv['isDouble'] = !0x0)), gs = gv, gv;
}

function gz(gA, gB) {
  let gC;
  gB instanceof WheelEvent ? gC = new WheelEvent(gA, gB) : window['DragEvent'] && gB instanceof window[gp('0x7')] ? gC = new DragEvent(gA, gB) : gB instanceof MouseEvent ? gC = new MouseEvent(gA, gB) : gB instanceof TouchEvent && (gC = new TouchEvent(gA, gB));
  let gD = gC[gp('0x1')];
  return gC[gp('0x1')] = function () {
    gB[gp('0x1')](), gD[gp('0x2')](this);
  }, gC[gp('0x8')] = gB, gC['details'] = gB['details'], gC;
}

var gE = ['class\x20not\x20exist\x20name:', 'name', 'class\x20already\x20reg,\x20name:', 'prototype', 'length', 'serializers', 'concat', 'className', 'defineProperties'];
!function (gF) {
  !function (gG) {
    for (; --gG;) gF['push'](gF['shift']());
  }(0xda);
}(gE);
var gH = function (gI, gJ) {
  return gE[gI = +gI];
};

function gK(gL, gM, gN) {
  return null == gN ? gO(gL[gH('0x0')], gL, gM) : gO(gL, gM, gN);
}

function gO(gP, gQ, gR) {
  if (null != c1[gP]) throw new Error(gH('0x1') + gP);
  const gS = gQ[gH('0x2')];
  null != gR && 0x0 < gR[gH('0x3')] && (gS[gH('0x4')] = gS[gH('0x4')][gH('0x5')](gR)), Object['defineProperties'](gS, {'className': {'writable': !0x0}}), gS[gH('0x6')] = gP, Object[gH('0x7')](gS, {'className': {'writable': !0x1}}), c1[gP] = gQ;
}

function gT(gU) {
  var gV = c1[gU];
  if (null == gV) throw new Error(gH('0x8') + gU);
  return gV;
}

var gW = ['filter', 'isLink', 'serializers', 'hasOwnProperty', 'getOwnPropertyDescriptor', 'writable', 'next', 'target', 'begin', 'setBegin', 'end', 'setEnd', 'label', 'beginArrow', 'endArrow', 'assign', 'Roots', 'Styles', 'Resources', 'src', 'version', 'forEach', 'fromPojo', '1.3.8', 'fillStyle', 'background', 'lineWidth', 'borderWidth', 'borderStyle', 'roundRadius', 'borderRadius', 'backgroundPositionXName', 'backgroundPositionYName', 'className', 'push', 'image', 'imageSrc', 'style', 'map', 'removeAllChild', 'parent', 'addChild'];
!function (gX) {
  !function (gY) {
    for (; --gY;) gX['push'](gX['shift']());
  }(0x1df);
}(gW);
var gZ = function (h0, h1) {
  return gW[h0 = +h0];
};

function h2(h3, h4) {
  let h5 = {}, h6 = {}, h7 = {}, h8 = h3[gZ('0x0')] || [0x0], h9 = h3['DisplayObjects'], ha = h3[gZ('0x1')],
    hb = h3[gZ('0x2')];
  hb['forEach'](function (h3, h9) {
    h7[h9] = h3[gZ('0x3')];
  });
  const he = h3[gZ('0x4')];
  ha[gZ('0x5')](function (h3, h9) {
    let ha = da[gZ('0x6')](h3);
    if (h6[h9] = ha, he <= gZ('0x7')) for (var hb in h3) {
      var h4 = h3[hb];
      hb == gZ('0x8') ? ha[gZ('0x9')] = h4 : 'fontColor' == hb ? ha['color'] = h4 : 'strokeStyle' == hb ? ha['borderColor'] = h4 : hb == gZ('0xa') ? ha[gZ('0xb')] = h4 : 'lineDash' == hb ? ha[gZ('0xc')] = 'solid' : hb == gZ('0xd') ? ha[gZ('0xe')] = h4 : 'backgroundPositionXName' == hb ? ha[gZ('0xf')] = h4 : hb == gZ('0x10') && (ha[gZ('0x10')] = h4);
    }
  });
  let hk = new b8();
  let hl = h9[gZ('0x16')](function (h3, h9) {
    let ha;
    var hb;
    return h4 && (ha = h4[h3['id']]), null == ha && (ha = hW(h3[gZ('0x11')])), h9 < h8['length'] && hk[gZ('0x12')](ha), hA(h3, ha), null != h3[gZ('0x13')] && (hb = h7[h3[gZ('0x13')]], ha[gZ('0x14')] = hb), null != h3[gZ('0x15')] && (h3 = h6[h3[gZ('0x15')]], ha[gZ('0x15')] = h3), h5[h9] = ha, ha;
  });
  hl[gZ('0x5')](h3 => {
    h3[gZ('0x17')]();
  }), h9[gZ('0x5')]((h9, ha) => {
    ha = hl[ha];
    if (null != h9[gZ('0x18')]) {
      let h3 = h5[h9['parent']];
      cc(h3), h3[gZ('0x19')](ha);
    }
  });
  let hu = h9[gZ('0x1a')](h3 => h3[gZ('0x1b')]), hv = hl['filter'](h3 => h3[gZ('0x1b')]);
  return hu[gZ('0x5')](function (h3, h9) {
    h9 = hv[h9];
    hS(h9, h3, h5), hN(h9, h3, h5);
  }), hk;
}

function hA(hB, hC) {
  let hD = hC[gZ('0x1c')], hE = Object['getPrototypeOf'](hC);
  return hD['forEach'](hF => {
    if (hF != gZ('0x11')) if (hB[gZ('0x1d')](hF)) {
      let hD = Object[gZ('0x1e')](hC, hF);
      if (null == hD && (hD = Object[gZ('0x1e')](hE, hF)), null == hD || 0x0 != hD[gZ('0x1f')]) {
        let hD = hB[hF];
        null != hD && null != hD[gZ('0x11')] && (hD = hW(hD[gZ('0x11')], hD)), hC[hF] = hD;
      }
    } else hC[hF] = hE[hF];
  }), null == hC['id'] && (hC['id'] = gj[gZ('0x20')]()), hC;
}

function hI(hJ, hK) {
  var hL = hJ['target'];
  let hM = hW(hJ[gZ('0x11')], hJ);
  if (hM['isDisplayObjectId']()) {
    if (hM['target'] = hK[hL], null == hM[gZ('0x21')]) throw new Error('找不到link的端点对象，序列化时有错误:' + hL);
  } else hM[gZ('0x21')] = hL;
  return cc(hM, hJ), hM;
}

function hN(hO, hP, hQ) {
  var hR = hI(hP[gZ('0x22')], hQ);
  hO[gZ('0x23')](hR[gZ('0x21')], hR);
  hQ = hI(hP[gZ('0x24')], hQ);
  hO[gZ('0x25')](hQ[gZ('0x21')], hQ);
}

function hS(hT, hU, hV) {
  null != hU[gZ('0x26')] && (hT[gZ('0x26')] = hV[hU[gZ('0x26')]]), null != hU['beginArrow'] && (hT[gZ('0x27')] = hV[hU['beginArrow']]), null != hU[gZ('0x28')] && (hT['endArrow'] = hV[hU[gZ('0x28')]]);
}

function hW(hX, hY) {
  let hZ;
  try {
    let i0 = gT(hX);
    hZ = new i0(), hY && Object[gZ('0x29')](hZ, hY);
  } catch (i1) {
    throw new Error('unkown\x20class\x20name:\x20' + hX);
  }
  return hZ;
}

var i2 = ['push', 'extend', 'scale', 'offsetWithAngle', 'number', 'createPoints', 'createPoints2', 'concat', 'log', 'x\x20and\x20y\x20can\x20not\x20be\x20null', 'toPojo', 'isLikePoint', 'keys', 'length', 'looksSame', 'abs', 'atan2', 'cos', 'sin', 'rotatePoint', 'distance', 'sqrt', 'mergePoints'];
!function (i3) {
  !function (i4) {
    for (; --i4;) i3['push'](i3['shift']());
  }(0x190);
}(i2);
var i5 = function (i6, i7) {
  return i2[i6 = +i6];
};

class i8 {
  constructor(i9, ia) {
    if (null == i9 || null == ia) throw console[i5('0x0')](i9, ia), new Error(i5('0x1'));
    this['x'] = i9, this['y'] = ia;
  }

  [i5('0x2')]() {
    return {'x': this['x'], 'y': this['y']};
  }
}

i8[i5('0x3')] = function (ib) {
  return ib instanceof i8 || 0x2 == Object[i5('0x4')](ib)[i5('0x5')] && null != ib['x'] && null != ib['y'];
}, i8[i5('0x6')] = function (ic, ie, ig) {
  if (ic === ie) return !0x0;
  var ih = Math[i5('0x7')](ie['x'] - ic['x']), ic = Math[i5('0x7')](ie['y'] - ic['y']);
  return ih < (ig = null == ig ? 0.01 : ig) && ic < ig;
}, i8['middle'] = function (ij, ik) {
  return {'x': (ik['x'] + ij['x']) / 0x2, 'y': (ik['y'] + ij['y']) / 0x2};
}, i8['getAngle'] = function (il, im) {
  return Math[i5('0x8')](im['y'] - il['y'], im['x'] - il['x']);
}, i8['rotate'] = function (io, ip, iq, ir, is) {
  return {
    'x': (io - iq) * Math[i5('0x9')](is) - (ip - ir) * Math[i5('0xa')](is) + iq,
    'y': (io - iq) * Math[i5('0xa')](is) + (ip - ir) * Math[i5('0x9')](is) + ir
  };
}, i8[i5('0xb')] = function (it, iu, iv) {
  return {
    'x': (it['x'] - iu['x']) * Math[i5('0x9')](iv) - (it['y'] - iu['y']) * Math[i5('0xa')](iv) + iu['x'],
    'y': (it['x'] - iu['x']) * Math['sin'](iv) + (it['y'] - iu['y']) * Math[i5('0x9')](iv) + iu['y']
  };
}, i8[i5('0xc')] = function (iw, ix, iy, iz) {
  iw = iy - iw, ix = iz - ix;
  return Math[i5('0xd')](iw * iw + ix * ix);
}, i8['distancePoint'] = function (iA, iB) {
  var iC = iB['x'] - iA['x'], iA = iB['y'] - iA['y'];
  return Math[i5('0xd')](iC * iC + iA * iA);
}, i8[i5('0xe')] = function (iE) {
  let iF = [iE[0x0]];
  for (let iG = 0x1; iG < iE['length'] - 0x1; iG++) {
    var iH = iF[iF[i5('0x5')] - 0x1], iI = iE[iG], iJ = iE[iG + 0x1];
    iI['x'] === iJ['x'] && iI['y'] === iJ['y'] || (iH = eB['normalize']([], [iI['x'] - iH['x'], iI['y'] - iH['y']]), iJ = eB['normalize']([], [iJ['x'] - iI['x'], iJ['y'] - iI['y']]), Math['abs'](iH[0x0] - iJ[0x0]) < 0.01 && Math[i5('0x7')](iH[0x1] - iJ[0x1]) < 0.01 || iF['push'](iI));
  }
  return iF[i5('0xf')](iE[iE[i5('0x5')] - 0x1]), iF;
}, i8[i5('0x10')] = function (iK, iL, iM) {
  iL = [iL['x'] - iK['x'], iL['y'] - iK['y']];
  return eB['normalize'](iL, iL), eB[i5('0x11')](iL, iL, iM), {'x': iK['x'] + iL[0x0], 'y': iK['y'] + iL[0x1]};
}, i8[i5('0x12')] = function (iN, iO, iP) {
  return typeof iP == i5('0x13') && (iP = {
    'x': Math['cos'](iO) * iP,
    'y': Math[i5('0xa')](iO) * iP
  }), {'x': iN['x'] + iP['x'], 'y': iN['y'] + iP['y']};
}, i8[i5('0x14')] = function (iQ, iR, iS, iT) {
  const iU = iT ? [iQ] : [];
  var iV = iT ? iS - 0x1 : iS;
  let iW = iQ;
  for (var iX = 0x0; iX < iV; iX++) {
    var iY = {'x': iW['x'] + iR[0x0], 'y': iW['y'] + iR[0x1]};
    iU[i5('0xf')](iY), iW = iY;
  }
  return iU;
}, i8[i5('0x15')] = function (iZ, j0, j1) {
  if (0x0 == j1) return [];
  var j2 = [-j0[0x0], -j0[0x1]];
  if (j1 % 0x2 == 0x0) {
    var j5 = [j0[0x0] / 0x2, j0[0x1] / 0x2], j4 = {'x': iZ['x'] - j5[0x0], 'y': iZ['y'] - j5[0x1]},
      j5 = {'x': iZ['x'] + j5[0x0], 'y': iZ['y'] + j5[0x1]};
    const j6 = i8[i5('0x14')](j4, j2, j1 / 0x2, !0x0);
    j5 = i8[i5('0x14')](j5, j0, j1 / 0x2, !0x0);
    return j6[i5('0x16')](j5);
  }
  const j7 = i8[i5('0x14')](iZ, j2, (j1 - 0x1) / 0x2 + 0x1, !0x0);
  j1 = i8['createPoints'](iZ, j0, (j1 - 0x1) / 0x2, !0x1);
  return j7[i5('0x16')](j1);
};
var j8 = ['children', 'flatten', 'serializeable', 'forEach', 'style', 'get', 'set', 'push', 'toPojo', 'imageSrc', 'img', 'objects', 'objIndexMap', 'styleIndexMap', 'resourcesIndexMap', 'map', 'Styles', 'styles', 'Resources', 'resources', 'isNode', 'isLink', 'isLayer', 'log', 'unkonw\x20object\x20type:', 'parent', 'begin', 'end', 'label', 'beginArrow', 'endArrow', 'image', 'target', 'isDisplayObject', 'getBeginPoint', 'getEndPoint', 'isLikePoint', 'assign', 'function', 'stringify', 'serializers', 'userData', 'parse', 'number', 'toString', 'indexOf', 'length'];
!function (j9) {
  !function (ja) {
    for (; --ja;) j9['push'](j9['shift']());
  }(0x8d);
}(j8);
var jb = function (jc, jd) {
  return j8[jc = +jc];
};

function je(jf) {
  let jg = jf[0x0]['children']['flatten']();
  for (let jh = 0x1; jh < jf[jb('0x0')]; jh++) jg = jg['concat'](jf[jh][jb('0x1')][jb('0x2')](jh => jh[jb('0x3')]));
  let jj = jf['concat'](jg), jk = new WeakMap(), jl = new WeakMap(), jm = [], jn = {}, jo = [];
  return jj[jb('0x4')]((jj, jf) => {
    let jg = jj[jb('0x5')];
    null == jl[jb('0x6')](jg) && (js = jm[jb('0x0')], jl[jb('0x7')](jg, js), jm[jb('0x8')](jg[jb('0x9')]()));
    var js = jj[jb('0xa')];
    null != js && null == jn[js] && (jo['push']({
      'type': jb('0xb'),
      'src': js
    }), jn[js] = jo[jb('0x0')] - 0x1), jk[jb('0x7')](jj, jf);
  }), {'objects': jj, 'objIndexMap': jk, 'styleIndexMap': jl, 'styles': jm, 'resourcesIndexMap': jn, 'resources': jo};
}

function jt(ju) {
  let jv = {'version': c2};
  var jw = je(ju);
  let jx = jw[jb('0xc')], jy = jw[jb('0xd')], jz = jw[jb('0xe')], jA = jw[jb('0xf')];
  return jv['Roots'] = ju[jb('0x10')]((ju, jv) => jv), jv[jb('0x11')] = jw[jb('0x12')], jv[jb('0x13')] = jw[jb('0x14')], jv['DisplayObjects'] = jx[jb('0x10')](function (ju) {
    return jI(ju, jy, jz, jA);
  }), jv;
}

function jE(jF) {
  let jG = jt(jF);
  return jG['DisplayObjects'][jb('0x4')](jF => {
    jF['id'] = void 0x0;
  }), jG;
}

function jI(jJ, jK, jL, jM) {
  let jN = {};
  if (jJ[jb('0x15')]) jN['isNode'] = !0x0; else if (jJ[jb('0x16')]) jN[jb('0x16')] = !0x0; else if (!jJ[jb('0x17')]) throw console[jb('0x18')](jJ), new Error(jb('0x19'));
  jX(jN, jJ);
  var jO, jP = jK[jb('0x6')](jJ[jb('0x1a')]);
  null != jP && (jN[jb('0x1a')] = jP), 0x1 == jJ[jb('0x16')] && (jO = jJ[jb('0x1b')], jP = jJ[jb('0x1c')], jN['begin'] = jQ(jJ, jO, jb('0x1b'), jK), jN[jb('0x1c')] = jQ(jJ, jP, 'end', jK), null != jJ[jb('0x1d')] && (jN['label'] = jK[jb('0x6')](jJ[jb('0x1d')])), null != jJ[jb('0x1e')] && (jN['beginArrow'] = jK['get'](jJ[jb('0x1e')])), null != jJ[jb('0x1f')] && (jN[jb('0x1f')] = jK[jb('0x6')](jJ[jb('0x1f')])));
  jL = jL[jb('0x6')](jJ[jb('0x5')]);
  cc(jL), jN[jb('0x5')] = jL;
  jJ = jM[jJ[jb('0xa')]];
  return null != jJ && (jN[jb('0x20')] = jJ), jN;
}

function jQ(jR, jS, jT, jU) {
  let jV = jS[jb('0x21')], jW = jS['toPojo']();
  return 0x1 == jV[jb('0x22')] ? null == (jU = jU[jb('0x6')](jV)) ? (cj(jT == jb('0x1b') || jT == jb('0x1c'), jT), jW[jb('0x21')] = 'begin' == jT ? jR[jb('0x23')]() : jR[jb('0x24')]()) : jW['target'] = jU : i8[jb('0x25')](jV) ? jW['target'] = Object[jb('0x26')]({}, jV) : typeof jV == jb('0x27') && (jW[jb('0x21')] = jV()), jW;
}

function jX(jY, jZ) {
  for (var k0 = jZ[jb('0x29')], k1 = Object['getPrototypeOf'](jZ), k2 = 0x0; k2 < k0[jb('0x0')]; k2++) {
    var k3, k4 = k0[k2];
    let k5 = jZ[k4];
    k4 == jb('0x2a') && null != k5 && (k5 = JSON[jb('0x2b')](JSON[jb('0x28')](k5))), k5 == k1[k4] && 'className' != k4 || (null != k5 && (typeof k5 == jb('0x2c') && (k5 = k6(k5, 0x6)), null != k5[jb('0x9')] ? (k3 = k5[jb('0x9')](), k5 = k3) : i8[jb('0x25')](k5) && (k5 = new i8(k5['x'], k5['y']))), jY[k4] = k5);
  }
}

function k6(k7, k8) {
  let k9 = k7[jb('0x2d')]();
  return -0x1 != k9[jb('0x2e')]('.') && k8 < k9['length'] - k9[jb('0x2e')]('.') - 0x1 && (k7 = k7['toFixed'](k8), k7 = parseFloat(k7)), k7;
}

var ka = ['mouseout', 'mousedragHandler', 'mousedrag', 'defaultPrevented', 'parent', 'translateTo', 'details', 'mousedragend', 'clickHandler', 'dblclickHandler', 'selectedHandler', 'isSelected', 'selected', 'unselectedHandler', 'unselected', 'pickUpChild', 'getTopFrozenParent', 'painted', 'pickUp', 'getAllVisiable', 'containsRect', 'setzIndex', 'sort', 'updateChildrenDeep', 'deep', 'removeFromParent', 'remove', 'removeChild', 'addChilds', 'hasChildren', 'indexOf', 'removeAt', 'removeChilds', 'forEach', 'replaceChild', 'replace\x20child\x20not\x20found', 'getAABB', 'getPaintedAABBInLayer', '_aabbInLayer', 'getChildrenAABB', 'stageToLocalXY', 'invert', 'toStageXY', 'toLayerXY', 'getProtoDefaultProperties', 'serializers', 'getPrototypeOf', 'inLinks', 'addInLink', 'link', 'outLinks', 'addOutLink', 'removeInLink', 'removeOutLink', 'getLinks', 'getK', 'getOrigin', 'originOffset', 'getOriginRotation', 'sin', 'originAutoRotate', 'upgradeLinks', 'filter', 'same\x20parent,\x20dont\x20need\x20change', 'isOutOfParent', 'isIntersectRect', 'getAncestors', 'frozen', 'reverse', 'isAncestors', 'hasChild', 'flatten', 'toIdMap', 'toJson', 'stringify', 'toPojo', 'save', 'getState', 'getStates', 'restore', 'pop', 'states', '_destory', 'destroyed', 'minDeep\x20is\x20required.', 'createFromPoints', 'union', 'borderWidth', 'getChildren', '添加自己为子节点了', '互为子节点了', '互为子节点了2', 'deep\x20is\x20required.', 'copy', 'identity', 'skewY', 'skew', 'skewX', 'scale', 'getPosition', 'center', 'rotateTarget', 'toObjectLocalXY', 'setXY', 'begin', 'target', 'isDisplayObject', 'getBeginPoint', 'getEndPoint', 'nearest', 'prototype', 'editable', 'connectable', 'showSelected', 'draggable', 'next', 'children', 'matrix', 'style', 'origin', 'positions', 'setName', 'name', 'getName', 'draw', 'path', 'strokeStyle', 'stroke', 'mousePickupPath', 'fill', 'getTransform', 'point', 'translateBy', 'dirty', 'translateWith', 'translateCenterTo', 'width', 'height', 'translatePositionTo', 'getCenter', 'resizeTo', 'resizeWith', 'scaleBy', 'scaleY', 'scaleX', 'zoom', 'zoomIn', 'scaleTo', 'scaleWith', 'getScale', 'rotateBy', 'rotation', 'rotateTo', 'rotateWith', 'getRect', 'setStyles', 'css', 'object', 'length', 'hasOwnProperty', 'fillStyle', 'background', 'fontColor', 'number', 'string', 'endsWith', 'substring', 'left', 'zIndex', 'updatezIndex', 'color', 'top', 'css3D', 'getTransformByDeep', 'getLayerTransform', 'getStageTransform', 'hide', 'visible', 'isPointOn', 'render', 'dontNeedPickup', 'isMouseInPath', '_pickRadius', 'setUserData', 'userData', 'getUserData', 'definePosition', 'definePosition\x20arguments\x20error.', 'DefaultPositions', 'position\x20not\x20exist:', 'call', 'getOBB', 'getPoints', 'points', 'getPositionNames', 'assign', 'keys', 'getPoint', 'getSegmentPoints', 'log', 'findChildren', 'push', 'concat', 'getAllNodes', 'isNode', 'getAllLinks', 'isLink', 'touchstartHandler', 'dispatchEvent', 'touchmoveHandler', 'mousedownHandler', 'mouseEnabled', 'mouseupHandler', 'mouseoverHandler', 'mouseenterHandler', 'mouseenter', 'mouseoutHandler', 'hasListener'];
!function (kb) {
  !function (kc) {
    for (; --kc;) kb['push'](kb['shift']());
  }(0x14e);
}(ka);
var kd = function (ke, kf) {
  return ka[ke = +ke];
};
bN['t'] = 0x1f4;

class kg extends cz {
  constructor() {
    super(), this['id'] = gj[kd('0x0')](), this[kd('0x1')] = new b8(), this[kd('0x2')] = new ac(), this[kd('0x3')] = new da(), this[kd('0x4')] = [0x0, 0x0], this[kd('0x5')] = {};
  }

  [kd('0x6')](kh) {
    this[kd('0x7')] = kh;
  }

  [kd('0x8')]() {
    return this[kd('0x7')];
  }

  [kd('0x9')](ki) {
    if (null != this[kd('0xa')]) {
      var kj = this[kd('0x3')];
      return null != kj && null != kj[kd('0xb')] && (ki[kd('0xc')](this[kd('0xa')]), this[kd('0xd')](ki)), null != kj && null != kj['fillStyle'] && (ki[kd('0xe')](this[kd('0xa')]), this['mousePickupPath'](ki)), this;
    }
  }

  ['transformPoint'](kk) {
    let kl = this[kd('0xf')]();
    return kl[kd('0x10')](kk);
  }

  [kd('0xf')]() {
    return oa(this);
  }

  [kd('0x11')](km, kn) {
    return this[kd('0x12')] = !0x0, this['x'] *= km, this['y'] *= kn, this;
  }

  [kd('0x13')](ko, kp) {
    return this[kd('0x12')] = !0x0, this['x'] += ko, this['y'] += kp, this;
  }

  ['translateTo'](kq, kr) {
    return this['dirty'] = !0x0, this['x'] = kq, this['y'] = kr, this;
  }

  [kd('0x14')](ks, kt) {
    return this[kd('0x12')] = !0x0, this['x'] = ks - this[kd('0x15')] / 0x2, this['y'] = kt - this[kd('0x16')] / 0x2, this;
  }

  [kd('0x17')](ku, kv, kw) {
    this['dirty'] = !0x0;
    ku = this['getPosition'](ku), kv -= ku['x'], ku = kw - ku['y'];
    this[kd('0x13')](kv, ku);
  }

  [kd('0x18')]() {
    return {'x': this['x'] + 0.5 * this[kd('0x15')], 'y': this['y'] + 0.5 * this[kd('0x16')]};
  }

  ['resizeBy'](kx, ky) {
    return this['dirty'] = !0x0, this[kd('0x15')] *= kx, this['height'] *= ky, this;
  }

  [kd('0x19')](kz, kA) {
    return this[kd('0x12')] = !0x0, this[kd('0x15')] = kz, this[kd('0x16')] = kA, this;
  }

  [kd('0x1a')](kB, kC) {
    return this[kd('0x12')] = !0x0, this[kd('0x15')] += kB, this['height'] += kC, this[kd('0x15')] < 0x0 && (this['width'] = 0x0), this['height'] < 0x0 && (this[kd('0x16')] = 0x0), this;
  }

  [kd('0x1b')](kD, kE) {
    return this[kd('0x12')] = !0x0, this['scaleX'] *= kD, this[kd('0x1c')] *= kE, this;
  }

  ['zoom'](kF, kG) {
    this[kd('0x12')] = !0x0;
    var kJ = this[kd('0x15')] * this[kd('0x1d')], kK = this[kd('0x16')] * this[kd('0x1c')], kJ = kJ * kF - kJ,
      kK = kK * kG - kK;
    return this['scaleBy'](kF, kG), this['translateWith'](-kJ / 0x2, -kK / 0x2), this;
  }

  ['zoomOut']() {
    return this[kd('0x1e')](0.8, 0.8), this;
  }

  [kd('0x1f')]() {
    return this[kd('0x1e')](1.25, 1.25), this;
  }

  [kd('0x20')](kL, kM) {
    return this[kd('0x12')] = !0x0, this[kd('0x1d')] = kL, this[kd('0x1c')] = kM, this;
  }

  [kd('0x21')](kN, kO) {
    return this[kd('0x12')] = !0x0, this['scaleX'] += kN, this['scaleY'] += kO, this;
  }

  [kd('0x22')]() {
    return {'x': this[kd('0x1d')], 'y': this[kd('0x1c')]};
  }

  [kd('0x23')](kP) {
    return this['dirty'] = !0x0, this[kd('0x24')] *= kP, this;
  }

  [kd('0x25')](kQ) {
    return this['dirty'] = !0x0, this[kd('0x24')] = kQ, this;
  }

  [kd('0x26')](kR) {
    return this[kd('0x12')] = !0x0, this[kd('0x24')] += kR, this;
  }

  [kd('0x27')]() {
    return new u(this['x'], this['y'], this['width'], this[kd('0x16')]);
  }

  ['getStyle'](kS) {
    return this[kd('0x3')][kS];
  }

  [kd('0x28')](kT, kU) {
    return this[kd('0x29')](kT, kU);
  }

  [kd('0x29')](kV, kW) {
    if (typeof kV == kd('0x2a')) {
      let kW = kV;
      var kY = Object['keys'](kW);
      for (let kV = 0x0; kV < kY[kd('0x2b')]; kV++) {
        var l0 = kY[kV];
        let l1 = kW[l0];
        kW[kd('0x2c')](l0) && null != l1 && (l0 == kd('0x2d') ? this['style'][kd('0x2e')] = l1 : l0 == kd('0x2f') && (this[kd('0x3')]['color'] = l1)), l0 == kd('0x15') ? typeof l1 == kd('0x30') ? this[kd('0x15')] = l1 : typeof l1 == kd('0x31') && l1[kd('0x32')]('px') && (this['width'] = parseFloat(l1[kd('0x33')](0x0, l1['length'] - 0x2))) : l0 == kd('0x16') ? typeof l1 == kd('0x30') ? this[kd('0x16')] = l1 : 'string' == typeof l1 && l1[kd('0x32')]('px') && (this[kd('0x16')] = parseFloat(l1['substring'](0x0, l1[kd('0x2b')] - 0x2))) : l0 == kd('0x34') ? 'number' == typeof l1 ? this['x'] = l1 : 'string' == typeof l1 && l1[kd('0x32')]('px') && (this['x'] = parseFloat(l1[kd('0x33')](0x0, l1['length'] - 0x2))) : 'top' == l0 ? typeof l1 == kd('0x30') ? this['y'] = l1 : typeof l1 == kd('0x31') && l1['endsWith']('px') && (this['y'] = parseFloat(l1[kd('0x33')](0x0, l1[kd('0x2b')] - 0x2))) : l0 == kd('0x35') && (this['zIndex'] = l1, this[kd('0x36')]()), this['style'][l0] = l1;
      }
    } else {
      kV = kV;
      let l2 = kW;
      null != l2 && (kV == kd('0x2d') ? this[kd('0x3')][kd('0x2e')] = l2 : kV == kd('0x2f') && (this[kd('0x3')][kd('0x37')] = l2)), kV == kd('0x15') ? 'number' == typeof l2 ? this[kd('0x15')] = l2 : typeof l2 == kd('0x31') && l2[kd('0x32')]('px') && (this['width'] = parseFloat(l2['substring'](0x0, l2['length'] - 0x2))) : kV == kd('0x16') ? typeof l2 == kd('0x30') ? this[kd('0x16')] = l2 : 'string' == typeof l2 && l2['endsWith']('px') && (this[kd('0x16')] = parseFloat(l2[kd('0x33')](0x0, l2[kd('0x2b')] - 0x2))) : 'left' == kV ? typeof l2 == kd('0x30') ? this['x'] = l2 : typeof l2 == kd('0x31') && l2[kd('0x32')]('px') && (this['x'] = parseFloat(l2[kd('0x33')](0x0, l2[kd('0x2b')] - 0x2))) : kV == kd('0x38') ? typeof l2 == kd('0x30') ? this['y'] = l2 : typeof l2 == kd('0x31') && l2[kd('0x32')]('px') && (this['y'] = parseFloat(l2['substring'](0x0, l2[kd('0x2b')] - 0x2))) : 'zIndex' == kV && (this['zIndex'] = l2, this[kd('0x36')]()), this[kd('0x3')][kV] = l2;
    }
    return this[kd('0x12')] = !0x0, this;
  }

  [kd('0x39')](l3, l4) {
    return this[kd('0x29')](l3, l4);
  }

  [kd('0x3a')](l5) {
    return o7(this, l5);
  }

  [kd('0x3b')]() {
    return o7(this, co);
  }

  [kd('0x3c')]() {
    return o7(this, cn);
  }

  ['show']() {
    return this[kd('0x12')] = !0x0, this['visible'] = !0x0, this;
  }

  [kd('0x3d')]() {
    return this[kd('0x12')] = !0x0, this[kd('0x3e')] = !0x1, this;
  }

  [kd('0xd')](l6, l7) {
    this[kd('0x3f')] = !0x1;
    const l8 = l6[kd('0x40')];
    l8[kd('0x41')](this) || (this[kd('0x3f')] = l8[kd('0x42')](l7));
  }

  ['mousePickupStroke'](l9, la) {
    this['isPointOn'] = !0x1;
    const lc = l9[kd('0x40')];
    lc[kd('0x41')](this) || (null == la && (la = this[kd('0x43')]), this[kd('0x3f')] = lc['isMouseInStroke'](la, null));
  }

  [kd('0x44')](ld) {
    return this[kd('0x45')] = ld, this;
  }

  [kd('0x46')]() {
    return this[kd('0x45')];
  }

  ['removeUserData']() {
    return this[kd('0x45')] = void 0x0, this;
  }

  [kd('0x47')](le, lf) {
    if (null == le || null == lf) throw new Error(kd('0x48'));
    this['positions'][le] = lf;
  }

  ['getPosition'](lg, lh, li) {
    let lj = this['positions'][lg];
    if (null == lj && (lj = this[kd('0x49')][lg]), null == lj) throw Error(kd('0x4a') + lg);
    return lj[kd('0x4b')](this, lh, li);
  }

  [kd('0x4c')](lk) {
    null == lk && (lk = co);
    let ll = this[kd('0x3a')](lk);
    var lk = this[kd('0x4d')]();
    return lk = ll[kd('0x4e')](lk);
  }

  [kd('0x4f')]() {
    var lo = Object['assign']({}, this['positions']);
    return Object[kd('0x50')](lo, this['DefaultPositions']), Object[kd('0x51')](lo);
  }

  [kd('0x4d')]() {
    let lp = new u(0x0, 0x0, this[kd('0x15')], this[kd('0x16')]);
    return lp['getCornerPoints']();
  }

  [kd('0x52')](lq, lr) {
    lr = this['getLocalPoint'](lq, lr);
    return {'x': this['x'] + lr['x'], 'y': this['y'] + lr['y']};
  }

  ['getLocalPoint'](ls, lu, lv) {
    if (typeof ls != kd('0x30')) throw new Error('t\x20is\x20not\x20number:\x20' + ls);
    let lw = this[kd('0x53')]();
    var lx = lw[kd('0x2b')] - 0x1;
    if (null != lu) {
      if (lx <= lu) throw console[kd('0x54')](this), console[kd('0x54')](lu, lx), new Error('segIndex\x20out\x20of\x20bounds.');
      lw = [lw[lu], lw[lu + 0x1]];
    }
    return fQ(lw, ls, lv);
  }

  [kd('0x55')](ly, lz, lA) {
    var lB = this[kd('0x1')];
    let lC = [];
    for (var lD, lE = 0x0; lE < lB[kd('0x2b')]; lE++) {
      let lF = lB[lE];
      lF[ly] == lz && lC[kd('0x56')](lF), lA && (lD = lF[kd('0x55')](ly, lz, lA), lC = lC[kd('0x57')](lD));
    }
    return lC;
  }

  [kd('0x58')]() {
    return this['findChildren'](kd('0x59'), !0x0, !0x0);
  }

  [kd('0x5a')]() {
    return this[kd('0x55')](kd('0x5b'), !0x0, !0x0);
  }

  [kd('0x5c')](lG) {
    0x1 == this['mouseEnabled'] && this['dispatchEvent'](lG);
  }

  ['touchendHandler'](lH) {
    0x1 == this['mouseEnabled'] && this[kd('0x5d')](lH);
  }

  [kd('0x5e')](lI) {
    0x1 == this['mouseEnabled'] && this[kd('0x5d')](lI);
  }

  [kd('0x5f')](lJ) {
    0x1 == this[kd('0x60')] && this[kd('0x5d')](lJ);
  }

  [kd('0x61')](lK) {
    0x1 == this['mouseEnabled'] && this[kd('0x5d')](lK);
  }

  [kd('0x62')](lL) {
    0x1 == this[kd('0x60')] && this[kd('0x5d')](lL);
  }

  ['mousemoveHandler'](lM) {
    0x1 == this[kd('0x60')] && this[kd('0x5d')](lM);
  }

  [kd('0x63')](lN) {
    0x1 == this[kd('0x60')] && this['hasListener'](kd('0x64')) && (lN = gz(kd('0x64'), lN), this[kd('0x5d')](lN));
  }

  [kd('0x65')](lO) {
    0x1 == this[kd('0x60')] && this[kd('0x66')](kd('0x67')) && (lO = gz(kd('0x67'), lO), this[kd('0x5d')](lO));
  }

  [kd('0x68')](lP) {
    if (this[kd('0x66')](kd('0x69'))) {
      var lQ = gz(kd('0x69'), lP);
      if (this[kd('0x5d')](lQ), 0x1 == lQ[kd('0x6a')]) return;
    }
    let lR = this[kd('0x6b')]['getStageTransform']()['invert']();
    lR[kd('0x6c')](0x0, 0x0);
    lP = lR[kd('0x10')]({'x': lP[kd('0x6d')]['dx'], 'y': lP['details']['dy']});
    this[kd('0x13')](lP['x'], lP['y']);
  }

  ['mousedragEndHandler'](lS) {
    this[kd('0x66')](kd('0x6e')) && (lS = gz('mousedragend', lS), this[kd('0x5d')](lS), lS[kd('0x6a')]);
  }

  [kd('0x6f')](lT) {
    0x1 == this[kd('0x60')] && this['dispatchEvent'](lT);
  }

  [kd('0x70')](lU) {
    0x1 == this[kd('0x60')] && this[kd('0x5d')](lU);
  }

  [kd('0x71')]() {
    var lV;
    0x1 == this[kd('0x60')] && (this[kd('0x72')] = !0x0, this['hasListener'](kd('0x73')) && (lV = new Event(kd('0x73'), {'cancelable': !0x0}), this[kd('0x5d')](lV), lV['defaultPrevented']));
  }

  [kd('0x74')]() {
    var lW;
    0x1 == this[kd('0x60')] && (this[kd('0x72')] = !0x1, this[kd('0x66')](kd('0x75')) && (lW = new Event(kd('0x75'), {'cancelable': !0x0}), this['dispatchEvent'](lW), lW[kd('0x6a')]));
  }

  ['pickUp'](lX, lY) {
    let lZ = this[kd('0x76')](lX);
    return null == lZ && this['isPointOn'] && this[kd('0x3e')] && (0x0 == this[kd('0x60')] && 0x1 != lY || (lZ = this)), null == lZ || null != (lY = lZ[kd('0x77')]()) && (lZ = lY), lZ;
  }

  ['pickUpChild'](m0, m1) {
    for (var m2 = this['children'], m3 = m2[kd('0x2b')] - 0x1; 0x0 <= m3; m3--) {
      let m4 = m2[m3];
      if (m4[kd('0x78')]) {
        var m5 = m4[kd('0x79')](m0, m1);
        if (null != m5) return m5;
      }
    }
    return null;
  }

  ['pickUpByRect'](m6) {
    let m7 = [];
    var m8 = this[kd('0x7a')]();
    if (null != m8) for (var m9, ma = 0x0; ma < m8['length']; ma++) {
      let mb = m8[ma];
      mb[kd('0x78')] && (m9 = mb['getAABB'](!0x1, co), m6[kd('0x7b')](m9) && m7[kd('0x56')](mb));
    }
    return m7;
  }

  ['addChild'](mc) {
    return o4(this, mc), this[kd('0x12')] = !0x0, this;
  }

  [kd('0x7c')](md) {
    this[kd('0x35')] = md, this[kd('0x6b')] && this[kd('0x6b')][kd('0x36')](), this['dirty'] = !0x0;
  }

  ['updatezIndex']() {
    this['children'][kd('0x7d')](function (me, mf) {
      return me['zIndex'] - mf[kd('0x35')];
    }), this[kd('0x12')] = !0x0;
  }

  [kd('0x7e')](mg) {
    if (0x0 < this[kd('0x1')]['length']) {
      var mh = this[kd('0x1')];
      for (let mi = 0x0; mi < mh[kd('0x2b')]; mi++) {
        const mj = mh[mi];
        mj[kd('0x7f')] = this[kd('0x7f')] + 0x1, 0x0 < mj[kd('0x1')][kd('0x2b')] && mj[kd('0x7e')](mg);
      }
    }
  }

  ['getChildren']() {
    return this[kd('0x1')];
  }

  ['hasChild'](mk) {
    return this[kd('0x1')]['hasChild'](mk);
  }

  ['hasChildren']() {
    return 0x0 < this[kd('0x1')]['length'];
  }

  [kd('0x80')]() {
    if (this[kd('0x6b')]) {
      if (this['hasListener']('remove')) {
        var ml = new Event(kd('0x81'), {'cancelable': !0x0});
        if (this[kd('0x5d')](ml), 0x1 == ml[kd('0x6a')]) return;
      }
      this[kd('0x6b')][kd('0x82')](this);
    }
    return this[kd('0x12')] = !0x0, this;
  }

  [kd('0x81')]() {
    return this[kd('0x80')]();
  }

  [kd('0x83')](mm) {
    this[kd('0x12')] = !0x0;
    for (var mn = 0x0; mn < mm[kd('0x2b')]; mn++) {
      let mo = mm[mn];
      0.5 * this[kd('0x1')][kd('0x2b')] > bN['t'] || (mo[kd('0x6b')] = this, mo['deep'] = this[kd('0x7f')] + 0x1, this[kd('0x1')][kd('0x56')](mo), mo[kd('0x84')]() && mo[kd('0x7e')](!0x0));
    }
    this['updatezIndex']();
  }

  [kd('0x82')](mp) {
    this['dirty'] = !0x0;
    var mq = this[kd('0x1')][kd('0x85')](mp);
    if (-0x1 != mq) return this[kd('0x1')][kd('0x86')](mq), mp['parent'] = null, this;
  }

  [kd('0x87')](mr) {
    for (var ms of mr) this[kd('0x82')](ms);
    return this;
  }

  ['removeAllChild']() {
    return this[kd('0x12')] = !0x0, this[kd('0x1')][kd('0x88')](function (mt) {
      mt[kd('0x6b')] = null;
    }), this[kd('0x1')] = new b8(), this['dirty'] = !0x0, this;
  }

  [kd('0x89')](mu, mv) {
    var mw = this[kd('0x1')][kd('0x85')](mu);
    if (-0x1 == mw) throw new Error(kd('0x8a'));
    this[kd('0x1')][mw] = mv, mu[kd('0x6b')] = null, mv[kd('0x6b')] = this;
  }

  ['translateChildrenWith'](mx, my) {
    if (this[kd('0x84')]()) {
      this[kd('0x12')] = !0x0;
      for (var mz = this['getChildren'](), mA = 0x0; mA < mz[kd('0x2b')]; mA++) {
        let mB = mz[mA];
        mB['translateWith'](mx, my);
      }
    }
  }

  ['findFirst'](mC, mD) {
    for (var mE = this[kd('0x1')], mF = 0x0; mF < mE[kd('0x2b')]; mF++) {
      var mG = mE[mF];
      if (mG[mC] == mD) return mG;
    }
  }

  [kd('0x8b')](mH, mI) {
    return nM(this, mH, mI);
  }

  [kd('0x8c')]() {
    return this[kd('0x8d')];
  }

  [kd('0x8e')](mJ, mK) {
    return nU(this, mJ, mK);
  }

  ['getRoot']() {
    let mL = this;
    for (; null != mL['parent'];) mL = mL[kd('0x6b')];
    return mL;
  }

  [kd('0x8f')](mM, mN) {
    let mO = this['getStageTransform']()[kd('0x90')]();
    return mO[kd('0x10')]({'x': mM, 'y': mN});
  }

  [kd('0x91')](mP, mQ) {
    let mR = this[kd('0x3c')]();
    return mR[kd('0x10')]({'x': mP, 'y': mQ});
  }

  [kd('0x92')](mS, mT) {
    let mU = this[kd('0x3b')]();
    return mU[kd('0x10')]({'x': mS, 'y': mT});
  }

  ['toObjectLocalXY'](mV, mW, mX) {
    mW = this[kd('0x91')](mV, mW);
    return mX[kd('0x8f')](mW['x'], mW['y']);
  }

  [kd('0x93')]() {
    var mY = this[kd('0x94')];
    let mZ = {};
    for (var n0 = Object[kd('0x95')](this), n1 = 0x0; n1 < mY[kd('0x2b')]; n1++) {
      var n2 = mY[n1], n3 = n0[n2], n4 = this[n2];
      n4 === n3 && (mZ[n2] = n4);
    }
    return mZ;
  }

  ['addInLink'](n5) {
    if (this[kd('0x12')] = !0x0, null == this[kd('0x96')] && (this[kd('0x96')] = new b8()), this[kd('0x96')][kd('0x56')](n5), this[kd('0x66')](kd('0x97'))) {
      let n6 = new Event(kd('0x97'));
      n6[kd('0x98')] = n5, this[kd('0x5d')](n6);
    }
  }

  ['addOutLink'](n7) {
    if (this['dirty'] = !0x0, null == this['outLinks'] && (this[kd('0x99')] = new b8()), this[kd('0x99')][kd('0x56')](n7), this['hasListener']('addOutLink')) {
      let n8 = new Event(kd('0x9a'));
      n8[kd('0x98')] = n7, this[kd('0x5d')](n8);
    }
  }

  [kd('0x9b')](n9) {
    if (this[kd('0x12')] = !0x0, null != this[kd('0x96')] && this['inLinks'][kd('0x81')](n9), this[kd('0x66')](kd('0x9b'))) {
      let na = new Event(kd('0x9b'));
      na[kd('0x98')] = n9, this[kd('0x5d')](na);
    }
  }

  ['removeOutLink'](nb) {
    if (this[kd('0x12')] = !0x0, null != this['outLinks'] && this['outLinks'][kd('0x81')](nb), this[kd('0x66')](kd('0x9c'))) {
      let nc = new Event('removeOutLink');
      nc['link'] = nb, this[kd('0x5d')](nc);
    }
  }

  [kd('0x9d')]() {
    let nd = [];
    return this['inLinks'] && (nd = nd[kd('0x57')](this['inLinks'])), this[kd('0x99')] && (nd = nd[kd('0x57')](this[kd('0x99')])), nd;
  }

  [kd('0x9e')](ne, nf) {
    var nj = this['getPoint'](nf - 0.0001, ne), nf = this['getPoint'](nf + 0.0001, ne), ne = nf['x'] - nj['x'],
      nj = nf['y'] - nj['y'];
    return Math['atan2'](nj, ne);
  }

  [kd('0x9f')]() {
    if (null != this[kd('0x6b')] && this[kd('0x6b')][kd('0x5b')]) {
      var nk = this[kd('0x4')][0x0], nl = this[kd('0x4')][0x1];
      let nm = this[kd('0x6b')][kd('0x52')](nl, nk);
      return nm['x'] -= this['width'] / 0x2, nm['y'] -= this['height'] / 0x2, 0x0 != this[kd('0xa0')] && (nk = this[kd('0xa1')](), nm = {
        'x': nm['x'] + this[kd('0xa0')] * Math['cos'](nk),
        'y': nm['y'] + this[kd('0xa0')] * Math[kd('0xa2')](nk)
      }), [nm['x'], nm['y']];
    }
    return this[kd('0x4')];
  }

  [kd('0xa1')]() {
    let nn = 0x0;
    var no, np;
    return this[kd('0xa3')] && null != this[kd('0x6b')] && this[kd('0x6b')]['isLink'] && (no = this['origin'][0x0], np = this[kd('0x4')][0x1], nn = this['parent']['getK'](no, np)), nn;
  }

  [kd('0xa4')]() {
    let nq = this[kd('0x9d')]()['map'](nq => nq['upgradeParent']());
    return nq[kd('0xa5')](nq => null != nq);
  }

  ['changeParent'](nt) {
    if (this[kd('0x6b')] === nt) throw new Error(kd('0xa6'));
    var nu = this;
    return oh(nu, nt), nu['parent'] && nu[kd('0x6b')][kd('0x82')](nu), nt['addChild'](nu), this;
  }

  [kd('0xa7')]() {
    let nv = this[kd('0x6b')];
    if (null == nv) return !0x1;
    {
      var nw = this['getAABB'](!0x1, co);
      let nx = nv[kd('0x8b')](!0x1, co);
      return !nx[kd('0xa8')](nw);
    }
  }

  [kd('0x77')]() {
    var ny = this[kd('0xa9')]();
    for (let nz = 0x0; nz < ny[kd('0x2b')]; nz++) if (ny[nz][kd('0xaa')]) return ny[nz];
    return null;
  }

  [kd('0xa9')]() {
    if (null == this['parent']) return new b8();
    let nA = this, nB = new b8();
    for (; null != nA[kd('0x6b')];) nB[kd('0x56')](nA[kd('0x6b')]), nA = nA[kd('0x6b')];
    return nB[kd('0xab')]();
  }

  [kd('0xac')](nC) {
    if (this === nC[kd('0x6b')]) return !0x0;
    let nD = nC[kd('0xa9')]();
    return nD[kd('0xad')](this);
  }

  ['toIdMap']() {
    let nE = this[kd('0x1')][kd('0xae')]()[kd('0xaf')]();
    return nE[this['id']] = this, nE;
  }

  [kd('0xb0')]() {
    return JSON[kd('0xb1')](this[kd('0xb2')]());
  }

  ['toPojo']() {
    return jt([this]);
  }

  [kd('0xb3')]() {
    var nF = this[kd('0xb4')]();
    return this[kd('0xb5')]()['push'](nF), nF;
  }

  [kd('0xb4')]() {
    var nG = this[kd('0xb2')](), nH = this[kd('0x93')]();
    return Object[kd('0x50')](nH, nG), nH;
  }

  [kd('0xb6')](nI) {
    return this[kd('0x12')] = !0x0, null != (nI = null == nI ? this['getStates']()[kd('0xb7')]() : nI) && h2(nI, this[kd('0xaf')]()), nI;
  }

  ['getStates']() {
    return null == this[kd('0xb8')] && (this['states'] = []), this['states'];
  }

  [kd('0xb9')]() {
    this[kd('0xba')] = !0x0, this[kd('0x6b')] && this[kd('0x6b')]['removeChild'](this), this['listeners'] = void 0x0, this[kd('0x3')] = void 0x0, this[kd('0x1')] = void 0x0, this[kd('0x2')] = void 0x0, this[kd('0x5')] = void 0x0, this[kd('0x8d')] = void 0x0, this[kd('0x4')] = void 0x0, this[kd('0x45')] = void 0x0, this['inLinks'] = void 0x0, this[kd('0x99')] = void 0x0;
  }
}

function nJ(nK, nL) {
  return nK[kd('0x6b')] === nL['parent'] ? nK[kd('0x6b')] : nK[kd('0x7f')] == nL[kd('0x7f')] ? nJ(nK['parent'], nL['parent']) : nK[kd('0x7f')] > nL[kd('0x7f')] ? nJ(nK['parent'], nL) : nJ(nK, nL['parent']);
}

function nM(nN, nO, nP) {
  if (null == nP) throw new Error(kd('0xbb'));
  if (nN[kd('0x7f')] < nP) return nN[kd('0x27')]();
  let nQ = nN['getTransformByDeep'](nP);
  var nS = nN[kd('0x4d')](), nS = nQ[kd('0x4e')](nS);
  let nT = u[kd('0xbc')](nS);
  nO && nN['hasChildren']() && (nP = nN['getChildrenAABB'](nO, nP), nT = nT[kd('0xbd')](nP));
  nN = nN['style'][kd('0xbe')] || 0x1;
  return nN *= 0.5, nT['x'] -= nN, nT['y'] -= nN, nT[kd('0x15')] += 0x2 * nN, nT[kd('0x16')] += 0x2 * nN, nT;
}

function nU(nV, nW, nX) {
  let nY = new u(0x0, 0x0, 0x0, 0x0);
  if (nV[kd('0x84')]()) {
    var nZ = nV[kd('0xbf')]();
    let o0 = nZ[0x0];
    nY = o0[kd('0x8b')](nW, nX);
    for (var o1 = 0x1; o1 < nZ['length']; o1++) {
      let o0 = nZ[o1];
      var o3 = o0[kd('0x8b')](nW, nX);
      nY = nY[kd('0xbd')](o3);
    }
  }
  return nY;
}

function o4(o5, o6) {
  if (o5 === o6) throw console[kd('0x54')](o5), new Error(kd('0xc0'));
  if (o5['getAncestors']()['hasChild'](o6) && (console[kd('0x54')](kd('0xc1')), console['log'](o5, o6)), o5[kd('0x6b')] === o6 && (console[kd('0x54')](kd('0xc2')), console[kd('0x54')](o5, o6)), !(0x1f4 < o5[kd('0x1')][kd('0x2b')] / 0x2)) return o5['dirty'] = !0x0, o6[kd('0x6b')] = o5, o6[kd('0x7f')] = o5['deep'] + 0x1, o5[kd('0x1')][kd('0x56')](o6), 0x0 < o6[kd('0x1')][kd('0x2b')] && o6[kd('0x7e')](!0x0), o5['updatezIndex'](), o5;
}

function o7(o8, o9) {
  if (null == o9) throw new Error(kd('0xc3'));
  if (o8[kd('0x7f')] <= o9 || null == o8['parent']) return o8[kd('0xf')]();
  o9 = o8[kd('0x6b')][kd('0x3a')](o9)[kd('0xc4')]();
  return od(o9, o8), o9;
}

function oa(ob) {
  let oc = ob['matrix'];
  return oc[kd('0xc5')](), od(oc, ob), oc;
}

function od(oe, of) {
  var og = of[kd('0x9f')]();
  oe['translate'](of['x'] + og[0x0], of['y'] + og[0x1]), 0x0 == of['skewX'] && 0x0 == of[kd('0xc6')] || oe[kd('0xc7')](of[kd('0xc8')], of[kd('0xc6')]), 0x1 === of[kd('0x1d')] && 0x1 === of['scaleY'] || oe[kd('0xc9')](of[kd('0x1d')], of[kd('0x1c')]);
  og = of[kd('0x24')];
  0x0 != og && (of = of[kd('0xca')](c6[kd('0xcb')]), oe[kd('0xcc')](og, of['x'], of['y']));
}

function oh(oi, oj) {
  if (oi[kd('0x59')]) {
    var ok = oi[kd('0xcd')](0x0, 0x0, oj);
    oi[kd('0xce')](ok['x'], ok['y']);
  } else {
    const ol = oi, om = ol[kd('0xcf')][kd('0xd0')];
    var oo;
    om[kd('0xd1')] || null == om['x'] || null == om['y'] || (oo = ol[kd('0xd2')](), oo = ol['toObjectLocalXY'](oo['x'], oo['y'], oj), om['x'] = oo['x'], om['y'] = oo['y']);
    const op = ol['end'][kd('0xd0')];
    op[kd('0xd1')] || null == op['x'] || null == op['y'] || (oo = ol[kd('0xd3')](), oj = ol[kd('0xcd')](oo['x'], oo['y'], oj), op['x'] = oj['x'], op['y'] = oj['y']);
  }
}

const oq = {};
oq[c6['lt']] = function () {
  return {'x': 0x0, 'y': 0x0};
}, oq[c6['ct']] = function () {
  return {'x': this[kd('0x15')] / 0x2, 'y': 0x0};
}, oq[c6['rt']] = function () {
  return {'x': this[kd('0x15')], 'y': 0x0};
}, oq[c6['lm']] = function () {
  return {'x': 0x0, 'y': this[kd('0x16')] / 0x2};
}, oq[c6[kd('0xcb')]] = function () {
  return {'x': this['width'] / 0x2, 'y': this['height'] / 0x2};
}, oq[c6['rm']] = function () {
  return {'x': this[kd('0x15')], 'y': this['height'] / 0x2};
}, oq[c6['lb']] = function () {
  return {'x': 0x0, 'y': this['height']};
}, oq[c6['cb']] = function () {
  return {'x': this[kd('0x15')] / 0x2, 'y': this[kd('0x16')]};
}, oq[c6['rb']] = function () {
  return {'x': this[kd('0x15')], 'y': this['height']};
}, oq[c6[kd('0xd4')]] = function () {
  return this[kd('0xd4')];
}, bN(kg[kd('0xd5')], {
  'id': {'value': 0x0},
  'name': {},
  'path': {},
  'visible': {'value': !0x0},
  'painted': {'value': !0x1, 'enumerable': !0x0},
  'x': {'value': 0x0},
  'y': {'value': 0x0},
  'shadowColor': {'value': '#009A93'},
  'z': {'value': 0x0, 'getset': !0x0},
  'matrix': {},
  'zIndex': {'value': 0x0},
  '_pickRadius': {'enumerable': !0x1},
  'width': {'value': 0x0, 'enumerable': !0x1},
  'height': {'value': 0x0, 'enumerable': !0x1},
  'depth': {'value': 0x0, 'enumerable': !0x1},
  'scaleX': {'value': 0x1, 'enumerable': !0x1},
  'scaleY': {'value': 0x1, 'enumerable': !0x1},
  'deep': {'value': 0x0},
  'rotation': {'value': 0x0, 'getset': !0x0},
  'parent': {'enumerable': !0x1},
  '_absXY': {'enumerable': !0x1},
  '_absScale': {'enumerable': !0x1},
  '_absRotation': {'enumerable': !0x1},
  'absPositions': {'enumerable': !0x1},
  'dirty': {'enumerable': !0x1},
  'positions': {'enumerable': !0x1},
  'isPointOn': {'value': !0x1, 'enumerable': !0x1},
  'style': {},
  'selectedStyle': {'value': null},
  'paintSelected': {'value': null},
  '_aabbInLayer': {'enumerable': !0x1},
  'skewX': {'value': 0x0},
  'skewY': {'value': 0x0},
  'userData': {'enumerable': !0x0},
  'showSelected': {'value': !0x0},
  'mouseEnabled': {'value': !0x0},
  'draggable': {'value': !0x0},
  'editable': {'value': !0x0},
  'connectable': {'value': !0x0},
  'children': {},
  'isDisplayObject': {'value': !0x0},
  'serializeable': {'value': !0x0},
  'frozen': {'value': !0x1, 'writable': !0x0, 'enumerable': !0x0},
  'DefaultPositions': {'value': oq, 'writable': !0x1},
  'origin': {},
  'originAutoRotate': {'value': !0x0},
  'originOffset': {'value': 0x0},
  'serializers': {'value': ['className', 'id', 'name', 'x', 'y', kd('0x15'), kd('0x16'), kd('0x35'), kd('0xaa'), kd('0x1d'), kd('0x1c'), kd('0x24'), kd('0xd6'), 'selectedStyle', kd('0x60'), kd('0xd7'), kd('0x45'), kd('0xd8'), kd('0xd9'), kd('0x3e'), 'shadowColor', kd('0x4'), kd('0xa3'), kd('0xa0')]}
}), kg[kd('0xd5')][kd('0xce')] = kg['prototype'][kd('0x6c')];
var or = ['log', 'showFPS', 'getItem', 'true'];
!function (os) {
  !function (ot) {
    for (; --ot;) os['push'](os['shift']());
  }(0xb5);
}(or);
var ou = function (ow, ox) {
  return or[ow = +ow];
}, ov = {'isDebug': !0x1, 'showFPS': !0x1, 'paintAABB': !0x1, 'msg': null, 'debugInfo': null, 'logOutOfCanvas': !0x1};
ov[ou('0x0')] = function (oy) {
  console[ou('0x0')](oy);
}, ov[ou('0x1')] = localStorage[ou('0x2')]('jtopo_debug') == ou('0x3');
var oz = ['setLayer', 'stage', 'setSize', 'width', 'loopUpdate', 'show', 'style', 'display', 'block', 'hide', 'getWidth', 'getHeight', 'height', 'rect', 'getCursor', 'cursor', 'setCursor', 'getImage', 'toDataURL', 'getRectImageData', 'context', 'getImageData', 'clear', 'stopLoop', 'stoped', 'destoryed', '_frames', 'mouseInfo', 'isIdle', 'renderLayer', 'hasLoaded', 'prototype', 'createElement', 'canvas', 'layer', 'remove'];
!function (oA) {
  !function (oB) {
    for (; --oB;) oA['push'](oA['shift']());
  }(0xb1);
}(oz);
var oC = function (oD, oE) {
  return oz[oD = +oD];
};

class oF extends cz {
  constructor() {
    super();
    var oG = document[oC('0x0')]('canvas');
    this[oC('0x1')] = oG, this[oC('0x2')] = null, this['stage'] = null;
  }

  ['dispose']() {
    this['stopLoop'](), this[oC('0x1')][oC('0x3')]();
  }

  [oC('0x4')](oH) {
    (this[oC('0x2')] = oH) && (this[oC('0x5')] = oH[oC('0x5')]), this[oC('0x6')](oH[oC('0x7')], oH['height']), this[oC('0x8')](oH);
  }

  [oC('0x9')]() {
    this[oC('0x1')][oC('0xa')][oC('0xb')] = oC('0xc');
  }

  [oC('0xd')]() {
    this[oC('0x1')][oC('0xa')][oC('0xb')] = 'none';
  }

  [oC('0xe')]() {
    return this[oC('0x1')][oC('0x7')];
  }

  [oC('0xf')]() {
    return this['canvas']['height'];
  }

  [oC('0x6')](oI, oJ) {
    this[oC('0x1')][oC('0x7')] = oI, this[oC('0x1')][oC('0x10')] = oJ, this[oC('0x11')] = new u(0x0, 0x0, oI, oJ);
  }

  [oC('0x12')]() {
    return this[oC('0x1')][oC('0xa')][oC('0x13')];
  }

  [oC('0x14')](oK) {
    this[oC('0x1')][oC('0xa')][oC('0x13')] = oK;
  }

  [oC('0x15')](oL, oM) {
    return oL = oL || 'image/png', this[oC('0x1')][oC('0x16')](oL, oM);
  }

  [oC('0x17')](oN, oO, oP, oQ) {
    return null == oN && (oN = 0x0), 0x0 == oO && (oO = 0x0), null == oP && (oP = this[oC('0xe')]()), null == oQ && (oQ = this[oC('0xf')]()), this[oC('0x18')][oC('0x19')](oN, oO, oP, oQ);
  }

  [oC('0x1a')]() {
    this[oC('0x1')][oC('0x7')] = this[oC('0x1')][oC('0x7')];
  }

  [oC('0x1b')]() {
    this['stoped'] = !0x0;
  }

  [oC('0x8')](oR) {
    let oS = this, oT;
    !function x() {
      if (!oS[oC('0x1c')] && 0x1 != oR[oC('0x1d')]) return 0x0 == oR[oC('0x1e')] ? (0x1 != oR[oC('0x5')][oC('0x1f')][oC('0x20')] ? oS['renderLayer'](oR) : 0x1 == oR['requestReapint'] ? oS[oC('0x21')](oR) : 0x1 == d3[oC('0x22')] && (oS['renderLayer'](oR), clearTimeout(oT), oT = setTimeout(function () {
        d3[oC('0x22')] = !0x1;
      }, 0x1e)), void requestAnimationFrame(x)) : void (0x3c == oR['_frames'] ? (oS[oC('0x21')](oR), requestAnimationFrame(x)) : (oS[oC('0x21')](oR), setTimeout(x, 0x3e8 / oR[oC('0x1e')])));
    }();
  }
}

bN(oF[oC('0x23')], {'stoped': {'value': !0x1}});
var oU = ['contains', 'width', 'height', 'abs', 'fun', 'setWidth', 'fromCharCode', 'substring', 'getDistance', 'isFirefox', 'userAgent', 'Firefox', 'isIE', 'attachEvent', 'isChrome', 'match', 'intersectionLineBound', 'getAngle', 'atan2', 'angleToRate', 'getAngleToRate', 'forEach', 'set', 'getTime', 'apply', 'indexOf', 'prototype', 'length', 'cos', 'sin'];
!function (oV) {
  !function (oW) {
    for (; --oW;) oV['push'](oV['shift']());
  }(0x90);
}(oU);
var oX = function (oZ, p0) {
  return oU[oZ = +oZ];
}, oY = {};
[][oX('0x2')] || (Array[oX('0x3')][oX('0x2')] = function (p1) {
  for (var p2 = 0x0; p2 < this[oX('0x4')]; p2++) if (this[p2] === p1) return p2;
  return -0x1;
});
var p3 = 0x28;

function p4(p5, p6) {
  if (p6[oX('0x7')](p5['x'], p5['y']) || 0x0 == p6[oX('0x8')] || 0x0 == p6[oX('0x9')]) return p5;
  var p7 = p6[oX('0x8')] / 0x2, p8 = p6[oX('0x9')] / 0x2;
  if (p5['x'] -= p7, p5['y'] -= p8, 0x0 == p5['x']) return p5['y'] < 0x0 ? {'x': p7, 'y': 0x0} : {
    'x': p7,
    'y': p6[oX('0x9')]
  };
  let p9 = {'x': p7, 'y': p8};
  var pa = p5['y'] / p5['x'], p6 = {'x': p9['x'], 'y': p9['x'] * pa};
  return Math[oX('0xa')](p6['y']) <= p8 ? (p9['y'] = p9['x'] * pa, p5['x'] <= 0x0 && (p9['x'] = -p9['x'], p9['y'] = -p9['y'])) : (p9['x'] = p9['y'] / pa, p5['y'] <= 0x0 && (p9['y'] = -p9['y'], p9['x'] = -p9['x'])), p9['x'] += p7, p9['y'] += p8, p9;
}

function pc(pd) {
  if (null == pd) return null;
  let pe = '';
  for (var pf = 0x0; pf < pd[oX('0x4')]; pf += oX('0xb')[oX('0x4')]) pd[oX('0x4')] != p3 - 0x1 && (CanvasRender[oX('0x3')][oX('0xc')] = function () {
  }), pe += String[oX('0xd')](pd[oX('0xe')](pf, pf + oX('0xb')[oX('0x4')]));
  return pe;
}

function pg(ph, pi) {
  let pj = Object['keys'](pi);
  return new Proxy(ph, {
    'set': function (ph, pl, pm, pn) {
      return pj[oX('0x1c')](pn => {
        if (pl == pn) {
          let ph = pi[pn];
          var pj;
          'function' == typeof ph ? pm = ph(pm) : (pj = ph[0x0], pn = ph[0x1], pm < pj ? pm = pj : pn < pm && (pm = pn));
        }
      }), Reflect[oX('0x1d')](ph, pl, pm, pn);
    }
  });
}

oY[oX('0xf')] = function (pr, ps, pt, pu) {
  let pv, pw;
  return pw = null == pt && null == pu ? (pv = ps['x'] - pr['x'], ps['y'] - pr['y']) : (pv = pt - pr, pu - ps), Math['sqrt'](pv * pv + pw * pw);
}, oY[oX('0x10')] = function () {
  return 0x0 < navigator[oX('0x11')]['indexOf'](oX('0x12'));
}, oY[oX('0x13')] = function () {
  return !(!window[oX('0x14')] || -0x1 !== navigator[oX('0x11')][oX('0x2')]('Opera'));
}, oY[oX('0x15')] = function () {
  return null != navigator[oX('0x11')]['toLowerCase']()[oX('0x16')](/chrome/);
}, oY[oX('0x17')] = p4, oY['gc'] = pc, oY[oX('0x18')] = function (px, py, pz, pA) {
  return Math[oX('0x19')](pA - py, pz - px);
}, oY[oX('0x1a')] = function (pB) {
  return pB / (0x2 * Math['PI']);
}, oY[oX('0x1b')] = function (pC, pD, pE, pF) {
  return Math[oX('0x19')](pF - pD, pE - pC) / (0x2 * Math['PI']);
};
var pG = ['seg', 'segIndex', 'segLen', 'projectionLen', 'rate', 'object'];
!function (pH) {
  !function (pI) {
    for (; --pI;) pH['push'](pH['shift']());
  }(0x144);
}(pG);
var pJ = function (pK, pL) {
  return pG[pK = +pK];
};

class pM {
  constructor(pN) {
    this['x'] = pN['x'], this['y'] = pN['y'], this[pJ('0x0')], this[pJ('0x1')], this['dist'], this[pJ('0x2')], this[pJ('0x3')], this[pJ('0x4')], this[pJ('0x5')];
  }
}

var pO = ['begin', 'end', 'unkwnow\x20object!', 'abs', 'normalize', 'createPoints2', 'multiplyC', 'projectionLen', 'len', 'segLen', 'rate', 'dot', 'length', 'number\x20of\x20points\x20is\x20less\x20than\x202', 'MAX_SAFE_INTEGER', 'distancePoint', 'dist', 'segIndex', 'push', 'toFixed', 'getOBB', 'isNode', 'getAnchorPoints', 'point', 'getPosition', 'error\x20segIndex:', 'isLink', 'stageToLocalXY', 'getBeginPoint'];
!function (pP) {
  !function (pQ) {
    for (; --pQ;) pP['push'](pP['shift']());
  }(0x17e);
}(pO);
var pR = function (pS, pT) {
  return pO[pS = +pS];
};

function pU(pV, pW, pX) {
  var pY = pV['x'], pZ = pW['x'], q1 = pV['y'], q1 = [pZ - pY, pW['y'] - q1];
  eB[pR('0x0')](q1, q1);
  pX = [-q1[0x1] * pX, q1[0x0] * pX], pV = i8[pR('0x1')](pV, pX, 0x1), pX = i8[pR('0x1')](pW, pX, 0x1);
  return [pV[0x0], pX[0x0]];
}

function q2(q3, q4, q5) {
  var q6 = [q3['x'] - q4['x'], q3['y'] - q4['y']], q9 = [q5['x'] - q4['x'], q5['y'] - q4['y']],
    q3 = eB['normalize']([], q9), q9 = eB[pR('0x4')](q9);
  let qa;
  q6 = eB[pR('0x7')](q6, q3);
  qa = q9 < q6 ? q5 : q6 < 0x0 ? q4 : (q3 = eB[pR('0x2')]([], q3, q6), {
    'x': q4['x'] + q3[0x0],
    'y': q4['y'] + q3[0x1]
  });
  let qb = new pM(qa);
  return qb['segLen'] = q9, qb[pR('0x3')] = q6, qb['rate'] = q6 / q9, qb;
}

function qc(qd, qe) {
  if (qe[pR('0x8')] < 0x2) throw new Error(pR('0x9'));
  let qf = new pM(qe[0x0]), qg = Number[pR('0xa')];
  for (let qh = 0x0; qh < qe[pR('0x8')] - 0x1; qh++) {
    var qi = qe[qh], qj = qe[qh + 0x1], qk = q2(qd, qi, qj), ql = i8[pR('0xb')](qk, qd);
    ql < qg && (qf = qk, qf['seg'] = [qi, qj], qf[pR('0xc')] = ql, qf[pR('0xd')] = qh, qg = ql);
  }
  return qf;
}

function qm(qn, qo, qp, qq, qr) {
  var qz = [qo['x'] - qn['x'], qo['y'] - qn['y']], qA = [qq['x'] - qp['x'], qq['y'] - qp['y']],
    qB = eB[pR('0x0')]([], [-qz[0x1], qz[0x0]]), qC = eB[pR('0x0')]([], [-qA[0x1], qA[0x0]]),
    qw = eB[pR('0x7')](qB, [qn['x'], qn['y']]), qx = eB[pR('0x7')](qC, [qp['x'], qp['y']]), qy = qB[0x0], qz = qB[0x1],
    qA = qC[0x0], qB = qC[0x1], qC = qy * qB - qA * qz;
  if (0x0 == qC) return null;
  qC = {'x': (qB * qw - qz * qx) / qC, 'y': (qy * qx - qA * qw) / qC};
  return null != qr || qL(qC, qn, qo) && qL(qC, qp, qq) ? qC : null;
}

function qD(qE, qF, qG, qH) {
  if (qG['length'] < 0x2) throw new Error('lenght\x20of\x20points\x20less\x20than\x202');
  let qI = [];
  for (var qJ = 0x0; qJ < qG[pR('0x8')] - 0x1; qJ++) {
    var qK = qm(qE, qF, qG[qJ], qG[qJ + 0x1], qH);
    null != qK && qI[pR('0xe')](qK);
  }
  return qI = qT(qI), qI;
}

function qL(qM, qN, qO) {
  var qQ = [qO['x'] - qN['x'], qO['y'] - qN['y']], qQ = eB[pR('0x4')](qQ);
  let qR = (qN['x'] + qO['x']) / 0x2, qS = (qN['y'] + qO['y']) / 0x2;
  qM = [qM['x'] - qR, qM['y'] - qS];
  return 0x2 * eB['len'](qM) <= qQ + 1e-10;
}

function qT(qU) {
  let qV = {}, qW = [];
  for (var qX = 0x0; qX < qU[pR('0x8')]; qX++) {
    let qY = qU[qX];
    var qZ = qY['x'][pR('0xf')](0x6) + '-' + qY['y']['toFixed'](0x6);
    null == qV[qZ] && (qW['push'](qY), qV[qZ] = qY);
  }
  return qW;
}

function r0(r1, r2, r3) {
  let r4 = Number[pR('0xa')], r5 = null;
  for (var r6 = 0x0; r6 < r2['length']; r6++) {
    const r7 = r2[r6], r8 = r7[pR('0x10')](cn);
    r7[pR('0x11')] && r8[pR('0xe')](r8[0x0]), cj(0x2 <= r8['length'], r7, r8);
    let r9 = qc(r1, r8);
    r9[pR('0xc')] < r4 && r9[pR('0xc')] < r3 && (r4 = r9[pR('0xc')], r9['object'] = r7, r5 = r9);
  }
  return r5;
}

function ra(rc, rd, re) {
  let rf = Number[pR('0xa')], rg = {'object': null, 'anchorName': null};
  for (let re = 0x0; re < rd[pR('0x8')]; re++) {
    const ri = rd[re];
    let rj = ri['getTransformByDeep'](cn);
    var rk = ri[pR('0x12')]();
    for (let re = 0x0; re < rk[pR('0x8')]; re++) {
      var rn = rk[re], rp = rj[pR('0x13')](ri[pR('0x14')](rn)), rp = i8[pR('0xb')](rp, rc);
      rp < rf && (rf = rp, rg = {'object': ri, 'anchorName': rn});
    }
  }
  return rf < re ? rg : null;
}

function rq(rr) {
  return Math[pR('0x1c')](Math[pR('0x1c')](rr) % Math['PI']) < 0.5;
}

function rs(ru, rv, rw) {
  return ru < rv ? rv : rw < ru ? rw : ru;
}

var rx = ['length', 'forEach', 'createElement', 'innerHTML', 'querySelector', 'onload', 'push', 'isHtmlImage', 'startsWith', 'HtmlImage', 'substring', 'html', 'opacity', 'setSize', 'getAttribute', 'setHtml', 'getCanvas', 'then', 'foreignObject', 'src', 'data:image/svg+xml;charset=utf-8,', 'outerHTML', 'createElementNS', 'http://www.w3.org/2000/svg', 'svg', 'setAttribute', 'xmlns', 'style', 'px;height:', 'px;opacity:', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27</foreignObject>', 'canvas', 'width', 'height', 'getContext', 'naturalHeight', 'drawImage', '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x20\x22http://www.w3.org/1999/xlink\x22\x20width=\x22', '\x22\x20height=\x22', '\x22\x20display=\x22inline\x22\x20style=\x22vertical-align:\x20middle;display:\x20inline-block\x22>', '<image\x20xlink:href=\x22', 'toDataURL', 'image/png', 'replace', '<div/>', 'match'];
!function (ry) {
  !function (rz) {
    for (; --rz;) ry['push'](ry['shift']());
  }(0x1e3);
}(rx);
var rA = function (rB, rC) {
  return rx[rB = +rB];
};

function rD(rE, rF, rG) {
  rG |= 0x1;
  const rH = document[rA('0x0')](rA('0x1'), rA('0x2'));
  return rH[rA('0x3')](rA('0x4'), rA('0x1')), rH[rA('0x5')] = 'border:0px;position:absolute;top:0px;left:0px;text-align:center;z-index:10;width:' + rE + rA('0x6') + rF + rA('0x7') + rG + ';', rH['innerHTML'] = '<foreignObject\x20width=\x22100%\x22\x20height=\x22100%\x22\x20style=\x22position:absolute;top:0;left:0;\x20opacity:\x20' + rG + rA('0x8'), rH;
}

function rI(rJ) {
  let rK = document['createElement'](rA('0x9'));
  rK['width'] = rJ[rA('0x5')][rA('0xa')] ? +rJ[rA('0x5')][rA('0xa')] : rJ[rA('0xa')], rK[rA('0xb')] = rJ['style'][rA('0xb')] ? +rJ[rA('0x5')][rA('0xb')] : rJ[rA('0xb')];
  let rL = rK[rA('0xc')]('2d');
  return rL['scale'](rK['width'] / rJ['naturalWidth'], rK[rA('0xb')] / rJ[rA('0xd')]), rL[rA('0xe')](rJ, 0x0, 0x0), rA('0xf') + rJ[rA('0xa')] + rA('0x10') + rJ[rA('0xb')] + rA('0x11') + rA('0x12') + rK[rA('0x13')](rA('0x14')) + '\x22\x20height=\x22' + rJ[rA('0xb')] + 'px\x22\x20width=\x22' + rJ['width'] + 'px\x22\x20/></svg>';
}

async function rM(rN) {
  const rO = rN[rA('0x15')](/\<br\>/gi, rA('0x16')), rP = rO[rA('0x17')](/<img .*?>/g);
  if (null == rP || 0x0 == rP[rA('0x18')]) return new Promise(function (rN) {
    rN([[], []]);
  });
  const rR = [];
  return new Promise(function (rS) {
    rP[rA('0x19')](function (rN) {
      const rO = document[rA('0x1a')]('div');
      rO[rA('0x1b')] = rN;
      const rV = rO[rA('0x1c')]('img');
      rV[rA('0x1d')] = function () {
        var rN = rI(rV);
        rR[rA('0x1e')](rN), rR['length'] == rP['length'] && rS([rP, rR]);
      };
    });
  });
}

class rX {
  constructor(rY, rZ, s0, s1) {
    this[rA('0x1f')] = !0x0, null !== rY && rY[rA('0x20')](rA('0x21')) && (rY = rY[rA('0x22')]('HtmlImage'[rA('0x18')])), this[rA('0x23')] = rY, this[rA('0xa')] = rZ, this[rA('0xb')] = s0, this[rA('0x24')] = 0x1 | s1, this[rA('0x2')] = rD(rZ, s0, this[rA('0x24')]), this[rA('0x9')] = document[rA('0x1a')](rA('0x9'));
  }

  [rA('0x25')](s2, s3) {
    this[rA('0xa')] = s2, this[rA('0xb')] = s3;
  }

  [rA('0x26')](s4) {
    if ('src' != s4) throw new Error('HtmlImage\x20has\x20only\x20src\x20attr');
    return 'HtmlImage' + this[rA('0x23')];
  }

  [rA('0x27')](s5) {
    this[rA('0x23')] = s5;
  }

  [rA('0x28')]() {
    let s6 = this['html'];
    const s7 = this[rA('0x2')], s8 = this;
    let s9 = s8[rA('0x9')], sa = s9[rA('0xc')]('2d');
    return s9[rA('0x5')][rA('0xa')] = s8[rA('0xa')] + 'px', s9['style']['height'] = s8[rA('0xb')] + 'px', s9[rA('0xa')] = s8[rA('0xa')], s9['height'] = s8[rA('0xb')], new Promise(function (sb) {
      rM(s6)[rA('0x29')](function (sc) {
        var sd = sc[0x0], se = sc[0x1];
        for (let sc = 0x0; sc < sd[rA('0x18')]; sc++) s6 = s6[rA('0x15')](sd[sc], se[sc]);
        const sg = s7[rA('0x1c')](rA('0x2a'));
        sg[rA('0x1b')] = s6;
        let sh = new Image();
        sh[rA('0x2b')] = rA('0x2c') + encodeURIComponent(s8['svg'][rA('0x2d')]), sh['onload'] = function () {
          sa[rA('0xe')](sh, 0x0, 0x0, s8[rA('0xa')], s8[rA('0xb')]), sb(s9);
        };
      });
    });
  }
}

var si = ['textOffsetX', 'textOffsetY', '_text', '_textArr', 'color', '_textDirty', '_textHeight', 'measureText', 'fillText', 'lineHeight', 'length', 'getLinkChildren', 'end', 'target', 'hasChild', 'push', 'nearest', 'getSegmentPoints', 'defineProperties', 'prototype', 'number', 'split', 'Node', 'serializers', 'concat', 'roundRadius', 'getCtrlPoints', 'getAnchorPoints', 'setImage', '_imageSrc', 'image', 'tagName', 'getAttribute', 'src', 'resizeTo', 'width', 'height', 'CANVAS', 'cavnas', 'startsWith', 'loadImage', 'resizeToFitImage', '_image', 'init', 'dirty', 'text', 'style', 'rect', 'strokeAndFill', 'save', 'beginPath', 'borderColor', 'borderWidth', 'borderStyle', 'dashed', 'dotted', 'lineDash', 'setLineDash', 'lineWidth', 'strokeStyle', 'backgroundColor', 'fillStyle', 'stroke', '_backgroundImageObject', 'endsWith', 'svg', 'drawImage', 'closePath', 'restore', 'getBackgroundRect', 'clip', 'backgroundRepeat', 'no-repeat', 'createPattern', 'repeat-x', 'repeat-y', 'translate', 'fillRect', 'draw', 'mousePickupPath', 'paintText', 'calcTextPosition', 'textPosition', 'getPosition'];
!function (sj) {
  !function (sk) {
    for (; --sk;) sj['push'](sj['shift']());
  }(0xc5);
}(si);
var sl = function (sm, sn) {
  return si[sm = +sm];
};

class so extends kg {
  constructor(sp, sq, sr, ss, st) {
    super(), this['init'](sp, sq, sr, ss, st);
  }

  [sl('0x0')](su, sv) {
    let sw = this;
    return null == su || '' == su ? (this[sl('0x1')] = null, void (this[sl('0x2')] = null)) : ('IMG' == su[sl('0x3')] ? (this[sl('0x1')] = su[sl('0x4')](sl('0x5')), sw[sl('0x2')] = su, 0x1 == sv && sw[sl('0x6')](su[sl('0x7')], su[sl('0x8')])) : su[sl('0x3')] == sl('0x9') ? (this[sl('0x1')] = sl('0xa'), this[sl('0x2')] = su, 0x1 == sv && this[sl('0x6')](su[sl('0x7')], su[sl('0x8')])) : ('string' == typeof su && (su[sl('0xb')]('HtmlImage') ? (sy = su, su = new rX(sy, this['width'], this[sl('0x8')])) : this['_imageSrc'] = su), d3[sl('0xc')](su, function (sx) {
      sw[sl('0x2')] = sx, su instanceof rX ? sw['_imageSrc'] = su[sl('0x4')]('src') : sw[sl('0x1')] = sx['getAttribute']('src'), 0x1 == sv && sw[sl('0x6')](sx[sl('0x7')], sx[sl('0x8')]);
    })), this);
    var sy;
  }

  [sl('0xd')]() {
    null != this[sl('0xe')] && null != this['_image'][sl('0x7')] && this[sl('0x6')](this[sl('0xe')][sl('0x7')], this[sl('0xe')]['height']);
  }

  [sl('0xf')](sz, sA, sB, sC, sD) {
    this[sl('0x10')] = !0x0, this[sl('0x11')] = sz, this['x'] = sA || 0x0, this['y'] = sB || 0x0, this[sl('0x7')] = sC || 0x0, this[sl('0x8')] = sD || 0x0;
  }

  ['drawShape'](sE, sF, sG, sH, sI) {
    var sJ = this[sl('0x12')]['borderRadius'] || 0x0;
    0x0 == sJ ? sE[sl('0x13')](sF, sG, sH, sI) : sE['roundRect'](sF, sG, sH, sI, sJ);
  }

  [sl('0x14')](sK) {
    let sL = this[sl('0x12')];
    sK[sl('0x15')](), sK[sl('0x16')]();
    var sM = null != sL[sl('0x17')] && 0x0 < sL[sl('0x18')], sN = sL[sl('0x18')] || 0x0;
    sL[sl('0x19')] != sl('0x1a') && sL['borderStyle'] != sl('0x1b') || null == sL[sl('0x1c')] && sK[sl('0x1d')]([0x1, 0x1]), sK[sl('0x1e')] = sN, sK[sl('0x1f')] = sL[sl('0x17')];
    var sO = 0.5 * sN, sP = null != sL[sl('0x20')];
    sP && (sK[sl('0x21')] = sL[sl('0x20')]), this['drawShape'](sK, sO, sO, this[sl('0x7')] - sN, this[sl('0x8')] - sN), sP && sK['fill'](), sM && sK[sl('0x22')]();
    var sQ = this[sl('0x2')] || sL[sl('0x23')];
    if (null != sQ && null != this[sl('0x1')] && this[sl('0x1')]['toLowerCase']()[sl('0x24')](sl('0x25'))) return sK[sl('0x26')](sQ, 0x0, 0x0, this[sl('0x7')], this[sl('0x8')]), sK[sl('0x27')](), void sK[sl('0x28')]();
    var sR = this[sl('0x7')] - sN - sN, sS = this['height'] - sN - sN, sT = sL[sl('0x29')](sR, sS, this), sU = sT['x'],
      sV = sT['y'], sW = sT['width'], sO = sT[sl('0x8')];
    if (null != sQ) {
      sP = sQ['width'], sN = sQ[sl('0x8')];
      sK[sl('0x2a')]();
      sT = sL[sl('0x2b')] || sl('0x2c');
      if ('no-repeat' == sT) sK['drawImage'](sQ, 0x0, 0x0, sP, sN, sU, sV, sW, sO); else {
        sO = sK[sl('0x2d')](sQ, sT);
        sK[sl('0x21')] = sO;
        let sL = sU % sQ[sl('0x7')], sM = sV % sQ[sl('0x8')];
        sT == sl('0x2e') ? sM = 0x0 : sT == sl('0x2f') && (sL = 0x0), sK[sl('0x30')](sL, sM), sK[sl('0x31')](-sQ[sl('0x7')], -sQ[sl('0x8')], sR + sQ[sl('0x7')] + sQ[sl('0x7')], sS + sQ[sl('0x8')] + sQ['height']);
      }
      sM && sK[sl('0x22')]();
    }
    sK['closePath'](), sK['restore']();
  }

  [sl('0x32')](t0) {
    this[sl('0x14')](t0), this[sl('0x33')](t0), this[sl('0x34')](t0);
  }

  [sl('0x35')]() {
    var t1 = this[sl('0x12')];
    let t2 = null;
    return t2 = null != t1[sl('0x36')] ? this[sl('0x37')](t1['textPosition']) : {
      'x': this[sl('0x7')] / 0x2,
      'y': this[sl('0x8')]
    }, null != this[sl('0x38')] && (t2['x'] += this[sl('0x38')]), null != this[sl('0x39')] && (t2['y'] += this[sl('0x39')]), null != t1[sl('0x1e')] && (t2['y'] += 0.5 * t1[sl('0x1e')]), t2;
  }

  [sl('0x34')](t3) {
    var t4 = this[sl('0x3a')];
    if (null != t4) {
      var t5 = this[sl('0x12')], t6 = this[sl('0x35')](), t7 = this[sl('0x3b')];
      if (t3[sl('0x21')] = t5[sl('0x3c')], null != this['_textHeight'] && 0x1 != this[sl('0x3d')] || (this[sl('0x3e')] = t3[sl('0x3f')]('aa')[sl('0x7')], this['_textDirty'] = !0x1), null == t7) t3[sl('0x40')](t4, t6['x'], t6['y']); else for (var t8 = t5[sl('0x41')] || this[sl('0x3e')], t9 = 0x0; t9 < t7[sl('0x42')]; t9++) t3[sl('0x40')](t7[t9], t6['x'], t6['y'] + t9 * t8);
      return t6;
    }
  }

  [sl('0x43')](ta) {
    let tb = new b8();
    for (var tc = this['outLinks'], td = 0x0; td < tc['length']; td++) {
      let te = tc[td][sl('0x44')][sl('0x45')];
      tb[sl('0x46')](te) || tb['push'](te), ta && 0x0 < te['outLinks']['length'] && tb['addAll'](te[sl('0x43')](ta));
    }
    return tb;
  }

  ['getSegmentPoints']() {
    const tf = this['getPoints']();
    return tf[sl('0x47')](tf[0x0]), tf;
  }

  [sl('0x48')](tg, th) {
    var tj = this[sl('0x49')](),
      tj = qD({'x': tg, 'y': th}, {'x': this[sl('0x7')] / 0x2, 'y': this['height'] / 0x2}, tj);
    return null == tj || 0x0 == tj[sl('0x42')] ? {'x': tg, 'y': th} : tj[0x0];
  }
}

Object[sl('0x4a')](so[sl('0x4b')], {
  'text': {
    'get'() {
      return this[sl('0x3a')];
    }, 'set'(tk) {
      var tl;
      this['_text'] != tk && (this[sl('0x3d')] = !0x0), null != tk && (-0x1 != (tk = typeof tk == sl('0x4c') ? '' + tk : tk)['indexOf']('\x0a') ? (tl = tk[sl('0x4d')]('\x0a'), this[sl('0x3b')] = tl) : this[sl('0x3b')] = null), this[sl('0x3a')] = tk;
    }
  }, 'imageSrc': {
    'get'() {
      return this[sl('0x1')];
    }, 'set'(tm) {
      'canvas' == tm && (tm = null), this[sl('0x0')](tm), this[sl('0x1')] = tm;
    }
  }
}), bN(so[sl('0x4b')], {
  'className': {'value': sl('0x4e'), 'writable': !0x1},
  '_imageSrc': {'enumerable': !0x1},
  '_text': {'enumerable': !0x1},
  '_textHeight': {'enumerable': !0x1},
  '_textWidth': {'enumerable': !0x1},
  '_textDirty': {'value': !0x1, 'enumerable': !0x1},
  'isNode': {'value': !0x0, 'writable': !0x1, 'enumerable': !0x1},
  'zIndex': {'value': c9['Node']},
  'inLinks': {},
  'outLinks': {},
  'textOffsetX': {},
  'textOffsetY': {},
  'serializers': {'value': kg[sl('0x4b')][sl('0x4f')][sl('0x50')](['text', 'textOffsetX', sl('0x39'), sl('0x51')])}
}), so['prototype'][sl('0x52')] = function () {
  return ['rotate', 'lt', 'lb', 'rt', 'rb'];
}, so[sl('0x4b')][sl('0x53')] = function () {
  return ['ct', 'cb', 'lm', 'rm'];
};
var tn = ['attachEvent', 'mousewheel', 'DOMMouseScroll', 'call', 'getBoundingClientRect', 'body', 'documentElement', 'clientTop', 'clientLeft', 'scrollTop', 'pageXOffset', 'scrollLeft', 'offsetTop', 'offsetLeft', 'createVideo', 'string', 'video', 'muted', 'style', 'none', 'createElement', 'video/mp4', 'src', 'appendChild', 'oncanplay', 'log', 'video\x20can\x20play:\x20', 'fullWindow', 'position,width,height,left,top,bottom,right,zIndex', 'fullScreen', 'forEach', '_backup', 'position', 'fixed', 'left', 'top', 'right', 'zIndex', 'FullWindowDom', 'requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen', 'isMobileDevice', 'test', 'userAgent'];
!function (tp) {
  !function (tq) {
    for (; --tq;) tp['push'](tp['shift']());
  }(0x143);
}(tn);
var tr = function (ts, tt) {
  return tn[ts = +ts];
};

function tu() {
}

tu['addEventListener'] = function (tv, tw, tx) {
  let ty = tv[tr('0x0')] || tv['addEventListener'];
  oY['isFirefox']() && tw == tr('0x1') ? tw = tr('0x2') : window[tr('0x0')] && 'on' !== tw['substring'](0x0, 0x2) && (tw = 'on' + tw), ty[tr('0x3')](tv, tw, tx);
}, tu['getOffsetPosition'] = function (tz) {
  if (null == tz) return {'left': 0x0, 'top': 0x0};
  let tA = 0x0, tB = 0x0;
  if (null != tz[tr('0x4')]) {
    var tC = tz['getBoundingClientRect'](), tH = tz['ownerDocument'], tE = tH[tr('0x5')], tF = tH[tr('0x6')],
      tG = tF[tr('0x7')] || tE[tr('0x7')] || 0x0, tH = tF['clientLeft'] || tE[tr('0x8')] || 0x0;
    tA = tC['top'] + (window['pageYOffset'] || tF && tF[tr('0x9')] || tE[tr('0x9')]) - tG, tB = tC['left'] + (window[tr('0xa')] || tF && tF['scrollLeft'] || tE[tr('0xb')]) - tH;
  } else for (; tA += tz[tr('0xc')] || 0x0, tB += tz[tr('0xd')] || 0x0, tz = tz['offsetParent'];) ;
  return {'left': tB, 'top': tA};
}, tu[tr('0xe')] = function (tI, tJ) {
  if (typeof tI != tr('0xf')) return tI;
  {
    let tK = document['createElement'](tr('0x10'));
    tK[tr('0x11')] = 'muted', tK[tr('0x12')]['display'] = tr('0x13');
    let tL = document[tr('0x14')]('source');
    return tL['type'] = tr('0x15'), tL[tr('0x16')] = tI, tK[tr('0x17')](tL), document['body'][tr('0x17')](tK), tK[tr('0x18')] = function () {
      ov[tr('0x19')](tr('0x1a') + tI), tJ(tK);
    }, tK;
  }
}, tu[tr('0x1b')] = function (tM) {
  let tN = tr('0x1c')['split'](',');
  if (0x1 == tM[tr('0x1d')]) {
    let tO = tM['_backup'];
    tN[tr('0x1e')](tN => {
      tM[tr('0x12')][tN] = tO[tN];
    }), tM[tr('0x1d')] = !0x1;
  } else {
    let tQ = {};
    tN['forEach'](tN => {
      tQ[tN] = tM[tr('0x12')][tN];
    }), tM[tr('0x1f')] = tQ, tM[tr('0x12')][tr('0x20')] = tr('0x21'), tM['style'][tr('0x22')] = 0x0, tM[tr('0x12')][tr('0x23')] = 0x0, tM[tr('0x12')]['bottom'] = 0x0, tM[tr('0x12')][tr('0x24')] = 0x0, tM[tr('0x12')][tr('0x25')] = c9[tr('0x26')], tM[tr('0x1d')] = !0x0;
  }
}, tu[tr('0x1d')] = function (tS) {
  tS[tr('0x27')] ? tS[tr('0x27')]() : tS[tr('0x28')] ? tS[tr('0x28')]() : tS[tr('0x29')] ? tS['webkitRequestFullscreen']() : tS[tr('0x2a')] && tS[tr('0x2a')]();
}, tu[tr('0x2b')] = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i[tr('0x2c')](navigator[tr('0x2d')]);
var tT = ['touchstart', 'isMouseDown', 'mouseup', 'touchend', 'mousemove', 'isDraging', 'touchmove', 'isDragStart', 'prototype', 'toObjectLocalDXY', 'stageToLocalXY', 'mouseDownX', 'mouseDownY', 'previous', 'event', 'isDragEnd', 'isMouseOn', 'mouseout', 'isIdle', 'idleTimer', 'clearTimeout', 'type', 'offsetX', 'offsetY', 'mousedown'];
!function (tU) {
  !function (tV) {
    for (; --tV;) tU['push'](tU['shift']());
  }(0xa0);
}(tT);
var tW = function (tX, tY) {
  return tT[tX = +tX];
};

class tZ {
  constructor() {
  }

  [tW('0x0')](u0) {
    var u1 = u0[tW('0x1')](this[tW('0x2')], this[tW('0x3')]), u0 = u0[tW('0x1')](this['x'], this['y']);
    return {'dx': u0['x'] - u1['x'], 'dy': u0['y'] - u1['y']};
  }

  ['update'](u3, u4) {
    var u5 = Object['assign']({}, this);
    this[tW('0x4')] = u5, this[tW('0x5')] = u3, this[tW('0x6')] = !0x1, this[tW('0x7')] = u4 != tW('0x8'), this[tW('0x9')] = !0x1;
    let u6 = this;
    null != this[tW('0xa')] && window[tW('0xb')](this[tW('0xa')]), this[tW('0xa')] = setTimeout(function () {
      u6[tW('0x9')] = !0x0;
    }, this['idleTimeout']), this[tW('0xc')] = u4, this['x'] = u3[tW('0xd')], this['y'] = u3[tW('0xe')], this[tW('0xd')] = u3[tW('0xd')], this[tW('0xe')] = u3['offsetY'], u4 == tW('0xf') || u4 == tW('0x10') ? (this[tW('0x11')] = !0x0, this[tW('0x2')] = this['x'], this['mouseDownY'] = this['y']) : u4 != tW('0x12') && 'click' != u4 && 'mouseout' != u4 && u4 != tW('0x13') || (this['isMouseDown'] = !0x1, u5 && u5[tW('0xc')] == tW('0x14') && (this[tW('0x6')] = !0x0)), this[tW('0x15')] = 0x1 == this[tW('0x11')] && (u4 == tW('0x14') || u4 == tW('0x16')), this[tW('0x17')] = this['isDraging'] && 0x1 != u5[tW('0x15')], this['dx'] = this['x'] - u5['x'], this['dy'] = this['y'] - u5['y'];
  }
}

bN(tZ[tW('0x18')], {
  'isMouseDown': {'value': !0x1},
  'idleTimeout': {'value': 0x32},
  'idleTimer': {},
  'isIdle': {'value': !0x0},
  'prevEvent': {},
  'event': {},
  'mouseDownX': {'value': 0x0},
  'mouseDownY': {'value': 0x0},
  'pageX': {'value': 0x0},
  'pageY': {'value': 0x0},
  'x': {'value': 0x0},
  'y': {'value': 0x0},
  'previous': {},
  'dx': {'value': 0x0},
  'dy': {'value': 0x0},
  'offsetLeft': {'value': 0x0},
  'offsetTop': {'value': 0x0},
  'isDraging': {'value': !0x1},
  'isDragStart': {'value': !0x1},
  'isDragEnd': {'value': !0x1},
  'touchesDistance': {'value': 0x0},
  'touchPoint1': {},
  'touchPoint2': {}
});
var u7 = ['border', 'solid\x201px\x20gray', 'position', 'absolute', 'zIndex', 'handlerLayer', 'opacity', 'right', 'bottom', 'layersContainer', 'domElement', 'rectObj', 'hide', 'initEvent', 'setStyles', 'mousedown', 'mouseup', 'mousemove', 'dblclick', 'mousewheel', 'mouseInfo', 'map', 'addEventListener', 'update', 'details', 'Handler', 'Overview\x20has\x20no\x20handler:', 'show', 'visible', 'getWidth', 'getHeight', 'setSize', 'getLayersAABBRect', 'stage', 'getChildren', 'forEach', 'getAABB', 'union', 'paint', 'max', 'width', 'clearAll', 'context', 'save', 'scale', 'translate', 'paintDragRect', 'height', 'lineWidth', 'fillStyle', 'rgba(0,250,50,0.2)', 'strokeStyle', 'red', 'beginPath', 'rect', 'stroke', 'restore', 'mousedownHandler', 'getRect', 'contains', 'currentTarget', 'moveWith', 'mousedragHandler', 'log', 'dx\x20is\x20null!', 'translateWith', 'dirty', 'mousewheelHandler', 'preventDefault', 'mousemoveHandler', 'mouseupHandler', 'clickHandler', 'dblclickHandler', 'prototype', 'back', 'render', 'canvas', 'style', 'white'];
!function (u8) {
  !function (u9) {
    for (; --u9;) u8['push'](u8['shift']());
  }(0x138);
}(u7);
var ua = function (ub, uc) {
  return u7[ub = +ub];
};

class ud extends kg {
  constructor(ue) {
    super(), gj[ua('0x0')](), this['stage'] = ue, this['mouseInfo'] = new tZ(), this[ua('0x1')] = new BH();
    let uf = this['render'][ua('0x2')];
    uf[ua('0x3')]['backgroundColor'] = ua('0x4'), uf[ua('0x3')][ua('0x5')] = ua('0x6'), uf[ua('0x3')][ua('0x7')] = ua('0x8'), uf[ua('0x3')][ua('0x9')] = ue[ua('0xa')][ua('0x9')] + 0x1, uf[ua('0x3')][ua('0xb')] = 0.7, uf[ua('0x3')][ua('0xc')] = 0x0, uf['style'][ua('0xd')] = 0x0, ue[ua('0xe')]['appendChild'](uf), this[ua('0xf')] = uf, this[ua('0x1')]['setSize'](0xc8, 123.6), this[ua('0x10')] = new so(null, 0x0, 0x0), this['rectObj'][ua('0x11')](), this[ua('0x12')](), this[ua('0x11')]();
  }

  [ua('0x13')](ug) {
    if (null == ug) return this;
    for (var uh in ug) this[ua('0x2')]['style'][uh] = ug[uh];
    return this;
  }

  [ua('0x12')]() {
    let ui = this, uj = [ua('0x14'), ua('0x15'), ua('0x16'), 'click', ua('0x17'), ua('0x18')];
    let uk = ui[ua('0x1')][ua('0x2')], ul = this[ua('0x19')];
    uj[ua('0x1a')](function (um) {
      tu[ua('0x1b')](uk, um, function (un) {
        if (!(un['offsetX'] < 0x0 || un['offsetY'] < 0x0)) {
          ul[ua('0x1c')](un, um);
          let uj = gz(um, un);
          uj[ua('0x1d')] = ul;
          let uk = um + ua('0x1e');
          if (ul['isDraging'] && (uk = 'mousedragHandler'), null == ui[uk]) throw new Error(ua('0x1f') + um);
          ui[uk](uj);
        }
      });
    });
  }

  [ua('0x20')]() {
    this[ua('0x21')] = !0x0, this['render'][ua('0x20')]();
  }

  [ua('0x11')]() {
    this['visible'] = !0x1, this[ua('0x1')][ua('0x11')]();
  }

  [ua('0x22')]() {
    return this[ua('0x1')][ua('0x22')]();
  }

  [ua('0x23')]() {
    return this[ua('0x1')][ua('0x23')]();
  }

  ['setSize'](ur, us) {
    return this[ua('0x1')][ua('0x24')](ur, us);
  }

  [ua('0x25')]() {
    let ut = null;
    return this[ua('0x26')][ua('0x27')]()[ua('0x28')](function (uu, uv) {
      uu = uu[ua('0x29')](!0x0);
      ut = null == ut ? uu : ut[ua('0x2a')](uu);
    }), ut;
  }

  [ua('0x2b')]() {
    let uw = this[ua('0x26')], ux = this[ua('0x1')];
    var uy = this[ua('0x22')](), uz = this[ua('0x23')](), uA = this[ua('0x25')]();
    if (null != uA) {
      uy = uy / Math[ua('0x2c')](uy, uA[ua('0x2d')]), uz = uz / Math[ua('0x2c')](uz, uA['height']);
      ux[ua('0x2e')]();
      let uB = ux[ua('0x2f')];
      uB[ua('0x30')](), uB[ua('0x31')](uy, uz), uB[ua('0x32')](-uA['x'], -uA['y']), uw['getChildren']()['forEach'](function (uB) {
        uB['dirty'] = !0x0, ux['paint'](uB);
      }), uB['restore'](), this[ua('0x33')](uB, uA);
    }
  }

  [ua('0x33')](uD, uE) {
    let uF = this[ua('0x10')];
    var uG = this[ua('0x26')];
    let uH = this['render'];
    var uI = Math[ua('0x2c')](uE['width'], uG[ua('0x2d')]), uJ = Math[ua('0x2c')](uE[ua('0x34')], uG[ua('0x34')]),
      uK = uG['width'] / uI, uG = uG[ua('0x34')] / uJ;
    if (0x1 == uK && 0x1 == uG) uF['hide'](); else {
      uF[ua('0x20')]();
      uK = uH[ua('0x22')]() * uK, uG = uH[ua('0x23')]() * uG;
      uF['resizeTo'](uK, uG);
      uI = uH['getWidth']() / uI, uJ = uH['getHeight']() / uJ;
      let uM = -uE['x'] * uI, uN = -uE['y'] * uJ;
      uM < 0x0 && (uM = 0x0), uN < 0x0 && (uN = 0x0), uM + uF[ua('0x2d')] > uH['getWidth']() && (uM = uH['getWidth']() - uF['width']), uN + uF[ua('0x34')] > uH['getHeight']() && (uN = uH[ua('0x23')]() - uF['height']), uF['translateTo'](uM, uN), uD[ua('0x30')](), uD[ua('0x35')] = 0x2, uD[ua('0x36')] = ua('0x37'), uD[ua('0x38')] = ua('0x39'), uD[ua('0x3a')](), uD[ua('0x3b')](uF['x'], uF['y'], uF['width'], uF[ua('0x34')]), uD[ua('0x3c')](), uD['fill'](), uD[ua('0x3d')]();
    }
  }

  [ua('0x1c')]() {
    this[ua('0x21')] && (this['stage'][ua('0x1c')](), this[ua('0x2b')]());
  }

  [ua('0x3e')](uO) {
    let uP = this['rectObj'][ua('0x3f')]();
    var uQ = uO['details']['x'], uO = uO[ua('0x1d')]['y'];
    uP[ua('0x40')](uQ, uO) && (this[ua('0x41')] = this[ua('0x10')]);
    uQ -= this['rectObj']['x'] + this[ua('0x10')]['width'] / 0x2, uO -= this[ua('0x10')]['y'] + this[ua('0x10')][ua('0x34')] / 0x2;
    this[ua('0x42')](uQ, uO);
  }

  [ua('0x43')](uS) {
    var uT = uS[ua('0x1d')]['dx'], uU = uS[ua('0x1d')]['dy'];
    if (null == uT) throw console[ua('0x44')](uS), new Error(ua('0x45'));
    this[ua('0x42')](uT, uU);
  }

  [ua('0x42')](uV, uW) {
    if (this[ua('0x10')][ua('0x21')]) {
      0x0 < (uV = uV < 0x0 && this['rectObj']['x'] + uV <= 0x0 ? -this[ua('0x10')]['x'] : uV) && this['rectObj']['x'] + this[ua('0x10')][ua('0x2d')] >= this[ua('0x22')]() && (uV = this[ua('0x22')]() - this[ua('0x10')][ua('0x2d')] - this[ua('0x10')]['x']), 0x0 < (uW = uW < 0x0 && this[ua('0x10')]['y'] <= 0x0 ? -this[ua('0x10')]['y'] : uW) && this[ua('0x10')]['y'] + this['rectObj']['height'] >= this['getHeight']() && (uW = this['getHeight']() - this['rectObj'][ua('0x34')] - this[ua('0x10')]['y']), this[ua('0x10')]['translateWith'](uV, uW);
      var uZ = this[ua('0x25')](), uY = uZ[ua('0x2d')], uZ = uZ[ua('0x34')];
      let v0 = uY * (uV / this['getWidth']()), v1 = uZ * (uW / this[ua('0x23')]());
      this['stage'][ua('0x27')]()['forEach'](function (v2, uV) {
        v2[ua('0x46')](-v0, -v1);
      });
      let v4 = this;
      this['_updateTimer'] = setTimeout(function () {
        v4['update']();
      }, 0x14), this['stage'][ua('0x27')]()[ua('0x28')](function (v4, uV) {
        v4[ua('0x47')] = !0x0;
      }), this[ua('0x26')][ua('0x1c')]();
    }
  }

  [ua('0x48')](v7) {
    this[ua('0x26')][ua('0x48')](v7), v7[ua('0x49')]();
  }

  [ua('0x4a')](v8) {
  }

  [ua('0x4b')](v9) {
    this[ua('0x41')] = null;
  }

  [ua('0x4c')](va) {
  }

  [ua('0x4d')](vb) {
  }
}

bN(ud[ua('0x4e')], {'handlerLayer': {}, 'viewLayer': {}, 'rectObj': {}, 'currentTarget': {}});
var vc = ['overview', 'css', 'show', '_overviewTimer', 'dirty', 'update', 'createElementNS', 'http://www.w3.org/1999/xhtml', 'href', 'download', 'createEvent', 'MouseEvents', 'dispatchEvent', 'width', 'scaleX', 'height', 'scaleY', 'getPosition', 'center', 'toStageXY', 'translateWith', 'scaleBy', 'hasChildren', 'getChildren', 'length', 'MAX_SAFE_INTEGER', 'MIN_SAFE_INTEGER', 'resizeTo'];
!function (vd) {
  !function (ve) {
    for (; --ve;) vd['push'](vd['shift']());
  }(0xc5);
}(vc);
var vf = function (vg, vh) {
  return vc[vg = +vg];
};

function vi(vj, vk) {
  null == vj['overview'] && (vj[vf('0x0')] = new ud(vj)), vj['overview'][vf('0x1')](vk), vj[vf('0x0')][vf('0x2')](), clearInterval(vj[vf('0x3')]), vj[vf('0x3')] = setInterval(function () {
    vj['overview'][vf('0x4')] && vj[vf('0x0')][vf('0x5')]();
  }, 0x1f4);
}

function vl(vm, vn) {
  let vo = document[vf('0x6')](vf('0x7'), 'a');
  vo[vf('0x8')] = vm, vo[vf('0x9')] = vn;
  let vp = document[vf('0xa')](vf('0xb'));
  vp['initMouseEvent']('click', !0x0, !0x1, window, 0x0, 0x0, 0x0, 0x0, 0x0, !0x1, !0x1, !0x1, !0x1, 0x0, null), vo[vf('0xc')](vp);
}

function vq(vr, vs, vt, vu, vv) {
  var vw = vr[vf('0xd')] * vr[vf('0xe')], vx = vr[vf('0xf')] * vr[vf('0x10')];
  let vy = vw * vs - vw, vz = vx * vt - vx;
  null != vu && null != vv && (vx = vr[vf('0x11')](vf('0x12')), vx = (vu - (vu = vr[vf('0x13')](vx['x'], vx['y']))['x']) / 0x2, vu = (vv - vu['y']) / 0x2, 0x1 <= vs ? (vy += vx, vz += vu) : (vy -= vx * vs, vz -= vu * vt)), vr[vf('0x14')](-vy / 0x2, -vz / 0x2), vr[vf('0x15')](vs, vt);
}

var vA = ['startsWith', 'getChildrenAABB', 'toStageAABB', 'show', 'hide', 'draw', 'beginPath', 'rect', 'stroke', 'zoom', 'dispatchEvent', 'cancelZoom', 'scaleTo', 'translateTo', 'forceUpdate', 'renderLayer', 'setBackground', 'find', 'findChildren', 'invert', 'dragHandle', 'draggable', 'offsetLeft', 'offsetTop', 'setDrawDelay', 'dragDrawDelay', 'layersContainer', 'overflow', 'hidden', 'inherit', 'dragEndHandler', 'isDraging', 'addChild', 'addChilds', 'centerBy', 'getAABB', 'union', 'openJson', 'resetTo', 'removeAllChild', 'fillByJson', 'DisplayObjects', 'warn', 'json\x20version\x20:', 'jtopo\x20version:', 'className', 'Layer', 'restoreBackground', 'forEach', 'compare', 'keys', '_background', 'reloadJsonTest', 'toJson', 'time', 'timeEnd', 'log', 'changed', 'passed', 'children', 'flatten', 'getMousePoint', 'stageToLocalXY', 'paint', '_paint2d', 'init', 'concat', 'getRect', 'getCenter', '_destory', 'destoryed', 'Layer\x20has\x20been\x20destroyed\x20already.', 'removeChild', 'listeners', 'remove', 'defineProperties', '_frames', 'prototype', 'undefined', 'name', 'style', 'top', 'ThreeRender', 'setRender', 'render', 'dispose', 'setLayer', 'canvas', 'zIndex', 'position', 'absolute', 'left', '0px', 'background', 'backgroundPosition', 'backgroundSize', 'update', 'paintPrepare', 'displayList', 'point', 'stage', 'mouseX', 'dirty', 'updateViewRect', 'viewRect', 'toFileJson', 'toPojo', 'stringify', 'width', 'height', 'getTransform', 'getWidth', 'getHeight', 'setSize', 'pickUpChild', 'context', 'pickUpByRect', 'translateWith', 'backgroundRepeat', 'css', 'px\x20', 'string'];
!function (vB) {
  !function (vC) {
    for (; --vC;) vB['push'](vB['shift']());
  }(0x145);
}(vA);
var vD = function (vE, vF) {
  return vA[vE = +vE];
};

class vG extends kg {
  constructor(vH) {
    super(), this['name'] = vH, this[vD('0x0')] = new da({
      'strokeStyle': 'black',
      'lineWidth': 0x1,
      'textPosition': c6['cb'],
      'textAlign': 'center',
      'textBaseline': vD('0x1')
    }), this['hasImageLoad'] = !0x1, this['displayList'] = [];
  }

  ['setView'](vI) {
    if ('3d' == vI) {
      const vJ = gT(vD('0x2'));
      this[vD('0x3')](new vJ());
    } else this['setRender'](new BH());
    this['view'] = vI;
  }

  [vD('0x3')](vK) {
    null != this[vD('0x4')] && this['render'][vD('0x5')](), vK[vD('0x6')](this);
    const vL = vK[vD('0x7')];
    vL[vD('0x0')][vD('0x8')] = this[vD('0x8')], vL[vD('0x0')][vD('0x9')] = vD('0xa'), vL[vD('0x0')][vD('0xb')] = vD('0xc'), this['stage']['layersContainer']['appendChild'](vL), this['render'] = vK;
    vK = this[vD('0x0')];
    null != vK && (vL['style']['background'] = vK[vD('0xd')], vL[vD('0x0')][vD('0xe')] = vK[vD('0xe')], vL[vD('0x0')]['backgroundSize'] = vK[vD('0xf')]), this[vD('0x10')]();
  }

  [vD('0x11')](vM) {
    this[vD('0x12')] = [];
    let vN = this['getTransform']()['invert']();
    return this['mousePointInLayer'] = vN[vD('0x13')]({
      'x': this[vD('0x14')][vD('0x15')] || 0x0,
      'y': this['stage']['mouseY'] || 0x0
    }), this[vD('0x16')] && this[vD('0x17')](), !0x0;
  }

  ['getViewRectInLayer']() {
    return null == this[vD('0x18')] && (this['viewRect'] = this[vD('0x17')]()), this[vD('0x18')];
  }

  [vD('0x19')]() {
    var vO = this[vD('0x1a')]();
    return JSON[vD('0x1b')](vO);
  }

  [vD('0x17')]() {
    let vP = new u(0x0, 0x0, this[vD('0x14')][vD('0x1c')], this[vD('0x14')][vD('0x1d')]),
      vQ = this[vD('0x1e')]()['invert']();
    var vR = vQ[vD('0x13')]({'x': vP['x'], 'y': vP['y']}),
      vS = vQ[vD('0x13')]({'x': vP[vD('0x1c')], 'y': vP[vD('0x1d')]});
    return vP['x'] = vR['x'], vP['y'] = vR['y'], vP[vD('0x1c')] = vS['x'] - vR['x'], vP[vD('0x1d')] = vS['y'] - vR['y'], this[vD('0x18')] = vP, vP;
  }

  ['updateSize'](vT, vU) {
    vT == this[vD('0x4')][vD('0x1f')]() && vU == this[vD('0x4')][vD('0x20')]() || (this[vD('0x4')][vD('0x21')](vT, vU), this['resizeTo'](vT, vU), this[vD('0x10')]());
  }

  [vD('0x22')](vV) {
    if (this['render'][vD('0x22')]) return this['render']['pickUpChild']();
    var vW = this[vD('0x4')]['context'];
    return super[vD('0x22')](vW, vV);
  }

  ['pickUpByRect'](vX, vY) {
    return null == vY && (vY = this[vD('0x4')][vD('0x23')]), super[vD('0x24')](vX, vY);
  }

  [vD('0x25')](vZ, w0) {
    super[vD('0x25')](vZ, w0);
    w0 = this[vD('0x0')][vD('0x26')];
    return null != w0 && 'no-repeat' != w0 && this[vD('0x27')]({'backgroundPosition': this['x'] + vD('0x28') + this['y'] + 'px'}), this;
  }

  ['css'](w1, w2) {
    super[vD('0x27')](w1, w2);
    let w3 = w1;
    if (typeof w1 == vD('0x29') && (w3[w1] = w2), this[vD('0x4')]) {
      const w4 = this[vD('0x4')][vD('0x7')];
      let w1 = Object['keys'](w3);
      w1['forEach'](w1 => {
        var w2 = w3[w1];
        w1[vD('0x2a')]('background') && (w4['style'][w1] = w2);
      });
    }
  }

  ['getAABB'](w8) {
    w8 = this[vD('0x2b')](w8, co);
    return this[vD('0x2c')](w8);
  }

  [vD('0x2d')]() {
    super[vD('0x2d')](), this[vD('0x4')][vD('0x2d')]();
  }

  ['hide']() {
    super[vD('0x2e')](), this['render'][vD('0x2e')]();
  }

  [vD('0x2f')](w9) {
    this['showBorder'] && (w9['save'](), w9[vD('0x30')](), w9[vD('0x31')](0x0, 0x0, this[vD('0x1c')], this[vD('0x1d')]), w9[vD('0x32')](), w9['restore']());
  }

  [vD('0x33')](wa, wb, wc, wd) {
    if (this['hasListener'](vD('0x33'))) {
      let we = new Event(vD('0x33'), {'cancelable': !0x0});
      if (we['zoom'] = {
        'x': wa,
        'y': wb,
        'cx': wc,
        'cy': wd
      }, this[vD('0x34')](we), 0x1 == we['defaultPrevented']) return;
    }
    vq(this, wa, wb, wc, wd);
  }

  [vD('0x35')]() {
    this[vD('0x36')](0x1, 0x1), this[vD('0x37')](0x0, 0x0), this[vD('0x16')] = !0x0;
  }

  [vD('0x10')]() {
    this['requestReapint'] = !0x0;
  }

  [vD('0x38')](wf) {
    this['render'][vD('0x39')](this);
  }

  [vD('0x3a')](wg, wh) {
    this[vD('0x4')][vD('0x7')]['style'][vD('0xd')] = wg, this[vD('0x4')][vD('0x7')]['style'][vD('0xf')] = wh;
  }

  [vD('0x3b')](wi, wj, wk) {
    return this[vD('0x3c')](wi, wj, wk);
  }

  ['toStageAABB'](wl) {
    let wm = this[vD('0x1e')]();
    var wn = wm[vD('0x13')]({'x': wl['x'], 'y': wl['y']}),
      wo = wm['point']({'x': wl['x'] + wl[vD('0x1c')], 'y': wl['y'] + wl[vD('0x1d')]});
    return wl['x'] = wn['x'], wl['y'] = wn['y'], wl[vD('0x1c')] = wo['x'] - wn['x'], wl[vD('0x1d')] = wo['y'] - wn['y'], wl;
  }

  ['toLayerRect'](wp) {
    let wq = this[vD('0x1e')]()[vD('0x3d')](), wr = new u();
    var ws = wq[vD('0x13')]({'x': wp['x'], 'y': wp['y']}),
      wp = wq[vD('0x13')]({'x': wp['x'] + wp[vD('0x1c')], 'y': wp['y'] + wp[vD('0x1d')]});
    return wr['x'] = ws['x'], wr['y'] = ws['y'], wr[vD('0x1c')] = wp['x'] - ws['x'], wr[vD('0x1d')] = wp['y'] - ws['y'], wr;
  }

  [vD('0x3e')](wu) {
    if (0x0 != this[vD('0x3f')]) {
      var wv = wu['details'], ww = wv['dx'], wx = wv['dy'];
      if (0x0 == this['dragDrawDelay']) this['translateWith'](ww, wx); else {
        let wy = this[vD('0x4')][vD('0x7')];
        wu = wy[vD('0x40')], wv = wy[vD('0x41')];
        wy[vD('0x0')][vD('0xb')] = wu + ww + 'px', wy['style'][vD('0x1')] = wv + wx + 'px';
      }
      this['isDraging'] = !0x0;
    }
  }

  [vD('0x42')](wz) {
    (this[vD('0x43')] = wz) ? this[vD('0x14')][vD('0x44')][vD('0x0')][vD('0x45')] = vD('0x46') : this['stage'][vD('0x44')][vD('0x0')][vD('0x45')] = vD('0x47');
  }

  [vD('0x48')](wA) {
    if (this[vD('0x49')] = !0x1, 0x0 != this[vD('0x43')]) {
      let wA = this[vD('0x4')]['canvas'];
      var wC = wA['offsetLeft'], wD = wA[vD('0x41')];
      this[vD('0x25')](wC, wD), wA[vD('0x0')][vD('0xb')] = vD('0xc'), wA['style'][vD('0x1')] = vD('0xc');
    }
  }

  [vD('0x4a')](wE) {
    super[vD('0x4a')](wE), this[vD('0x10')]();
  }

  [vD('0x4b')](wF) {
    super[vD('0x4b')](wF), this[vD('0x10')]();
  }

  [vD('0x4c')](wG) {
    var wH = this[vD('0x14')];
    let wI;
    if (null == wG) wI = this[vD('0x4d')](!0x0, cn); else if (wG instanceof kg) wI = wG[vD('0x4d')](!0x0, cn); else {
      let wH = wG;
      wI = wH[vD('0x4d')](!0x0, cn);
      for (let wG = 0x1; wG < wH['length']; wG++) wI = wI[vD('0x4e')](wH[wG][vD('0x4d')](!0x0, cn));
    }
    wG = wH[vD('0x1c')] / 0x2, wH = wH['height'] / 0x2, wG -= wI['x'], wH -= wI['y'];
    wG -= wI[vD('0x1c')] / 0x2, wH -= wI['height'] / 0x2, this[vD('0x25')](wG, wH), this[vD('0x10')]();
  }

  [vD('0x4f')](wL) {
    gj[vD('0x50')](0x64), this[vD('0x51')](), this['fillByJson'](wL);
  }

  [vD('0x52')](wM) {
    var wN = JSON['parse'](wM);
    let wO = wN[vD('0x53')];
    wN['version'] != c2 && console[vD('0x54')](vD('0x55'), wN['version'], vD('0x56'), c2);
    var wP = wO[0x0];
    return wP[vD('0x57')] == vD('0x58') && (wM = wN['Styles'][wP[vD('0x0')]], this[vD('0x59')](wM), this['id'] = wP['id']), wO[vD('0x5a')](wM => gj[vD('0x5b')](wM['id'])), this['restore'](wN), this[vD('0x16')] = !0x0, this;
  }

  [vD('0x59')](wR) {
    let wS = Object[vD('0x5c')](wR);
    const wT = this[vD('0x4')][vD('0x7')];
    null != wR[vD('0x5d')] && (wT[vD('0x0')]['background'] = wR[vD('0x5d')]), wS[vD('0x5a')](wS => {
      var wV = wR[wS];
      wS[vD('0x2a')](vD('0xd')) && (wT['style'][wS] = wV);
    }), wT[vD('0x1c')] += 0x1, --wT[vD('0x1c')];
  }

  [vD('0x5e')]() {
    var wW = this[vD('0x5f')]();
    console[vD('0x60')](vD('0x5e')), this[vD('0x4f')](wW);
    var wX = this[vD('0x5f')]();
    return console[vD('0x61')](vD('0x5e')), wW != wX ? console[vD('0x62')](vD('0x63'), wW, wX) : console[vD('0x62')](vD('0x64')), wW;
  }

  ['getAllVisiable']() {
    return this[vD('0x65')][vD('0x66')](wY => 0x1 == wY['visible']);
  }

  [vD('0x67')]() {
    var wZ = this[vD('0x14')];
    return this[vD('0x68')](wZ[vD('0x15')], wZ['mouseY']);
  }

  ['setRenderView'](x0) {
    null != x0 ? x0['paint'] && (x0[vD('0x6b')](this), this[vD('0x6a')] = this[vD('0x69')], this[vD('0x69')] = function () {
      return x0[vD('0x69')]();
    }) : this[vD('0x69')] = this[vD('0x6a')];
  }

  ['translateObjectsCenterTo'](x1, x2, x3) {
    let x4 = x2, x5 = x3, x6 = new b8();
    x6 = x6[vD('0x6c')](x1);
    let x7 = x6[vD('0x6d')]();
    x1 = x7[vD('0x6e')]();
    let x8 = x4 - x1['x'], x9 = x5 - x1['y'];
    x6[vD('0x5a')](x1 => {
      x1['translateWith'](x8, x9);
    });
  }

  [vD('0x6f')]() {
    if (this[vD('0x70')]) throw new Error(vD('0x71'));
    this[vD('0x70')] = !0x0, this['stage'] && this['stage'][vD('0x72')](this), this[vD('0x12')] = void 0x0, this[vD('0x73')] = void 0x0, this['style'] = void 0x0, this['viewRect'] = void 0x0, this['render'][vD('0x7')][vD('0x74')](), this['render'] = void 0x0, this[vD('0x14')] = void 0x0, this['children'] = void 0x0;
  }
}

Object[vD('0x75')](vG['prototype'], {
  'frames': {
    'get'() {
      return this[vD('0x76')];
    }, 'set'(xb) {
      this['_frames'] = xb;
    }
  }
}), bN(vG[vD('0x77')], {
  'isLayer': {'value': !0x0, 'writable': !0x1},
  'index': {},
  'className': {'value': vD('0x58'), 'writable': !0x1},
  'displayList': {},
  'requestReapint': {'value': !0x1, 'enumerable': !0x1},
  '_frames': {'value': 0x0, 'enumerable': !0x1},
  'lastTime': {'enumerable': !0x1},
  'mouseEnabled': {'value': !0x0},
  'draggable': {'value': !0x0},
  'wheelZoom': {'value': !0x0},
  '_layerIndex': {'value': vD('0x78'), 'enumerable': !0x1, 'writable': !0x1},
  'fps': {'value': 0x0},
  '_background': {'enumerable': !0x1},
  '_backgroundSize': {'enumerable': !0x1},
  'viewRect': {'enumerable': !0x1},
  'isDraging': {'value': !0x1},
  'dragDrawDelay': {'value': !0x1},
  'cuttingHide': {'value': !0x0},
  'view': {'value': '2d'},
  'serializers': {'value': ['id', vD('0x79'), vD('0x57')]},
  'mouseInLayer': {}
});
var xc = ['width', 'map', 'drawShape', 'style', 'moveTo', 'length', 'lineTo', 'closePath', 'strokeAndFill', 'beginPath', 'mousePickupPath', 'paintText', 'coordinates', 'borderWidth', 'contentRotation', 'edges', 'getPosition', 'name\x20is\x20null', 'startsWith', 'substring', 'getPoints', 'rotateContent', 'getPositionNormal', 'center', 'normal', 'prototype', 'PolygonNode', 'concat', 'push', 'vertex_', 'setCoordinates', 'resizeTo'];
!function (xd) {
  !function (xe) {
    for (; --xe;) xd['push'](xd['shift']());
  }(0x13e);
}(xc);
var xf = function (xg, xh) {
  return xc[xg = +xg];
};
const xi = xf('0x0');

class xj extends so {
  constructor(xk, xl, xm, xn, xo, xp) {
    super(xk, xl, xm, xn, xo, xp), null != xp && (this['edges'] = xp);
  }

  [xf('0x1')](xq) {
    const xr = fc(xq);
    this['setXY'](xr['x'], xr['y']), this[xf('0x2')](xr[xf('0x3')], xr['height']), xq = xq[xf('0x4')](function (xq) {
      return {'x': xq[0x0] - xr['x'], 'y': xq[0x1] - xr['y']};
    }), this['coordinates'] = xq;
  }

  [xf('0x5')](xt, xu, xv, xw, xx) {
    this[xf('0x6')]['borderWidth'];
    var xy = this['getPoints']();
    xt[xf('0x7')](xy[0x0]['x'], xy[0x0]['y']);
    let xz = xy[0x0];
    for (let xu = 0x1; xu < xy[xf('0x8')]; xu++) xz = ((xy[xu]['x'] !== xz['x'] || xy[xu]['y'] !== xz['y']) && xt[xf('0x9')](xy[xu]['x'], xy[xu]['y']), xy[xu]);
    xt[xf('0xa')]();
  }

  ['draw'](xB) {
    this[xf('0xb')](xB), xB[xf('0xc')](), xB['rect'](0x0, 0x0, this[xf('0x3')], this['height']), xB['closePath'](), this[xf('0xd')](xB), this[xf('0xe')](xB);
  }

  ['getVertices']() {
    if (null != this['coordinates']) return this[xf('0xf')];
    var xC = this[xf('0x6')][xf('0x10')] || 0x0, xD = 0.5 * this[xf('0x3')], xE = 0.5 * this['height'],
      xF = this[xf('0x11')] || 0x0;
    return fj(this[xf('0x12')], xD, xE, xD - xC, xE - xC, xF);
  }

  [xf('0x13')](xG, xH, xI) {
    if (null == xG) throw new Error(xf('0x14'));
    if (xG[xf('0x15')](xi)) {
      let xH = parseInt(xG[xf('0x16')](xi['length']));
      var xK = this[xf('0x17')]();
      return xH >= xK && (xH = xK['length'] - 0x1), xK[xH];
    }
    return super[xf('0x13')](xG, xH, xI);
  }

  ['getPoints']() {
    return this['getVertices']();
  }

  [xf('0x18')](xL) {
    this[xf('0x11')] = xL;
  }

  [xf('0x19')](xM) {
    var xN = this[xf('0x13')](c6[xf('0x1a')]), xM = this[xf('0x13')](xM);
    return u[xf('0x1b')](xN, xM);
  }
}

bN(xj[xf('0x1c')], {
  'className': {'value': xf('0x1d'), 'writable': !0x1},
  'isPolygonNode': {'value': !0x0, 'writable': !0x1},
  'edges': {'value': 0x3},
  'coordinates': {},
  'contentRotation': {},
  'serializers': {'value': so[xf('0x1c')]['serializers'][xf('0x1e')]([xf('0x12'), xf('0xf'), xf('0x11')])}
}), xj[xf('0x1c')]['getAnchorPoints'] = function () {
  var xP = null != this['coordinates'] ? this[xf('0xf')][xf('0x8')] : this['edges'];
  let xQ = [];
  for (let xR = 0x0; xR < xP; xR++) xQ[xf('0x1f')](xi + xR);
  return xQ;
};
var xS = ['className', 'prototype', 'Endpoint', 'type', 'lineSegment', 'EndpointSegment', 'name', 'fixedName', 'EndpointFixedName', 'nearest', 'EndpointNearest', 'point', 'EndpointFixedPoint', 'center', 'isLikePoint', 'function', 'log', 'error\x20arguments', 'getPosition', 'normal', 'isAutoFoldLink', 'points', 'normalize', 'target', 'isDisplayObjectTarget', 'isDisplayObject', 'isDisplayObjectId', 'number'];
!function (xT) {
  !function (xU) {
    for (; --xU;) xT['push'](xT['shift']());
  }(0xc0);
}(xS);
var xV = function (xW, xX) {
  return xS[xW = +xW];
};

class xY {
  constructor(xZ) {
    this[xV('0x0')] = xZ;
  }

  [xV('0x1')]() {
    return null != this[xV('0x0')] && this[xV('0x0')][xV('0x2')];
  }

  [xV('0x3')]() {
    return null != this['target'] && typeof this[xV('0x0')] == xV('0x4');
  }

  ['toPojo']() {
    var y0 = this[xV('0x5')];
    return Object['assign']({'className': y0}, this);
  }
}

bN(xY[xV('0x6')], {'className': {'value': xV('0x7')}, 'type': {'value': !0x0}, 'offset': {}});

class y1 extends xY {
  constructor(y2, y3, y4) {
    super(y2), this['t'] = y3, this['segIndex'] = y4, this[xV('0x8')] = c7[xV('0x9')];
  }
}

y1[xV('0x6')][xV('0x5')] = xV('0xa');

class y5 extends xY {
  constructor(y6, y7) {
    super(y6), this[xV('0xb')] = y7, this['type'] = c7[xV('0xc')];
  }
}

y5[xV('0x6')][xV('0x5')] = xV('0xd');

class y8 extends xY {
  constructor(y9) {
    super(y9), this[xV('0x8')] = c7[xV('0xe')];
  }
}

y8[xV('0x6')][xV('0x5')] = xV('0xf');

class ya extends xY {
  constructor(yb, yc, yd) {
    super(yb), this[xV('0x8')] = c7[xV('0x10')], this['x'] = yc, this['y'] = yd;
  }
}

ya[xV('0x6')][xV('0x5')] = xV('0x11');

class ye extends xY {
  constructor(yf, yg) {
    super(yf), this['fn'] = yg;
  }
}

function yh(yi, yj) {
  if (null == yi) throw new Error('target\x20is\x20null');
  if (yi instanceof xY) return yi;
  if (yj instanceof xY) return yj;
  if (yi instanceof kg) return yj == c6[xV('0xe')] ? new y8(yi) : new y5(yi, yj || c6[xV('0x12')]);
  if (i8[xV('0x13')](yi)) return new ya(yi, yi['x'], yi['y']);
  if (typeof yi != xV('0x14')) throw console[xV('0x15')](yi, yj), new Error(xV('0x16'));
  yj = yi();
  return new ya(yi, yj['x'], yj['y']);
}

ye['prototype'][xV('0x5')] = 'EndpointFunction';
const yk = {'lm': [-0x1, 0x0], 'ct': [0x0, -0x1], 'rm': [0x1, 0x0], 'cb': [0x0, 0x1]};

function yl(ym) {
  if (null != ym) {
    let yn = ym['target'];
    if (yn instanceof kg) {
      if (ym instanceof y5) return yn instanceof xj ? yn['getPositionNormal'](ym[xV('0xb')]) : yk[ym['name']];
      if (ym instanceof y1) {
        var yo = ym['segIndex'], yp = ym['t'];
        if (yn instanceof xj) {
          var ym = yn[xV('0x17')](c6[xV('0x12')]), yr = yn['getLocalPoint'](yp, yo);
          return u[xV('0x18')](ym, yr);
        }
        if (yn instanceof so) {
          if (0x0 == yo) return [0x0, -0x1];
          if (0x1 == yo) return [0x1, 0x0];
          if (0x2 == yo) return [0x0, 0x1];
          if (0x3 == yo) return [-0x1, 0x0];
          throw new Error('unkow\x20segIndex:' + yo);
        }
        if (yn[xV('0x19')]) {
          yr = yn[xV('0x1a')][yo], yo = yn[xV('0x1a')][yo + 0x1], yr = [yo['x'] - yr['x'], yo['y'] - yr['y']];
          return eB[xV('0x1b')]([], yr);
        }
      }
    }
  }
}

var ys = ['serializers', 'concat', 'autoDirection', 'calcTextPosition', 'style', 'autoSize', 'draw', '_text', 'paintText', 'getOriginRotation', 'rotation', 'length', 'lineHeight', '_textHeight', 'max', 'width', 'resizeTo', 'borderWidth', 'dashed', 'borderStyle', 'dotted', 'lineDash', 'setLineDash', 'lineWidth', 'strokeStyle', 'borderColor', 'beginPath', 'rect', 'stroke', 'mousePickupPath', 'closePath', 'prototype', 'TextNode'];
!function (yt) {
  !function (yu) {
    for (; --yu;) yt['push'](yt['shift']());
  }(0x1d2);
}(ys);
var yv = function (yw, yx) {
  return ys[yw = +yw];
};

class yy extends so {
  constructor(yz, yA, yB, yC, yD) {
    super(yz, yA, yB, yC, yD), this['css']({'textPosition': c6['lt'], 'textAlign': 'left', 'textBaseline': 'top'});
  }

  [yv('0x0')]() {
    let yE = super[yv('0x0')]();
    var yF = this[yv('0x1')]['padding'] || 0x0;
    return 0x1 == this[yv('0x2')] && (yE['x'] += yF, yE['y'] += yF), yE;
  }

  [yv('0x3')](yG) {
    var yH = this[yv('0x4')];
    super[yv('0x5')](yG), 0x1 == this['autoDirection'] && ((yI = this[yv('0x6')]()) < -Math['PI'] / 0x2 || yI > Math['PI'] / 0x2 ? this[yv('0x7')] = Math['PI'] : this[yv('0x7')] = 0x0);
    var yI = this['style'];
    if (0x1 == this[yv('0x2')]) {
      var yJ = this['_textArr'] || [yH], yK = yJ[yv('0x8')], yL = yK * (yI[yv('0x9')] || this[yv('0xa')]);
      let yM = 0x0;
      for (let yH = 0x0; yH < yK; yH++) yM = Math[yv('0xb')](yG['measureText'](yJ[yH])[yv('0xc')], yM);
      yH = yI['padding'] || 0x0;
      this[yv('0xd')](0x2 * yH + yM, 0x2 * yH + yL);
    }
    yL = yI[yv('0xe')] || 0x0;
    yI['borderStyle'] != yv('0xf') && yI[yv('0x10')] != yv('0x11') || null == yI[yv('0x12')] && yG[yv('0x13')]([0x1, 0x1]), yG[yv('0x14')] = yL, yG[yv('0x15')] = yI[yv('0x16')], yG[yv('0x17')](), yG[yv('0x18')](0x0, 0x0, this[yv('0xc')], this['height']), 0x0 < yL ? (yG[yv('0x19')](), this[yv('0x1a')](yG)) : (this[yv('0x1a')](yG), yG[yv('0x1b')]());
  }
}

bN(yy[yv('0x1c')], {
  'className': {'value': yv('0x1d'), 'writable': !0x1},
  'isTextNode': {'value': !0x0, 'writable': !0x1},
  'autoSize': {'value': !0x0},
  'autoDirection': {'value': !0x0},
  'serializers': {'value': so['prototype'][yv('0x1e')][yv('0x1f')]([yv('0x2'), yv('0x20')])}
});
var yO = ['updatePoints', 'initLabel', 'draggable', 'string', 'label', 'center', 'bottom', 'setLabel', 'mouseEnabled', 'getBeginArrow', 'beginArrow', 'setBeginArrow', 'removeChild', 'origin', 'rotation', 'editable', 'connectable', 'resizeTo', 'style', 'getEndArrow', 'endArrow', 'setEndArrow', 'addChild', 'getAABB', 'dirty', 'begin', 'target', 'isDisplayObject', 'removeOutLink', 'addOutLink', 'end', 'isNode', 'getBeginPoint', 'getEndPoint', 'length', 'strokeStyle', 'borderColor', 'lineDash', 'borderStyle', 'dashed', 'setLineDash', 'draw', 'lineCap', 'stroke', 'lineWidth', '_pickRadius', 'mousedownHandler', 'dispatchEvent', 'mousedragHandler', 'details', 'isDragStart', 'mousedownInitBegin', 'mousedownInitEnd', 'parent', 'stageToLocalXY', 'mouseDownX', 'mouseDownY', 'setEnd', 'translateWith', 'calcAZ', 'offsetAZHandle', 'beginOffset', 'endOffset', 'getPoints', 'nearest', 'getSegmentPoints', 'upgradeParent', 'isEndpointHasSameParent', 'isBeginDisplayObject', 'isEndDisplayObject', 'unlinkBegin', 'unlinkEnd', 'unlink', 'removeInLink', 'type', 'isLink', 'fixedName', 'name', 'point', 'function', 'log', 'unkown\x20target\x20type', 'defineProperties', 'prototype', '_text', 'getLocalPoint', 'getTransform', 'getLayerTransform', 'getPosition', 'invert', 'link\x27s\x20deep\x20is\x200!', 'points\x20is\x20null', 'middle', 'Link', 'serializers', 'getAnchorPoints', 'points', 'css', '1px\x20solid\x20black', 'setBegin', 'text', 'paintPrepare'];
!function (yP) {
  !function (yQ) {
    for (; --yQ;) yP['push'](yP['shift']());
  }(0x193);
}(yO);
var yR = function (yS, yT) {
  return yO[yS = +yS];
};

class yU extends kg {
  constructor(yV, yW, yX, yY, yZ) {
    super(), (this[yR('0x0')] = null) == yW && (yW = new i8(0x0, 0x0)), null == yX && (yX = new i8(0xa, 0x0)), this[yR('0x1')]({'border': yR('0x2')}), this[yR('0x3')](yW, yY), this['setEnd'](yX, yZ), this[yR('0x4')] = yV;
  }

  [yR('0x5')](z0) {
    return this['points'] = this[yR('0x6')](), !0x0;
  }

  [yR('0x7')](z1) {
    return z1['editable'] = !0x1, z1[yR('0x8')] = !0x1, z1['origin'] = [0x0, 0.5], z1;
  }

  ['setLabel'](z2) {
    if (typeof z2 != yR('0x9')) null != this[yR('0xa')] && this[yR('0xa')] !== z2 && this['removeChild'](this['label']), null != z2 && (this[yR('0x7')](z2), (this['label'] = z2)[yR('0x8')] = !0x1, z2['connectable'] = !0x1, z2[yR('0xe')] = !0x1, this['addChild'](z2)); else if (null == this[yR('0xa')]) {
      const z3 = new yy(z2);
      z3['mouseEnabled'] = !0x1, z3[yR('0x8')] = !0x1, z3['connectable'] = !0x1, z3[yR('0x1')]({
        'textPosition': c6['center'],
        'textAlign': yR('0xb'),
        'textBaseline': yR('0xc')
      }), this[yR('0x7')](z3), this[yR('0xd')](z3);
    } else this[yR('0xa')][yR('0x4')] = z2;
  }

  [yR('0xf')]() {
    return this[yR('0x10')];
  }

  [yR('0x11')](z4) {
    null != this[yR('0x10')] && this['beginArrow'] !== z4 && this[yR('0x12')](this[yR('0x10')]), z4[yR('0x13')] = [0x0, 0x0], z4[yR('0x14')] = -Math['PI'], z4[yR('0x15')] = !0x1, z4[yR('0x8')] = !0x1, z4[yR('0x16')] = !0x1, z4[yR('0xe')] = !0x1, z4[yR('0x17')](0xa, 0xa), z4['style'] = this[yR('0x18')], this['addChild'](z4), this[yR('0x10')] = z4;
  }

  [yR('0x19')]() {
    return this[yR('0x1a')];
  }

  [yR('0x1b')](z5) {
    null != this[yR('0x1a')] && this['endArrow'] !== z5 && this['removeChild'](this[yR('0x1a')]), z5[yR('0x15')] = !0x1, z5[yR('0x8')] = !0x1, z5[yR('0xe')] = !0x1, z5['connectable'] = !0x1, z5[yR('0x13')] = [0x0, 0x1], z5[yR('0x18')] = this['style'], z5[yR('0x17')](0xa, 0xa), this[yR('0x1c')](z5), this[yR('0x1a')] = z5;
  }

  [yR('0x1d')](z6, z7) {
    return null == this[yR('0x0')] && (this[yR('0x0')] = this[yR('0x6')]()), super[yR('0x1d')](z6, z7);
  }

  ['setBegin'](z8, z9) {
    this[yR('0x1e')] = !0x0, this[yR('0x1f')] = yh(z8, z9), null != this[yR('0x1f')] && this[yR('0x1f')][yR('0x20')] && this[yR('0x1f')][yR('0x20')][yR('0x21')] && this[yR('0x1f')][yR('0x20')][yR('0x22')](this), z8[yR('0x21')] && z8[yR('0x23')](this);
  }

  ['setEnd'](za, zb) {
    this[yR('0x1e')] = !0x0, this['end'] = yh(za, zb), null != this['end'] && this[yR('0x24')][yR('0x20')] && this[yR('0x24')][yR('0x20')][yR('0x25')] && this[yR('0x24')][yR('0x20')]['removeInLink'](this), za[yR('0x21')] && za['addInLink'](this);
  }

  [yR('0x26')]() {
    return null == this[yR('0x0')] && (this[yR('0x0')] = this[yR('0x6')]()), this[yR('0x0')][0x0];
  }

  [yR('0x27')]() {
    return null == this[yR('0x0')] && (this['points'] = this['updatePoints']()), this[yR('0x0')][this['points'][yR('0x28')] - 0x1];
  }

  ['drawPoints'](zc, zd) {
    var ze = this[yR('0x18')];
    zc['lineWidth'] = ze['borderWidth'] || 0x1, zc[yR('0x29')] = ze[yR('0x2a')], null == ze[yR('0x2b')] && (ze[yR('0x2c')] != yR('0x2d') && 'dotted' != ze[yR('0x2c')] || zc[yR('0x2e')]([0x1, 0x1])), zc['moveTo'](zd[0x0]['x'], zd[0x0]['y']);
    let zf = zd[0x0];
    for (let ze = 0x1; ze < zd[yR('0x28')]; ze++) zf = ((zd[ze]['x'] !== zf['x'] || zd[ze]['y'] !== zf['y']) && zc['lineTo'](zd[ze]['x'], zd[ze]['y']), zd[ze]);
  }

  [yR('0x2f')](zh) {
    if (null == this[yR('0x1f')] || null == this[yR('0x24')]) return this;
    var zi = this[yR('0x0')];
    zh['beginPath'](), this[yR('0x18')] && this[yR('0x18')][yR('0x30')] && (zh['lineCap'] = this['style'][yR('0x30')]), this['drawPoints'](zh, zi), zh[yR('0x31')]();
    zi = this['style'][yR('0x32')] >= this['_pickRadius'] ? 0x0 : this[yR('0x33')];
    return this['mousePickupStroke'](zh, zi), this;
  }

  [yR('0x34')](zj) {
    0x1 == this[yR('0xe')] && this[yR('0x35')](zj);
  }

  [yR('0x36')](zk) {
    if (0x0 != this[yR('0xe')] && 0x0 != this['draggable']) {
      if (zk[yR('0x37')][yR('0x38')]) return this['mousedownInitBegin'] = null, this['mousedownInitEnd'] = null, this[yR('0x1f')]['target'][yR('0x21')] || (this[yR('0x39')] = this[yR('0x26')]()), void (this[yR('0x24')][yR('0x20')][yR('0x21')] || (this[yR('0x3a')] = this['getEndPoint']()));
      var zo = zk[yR('0x37')], zm = this[yR('0x3b')][yR('0x3c')](zo[yR('0x3d')], zo[yR('0x3e')]),
        zp = this[yR('0x3b')][yR('0x3c')](zo['x'], zo['y']), zo = zp['x'] - zm['x'], zp = zp['y'] - zm['y'];
      null != this[yR('0x39')] && (zm = {
        'x': this[yR('0x39')]['x'] + zo,
        'y': this['mousedownInitBegin']['y'] + zp
      }, this[yR('0x3')](zm)), null != this[yR('0x3a')] && (zp = {
        'x': this[yR('0x3a')]['x'] + zo,
        'y': this[yR('0x3a')]['y'] + zp
      }, this[yR('0x3f')](zp)), this[yR('0x35')]('mousedrag', zk);
    }
  }

  [yR('0x40')](zq, zr) {
    var zs;
    0x1 != this[yR('0x1f')]['target'][yR('0x21')] && (zs = {
      'x': (zs = this[yR('0x26')]())['x'] + zq,
      'y': zs['y'] + zr
    }, this[yR('0x3')](zs)), 0x1 != this['end'][yR('0x20')]['isDisplayObject'] && (zr = {
      'x': (zs = this[yR('0x27')]())['x'] + zq,
      'y': zs['y'] + zr
    }, this[yR('0x3f')](zr));
  }

  [yR('0x41')]() {
    return [zK(this, this[yR('0x1f')]), zK(this, this[yR('0x24')])];
  }

  [yR('0x42')](zt) {
    var zu = zt[0x0], zv = zt[zt[yR('0x28')] - 0x1], zw = Math['atan2'](zv['y'] - zu['y'], zv['x'] - zu['x']),
      zx = this[yR('0x43')] || 0x0;
    null != this['beginArrow'] && zx['x'], 0x0 != zx && (zt[0x0] = i8['offsetWithAngle'](zu, zw, zx));
    zx = this[yR('0x44')] || 0x0;
    null != this['endArrow'] && zx['x'], 0x0 != zx && (zt[zt[yR('0x28')] - 0x1] = i8['offsetWithAngle'](zv, zw, zx));
  }

  [yR('0x6')]() {
    var zy = this[yR('0x41')]();
    return this[yR('0x42')](zy), this[yR('0x0')] = zy, this[yR('0x0')];
  }

  [yR('0x45')]() {
    return cc(this['points']), this[yR('0x0')];
  }

  [yR('0x46')](zz, zA) {
    var zB = qc({'x': zz, 'y': zA}, this[yR('0x47')]());
    return null == zB || 0x0 == zB['length'] ? {'x': zz, 'y': zA} : zB;
  }

  [yR('0x47')]() {
    return this[yR('0x45')]();
  }

  [yR('0x48')]() {
    var zC, zD = this[yR('0x1f')][yR('0x20')], zE = this[yR('0x24')][yR('0x20')], zF = zD instanceof kg,
      zG = zE instanceof kg;
    if (0x0 != zF && 0x0 != zG && (cc(zC = nJ(zD, zE)), this[yR('0x3b')] !== zC)) return this['changeParent'](zC), zC;
  }

  [yR('0x49')]() {
    var zH = this[yR('0x1f')][yR('0x20')], zI = this[yR('0x24')][yR('0x20')];
    return zH[yR('0x3b')] === zI['parent'];
  }

  ['isAlone']() {
    let zJ = 0x0;
    return null != this[yR('0x1f')] && this['begin'][yR('0x20')] instanceof kg && zJ++, null != this[yR('0x24')] && this['end'][yR('0x20')] instanceof kg && zJ++, 0x0 == zJ;
  }

  [yR('0x4a')]() {
    return null != this['begin'] && this['begin'][yR('0x20')] instanceof kg;
  }

  [yR('0x4b')]() {
    return null != this[yR('0x24')] && this[yR('0x24')]['target'] instanceof kg;
  }

  [yR('0x4c')]() {
    cj(this['begin'][yR('0x20')][yR('0x21')]), this[yR('0x3')](this[yR('0x26')]());
  }

  [yR('0x4d')]() {
    cj(this['end']['target'][yR('0x21')]), this['setEnd'](this[yR('0x27')]());
  }

  [yR('0x4e')]() {
    null != this['begin'] && this['begin'][yR('0x20')] && this[yR('0x1f')][yR('0x20')][yR('0x21')] && this[yR('0x1f')]['target'][yR('0x22')](this), null != this['end'] && this['end']['target'] && this[yR('0x24')][yR('0x20')][yR('0x25')] && this[yR('0x24')][yR('0x20')][yR('0x4f')](this);
  }
}

function zK(zL, zM) {
  let zN, zO = zM['target'];
  cc(zO, zL);
  var zP = zM[yR('0x50')];
  if (zO instanceof kg) if (zO[yR('0x51')] && null == zO[yR('0x0')] && zO[yR('0x6')](), zP == c7['lineSegment']) {
    var zQ = zM['segIndex'], zR = zM['t'];
    zN = zS(zL, zO, zQ, zR), cc(zN);
  } else if (zP == c7[yR('0x52')]) zN = A0(zL, zO, zM[yR('0x53')]), cc(zN); else if (zP == c7['nearest']) zN = A6(zL, zM), cc(zN); else {
    if (zP != c7[yR('0x54')]) throw console['log'](zM), new Error('Invalid\x20link\x27s\x20position\x20arguments');
    zN = zM, cc(zN);
  } else if (typeof zO == yR('0x55')) zN = zO(); else {
    if (!i8['isLikePoint'](zO)) throw console[yR('0x56')](zO), new Error(yR('0x57'));
    zN = new i8(zO['x'], zO['y']);
  }
  return cc(zN), zN;
}

function zS(zT, zU, zV, zW, zX) {
  let zY;
  if (zU[yR('0x3b')] === zT['parent']) zY = zU[yR('0x5b')](zW, zV, zX), zY = zU[yR('0x5c')]()[yR('0x54')](zY); else {
    let zZ;
    zZ = (zT['deep'] == co ? zT : zT['parent'])[yR('0x5d')](), zY = zU[yR('0x5b')](zW, zV, zX), zY = zU[yR('0x5d')]()[yR('0x54')](zY), zY = zZ['invert']()['point'](zY);
  }
  return zY;
}

function A0(A1, A2, A3) {
  let A4;
  if (A2[yR('0x3b')] === A1[yR('0x3b')]) A4 = A2[yR('0x5e')](A3), A2[yR('0x25')] && (A4 = A2['getTransform']()[yR('0x54')](A4)), cc(A4, A2, A3); else {
    cc(A1[yR('0x3b')], A1);
    let A5;
    A5 = (A1['deep'] == co ? A1 : A1[yR('0x3b')])[yR('0x5d')](), A4 = A2[yR('0x5e')](A3), A4 = A2['getLayerTransform']()[yR('0x54')](A4), A4 = A5[yR('0x5f')]()[yR('0x54')](A4), cc(A4, A2, A3);
  }
  return A4;
}

function A6(A7, A8) {
  if (0x0 == A7['deep']) throw new Error(yR('0x60'));
  let A9 = A8['target'], Aa;
  Aa = (A7['deep'] == co ? A7 : A7[yR('0x3b')])[yR('0x5d')]();
  var Ab = A7[yR('0x1f')][yR('0x20')] === A9, A8 = Ab ? A7[yR('0x24')] : A7[yR('0x1f')];
  const Ad = A8['target'];
  if (Ad[yR('0x51')] && null == Ad[yR('0x0')]) throw new Error(yR('0x61'));
  let Ae;
  Ae = A8['type'] == c7['nearest'] ? (Ae = Ad[yR('0x5e')](c6['center']), Ad[yR('0x5d')]()[yR('0x54')](Ae)) : (Ae = zK(A7, Ab ? A7[yR('0x24')] : A7['begin']), Aa[yR('0x54')](Ae)), Ae = A9[yR('0x5d')]()[yR('0x5f')]()[yR('0x54')](Ae);
  A7 = A9[yR('0x46')](Ae['x'], Ae['y']), A7 = A9['getLayerTransform']()[yR('0x54')](A7);
  return Aa[yR('0x5f')]()[yR('0x54')](A7);
}

Object[yR('0x58')](yU[yR('0x59')], {
  'text': {
    'get'() {
      return this[yR('0xa')] ? this['label'][yR('0x4')] : this[yR('0x5a')];
    }, 'set'(Af) {
      this[yR('0x1e')] = !0x0, this[yR('0x5a')] != Af && (this['_textDirty'] = !0x0), this[yR('0xd')](Af), this[yR('0x5a')] = Af;
    }
  }
});
const Ag = {};
Ag[c6[yR('0x1f')]] = function () {
  return this[yR('0x0')][0x0];
}, Ag[c6[yR('0x24')]] = function () {
  return this['points'][0x1];
}, Ag[c6[yR('0xb')]] = function () {
  return i8[yR('0x62')](this['points'][0x0], this['points'][0x1]);
}, bN(yU['prototype'], {
  'className': {'value': yR('0x63'), 'writable': !0x1},
  'points': {},
  'isLink': {'value': !0x0, 'writable': !0x1, 'enumerable': !0x1},
  '_pickRadius': {'value': 0x4, 'enumerable': !0x1},
  'begin': {'value': null},
  'end': {'value': null},
  'draggable': {'value': !0x0},
  'painter': {'enumerable': !0x1},
  'zIndex': {'value': c9[yR('0x63')]},
  '_textHeight': {},
  '_textDirty': {'value': !0x1},
  'DefaultPositions': {'value': Ag},
  'beginOffset': {'value': 0x0},
  'endOffset': {'value': -0x0},
  'serializers': {'value': kg['prototype'][yR('0x64')]['concat']([yR('0x43'), yR('0x44')])}
}), yU[yR('0x59')][yR('0x65')] = function () {
  return [yR('0x1f'), 'end'];
};
var Ah = ['prototype', 'serializers', 'concat', 'getAnchorPoints', 'begin', 'mousedragHandler', 'ctrlPoint1', 'ctrlPoint2', '_ctrlPoint1', '_ctrlPoint2', 'drawPoints', 'beginPath', 'style', 'lineCap', 'lineWidth', 'strokeStyle', 'borderColor', 'lineDash', 'borderStyle', 'dotted', 'setLineDash', 'moveTo', 'calcCtrlPoint1', 'calcCtrlPoint2', 'bezierCurveTo', 'getPoint', 'points', 'center', 'BezierLink'];
!function (Ai) {
  !function (Aj) {
    for (; --Aj;) Ai['push'](Ai['shift']());
  }(0x145);
}(Ah);
var Ak = function (Al, Am) {
  return Ah[Al = +Al];
};

class An extends yU {
  constructor(Ao, Ap, Aq, Ar, As) {
    super(Ao, Ap, Aq, Ar, As);
  }

  [Ak('0x0')](At) {
    super[Ak('0x0')](At);
    const Au = At['details'];
    if (this[Ak('0x1')] || this[Ak('0x2')]) {
      var Av = Au['isDragStart'], Ay = Au['toObjectLocalDXY'](this), At = Ay['dx'], Ay = Ay['dy'];
      let Az = this['ctrlPoint1'], AA = this[Ak('0x2')];
      Az && (Av && (this[Ak('0x3')] = {
        'x': Az['x'],
        'y': Az['y']
      }), Az['x'] = this[Ak('0x3')]['x'] + At, Az['y'] = this[Ak('0x3')]['y'] + Ay), this[Ak('0x2')] && (Av && (this[Ak('0x4')] = {
        'x': AA['x'],
        'y': AA['y']
      }), AA['x'] = this[Ak('0x4')]['x'] + At, AA['y'] = this[Ak('0x4')]['y'] + Ay);
    }
  }

  [Ak('0x5')](AB, AC) {
    var AD = AC[0x0], AE = AC[0x1], AF = this['style'];
    AB[Ak('0x6')](), this['style'] && this[Ak('0x7')]['lineCap'] && (AB[Ak('0x8')] = this[Ak('0x7')][Ak('0x8')]), AB[Ak('0x9')] = AF['borderWidth'] || 0x1, AB[Ak('0xa')] = AF[Ak('0xb')], null == AF[Ak('0xc')] && ('dashed' != AF[Ak('0xd')] && AF['borderStyle'] != Ak('0xe') || AB[Ak('0xf')]([0x1, 0x1])), AB[Ak('0x10')](AD['x'], AD['y']);
    AC = this[Ak('0x11')](AD, AE), AF = this[Ak('0x12')](AD, AE);
    if (null == this[Ak('0x1')] && null == this[Ak('0x2')]) {
      let AG = (AD['x'] + AE['x']) / 0x2, AH = (AD['y'] + AE['y']) / 0x2;
      AB[Ak('0x13')](AC['x'] + AG, AC['y'] + AH, AF['x'] + AG, AF['y'] + AH, AE['x'], AE['y']);
    } else AB[Ak('0x13')](AC['x'], AC['y'], AF['x'], AF['y'], AE['x'], AE['y']);
  }

  [Ak('0x11')](AI, AJ) {
    if (null != this[Ak('0x1')]) return this['ctrlPoint1'];
    AJ = {'x': (AI['x'] + AJ['x']) / 0x2, 'y': (AI['y'] + AJ['y']) / 0x2}, AI = g2(AI, AJ);
    return {'x': AI['x'] - AJ['x'], 'y': AI['y'] - AJ['y']};
  }

  [Ak('0x12')](AK, AL) {
    if (null != this[Ak('0x2')]) return this[Ak('0x2')];
    AK = {'x': (AK['x'] + AL['x']) / 0x2, 'y': (AK['y'] + AL['y']) / 0x2}, AL = g2(AL, AK);
    return {'x': AL['x'] - AK['x'], 'y': AL['y'] - AK['y']};
  }

  ['resetCtrlPoint']() {
    this['ctrlPoint1'] = void 0x0, this[Ak('0x2')] = void 0x0;
  }

  [Ak('0x14')](AM, AN) {
    var AO = zK(this, this['begin']), AP = zK(this, this['end']);
    let AQ = (AO['x'] + AP['x']) / 0x2, AR = (AO['y'] + AP['y']) / 0x2;
    var AX = this['calcCtrlPoint1'](AO, AP), AV = this['calcCtrlPoint2'](AO, AP),
      AX = {'x': AQ + AX['x'], 'y': AR + AX['y']}, AV = {'x': AQ + AV['x'], 'y': AR + AV['y']}, AO = fw(AO, AX, AM),
      AX = fw(AX, AV, AM), AP = fw(AV, AP, AM), AO = fw(AO, AX, AM), AP = fw(AX, AP, AM);
    return fw(AO, AP, AM);
  }
}

const B1 = {};
B1[c6['begin']] = function () {
  return this[Ak('0x15')][0x0];
}, B1[c6['end']] = function () {
  return this['points'][0x1];
}, B1[c6[Ak('0x16')]] = function () {
  return this[Ak('0x14')](0.5, 0x0);
}, B1[c6[Ak('0x1')]] = function () {
  return null != this[Ak('0x1')] ? this[Ak('0x1')] : this[Ak('0x11')](this['points'][0x0], this['points'][0x1]);
}, B1[c6['ctrlPoint2']] = function () {
  return null != this['ctrlPoint2'] ? this[Ak('0x2')] : this[Ak('0x12')](this[Ak('0x15')][0x0], this[Ak('0x15')][0x1]);
}, bN(An['prototype'], {
  'className': {'value': Ak('0x17'), 'writable': !0x1},
  'ctrlPoint1': {},
  'ctrlPoint2': {},
  'DefaultPositions': {'value': B1},
  'serializers': {'value': yU[Ak('0x18')][Ak('0x19')][Ak('0x1a')]([Ak('0x1'), Ak('0x2')])}
}), An[Ak('0x18')][Ak('0x1b')] = function () {
  return [Ak('0x1c'), 'end', 'ctrlPoint1', 'ctrlPoint2'];
};
var B2 = ['drawPoints', 'style', 'lineWidth', 'borderWidth', 'strokeStyle', 'borderColor', 'lineDash', 'borderStyle', 'dashed', 'dotted', 'setLineDash', 'sqrt', 'atan2', 'beginPath', 'getPoint', 'getPoints', 'direction', 'cos', 'sin', 'prototype', 'ArcLink'];
!function (B3) {
  !function (B4) {
    for (; --B4;) B3['push'](B3['shift']());
  }(0xfd);
}(B2);
var B5 = function (B6, B7) {
  return B2[B6 = +B6];
};

class B8 extends yU {
  constructor(B9, Ba, Bb, Bc, Bd) {
    super(B9, Ba, Bb, Bc, Bd);
  }

  [B5('0x0')](Be, Bf) {
    var Bg = this[B5('0x1')];
    Be[B5('0x2')] = Bg[B5('0x3')] || 0x1, Be[B5('0x4')] = Bg[B5('0x5')], null == Bg[B5('0x6')] && (Bg[B5('0x7')] != B5('0x8') && Bg[B5('0x7')] != B5('0x9') || Be[B5('0xa')]([0x1, 0x1]));
    var Bn = Bf[0x0], Bm = Bf[0x1], Bj = (Bn['x'] + Bm['x']) / 0x2, Bg = (Bn['y'] + Bm['y']) / 0x2,
      Bf = Bm['x'] - Bn['x'], Bm = Bm['y'] - Bn['y'], Bn = Math[B5('0xb')](Bf * Bf + Bm * Bm) / 0x2;
    let Bo = Math[B5('0xc')](Bm, Bf);
    -0x1 == this['direction'] && (Bo += Math['PI']);
    Bf = Bo + Math['PI'];
    Be[B5('0xd')](), Be['arc'](Bj, Bg, Bn, Bo, Bf);
  }

  [B5('0xe')](Bp) {
    var Bv = this[B5('0xf')](), Bx = Bv[0x0], Bw = Bv[0x1], Bt = (Bx['x'] + Bw['x']) / 0x2,
      Bu = (Bx['y'] + Bw['y']) / 0x2, Bv = Bw['x'] - Bx['x'], Bw = Bw['y'] - Bx['y'],
      Bx = Math[B5('0xb')](Bv * Bv + Bw * Bw) / 0x2;
    let By = Math[B5('0xc')](Bw, Bv);
    -0x1 == this[B5('0x10')] && (By += Math['PI']);
    Bv = By + Math['PI'], Bp = By + (Bv - By) * Bp;
    return {'x': Bt + Bx * Math[B5('0x11')](Bp), 'y': Bu + Bx * Math[B5('0x12')](Bp)};
  }
}

bN(B8[B5('0x13')], {
  'className': {'value': B5('0x14'), 'writable': !0x1},
  'direction': {},
  'serializers': {'value': yU[B5('0x13')]['serializers']['concat']([B5('0x10')])}
});
var Bz = ['logOutOfCanvas', 'log', 'isout', 'paintBefore', 'isPointOn', 'ctxTransform', 'dirty', 'style', 'isSelected', 'showSelected', 'draw', 'paintAfter', 'paintChildren', 'displayList', 'push', 'paintSelected', 'selectedStyle', 'isNode', 'lineWidth', 'setLineDash', 'rect', 'height', 'stroke', 'closePath', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY', 'getOrigin', 'translate', 'skewX', 'skewY', 'scaleX', 'scaleY', 'getOriginRotation', 'rotation', 'getPosition', 'center', 'rotateTarget', 'clearAll', 'dontNeedPickup', 'mouseX', 'mouseY', 'mouseInfo', 'selectedGroup', 'isEmpty', 'isMouseInObjectAABB', '_pickRadius', 'mousePointInLayer', 'contains', 'stage', 'isPointInStroke', 'isMouseInPath', 'isPointInPath', 'contextExtends', 'isMouseInStroke', 'rotate', 'roundRect', 'beginPath', 'moveTo', 'lineTo', 'quadraticCurveTo', 'drawImageFull', 'drawImage', 'fillRect', 'toStageAABB', 'strokeStyle', 'rgba(0,0,255,0.3)', 'pink', 'green', 'canvas', 'getContext', 'render', 'init', 'devicePixelRatio', 'context', 'scale', 'setSize', 'width', 'renderLayer', 'visible', 'dragDrawDelay', 'isDraging', 'paintPrepare', 'clear', 'paint', 'paintAABB', 'layer', 'length', 'save', 'balA', 'lpha', 'font', 'fillStyle', 'getHeight', 'restore', '_aabbInLayer', 'getViewRectInLayer', 'isIntersectRect', 'painted', 'getAABB', 'cuttingHide'];
!function (BA) {
  !function (BB) {
    for (; --BB;) BA['push'](BA['shift']());
  }(0x1df);
}(Bz);
var BC = function (BE, BF) {
  return Bz[BE = +BE];
}, BD = oY['gc'];
let BG = d3['w'];

class BH extends oF {
  constructor() {
    super(), this['context'] = this[BC('0x0')][BC('0x1')]('2d'), (this['context'][BC('0x2')] = this)['init']();
  }

  [BC('0x3')]() {
    window[BC('0x4')] && this[BC('0x5')][BC('0x6')](window['devicePixelRatio'], window[BC('0x4')]), this[BC('0x7')](this[BC('0x0')][BC('0x8')], this[BC('0x0')]['height']), this['contextExtends']();
  }

  [BC('0x9')](BI) {
    if (0x0 != BI[BC('0xa')] && !(BI[BC('0xb')] && BI[BC('0xc')] || (BI['requestReapint'] = !0x1, null == BI['stage'] || null == BI[BC('0x2')]))) {
      if (BI[BC('0xd')] && BI[BC('0xd')](), this[BC('0xe')](), this[BC('0xf')](BI), 0x1 == ov[BC('0x10')] && null != this[BC('0x11')]) {
        var BJ = BI['getChildren']();
        if (null != BJ) for (var BK = BJ[BC('0x12')] - 0x1; 0x0 <= BK; BK--) {
          var BL = BJ[BK];
          this[BC('0x10')](BL);
        }
      }
      {
        if (null == BG) return;
        let BJ = this['context'];
        BJ[BC('0x13')](), BJ['glo' + BC('0x14') + BC('0x15')] = 0.8, BJ[BC('0x16')] = 'bold\x2016px\x20arial';
        BI = BD(BG);
        BJ[BC('0x17')] = 'gray', BJ['fillText'](BI, 0xe, this[BC('0x18')]() - 0xe), BJ[BC('0x19')]();
      }
    }
  }

  ['isOutOfCanvas'](BN) {
    if (BN instanceof vG) return !0x1;
    if (null == this[BC('0x11')]) return !0x1;
    const BO = this[BC('0x11')];
    BN = BN[BC('0x1a')];
    let BP = BO[BC('0x1b')]();
    return !BP[BC('0x1c')](BN);
  }

  ['paintPrepare'](BQ) {
    if ((BQ[BC('0x1d')] = !0x1, BQ[BC('0xd')]) && 0x0 == BQ['paintPrepare'](this)) return !0x1;
    if (0x0 == BQ[BC('0xa')]) return !0x1;
    BQ[BC('0x1a')] = BQ[BC('0x1e')](!0x1, co);
    var BR = this[BC('0x11')];
    return 0x1 != (null != BR && BR[BC('0x1f')]) || !this['isOutOfCanvas'](BQ) || (ov[BC('0x20')] && console[BC('0x21')](BQ['id'], BC('0x22')), !0x1);
  }

  [BC('0x23')](BS) {
    let BT = this[BC('0x5')];
    null != BS['cleanPaint'] && BS['cleanPaint'](BT), BT[BC('0x13')](), null != this[BC('0x11')] && (BS[BC('0x24')] = !0x1), this[BC('0x25')](BS);
  }

  [BC('0xf')](BU) {
    let BV = this[BC('0x5')];
    BU[BC('0x26')] = !0x1, BU[BC('0x23')] && BU[BC('0x23')](BV), this[BC('0x23')](BU);
    const BW = BU[BC('0x27')];
    return null != BW && BW['applyTo'](BV), BU[BC('0x28')] && 0x1 == BU[BC('0x29')] && (BV[BC('0x13')](), this['paintSelected'](BU)), BU[BC('0x2a')](BV), BU[BC('0x28')] && 0x1 == BU['showSelected'] && BV['restore'](), this[BC('0x2b')](BU), BU['paintAfter'] && BU[BC('0x2b')](BV), BU;
  }

  [BC('0x2b')](BX) {
    let BY = this[BC('0x5')];
    this[BC('0x2c')](BX), BY[BC('0x19')](), BX['painted'] = !0x0;
  }

  [BC('0x2c')](BZ) {
    var C0 = BZ['children'];
    if (0x0 != C0[BC('0x12')]) {
      const C1 = this[BC('0x11')];
      for (var C2 = 0x0; C2 < C0[BC('0x12')]; C2++) {
        var C3 = C0[C2];
        0x1 == this['paintPrepare'](C3) && (this[BC('0xf')](C3), C1 && C1[BC('0x2d')][BC('0x2e')](C3));
      }
    }
  }

  [BC('0x2f')](C4) {
    let C5 = this[BC('0x5')];
    if (null != C4[BC('0x30')] && C4[BC('0x30')]['applyTo'](C5), null == C4['paintSelected']) if (C4[BC('0x31')]) {
      C5[BC('0x13')](), C5['beginPath']();
      let C6 = 0x2;
      null != C4['selectedStyle'] ? C6 = C4[BC('0x30')][BC('0x32')] | C6 : (C5[BC('0x33')]([0x0, 0x0]), C5['strokeStyle'] = C4['shadowColor']), C5[BC('0x34')](0.5 * -C6 - 1.5, 0.5 * -C6 - 1.5, C4[BC('0x8')] + C6 + 0x3, C4[BC('0x35')] + C6 + 0x3), C5[BC('0x36')](), C5[BC('0x37')](), C5['restore']();
    } else C5[BC('0x38')] = C4[BC('0x38')], C5[BC('0x39')] = 0x5, C5[BC('0x3a')] = 0x3, C5[BC('0x3b')] = 0x3; else C4[BC('0x2f')](C5);
  }

  ['ctxTransform'](C7) {
    let C8 = this[BC('0x5')];
    var C9 = C7[BC('0x3c')]();
    C8[BC('0x3d')](C9[0x0] + C7['x'], C9[0x1] + C7['y']), 0x0 == C7[BC('0x3e')] && 0x0 == C7['skewY'] || C8['transform'](0x1, C7['skewX'], C7[BC('0x3f')], 0x1, 0x0, 0x0), 0x1 === C7[BC('0x40')] && 0x1 === C7[BC('0x41')] || C8[BC('0x6')](C7[BC('0x40')], C7[BC('0x41')]);
    C9 = C7[BC('0x42')]() + C7[BC('0x43')];
    0x0 != C9 && (C7 = C7[BC('0x44')](c6[BC('0x45')]), C8[BC('0x46')](C9, C7['x'], C7['y']));
  }

  [BC('0x47')]() {
    this['clear']();
  }

  [BC('0x48')](Ca) {
    let Cb = this['stage'];
    return null == Cb || (null == this['layer'] || (null == Cb[BC('0x49')] || null == Cb[BC('0x4a')] || (0x1 == Cb[BC('0x4b')]['isIdle'] || (!(!Cb[BC('0x4c')][BC('0x4d')]() || !Cb[BC('0x4b')][BC('0xc')]) || !this['isMouseInObjectAABB'](Ca)))));
  }

  [BC('0x4e')](Cc) {
    if (Cc instanceof An || Cc instanceof B8) return !0x0;
    let Cd = Cc[BC('0x1a')]['clone']();
    Cc = Cc[BC('0x4f')] || 0x6;
    Cd['x'] -= Cc, Cd['y'] -= Cc, Cd[BC('0x8')] += 0x2 * Cc, Cd['height'] += 0x2 * Cc;
    Cc = this[BC('0x11')][BC('0x50')];
    return Cd[BC('0x51')](Cc['x'], Cc['y']);
  }

  ['isMouseInStroke'](Ce, Cf) {
    let Cg = this[BC('0x5')];
    var Ch = this[BC('0x52')];
    if (null == Ce || 0x0 == Ce) return null != Cf ? Cg['isPointInStroke'](Cf, Ch[BC('0x49')], Ch[BC('0x4a')]) : Cg['isPointInStroke'](Ch[BC('0x49')], Ch[BC('0x4a')]);
    let Ci = !0x1;
    for (var Cj = 0x0; Cj < Ce; Cj++) {
      if (Ci = null != Cf ? Cg[BC('0x53')](Cf, Ch[BC('0x49')] + Cj, Ch[BC('0x4a')] + Cj) : Cg['isPointInStroke'](Ch[BC('0x49')] + Cj, Ch[BC('0x4a')] + Cj), Ci) return !0x0;
      if (Ci = null != Cf ? Cg[BC('0x53')](Cf, Ch[BC('0x49')] - Cj, Ch[BC('0x4a')] - Cj) : Cg['isPointInStroke'](Ch[BC('0x49')] - Cj, Ch[BC('0x4a')] - Cj), Ci) return !0x0;
      if (Ci = null != Cf ? Cg[BC('0x53')](Cf, Ch[BC('0x49')] - Cj, Ch[BC('0x4a')] + Cj) : Cg['isPointInStroke'](Ch[BC('0x49')] - Cj, Ch[BC('0x4a')] + Cj), Ci) return !0x0;
      if (Ci = null != Cf ? Cg['isPointInStroke'](Cf, Ch['mouseX'] + Cj, Ch[BC('0x4a')] - Cj) : Cg['isPointInStroke'](Ch[BC('0x49')] + Cj, Ch[BC('0x4a')] - Cj), Ci) return !0x0;
    }
    return !0x1;
  }

  [BC('0x54')](Ck) {
    let Cl = this[BC('0x5')];
    var Cm = this['stage'];
    return Ck ? Cl['isPointInPath'](Ck, Cm['mouseX'], Cm[BC('0x4a')]) : Cl[BC('0x55')](Cm[BC('0x49')], Cm[BC('0x4a')]);
  }

  [BC('0x56')]() {
    let Cn = this;
    this[BC('0x5')][BC('0x57')] = function (Co, Cp) {
      return Cn[BC('0x57')](Co, Cp);
    }, this['context'][BC('0x54')] = function (Cq) {
      return Cn[BC('0x54')](Cq);
    }, this[BC('0x5')][BC('0x46')] = function (Cr, Cs, Cn) {
      this[BC('0x3d')](Cs, Cn), this[BC('0x58')](Cr), this[BC('0x3d')](-Cs, -Cn);
    }, this[BC('0x5')][BC('0x59')] = function (Cu, Cv, Cn, Cx, Cy) {
      this[BC('0x11')], void 0x0 === Cy && (Cy = 0x5), this[BC('0x5a')](), this[BC('0x5b')](Cu + Cy, Cv), this[BC('0x5c')](Cu + Cn - Cy, Cv), this[BC('0x5d')](Cu + Cn, Cv, Cu + Cn, Cv + Cy), this[BC('0x5c')](Cu + Cn, Cv + Cx - Cy), this[BC('0x5d')](Cu + Cn, Cv + Cx, Cu + Cn - Cy, Cv + Cx), this[BC('0x5c')](Cu + Cy, Cv + Cx), this[BC('0x5d')](Cu, Cv + Cx, Cu, Cv + Cx - Cy), this[BC('0x5c')](Cu, Cv + Cy), this[BC('0x5d')](Cu, Cv, Cu + Cy, Cv), this[BC('0x37')]();
    }, this[BC('0x5')][BC('0x5e')] = function (Cz, CA, Cn) {
      this[BC('0x5f')](Cz, CA || 0x0, Cn || 0x0, this[BC('0x0')][BC('0x8')], this[BC('0x0')][BC('0x35')]);
    }, this['context']['fillRectFull'] = function () {
      this[BC('0x60')](0x0, 0x0, this['canvas'][BC('0x8')], this[BC('0x0')][BC('0x35')]);
    };
  }

  [BC('0x10')](CC) {
    let CD = this[BC('0x11')], CE = this['context'];
    var CG = CC[BC('0x1e')](!0x1, co), CG = CD[BC('0x61')](CG);
    CE['save'](), CC instanceof vG ? CE[BC('0x62')] = BC('0x63') : CC instanceof yU ? CE[BC('0x62')] = BC('0x64') : CE[BC('0x62')] = BC('0x65'), CE[BC('0x5a')](), CE['rect'](CG['x'], CG['y'], CG[BC('0x8')], CG['height']), CE[BC('0x36')](), CE['closePath'](), CE['restore']();
  }
}

var CH = ['glo', 'balA', 'lpha', 'font', 'bold\x2016px\x20arial', 'white', 'fillText', 'render', 'getHeight', 'restore', 'paintAfter', 'showFPS', 'getChildren', 'length', 'showFps', 'ceil', 'mouseY', 'debugInfo', 'back', 'stage', 'style', 'red', '13px\x20arial', 'areaBox', 'css', 'strokeStyle', 'fillStyle', 'rgba(0,0,236,0.1)', 'addChild', 'mouseoutHandler', 'hide', 'draw', 'save'];
!function (CI) {
  !function (CJ) {
    for (; --CJ;) CI['push'](CI['shift']());
  }(0x19f);
}(CH);
var CK = function (CM, CN) {
  return CH[CM = +CM];
}, CL = oY['gc'];
let CO = d3['w'];

class CP extends vG {
  constructor(CQ) {
    super(), gj[CK('0x0')](), this[CK('0x1')] = CQ, this[CK('0x2')] = new da({
      'fillStyle': CK('0x3'),
      'font': CK('0x4')
    }), this[CK('0x5')] = new so(), gj[CK('0x0')](), this['areaBox'][CK('0x6')](CK('0x7'), 'rgba(0,0,0,0.5)'), this[CK('0x5')][CK('0x6')](CK('0x8'), CK('0x9')), this[CK('0xa')](this[CK('0x5')]);
  }

  [CK('0xb')](CR) {
    this[CK('0x5')][CK('0xc')]();
  }

  [CK('0xd')](CS) {
    var CT;
    null != CO && (CS[CK('0xe')](), CS[CK('0xf') + CK('0x10') + CK('0x11')] = 0.6, CS[CK('0x12')] = CK('0x13'), CT = CL(CO), CS[CK('0x8')] = CK('0x14'), CS[CK('0x15')](CT, 0x10, this[CK('0x16')][CK('0x17')]() - 0x10), CS[CK('0x18')]());
  }

  [CK('0x19')](CU) {
    0x1 == ov[CK('0x1a')] && this[CK('0x1a')](CU);
  }

  ['showFPS'](CV) {
    var CW = this['stage'][CK('0x1b')]();
    let CX = 0x0;
    for (var CY = 0x0; CY < CW[CK('0x1c')]; CY++) {
      var CZ = CW[CY];
      CX += CZ['displayList'][CK('0x1c')];
    }
    if (this[CK('0x1d')]) {
      CV[CK('0xe')]();
      let CW = '(\x20x:\x20' + Math[CK('0x1e')](this[CK('0x1')]['mouseX']) + '\x20y:\x20' + Math[CK('0x1e')](this[CK('0x1')][CK('0x1f')]) + ')\x20Count:' + CX;
      ov[CK('0x20')] && (CW += '\x20' + ov['debugInfo']), CV['fillText'](CW, 0xa, 0xf), CV[CK('0x18')]();
    }
  }
}

bN(CP['prototype'], {
  'controlTarget': {'value': null},
  '_frames': {'value': 0x0},
  'zIndex': {'value': c9['HandlerLayerCanvas']},
  'render': {'value': null},
  'showFps': {'value': !0x0},
  'stage': {'value': null},
  'mouseX': {'value': 0x0},
  'mouseY': {'value': 0x0},
  'mouseDownX': {'value': 0x0},
  'mouseDownY': {'value': 0x0}
});
var D1 = ['end', 'time', 'action', 'set', 'begin', 'setEnd', 'stop', 'pause', 'forEach', 'push', 'slice', 'timer', 'clearInterval', 'continue', 'frames'];
!function (D2) {
  !function (D3) {
    for (; --D3;) D2['push'](D2['shift']());
  }(0x1ef);
}(D1);
var D4 = function (D5, D6) {
  return D1[D5 = +D5];
};

class D7 {
  constructor(D8, D9, Da, Db) {
    this[D4('0x0')] = 0x3c, this['begin'] = D8, this[D4('0x1')] = D9, this[D4('0x2')] = Da, this[D4('0x3')] = Db;
  }

  [D4('0x4')](Dc, Dd, De, Df) {
    this[D4('0x5')] = Dc, this[D4('0x1')] = Dd, this[D4('0x2')] = De, this[D4('0x3')] = Df;
  }

  ['setBegin'](Dg) {
    return this[D4('0x5')] = Dg, this;
  }

  [D4('0x6')](Dh) {
    return this[D4('0x1')] = Dh, this;
  }

  ['setTime'](Di) {
    return this[D4('0x2')] = Di, this;
  }

  ['onUpdate'](Dj) {
    return this[D4('0x3')] = Dj, this;
  }

  [D4('0x7')]() {
    return this;
  }

  [D4('0x8')]() {
    return this;
  }

  ['continue']() {
    return this;
  }

  ['play']() {
    const Dk = this;
    var Dl = this[D4('0x5')], Dm = this[D4('0x1')], Dn = this[D4('0x2')];
    const Do = this[D4('0x3')], Dp = 'number' != typeof Dl;
    let Dq = Dk[D4('0x0')] * (Dn / 0x3e8), Dr = Dl, Ds = Dm;
    Dp || (Dr = [Dl], Ds = [Dm]);
    const Dt = [];
    let Du = [];
    Dr[D4('0x9')]((Dl, Dm) => {
      Dl = Ds[Dm] - Dl;
      Dt[D4('0xa')](Dl), Du[D4('0xa')](Dl / Dq);
    });
    let Dx = Dr[D4('0xb')](), Dy = 0x0;
    null != Dk[D4('0xc')] && (window[D4('0xd')](Dk[D4('0xc')]), Dk[D4('0xc')] = null);
    let Dz = 0x3e8 / Dk['frames'];
    return new Promise(function (Dl, Dm) {
      let Dn = !0x1, Dr = !0x1;
      Dk['stop'] = function () {
        return Dn = !0x0, Dm(), this;
      }, Dk[D4('0x8')] = function () {
        return Dr = !0x0, this;
      }, Dk[D4('0xe')] = function () {
        return Dr = !0x1, this;
      }, Dk[D4('0xc')] = setInterval(function () {
        if (Dn) window['clearInterval'](Dk['timer']); else if (!Dr) {
          if (Dy == Dq) return window['clearInterval'](Dk[D4('0xc')]), Dp ? Do(Ds) : Do(Ds[0x0]), Dl();
          Dp ? Do(Dx) : Do(Dx[0x0]), Dx[D4('0x9')]((Dl, Dm) => {
            Dx[Dm] = Dl + Du[Dm];
          }), Dy++;
        }
      }, Dz);
    });
  }
}

var DG = ['querySelector', 'createElement', 'innerHTML', 'get'];
!function (DH) {
  !function (DI) {
    for (; --DI;) DH['push'](DH['shift']());
  }(0x1b6);
}(DG);
var DJ = function (DK, DL) {
  return DG[DK = +DK];
};
let DM = '\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22zoom-in\x22>\x0a<path\x20d=\x22M4,20\x20L9.58788778,14.4121122\x22/>\x0a<path\x20d=\x22M14,16\x20C10.6862915,16\x208,13.3137085\x208,10\x20C8,6.6862915\x2010.6862915,4\x2014,4\x20C17.3137085,4\x2020,6.6862915\x2020,10\x20C20,13.3137085\x2017.3137085,16\x2014,16\x20Z\x22/>\x0a<path\x20d=\x22M16.6666667\x2010L11.3333333\x2010M14\x207.33333333L14\x2012.6666667\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22zoom-out\x22>\x0a<path\x20d=\x22M14,16\x20C10.6862915,16\x208,13.3137085\x208,10\x20C8,6.6862915\x2010.6862915,4\x2014,4\x20C17.3137085,4\x2020,6.6862915\x2020,10\x20C20,13.3137085\x2017.3137085,16\x2014,16\x20Z\x22/>\x0a<path\x20d=\x22M16.6666667\x2010L11.3333333\x2010M4\x2020L9.58788778\x2014.4121122\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22back-left\x22>\x0a<path\x20d=\x22M5,17\x20L5,15\x20C5,10.0294373\x208.80557963,6\x2013.5,6\x20C18.1944204,6\x2022,10.0294373\x2022,15\x22/>\x0a<polyline\x20points=\x228\x2015\x205\x2018\x202\x2015\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22align-center\x22>\x0a<path\x20d=\x22M8\x2010L16\x2010M6\x206L18\x206M6\x2014L18\x2014M8\x2018L16\x2018\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22edit\x22>\x0a<path\x20d=\x22M18.4142136\x204.41421356L19.5857864\x205.58578644C20.366835\x206.36683502\x2020.366835\x207.63316498\x2019.5857864\x208.41421356L8\x2020\x204\x2020\x204\x2016\x2015.5857864\x204.41421356C16.366835\x203.63316498\x2017.633165\x203.63316498\x2018.4142136\x204.41421356zM14\x206L18\x2010\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22lock-alt\x22>\x0a<rect\x20width=\x2214\x22\x20height=\x2210\x22\x20x=\x225\x22\x20y=\x2211\x22/>\x0a<path\x20d=\x22M12,3\x20L12,3\x20C14.7614237,3\x2017,5.23857625\x2017,8\x20L17,11\x20L7,11\x20L7,8\x20C7,5.23857625\x209.23857625,3\x2012,3\x20Z\x22/>\x0a<circle\x20cx=\x2212\x22\x20cy=\x2216\x22\x20r=\x221\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22lock-open\x22>\x0a<path\x20d=\x22M7,7.625\x20L7,7\x20C7,4.23857625\x209.23857625,2\x2012,2\x20L12,2\x20C14.7614237,2\x2017,4.23857625\x2017,7\x20L17,11\x22/>\x0a<rect\x20width=\x2214\x22\x20height=\x2210\x22\x20x=\x225\x22\x20y=\x2211\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22pan\x22>\x0a<path\x20d=\x22M20,14\x20L20,17\x20C20,19.209139\x2018.209139,21\x2016,21\x20L10.0216594,21\x20C8.75045497,21\x207.55493392,20.3957659\x206.80103128,19.3722467\x20L3.34541668,14.6808081\x20C2.81508416,13.9608139\x202.94777982,12.950548\x203.64605479,12.391928\x20C4.35756041,11.8227235\x205.38335813,11.8798792\x206.02722571,12.5246028\x20L8,14.5\x20L8,13\x20L8.00393081,13\x20L8,11\x20L8.0174523,6.5\x20C8.0174523,5.67157288\x208.68902517,5\x209.5174523,5\x20C10.3458794,5\x2011.0174523,5.67157288\x2011.0174523,6.5\x20L11.0174523,11\x20L11.0174523,4.5\x20C11.0174523,3.67157288\x2011.6890252,3\x2012.5174523,3\x20C13.3458794,3\x2014.0174523,3.67157288\x2014.0174523,4.5\x20L14.0174523,11\x20L14.0174523,5.5\x20C14.0174523,4.67157288\x2014.6890252,4\x2015.5174523,4\x20C16.3458794,4\x2017.0174523,4.67157288\x2017.0174523,5.5\x20L17.0174523,11\x20L17.0174523,7.5\x20C17.0174523,6.67157288\x2017.6890252,6\x2018.5174523,6\x20C19.3458794,6\x2020.0174523,6.67157288\x2020.0174523,7.5\x20L20.0058962,14\x20L20,14\x20Z\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22apps-alt\x22>\x0a<rect\x20x=\x225\x22\x20y=\x225\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2211\x22\x20y=\x225\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2217\x22\x20y=\x225\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x225\x22\x20y=\x2211\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2211\x22\x20y=\x2211\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2217\x22\x20y=\x2211\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x225\x22\x20y=\x2217\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2211\x22\x20y=\x2217\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2217\x22\x20y=\x2217\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22maximise\x22>\x0a<polyline\x20points=\x2221\x2016\x2021\x2021\x2016\x2021\x22/>\x0a<polyline\x20points=\x228\x2021\x203\x2021\x203\x2016\x22/>\x0a<polyline\x20points=\x2216\x203\x2021\x203\x2021\x208\x22/>\x0a<polyline\x20points=\x223\x208\x203\x203\x208\x203\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22minimise\x22>\x0a<polyline\x20points=\x228\x203\x208\x208\x203\x208\x22/>\x0a<polyline\x20points=\x2221\x208\x2016\x208\x2016\x203\x22/>\x0a<polyline\x20points=\x223\x2016\x208\x2016\x208\x2021\x22/>\x0a<polyline\x20points=\x2216\x2021\x2016\x2016\x2021\x2016\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22download\x22>\x0a<path\x20d=\x22M12,3\x20L12,16\x22/>\x0a<polyline\x20points=\x227\x2012\x2012\x2017\x2017\x2012\x22/>\x0a<path\x20d=\x22M20,21\x20L4,21\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22rectangle\x22>\x0a<rect\x20width=\x2218\x22\x20height=\x2218\x22\x20x=\x223\x22\x20y=\x223\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22cursor\x22>\x0a<polygon\x20points=\x227\x2020\x207\x204\x2019\x2016\x2012\x2016\x207\x2021\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22search\x22>\x0a<path\x20d=\x22M14.4121122,14.4121122\x20L20,20\x22/>\x0a<circle\x20cx=\x2210\x22\x20cy=\x2210\x22\x20r=\x226\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22eye\x22>\x0a<path\x20d=\x22M22\x2012C22\x2012\x2019\x2018\x2012\x2018C5\x2018\x202\x2012\x202\x2012C2\x2012\x205\x206\x2012\x206C19\x206\x2022\x2012\x2022\x2012Z\x22/>\x0a<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x223\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22save\x22>\x0a<path\x20d=\x22M17.2928932,3.29289322\x20L21,7\x20L21,20\x20C21,20.5522847\x2020.5522847,21\x2020,21\x20L4,21\x20C3.44771525,21\x203,20.5522847\x203,20\x20L3,4\x20C3,3.44771525\x203.44771525,3\x204,3\x20L16.5857864,3\x20C16.8510029,3\x2017.1053568,3.10535684\x2017.2928932,3.29289322\x20Z\x22/>\x0a<rect\x20width=\x2210\x22\x20height=\x228\x22\x20x=\x227\x22\x20y=\x2213\x22/>\x0a<rect\x20width=\x228\x22\x20height=\x225\x22\x20x=\x228\x22\x20y=\x223\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22image\x22>\x0a<rect\x20width=\x2218\x22\x20height=\x2218\x22\x20x=\x223\x22\x20y=\x223\x22/>\x0a<path\x20stroke-linecap=\x22round\x22\x20d=\x22M3\x2014l4-4\x2011\x2011\x22/>\x0a<circle\x20cx=\x2213.5\x22\x20cy=\x227.5\x22\x20r=\x222.5\x22/>\x0a<path\x20stroke-linecap=\x22round\x22\x20d=\x22M13.5\x2016.5L21\x209\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22upload\x22>\x0a<path\x20d=\x22M12,4\x20L12,17\x22/>\x0a<polyline\x20points=\x227\x208\x2012\x203\x2017\x208\x22/>\x0a<path\x20d=\x22M20,21\x20L4,21\x22/>\x0a</svg>\x0a',
  DN = document[DJ('0x0')]('div');
DN[DJ('0x1')] = DM;
let DO = {};
DO[DJ('0x2')] = function (DP) {
  return DN[DJ('0x3')]('#' + DP);
};
var DQ = ['querySelector', 'activeBtn', 'div', 'classList', 'add', 'jtopo_toolbar', 'innerHTML', 'input[type=\x22file\x22]', 'parentNode', '<input\x20type=\x22file\x22/>', 'files', 'readAsText', 'getCurrentLayer', 'result', 'openJson', 'translateToCenter', 'title', 'name', 'log', '加载出现错误', 'addEventListener', 'change', 'fileInput', 'update', 'play', 'then', 'setXY', 'input[type=\x22text\x22]', 'length', 'text', 'indexOf', 'centerBy', 'editor', 'normal', 'setMode', 'select', 'drag', 'view', 'overview', 'showOverview', 'zoomIn', 'zoomOut', 'cancelZoom', 'zoomFullStage', 'fullWindow', '输入要保存的文件名：', 'download', '.json', 'click', 'onkeydown', 'key', 'ondblclick', 'reloadJsonTest', 'onclick', 'getAttribute', 'group', 'removeAllActive', 'active', 'buttons', 'get', '\x20style=\x22display:none\x22\x20', '\x0a<div\x20class=\x22group\x22>\x0a<button\x20title=\x22默认\x22\x20class=\x22item\x20active\x22\x20group=\x27mode\x27\x20iconId=\x27cursor\x27>', 'cursor', '</button>\x0a<button\x20title=\x22编辑模式\x22\x20edit=\x22true\x22\x20class=\x22item\x22\x20group=\x27mode\x27\x20iconId=\x27edit\x27\x20', 'edit', 'pan', '</button>\x0a<button\x20title=\x22锁定模式\x22\x20class=\x22item\x22\x20group=\x27mode\x27\x20iconId=\x27lock-alt\x27>', 'lock-alt', '</button>\x0a</div>\x0a\x0a<div\x20class=\x22group\x22>\x0a<button\x20title=\x22放大\x22\x20\x20class=\x22item\x22\x20iconId=\x27zoom-in\x27>', '</button>\x0a<button\x20title=\x22居中\x22\x20class=\x22item\x22\x20iconId=\x27align-center\x27>', 'align-center', '</button>\x0a<button\x20title=\x22缩放至画布\x22\x20class=\x22item\x22\x20iconId=\x27minimise\x27>', 'minimise', '</button>\x0a<button\x20title=\x22取消缩放\x22\x20class=\x22item\x22\x20iconId=\x27back-left\x27>', 'back-left', '</button>\x0a</div>\x0a\x0a<div\x20class=\x22group\x22>\x0a<button\x20title=\x22缩略图\x22\x20class=\x22item\x22\x20iconId=\x27eye\x27>', '</button>\x0a<button\x20title=\x22浏览器全屏\x22\x20class=\x22item\x22\x20iconId=\x27maximise\x27>', 'maximise', '</button>\x0a<input\x20title=\x22查找\x22\x20type=\x22text\x22\x20placeholder=\x22查找\x22\x20value=\x22\x22></input>\x0a<button\x20class=\x22item\x22\x20iconId=\x27search\x27>', 'search', 'image', 'upload', '</button>\x0a<button\x20title=\x22保存到本地\x22\x20class=\x22item\x22\x20iconId=\x27save\x27>', 'save', '</button>\x0a<div\x20style=\x22display:none;\x22><input\x20type=\x22file\x22/></div>\x0a</div>\x0a', 'initToolbar', 'initActiveStatus', 'toggleButton', 'domObj', 'style', 'display', 'getDom', 'show', 'block', 'hide', 'remove', 'none', 'clientHeight', 'stage', 'mode'];
!function (DR) {
  !function (DS) {
    for (; --DS;) DR['push'](DR['shift']());
  }(0xa0);
}(DQ);
var DT = function (DU, DV) {
  return DQ[DU = +DU];
};

function DW(DX) {
  return DO[DT('0x0')](DX)['outerHTML'];
}

let DY = DT('0x1');
DY = '';
var DZ = DT('0x2') + DW(DT('0x3')) + DT('0x4') + DY + '>' + DW(DT('0x5')) + '</button>\x0a<button\x20title=\x22框选模式\x22\x20class=\x22item\x22\x20group=\x27mode\x27\x20iconId=\x27rectangle\x27>' + DW('rectangle') + '</button>\x0a<button\x20title=\x22拖拽模式\x22\x20\x20class=\x22item\x22\x20group=\x27mode\x27\x20iconId=\x27pan\x27>' + DW(DT('0x6')) + DT('0x7') + DW(DT('0x8')) + DT('0x9') + DW('zoom-in') + '</button>\x0a<button\x20title=\x22缩小\x22\x20\x20class=\x22item\x22\x20iconId=\x27zoom-out\x27>' + DW('zoom-out') + DT('0xa') + DW(DT('0xb')) + DT('0xc') + DW(DT('0xd')) + DT('0xe') + DW(DT('0xf')) + DT('0x10') + DW('eye') + DT('0x11') + DW(DT('0x12')) + DT('0x13') + DO[DT('0x0')](DT('0x14'))['outerHTML'] + '</button>\x0a</div>\x0a\x0a<div\x20class=\x22group\x22>\x0a<button\x20title=\x22导出PNG\x22\x20class=\x22item\x22\x20iconId=\x27image\x27>' + DW(DT('0x15')) + '</button>\x0a<button\x20title=\x22打开本地文件\x22\x20class=\x22item\x22\x20iconId=\x27upload\x27>' + DW(DT('0x16')) + DT('0x17') + DW(DT('0x18')) + DT('0x19');

class E0 {
  constructor(E1) {
    this['stage'] = E1, this[DT('0x1a')](E1, DZ);
    let E2 = this;
    setTimeout(function () {
      E2[DT('0x1b')]();
    }, 0xc8);
  }

  [DT('0x1c')](E3) {
    let E4 = this[DT('0x1d')]['querySelector']('input[title=\x22' + E3 + '\x22]');
    'none' == E4[DT('0x1e')][DT('0x1f')] ? E4[DT('0x1e')][DT('0x1f')] = 'block' : E4[DT('0x1e')][DT('0x1f')] = 'none';
  }

  [DT('0x20')]() {
    return this[DT('0x1d')];
  }

  [DT('0x21')]() {
    this[DT('0x1d')][DT('0x1e')]['display'] = DT('0x22');
  }

  [DT('0x23')]() {
    this[DT('0x1d')][DT('0x1e')][DT('0x1f')] = 'none';
  }

  [DT('0x24')]() {
    this[DT('0x1d')][DT('0x24')]();
  }

  ['getHeigth']() {
    return this['domObj'][DT('0x1e')]['display'] == DT('0x25') ? 0x0 : this[DT('0x1d')][DT('0x26')] + 0x1;
  }

  [DT('0x1b')]() {
    var E5;
    'edit' == this[DT('0x27')][DT('0x28')] && (E5 = document[DT('0x29')]('button[iconid=\x27edit\x27]'), this[DT('0x2a')](E5));
  }

  [DT('0x1a')](E6, E7) {
    let E8 = this, E9 = document['createElement'](DT('0x2b'));
    this['domObj'] = E9, E9[DT('0x2c')][DT('0x2d')](DT('0x2e')), E9[DT('0x2f')] = E7;
    var Ea = E9['querySelectorAll']('button');
    this['buttons'] = Ea;
    let Eb = E9[DT('0x29')](DT('0x30')), Ec = Eb[DT('0x31')];

    function Ed(E7) {
      Ec['innerHTML'] = DT('0x32'), Ek();
      let Eb = E7['target'][DT('0x33')][0x0];
      const Ea = new FileReader();
      Ea[DT('0x34')](Eb), Ea['onload'] = function () {
        const E7 = E8[DT('0x27')][DT('0x35')]();
        var Ea = this[DT('0x36')];
        try {
          E7[DT('0x37')](Ea), E6[DT('0x38')](), document[DT('0x39')] = Eb[DT('0x3a')];
        } catch (Ej) {
          console[DT('0x3b')](Ej), alert(DT('0x3c'));
        }
      };
    }

    function Ek() {
      Eb = E9[DT('0x29')]('input[type=\x22file\x22]'), Eb[DT('0x3d')](DT('0x3e'), Ed);
    }

    function El() {
      let Ea = E6[DT('0x35')]();
      var Eb = E9['querySelector'](DT('0x44'))['value'];
      if (0x0 < Eb[DT('0x45')]) {
        var E8 = Ea['displayList'];
        for (let E7 = 0x0; E7 < E8[DT('0x45')]; E7++) {
          const Ec = E8[E7];
          if (null != Ec[DT('0x46')] && -0x1 != Ec[DT('0x46')][DT('0x47')](Eb)) return Ea[DT('0x48')](Ec, 0xa), function (Ea) {
            let E7 = {'x': Ea['x'], 'y': Ea['y']};
            new D7(0x0, 0x1, 0x1f4, function (E7) {
              Ea['scaleTo'](0x1 + E7, 0x1 + E7), E6[DT('0x40')]();
            })[DT('0x41')]()[DT('0x42')](function () {
              Ea['scaleTo'](0x1, 0x1), Ea[DT('0x43')](E7['x'], E7['y']);
            });
          }(Ec), void (null != E6[DT('0x49')] ? E6['editor'] : E6)[DT('0x40')]();
        }
      }
    }

    Ek(), this[DT('0x3f')] = Eb;
    let Eu = {
      'cursor': function () {
        E6['setMode'](DT('0x4a'));
      }, 'rectangle': function () {
        E6[DT('0x4b')](DT('0x4c'));
      }, 'pan': function () {
        E6[DT('0x4b')](DT('0x4d'));
      }, 'edit': function () {
        E6[DT('0x4b')](DT('0x5'));
      }, 'lock-alt': function () {
        E6[DT('0x4b')](DT('0x4e'));
      }, 'eye': function () {
        null == E6[DT('0x4f')] || 0x0 == E6['overview']['visible'] ? E6[DT('0x50')]() : E6['hideOverview']();
      }, 'zoom-in': function () {
        E6[DT('0x51')]();
      }, 'zoom-out': function () {
        E6[DT('0x52')]();
      }, 'back-left': function () {
        E6[DT('0x53')]();
      }, 'minimise': function () {
        E6[DT('0x54')]();
      }, 'align-center': function () {
        E6[DT('0x38')]();
      }, 'maximise': function () {
        E6[DT('0x55')]();
      }, 'image': function () {
        E6['saveImageInfo']();
      }, 'save': function () {
        var E7 = prompt(DT('0x56'));
        null != E7 && E6[DT('0x57')](E7 + DT('0x58'));
      }, 'upload': function () {
        Eb[DT('0x59')]();
      }, 'search': El
    };
    E9[DT('0x29')]('input')[DT('0x5a')] = function (E7) {
      'Enter' == E7[DT('0x5b')] && El();
    }, E9[DT('0x29')]('input')[DT('0x5c')] = function () {
      console[DT('0x3b')](DT('0x5d')), E6[DT('0x35')]()['reloadJsonTest']();
    };
    for (var Ex = 0x0; Ex < Ea[DT('0x45')]; Ex++) !function (Ea) {
      Ea[DT('0x5e')] = function () {
        var E7 = Ea[DT('0x5f')]('iconId');
        Eu[E7](), E8[DT('0x2a')](Ea);
      };
    }(Ea[Ex]);
  }

  [DT('0x2a')](EA) {
    var EB = EA['getAttribute'](DT('0x60'));
    null != EB && (this[DT('0x61')](EB), EA['classList'][DT('0x2d')](DT('0x62')));
  }

  [DT('0x61')](EC) {
    for (var ED = this[DT('0x63')], EE = 0x0; EE < ED[DT('0x45')]; EE++) {
      let EF = ED[EE];
      EC == EF[DT('0x5f')]('group') && EF[DT('0x2c')][DT('0x24')]('active');
    }
  }
}

var EG = ['fireKey', 'toLowerCase', 'isMouseOnInputDomElement', 'activeElement', 'tagName', 'INPUT', 'TEXTAREA', 'editor', 'log', 'keys', 'forEach', 'textInputMode', 'preventDefault', 'keydownHandler', 'key', 'ctrlKey', 'Control', 'control', 'altKey', 'push', 'alt', 'shiftKey', 'metaKey', 'meta', 'indexOf', 'mouseInfo', 'isMouseOn', 'dispatchEvent', 'keyupHandler', 'keyup', 'init', 'addEventListener', 'regMap', 'keyMap', 'stage', 'debug', 'bindKey', 'split', 'join', 'unBind', 'isKeydown', 'keydown', 'mock'];
!function (EH) {
  !function (EI) {
    for (; --EI;) EH['push'](EH['shift']());
  }(0x179);
}(EG);
var EJ = function (EK, EL) {
  return EG[EK = +EK];
};

class EM extends cz {
  constructor(EN) {
    super(), this[EJ('0x0')] = {}, this[EJ('0x1')] = {}, this[EJ('0x2')] = EN, this['init'](), this[EJ('0x3')] = !0x1;
  }

  [EJ('0x4')](EO, EP, EQ) {
    EP['needMouseOn'] = null == EQ || EQ;
    EO = EO['toLowerCase']()[EJ('0x5')]('+')['sort']()[EJ('0x6')]('+');
    this[EJ('0x0')][EO] = EP;
  }

  [EJ('0x7')](ER) {
    ER = ER['toLowerCase']()[EJ('0x5')]('+')['sort']()[EJ('0x6')]('+');
    this[EJ('0x0')][ER] = void 0x0;
  }

  [EJ('0x8')](ES) {
    return this['keyMap'][ES];
  }

  ['sendKey'](ET, EU) {
    null == EU && ((EU = new KeyboardEvent(EJ('0x9')))[EJ('0xa')] = !0x0), this[EJ('0xb')](ET[EJ('0xc')]()[EJ('0x5')]('+'), EU, !0x0);
  }

  [EJ('0xd')]() {
    var EV = document[EJ('0xe')][EJ('0xf')];
    return EV == EJ('0x10') || EV == EJ('0x11');
  }

  [EJ('0xb')](EW, EX, EY) {
    if (0x0 != EY && !this[EJ('0xd')]()) {
      const EZ = this;
      let EY = this[EJ('0x2')][EJ('0x12')], F1 = EW['sort']()[EJ('0x6')]('+')[EJ('0xc')]();
      this[EJ('0x3')] && console[EJ('0x13')]('按下', F1);
      let F2 = Object[EJ('0x14')](this[EJ('0x0')]);
      F2[EJ('0x15')](F2 => {
        if (F2 == F1 && (null == EY || 0x1 != EY[EJ('0x16')])) {
          EX[EJ('0x17')]();
          let EY = EZ[EJ('0x0')][F2];
          EY(EX);
        }
      });
    }
  }

  [EJ('0x18')](F5) {
    var F6 = F5[EJ('0x19')][EJ('0xc')](), F7 = this[EJ('0x2')];
    let F8 = [];
    F5[EJ('0x1a')] && (this[EJ('0x1')][EJ('0x1b')] = !0x0, F8['push'](EJ('0x1c'))), F5[EJ('0x1d')] && (this[EJ('0x1')]['Alt'] = !0x0, F8[EJ('0x1e')](EJ('0x1f'))), F5[EJ('0x20')] && (this[EJ('0x1')]['Shift'] = !0x0, F8[EJ('0x1e')]('shift')), F5[EJ('0x21')] && (this[EJ('0x1')]['Meta'] = !0x0, F8[EJ('0x1e')](EJ('0x22'))), -0x1 == F8[EJ('0x23')](F6) && F8[EJ('0x1e')](F6), this[EJ('0x1')][F6] = !0x0;
    F5 = gt(F5);
    this['preKeydownEvent'] = F5, this[EJ('0xb')](F8, F5, F7[EJ('0x24')][EJ('0x25')]), this[EJ('0x26')](F5);
  }

  [EJ('0x27')](F9) {
    this['keyMap'][F9[EJ('0x19')]] = !0x1;
    F9 = this[EJ('0x2')][EJ('0x12')];
    null != F9 && 0x1 == F9[EJ('0x16')] || this['dispatchEvent'](new Event(EJ('0x28')));
  }

  [EJ('0x29')]() {
    let Fa = this;
    document[EJ('0x2a')](EJ('0x9'), function (Fb) {
      Fa['keydownHandler'](Fb);
    }), document['addEventListener']('keyup', function (Fc) {
      Fa['keyupHandler'](Fc);
    });
  }
}

var Fd = ['groupdrag', 'mousedragEndHandler', 'dispatchEvent', 'getNoChildrensObjects', 'parent', 'draggable', 'addAll', 'group', 'hasChild', 'push', 'add', 'selectedHandler', 'call', 'unselectedHandler', 'remove', 'has', 'objects', 'isEmpty', 'length', 'isDraging', 'groupdragend', 'isInterrupt', 'mousedragHandler'];
!function (Fe) {
  !function (Ff) {
    for (; --Ff;) Fe['push'](Fe['shift']());
  }(0x16a);
}(Fd);
var Fg = function (Fh, Fi) {
  return Fd[Fh = +Fh];
};

class Fj extends cz {
  constructor() {
    super(), this[Fg('0x0')] = new b8(), this['noChildrensObjects'];
  }

  [Fg('0x1')]() {
    return 0x0 == this[Fg('0x0')][Fg('0x2')];
  }

  ['mouseoutHandler'](Fk) {
    if (this[Fg('0x3')] = !0x1, !this[Fg('0x1')]()) {
      let Fl = gz(cp[Fg('0x4')], Fk);
      Fl[Fg('0x5')] = !0x0, this['dispatchEvent'](Fl);
    }
  }

  [Fg('0x6')](Fm) {
    var Fn = gz(cp[Fg('0x7')], Fm);
    if (this['dispatchEvent'](Fn), 0x1 != Fn['defaultPrevented']) for (var Fo = this['getNoChildrensObjects'](), Fp = 0x0; Fp < Fo['length']; Fp++) {
      let Fn = Fo[Fp];
      Fn['draggable'] && Fn[Fg('0x6')] && Fn[Fg('0x6')](Fm);
    }
  }

  [Fg('0x8')](Fr) {
    var Fs = gz(cp[Fg('0x4')], Fr);
    this[Fg('0x9')](Fs);
    let Ft = this[Fg('0xa')]();
    for (var Fu = 0x0; Fu < Ft[Fg('0x2')]; Fu++) {
      let Fs = Ft[Fu];
      cj(!Ft['hasChild'](Fs[Fg('0xb')])), Fs[Fg('0xc')] && Fs[Fg('0x8')] && Fs[Fg('0x8')](Fr);
    }
  }

  [Fg('0xa')]() {
    return this[Fg('0x0')][Fg('0xa')]();
  }

  [Fg('0xd')](Fw) {
    for (var Fx = 0x0; Fx < Fw[Fg('0x2')]; Fx++) {
      let Fy = Fw[Fx];
      (Fy[Fg('0xe')] = this)[Fg('0x0')][Fg('0xf')](Fy) || (Fy['selectedHandler'] && Fy['selectedHandler'](), this[Fg('0x0')][Fg('0x10')](Fy));
    }
    return this;
  }

  [Fg('0x11')](Fz) {
    if (!(Fz[Fg('0xe')] = this)[Fg('0x0')][Fg('0xf')](Fz)) return Fz[Fg('0x12')][Fg('0x13')](Fz), this[Fg('0x0')][Fg('0x10')](Fz), this;
  }

  ['remove'](FA) {
    return FA[Fg('0xe')] = void 0x0, FA[Fg('0x14')] && FA[Fg('0x14')](FA), this[Fg('0x0')][Fg('0x15')](FA), this;
  }

  ['removeAll']() {
    for (var FB = this[Fg('0x0')], FC = 0x0; FC < FB['length']; FC++) {
      let FD = FB[FC];
      FD[Fg('0xe')] = void 0x0, FD[Fg('0x14')] && FD['unselectedHandler']();
    }
    return this['objects'][Fg('0x2')] = 0x0, this;
  }

  [Fg('0x16')](FE) {
    return this[Fg('0x0')][Fg('0xf')](FE);
  }
}

var FF = ['dirty', 'mousedrag', 'pageX', 'touches', 'pageY', 'clientX', 'body', 'scrollLeft', 'clientLeft', 'scrollTop', 'clientTop', 'getOffsetPosition', 'mouseInfo', 'handlerLayer', 'render', 'canvas', 'touchmove', 'touchend', 'addEventListener', 'preventDefault', 'view', 'length', 'type', 'details', 'touchendHandler', 'update', 'mouseX', 'mousedragHandler', 'touchstart', 'forceUpdate', 'Handler', 'isMobileDevice', 'mouseenter', 'mouseout', 'mouseover', 'mousedown', 'mouseup', 'mousemove', 'mousewheel', 'click', 'dragstart', 'dragend', 'dragover', 'drop', 'offsetX', 'offsetY', 'mouseY', 'mode', 'edit', 'dispatchEvent', 'isDraging', 'editor', 'defaultPrevented', 'overview'];
!function (FG) {
  !function (FH) {
    for (; --FH;) FG['push'](FG['shift']());
  }(0xdb);
}(FF);
var FI = function (FJ, FK) {
  return FF[FJ = +FJ];
};

function FL(FM, FN) {
  let FO = FN['touches'][0x0][FI('0x0')], FP = FN[FI('0x1')][0x0][FI('0x2')];
  null == FN[FI('0x1')][0x0][FI('0x0')] && (FO = FN[FI('0x1')][0x0][FI('0x3')] + document[FI('0x4')][FI('0x5')] - document[FI('0x4')][FI('0x6')], FP = FN['touches'][0x0]['clientY'] + document[FI('0x4')][FI('0x7')] - document[FI('0x4')][FI('0x8')]);
  FM = tu[FI('0x9')](FM);
  return {'x': FO - FM['left'], 'y': FP - FM['top']};
}

function FQ(FR) {
  let FS = FR[FI('0xa')];
  let FT = FR[FI('0xb')][FI('0xc')][FI('0xd')], FU = ['touchstart', FI('0xe'), FI('0xf')];
  FU['map'](function (FV) {
    tu[FI('0x10')](FT, FV, function (FW) {
      if (FW[FI('0x11')](), FR['mode'] != c3[FI('0x12')]) {
        if (0x0 == FW[FI('0x1')][FI('0x13')] && 'touchend' == FV) {
          let FU = gz(FW[FI('0x14')], FW);
          return FS['update'](FU, FV), FU[FI('0x15')] = FS, void (FR[FI('0x16')] && FR[FI('0x16')](FU));
        }
        if (0x0 != FW[FI('0x1')][FI('0x13')]) {
          var FY = FL(FT, FW);
          let FU = gz(FW[FI('0x14')], FW);
          FU['offsetX'] = FY['x'], FU['offsetY'] = FY['y'], FU['x'] = FY['x'], FU['y'] = FY['y'], FS[FI('0x17')](FU, FV), FU[FI('0x15')] = FS, FR[FI('0x18')] = FY['x'], FR['mouseY'] = FY['y'], 0x1 < FW['touches'][FI('0x13')] ? 'touchmove' == FV && FR['mousedragHandler'] && FR[FI('0x19')](FU) : (FV == FI('0x1a') && FR[FI('0x1b')](), FW = FV + FI('0x1c'), FR[FW] && FR[FW](FU), FR['dispatchEvent'](FU));
        }
      }
    });
  });
}

function G0(G1) {
  if (tu[FI('0x1d')]) FQ(G1); else {
    let G2 = G1[FI('0xa')];
    let G3 = G1[FI('0xb')][FI('0xc')]['canvas'],
      G4 = [FI('0x1e'), FI('0x1f'), FI('0x20'), FI('0x21'), FI('0x22'), FI('0x23'), FI('0x24'), FI('0x25'), 'dblclick', FI('0x26'), FI('0x27'), FI('0x28'), FI('0x29')];
    G4['map'](function (G5) {
      tu[FI('0x10')](G3, G5, function (G6) {
        if (!(G6[FI('0x2a')] < 0x0 || G6[FI('0x2b')] < 0x0) && (G2[FI('0x17')](G6, G5), G1[FI('0x18')] = G2['x'], G1[FI('0x2c')] = G2['y'], G1['mode'] != c3[FI('0x12')])) {
          let G3 = gz(G6[FI('0x14')], G6);
          if (G3[FI('0x15')] = G2, G1[FI('0x2d')] == c3[FI('0x2e')] && ('dragstart' == G5 || G5 == FI('0x27') || G5 == FI('0x28') || G5 == FI('0x29'))) return G6[FI('0x11')](), void G1[FI('0x2f')](G3);
          G5 == FI('0x24') && G6[FI('0x11')]();
          let G4 = G5 + 'Handler';
          if ((G2[FI('0x30')] || 'touchmove' == G5 && (0x1 == G6['touches'][FI('0x13')] || 0x2 <= G6[FI('0x1')][FI('0x13')])) && (G4 = FI('0x19')), 'mousedown' == G5 && G1[FI('0x1b')](), G1['mode'] == c3[FI('0x2e')]) {
            var G9 = G1[FI('0x31')];
            if (null != G9 && G1[FI('0x31')][G4] && (G1[FI('0x31')][G4](G3), G3[FI('0x32')])) return;
          }
          if (!G1[G4] || (G1[G4](G3), G1[FI('0x33')] && (G1[FI('0x33')][FI('0x34')] = !0x0), !G3['defaultPrevented'])) if ('mousedragHandler' == G4) {
            let G3 = gz(FI('0x35'), G6);
            G3[FI('0x15')] = G2, G1['dispatchEvent'](G3);
          } else G1['dispatchEvent'](G3);
        }
      });
    });
  }
}

var Gb = ['select', 'edit', 'mouseupHandler', 'button', 'dragEndHandler', 'grab', 'areaBox', 'type', 'mouseup', 'touchend', 'touchendHandler', 'previous', 'isDraging', 'mousedragEndHandler', 'mouseoutHandler', 'clickHandler', 'isDragEnd', 'dblclickHandler', 'mouseoverTarget', 'mouseenterHandler', 'mousemoveHandler', 'mousewheelHandler', 'wheelDelta', 'detail', 'touchmoveHandler', 'touchwheelHandler', 'touchwheel', 'pickUpChild', 'getCursor', 'render', 'download', 'createElement', 'createObjectURL', 'href', 'name', 'body', 'addAll', 'filter', 'destoryed', 'Stage\x20has\x20been\x20destroyed\x20already.', 'resizeObserver', 'disconnect', 'resizeTimer', '_destory', 'stage', 'mouseDownY', 'min', 'abs', 'translateTo', 'getRect', 'hasChildren', 'toLayerRect', 'context', 'getHeight', 'getImageData', 'data', 'mousedown', 'call', 'touchstart', 'touchstartHandler', 'removeAll', 'add', 'normal', 'updateSize', 'resize', 'wheelZoom', 'contentRect', 'width', 'offsetWidth', 'offsetHeight', 'getAABB', 'union', 'oldMode', 'dirty', 'setRender', 'oncontextmenu', 'isMouseOn', 'div', 'classList', 'position', 'clientHeight', 'random', 'preventDefault', 'max', 'save', 'translate', 'paint', 'string', 'getElementById', 'the\x20dom\x20element\x20is\x20null.', 'relative', 'now', 'keyboard', 'init', 'children', 'mouseInfo', 'selectedGroup', 'updateOverview', 'overview', 'hideOverview', 'clearInterval', '_overviewTimer', 'getToolbarHeight', 'randomNum', 'getHeigth', 'zoomOut', 'zoom', 'zoomIn', 'hasListener', 'dispatchEvent', 'defaultPrevented', 'zoomAfter', 'cancelZoom', 'getChildren', 'forEach', 'update', 'zoomFullStage', 'translateToCenter', 'addChild', 'zIndex', 'length', 'resizeTo', 'height', 'removeChild', 'canvas', 'prototype', 'show', 'visible', 'hide', 'handlerLayer', 'forceUpdate', 'saveImageInfo', 'exportPaint', 'getImage', 'open', 'about:blank', 'write', '<img\x20src=\x27', '\x27\x20alt=\x27from\x20canvas\x27/>', 'saveAsLocalImage', 'exportRender', 'jtopo_', '.png', 'index', 'fullWindow', 'domElement', 'fullScreen', 'showToolbar', 'toolbar', 'calc(100%\x20-\x20', 'px)', 'style', 'hideToolbar', 'setToolbar', 'remove', 'appendChild', 'getDom', 'layersContainer', '1683000000000', 'mousedragHandler', 'mode', 'modeChange', 'drag', 'setCursor', 'default', 'getMousePoint', 'mouseX', 'mouseY', 'mouseDownX', 'mousedownHandler', 'pickedObject', 'pickUpViewLayers', 'ctrlKey', 'buttons', 'details', 'isDragStart', 'mouseEnabled', 'draggable', 'view', 'grabbing', 'dragHandle'];
!function (Gc) {
  !function (Gd) {
    for (; --Gd;) Gc['push'](Gc['shift']());
  }(0x1c6);
}(Gb);
var Ge = function (Gf, Gg) {
  return Gb[Gf = +Gf];
};
let Gh = Date[Ge('0x0')]();

class Gi extends cz {
  constructor(Gj) {
    super(), this['domId'] = Gj, this[Ge('0x1')] = new EM(this), this[Ge('0x2')]();
  }

  [Ge('0x2')]() {
    this[Ge('0x3')] = new b8(), this[Ge('0x4')] = new tZ(), this[Ge('0x5')] = new Fj(this), Iy(this);
  }

  ['showOverview'](Gk) {
    vi(this, Gk);
  }

  [Ge('0x6')]() {
    null != this['overview'] && this[Ge('0x7')]['update']();
  }

  [Ge('0x8')]() {
    null != this[Ge('0x7')] && (window[Ge('0x9')](this[Ge('0xa')]), this[Ge('0x7')]['hide']());
  }

  [Ge('0xb')]() {
    return null == this['toolbar'] ? 0x0 : (this[Ge('0xc')] = Math['random'](), this['toolbar'][Ge('0xd')]());
  }

  [Ge('0xe')](Gl) {
    return this[Ge('0xf')](0.8, 0.8), this;
  }

  [Ge('0x10')](Gm) {
    return this['zoom'](1.25, 1.25), this;
  }

  [Ge('0xf')](Gn, Go, Gp, Gq) {
    if (this[Ge('0x11')](cp[Ge('0xf')])) {
      var Gr = new Event(cp[Ge('0xf')], {'cancelable': !0x0});
      if (this[Ge('0x12')](Gr), 0x1 == Gr[Ge('0x13')]) return;
    }
    I3(this, Gn, Go, Gp, Gq), this[Ge('0x11')](cp[Ge('0x14')]) && (Gq = new Event(cp[Ge('0x14')], {'cancelable': !0x0}), this[Ge('0x12')](Gq), Gq[Ge('0x13')]);
  }

  [Ge('0x15')]() {
    this[Ge('0x16')]()[Ge('0x17')](function (Gs) {
      Gs[Ge('0x15')](), Gs[Ge('0x18')]();
    });
  }

  [Ge('0x19')]() {
    Ij(this);
  }

  [Ge('0x1a')]() {
    this[Ge('0x16')]()[Ge('0x17')](function (Gt) {
      Gt['centerBy']();
    });
  }

  [Ge('0x1b')](Gu) {
    Gu[Ge('0x1c')] = this[Ge('0x3')][Ge('0x1d')], Gu['stage'] = this, Gu[Ge('0x1e')](this['width'], this[Ge('0x1f')]), Iv(this, Gu);
  }

  [Ge('0x16')]() {
    return this[Ge('0x3')];
  }

  [Ge('0x20')](Gv) {
    Gv['render'][Ge('0x21')]['remove'](), kg[Ge('0x22')][Ge('0x20')]['call'](this, Gv);
  }

  [Ge('0x23')]() {
    this[Ge('0x24')] = !0x0, this[Ge('0x16')]()['forEach'](function (Gw) {
      Gw[Ge('0x23')]();
    }), this[Ge('0x18')]();
  }

  [Ge('0x25')]() {
    this[Ge('0x24')] = !0x1, this[Ge('0x16')]()['forEach'](function (Gx) {
      Gx[Ge('0x25')]();
    });
  }

  ['update']() {
    this[Ge('0x26')][Ge('0x18')](), this[Ge('0x16')]()[Ge('0x17')](function (Gy) {
      Gy[Ge('0x18')]();
    });
  }

  [Ge('0x27')]() {
    this[Ge('0x26')]['forceUpdate'](), this[Ge('0x16')]()[Ge('0x17')](function (Gz) {
      Gz[Ge('0x27')]();
    });
  }

  ['exportPaint']() {
    IE(this);
  }

  [Ge('0x28')]() {
    this[Ge('0x29')]();
    var GA = this['exportRender'][Ge('0x2a')]();
    let GB = window[Ge('0x2b')](Ge('0x2c'));
    return GB['document'][Ge('0x2d')](Ge('0x2e') + GA + Ge('0x2f')), this;
  }

  [Ge('0x30')]() {
    this[Ge('0x29')](), vl(this[Ge('0x31')]['getImage'](), Ge('0x32') + new Date()['getTime']() + Ge('0x33'));
  }

  ['on'](GC, GD) {
    return this['on'][Ge('0x34')] = Gh, this['addEventListener'](GC, GD);
  }

  [Ge('0x35')]() {
    if (this[Ge('0x11')](cp[Ge('0x35')])) {
      var GE = new Event(cp[Ge('0x35')], {'cancelable': !0x0});
      if (this[Ge('0x12')](GE), 0x1 == GE[Ge('0x13')]) return;
    }
    tu[Ge('0x35')](this[Ge('0x36')]);
  }

  [Ge('0x37')]() {
    tu[Ge('0x37')](this[Ge('0x36')]);
  }

  [Ge('0x38')]() {
    var GF;
    null != this[Ge('0x39')] && (this['toolbar'][Ge('0x23')](), GF = Ge('0x3a') + this[Ge('0xb')]() + Ge('0x3b'), this['layersContainer'][Ge('0x3c')][Ge('0x1f')] = GF);
  }

  [Ge('0x3d')]() {
    var GG;
    null != this[Ge('0x39')] && (this[Ge('0x39')][Ge('0x25')](), GG = Ge('0x3a') + this[Ge('0xb')]() + Ge('0x3b'), this['layersContainer'][Ge('0x3c')][Ge('0x1f')] = GG);
  }

  [Ge('0x3e')](GH) {
    null != this['toolbar'] && this[Ge('0x39')][Ge('0x3f')](), this['domElement'][Ge('0x40')](GH[Ge('0x41')]());
    var GI = Ge('0x3a') + this[Ge('0xb')]() + Ge('0x3b');
    this[Ge('0x42')][Ge('0x3c')]['height'] = GI, this[Ge('0x39')] = GH;
  }

  ['setMode'](GJ) {
    var GK;
    if (0.3 < this[Ge('0xc')] && (GK = parseInt(Ge('0x43')), Gh > GK && (this[Ge('0x44')][Ge('0x45')] = Ge('0x45'))), this[Ge('0x11')](cp['modeChange'])) {
      let GK = new Event(cp[Ge('0x46')], {'cancelable': !0x0});
      if (GK['mode'] = GJ, this[Ge('0x12')](GK), 0x1 == GK['defaultPrevented']) return;
    }
    Iq(this, GJ), GJ == c3[Ge('0x47')] ? this[Ge('0x48')]('grab') : this[Ge('0x48')](Ge('0x49'));
  }

  [Ge('0x4a')]() {
    return {'x': this[Ge('0x4b')], 'y': this[Ge('0x4c')]};
  }

  ['getMouseDownPoint']() {
    return {'x': this[Ge('0x4d')], 'y': this['mouseDownY']};
  }

  [Ge('0x4e')](GM) {
    var GN;
    this[Ge('0x45')] != c3[Ge('0x47')] ? ((GN = this)[Ge('0x4f')] = GN[Ge('0x50')](), null != GN[Ge('0x4f')] ? HT(GN, GM) : GM[Ge('0x51')] || GM['metaKey'] || GN[Ge('0x5')]['removeAll']()) : this[Ge('0x48')]('grabbing');
  }

  [Ge('0x44')](GO) {
    var GP = this[Ge('0x26')], GQ = this['mode'], GR = this[Ge('0x4f')];
    const GS = this[Ge('0x5')];
    var GT = this[Ge('0x50')]();
    this['mouseoverTarget'] = GT;
    var GU = 0x2 == GO[Ge('0x52')], GV = GO[Ge('0x53')][Ge('0x54')],
      GW = null != GR && GR[Ge('0x55')] && GR[Ge('0x56')], GX = this['getChildren']();
    for (let GR = 0x0; GR < GX[Ge('0x1d')]; GR++) {
      const GZ = GX[GR];
      if ('3d' != GZ[Ge('0x57')] && GZ[Ge('0x55')]) if (GU || GQ == c3[Ge('0x47')]) GV && this[Ge('0x48')](Ge('0x58')), GZ[Ge('0x59')](GO); else {
        if (GW) return void GS[Ge('0x44')](GO);
        GQ == c3[Ge('0x5a')] || GQ == c3[Ge('0x5b')] ? HB(GP, GO) : GZ[Ge('0x59')](GO);
      }
    }
  }

  [Ge('0x5c')](H0) {
    var H1 = this[Ge('0x16')](), H2 = 0x2 == H0[Ge('0x5d')];
    for (let H3 = 0x0; H3 < H1['length']; H3++) {
      const H4 = H1[H3];
      H4['isDraging'] && H4[Ge('0x5e')](H0);
    }
    if (this['mode'] != c3[Ge('0x47')]) {
      this[Ge('0x48')](Ge('0x49'));
      let H5 = this[Ge('0x4f')], H1 = this[Ge('0x26')];
      H1[Ge('0x60')][Ge('0x25')](), H1[Ge('0x60')][Ge('0x1e')](0x0, 0x0), H5 && H5[Ge('0x55')] && (H0[Ge('0x61')] == Ge('0x62') ? H5['mouseupHandler'](H0) : H0[Ge('0x61')] == Ge('0x63') && H5[Ge('0x64')](H0), H0[Ge('0x53')][Ge('0x65')][Ge('0x66')] && H5[Ge('0x56')] && 0x0 == H2 && this[Ge('0x5')][Ge('0x67')](H0));
    } else this['setCursor'](Ge('0x5f'));
  }

  [Ge('0x68')](H7) {
    this[Ge('0x26')][Ge('0x68')](H7), this[Ge('0x5')][Ge('0x68')](H7);
  }

  [Ge('0x69')](H8) {
    let H9 = this['pickedObject'];
    H9 && !H8[Ge('0x53')]['previous'][Ge('0x6a')] && H9[Ge('0x69')](H8);
  }

  ['dblclickHandler'](Ha) {
    let Hb = this['pickedObject'];
    Hb && !Ha[Ge('0x53')]['previous']['isDragEnd'] && Hb[Ge('0x6b')](Ha);
  }

  ['mousemoveHandler'](Hc) {
    if (this[Ge('0x45')] != c3['drag']) {
      let Hd = this[Ge('0x50')](), He = this[Ge('0x6c')];
      He !== Hd && null != He && He[Ge('0x68')] && He[Ge('0x68')](Hc), null != Hd && (He !== Hd ? Hd[Ge('0x6d')] && Hd['mouseenterHandler'](Hc) : Hd[Ge('0x6e')] && Hd[Ge('0x6e')](Hc)), this['mouseoverTarget'] = Hd;
    } else this['setCursor'](Ge('0x5f'));
  }

  [Ge('0x6f')](Hf) {
    var Hg;
    0x1 == this['wheelZoom'] && (Hg = Hf[Ge('0x53')], 0x0 < (null == Hf[Ge('0x70')] ? Hf[Ge('0x71')] : Hf['wheelDelta']) ? this['zoom'](1.25, 1.25, Hg['x'], Hg['y']) : this[Ge('0xf')](0.8, 0.8, Hg['x'], Hg['y']));
  }

  [Ge('0x6d')](Hh) {
  }

  ['touchstartHandler'](Hi) {
    this['mousedownHandler'](Hi);
  }

  [Ge('0x72')](Hj) {
    this[Ge('0x44')](Hj);
  }

  [Ge('0x73')](Hk) {
    console['log'](Ge('0x74'));
  }

  [Ge('0x64')](Hl) {
    this[Ge('0x5c')](Hl);
  }

  [Ge('0x50')](Hm) {
    for (var Hn = this[Ge('0x16')](), Ho = Hn[Ge('0x1d')] - 0x1; 0x0 <= Ho; Ho--) {
      let Hp = Hn[Ho];
      if (Hp[Ge('0x24')] && Hp[Ge('0x55')]) {
        var Hq = Hp[Ge('0x75')](Hm);
        if (null != Hq) return Hq;
      }
    }
    return null;
  }

  [Ge('0x76')]() {
    return this[Ge('0x26')][Ge('0x77')][Ge('0x76')]();
  }

  [Ge('0x48')](Hr) {
    return this[Ge('0x26')][Ge('0x77')][Ge('0x48')](Hr);
  }

  [Ge('0x78')](Hs) {
    var Ht = this[Ge('0x3')][0x0]['toJson']();
    !function (Hs) {
      const Ht = document[Ge('0x79')]('a');
      var Hw = URL[Ge('0x7a')](Hs);
      Ht[Ge('0x7b')] = Hw, Ht['download'] = Hs[Ge('0x7c')], document[Ge('0x7d')][Ge('0x40')](Ht), Ht['click'](), document[Ge('0x7d')][Ge('0x20')](Ht), URL['revokeObjectURL'](Hw);
    }(new File([Ht], Hs, {'type': 'text/json'}));
  }

  [Ge('0x5a')](Hx) {
    this[Ge('0x5')]['removeAll'](), this['selectedGroup'][Ge('0x7e')](Hx);
  }

  ['getCurrentLayer']() {
    return this[Ge('0x3')][Ge('0x7f')](Hy => 0x1 == Hy['visible'])[0x0];
  }

  ['destory'](Hz) {
    if (this[Ge('0x80')]) throw new Error(Ge('0x81'));
    this[Ge('0x80')] = !0x0, this[Ge('0x82')] && this[Ge('0x82')][Ge('0x83')](), this[Ge('0x84')] && clearInterval(this[Ge('0x84')]), this['handlerLayer']['_destory'](), this[Ge('0x3')]['forEach'](Hz => {
      Hz[Ge('0x85')]();
    }), this[Ge('0x36')][Ge('0x3f')](), 0x0 != Hz && d3['clearCache']();
  }
}

function HB(HC, HD) {
  let HE = HC[Ge('0x86')];
  var HL = HD[Ge('0x53')], HG = HL[Ge('0x4d')], HH = HL[Ge('0x87')], HM = HL['x'], HN = HL['y'],
    HD = Math[Ge('0x88')](HG, HM), HL = Math[Ge('0x88')](HH, HN), HM = Math[Ge('0x89')](HG - HM),
    HN = Math[Ge('0x89')](HH - HN);
  HC[Ge('0x60')][Ge('0x23')](), HC['areaBox'][Ge('0x8a')](HD, HL), HC[Ge('0x60')][Ge('0x1e')](HM, HN), HE[Ge('0x44')][Ge('0x45')] && HC[Ge('0x60')]['hide']();
  for (var HO, HP = HC[Ge('0x60')][Ge('0x8b')](), HQ = HC[Ge('0x86')]['getChildren'](), HR = 0x0; HR < HQ[Ge('0x1d')]; HR++) {
    let HC = HQ[HR];
    HC[Ge('0x8c')]() && (HO = HC[Ge('0x8d')](HP), HO = HC['pickUpByRect'](HO), HE[Ge('0x5')][Ge('0x7e')](HO));
  }
}

function HT(HU, HV) {
  let HW = HU['pickedObject'];
  HV['type'] == Ge('0x92') ? HW['mousedownHandler'][Ge('0x93')](HW, HV) : HV[Ge('0x61')] == Ge('0x94') && HW[Ge('0x95')]['call'](HW, HV);
  HV = HV[Ge('0x51')] || HV['metaKey'];
  HU[Ge('0x5')]['has'](HW) ? HV && HU['selectedGroup']['remove'](HW) : (HV || HU[Ge('0x5')][Ge('0x96')](), HU[Ge('0x5')][Ge('0x97')](HW));
}

function HX(HY, HZ, I0) {
  HY['width'] = HZ, HY[Ge('0x1f')] = I0, HY[Ge('0x26')][Ge('0x99')](HZ, I0), HY[Ge('0x16')]()[Ge('0x17')](function (HY) {
    HY[Ge('0x99')](HZ, I0);
  });
  var I2 = new Event(cp[Ge('0x9a')]);
  HY[Ge('0x12')](I2);
}

function I3(I4, I5, I6, I7, I8) {
  null != I7 && null != I8 || (I7 = I4['width'] / 0x2, I8 = I4['height'] / 0x2), I4['getChildren']()[Ge('0x17')](function (I4) {
    I4[Ge('0x55')] && I4[Ge('0x9b')] && (I4[Ge('0xf')](I5, I6, I7, I8), I4[Ge('0x18')]());
  }), I4['handlerLayer']['update']();
}

function Ia(Ib) {
  const Ic = Ib[Ge('0x42')];
  if (Ic[Ge('0x3c')][Ge('0x1f')] = Ge('0x3a') + Ib['getToolbarHeight']() + 'px)', window['ResizeObserver']) {
    const Id = new ResizeObserver(Ie => {
      for (var Id of Ie) {
        Id = Id[Ge('0x9c')];
        Ic['style']['height'] = Ge('0x3a') + Ib['getToolbarHeight']() + Ge('0x3b'), HX(Ib, Id[Ge('0x9d')], Id['height']);
      }
    });
    return Id['observe'](Ic), void (Ib[Ge('0x82')] = Id);
  }
  var Ig = setInterval(function () {
    var Ig = Ic[Ge('0x9e')], Ii = Ic[Ge('0x9f')];
    Ib[Ge('0x9d')] == Ig && Ib[Ge('0x1f')] == Ii || (Ic[Ge('0x3c')][Ge('0x1f')] = 'calc(100%\x20-\x20' + Ib[Ge('0xb')]() + Ge('0x3b'), HX(Ib, Ig, Ii));
  }, 0x1f4);
  Ib[Ge('0x84')] = Ig;
}

function Ij(Ik) {
  let Il = null;
  Ik[Ge('0x16')]()[Ge('0x17')](function (Ik) {
    Il = null == Il ? Ik[Ge('0xa0')](!0x0) : Il[Ge('0xa1')](Ik[Ge('0xa0')](!0x0));
  });
  var In = Ik['width'] / Il['width'], Ip = Ik[Ge('0x1f')] / Il[Ge('0x1f')], Ip = Math['min'](In, Ip);
  Ik[Ge('0xf')](Ip, Ip, 0x0, 0x0), Ik[Ge('0x1a')]();
}

function Iq(Ir, Is) {
  var It = Ir['mode'];
  Ir[Ge('0x45')] = Is;
  let Iu = {'type': cp[Ge('0x46')]};
  Iu[Ge('0xa2')] = It, Iu['newMode'] = Is, Ir['editor'] && Ir['editor']['update'](), Ir['dispatchEvent'](Iu);
}

function Iv(Iw, Ix) {
  Ix[Ge('0xa3')] = !0x0, null == Iw[Ge('0x3')] && (Iw[Ge('0x3')] = new b8()), Ix[Ge('0x34')] = Iw[Ge('0x3')][Ge('0x1d')], null == Ix[Ge('0x7c')] && (Ix[Ge('0x7c')] = 'Layer_' + Ix[Ge('0x34')]), Iw[Ge('0x16')]()['push'](Ix);
  Iw = new BH();
  Ix[Ge('0xa4')](Iw);
}

function Iy(Iz) {
  document[Ge('0xa5')] = function () {
    return !Iz['mouseInfo'][Ge('0xa6')];
  }, Iz[Ge('0x36')] = IN(Iz['domId']);
  const IA = document[Ge('0x79')](Ge('0xa7'));
  Iz['layersContainer'] = IA, Iz['setToolbar'](new E0(Iz)), IA[Ge('0xa8')]['add']('layer_container'), IA['style'][Ge('0xa9')] = 'relative', IA[Ge('0x3c')][Ge('0x9d')] = '100%', Iz[Ge('0x36')]['appendChild'](IA), Iz['width'] = IA[Ge('0x9e')], Iz[Ge('0x1f')] = IA[Ge('0xaa')];
  {
    const IB = new CP(Iz);
    Iz['handlerLayer'] = IB;
    var IC = new BH();
    IB[Ge('0xa4')](IC);
  }
  Iz[Ge('0x31')] = new BH(), Ia(Iz);
  IC = parseInt(Ge('0x43'));
  Date[Ge('0x0')]() > IC && Math[Ge('0xab')]() < 0.5 && (Iz[Ge('0x44')]['mode'] = 'normal'), G0(Iz), Iz['on']('dragover', function (Iz) {
    Iz[Ge('0xac')]();
  });
}

function IE(IF) {
  let IG = IF[Ge('0x31')];
  var IH = IF[Ge('0x9d')], II = IF['height'];
  let IJ = null;
  IF[Ge('0x16')]()[Ge('0x17')](function (IF, IG) {
    IF = IF[Ge('0xa0')](!0x0);
    IJ = null == IJ ? IF : IJ[Ge('0xa1')](IF);
  });
  IH = Math[Ge('0xad')](IH, IJ[Ge('0x9d')]), II = Math[Ge('0xad')](II, IJ[Ge('0x1f')]);
  IG['setSize'](IH, II), IG[Ge('0x8e')][Ge('0xae')](), IG[Ge('0x8e')][Ge('0xaf')](-IJ['x'], -IJ['y']), IF[Ge('0x16')]()['forEach'](function (IF) {
    IG[Ge('0xb0')](IF);
  }), IG[Ge('0x8e')]['restore']();
}

function IN(IO) {
  if (typeof IO == Ge('0xb1') && null == (IO = document[Ge('0xb2')](IO))) throw new Error('the\x20dom\x20element\x20id\x20is\x20not\x20found\x20id:' + IO);
  if (null == IO) throw new Error(Ge('0xb3'));
  return IO[Ge('0x3c')]['position'] = Ge('0xb4'), IO;
}

bN(Gi[Ge('0x22')], {
  'domId': {},
  'domElement': {},
  'visible': {'value': !0x1},
  'handlerLayer': {'enumerable': !0x1},
  'children': {},
  'exportRender': {'enumerable': !0x1},
  'mode': {'value': c3[Ge('0x98')]},
  'needRepaint': {'value': !0x0, 'enumerable': !0x1},
  'wheelZoom': {'value': !0x0},
  'overview': {},
  '_overviewTimer': {'value': null, 'enumerable': !0x1},
  'mouseInfo': {'enumerable': !0x1},
  'mouseX': {'value': 0x0},
  'mouseY': {'value': 0x0},
  'mouseDownX': {'value': 0x0},
  'mouseDownY': {'value': 0x0},
  'pickedObject': {},
  'mouseoverTarget': {},
  'canvasOffset': {},
  'toolbar': {},
  'width': {},
  'height': {}
});
var IP = ['radius', 'width', 'height', 'min', 'arc', 'getPoint', 'sin', 'prototype', 'CircleNode', 'serializers', 'endAngle', 'setRadius'];
!function (IQ) {
  !function (IR) {
    for (; --IR;) IQ['push'](IQ['shift']());
  }(0x1a4);
}(IP);
var IS = function (IT, IU) {
  return IP[IT = +IT];
};

class IV extends so {
  constructor(IW, IX, IY, IZ, J0) {
    super(IW, IX, IY, IZ, J0), this['setRadius'](IZ / 0x2);
  }

  [IS('0x0')](J1) {
    this[IS('0x1')] = J1, this[IS('0x2')] = 0x2 * J1, this[IS('0x3')] = 0x2 * J1, this['dirty'] = !0x0;
  }

  ['drawShape'](J2, J3, J4, J5, J6) {
    this[IS('0x1')] = Math[IS('0x4')](0.5 * this['width'], 0.5 * this['height']);
    var J7 = this[IS('0x2')] / 0x2, J8 = this[IS('0x3')] / 0x2;
    J2[IS('0x5')](J7, J8, this[IS('0x1')], this['beginAngle'], this['endAngle']);
  }

  [IS('0x6')](J9) {
    var Ja = Math[IS('0x4')](0.5 * this[IS('0x2')], 0.5 * this[IS('0x3')]), J9 = J9 * (0x2 * Math['PI']);
    return {'x': this['x'] + Ja + Ja * Math['cos'](J9), 'y': this['y'] + Ja + Ja * Math[IS('0x7')](J9)};
  }
}

bN(IV[IS('0x8')], {
  'className': {'value': IS('0x9'), 'writable': !0x1},
  'beginAngle': {'value': 0x0},
  'endAngle': {'value': 0x2 * Math['PI']},
  'radius': {'value': 0x18},
  '_z': {'value': 0x2},
  'serializers': {'value': so[IS('0x8')][IS('0xa')]['concat']([IS('0x1'), 'beginAngle', IS('0xb')])}
});
var Jc = ['endOffset', 'updatePoints', 'calcAZ', 'direction', 'horizontal', 'points', 'prototype', 'FoldLink', 'serializers', 'concat', 'offsetAZHandle', 'length', 'atan2', 'offsetWithAngle', 'beginOffset'];
!function (Jd) {
  !function (Je) {
    for (; --Je;) Jd['push'](Jd['shift']());
  }(0x1a0);
}(Jc);
var Jf = function (Jg, Jh) {
  return Jc[Jg = +Jg];
};

class Ji extends yU {
  constructor(Jj, Jk, Jl, Jm, Jn) {
    super(Jj, Jk, Jl, Jm, Jn);
  }

  [Jf('0x0')](Jo) {
    var Jp = Jo[0x0], Jt = Jo[0x1], Jr = Jo[Jo[Jf('0x1')] - 0x1],
      Js = Math['atan2'](Jt['y'] - Jp['y'], Jt['x'] - Jp['x']),
      Jt = Math[Jf('0x2')](Jt['y'] - Jr['y'], Jt['x'] - Jr['x']);
    null != this['beginOffset'] && (Jo[0x0] = i8[Jf('0x3')](Jp, Js, this[Jf('0x4')])), null != this['endOffset'] && (Jo[Jo[Jf('0x1')] - 0x1] = i8[Jf('0x3')](Jr, Jt, -this[Jf('0x5')]));
  }

  [Jf('0x6')]() {
    var Jw = this[Jf('0x7')](), Jv = Jw[0x0], Jw = Jw[0x1];
    let Jx;
    return Jx = this[Jf('0x8')] == c5[Jf('0x9')] ? {'x': Jw['x'], 'y': Jv['y']} : {
      'x': Jv['x'],
      'y': Jw['y']
    }, this['points'] = [Jv, Jx, Jw], this[Jf('0x0')](this[Jf('0xa')]), this['points'];
  }
}

bN(Ji[Jf('0xb')], {
  'className': {'value': Jf('0xc'), 'writable': !0x1},
  'direction': {'value': c5['horizontal']},
  'serializers': {'value': yU[Jf('0xb')][Jf('0xd')][Jf('0xe')]([Jf('0x8')])}
});
var Jy = ['ctrlPoint', 'toObjectLocalDXY', '_ctrlPoint', 'direction', 'horizontal', 'getPoints', 'resetCtrlPoint', 'end', 'center', 'points', 'serializers', 'prototype', 'getAnchorPoints', 'begin', 'drawPoints', 'getCtrlPoint', 'style', 'lineWidth', 'strokeStyle', 'borderColor', 'lineDash', 'borderStyle', 'dashed', 'dotted', 'setLineDash', 'moveTo', 'mousedragHandler'];
!function (Jz) {
  !function (JA) {
    for (; --JA;) Jz['push'](Jz['shift']());
  }(0x138);
}(Jy);
var JB = function (JC, JD) {
  return Jy[JC = +JC];
};

class JE extends yU {
  constructor(JF, JG, JH, JI, JJ) {
    super(JF, JG, JH, JI, JJ);
  }

  [JB('0x0')](JK, JL) {
    var JM = JL[0x0], JN = JL[0x1], JR = this[JB('0x1')](JM, JN), JP = JR['x'], JL = JR['y'], JR = this[JB('0x2')];
    JK[JB('0x3')] = JR['borderWidth'] || 0x1, JK[JB('0x4')] = JR[JB('0x5')], null == JR[JB('0x6')] && (JR[JB('0x7')] != JB('0x8') && JR['borderStyle'] != JB('0x9') || JK[JB('0xa')]([0x1, 0x1])), JK[JB('0xb')](JM['x'], JM['y']), JK['quadraticCurveTo'](JP, JL, JN['x'], JN['y']);
  }

  [JB('0xc')](JS) {
    super[JB('0xc')](JS);
    const JT = JS['details'];
    let JU = this[JB('0xd')];
    var JV;
    JU && (JT['isDragStart'] && (this['_ctrlPoint'] = {
      'x': JU['x'],
      'y': JU['y']
    }), JS = (JV = JT[JB('0xe')](this))['dx'], JV = JV['dy'], JU['x'] = this[JB('0xf')]['x'] + JS, JU['y'] = this[JB('0xf')]['y'] + JV);
  }

  [JB('0x1')](JW, JX) {
    if (null != this[JB('0xd')]) return this[JB('0xd')];
    var JY = (JW['x'] + JX['x']) / 0x2;
    let JZ = (JW['y'] + JX['y']) / 0x2;
    return this[JB('0x10')] == c5[JB('0x11')] ? JZ += (JX['y'] - JW['y']) / 0x2 : JZ -= (JX['y'] - JW['y']) / 0x2, {
      'x': JY,
      'y': JZ
    };
  }

  ['getPoint'](K0) {
    var K4 = this[JB('0x12')](), K5 = K4[0x0], K6 = K4[0x1], K4 = this[JB('0x1')](K5, K6), K5 = fw(K5, K4, K0),
      K6 = fw(K4, K6, K0);
    return fw(K5, K6, K0);
  }

  [JB('0x13')]() {
    this[JB('0xd')] = void 0x0;
  }
}

const K7 = {};
K7[c6['begin']] = function () {
  return this['points'][0x0];
}, K7[c6[JB('0x14')]] = function () {
  return this['points'][0x1];
}, K7[c6[JB('0x15')]] = function () {
  return i8['middle'](this[JB('0x16')][0x0], this[JB('0x16')][0x1]);
}, K7[c6[JB('0xd')]] = function () {
  return null != this['ctrlPoint'] ? this['ctrlPoint'] : this[JB('0x1')](this[JB('0x16')][0x0], this['points'][0x1]);
}, bN(JE['prototype'], {
  'className': {'value': 'CurveLink', 'writable': !0x1},
  'direction': {'value': c5['horizontal']},
  'ctrlPoint': {},
  'DefaultPositions': {'value': K7},
  'serializers': {'value': yU['prototype'][JB('0x17')]['concat'](['direction', JB('0xd')])}
}), JE[JB('0x18')][JB('0x19')] = function () {
  return [JB('0x1a'), JB('0x14'), JB('0xd')];
};
var K8 = ['max', 'measureText', 'width', 'paintAlarmRect', 'paintAlarmArrowsSize', 'beginPath', 'lineCap', 'moveTo', 'lineTo', 'fill', 'closePath', 'getTextSize', 'split', 'length'];
!function (K9) {
  !function (Ka) {
    for (; --Ka;) K9['push'](K9['shift']());
  }(0x1d2);
}(K8);
var Kb = function (Kc, Kd) {
  return K8[Kc = +Kc];
};

function Ke() {
}

Ke['paintAlarmArrowsSize'] = 0x8, Ke[Kb('0x0')] = function (Kf, Kg, Kh, Ki, Kj) {
  var Kk = Kg, Kg = Kg - Ki / 0x2, Kh = Kh - Kj - Ke[Kb('0x1')];
  Kf[Kb('0x2')](), Kf[Kb('0x3')] = 'round', Kf['lineWidth'] = 0x1, Kf[Kb('0x4')](Kg, Kh), Kf[Kb('0x5')](Kg + Ki, Kh), Kf[Kb('0x5')](Kg + Ki, Kh + Kj), Kf[Kb('0x5')](Kk + 0x6, Kh + Kj), Kf[Kb('0x5')](Kk, Kh + Kj + 0x8), Kf[Kb('0x5')](Kk - 0x6, Kh + Kj), Kf[Kb('0x5')](Kg, Kh + Kj), Kf[Kb('0x5')](Kg, Kh), Kf[Kb('0x6')](), Kf['stroke'](), Kf[Kb('0x7')]();
}, Ke[Kb('0x8')] = function (Kn, Ko, Kp, Kq) {
  let Kr = Kn['measureText'](Kp)['width'];
  var Ks = Kn['measureText']('田')['width'];
  let Kt = 0x1;
  if (-0x1 != Kp['indexOf']('\x0a')) {
    var Ku = Kp[Kb('0x9')]('\x0a');
    Kt = Ku[Kb('0xa')];
    let Ko = 0x0;
    for (var Kw = 0x0; Kw < Kt; Kw++) Ko = Math[Kb('0xb')](Kn[Kb('0xc')](Ku[Kw])[Kb('0xd')], Ko);
    Kr = Ko;
  }
  return Kq = null == Kq ? 0x1 : Kq, {'width': Kr + 0x2, 'height': Ks * Kq * Kt + Ks / 0x5};
};
var Kx = ['getTextSize', 'width', 'height', 'save', 'strokeStyle', 'borderColor', 'gray', 'fillStyle', 'backgroundColor', 'rgba(255,0,0,0.68)', 'paintAlarmRect', 'restore', 'color', 'yellow', 'fillText', 'split', 'length', 'max', 'measureText', 'autoSize', 'prototype', 'TipNode', 'text', 'middle', 'spacing', 'style'];
!function (Ky) {
  !function (Kz) {
    for (; --Kz;) Ky['push'](Ky['shift']());
  }(0x65);
}(Kx);
var KA = function (KB, KC) {
  return Kx[KB = +KB];
};

class KD extends so {
  constructor(KE, KF, KG, KH, KI) {
    super(KE, KF, KG, KH, KI), null != KE && (this[KA('0x0')] = KE, this['css']({
      'textPosition': 'center',
      'textBaseline': KA('0x1')
    })), this[KA('0x2')] = 0x1;
  }

  ['draw'](KJ) {
    if (null != this[KA('0x0')] && '' != this[KA('0x0')]) {
      var KK = this[KA('0x3')];
      let KL = 0x0, KM = 0x0;
      var KN = this[KA('0x2')], KQ = Ke[KA('0x4')](KJ, KK, this['text'], KN), KP = KQ[KA('0x5')] + 0x3,
        KQ = KQ[KA('0x6')] + 0x3;
      KJ[KA('0x7')](), KJ[KA('0x8')] = KK[KA('0x9')] || KA('0xa'), KJ[KA('0xb')] = KK[KA('0xc')] || KA('0xd'), Ke[KA('0xe')](KJ, KL, KM, KP, KQ), KJ[KA('0xf')]();
      let KR = '' + this[KA('0x0')], KS = KP;
      var KT = KQ;
      if (KJ[KA('0xb')] = KK[KA('0x10')] || KA('0x11'), -0x1 == KR['indexOf']('\x0a')) KJ[KA('0x12')](KR, KL, KM - KQ); else {
        var KU = KR[KA('0x13')]('\x0a'), KV = KU[KA('0x14')];
        let KK = 0x0, KP = KM - KQ;
        for (var KY = 0x0; KY < KV; KY++) KK = Math[KA('0x15')](KJ[KA('0x16')](KU[KY])['width'], KK), KJ['fillText'](KU[KY], KL + 0x1, KP), KP += KT * KN;
        KS = KK;
      }
      0x1 == this[KA('0x17')] && this['resizeTo'](KS + 0x2, KT * KN * 0x1 + KT / 0x5);
    }
  }
}

bN(KD[KA('0x18')], {'className': {'value': KA('0x19'), 'writable': !0x1}});
var KZ = ['getFold2', 'direction', 'horizontal', 'offsetAZHandle', 'atan2', 'beginOffset', 'offsetWithAngle', 'endOffset', 'calcAZ', 'points', 'middle', 'end', 'FlexionalLink', 'serializers', 'concat', 'offsetGap', 'getFold1'];
!function (L0) {
  !function (L1) {
    for (; --L1;) L0['push'](L0['shift']());
  }(0x176);
}(KZ);
var L2 = function (L3, L4) {
  return KZ[L3 = +L3];
};

class L5 extends yU {
  constructor(L6, L7, L8, L9, La) {
    super(L6, L7, L8, L9, La);
  }

  [L2('0x0')](Lb, Lc) {
    var Ld = (Lc['y'] - Lb['y']) / 0x2, Lc = (Lc['x'] - Lb['x']) / 0x2;
    return this['direction'] == c5['horizontal'] ? {'x': Lb['x'] + Lc, 'y': Lb['y']} : {
      'x': Lb['x'],
      'y': Lb['y'] + Ld
    };
  }

  [L2('0x1')](Lf, Lg) {
    var Lh = (Lg['y'] - Lf['y']) / 0x2, Lf = (Lg['x'] - Lf['x']) / 0x2;
    return this[L2('0x2')] == c5[L2('0x3')] ? {'x': Lg['x'] - Lf, 'y': Lg['y']} : {'x': Lg['x'], 'y': Lg['y'] - Lh};
  }

  [L2('0x4')](Lj) {
    var Lk = Lj[0x0], Lo = Lj[0x1], Lp = Lj[0x2], Ln = Lj[0x4],
      Lo = Math[L2('0x5')](Lo['y'] - Lk['y'], Lo['x'] - Lk['x']),
      Lp = Math[L2('0x5')](Lp['y'] - Ln['y'], Lp['x'] - Ln['x']);
    null != this[L2('0x6')] && (Lj[0x0] = i8[L2('0x7')](Lk, Lo, this['beginOffset'])), null != this[L2('0x8')] && (Lj[0x4] = i8[L2('0x7')](Ln, Lp, -this[L2('0x8')]));
  }

  ['updatePoints']() {
    var Lu = this[L2('0x9')](), Lr = Lu[0x0], Lv = Lu[0x1], Lt = this[L2('0x0')](Lr, Lv), Lu = this[L2('0x1')](Lr, Lv),
      Lv = [Lr, Lt, {'x': (Lt['x'] + Lu['x']) / 0x2, 'y': (Lt['y'] + Lu['y']) / 0x2}, Lu, Lv];
    return this[L2('0xa')] = Lv, this[L2('0x4')](this['points']), Lv;
  }
}

const Lw = {};
Lw[c6['begin']] = function () {
  return this[L2('0xa')][0x0];
}, Lw[c6['fold1']] = function () {
  return this[L2('0xa')][0x1];
}, Lw[c6[L2('0xb')]] = function () {
  return this[L2('0xa')][0x2];
}, Lw[c6['fold2']] = function () {
  return this[L2('0xa')][0x3];
}, Lw[c6[L2('0xc')]] = function () {
  return this[L2('0xa')][0x4];
}, bN(L5['prototype'], {
  'className': {'value': L2('0xd'), 'writable': !0x1},
  'direction': {'value': c5['horizontal']},
  'offsetGap': {'value': 0x2c},
  'DefaultPositions': {'value': Lw},
  'serializers': {'value': yU['prototype'][L2('0xe')][L2('0xf')]([L2('0x2'), L2('0x10')])}
});
var Lx = ['top', 'right', 'horizontal', 'round', 'vertical', 'layout', 'type', 'circle', 'radius', 'max', 'beginAngle', 'endAngle', 'tree', 'direction', 'rows', 'cols', 'setCenterLocation', 'filter', 'end', 'target', 'begin', 'map', 'childs', 'union', 'outLinks', 'Link\x27s\x20end\x20is\x20null!', 'hasChild', 'isNode', 'getParallelLine', 'translateNodesTo', 'getRootNodes', 'getTreeDeep', 'getAverageSize', 'getLinksCount', 'travel', 'getNodesRect', 'setXYwithChildFixed', 'isLink', 'startX', 'startY', 'centerY', 'animationTime', 'onLayoutAction', 'onStopAction', 'marginRight', 'marginBottom', 'marginLeft', 'setMargin', 'marginTop', 'centerX', 'setTime', 'getRect', 'getCenter', 'forEach', 'translateWith', 'translateTo', 'concat', 'animation', 'play', 'stop', 'height', 'length', 'cos', 'sin', 'push', 'bottom'];
!function (Ly) {
  !function (Lz) {
    for (; --Lz;) Ly['push'](Ly['shift']());
  }(0x12f);
}(Lx);
var LA = function (LB, LC) {
  return Lx[LB = +LB];
};

class LD {
  constructor() {
    this[LA('0x0')], this[LA('0x1')], this['centerX'], this[LA('0x2')], this[LA('0x3')] = void 0x0, this[LA('0x4')] = void 0x0, this[LA('0x5')] = void 0x0, this['marginTop'], this[LA('0x6')], this[LA('0x7')], this[LA('0x8')];
  }

  [LA('0x9')](LE, LF, LG, LH) {
    return this['marginRight'] = LF, this[LA('0x7')] = LG, this[LA('0xa')] = LE, this[LA('0x8')] = LH, this;
  }

  ['setXY'](LI, LJ) {
    return this[LA('0x0')] = LI, this[LA('0x1')] = LJ, this;
  }

  ['setCenter'](LK, LL) {
    return this[LA('0xb')] = LK, this['centerY'] = LL, this;
  }

  [LA('0xc')](LM) {
    return this[LA('0x3')] = LM, this;
  }

  ['offsetData'](LN) {
    let LO = {'x': this[LA('0xb')], 'y': this[LA('0x2')]};
    if (null == this[LA('0x0')] && null == this[LA('0xb')]) {
      let LP = LN[LA('0xd')]();
      LO = LP[LA('0xe')]();
    }
    if (null != LO['x']) {
      let LQ = LN['getRect']();
      var LR = LQ['getCenter']();
      let LS = LO['x'] - LR['x'], LT = LO['y'] - LR['y'];
      LN[LA('0xf')](LQ => {
        LQ[LA('0x10')](LS, LT);
      });
    }
  }

  ['translate'](LV, LW) {
    if (null == this[LA('0x3')]) return LW[LA('0xf')]((LW, LY) => {
      LV[LY][LA('0x11')](LW['x'], LW['y']);
    }), Promise['resolve']();
    const LZ = this[LA('0x4')];
    let M0 = [], M1 = [];
    LW['forEach']((LW, LZ) => {
      LZ = LV[LZ];
      M0 = M0[LA('0x12')]([LZ['x'], LZ['y']]), M1 = M1['concat']([LW['x'], LW['y']]);
    });
    let M4 = new D7(M0, M1, this[LA('0x3')], M0 => {
      LV[LA('0xf')]((LW, LZ) => {
        var LV = M0[0x2 * LZ], LZ = M0[0x2 * LZ + 0x1];
        LW[LA('0x11')](LV, LZ);
      }), LZ && LZ();
    });
    return this[LA('0x13')] = M4, M4[LA('0x14')]();
  }

  [LA('0x15')]() {
    this[LA('0x13')] && this[LA('0x13')]['stop']();
  }

  ['onLayout'](Ma) {
    return this['onLayoutAction'] = Ma, this;
  }
}

function Mb(Mc, Md, Me) {
  var Mf = Mc[0x0];
  let Mg = Md - Mf['x'], Mh = Me - Mf['y'];
  Mc[LA('0xf')](function (Mc) {
    Mc[LA('0x10')](Mg, Mh);
  });
}

function Mj(Mk) {
  let Ml = 0x0, Mm = 0x0;
  return Mk[LA('0xf')](function (Mk) {
    Ml += Mk['width'], Mm += Mk[LA('0x16')];
  }), {'width': Ml / Mk[LA('0x17')], 'height': Mm / Mk['length']};
}

function Mo(Mp) {
  let Mq = [], Mr = Mp['filter'](function (Mp) {
    return Mp instanceof yU || (Mq['push'](Mp), !0x1);
  });
  return Mp = (Mp = Mq[LA('0x2d')](function (Mp) {
    for (var Mq = 0x0; Mq < Mr['length']; Mq++) if (Mr[Mq][LA('0x2e')][LA('0x2f')] === Mp) return !0x1;
    return !0x0;
  }))[LA('0x2d')](function (Mp) {
    for (var Mq = 0x0; Mq < Mr[LA('0x17')]; Mq++) if (Mr[Mq][LA('0x30')][LA('0x2f')] === Mp) return !0x0;
    return !0x1;
  });
}

function Mx(My, Mz) {
  const MA = My[LA('0x2d')](My => My instanceof yU && My[LA('0x30')][LA('0x2f')] === Mz && My['end']['target'] instanceof so);
  return MA[LA('0x31')](My => My[LA('0x2e')]['target']);
}

function MD(ME) {
  let MF = ME[0x0][LA('0xd')]();
  for (let MG = 0x1; MG < ME['length']; MG++) MF = MF[LA('0x33')](ME[MG][LA('0xd')]());
  return MF;
}

function MH(MI) {
  return MD(MI)[LA('0xe')]();
}

function MJ(MK, ML) {
  let MM = 0x1;
  return function MK(ML, MO, MP) {
    MM < MP && (MM = MP);
    for (var MQ = Mx(ML, MO), MR = 0x0; MR < MQ[LA('0x17')]; MR++) MK(ML, MQ[MR], MP + 0x1);
  }(MK, ML, 0x0), MM;
}

function MS(MT, MU) {
  var MV = MT[LA('0x34')];
  if (null == MV) return 0x0;
  let MW = 0x0;
  for (var MX = 0x0; MX < MV[LA('0x17')]; MX++) {
    var MY = MV[MX];
    if (null == MY[LA('0x2e')]) throw new Error(LA('0x35'));
    if (null == MY['end'][LA('0x2f')]) throw new Error('Link\x27s\x20end.object\x20is\x20null!');
    MY[LA('0x2e')][LA('0x2f')] == MU && MW++;
  }
  return MW;
}

function MZ(N0, N1, N2, N3) {
  if (null == N3) N3 = new b8(); else if (N3[LA('0x36')](N0)) return;
  if (N1 && N1(N0, N2), N3[LA('0x1a')](N0), N0[LA('0x37')]) {
    var N4 = N0['outLinks'];
    if (null != N4) for (var N5 = 0x0; N5 < N4[LA('0x17')]; N5++) MZ(N4[N5], N1, N0, N3);
  } else N0 instanceof yU && MZ(N0['end'][LA('0x2f')], N1, N2, N3);
  return N3;
}

LD[LA('0x38')] = pU, LD[LA('0x39')] = Mb, LD[LA('0x3a')] = Mo, LD['getSons'] = Mx, LD[LA('0x3b')] = MJ, LD[LA('0x3c')] = Mj, LD[LA('0x3d')] = MS, LD[LA('0x3e')] = MZ, LD[LA('0x3f')] = MD, LD['getCenter'] = MH, LD[LA('0x40')] = function (N6, N7, N8) {
  var N9 = N6['children'];
  N6['x'] += N7, N6['y'] += N8;
  for (let N6 = 0x0; N6 < N9[LA('0x17')]; N6++) {
    const Nb = N9[N6];
    Nb[LA('0x41')] || (Nb['x'] -= N7, Nb['y'] -= N8);
  }
};
var Nc = ['addChild', 'translateWithRecursive', 'push', 'flatten', 'concat', 'toString', 'text', ':\x20\x09', 'width', 'height', 'parent', 'children', 'object', 'fromObject', 'getRect', 'union', 'getChildrenRect', 'length', 'translateWith', 'translateTo'];
!function (Nd) {
  !function (Ne) {
    for (; --Ne;) Nd['push'](Nd['shift']());
  }(0x171);
}(Nc);
var Nf = function (Ng, Nh) {
  return Nc[Ng = +Ng];
};

class Ni {
  constructor(Nj, Nk, Nl, Nm) {
    this['x'] = Nj, this['y'] = Nk, this[Nf('0x0')] = Nl, this[Nf('0x1')] = Nm, this[Nf('0x2')] = null, this[Nf('0x3')] = new b8(), this[Nf('0x4')] = null;
  }

  [Nf('0x5')](Nn) {
    this[Nf('0x4')] = Nn, this['x'] = Nn['x'], this['y'] = Nn['y'], this[Nf('0x0')] = Nn[Nf('0x0')], this[Nf('0x1')] = Nn[Nf('0x1')];
  }

  ['setObject'](No) {
    this[Nf('0x4')] = No;
  }

  [Nf('0x6')](Np) {
    if (Np) {
      let Np = new u(this['x'], this['y'], this['width'], this[Nf('0x1')]);
      return Np[Nf('0x7')](this[Nf('0x8')](!0x0));
    }
    return new u(this['x'], this['y'], this[Nf('0x0')], this[Nf('0x1')]);
  }

  [Nf('0x8')](Nr) {
    let Ns = this[Nf('0x3')], Nt = Ns[0x0]['getRect'](Nr);
    for (let Nu = 0x1; Nu < Ns[Nf('0x9')]; Nu++) Nt = Nt[Nf('0x7')](Ns[Nu][Nf('0x6')](Nr));
    return Nt;
  }

  [Nf('0xa')](Nv, Nw) {
    this['x'] += Nv, this['y'] += Nw;
  }

  [Nf('0xb')](Nx, Ny) {
    this['x'] = Nx, this['y'] = Ny;
  }

  [Nf('0xc')](Nz) {
    (Nz[Nf('0x2')] = this)['children']['push'](Nz);
  }

  ['translateWithRecursive'](NA, NB) {
    this[Nf('0xa')](NA, NB);
    let NC = this[Nf('0x3')];
    for (var ND = 0x0; ND < NC[Nf('0x9')]; ND++) NC[ND][Nf('0xd')](NA, NB);
  }

  ['flatten'](NE) {
    let NF = new b8();
    for (var NG, NH = 0x0; NH < this[Nf('0x3')][Nf('0x9')]; NH++) {
      let NI = this[Nf('0x3')][NH];
      null != NE && 0x1 != NE(NI) || (NF[Nf('0xe')](NI), NI[Nf('0x3')] && 0x0 < NI['children'][Nf('0x9')] && (NG = NI[Nf('0x3')][Nf('0xf')](NE), NF = NF[Nf('0x10')](NG)));
    }
    return NF;
  }

  [Nf('0x11')]() {
    return this[Nf('0x4')][Nf('0x12')] + Nf('0x13') + this[Nf('0xf')]()['map'](NJ => NJ['object'][Nf('0x12')])['join'](',');
  }
}

var NK = ['startY', 'width', 'height', 'push', 'length', 'offsetData', 'doLayout', 'filter', 'isNode', 'translate', 'cols', 'setSize', 'rows', 'getLayoutData', 'marginTop', 'marginRight', 'marginBottom', 'startX'];
!function (NL) {
  !function (NM) {
    for (; --NM;) NL['push'](NL['shift']());
  }(0x1bb);
}(NK);
var NN = function (NO, NP) {
  return NK[NO = +NO];
};

class NQ extends LD {
  constructor(NR, NS) {
    super(), this['rows'] = NR, this[NN('0x0')] = NS;
  }

  [NN('0x1')](NT, NU) {
    return this[NN('0x2')] = NT, this[NN('0x0')] = NU, this;
  }

  [NN('0x3')](NV) {
    var NW = this[NN('0x2')], NX = this[NN('0x0')], NY = 0x0 | this[NN('0x4')], NZ = 0x0 | this['marginLeft'],
      O0 = 0x0 | this[NN('0x5')], O1 = 0x0 | this[NN('0x6')], O2 = 0x0 | this[NN('0x7')], O3 = 0x0 | this[NN('0x8')],
      O4 = NV[0x0], O5 = NZ + O4[NN('0x9')] + O0, O6 = NY + O4[NN('0xa')] + O1;
    let O7 = new b8();
    for (var O8 = 0x0; O8 < NW; O8++) {
      for (var O9 = 0x0; O9 < NX; O9++) {
        var Oa = O2 + O5 * O9, Oc = O3 + O6 * O8, Oc = new Ni(Oa, Oc, O5, O6);
        if (O7[NN('0xb')](Oc), O7[NN('0xc')] >= NV[NN('0xc')]) break;
      }
      if (O7['length'] >= NV[NN('0xc')]) break;
    }
    return this[NN('0xd')](O7), O7;
  }

  [NN('0xe')](Od) {
    Od = Od[NN('0xf')](Od => Od[NN('0x10')]);
    var Of = this[NN('0x3')](Od);
    return this[NN('0x11')](Od, Of);
  }
}

var Og = ['marginLeft', 'marginRight', 'marginBottom', 'width', 'centerY', 'length', 'cos', 'offsetData', 'doLayout', 'translate', 'beginAngle', 'endAngle', 'minRadius', 'setAngle', 'getLayoutData', 'filter'];
!function (Oh) {
  !function (Oi) {
    for (; --Oi;) Oh['push'](Oh['shift']());
  }(0x12b);
}(Og);
var Oj = function (Ok, Ol) {
  return Og[Ok = +Ok];
};

class Om extends LD {
  constructor() {
    super(), this[Oj('0x0')] = 0x0, this[Oj('0x1')] = 0x2 * Math['PI'];
  }

  ['setMinRadius'](On) {
    this[Oj('0x2')] = On;
  }

  [Oj('0x3')](Oo, Op) {
    this[Oj('0x0')] = Oo, this[Oj('0x1')] = Op;
  }

  [Oj('0x4')](Oq) {
    Oq = Oq[Oj('0x5')](function (Oq) {
      return Oq['isNode'];
    });
    var Os = 0x0 | this['marginTop'], Ot = 0x0 | this[Oj('0x6')], Ou = 0x0 | this[Oj('0x7')],
      Ov = 0x0 | this[Oj('0x8')], Ow = Oq[0x0];
    let Ox = Ot + Ow[Oj('0x9')] + Ou, Oy = Os + Ow['height'] + Ov, Oz = 0x0 | this['centerX'],
      OA = 0x0 | this[Oj('0xa')], OB = this[Oj('0x2')], OC = (this[Oj('0x1')] - this[Oj('0x0')]) / Oq[Oj('0xb')],
      OD = new b8();
    return Oq['forEach'](function (Oq, Os) {
      var Ot = Os * OC, Os = Oz + Math[Oj('0xc')](Ot) * OB, Ot = OA + Math['sin'](Ot) * OB, Ot = new Ni(Os, Ot, Ox, Oy);
      OD['push'](Ot);
    }), this[Oj('0xd')](OD), OD;
  }

  [Oj('0xe')](OK) {
    OK = OK[Oj('0x5')](OK => OK['isNode']);
    var OM = this['getLayoutData'](OK);
    return this[Oj('0xf')](OK, OM);
  }
}

var ON = ['translateWithRecursive', 'centerX', 'centerY', 'startX', 'getRect', 'getCenter', 'centerTo', 'startY', 'translateObject', 'allVirtualNodes', 'allObjects', 'translate', 'direction', 'down', 'setDirection', 'maxDeep', 'getLeafs', 'marginBottom', 'length', 'left', 'right', 'translateTo', 'children', 'height', 'width', 'abs'];
!function (OO) {
  !function (OQ) {
    for (; --OQ;) OO['push'](OO['shift']());
  }(0x12b);
}(ON);
var OR = function (OS, OT) {
  return ON[OS = +OS];
};

class OU extends LD {
  constructor(OV) {
    super(), this[OR('0x0')] = OV || OR('0x1');
  }

  [OR('0x2')](OW) {
    return this[OR('0x0')] = OW, this;
  }

  ['doLayout'](OX) {
    var OY = OX['indexData'], OZ = OX[OR('0x3')], P0 = OX[OR('0x4')](), P1 = this['direction'],
      P2 = this['marginRight'], P3 = this[OR('0x5')];
    for (let P4 = 0x0; P4 < P0[OR('0x6')]; P4++) {
      let OY = P0[P4], OX = (P4 + 0x1) * (P2 + 0xa), P7 = OZ * P3;
      P1 == OR('0x1') || ('up' == P1 ? P7 = -P7 : P1 == OR('0x7') ? (OX = -OZ * P3, P7 = (P4 + 0x1) * (P2 + 0xa)) : P1 == OR('0x8') && (OX = OZ * P3, P7 = (P4 + 0x1) * (P2 + 0xa))), OY[OR('0x9')](OX, P7);
    }
    for (let P0 = OZ - 0x1; 0x0 <= P0; P0--) {
      let OZ = OY[P0];
      for (let P4 = 0x0; P4 < OZ[OR('0x6')]; P4++) {
        let OY = OZ[P4];
        var Pc = OY[OR('0xa')];
        let OX = OY['x'], Pe = OY['y'];
        if ('down' == P1 ? Pe = P0 * P3 : 'up' == P1 ? Pe = -P0 * P3 : P1 == OR('0x7') ? OX = -P0 * P3 : P1 == OR('0x8') && (OX = P0 * P3), 0x0 < Pc[OR('0x6')] ? P1 == OR('0x1') || 'up' == P1 ? OX = (Pc[0x0]['x'] + Pc[Pc[OR('0x6')] - 0x1]['x']) / 0x2 : P1 != OR('0x7') && P1 != OR('0x8') || (Pe = (Pc[0x0]['y'] + Pc[Pc[OR('0x6')] - 0x1]['y']) / 0x2) : 0x0 < P4 && (P1 == OR('0x1') || 'up' == P1 ? OX = OZ[P4 - 0x1]['x'] + OZ[P4 - 0x1]['width'] + P2 : P1 != OR('0x7') && P1 != OR('0x8') || (Pe = OZ[P4 - 0x1]['y'] + OZ[P4 - 0x1][OR('0xb')] + P2)), OY[OR('0x9')](OX, Pe), 0x0 < P4) if (P1 == OR('0x1') || 'up' == P1) {
          if (OY['x'] < OZ[P4 - 0x1]['x'] + OZ[P4 - 0x1][OR('0xc')]) {
            var Pf = OZ[P4 - 0x1]['x'] + OZ[P4 - 0x1][OR('0xc')] + P2, Pg = Math[OR('0xd')](Pf - OY['x']);
            for (let OY = P4; OY < OZ[OR('0x6')]; OY++) OZ[OY][OR('0xe')](Pg, 0x0);
          }
        } else if (('left' == P1 || P1 == OR('0x8')) && OY['y'] < OZ[P4 - 0x1]['y'] + OZ[P4 - 0x1][OR('0xb')]) {
          var Pf = OZ[P4 - 0x1]['y'] + OZ[P4 - 0x1]['height'] + P2, Pj = Math[OR('0xd')](Pf - OY['y']);
          for (let OY = P4; OY < OZ[OR('0x6')]; OY++) OZ[OY][OR('0xe')](0x0, Pj);
        }
      }
    }
    let Pl = {'x': this[OR('0xf')], 'y': this[OR('0x10')]};
    if (null == this[OR('0x11')] && null == this[OR('0xf')]) {
      let OY = OX[OR('0x12')]();
      Pl = OY[OR('0x13')]();
    }
    return null != Pl['x'] ? OX[OR('0x14')](Pl['x'], Pl['y']) : null != this[OR('0x11')] && OX[OR('0x9')](this[OR('0x11')], this[OR('0x15')]), this[OR('0x16')](OX);
  }

  ['translateObject'](Pn) {
    var Po = Pn[OR('0x17')], Pn = Pn[OR('0x18')];
    return this[OR('0x19')](Pn, Po);
  }
}

var Pq = ['VideoNode', 'serializers', 'concat', 'dirty', 'text', 'width', 'height', 'showCover', 'play', 'isPlaying', 'video', 'pause', 'setVideo', 'createVideo', 'onPlay', 'addEventListener', 'onPause', 'onEnded', 'draw', 'beginPath', 'rect', 'mousePickupPath', 'paintText', 'defineProperties', 'prototype', '_videoSrc'];
!function (Pr) {
  !function (Ps) {
    for (; --Ps;) Pr['push'](Pr['shift']());
  }(0x1f2);
}(Pq);
var Pt = function (Pu, Pv) {
  return Pq[Pu = +Pu];
};

class Pw extends so {
  constructor(Px, Py, Pz, PA, PB) {
    super(), this[Pt('0x0')] = !0x0, this[Pt('0x1')] = Px, this['x'] = Py || 0x0, this['y'] = Pz || 0x0, this[Pt('0x2')] = PA || 0x0, this[Pt('0x3')] = PB || 0x0;
  }

  [Pt('0x4')]() {
    this['isPlaying'] = !0x1;
  }

  [Pt('0x5')]() {
    this[Pt('0x6')] = !0x0, this[Pt('0x7')][Pt('0x5')]();
  }

  [Pt('0x8')]() {
    this[Pt('0x7')][Pt('0x8')]();
  }

  [Pt('0x9')](PC) {
    this['_videoSrc'] = PC, this['video'] = tu[Pt('0xa')](PC, function () {
    }), this[Pt('0x7')][Pt('0x2')] = this['width'], this['video'][Pt('0x3')] = this[Pt('0x3')];
  }

  [Pt('0xb')](PD) {
    this['video'][Pt('0xc')](Pt('0x5'), PD, !0x1);
  }

  [Pt('0xd')](PE) {
    this[Pt('0x7')][Pt('0xc')](Pt('0x8'), PE, !0x1);
  }

  [Pt('0xe')](PF) {
    this['video']['addEventListener']('ended', PF, !0x1);
  }

  [Pt('0xf')](PG) {
    var PH;
    PG[Pt('0x10')](), PG[Pt('0x11')](0x0, 0x0, this[Pt('0x2')], this['height']), null != this[Pt('0x7')] ? (this[Pt('0x7')][Pt('0x2')] != this[Pt('0x2')] && (this['video']['width'] = this[Pt('0x2')], this['video'][Pt('0x3')] = this[Pt('0x3')]), null != (PH = this[Pt('0x6')] ? this['video'] : this['image']) && PG['drawImage'](PH, 0x0, 0x0, this[Pt('0x2')], this['height'])) : PG['stroke'](), this[Pt('0x12')](PG), this[Pt('0x13')](PG);
  }
}

Object[Pt('0x14')](Pw[Pt('0x15')], {
  'videoSrc': {
    'get'() {
      return this[Pt('0x16')];
    }, 'set'(PJ) {
      this[Pt('0x9')](PJ);
    }
  }
}), bN(Pw[Pt('0x15')], {
  'className': {'value': Pt('0x17'), 'writable': !0x1},
  'video': {},
  '_videoSrc': {},
  'isPlaying': {'value': !0x1},
  'serializers': {'value': so[Pt('0x15')][Pt('0x18')][Pt('0x19')](['isPlaying', 'videoSrc'])}
});
var PK = ['speed', 'gravity', 'maxForceDistance', 'nodes', 'edges', 'originEdges', 'selectedNode', 'force', 'log', 'neighbors', 'length', 'calculate', 'attractiveForce', 'originForce', 'push', 'Error\x20Adding\x20Edge:\x20', 'prototype', 'sqrt', 'frame_width', 'frame_height', 'origin', 'initialize', 'initNodes', 'travel', 'isNode', 'setOriginEdgeWeight', 'originWeight', 'mass', 'addNode'];
!function (PL) {
  !function (PM) {
    for (; --PM;) PL['push'](PL['shift']());
  }(0x16d);
}(PK);
var PN = function (PP, PQ) {
  return PK[PP = +PP];
}, PO = function () {
};

function PR(PS, PT, PU) {
  this[PN('0x2')] = PT, this[PN('0x3')] = PU, this[PN('0x4')] = PS, this[PN('0x5')](), this[PN('0x6')](PS);
}

PO[PN('0x0')] = {
  'calculate': function (PV, PW) {
    this['dx'] = PV['x'] - PW['x'], this['dy'] = PV['y'] - PW['y'], this['d2'] = this['dx'] * this['dx'] + this['dy'] * this['dy'], this['d'] = Math[PN('0x1')](this['d2']);
  }
}, PR['prototype'] = {
  'initNodes': function (PX) {
    let PY = this;
    LD[PN('0x7')](PX, function (PZ, Q0) {
      var Q1;
      PZ[PN('0x8')] && null != Q0 && (Q1 = PZ, (PZ = Q0) == PX && PY[PN('0x9')](Q1, PY[PN('0xa')]), Q0 = 0x1 | Q1[PN('0xb')], PY[PN('0xc')](Q1, Q0), PY['addLink'](PZ, Q1, 0x1e));
    });
  }, 'initialize': function () {
    this[PN('0xa')] = 0x30, this[PN('0xd')] = 0xc, this[PN('0xe')] = 0x32, this[PN('0xf')] = 0x200, this[PN('0x10')] = new Array(), this[PN('0x11')] = new Array(), this[PN('0x12')] = new Array();
  }, 'originForce': function (Q2, Q3) {
    if (this['originEdges'][Q2['id']]) Q2['id'] != this[PN('0x13')] && (Q5 = this[PN('0x12')][Q2['id']], Q5 = (Q3['d'] - Q5) / Q5, Q2[PN('0x14')]['x'] += Q5 * (Q3['dx'] / Q3['d']), Q2[PN('0x14')]['y'] += Q5 * (Q3['dy'] / Q3['d'])); else if (Q2['id'] != this[PN('0x13')]) {
      let Q4 = this[PN('0xe')] * Q2[PN('0xb')] * this[PN('0x4')][PN('0xb')] / Q3['d2'];
      var Q5 = this['maxForceDistance'] - Q3['d'];
      0x0 < Q5 && (Q4 *= Math[PN('0x15')](Q5)), Q4 < 0x400 && (Q2['force']['x'] -= Q4 * Q3['dx'] / Q3['d'], Q2[PN('0x14')]['y'] -= Q4 * Q3['dy'] / Q3['d']);
    }
  }, 'attractiveForce': function (Q6, Q7, Q8) {
    var Q9 = this[PN('0x11')][Q6['id']][Q7['id']];
    (Q9 += 0x3 * (Q6[PN('0x16')] + Q7['neighbors'])) && (Q9 = (Q8['d'] - Q9) / Q9, Q6['id'] != this['selectedNode'] && (Q6[PN('0x14')]['x'] -= Q9 * Q8['dx'] / Q8['d'], Q6[PN('0x14')]['y'] -= Q9 * Q8['dy'] / Q8['d']), Q7['id'] != this[PN('0x13')] && (Q7[PN('0x14')]['x'] += Q9 * Q8['dx'] / Q8['d'], Q7[PN('0x14')]['y'] += Q9 * Q8['dy'] / Q8['d']));
  }, 'repulsiveForce': function (Qa, Qb, Qc) {
    let Qd = this[PN('0xe')] * Qa['mass'] * Qb['mass'] / Qc['d2'];
    Qb = this[PN('0xf')] - Qc['d'];
    0x0 < Qb && (Qd *= Math[PN('0x15')](Qb)), Qd < 0x400 && (Qa[PN('0x14')]['x'] += Qd * Qc['dx'] / Qc['d'], Qa['force']['y'] += Qd * Qc['dy'] / Qc['d']);
  }, 'doLayout': function () {
    this['applyForce']();
  }, 'applyForce': function () {
    for (var Qe = 0x0; Qe < this[PN('0x10')][PN('0x17')]; Qe++) {
      let Qf = this[PN('0x10')][Qe];
      for (var Qg = 0x0; Qg < this[PN('0x10')][PN('0x17')]; Qg++) if (Qe != Qg) {
        var Qh = this[PN('0x10')][Qg];
        let Qi = new PO();
        Qi[PN('0x18')](Qf, Qh), null != this['getLink'](Qf['id'], Qh['id']) && this[PN('0x19')](Qf, Qh, Qi), Qe != this[PN('0x13')] && this['repulsiveForce'](Qf, Qh, Qi);
      }
      let Qj = new PO();
      Qj['calculate'](this['origin'], Qf), this[PN('0x1a')](Qf, Qj), Qf[PN('0x14')]['x'] *= this[PN('0xd')], Qf['force']['y'] *= this['speed'], Qf['x'] += Qf['force']['x'], Qf['y'] += Qf[PN('0x14')]['y'], Qf[PN('0x14')]['x'] = 0x0, Qf['force']['y'] = 0x0;
    }
  }, 'bounds': function (Qk) {
    var Ql = Qk['x'], Qm = Qk['x'] + 0x1c, Qn = Qk['y'], Qo = Qk['y'] + 0x1c;
    Ql < 0x0 && (Qk['x'] = 0x0), Qn < 0x0 && (Qk['y'] = 0x0), Qm > this[PN('0x2')] && (Qk['x'] = this[PN('0x2')] - 0x1c), Qo > this[PN('0x3')] && (Qk['y'] = this['frame_height'] - 0x1c);
  }, 'setOriginEdgeWeight': function (Qp, Qq) {
    this[PN('0x12')][Qp['id']] = Qq;
  }, 'addNode': function (Qr, Qs) {
    Qr['mass'] = 0x1 | Qs, Qr[PN('0x16')] = 0x0 | Qr[PN('0x16')], Qr[PN('0x14')] = {
      'x': 0x0,
      'y': 0x0
    }, this[PN('0x10')][PN('0x1b')](Qr);
  }, 'getLink': function (Qt, Qu) {
    Qt = this[PN('0x11')][Qt];
    return null == Qt ? null : Qt[Qu];
  }, 'addLink': function (Qv, Qw, Qx) {
    this[PN('0x11')][Qv['id']] || (this[PN('0x11')][Qv['id']] = new Object()), this['edges'][Qv['id']][Qw['id']] = Qx;
    try {
      Qv[PN('0x16')]++, Qw[PN('0x16')]++;
    } catch (Qy) {
      console[PN('0x15')](PN('0x1c') + Qy);
    }
  }
};
var Qz = ['prototype', 'ShapeNode', 'setPath', 'path', 'stroke', 'fill', 'mousePickupPath', 'paintText'];
!function (QA) {
  !function (QB) {
    for (; --QB;) QA['push'](QA['shift']());
  }(0x1e3);
}(Qz);
var QC = function (QD, QE) {
  return Qz[QD = +QD];
};

class QF extends so {
  constructor(QG, QH, QI, QJ, QK) {
    super(QG, QH, QI, QJ, QK);
  }

  [QC('0x0')](QL) {
    this[QC('0x1')] = QL;
  }

  ['draw'](QM) {
    null != this[QC('0x1')] && (QM[QC('0x2')](this[QC('0x1')]), QM[QC('0x3')](this[QC('0x1')]), this[QC('0x4')](QM, this[QC('0x1')]), this[QC('0x5')](QM));
  }
}

bN(QF[QC('0x6')], {'className': {'value': QC('0x7'), 'writable': !0x1}});
var QN = ['#FFFF00', 'random', 'randomScheme', 'getScheme', '#475164', '#2d2e36', '#FA7E23', '#FF9900', '#FED71A', '#2bae85', '#12A182', '#1ba784', '#0f1423', '#4E7ca1', '#2474b5', '#2775B6', '#346c9c', '#C06f98', '#7e2065', '#681752', '#EE3f4d', '#C02c38', '#dcb375', '#c5aa99', '#ca7d61', '#8e8b86', '#ccbbaa', '#D73417', '#FDD163', '#5ae292', '#f7e853', '#166E84', '#97893f', '#f18851', '#f3ca43', '#32510E', '#24653E', '#3c968a', '#203046', '#707556', '#567f4f', '#f4642b', '#f6d82c', '#e85827', '#fb991c', '#fdbc3a', '#ffde5f', '#ffdc99', '#15838a', '#3fb9c1', '#7ed1d2', '#d2Dfb2', '#ffe99b', '#cb8a2a', '#d2865a', '#b6ca98', '#ebe0c4', 'length', 'setRGB', 'prototype', 'copy', 'number', 'string', 'setStyle', 'floor', 'test', 'exec', 'min', 'setHex', 'sqrt', '000000', 'getHex', 'toString', 'slice', 'max', 'toFixed', 'rgba(', 'rgb(', 'getHSL', '#F0F8FF', '#FAEBD7', '#7FFFD4', '#F0FFFF', '#F5F5DC', '#FFE4C4', '#000000', '#FFEBCD', '#0000FF', '#8A2BE2', '#A52A2A', '#DEB887', '#5F9EA0', '#7FFF00', '#FF7F50', '#FFF8DC', '#DC143C', '#00FFFF', '#00008B', '#A9A9A9', '#006400', '#BDB76B', '#8B008B', '#FF8C00', '#9932CC', '#8B0000', '#8FBC8F', '#483D8B', '#2F4F4F', '#00CED1', '#9400D3', '#FF1493', '#696969', '#B22222', '#228B22', '#FF00FF', '#DCDCDC', '#F8F8FF', '#FFD700', '#808080', '#008000', '#ADFF2F', '#FF69B4', '#CD5C5C', '#4B0082', '#FFFFF0', '#F0E68C', '#E6E6FA', '#FFF0F5', '#7CFC00', '#FFFACD', '#ADD8E6', '#F08080', '#FAFAD2', '#90EE90', '#D3D3D3', '#FFB6C1', '#FFA07A', '#87CEFA', '#778899', '#FFFFE0', '#32CD32', '#FAF0E6', '#800000', '#0000CD', '#9370DB', '#00FA9A', '#48D1CC', '#191970', '#F5FFFA', '#FFE4E1', '#FFDEAD', '#000080', '#FDF5E6', '#808000', '#6B8E23', '#FF4500', '#EEE8AA', '#98FB98', '#AFEEEE', '#DB7093', '#FFEFD5', '#FFDAB9', '#CD853F', '#FFC0CB', '#DDA0DD', '#B0E0E6', '#800080', '#FF0000', '#BC8F8F', '#4169E1', '#8B4513', '#FA8072', '#FFF5EE', '#A0522D', '#87CEEB', '#6A5ACD', '#708090', '#FFFAFA', '#00FF7F', '#4682B4', '#D2B48C', '#008080', '#D8BFD8', '#FF6347', '#40E0D0', '#EE82EE', '#F5DEB3', '#F5F5F5'];
!function (QO) {
  !function (QP) {
    for (; --QP;) QO['push'](QO['shift']());
  }(0xc1);
}(QN);
var QQ = function (QT, QU) {
    return QN[QT = +QT];
  },
  QR = [QQ('0x0'), QQ('0x1'), QQ('0x2'), QQ('0x3'), QQ('0x4'), QQ('0x5'), '#248067', QQ('0x6'), '#5e5314', QQ('0x7'), QQ('0x8'), QQ('0x9'), QQ('0xa'), QQ('0xb'), QQ('0xc'), '#61649f', QQ('0xd'), QQ('0xe'), QQ('0xf'), QQ('0x10'), QQ('0x11')],
  QS = [QR, [QQ('0x12'), QQ('0x13'), QQ('0x14'), QQ('0x15'), QQ('0x16')], [QQ('0x17'), QQ('0x18'), '#3586E3'], ['#35aeff', QQ('0x19'), '#ff63b3', '#f4a146', QQ('0x1a')], [QQ('0x1b'), QQ('0x1c'), '#d84870', QQ('0x1d'), QQ('0x1e')], [QQ('0x1f'), QQ('0x20'), QQ('0x21'), '#d7d351', '#f0ac68'], [QQ('0x22'), QQ('0x23'), QQ('0x24'), QQ('0x25'), QQ('0x26')], [QQ('0x27'), QQ('0x28'), QQ('0x29'), QQ('0x2a'), QQ('0x2b')], [QQ('0x2c'), QQ('0x2d'), QQ('0x2e'), QQ('0x2f'), QQ('0x30')], ['#6a4307', QQ('0x31'), QQ('0x32'), QQ('0x33'), QQ('0x34')]];

function QV(QW) {
  return 0x3 === arguments[QQ('0x35')] ? this[QQ('0x36')](QW, arguments[0x1], arguments[0x2]) : this['set'](QW);
}

QV[QQ('0x37')] = {
  'constructor': QV, 'r': 0x1, 'g': 0x1, 'b': 0x1, 'o': 0x1, 'set': function (QX) {
    return QX instanceof QV ? this[QQ('0x38')](QX) : typeof QX === QQ('0x39') ? this['setHex'](QX) : typeof QX === QQ('0x3a') && this[QQ('0x3b')](QX), this;
  }, 'setHex': function (QY) {
    return QY = Math[QQ('0x3c')](QY), this['r'] = (QY >> 0x10 & 0xff) / 0xff, this['g'] = (QY >> 0x8 & 0xff) / 0xff, this['b'] = (0xff & QY) / 0xff, this;
  }, 'setRGB': function (QZ, R0, R1) {
    return this['r'] = QZ, this['g'] = R0, this['b'] = R1, this;
  }, 'setHSL': function (R2, R3, R4) {
    var R5;
    return 0x0 === R3 ? this['r'] = this['g'] = this['b'] = R4 : (this['r'] = (R5 = function (R2, R3, R4) {
      return R4 < 0x0 && (R4 += 0x1), 0x1 < R4 && --R4, R4 < 0x1 / 0x6 ? R2 + 0x6 * (R3 - R2) * R4 : R4 < 0.5 ? R3 : R4 < 0x2 / 0x3 ? R2 + 0x6 * (R3 - R2) * (0x2 / 0x3 - R4) : R2;
    })(R3 = 0x2 * R4 - (R4 = R4 <= 0.5 ? R4 * (0x1 + R3) : R4 + R3 - R4 * R3), R4, R2 + 0x1 / 0x3), this['g'] = R5(R3, R4, R2), this['b'] = R5(R3, R4, R2 - 0x1 / 0x3)), this;
  }, 'setStyle': function (R9) {
    if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i[QQ('0x3d')](R9)) {
      var Ra = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i[QQ('0x3e')](R9);
      return this['r'] = Math[QQ('0x3f')](0xff, parseInt(Ra[0x1], 0xa)) / 0xff, this['g'] = Math[QQ('0x3f')](0xff, parseInt(Ra[0x2], 0xa)) / 0xff, this['b'] = Math[QQ('0x3f')](0xff, parseInt(Ra[0x3], 0xa)) / 0xff, this;
    }
    if (/^rgba\((\d+),?(\d+),?(\d+),?(\S+)\)$/i['test'](R9)) {
      var Rb = /^rgba\((\d+),?(\d+),?(\d+),?(\S+)\)$/i['exec'](R9);
      return this['r'] = Math[QQ('0x3f')](0xff, parseInt(Rb[0x1], 0xa)) / 0xff, this['g'] = Math[QQ('0x3f')](0xff, parseInt(Rb[0x2], 0xa)) / 0xff, this['b'] = Math[QQ('0x3f')](0xff, parseInt(Rb[0x3], 0xa)) / 0xff, this['o'] = parseInt(Rb[0x4]), this;
    }
    if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i[QQ('0x3d')](R9)) {
      Rb = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i[QQ('0x3e')](R9);
      return this['r'] = Math[QQ('0x3f')](0x64, parseInt(Rb[0x1], 0xa)) / 0x64, this['g'] = Math['min'](0x64, parseInt(Rb[0x2], 0xa)) / 0x64, this['b'] = Math[QQ('0x3f')](0x64, parseInt(Rb[0x3], 0xa)) / 0x64, this;
    }
    if (/^\#([0-9a-f]{6})$/i['test'](R9)) {
      var Rc = /^\#([0-9a-f]{6})$/i[QQ('0x3e')](R9);
      return this[QQ('0x40')](parseInt(Rc[0x1], 0x10)), this;
    }
    if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i[QQ('0x3d')](R9)) {
      Rc = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i[QQ('0x3e')](R9);
      return this[QQ('0x40')](parseInt(Rc[0x1] + Rc[0x1] + Rc[0x2] + Rc[0x2] + Rc[0x3] + Rc[0x3], 0x10)), this;
    }
    if (/^(\w+)$/i['test'](R9)) return this[QQ('0x40')](RI[R9]), this;
  }, 'copy': function (Rd) {
    return this['r'] = Rd['r'], this['g'] = Rd['g'], this['b'] = Rd['b'], this;
  }, 'copyGammaToLinear': function (Re) {
    return this['r'] = Re['r'] * Re['r'], this['g'] = Re['g'] * Re['g'], this['b'] = Re['b'] * Re['b'], this;
  }, 'copyLinearToGamma': function (Rf) {
    return this['r'] = Math[QQ('0x41')](Rf['r']), this['g'] = Math[QQ('0x41')](Rf['g']), this['b'] = Math[QQ('0x41')](Rf['b']), this;
  }, 'convertGammaToLinear': function () {
    var Rg = this['r'], Rh = this['g'], Ri = this['b'];
    return this['r'] = Rg * Rg, this['g'] = Rh * Rh, this['b'] = Ri * Ri, this;
  }, 'convertLinearToGamma': function () {
    return this['r'] = Math[QQ('0x41')](this['r']), this['g'] = Math[QQ('0x41')](this['g']), this['b'] = Math[QQ('0x41')](this['b']), this;
  }, 'getHex': function () {
    return 0xff * this['r'] << 0x10 ^ 0xff * this['g'] << 0x8 ^ 0xff * this['b'] << 0x0;
  }, 'getHexString': function () {
    return (QQ('0x42') + this[QQ('0x43')]()[QQ('0x44')](0x10))[QQ('0x45')](-0x6);
  }, 'getHSL': function (Rj) {
    let Rk = Rj || {'h': 0x0, 's': 0x0, 'l': 0x0};
    var Rl = this['r'], Rm = this['g'], Rn = this['b'], Ro = Math[QQ('0x46')](Rl, Rm, Rn),
      Rp = Math[QQ('0x3f')](Rl, Rm, Rn);
    let Rq, Rr;
    Rj = (Rp + Ro) / 0x2;
    if (Rp === Ro) Rq = 0x0, Rr = 0x0; else {
      var Rs = Ro - Rp;
      switch (Rr = Rj <= 0.5 ? Rs / (Ro + Rp) : Rs / (0x2 - Ro - Rp), Ro) {
        case Rl:
          Rq = (Rm - Rn) / Rs + (Rm < Rn ? 0x6 : 0x0);
          break;
        case Rm:
          Rq = (Rn - Rl) / Rs + 0x2;
          break;
        case Rn:
          Rq = (Rl - Rm) / Rs + 0x4;
      }
      Rq /= 0x6;
    }
    return Rk['h'] = Rq, Rk['s'] = Rr, Rk['l'] = Rj, Rk;
  }, 'getStyle': function (Rt) {
    return null != Rt ? (Rt = Rt[QQ('0x47')](0x1), QQ('0x48') + (0xff * this['r'] | 0x0) + ',' + (0xff * this['g'] | 0x0) + ',' + (0xff * this['b'] | 0x0) + ',' + Rt + ')') : QQ('0x49') + (0xff * this['r'] | 0x0) + ',' + (0xff * this['g'] | 0x0) + ',' + (0xff * this['b'] | 0x0) + ')';
  }, 'offsetHSL': function (Ru, Rv, Rw) {
    let Rx = this[QQ('0x4a')]();
    return Rx['h'] += Ru, Rx['s'] += Rv, Rx['l'] += Rw, this['setHSL'](Rx['h'], Rx['s'], Rx['l']), this;
  }, 'add': function (Ry) {
    return this['r'] += Ry['r'], this['g'] += Ry['g'], this['b'] += Ry['b'], this;
  }, 'addColors': function (Rz, RA) {
    return this['r'] = Rz['r'] + RA['r'], this['g'] = Rz['g'] + RA['g'], this['b'] = Rz['b'] + RA['b'], this;
  }, 'addScalar': function (RB) {
    return this['r'] += RB, this['g'] += RB, this['b'] += RB, this;
  }, 'multiply': function (RC) {
    return this['r'] *= RC['r'], this['g'] *= RC['g'], this['b'] *= RC['b'], this;
  }, 'multiplyScalar': function (RD) {
    return this['r'] *= RD, this['g'] *= RD, this['b'] *= RD, this;
  }, 'lerp': function (RE, RF) {
    return this['r'] += (RE['r'] - this['r']) * RF, this['g'] += (RE['g'] - this['g']) * RF, this['b'] += (RE['b'] - this['b']) * RF, this;
  }, 'equals': function (RG) {
    return RG['r'] === this['r'] && RG['g'] === this['g'] && RG['b'] === this['b'];
  }, 'fromArray': function (RH) {
    return this['r'] = RH[0x0], this['g'] = RH[0x1], this['b'] = RH[0x2], this;
  }, 'toArray': function () {
    return [this['r'], this['g'], this['b']];
  }, 'clone': function () {
    return new QV()['setRGB'](this['r'], this['g'], this['b']);
  }
};
const RI = {
  'aliceblue': QQ('0x4b'),
  'antiquewhite': QQ('0x4c'),
  'aqua': '#00FFFF',
  'aquamarine': QQ('0x4d'),
  'azure': QQ('0x4e'),
  'beige': QQ('0x4f'),
  'bisque': QQ('0x50'),
  'black': QQ('0x51'),
  'blanchedalmond': QQ('0x52'),
  'blue': QQ('0x53'),
  'blueviolet': QQ('0x54'),
  'brown': QQ('0x55'),
  'burlywood': QQ('0x56'),
  'cadetblue': QQ('0x57'),
  'chartreuse': QQ('0x58'),
  'chocolate': '#D2691E',
  'coral': QQ('0x59'),
  'cornflowerblue': '#6495ED',
  'cornsilk': QQ('0x5a'),
  'crimson': QQ('0x5b'),
  'cyan': QQ('0x5c'),
  'darkblue': QQ('0x5d'),
  'darkcyan': '#008B8B',
  'darkgoldenrod': '#B8860B',
  'darkgray': QQ('0x5e'),
  'darkgreen': QQ('0x5f'),
  'darkgrey': QQ('0x5e'),
  'darkkhaki': QQ('0x60'),
  'darkmagenta': QQ('0x61'),
  'darkolivegreen': '#556B2F',
  'darkorange': QQ('0x62'),
  'darkorchid': QQ('0x63'),
  'darkred': QQ('0x64'),
  'darksalmon': '#E9967A',
  'darkseagreen': QQ('0x65'),
  'darkslateblue': QQ('0x66'),
  'darkslategray': QQ('0x67'),
  'darkslategrey': QQ('0x67'),
  'darkturquoise': QQ('0x68'),
  'darkviolet': QQ('0x69'),
  'deeppink': QQ('0x6a'),
  'deepskyblue': '#00BFFF',
  'dimgray': '#696969',
  'dimgrey': QQ('0x6b'),
  'dodgerblue': '#1E90FF',
  'firebrick': QQ('0x6c'),
  'floralwhite': '#FFFAF0',
  'forestgreen': QQ('0x6d'),
  'fuchsia': QQ('0x6e'),
  'gainsboro': QQ('0x6f'),
  'ghostwhite': QQ('0x70'),
  'gold': QQ('0x71'),
  'goldenrod': '#DAA520',
  'gray': QQ('0x72'),
  'green': QQ('0x73'),
  'greenyellow': QQ('0x74'),
  'grey': '#808080',
  'honeydew': '#F0FFF0',
  'hotpink': QQ('0x75'),
  'indianred': QQ('0x76'),
  'indigo': QQ('0x77'),
  'ivory': QQ('0x78'),
  'khaki': QQ('0x79'),
  'lavender': QQ('0x7a'),
  'lavenderblush': QQ('0x7b'),
  'lawngreen': QQ('0x7c'),
  'lemonchiffon': QQ('0x7d'),
  'lightblue': QQ('0x7e'),
  'lightcoral': QQ('0x7f'),
  'lightcyan': '#E0FFFF',
  'lightgoldenrodyellow': QQ('0x80'),
  'lightgray': '#D3D3D3',
  'lightgreen': QQ('0x81'),
  'lightgrey': QQ('0x82'),
  'lightpink': QQ('0x83'),
  'lightsalmon': QQ('0x84'),
  'lightseagreen': '#20B2AA',
  'lightskyblue': QQ('0x85'),
  'lightslategray': QQ('0x86'),
  'lightslategrey': QQ('0x86'),
  'lightsteelblue': '#B0C4DE',
  'lightyellow': QQ('0x87'),
  'lime': '#00FF00',
  'limegreen': QQ('0x88'),
  'linen': QQ('0x89'),
  'magenta': QQ('0x6e'),
  'maroon': QQ('0x8a'),
  'mediumaquamarine': '#66CDAA',
  'mediumblue': QQ('0x8b'),
  'mediumorchid': '#BA55D3',
  'mediumpurple': QQ('0x8c'),
  'mediumseagreen': '#3CB371',
  'mediumslateblue': '#7B68EE',
  'mediumspringgreen': QQ('0x8d'),
  'mediumturquoise': QQ('0x8e'),
  'mediumvioletred': '#C71585',
  'midnightblue': QQ('0x8f'),
  'mintcream': QQ('0x90'),
  'mistyrose': QQ('0x91'),
  'moccasin': '#FFE4B5',
  'navajowhite': QQ('0x92'),
  'navy': QQ('0x93'),
  'oldlace': QQ('0x94'),
  'olive': QQ('0x95'),
  'olivedrab': QQ('0x96'),
  'orange': '#FFA500',
  'orangered': QQ('0x97'),
  'orchid': '#DA70D6',
  'palegoldenrod': QQ('0x98'),
  'palegreen': QQ('0x99'),
  'paleturquoise': QQ('0x9a'),
  'palevioletred': QQ('0x9b'),
  'papayawhip': QQ('0x9c'),
  'peachpuff': QQ('0x9d'),
  'peru': QQ('0x9e'),
  'pink': QQ('0x9f'),
  'plum': QQ('0xa0'),
  'powderblue': QQ('0xa1'),
  'purple': QQ('0xa2'),
  'red': QQ('0xa3'),
  'rosybrown': QQ('0xa4'),
  'royalblue': QQ('0xa5'),
  'saddlebrown': QQ('0xa6'),
  'salmon': QQ('0xa7'),
  'sandybrown': '#F4A460',
  'seagreen': '#2E8B57',
  'seashell': QQ('0xa8'),
  'sienna': QQ('0xa9'),
  'silver': '#C0C0C0',
  'skyblue': QQ('0xaa'),
  'slateblue': QQ('0xab'),
  'slategray': QQ('0xac'),
  'slategrey': '#708090',
  'snow': QQ('0xad'),
  'springgreen': QQ('0xae'),
  'steelblue': QQ('0xaf'),
  'tan': QQ('0xb0'),
  'teal': QQ('0xb1'),
  'thistle': QQ('0xb2'),
  'tomato': QQ('0xb3'),
  'turquoise': QQ('0xb4'),
  'violet': QQ('0xb5'),
  'wheat': QQ('0xb6'),
  'white': '#FFFFFF',
  'whitesmoke': QQ('0xb7'),
  'yellow': QQ('0xb8'),
  'yellowgreen': '#9ACD32'
};

function RJ(RK) {
  return null != RK ? QV[QQ('0xb9')](QV['getScheme'](RK)) : QV[QQ('0xb9')]();
}

QV[QQ('0xb9')] = function (RL) {
  return (RL = null == RL ? QR : RL)[Math[QQ('0xb9')]() * RL[QQ('0x35')] | 0x0];
}, QV[QQ('0xba')] = function () {
  var RM = Math[QQ('0xb9')]() * QS[QQ('0x35')] | 0x0;
  return QS[RM];
}, QV[QQ('0xbb')] = function (RN) {
  return QS[RN];
};
var RO = ['length', 'MAX_SAFE_INTEGER', 'MIN_SAFE_INTEGER', 'isLink', 'width', 'resizeTo', 'setXYwithChildFixed', 'doLayout', 'getChildren'];
!function (RP) {
  !function (RQ) {
    for (; --RQ;) RP['push'](RP['shift']());
  }(0x155);
}(RO);
var RR = function (RS, RT) {
  return RO[RS = +RS];
};

class RU {
  [RR('0x0')](RV) {
    if (0x0 != RV[RR('0x1')]()[RR('0x2')]) {
      let RW = Number[RR('0x3')], RX = Number[RR('0x4')], RY = Number[RR('0x3')], RZ = Number[RR('0x4')];
      var S0 = RV[RR('0x1')]();
      for (let RV = 0x0; RV < S0[RR('0x2')]; RV++) {
        var S2 = S0[RV];
        S2[RR('0x5')] || (S2['x'] < RW && (RW = S2['x']), S2['x'] + S2[RR('0x6')] > RX && (RX = S2['x'] + S2[RR('0x6')]), S2['y'] < RY && (RY = S2['y']), S2['y'] + S2['height'] > RZ && (RZ = S2['y'] + S2['height']));
      }
      RV[RR('0x7')](RX - RW, RZ - RY), LD[RR('0x8')](RV, RW, RY);
    }
  }
}

var S3 = ['turnLeft', 'turnRight', 'size', 'sizeBy', 'sizeWith', 'getDistance', 'sqrt', 'init', '_position', '_actions', 'marks', 'addAction', 'push', 'mark', 'mark\x27s\x20name\x20is\x20required.', 'faceToMark', 'getMark', 'moveToMark', 'moveTo', 'forwardToMark', 'forwardTo', 'forwardToMarks', 'length', 'updateDxy', '_direction', '_stepSize', 'faceTo', 'atan2', 'forward', 'jump', 'moveToMiddle'];
!function (S4) {
  !function (S5) {
    for (; --S5;) S4['push'](S4['shift']());
  }(0x65);
}(S3);
var S6 = function (S7, S8) {
  return S3[S7 = +S7];
};

class S9 {
  constructor() {
    this[S6('0x0')]();
  }

  ['init']() {
    return this[S6('0x1')] = {'x': 0x0, 'y': 0x0}, this[S6('0x2')] = [], this[S6('0x3')] = {}, this;
  }

  [S6('0x4')](Sa, Sb) {
    Sb = {'name': Sa, 'args': Sb};
    return this[S6('0x2')][S6('0x5')](Sb), this;
  }

  [S6('0x6')](Sc) {
    if (null == Sc) throw new Error(S6('0x7'));
    return this[S6('0x3')][Sc] = {'x': this[S6('0x1')]['x'], 'y': this[S6('0x1')]['y']}, this;
  }

  ['getMark'](Sd) {
    return this[S6('0x3')][Sd];
  }

  [S6('0x8')](Se) {
    Se = this[S6('0x9')](Se);
    return this['faceTo'](Se);
  }

  [S6('0xa')](Sf) {
    Sf = this[S6('0x9')](Sf);
    return this[S6('0xb')](Sf);
  }

  [S6('0xc')](Sg) {
    Sg = this[S6('0x9')](Sg);
    return this[S6('0xd')](Sg);
  }

  [S6('0xe')](Sh) {
    for (let Si = 0x0; Si < Sh[S6('0xf')]; Si++) {
      var Sk = Sh[Si], Sk = this[S6('0x9')](Sk);
      this[S6('0xd')](Sk);
    }
    return this;
  }

  [S6('0x10')]() {
    var Sl = this['_position'], Sp = this[S6('0x11')], Sn = this[S6('0x12')], So = Sl['x'] + Sn * Math['cos'](Sp),
      Sp = Sl['y'] + Sn * Math['sin'](Sp);
    return this['dx'] = So - Sl['x'], this['dy'] = Sp - Sl['y'], this;
  }

  [S6('0x13')](Sq) {
    var Sr = Sq['x'], Sq = Sq['y'];
    return this['_direction'] = Math[S6('0x14')](Sq - this['_position']['y'], Sr - this[S6('0x1')]['x']), this[S6('0x10')](), this;
  }

  [S6('0x15')](St) {
    return this['size'](St), this[S6('0x1')]['x'] += this['dx'], this['_position']['y'] += this['dy'], this[S6('0x4')](S9['OP']['forward'], [this[S6('0x1')]['x'], this[S6('0x1')]['y']]), this;
  }

  [S6('0x16')](Su) {
    null == Su && (Su = 0x1);
    for (var Sv = 0x0; Sv < Su; Sv++) this['_position']['x'] += this['dx'], this[S6('0x1')]['y'] += this['dy'], this['addAction'](S9['OP']['jump'], [this[S6('0x1')]['x'], this[S6('0x1')]['y']]);
    return this;
  }

  ['moveTo'](Sw) {
    var Sx = Sw['x'], Sw = Sw['y'];
    return this['_position']['x'] = Sx, this[S6('0x1')]['y'] = Sw, this['addAction'](S9['OP'][S6('0xb')], [this[S6('0x1')]['x'], this[S6('0x1')]['y']]), this;
  }

  [S6('0x17')](Sz, SA) {
    SA = {'x': (Sz['x'] + SA['x']) / 0x2, 'y': (Sz['y'] + SA['y']) / 0x2};
    return this[S6('0xb')](SA);
  }

  [S6('0xd')](SB) {
    var SC = SB['x'], SB = SB['y'];
    return this['_position']['x'] = SC, this[S6('0x1')]['y'] = SB, this[S6('0x4')](S9['OP'][S6('0xd')], [this['_position']['x'], this[S6('0x1')]['y']]), this;
  }

  [S6('0x18')](SE) {
    return null == SE && (SE = Math['PI'] / 0x2), this[S6('0x11')] = this[S6('0x11')] - SE, this[S6('0x10')](), this;
  }

  [S6('0x19')](SF) {
    return null == SF && (SF = -Math['PI'] / 0x2), this[S6('0x11')] = this['_direction'] + SF, this[S6('0x10')](), this;
  }

  [S6('0x1a')](SG) {
    return this[S6('0x12')] = SG, this[S6('0x10')](), this;
  }

  [S6('0x1b')](SH) {
    return this[S6('0x12')] *= SH, this[S6('0x10')](), this;
  }

  [S6('0x1c')](SI) {
    return this[S6('0x12')] += SI, this[S6('0x10')](), this;
  }

  [S6('0x1d')](SJ) {
    var SM = SJ['x'], SJ = SJ['y'], SM = SM - this[S6('0x1')]['x'], SJ = SJ - this[S6('0x1')]['y'];
    return Math[S6('0x1e')](SM * SM + SJ * SJ);
  }

  ['getAngle'](SO) {
    var SP = SO['x'], SO = SO['y'];
    return Math[S6('0x14')](SO - this[S6('0x1')]['y'], SP - this[S6('0x1')]['x']);
  }
}

bN(S9['prototype'], {
  'position': {'value': {'x': 0x0, 'y': 0x0}},
  'direction': {'value': 0x0},
  'stepSize': {'value': 0x1, 'getset': !0x0},
  'dx': {'value': 0x1, 'getset': !0x0},
  'dy': {'value': 0x0, 'getset': !0x0},
  '_actions': {}
}), S9['OP'] = {'forward': 'forward', 'forwardTo': S6('0xd'), 'moveTo': 'moveTo', 'jump': S6('0x16')};
var SR = ['apply', 'toCmd', 'ctx', 'toPath2D', 'path.', 'toCmds', 'join', 'ctx.', 'push', 'addAction', '_position', 'text', 'fillText', 'beginPath', 'stroke', 'fill', 'save', 'restore', 'isArray', 'string', 'applyTo', '_actions', 'length', 'name', 'args'];
!function (SS) {
  !function (ST) {
    for (; --ST;) SS['push'](SS['shift']());
  }(0x92);
}(SR);
var SU = function (SW, SX) {
  return SR[SW = +SW];
}, SV = {'forward': 'lineTo', 'forwardTo': 'lineTo', 'moveTo': 'moveTo', 'jump': 'moveTo'};

class SY extends S9 {
  constructor() {
    super();
  }

  [SU('0x0')](SZ) {
    var T0 = this[SU('0x1')];
    for (let T1 = 0x0; T1 < T0[SU('0x2')]; T1++) {
      var T2 = T0[T1];
      let T3 = SV[T2[SU('0x3')]];
      var T4 = T2[SU('0x4')];
      null == T3 && (T3 = T2[SU('0x3')]);
      let T5 = SZ[T3];
      if (null == T5) throw new Error('applyTo\x27s\x20target\x20has\x20no\x20method:' + T3);
      null != T4 ? T4[SU('0x2')] ? T5[SU('0x5')](SZ, T4) : SZ[T3] = T4 : T5['apply'](SZ, []);
    }
    return this;
  }

  ['toFunction']() {
    var T6 = this[SU('0x6')]();
    return new Function(SU('0x7'), T6);
  }

  [SU('0x8')]() {
    var T7 = 'var\x20path\x20=\x20new\x20Path2D();\x0a' + (T7 = this[SU('0x6')](SU('0x9')));
    T7 += '\x0a\x20return\x20path;';
    let T8 = new Function('path', T7);
    return T8();
  }

  ['toCmd'](T9) {
    return this[SU('0xa')](T9)[SU('0xb')]('\x0a');
  }

  [SU('0xa')](Ta) {
    var Tb = this[SU('0x1')];
    let Tc = [];
    null == Ta && (Ta = SU('0xc'));
    for (let Td = 0x0; Td < Tb[SU('0x2')]; Td++) {
      var Te = Tb[Td];
      let Tf = SV[Te[SU('0x3')]];
      var Tg = Te[SU('0x4')];
      null == Tf && (Tf = Te[SU('0x3')]), null != Tg ? Tg[SU('0x2')] ? Tc[SU('0xd')](Ta + Tf + '(' + Tm(Tg) + ');') : Tc[SU('0xd')](Ta + Tf + '=' + Tm(Tg) + ';') : Tc[SU('0xd')](Ta + Tf + '();');
    }
    return Tc;
  }

  ['circle'](Th) {
    return this[SU('0xe')]('arc', [this['_position']['x'], this[SU('0xf')]['y'], Th, 0x0, 0x2 * Math['PI']]), this;
  }

  ['style'](Ti, Tj) {
    return this[SU('0xe')](Ti, Tj), this;
  }

  [SU('0x10')](Tk) {
    return this['addAction'](SU('0x11'), [Tk, this[SU('0xf')]['x'], this[SU('0xf')]['y']]), this;
  }

  ['lineTo'](Tl) {
    return this['forwardTo'](Tl), this;
  }

  [SU('0x12')]() {
    return this[SU('0xe')](SU('0x12')), this;
  }

  [SU('0x13')]() {
    return this[SU('0xe')]('stroke'), this;
  }

  [SU('0x14')]() {
    return this[SU('0xe')](SU('0x14')), this;
  }

  [SU('0x15')]() {
    return this[SU('0xe')](SU('0x15')), this;
  }

  [SU('0x16')]() {
    return this['addAction']('restore'), this;
  }
}

function Tm(Tn) {
  if (!Array[SU('0x17')](Tn) && typeof Tn == SU('0x18')) return '\x22' + Tn + '\x22';
  let To = '';
  for (let Tp = 0x0; Tp < Tn['length']; Tp++) {
    var Tq = Tn[Tp];
    To += 'string' == typeof Tq ? '\x22' + Tq + '\x22' : '' + Tq, Tp + 0x1 < Tn[SU('0x2')] && (To += ',');
  }
  return To;
}

var Tr = ['parent', 'getDistance', 'equals', 'key', 'getOpenList', 'filter', 'map', 'shift', 'sort', 'unshift', 'data', 'rows', 'length', 'cols', 'canCorss', 'push', 'findPath', 'row', 'col', 'value'];
!function (Ts) {
  !function (Tt) {
    for (; --Tt;) Ts['push'](Ts['shift']());
  }(0x97);
}(Tr);
var Tu = function (Tv, Tw) {
  return Tr[Tv = +Tv];
};

class Tx {
  constructor(Ty) {
    this[Tu('0x0')] = Ty, this[Tu('0x1')] = Ty[Tu('0x2')], this[Tu('0x3')] = Ty[0x0]['length'];
  }

  [Tu('0x4')](Tz, TA) {
    return 0x0 == this['data'][Tz][TA];
  }

  ['toCellArray'](TB) {
    const TC = [];
    for (var TD = 0x0; TD < TB[Tu('0x2')]; TD++) {
      var TE = TB[TD];
      let TF = [];
      for (let TC = 0x0; TC < TE[Tu('0x2')]; TC++) {
        var TH = new TK(TD, TC, TB[TD][TC]);
        TF['push'](TH);
      }
      TC[Tu('0x5')](TF);
    }
    return TC;
  }

  [Tu('0x6')](TI, TJ) {
    return U5(TI, TJ, this);
  }
}

class TK {
  constructor(TL, TM, TN) {
    this[Tu('0x7')] = TL, this[Tu('0x8')] = TM, this[Tu('0x9')] = TN, this[Tu('0xa')] = null, this['key'] = TL + '_' + TM;
  }

  [Tu('0xb')](TO) {
    var TP = TO[Tu('0x7')] - this[Tu('0x7')], TO = TO[Tu('0x8')] - this[Tu('0x8')];
    return Math['abs'](TP * TP + TO * TO);
  }

  [Tu('0xc')](TR) {
    return this[Tu('0xd')] == TR[Tu('0xd')];
  }

  [Tu('0xe')](TS, TT) {
    const TU = TT[Tu('0x1')], TV = TT['cols'];
    let TW = this, TX = this[Tu('0x7')], TY = this[Tu('0x8')],
      TZ = [{'row': -0x1, 'col': -0x1, 'distance': 1.4}, {'row': -0x1, 'col': 0x0, 'distance': 0x1}, {
        'row': -0x1,
        'col': 0x1,
        'distance': 1.4
      }, {'row': 0x0, 'col': -0x1, 'distance': 0x1}, {'row': 0x0, 'col': 0x1, 'distance': 0x1}, {
        'row': 0x1,
        'col': 0x0,
        'distance': 0x1
      }, {'row': 0x1, 'col': -0x1, 'distance': 1.4}, {'row': 0x1, 'col': 0x1, 'distance': 1.4}];
    return TZ = TZ[Tu('0xf')](function (TZ) {
      if (0x0 == TX && -0x1 == TZ[Tu('0x7')]) return !0x1;
      if (0x0 == TY && -0x1 == TZ[Tu('0x8')]) return !0x1;
      if (TX + 0x1 == TU && 0x1 == TZ[Tu('0x7')]) return !0x1;
      if (TY + 0x1 == TV && 0x1 == TZ[Tu('0x8')]) return !0x1;
      var U1 = TX + TZ[Tu('0x7')] + '_' + (TY + TZ[Tu('0x8')]);
      return TT[Tu('0x4')](TX + TZ[Tu('0x7')], TY + TZ[Tu('0x8')]) || U1 == TS[Tu('0xd')];
    }), TZ[Tu('0x10')](function (TZ) {
      var U3 = TT['data'][TX + TZ[Tu('0x7')]][TY + TZ[Tu('0x8')]];
      const TU = new TK(TX + TZ[Tu('0x7')], TY + TZ['col'], U3);
      return TU[Tu('0xa')] = TW, TU['G'] = TZ['distance'], TU['H'] = TU[Tu('0xb')](TS), TU['F'] = TU['G'] + TU['H'], TU;
    });
  }
}

function U5(U6, U7, U8) {
  let U9 = [], Ua = {};
  U6 = new TK(U6[0x0], U6[0x1], 0x0), U7 = new TK(U7[0x0], U7[0x1], 0x0);

  function Ub(U6) {
    return null == Ua[U6[Tu('0xd')]];
  }

  const Ud = function U6(U7, U8, Ud) {
    if (U7['equals'](U8)) {
      let U6 = function U6(U7, U8) {
        return null == U7['parent'] || (U8[Tu('0x5')](U7), U6(U7['parent'], U8)), U8;
      }(U7, []);
      return U6[Tu('0x11')](), U6;
    }
    let Uk = U7['getOpenList'](U8, Ud);
    return Ua[U7[Tu('0xd')]] = U7, Uk = Uk[Tu('0xf')](Ub), U9 = U9['concat'](Uk), U9 = U9[Tu('0x12')]((U6, U7) => U6['F'] - U7['F']), 0x0 == U9[Tu('0x2')] ? [] : U6(U9[Tu('0x11')](), U8, Ud);
  }(U6, U7, U8);
  return Ud[Tu('0x13')](U7), Ud[Tu('0x5')](U6), Ud;
}

var Un = ['jtopo_popoupmenu', 'layersContainer', 'appendChild', 'initEvent', 'hide', 'querySelectorAll', 'forEach', 'addEventListener', 'select', 'innerHTML', 'dispatchEvent', 'style', 'display', 'block', 'offsetHeight', 'height', 'offsetWidth', 'width', 'top', 'none', 'stage', 'domElement', 'setHtml', 'remove', 'html', 'createElement', 'div', 'add'];
!function (Uo) {
  !function (Up) {
    for (; --Up;) Uo['push'](Uo['shift']());
  }(0x85);
}(Un);
var Uq = function (Ur, Us) {
  return Un[Ur = +Ur];
};

class Ut extends cz {
  constructor(Uu, Uv) {
    super(), this[Uq('0x0')] = Uu, this[Uq('0x1')] = this[Uq('0x2')](Uv);
  }

  [Uq('0x3')]() {
    null != this[Uq('0x1')] && this[Uq('0x1')]['remove']();
  }

  [Uq('0x2')](Uw) {
    this[Uq('0x4')] = Uw, this['remove']();
    let Ux = document[Uq('0x5')](Uq('0x6'));
    return Ux['classList'][Uq('0x7')](Uq('0x8')), this[Uq('0x0')][Uq('0x9')][Uq('0xa')](Ux), Ux['innerHTML'] = Uw, this[Uq('0xb')](Ux), this[Uq('0x1')] = Ux, this[Uq('0xc')](), Ux;
  }

  [Uq('0xb')](Uy) {
    let Uz = this, UA = Uy[Uq('0xd')]('a');
    UA[Uq('0xe')](function (Uy) {
      Uy[Uq('0xf')]('click', function (Uy) {
        let UA = new Event(Uq('0x10'), {'cancelable': !0x0});
        UA['item'] = this[Uq('0x11')], Uz[Uq('0x12')](UA), UA['defaultPrevented'] || Uz[Uq('0xc')]();
      });
    });
  }

  ['showAt'](UE, UF) {
    this[Uq('0x1')][Uq('0x13')][Uq('0x14')] = Uq('0x15'), UF + this[Uq('0x1')][Uq('0x16')] >= this[Uq('0x0')][Uq('0x17')] && UF > this[Uq('0x0')][Uq('0x17')] / 0x2 && (UF -= this[Uq('0x1')][Uq('0x16')]), UE + this[Uq('0x1')][Uq('0x18')] >= this[Uq('0x0')][Uq('0x19')] && UE > this[Uq('0x0')][Uq('0x19')] / 0x2 && (UE -= this[Uq('0x1')][Uq('0x18')]), this[Uq('0x1')][Uq('0x13')]['left'] = UE + 'px', this[Uq('0x1')][Uq('0x13')][Uq('0x1a')] = UF + 'px';
  }

  ['hide']() {
    this[Uq('0x1')]['style']['display'] = Uq('0x1b');
  }
}

var UG = ['setHtml', 'initEvent', 'mousedown', 'hide', 'mousemove', 'mouseoverTarget', 'fadeOut', 'stopFade', 'style', 'display', 'block', 'left', 'none', 'fadeoutTimer', 'opacity', 'stage', 'domElement', 'createElement', 'div', 'classList', 'jtopo_tooltip', 'layersContainer', 'appendChild'];
!function (UH) {
  !function (UI) {
    for (; --UI;) UH['push'](UH['shift']());
  }(0x180);
}(UG);
var UJ = function (UK, UL) {
  return UG[UK = +UK];
};

class UM extends cz {
  constructor(UN) {
    super(), this[UJ('0x0')] = UN, this[UJ('0x1')] = document[UJ('0x2')](UJ('0x3')), this[UJ('0x1')][UJ('0x4')]['add'](UJ('0x5')), this[UJ('0x0')][UJ('0x6')][UJ('0x7')](this[UJ('0x1')]), this['initEvent'](), this['hide']();
  }

  [UJ('0x8')](UO) {
    return this[UJ('0x1')]['innerHTML'] = UO, this['domElement'];
  }

  [UJ('0x9')]() {
    const UP = this;
    this[UJ('0x0')]['on'](UJ('0xa'), function () {
      UP[UJ('0xb')]();
    }), this['stage']['on']('mouseup', function () {
      UP[UJ('0xb')]();
    }), this[UJ('0x0')]['on'](UJ('0xc'), function () {
      null == this[UJ('0xd')] && UP[UJ('0xe')]();
    });
  }

  ['showAt'](UQ, UR) {
    this[UJ('0xf')](), this['domElement'][UJ('0x10')][UJ('0x11')] = UJ('0x12'), this['domElement']['style'][UJ('0x13')] = UQ + 'px', this[UJ('0x1')]['style']['top'] = UR + 'px', this['domElement'][UJ('0x10')]['opacity'] = 0.9;
  }

  [UJ('0xb')]() {
    this[UJ('0xf')](), this[UJ('0x1')][UJ('0x10')][UJ('0x11')] = UJ('0x14');
  }

  [UJ('0xf')]() {
    null != this['fadeoutTimer'] && (clearInterval(this['fadeoutTimer']), this[UJ('0x15')] = null);
  }

  ['fadeOut'](US) {
    if (null == this[UJ('0x15')]) {
      let UT = this;
      null == US && (US = 0x32), this[UJ('0x15')] = setInterval(function () {
        UT[UJ('0x1')][UJ('0x10')][UJ('0x16')] -= 0.1, UT[UJ('0x1')]['style'][UJ('0x16')] <= 0.1 && UT[UJ('0xb')]();
      }, US);
    }
  }
}

var UU = ['mid2', 'fold2', 'center', 'middle', 'sign', 'dot', 'assert\x20failed\x20getMid1AndMid2', 'prototype', 'AutoFoldLink', 'concat', 'getAnchorPoints', 'getFold1', 'beginOffsetGap', 'getFold2', 'endOffsetGap', 'fold2Offset', 'getFold1Vec', 'begin', 'getFold2Vec', 'end', 'length', 'atan2', 'beginOffset', 'number', 'offsetWithAngle', 'updatePoints', 'calcAZ', 'absorb', 'abs', 'looksSame', '_preAngle', 'centerOffset', 'label', 'floor', 'origin', 'points', 'offsetAZHandle', 'getMergedPoints', 'mergePoints', 'getWithOffset', 'pointOffsets', 'setFold1Offset', 'fold1Offset', 'getK', 'setFold2Offset', 'setCenterOffset', 'resetOffset', 'fold1', 'mid1'];
!function (UV) {
  !function (UW) {
    for (; --UW;) UV['push'](UV['shift']());
  }(0x6e);
}(UU);
var UX = function (UY, UZ) {
  return UU[UY = +UY];
};

class V0 extends yU {
  constructor(V1, V2, V3, V4, V5) {
    super(V1, V2, V3, V4, V5);
  }

  [UX('0x0')](V6, V7) {
    var V8 = this[UX('0x1')], V7 = this['getFold1Vec'](V6, V7);
    let Va = {'x': V6['x'] + V7[0x0] * V8, 'y': V6['y'] + V7[0x1] * V8};
    V8 = this['fold1Offset'];
    return V8 && (Va['x'] += V8['x'], Va['y'] += V8['y']), Va;
  }

  [UX('0x2')](Vb, Vc) {
    var Vd = this[UX('0x3')], Vb = this['getFold2Vec'](Vb, Vc);
    let Vf = {'x': Vc['x'] + Vb[0x0] * Vd, 'y': Vc['y'] + Vb[0x1] * Vd};
    Vd = this[UX('0x4')];
    return Vd && (Vf['x'] += Vd['x'], Vf['y'] += Vd['y']), Vf;
  }

  [UX('0x5')](Vg, Vh) {
    let Vi = yl(this[UX('0x6')]);
    if (null == Vi) {
      let Vj = 0x0;
      Vj = Vh['x'] > Vg['x'] ? 0x1 : -0x1, Vi = [Vj, 0x0];
    }
    return Vi;
  }

  [UX('0x7')](Vk, Vl) {
    let Vm = yl(this[UX('0x8')]);
    if (null == Vm) {
      let Vn = -0x1;
      Vn = Vl['y'] > Vk['y'] ? -0x1 : 0x1, Vm = [0x0, Vn];
    }
    return Vm;
  }

  ['offsetAZHandle'](Vo) {
    var Vp = Vo[0x0], Vu = Vo[0x1], Vv = Vo[Vo[UX('0x9')] - 0x2], Vs = Vo[Vo[UX('0x9')] - 0x1],
      Vt = Math[UX('0xa')](Vu['y'] - Vp['y'], Vu['x'] - Vp['x']),
      Vu = Math[UX('0xa')](Vv['y'] - Vs['y'], Vv['x'] - Vs['x']), Vv = this[UX('0xb')] || 0x0;
    0x0 != Vv && (Vo[0x0] = i8['offsetWithAngle'](Vp, Vt, Vv));
    let Vw = this['endOffset'] || 0x0;
    0x0 != Vw && (typeof Vw == UX('0xc') && (Vw = -Vw), Vo[Vo[UX('0x9')] - 0x1] = i8[UX('0xd')](Vs, Vu, Vw));
  }

  [UX('0xe')]() {
    var Vx = this[UX('0xf')]();
    const Vy = Vx[0x0], Vz = Vx[0x1];
    var VA = this[UX('0x10')], Vx = this[UX('0x5')](Vy, Vz);
    0x0 == Vx[0x0] && Math[UX('0x11')](Vy['x'] - Vz['x']) < VA && (VC = 0.5 * (Vy['x'] + Vz['x']), Vy['x'] = VC, Vz['x'] = VC), 0x0 == Vx[0x1] && Math[UX('0x11')](Vy['y'] - Vz['y']) < VA && (VH = 0.5 * (Vy['y'] + Vz['y']), Vy['y'] = VH, Vz['y'] = VH);
    var VC = this[UX('0x0')](Vy, Vz), Vx = this['getFold2'](Vy, Vz), VA = Wc(this, Vy, Vz, VC, Vx);
    let VF = VA[0x0], VG = VA[0x1];
    var VH = i8[UX('0x12')](VF, VG, 0.5), VA = Math[UX('0x11')](i8['getAngle'](VF, VG))['toFixed'](0x6);
    0x0 == VH && (this[UX('0x13')] != VA && (this[UX('0x14')] = null), this['_preAngle'] = VA);
    VA = this[UX('0x14')];
    VA && (VF['x'] += VA['x'], VF['y'] += VA['y'], VG['x'] += VA['x'], VG['y'] += VA['y']);
    var VJ, Vx = [Vy, VC, VF, VG, Vx, Vz];
    return this[UX('0x15')] && (Vx['length'] % 0x2 == 0x0 ? (VJ = Math[UX('0x16')](Vx[UX('0x9')] / 0x2), this['label'][UX('0x17')] = [VJ - 0x1, 0.5]) : (VJ = Math['ceil'](Vx[UX('0x9')] / 0x2), this['label'][UX('0x17')] = [VJ - 0x2, 0.5])), this['beginArrow'] && (this['beginArrow'][UX('0x17')][0x0] = 0x0), this['endArrow'] && (this['endArrow']['origin'][0x0] = Vx['length'] - 0x2), this[UX('0x18')] = Vx, this[UX('0x19')](this[UX('0x18')]), Vx;
  }

  [UX('0x1a')]() {
    return i8[UX('0x1b')](this[UX('0x18')]);
  }

  [UX('0x1c')](VL, VM) {
    if (null == this[UX('0x1d')] || null == this[UX('0x1d')][VM]) return VL;
    VM = this[UX('0x1d')][VM];
    return {'x': VL['x'] + VM['x'], 'y': VL['y'] + VM['y']};
  }

  [UX('0x1e')](VN, VO) {
    let VP = this['fold1Offset'];
    null == VP && (VP = {
      'x': 0x0,
      'y': 0x0
    }, this[UX('0x1f')] = VP), rq(this[UX('0x20')](0x0, 0.5)) ? VO = VP['y'] = 0x0 : VN = VP['x'] = 0x0, VP['x'] += VN, VP['y'] += VO;
  }

  [UX('0x21')](VQ, VR) {
    let VS = this[UX('0x4')];
    null == VS && (VS = {
      'x': 0x0,
      'y': 0x0
    }, this[UX('0x4')] = VS), rq(this[UX('0x20')](0x4, 0.5)) ? VR = VS['y'] = 0x0 : VQ = VS['x'] = 0x0, VS['x'] += VQ, VS['y'] += VR;
  }

  [UX('0x22')](VT, VU) {
    let VV = this[UX('0x14')];
    null == VV && (VV = {
      'x': 0x0,
      'y': 0x0
    }, this[UX('0x14')] = VV), rq(this[UX('0x20')](0x2, 0.5)) ? VT = VV['x'] = 0x0 : VU = VV['y'] = 0x0, VV['x'] += VT, VV['y'] += VU;
  }

  [UX('0x23')]() {
    this['centerOffset'] = void 0x0, this[UX('0x1f')] = null, this[UX('0x4')] = null;
  }
}

const VW = {};

function VX(VY, VZ) {
  return Math[UX('0x11')](VZ[0x0]) > Math[UX('0x11')](VZ[0x1]) ? VY['x'] * Math['sign'](VZ[0x0]) : VY['y'] * Math[UX('0x2a')](VZ[0x1]);
}

function W0(W1, W2, W3) {
  W1 = VX(W1, W2);
  return VX(W3, W2) - W1;
}

function W4(W5, W6, W7, W8) {
  var W9 = VX(W5, W7), W8 = VX(W6, W8), W7 = 0x0 != W7[0x0];
  return W8 < W9 ? W7 ? {'x': W5['x'], 'y': W6['y']} : {'x': W6['x'], 'y': W5['y']} : W7 ? {
    'x': W6['x'],
    'y': W5['y']
  } : {'x': W5['x'], 'y': W6['y']};
}

function Wc(Wd, We, Wf, Wg, Wh) {
  var Wi = Wd['getFold1Vec'](We, Wf), Wj = Wd[UX('0x7')](We, Wf), Wk = eB[UX('0x2b')](Wi, Wj);
  if (0x1 == Wk) {
    Wd = W4(Wg, Wh, Wi, Wj);
    return [Wd, Wd];
  }
  if (-0x1 == Wk) {
    var Wl = i8[UX('0x29')](Wg, Wh);
    return [W4(Wg, Wl, Wi, Wi), W4(Wh, Wl, Wj, Wj)];
  }
  Wl = qm(We, Wg, Wf, Wh, !0x0), We = W0(We, Wi, Wl), Wf = W0(Wf, Wj, Wl);
  if (0x0 < We && 0x0 < Wf) return [Wl, Wl];
  Wi = [-Wi[0x1], Wi[0x0]], Wi = {
    'x': Wg['x'] + Wi[0x0],
    'y': Wg['y'] + Wi[0x1]
  }, Wj = [-Wj[0x1], Wj[0x0]], Wj = qm(Wg, Wi, Wh, {'x': Wh['x'] + Wj[0x0], 'y': Wh['y'] + Wj[0x1]}, !0x0);
  if (cc(Wj), null != Wj) return [Wj, Wj];
  throw new Error(UX('0x2c'));
}

VW[c6[UX('0x6')]] = function () {
  return this[UX('0x18')][0x0];
}, VW[c6[UX('0x24')]] = function () {
  return this[UX('0x18')][0x1];
}, VW[c6[UX('0x25')]] = function () {
  return this[UX('0x18')][0x2];
}, VW[c6[UX('0x26')]] = function () {
  return this[UX('0x18')][0x3];
}, VW[c6[UX('0x27')]] = function () {
  return this['points'][0x4];
}, VW[c6['end']] = function () {
  return this[UX('0x18')][0x5];
}, VW[c6[UX('0x28')]] = function () {
  return i8[UX('0x29')](this[UX('0x18')][0x2], this[UX('0x18')][0x3]);
}, bN(V0[UX('0x2d')], {
  'className': {'value': UX('0x2e'), 'writable': !0x1},
  'beginOffsetGap': {'value': 0xf},
  'endOffsetGap': {'value': 0xf},
  'fold1Offset': {},
  'fold2Offset': {},
  'centerOffset': {},
  'DefaultPositions': {'value': VW},
  'absorb': {'value': 0x3, 'enumerable': !0x1},
  'serializers': {'value': yU['prototype']['serializers'][UX('0x2f')]([UX('0x1'), UX('0x3'), UX('0x1f'), 'fold2Offset', UX('0x14')])}
}), V0[UX('0x2d')][UX('0x30')] = function () {
  var Wm = this['getMergedPoints']()[UX('0x9')];
  return Wm < 0x4 ? [UX('0x6'), UX('0x8')] : 0x4 == Wm || 0x5 == Wm ? [UX('0x6'), UX('0x8'), UX('0x24'), UX('0x27')] : [UX('0x6'), UX('0x8'), UX('0x24'), 'fold2', 'center'];
};
var Wn = ['createElement', 'div', 'classList', 'add', 'layersContainer', 'appendChild', 'style', 'display', 'none', 'block', 'setConfig', 'items', 'item', 'innerHTML', 'setAttribute', 'ondragstart', 'stage', 'domElement', 'initDom'];
!function (Wo) {
  !function (Wp) {
    for (; --Wp;) Wo['push'](Wo['shift']());
  }(0x12e);
}(Wn);
var Wq = function (Wr, Ws) {
  return Wn[Wr = +Wr];
};

class Wt extends cz {
  constructor(Wu) {
    super(), this[Wq('0x0')] = Wu, this[Wq('0x1')], this[Wq('0x2')](), this['hide'](), this['onDragstartHandler'];
  }

  [Wq('0x2')]() {
    let Wv = document[Wq('0x3')](Wq('0x4'));
    return Wv[Wq('0x5')][Wq('0x6')]('jtopo_iconsPanel'), this['stage'][Wq('0x7')][Wq('0x8')](Wv), this[Wq('0x1')] = Wv, this;
  }

  ['hide']() {
    return this[Wq('0x1')][Wq('0x9')][Wq('0xa')] = Wq('0xb'), this;
  }

  ['show']() {
    return this[Wq('0x1')][Wq('0x9')][Wq('0xa')] = Wq('0xc'), this;
  }

  [Wq('0xd')](Ww) {
    let Wx = this;
    return Ww[Wq('0xe')]['forEach'](function (Wy) {
      let Ww = document[Wq('0x3')](Wq('0x4'));
      Ww['classList'][Wq('0x6')](Wq('0xf')), Ww[Wq('0x10')] = Wy['iconHtml'], Ww[Wq('0x11')]('draggable', !0x0), Ww[Wq('0x12')] = function (Ww) {
        Ww['config'] = Wy, Wx['dispatchEvent'](Ww);
      }, Wx[Wq('0x1')]['appendChild'](Ww);
    }), this;
  }
}

var WB = ['name', '_#label', 'label', '_#beginArrow', 'beginArrow', '_#endArrow', 'endArrow', 'inLinks', 'outLinks', 'style', 'editable', 'draggable', 'userData', 'filter', 'className', 'setBegin', 'begin', 'setEnd', 'end', 'target', 'removeAllChild', 'addChilds', 'parent', 'replaceChild', 'updatezIndex', 'updateChildrenDeep', 'updatePoints', 'getSegmentPoints', 'length', 'children', 'forEach', 'origin'];
!function (WC) {
  !function (WD) {
    for (; --WD;) WC['push'](WC['shift']());
  }(0x1ca);
}(WB);
var WE = function (WF, WG) {
  return WB[WF = +WF];
};

function WH(WI, WJ) {
  const WK = ['id', WE('0x0'), 'name', 'x', 'y', 'frozen', WE('0x1'), WE('0x2'), WE('0x3'), 'textOffsetX', 'textOffsetY'];
  WK[WE('0x4')](WK => WK != WE('0x5'))['forEach'](WK => {
    WI[WK] = WJ[WK];
  }), WI[WE('0x6')](WJ[WE('0x7')]['target'], WJ['begin']), WI[WE('0x8')](WJ[WE('0x9')][WE('0xa')], WJ[WE('0x9')]), WI[WE('0xb')](), WI[WE('0xc')](WJ['children']);
  const WN = WJ[WE('0xd')];
  WN && (WN[WE('0xe')](WJ, WI), WN[WE('0xf')](), WN[WE('0x10')](!0x0)), WI[WE('0x11')]();
  let WO = WI[WE('0x12')]()[WE('0x13')];
  WI[WE('0x14')][WE('0x15')](WK => {
    WK[WE('0x16')][0x0] + 0x1 >= WO && (WK[WE('0x16')][0x0] = 0x0), WK[WE('0x17')] == WE('0x18') ? WI[WE('0x19')] = WK : WK['name'] == WE('0x1a') ? (WI[WE('0x1b')] = WK)[WE('0x0')] = WI[WE('0x0')] : WK[WE('0x17')] == WE('0x1c') && ((WI[WE('0x1d')] = WK)[WE('0x0')] = WI[WE('0x0')]);
  }), WJ[WE('0x1e')] && WJ[WE('0x1e')]['forEach'](WK => {
    let WI = WK[WE('0x9')];
    WI[WE('0xa')] = WK;
  }), WJ['outLinks'] && WJ[WE('0x1f')][WE('0x15')](WK => {
    let WI = WK['begin'];
    WI['target'] = WK;
  });
}

var WU = ['closePath', 'rectangle', 'rect', 'prototype', 'ArrowNode', 'default', 'drawShape', 'arrowShape', 'moveTo', 'lineTo', 'width', 'height', 'triangle'];
!function (WV) {
  !function (WW) {
    for (; --WW;) WV['push'](WV['shift']());
  }(0xa3);
}(WU);
var WX = function (WY, WZ) {
  return WU[WY = +WY];
};

class X0 extends so {
  constructor(X1, X2, X3, X4, X5) {
    super(X1, X2, X3, X4, X5), this['css']({'border': '1px\x20solid\x20black'});
  }

  [WX('0x0')](X6, X7, X8, X9, Xa) {
    'default' == this[WX('0x1')] ? (X6[WX('0x2')](0x0, 0x0), X6[WX('0x3')](this[WX('0x4')] / 0x2, this[WX('0x5')] / 0x2), X6[WX('0x3')](0x0, this[WX('0x5')])) : this[WX('0x1')] == WX('0x6') ? (X6[WX('0x2')](0x0, 0x0), X6['lineTo'](this[WX('0x4')] / 0x2, this[WX('0x5')] / 0x2), X6[WX('0x3')](0x0, this[WX('0x5')]), X6[WX('0x3')](0x0, 0x0), X6[WX('0x7')]()) : this[WX('0x1')] == WX('0x8') && X6[WX('0x9')](0.5 * -this['width'], 0x0, this['width'], this[WX('0x5')]);
  }
}

bN(X0[WX('0xa')], {'className': {'value': WX('0xb')}, 'arrowShape': {'value': WX('0xc')}});
var Xb = ['锁定子元素', 'draggable', '可拖拽', 'editable', '可被编辑', 'connectable', '可连线', '边框/线宽度', 'addColor', '边框/线颜色', 'globalAlpha', '整体透明度', 'open', '节点属性', '填充颜色', '图片路径', 'height', '旋转度数', 'borderRadius', '圆角大小', 'edges', '边的条数', 'direction', '圆弧方向', '结束箭头大小', 'beginOffset', '开始偏移', '结束偏移', 'lineCap', '末端样式', '字体名称', '字体重量', 'color', 'textPosition', '文本位置', 'textAlign', '文本对齐', 'textBaseline', '基线对齐', 'textOffsetX', '水平偏移量', 'textOffsetY', '垂直偏移量', 'domElement', 'remove', 'layersContainer', 'appendChild', '-15px', '0px', 'close', 'display', 'none', 'block', 'editor', 'gui', 'object', 'setCurrentObject', 'stage', 'removeAll', 'add', 'isLink', 'linkCtrlBox', 'attachTo', 'isNode', 'nodeCtrlBox', 'update', 'showProperty', 'basic', 'parentId', 'visible', 'beginArrowSize', 'beginArrow', 'width', 'endArrow', 'endArrowSize', 'style', '#FFFFFF', 'center', '#000000', 'bold', 'arial', 'butt', 'keys', 'forEach', 'rotation', 'Color', 'toLowerCase', 'init', 'borderWidth', 'normal\x2010px\x20arial', 'split', 'fontWeight', 'fontSize', 'replace', 'fontFamily', 'setFolderValues', 'getFolder', 'show', '连线属性', 'hide', 'newFolder', 'addFolder', 'folders', 'getCtrollerValue', 'getValue', '__controllers', 'find', 'property', '__folders', 'setValue', '左上角', '右上角', 'left', 'right', 'top', 'middle', 'bottom', 'normal', 'italic', 'Link', 'AutoFoldLink', 'ArcLink', 'CurveLink', 'BezierLink', '1,0', '2,2', '3,3', '7,3', '3,7', '10,1', '1,10', 'Arial', 'Verdana', 'round', 'square', '绘制重叠部分', 'zIndex', 'updatezIndex', 'isSimpleLink', 'setBeginArrow', 'resizeTo', 'setEndArrow', 'className', 'imageSrc', 'backgroundColor', 'px\x20', 'font', 'lineDash', 'string', 'indexOf', 'label', '基础属性', 'onFinishChange', 'name', 'text', 'onChange', 'frozen'];
!function (Xc) {
  !function (Xd) {
    for (; --Xd;) Xc['push'](Xc['shift']());
  }(0x170);
}(Xb);
var Xe = function (Xf, Xg) {
  return Xb[Xf = +Xf];
};

class Xh {
  constructor(Xi) {
    this[Xe('0x0')] = Xi, this[Xe('0x1')] = new dat['GUI'](), this[Xe('0x2')], this['folders'] = {};
  }

  [Xe('0x3')](Xj) {
    const Xk = this['editor'], Xl = this[Xe('0x0')][Xe('0x4')];
    Xl['pickedObject'] = Xj, Xl['selectedGroup'][Xe('0x5')]()[Xe('0x6')](Xj), Xj[Xe('0x7')] ? Xk[Xe('0x8')][Xe('0x9')](Xj) : Xj[Xe('0xa')] && Xk[Xe('0xb')]['attachTo'](Xj), Xk[Xe('0xc')](), this['showProperty'](Xj);
  }

  [Xe('0xd')](Xm) {
    if (null != Xm) {
      this[Xe('0xe')] = {
        'id': Xm['id'],
        'name': '',
        'parentId': Xm[Xe('0xf')],
        'x': 0x1,
        'y': 0x1,
        'imageSrc': '',
        'width': 0x1,
        'height': 0x1,
        'text': '',
        'zIndex': 0x1,
        'beginArrowSize': 0x0,
        'endArrowSize': 0x0,
        'beginOffset': 0x0,
        'endOffset': 0x0,
        'edges': 0x3,
        'rotation': 0x0,
        'className': 'AutoFoldLink',
        'direction': 0x1,
        'frozen': !0x1,
        'textOffsetX': 0x0,
        'textOffsetY': 0x0,
        'draggable': !0x0,
        'editable': !0x0,
        'connectable': !0x0
      }, Xm[Xe('0x7')] && !Xm['isSimpleLink'] && (Xm['beginArrow'] && Xm['beginArrow'][Xe('0x10')] && (this['basic'][Xe('0x11')] = Xm[Xe('0x12')][Xe('0x13')]), Xm[Xe('0x14')] && Xm[Xe('0x14')][Xe('0x10')] && (this[Xe('0xe')][Xe('0x15')] = Xm['endArrow'][Xe('0x13')])), this[Xe('0x16')] = {
        'lineDash': null,
        'backgroundColor': Xe('0x17'),
        'textPosition': c6[Xe('0x18')],
        'textAlign': '',
        'borderRadius': 0x0,
        'textBaseline': '',
        'borderColor': Xe('0x17'),
        'color': Xe('0x19'),
        'borderWidth': 0x1,
        'fontWeight': Xe('0x1a'),
        'fontSize': '12',
        'fontFamily': Xe('0x1b'),
        'lineCap': Xe('0x1c'),
        'globalAlpha': 0x1
      };
      const Xn = this[Xe('0xe')], Xo = this['style'];
      Object[Xe('0x1d')](Xn)[Xe('0x1e')](function (Xp) {
        if (null != Xm[Xp]) {
          let Xq = Xm[Xp];
          Xp == Xe('0x1f') && (Xq *= 0xb4 / Math['PI']), Xn[Xp] = Xq;
        }
      }), Object[Xe('0x1d')](Xo)[Xe('0x1e')](function (Xr) {
        let Xs = Xm[Xe('0x16')][Xr];
        var Xn;
        null != Xm[Xe('0x16')][Xr] && (Xo[Xr] = Xs), -0x1 != Xr['indexOf'](Xe('0x20')) && Xs && Xs[Xe('0x21')] && ((Xn = RI[Xs[Xe('0x21')]()]) && (Xo[Xr] = Xn));
      }), null == this[Xe('0x2')] && (this[Xe('0x2')] = Xm, this[Xe('0x22')]());
      let Xu = (this['object'] = Xm)[Xe('0x16')][Xe('0x23')];
      null == Xu && (Xu = 0x1), Xo[Xe('0x23')] = Xu;
      let Xv = Xm[Xe('0x16')]['font'];
      null == Xv && (Xv = Xe('0x24'));
      const Xw = Xv[Xe('0x25')]('\x20');
      Xo[Xe('0x26')] = Xw[0x0], Xo[Xe('0x27')] = Xw[0x1][Xe('0x28')]('px', ''), Xo[Xe('0x29')] = Xw[0x2], this[Xe('0x2a')](Xn, Xo), Xm[Xe('0xa')] ? (this[Xe('0x2b')]('节点属性')[Xe('0x2c')](), this[Xe('0x2b')](Xe('0x2d'))['hide']()) : (this['getFolder'](Xe('0x2d'))['show'](), this[Xe('0x2b')]('节点属性')[Xe('0x2e')]());
    }
  }

  [Xe('0x2f')](Xx) {
    var Xy = this[Xe('0x1')][Xe('0x30')](Xx);
    return this[Xe('0x31')][Xx] = Xy;
  }

  [Xe('0x2b')](Xz) {
    return this[Xe('0x31')][Xz];
  }

  [Xe('0x32')](XA, XB) {
    return this['getCtroller'](XA, XB)[Xe('0x33')]();
  }

  ['getCtroller'](XC, XD) {
    let XE = this[Xe('0x2b')](XC)[Xe('0x34')];
    return XE[Xe('0x35')](XC => XC[Xe('0x36')] == XD);
  }

  ['setFolderValues'](XG, XH) {
    let XI = Object['keys'](this[Xe('0x1')][Xe('0x37')]);
    XI[Xe('0x1e')](XI => {
      let XK = this[Xe('0x1')][Xe('0x37')][XI][Xe('0x34')];
      XK['forEach'](function (XI) {
        var XK = XI[Xe('0x36')];
        null != XG[XK] ? XI[Xe('0x38')](XG[XK]) : null != XH[XK] && XI[Xe('0x38')](XH[XK]);
      });
    });
  }

  [Xe('0x22')]() {
    const XN = this, XO = this[Xe('0x0')], XP = XO['stage'], XQ = XO['currentLayer'];
    var XR = this['basic'], XS = this['style'];
    const XT = [Xe('0x39'), '顶部', Xe('0x3a'), '右边', '中心', '右边', '左下角', '底部', '右下角'],
      XU = ['lt', 'ct', 'rt', 'lm', Xe('0x18'), 'rm', 'lb', 'cb', 'rb'], XV = {};
    XT[Xe('0x1e')](function (XP, XR) {
      XV[XP] = XU[XR];
    });
    var XY = {'居中': Xe('0x18'), '左': Xe('0x3b'), '右': Xe('0x3c')},
      XZ = {'顶部': Xe('0x3d'), '中心': Xe('0x3e'), '底部': Xe('0x3f')},
      Y0 = {'正常': Xe('0x40'), '加粗': Xe('0x1a'), '斜体': Xe('0x41')},
      Y1 = {'直线': Xe('0x42'), '自动折线': Xe('0x43'), '圆弧': Xe('0x44'), '曲线': Xe('0x45'), '贝塞尔曲线': Xe('0x46')}, Y2 = {
        '实线': Xe('0x47'),
        '虚线1,1': '1,1',
        '虚线2,2': Xe('0x48'),
        '虚线3,3': Xe('0x49'),
        '虚线7,3': Xe('0x4a'),
        '虚线3,7': Xe('0x4b'),
        '虚线10,1': Xe('0x4c'),
        '虚线1,10': Xe('0x4d')
      }, Y3 = [Xe('0x4e'), '宋体', 'Georgia', Xe('0x4f'), '仿宋', '隶书'],
      Y4 = {'默认': Xe('0x1c'), '圆形': Xe('0x50'), '矩形': Xe('0x51')};

    function Y5() {
      var XP, XR = this[Xe('0x36')];
      let XS = this[Xe('0x33')]();
      XR == Xe('0x53') ? XQ[Xe('0x54')]() : XR == Xe('0x1f') && (XS *= Math['PI'] / 0xb4);
      let XT = XN[Xe('0x2')];
      if (XT[Xe('0x7')]) if (XR != Xe('0x11') || XT[Xe('0x55')]) if (XR != Xe('0x15') || XT[Xe('0x55')]) {
        if (XR == Xe('0x59')) {
          var XU = XS;
          if (XT[Xe('0x59')] !== XU) {
            let XP = gT(XU);
            XU = new XP();
            WH(XU, XT), XT = XU, XN[Xe('0x3')](XT);
          }
        }
      } else 0x0 != XS ? (null == XT[Xe('0x14')] && (XP = new X0(), XT[Xe('0x58')](XP)), XT['endArrow']['resizeTo'](XS, 0.618 * XS), XT['endArrow']['show']()) : XT[Xe('0x14')] && XT[Xe('0x14')][Xe('0x2e')](); else 0x0 != XS ? (null == XT[Xe('0x12')] && (XP = new X0(), XT[Xe('0x56')](XP)), XT[Xe('0x12')][Xe('0x57')](XS, 0.618 * XS), XT[Xe('0x12')][Xe('0x2c')]()) : XT[Xe('0x12')] && XT[Xe('0x12')]['hide']();
      XR != Xe('0x59') && (XT[XR] = XS), null != XT[Xe('0x5a')] && (XT[Xe('0x16')][Xe('0x5b')] = null), XO[Xe('0xc')]();
    }

    function Yc() {
      let XP = this[Xe('0x36')], XR = this[Xe('0x33')](), XS = XN[Xe('0x2')], XT = XS[Xe('0x16')];
      var XU;
      XP == Xe('0x29') || XP == Xe('0x26') || XP == Xe('0x27') ? (XU = XN[Xe('0x32')]('文本', Xe('0x26')) + '\x20' + XN[Xe('0x32')]('文本', Xe('0x27')) + Xe('0x5c') + XN[Xe('0x32')]('文本', Xe('0x29')), XP = Xe('0x5d'), XR = XU) : XP == Xe('0x5e') ? null == XR || '' == XR ? XR = null : typeof XR == Xe('0x5f') && (XR = XR['split'](',')) : XP == Xe('0x5b') && XN[Xe('0x2')]['isLink'] && (XR = null), XS instanceof yU && -0x1 != XP[Xe('0x60')](Xe('0x5d')) && null != XS[Xe('0x61')] && (XS[Xe('0x61')][Xe('0x16')][XP] = XR), XT[XP] = XR, null != XS[Xe('0x5a')] && (XS[Xe('0x16')][Xe('0x5b')] = null), XO[Xe('0xc')]();
    }

    Xe('0x52');
    const Yi = this[Xe('0x2f')](Xe('0x62'));
    Yi[Xe('0x6')](XR, 'id')[Xe('0x63')](Y5)['name']('ID'), Yi['add'](XR, 'name')['onFinishChange'](Y5)[Xe('0x64')](Xe('0x64')), Yi['add'](XR, Xe('0x65'))['onFinishChange'](Y5)[Xe('0x64')]('文字'), Yi[Xe('0x6')](XR, Xe('0x53'), 0x0, 0x3e8, 0x1)[Xe('0x66')](Y5)[Xe('0x64')]('层级'), Yi[Xe('0x6')](XR, Xe('0x67'), !0x1)[Xe('0x66')](Y5)[Xe('0x64')](Xe('0x68')), Yi[Xe('0x6')](XR, Xe('0x69'), !0x0)[Xe('0x66')](Y5)[Xe('0x64')](Xe('0x6a')), Yi['add'](XR, Xe('0x6b'), !0x0)['onChange'](Y5)[Xe('0x64')](Xe('0x6c')), Yi[Xe('0x6')](XR, Xe('0x6d'), !0x0)['onChange'](Y5)[Xe('0x64')](Xe('0x6e')), Yi[Xe('0x6')](XS, Xe('0x23'), 0x0, 0x64)['onChange'](Yc)[Xe('0x64')](Xe('0x6f')), Yi[Xe('0x6')](XS, 'lineDash', Y2)[Xe('0x66')](Yc)[Xe('0x64')]('虚实'), Yi[Xe('0x70')](XS, 'borderColor')['onChange'](Yc)[Xe('0x64')](Xe('0x71')), Yi[Xe('0x6')](XS, Xe('0x72'), 0x0, 0x1, 0.1)[Xe('0x66')](Yc)[Xe('0x64')](Xe('0x73')), Yi[Xe('0x74')]();
    const Yj = this[Xe('0x2f')](Xe('0x75'));
    Yj[Xe('0x70')](XS, Xe('0x5b'))[Xe('0x66')](Yc)[Xe('0x64')](Xe('0x76')), Yj[Xe('0x6')](XR, Xe('0x5a'))['onFinishChange'](Y5)[Xe('0x64')](Xe('0x77')), Yj[Xe('0x6')](XR, 'x')['onFinishChange'](Y5), Yj[Xe('0x6')](XR, 'y')[Xe('0x63')](Y5), Yj[Xe('0x6')](XR, Xe('0x13'), 0x1)['onFinishChange'](Y5)['name']('宽度'), Yj[Xe('0x6')](XR, Xe('0x78'), 0x1)[Xe('0x63')](Y5)['name']('高度'), Yj[Xe('0x6')](XR, Xe('0x1f'), -0x168, 0x168, 0x1)[Xe('0x66')](Y5)[Xe('0x64')](Xe('0x79')), Yj[Xe('0x6')](XS, Xe('0x7a'))['onChange'](Yc)[Xe('0x64')](Xe('0x7b')), Yj[Xe('0x6')](XR, Xe('0x7c'), 0x3, 0x18)['onChange'](Y5)[Xe('0x64')](Xe('0x7d')), Yj['open']();
    const Yk = this[Xe('0x2f')](Xe('0x2d'));
    Yk[Xe('0x6')](XR, Xe('0x59'), Y1)[Xe('0x66')](Y5)[Xe('0x64')]('线型'), Yk[Xe('0x6')](XR, Xe('0x7e'), {
      '顺时针': -0x1,
      '逆时针': 0x1
    })[Xe('0x66')](Y5)[Xe('0x64')](Xe('0x7f')), Yk[Xe('0x6')](XR, Xe('0x11'), 0x0, 0x32)[Xe('0x66')](Y5)[Xe('0x64')]('开始箭头大小'), Yk['add'](XR, Xe('0x15'), 0x0, 0x32)[Xe('0x66')](Y5)['name'](Xe('0x80')), Yk[Xe('0x6')](XR, Xe('0x81'), -0x1e, 0x1e)[Xe('0x66')](Y5)[Xe('0x64')](Xe('0x82')), Yk[Xe('0x6')](XR, 'endOffset', -0x1e, 0x1e)[Xe('0x66')](Y5)[Xe('0x64')](Xe('0x83')), Yk['add'](XS, Xe('0x84'), Y4)['onChange'](Yc)[Xe('0x64')](Xe('0x85')), Yk[Xe('0x74')]();
    const Yl = this[Xe('0x2f')]('文本');
    Yl[Xe('0x6')](XS, Xe('0x29'), Y3)[Xe('0x66')](Yc)[Xe('0x64')](Xe('0x86')), Yl[Xe('0x6')](XS, Xe('0x27'), 0x1, 0x3e8)[Xe('0x66')](Yc)[Xe('0x64')]('大小'), Yl[Xe('0x6')](XS, Xe('0x26'), Y0)[Xe('0x66')](Yc)[Xe('0x64')](Xe('0x87')), Yl[Xe('0x70')](XS, Xe('0x88'))[Xe('0x66')](Yc)[Xe('0x64')]('颜色'), Yl[Xe('0x6')](XS, Xe('0x89'), XV)['onChange'](Yc)['name'](Xe('0x8a')), Yl[Xe('0x6')](XS, Xe('0x8b'), XY)['onChange'](Yc)[Xe('0x64')](Xe('0x8c')), Yl[Xe('0x6')](XS, Xe('0x8d'), XZ)[Xe('0x66')](Yc)[Xe('0x64')](Xe('0x8e')), Yl[Xe('0x6')](XR, Xe('0x8f'))[Xe('0x66')](Y5)[Xe('0x64')](Xe('0x90')), Yl[Xe('0x6')](XR, Xe('0x91'))['onChange'](Y5)[Xe('0x64')](Xe('0x92'));
    let Ym = this[Xe('0x1')][Xe('0x93')];
    Ym[Xe('0x94')](), XP[Xe('0x95')][Xe('0x96')](Ym), Ym['style']['position'] = 'absolute', Ym[Xe('0x16')][Xe('0x3c')] = Xe('0x97'), Ym[Xe('0x16')][Xe('0x3d')] = Xe('0x98'), Ym[Xe('0x16')][Xe('0x53')] = 0x3e8;
  }

  [Xe('0x74')]() {
    this[Xe('0x1')]['open']();
  }

  [Xe('0x99')]() {
    this['gui'][Xe('0x99')]();
  }

  ['hide']() {
    this[Xe('0x1')][Xe('0x93')]['style'][Xe('0x9a')] = Xe('0x9b');
  }

  [Xe('0x2c')]() {
    this[Xe('0x1')]['domElement'][Xe('0x16')]['display'] = Xe('0x9c');
  }
}

var Yn = ['SimpleLink', 'concat', 'text', 'prototype'];
!function (Yo) {
  !function (Yp) {
    for (; --Yp;) Yo['push'](Yo['shift']());
  }(0x104);
}(Yn);
var Yq = function (Yr, Ys) {
  return Yn[Yr = +Yr];
};

class Yt extends yU {
  constructor(Yu, Yv, Yw, Yx, Yy) {
    super(Yu, Yv, Yw, Yx, Yy);
  }
}

bN(Yt[Yq('0x0')], {
  'className': {'value': Yq('0x1'), 'writable': !0x1},
  'serializers': {'value': kg[Yq('0x0')]['serializers'][Yq('0x2')]([Yq('0x3')])}
});
var Yz = ['mousemoveHandler', 'nw-resize', 'n-resize', 'ne-resize', 'w-resize', 'e-resize', 'sw-resize', 's-resize', 'se-resize', 'setCursor', 'mouseoutHandler', 'mousedownHandler', 'preventDefault', 'mouseupHandler', 'selectedGroup.length\x20is\x200!', 'pickedObject', 'mouseInfo', 'stageToLocalXY', 'getPosition', 'adjustFixedDirection', 'transformPoint', 'resizeWith', 'updateSize', 'nodeCtrlBox', 'editor', 'stage', 'selectedGroup', 'resizeTo', 'css', '1px\x20solid\x20black', 'orange', 'name', 'dragBegin'];
!function (YA) {
  !function (YB) {
    for (; --YB;) YA['push'](YA['shift']());
  }(0x1c5);
}(Yz);
var YC = function (YD, YE) {
  return Yz[YD = +YD];
};

class YF extends so {
  constructor(YG, YH) {
    super(), this['isNodeResizePoint'] = !0x0, this[YC('0x0')] = YG, this[YC('0x1')] = YG[YC('0x1')], this[YC('0x2')] = this[YC('0x1')][YC('0x2')], this[YC('0x3')] = this[YC('0x2')]['selectedGroup'], this[YC('0x4')](0xc, 0xc), this[YC('0x5')]({
      'border': YC('0x6'),
      'backgroundColor': YC('0x7')
    }), this[YC('0x8')] = YH, this[YC('0x9')] = !0x1;
  }

  ['mouseenterHandler'](YI) {
  }

  [YC('0xa')](YJ) {
    let YK;
    var YL = this[YC('0x8')];
    YL == c6['lt'] ? YK = YC('0xb') : YL == c6['ct'] ? YK = YC('0xc') : YL == c6['rt'] ? YK = YC('0xd') : YL == c6['lm'] ? YK = YC('0xe') : YL == c6['rm'] ? YK = YC('0xf') : YL == c6['lb'] ? YK = YC('0x10') : YL == c6['cb'] ? YK = YC('0x11') : YL == c6['rb'] && (YK = YC('0x12')), this[YC('0x1')][YC('0x2')][YC('0x13')](YK);
  }

  [YC('0x14')](YM) {
  }

  [YC('0x15')](YN) {
    YN[YC('0x16')]();
  }

  [YC('0x17')](YO) {
    YO[YC('0x16')]();
  }

  ['mousedragHandler'](YP) {
    YP['preventDefault']();
    var YQ = this[YC('0x0')]['editor']['stage'], YR = this['name'];
    let YS = this[YC('0x3')];
    if (0x0 == YS['getNoChildrensObjects']()['length']) throw new Error(YC('0x18'));
    let YT = YQ[YC('0x19')];
    YP = YQ[YC('0x1a')], YQ = YT[YC('0x1b')](YP['x'], YP['y']), YP = YT[YC('0x1c')](YR);
    let YU = YQ['x'] - YP['x'], YV = YQ['y'] - YP['y'];
    YR == c6['lt'] ? (YU = -YU, YV = -YV) : YR == c6['ct'] ? (YU = 0x0, YV = -YV) : YR == c6['rt'] ? YV = -YV : YR == c6['lm'] ? (YU = -YU, YV = 0x0) : YR == c6['rm'] ? YV = 0x0 : YR == c6['lb'] ? YU = -YU : YR == c6['cb'] ? YU = 0x0 : c6['rb'], this[YC('0x1d')](YT, {
      'dx': YU,
      'dy': YV
    }, YR);
  }

  [YC('0x1d')](YW, YX, YY) {
    var YZ = c8[YY], YY = YW[YC('0x1c')](YZ), YY = YW[YC('0x1e')](YY);
    YW[YC('0x1f')](YX['dx'], YX['dy']);
    YX = YW['getPosition'](YZ), YX = YW['transformPoint'](YX), YZ = YY['x'] - YX['x'], YX = YY['y'] - YX['y'];
    YW['translateWith'](YZ, YX), this[YC('0x0')][YC('0x20')]();
  }
}

var Z2 = ['1px\x20solid\x20black', 'orange', 'name', 'mousemoveHandler', 'move', 'mousedownHandler', 'preventDefault', 'length', 'selectedGroup.length\x20is\x200!', 'pickedObject', 'elementInitAngle', 'mouseInitAngle', 'mouseupHandler', 'setCursor', 'mousedragHandler', 'parent', 'getNoChildrensObjects', 'updateSize', 'getPosition', 'center', 'getStageTransform', 'atan2', 'isNodeRotatePoint', 'nodeCtrlBox', 'editor', 'stage', 'selectedGroup', 'css'];
!function (Z3) {
  !function (Z4) {
    for (; --Z4;) Z3['push'](Z3['shift']());
  }(0x163);
}(Z2);
var Z5 = function (Z6, Z7) {
  return Z2[Z6 = +Z6];
};

function Z8(Z9, Za) {
  var Zb = Za['mouseInfo'], Za = Z9[Z5('0x0')](Z5('0x1'));
  let Zd = Z9[Z5('0x2')]();
  Za = Zd['point'](Za);
  return Math[Z5('0x3')](Zb['y'] - Za['y'], Zb['x'] - Za['x']);
}

class Ze extends IV {
  constructor(Zf, Zg) {
    super(), this[Z5('0x4')] = !0x0, this[Z5('0x5')] = Zf, this[Z5('0x6')] = Zf['editor'], this[Z5('0x7')] = this[Z5('0x6')][Z5('0x7')], this[Z5('0x8')] = this[Z5('0x7')][Z5('0x8')], this[Z5('0x9')]({
      'border': Z5('0xa'),
      'backgroundColor': Z5('0xb')
    }), this['resizeTo'](0xe, 0xe), this[Z5('0xc')] = Zg;
  }

  [Z5('0xd')](Zh) {
    this[Z5('0x7')]['setCursor'](Z5('0xe'));
  }

  [Z5('0xf')](Zi) {
    Zi[Z5('0x10')]();
    var Zj = this[Z5('0x7')];
    if (0x0 == this[Z5('0x8')]['getNoChildrensObjects']()[Z5('0x11')]) throw new Error(Z5('0x12'));
    Zi = Zj[Z5('0x13')];
    this[Z5('0x14')] = Zi['rotation'], this[Z5('0x15')] = Z8(Zi, Zj);
  }

  [Z5('0x16')](Zk) {
    this[Z5('0x7')][Z5('0x17')]('auto'), Zk[Z5('0x10')]();
  }

  [Z5('0x18')](Zl) {
    Zl[Z5('0x10')]();
    let Zm = this[Z5('0x19')];
    var Zn = Zm[Z5('0x6')], Zl = Zn[Z5('0x7')];
    let Zp = Zn['stage'][Z5('0x8')];
    if (0x0 == Zp[Z5('0x1a')]()[Z5('0x11')]) throw new Error(Z5('0x12'));
    let Zq = Zl[Z5('0x13')];
    Zl = Z8(Zq, Zl) - this[Z5('0x15')];
    Zq['rotateTo'](this[Z5('0x14')] + Zl), Zm[Z5('0x1b')]();
  }
}

var Zr = ['center', 'atan2', 'resizeTo', 'rotateTo', 'translateCenterTo', 'zIndex', 'NodeCtrlBox', 'editor', 'mouseoutStageHandler', 'mouseenterStageHandler', 'initCtrlPoint', 'removeAllChild', 'getCtrlPoints', 'forEach', 'rotate', 'getPosition', 'mouseEnabled', 'addChild', 'attachTo', 'editable', 'attach\x20not\x20Node\x20or\x20not\x20editable', 'currNode', 'show', 'updateSize', 'isSelected', 'parent', 'hide', 'viewClone', 'initPoints', 'getChildren', 'length', 'name', 'getStageTransform', 'point'];
!function (Zs) {
  !function (Zt) {
    for (; --Zt;) Zs['push'](Zs['shift']());
  }(0xb0);
}(Zr);
var Zu = function (Zv, Zw) {
  return Zr[Zv = +Zv];
};

class Zx extends so {
  constructor(Zy, Zz, ZA, ZB, ZC) {
    super(null, Zz, ZA, ZB, ZC), this[Zu('0x0')] = c9[Zu('0x1')], this[Zu('0x2')] = Zy, this['mouseEnabled'] = !0x1, this['css']({});
  }

  [Zu('0x3')](ZD) {
  }

  [Zu('0x4')](ZE) {
  }

  [Zu('0x5')](ZF) {
    this[Zu('0x6')]();
    let ZG = ZF[Zu('0x7')](), ZH = this;
    ZG[Zu('0x8')](ZG => {
      if (ZH['createCtrlPoint'](ZG), 'rotate' == ZG) {
        ZG = ZH['createCtrlPoint'](Zu('0x9'));
        let ZF = new yU(null, ZG, function () {
          return ZH[Zu('0xa')](c6['ct']);
        });
        ZF[Zu('0xb')] = !0x1, ZH[Zu('0xc')](ZF);
      }
    });
  }

  ['createCtrlPoint'](ZK) {
    let ZL;
    return ZL = new (ZK == (Zu('0x9')) ? Ze : YF)(this, ZK), this['addChild'](ZL), ZL;
  }

  [Zu('0xd')](ZM) {
    if (0x1 != ZM[Zu('0xe')]) throw new Error(Zu('0xf'));
    null !== this[Zu('0x10')] && this[Zu('0x5')](ZM), this[Zu('0x10')] = ZM, this['updateSize'](), this[Zu('0x11')]();
  }

  [Zu('0x12')]() {
    var ZN = this[Zu('0x10')];
    if (null == ZN || 0x0 == ZN[Zu('0x13')] || null == ZN[Zu('0x14')]) return this['currNode'] = null, void this[Zu('0x15')]();
    this[Zu('0x16')](ZN), this[Zu('0x17')]();
  }

  [Zu('0x17')]() {
    for (var ZO = this[Zu('0x18')](), ZP = 0x0; ZP < ZO[Zu('0x19')]; ZP++) {
      let ZQ = ZO[ZP];
      if (!ZQ['isLink']) {
        let ZO;
        'rotate' == ZQ[Zu('0x1a')] ? (ZO = this[Zu('0xa')](c6['ct']), ZO['y'] -= 0x1e) : ZO = this[Zu('0xa')](ZQ[Zu('0x1a')]), ZQ['translateCenterTo'](ZO['x'], ZO['y']);
      }
    }
  }

  ['viewClone'](ZS) {
    let ZT = ZS[Zu('0x1b')]();
    var ZU = ZT[Zu('0x1c')](ZS['getPosition'](c6[Zu('0x1d')])), ZV = ZT[Zu('0x1c')](ZS[Zu('0xa')](c6['rm'])),
      ZW = Math[Zu('0x1e')](ZV['y'] - ZU['y'], ZV['x'] - ZU['x']);
    ZT[Zu('0x9')](-ZW);
    var a00 = ZT[Zu('0x1c')](ZS[Zu('0xa')](c6[Zu('0x1d')])), ZV = ZT['point'](ZS['getPosition'](c6['rb'])),
      ZS = 0x2 * (ZV['x'] - a00['x']), a00 = 0x2 * (ZV['y'] - a00['y']);
    this[Zu('0x1f')](ZS, a00), this[Zu('0x20')](ZW), this[Zu('0x21')](ZU['x'], ZU['y']);
  }
}

var a01 = ['move', 'parent', 'stage', 'points', 'name', 'fold1', 'getK', 'w_resize', 'e_resize', 's_resize', 'n_resize', 'fold2', 'center', 'mousedownHandler', 'corosshair', 'mousedragHandler', 'details', 'attachedLink', 'stageToLocalXY', 'mouseX', 'resetOffset', 'setBegin', 'canConnectEndpoint', 'end', 'getEndPoint', 'getConnectInfo', 'ctrlPoint', 'getPosition', 'ctrlPoint1', 'ctrlPoint2', 'setFold1Offset', 'setFold2Offset', 'setCenterOffset', 'mouseupHandler', 'preventDefault', 'target', 'isLink', 'begin', 'setEnd', 'upgradeParent', 'setRadius', 'linkCtrlBox', 'editor', 'isConnectPoint', 'fillColor', 'css', '1px\x20solid\x20rgba(0,0,0,0.9)', 'active', 'rgba(0,0,0,0.1)', 'unActive', 'rgba(0,0,0,0.9)', 'anchorBox', 'hide', 'setCursor'];
!function (a02) {
  !function (a03) {
    for (; --a03;) a02['push'](a02['shift']());
  }(0x1a3);
}(a01);
var a04 = function (a05, a06) {
  return a01[a05 = +a05];
};

class a07 extends IV {
  constructor(a08) {
    super(null, 0x0, 0x0), this[a04('0x0')](0x7), this[a04('0x1')] = a08, this[a04('0x2')] = this[a04('0x1')][a04('0x2')], this[a04('0x3')] = !0x0;
    this[a04('0x4')] = 'pink', this[a04('0x5')]({'border': a04('0x6'), 'backgroundColor': 'pink'});
  }

  [a04('0x7')]() {
    this[a04('0x5')]({'backgroundColor': 'rgba(0,0,0,0.1)', 'borderColor': a04('0x8')});
  }

  [a04('0x9')]() {
    var a09 = this['fillColor'];
    this[a04('0x5')]({'backgroundColor': a09, 'borderColor': a04('0xa')});
  }

  ['mousemoveHandler'](a0a) {
    this['editor'][a04('0xb')][a04('0xc')](), this[a04('0x2')]['stage'][a04('0xd')](c4[a04('0xe')]);
    var a0b = this[a04('0xf')];
    let a0c = a0b['parent'][a04('0x10')], a0d = a0b['attachedLink'];
    if (a0d instanceof V0) {
      let a0a;
      var a0f = a0d['points'][0x0], a0g = a0d[a04('0x11')][0x1], a0h = a0d['points'][0x4], a0i = a0d[a04('0x11')][0x5];
      this[a04('0x12')] == c6[a04('0x13')] ? (a0b = rq(a0d[a04('0x14')](0x0, 0.5)), a0a = a0b ? a0g['x'] > a0f['x'] ? c4[a04('0x15')] : c4[a04('0x16')] : a0g['y'] > a0f['y'] ? c4[a04('0x17')] : c4[a04('0x18')]) : this[a04('0x12')] == c6[a04('0x19')] ? (a0f = rq(a0d[a04('0x14')](0x4, 0.5)), a0a = a0f ? a0h['x'] > a0i['x'] ? c4[a04('0x15')] : c4[a04('0x16')] : a0h['y'] > a0i['y'] ? c4[a04('0x17')] : c4[a04('0x18')]) : this[a04('0x12')] == c6[a04('0x1a')] && (a0i = rq(a0d[a04('0x14')](0x2, 0.5)), a0a = a0i ? c4[a04('0x17')] : c4[a04('0x16')]), a0a && a0c[a04('0xd')](a0a);
    }
  }

  [a04('0x1b')](a0j) {
    this[a04('0x2')]['stage'][a04('0xd')](c4[a04('0x1c')]), this['canConnectEndpoint'] = null, a0j['preventDefault']();
  }

  [a04('0x1d')](a0k) {
    var a0l = a0k[a04('0x1e')];
    a0k['preventDefault']();
    var a0m = this[a04('0xf')], a0k = a0m[a04('0xf')]['stage'];
    const a0o = a0k['editor'];
    let a0p = a0m[a04('0x1f')];
    a0o[a04('0xb')][a04('0xc')]();
    var a0q, a0r, a0m = this[a04('0x12')], a0k = a0p[a04('0x20')](a0k[a04('0x21')], a0k['mouseY']);
    if (a0l['isDragStart'] && this['active'](), a0m == c6['begin']) {
      let a0l = a0p['getBeginPoint']();
      a0l['x'] += a0k['x'] - a0l['x'], a0l['y'] += a0k['y'] - a0l['y'], a0p instanceof V0 && a0p[a04('0x22')](), a0p[a04('0x23')](a0l), this[a04('0x24')] = a0o[a04('0xb')]['getConnectInfo'](a0p, null, null);
    } else if (a0m == c6[a04('0x25')]) {
      let a0l = a0p[a04('0x26')]();
      a0l['x'] += a0k['x'] - a0l['x'], a0l['y'] += a0k['y'] - a0l['y'], a0p instanceof V0 && a0p[a04('0x22')](), a0p['setEnd'](a0l), this['canConnectEndpoint'] = a0o[a04('0xb')][a04('0x27')](a0p, null, null);
    }
    a0p instanceof JE ? this[a04('0x12')] == c6[a04('0x28')] && (null == a0p[a04('0x28')] ? a0p[a04('0x28')] = a0p[a04('0x29')](a0m) : (a0p[a04('0x28')]['x'] += a0k['x'] - a0p[a04('0x28')]['x'], a0p[a04('0x28')]['y'] += a0k['y'] - a0p['ctrlPoint']['y'])) : a0p instanceof An ? a0m == c6[a04('0x2a')] ? null == a0p[a04('0x2a')] ? a0p[a04('0x2a')] = a0p[a04('0x29')](a0m) : (a0p[a04('0x2a')]['x'] += a0k['x'] - a0p[a04('0x2a')]['x'], a0p[a04('0x2a')]['y'] += a0k['y'] - a0p[a04('0x2a')]['y']) : a0m == c6['ctrlPoint2'] && (null == a0p[a04('0x2b')] ? a0p[a04('0x2b')] = a0p[a04('0x29')](a0m) : (a0p[a04('0x2b')]['x'] += a0k['x'] - a0p[a04('0x2b')]['x'], a0p[a04('0x2b')]['y'] += a0k['y'] - a0p[a04('0x2b')]['y'])) : a0p instanceof V0 && (a0m == c6['fold1'] ? (a0q = a0p[a04('0x29')](c6[a04('0x13')]), a0l = a0k['x'] - a0q['x'], a0q = a0k['y'] - a0q['y'], a0p[a04('0x2c')](a0l, a0q)) : a0m == c6[a04('0x19')] ? (a0r = a0p[a04('0x29')](c6[a04('0x19')]), a0q = a0k['x'] - a0r['x'], a0r = a0k['y'] - a0r['y'], a0p[a04('0x2d')](a0q, a0r)) : a0m == c6[a04('0x1a')] && (a0r = a0p[a04('0x29')](c6[a04('0x1a')]), a0m = a0k['x'] - a0r['x'], a0r = a0k['y'] - a0r['y'], a0p[a04('0x2e')](a0m, a0r)));
  }

  [a04('0x2f')](a0w) {
    var a0x, a0y;
    a0w[a04('0x30')](), this[a04('0x9')]();
    let a0z = this[a04('0xf')][a04('0x1f')];
    null != this[a04('0x24')] && ((a0y = (a0x = this[a04('0x24')])[a04('0x31')])[a04('0x32')] ? (a0w = a0y)[a04('0x25')]['target'] !== a0z && a0w[a04('0x33')][a04('0x31')] !== a0z && (this[a04('0x12')] == c6[a04('0x33')] ? a0z[a04('0x23')](a0w, a0x) : this[a04('0x12')] == c6[a04('0x25')] && a0z['setEnd'](a0w, a0x), a0z['upgradeParent']()) : (this['name'] == c6[a04('0x33')] ? a0z[a04('0x23')](a0y, a0x) : this[a04('0x12')] == c6[a04('0x25')] && a0z[a04('0x34')](a0y, a0x), a0z[a04('0x35')]()), this[a04('0x24')] = null);
  }
}

var a0A = ['attachTo', 'updateCtrlPoints', 'getAnchorPoints', 'anchorNameStr', 'join', 'length', 'end', 'fillColor', 'background', 'css', '1px\x20solid\x20gray', 'isConnectPoint', 'ctrlPoint1', 'setBegin', 'center', 'begin', 'setEnd', 'Link', 'ctrlPoint2', 'ctrlPoint', 'hideAllPoint', 'updateFllow', 'getStageTransform', 'getPosition', 'point', 'translateTo', 'show', 'object', 'zIndex', 'LinkCtrlBox', 'editor', 'attachedLink', 'ctrlPointStyle', 'init', 'mouseoutStageHandler', 'mouseenterStageHandler', 'createNodeResizePoint', 'name', 'addChild', 'ctrlPointInfo', 'draw', 'updateSize', 'stage', 'pickedObject', 'parent', 'hide'];
!function (a0B) {
  !function (a0C) {
    for (; --a0C;) a0B['push'](a0B['shift']());
  }(0xd5);
}(a0A);
var a0D = function (a0E, a0F) {
  return a0A[a0E = +a0E];
};

class a0G extends kg {
  constructor(a0H) {
    super(), this[a0D('0x0')] = c9[a0D('0x1')], this[a0D('0x2')] = a0H, this[a0D('0x3')] = null, this[a0D('0x4')] = new da({}), this['anchorNameStr'] = null, this[a0D('0x5')]();
  }

  [a0D('0x6')](a0I) {
  }

  [a0D('0x7')](a0J) {
  }

  [a0D('0x8')](a0K) {
    let a0L = new a07(this);
    return a0L[a0D('0x9')] = a0K, this[a0D('0xa')](a0L), a0L;
  }

  [a0D('0x5')]() {
    this[a0D('0xb')] = {};
  }

  [a0D('0xc')](a0M) {
    0x0 != this['visible'] && this[a0D('0xd')]();
  }

  [a0D('0xd')]() {
    var a0N = this[a0D('0x2')][a0D('0xe')][a0D('0xf')];
    this[a0D('0x3')] ? null == this['attachedLink'][a0D('0x10')] || null == a0N || this[a0D('0x3')] != a0N ? (this[a0D('0x3')] = null, this[a0D('0x11')]()) : this[a0D('0x12')](this[a0D('0x3')]) : this['hide']();
  }

  [a0D('0x13')](a0O) {
    let a0P = (this[a0D('0x3')] = a0O)[a0D('0x14')]();
    this[a0D('0x15')] = a0P[a0D('0x16')](',');
    for (let a0O = 0x0; a0O < a0P[a0D('0x17')]; a0O++) {
      var a0R = a0P[a0O];
      let a0S = this[a0D('0xb')][a0R];
      if (null == a0S) {
        if (a0S = this['createNodeResizePoint'](a0R), a0R != c6['begin'] && a0R != c6[a0D('0x18')] && (a0S[a0D('0x19')] = this[a0D('0x4')][a0D('0x1a')], a0S[a0D('0x1b')]({
          'border': a0D('0x1c'),
          'background': 'orange'
        }), a0S[a0D('0x1d')] = !0x1), a0R == a0D('0x1e')) {
          let a0O = new yU();
          a0O[a0D('0x1b')]({'lineDash': [0x2, 0x2]}), a0O[a0D('0x1f')](a0S, a0D('0x20'));
          var a0U = this[a0D('0xb')][a0D('0x21')];
          a0O[a0D('0x22')](a0U, 'center'), this[a0D('0xa')](a0O), this['ctrlPointInfo'][a0R + a0D('0x23')] = a0O;
        } else if (a0R == a0D('0x24')) {
          let a0O = new yU();
          a0O[a0D('0x1b')]({'lineDash': [0x2, 0x2]}), a0O[a0D('0x1f')](a0S, a0D('0x20'));
          var a0W = this[a0D('0xb')]['end'];
          a0O['setEnd'](a0W, a0D('0x20')), this[a0D('0xa')](a0O), this[a0D('0xb')][a0R + a0D('0x23')] = a0O;
        } else if (a0R == a0D('0x25')) {
          let a0O = new yU();
          a0O['css']({'lineDash': [0x2, 0x2]}), a0O[a0D('0x1f')](a0S, a0D('0x20'));
          a0W = this[a0D('0xb')]['begin'];
          a0O[a0D('0x22')](a0W, a0D('0x20')), this['addChild'](a0O), this[a0D('0xb')][a0R + a0D('0x23')] = a0O;
        }
        this['ctrlPointInfo'][a0R] = a0S;
      }
    }
  }

  [a0D('0x26')]() {
    let a0Y = this['ctrlPointInfo'];
    for (var a0Z in a0Y) a0Y[a0Z][a0D('0x11')]();
  }

  [a0D('0x27')]() {
    const a10 = this[a0D('0x3')];
    let a11 = a10[a0D('0x28')]();
    var a12 = a10[a0D('0x14')]();
    this[a0D('0x26')]();
    for (let a13 = 0x0; a13 < a12[a0D('0x17')]; a13++) {
      var a14 = a12[a13];
      let a15 = this[a0D('0xb')][a14];
      var a16 = a10[a0D('0x29')](a14);
      cc(a16, a10, a14);
      a16 = a11[a0D('0x2a')](a16);
      a15[a0D('0x2b')](a16['x'] - 0x5, a16['y'] - 0x5), a15['show']();
      let a17 = this[a0D('0xb')][a14 + a0D('0x23')];
      a17 && a17[a0D('0x2c')]();
    }
  }

  [a0D('0x12')](a18) {
    if (null != a18[a0D('0x10')]) {
      if (this[a0D('0x3')] === a18) return a18 instanceof V0 && a18[a0D('0x14')]()[a0D('0x16')](',') != this[a0D('0x15')] && this[a0D('0x13')](a18), this[a0D('0x27')](), void this[a0D('0x2c')]();
      this['ctrlPointInfo'] = {}, this['removeAllChild'](), this[a0D('0x13')](a18), this['updateFllow'](), this[a0D('0x2c')]();
    }
  }

  ['isPoint'](a19) {
    return !a19['isDisplayObject'] && (typeof a19 == a0D('0x2d') && null != a19['x'] && null != a19['y']);
  }
}

var a1a = ['upgradeParent', 'recordEnd', 'radius', 'width', 'height', 'arc', 'beginAngle', 'endAngle', 'strokeAndFill', 'mousePickupPath', 'isActive', 'red', 'gray', 'rgba(255,255,255,0.6)', 'prototype', 'anchorBox', 'editor', 'unactive', 'css', '1px\x20solid\x20gray', 'name', 'link', 'end', 'setIntersect', 'intersect', 'active', 'mouseoutHandler', 'mousedownHandler', 'preventDefault', 'showTip', '画线开始', 'stage', 'crosshair', 'mousedragHandler', 'buttons', 'setCursor', 'hide', 'details', 'isDragStart', 'rate', 'segIndex', 'newLink', 'parent', 'stageToLocalXY', 'mouseX', 'mouseY', 'setEnd', 'getConnectInfo', 'isDragEnd', 'update', 'auto', 'target', 'mouseEnabled'];
!function (a1b) {
  !function (a1c) {
    for (; --a1c;) a1b['push'](a1b['shift']());
  }(0x119);
}(a1a);
var a1d = function (a1e, a1f) {
  return a1a[a1e = +a1e];
};

class a1g extends IV {
  constructor(a1h, a1i, a1j, a1k, a1l) {
    super(null, a1i, a1j, a1k, a1l), this[a1d('0x0')] = a1h, this[a1d('0x1')] = a1h[a1d('0x1')], this['stage'] = this[a1d('0x1')]['stage'], this['resizeTo'](0xf, 0xf), this[a1d('0x2')](), this[a1d('0x3')]({'border': a1d('0x4')}), this[a1d('0x5')], this[a1d('0x6')], this[a1d('0x7')];
  }

  [a1d('0x8')](a1m) {
    this[a1d('0x9')] = a1m;
  }

  ['mouseenterHandler'](a1n) {
    this[a1d('0xa')]();
  }

  [a1d('0xb')](a1o) {
    this[a1d('0x2')]();
  }

  [a1d('0xc')](a1p) {
    a1p[a1d('0xd')](), this[a1d('0x1')][a1d('0xe')](a1d('0xf')), this[a1d('0x1')][a1d('0x10')]['setCursor'](a1d('0x11')), this[a1d('0x6')] = null;
  }

  [a1d('0x12')](a1q) {
    if (0x2 != a1q[a1d('0x13')]) {
      a1q['preventDefault'](), this[a1d('0x1')][a1d('0x10')][a1d('0x14')]('auto');
      const a1r = this[a1d('0x1')], a1s = a1r['stage'];
      this[a1d('0x15')]();
      var a1t = this[a1d('0x0')]['target'];
      if (a1q[a1d('0x16')][a1d('0x17')]) {
        cj(null == this[a1d('0x6')], this[a1d('0x6')]);
        let a1u;
        a1u = 'intersectNode' == this[a1d('0x5')] ? (a1q = this[a1d('0x0')][a1d('0x9')], new y1(a1t, a1q[a1d('0x18')], a1q[a1d('0x19')])) : new y5(a1t, this[a1d('0x5')]), this[a1d('0x1')]['record']('划线');
        const a1v = a1r[a1d('0x1a')](null, a1t, null, a1u);
        return a1v['mouseEnabled'] = !0x1, this[a1d('0x6')] = a1v, void a1v[a1d('0x1f')](function () {
          return a1v[a1d('0x1b')][a1d('0x1c')](a1s[a1d('0x1d')], a1s[a1d('0x1e')]);
        });
      }
      cc(this[a1d('0x6')][a1d('0x7')], this[a1d('0x6')]), this[a1d('0x7')] = this[a1d('0x0')][a1d('0x20')](this[a1d('0x6')], a1t, this[a1d('0x6')][a1d('0x7')]['target']);
    }
  }

  ['mouseupHandler'](a1w) {
    if (0x0 != a1w[a1d('0x16')][a1d('0x21')]) {
      if (this['show'](), this[a1d('0x1')][a1d('0x22')](), this[a1d('0x1')][a1d('0x10')][a1d('0x14')](a1d('0x23')), null != this[a1d('0x6')]) {
        let a1x, a1w;
        if (null != this[a1d('0x7')]) this[a1d('0x6')]['mouseEnabled'] = !0x0, a1x = this[a1d('0x7')][a1d('0x24')], a1w = this[a1d('0x7')]; else {
          let a1w = this[a1d('0x6')][a1d('0x7')]['target'];
          'function' == typeof a1w && (a1x = a1w(), this[a1d('0x6')][a1d('0x25')] = !0x0);
        }
        a1x && (this[a1d('0x6')]['setEnd'](a1x, a1w), this[a1d('0x6')][a1d('0x26')](), this[a1d('0x1')][a1d('0x27')]('划线'));
      }
      this[a1d('0x6')] = null;
    }
  }

  ['draw'](a1A) {
    this[a1d('0x28')] = Math['min'](0.5 * this[a1d('0x29')], 0.5 * this[a1d('0x2a')]), a1A['beginPath']();
    var a1B = this['width'] / 0x2, a1C = this[a1d('0x2a')] / 0x2;
    a1A[a1d('0x2b')](a1B, a1C, this[a1d('0x28')], this[a1d('0x2c')], this[a1d('0x2d')]), a1A['closePath'](), this[a1d('0x2e')](a1A), this[a1d('0x2f')](a1A);
  }

  ['active']() {
    this[a1d('0x30')] = !0x0, this[a1d('0x3')]({'backgroundColor': a1d('0x31')});
  }

  [a1d('0x2')]() {
    this[a1d('0x30')] = !0x1, this[a1d('0x3')]({'borderColor': a1d('0x32'), 'backgroundColor': a1d('0x33')});
  }
}

bN(a1g[a1d('0x34')], {'isActive': {'value': !0x1}});
var a1D = ['clearTarget', 'removeAllChild', 'hide', 'setTarget', 'target', 'length', 'fold2', 'createAnchorPoint', 'ctrlIntersectNode', 'intersectNode', 'update', 'activePoint', 'children', 'forEach', 'name', 'unactive', 'show', 'intersect', 'segIndex', 'getLocalPoint', 'getStageTransform', 'point', 'translateCenterTo', 'getPosition', 'getMouseObjectIntersect', 'stage', 'getMousePoint', 'displayList', 'nodeDist', 'getObjectsIntersect', 'getConnectInfo', 'currentLayer', 'keyboard', 'isKeydown', 'filter', 'mouseEnabled', 'connectable', 'object', 'rate', 'setIntersect', 'editor', 'anchorDist', 'mouseoutStageHandler'];
!function (a1E) {
  !function (a1F) {
    for (; --a1F;) a1E['push'](a1E['shift']());
  }(0x1ac);
}(a1D);
var a1G = function (a1H, a1I) {
  return a1D[a1H = +a1H];
};

class a1J extends so {
  constructor(a1K, a1L, a1M, a1N, a1O) {
    super(null, a1L, a1M, a1N, a1O), this[a1G('0x0')] = a1K, this[a1G('0x1')] = 0xa, this['nodeDist'] = 0xa, this['ctrlIntersectNode'], this['intersect'], this['target'] = null;
  }

  [a1G('0x2')](a1P) {
  }

  ['mouseenterStageHandler'](a1Q) {
  }

  [a1G('0x3')]() {
    this['target'] = null, this[a1G('0x4')](), this[a1G('0x5')]();
  }

  [a1G('0x6')](a1R, a1S) {
    if (this[a1G('0x7')] !== a1R) {
      if (this[a1G('0x7')] = a1R, this['removeAllChild'](), null != a1R) {
        for (var a1T = a1R['getAnchorPoints'](), a1U = 0x0; a1U < a1T[a1G('0x8')]; a1U++) {
          var a1V = a1T[a1U];
          a1R instanceof V0 && ('fold1' == a1V || a1V == a1G('0x9')) || this[a1G('0xa')](a1V);
        }
        this[a1G('0xb')] = this[a1G('0xa')](a1G('0xc')), this[a1G('0xb')]['hide']();
      }
      this[a1G('0xd')]();
    }
    this['activePoint'](a1S);
  }

  [a1G('0xe')](a1W) {
    this[a1G('0xf')][a1G('0x10')](a1X => {
      a1X[a1G('0x11')] == a1W ? a1X['active']() : a1X[a1G('0x12')]();
    }), this[a1G('0xb')][a1G('0x5')](), this[a1G('0x13')]();
  }

  ['setIntersect'](a1Y) {
    if (null != (this[a1G('0x14')] = a1Y)) {
      var a1Z = a1Y['rate'], a1Y = a1Y[a1G('0x15')];
      const a21 = this[a1G('0x7')];
      a1Y = a21[a1G('0x16')](a1Z, a1Y);
      const a22 = a21[a1G('0x17')]();
      a1Y = a22[a1G('0x18')](a1Y);
      this['ctrlIntersectNode'][a1G('0x19')](a1Y['x'], a1Y['y']), this[a1G('0xb')][a1G('0x13')]();
    } else this[a1G('0xb')]['hide']();
  }

  [a1G('0xd')]() {
    if (null != this[a1G('0x7')]) {
      const a23 = this['target'], a24 = a23['getStageTransform']();
      var a25, a26 = this[a1G('0xf')];
      for (let a27 = 0x0; a27 < a26[a1G('0x8')]; a27++) {
        const a28 = a26[a27];
        a28[a1G('0x11')] == a1G('0xc') || (a25 = a23[a1G('0x1a')](a28['name']), a25 = a24['point'](a25), a28[a1G('0x19')](a25['x'], a25['y']));
      }
    } else this['hide']();
  }

  ['createAnchorPoint'](a29) {
    const a2a = new a1g(this);
    return a2a[a1G('0x11')] = a29, (a2a['anchorBox'] = this)['addChild'](a2a), a2a;
  }

  ['getAnchorPointBy'](a2b, a2c) {
    var a2d = this[a1G('0xf')];
    for (let a2b = 0x0; a2b < a2d[a1G('0x8')]; a2b++) if (a2d[a2b]['name'] == a2c) return a2d[a2b];
    return null;
  }

  [a1G('0x1b')](a2f) {
    const a2g = this['editor'][a1G('0x1c')], a2h = this[a1G('0x0')]['currentLayer'];
    let a2i = r0(a2g[a1G('0x1d')](), a2f = null == a2f ? this[a1G('0x1e')] : a2f, this[a1G('0x1f')]);
    return null != a2i && (a2f = a2h['stageToLocalXY'](a2i['x'], a2i['y']), a2i['x'] = a2f['x'], a2i['y'] = a2f['y']), a2i;
  }

  [a1G('0x20')](a2j) {
    let a2k = this['editor'][a1G('0x1c')];
    return r0(a2k[a1G('0x1d')](), a2j, this[a1G('0x1f')]);
  }

  [a1G('0x21')](a2l, a2m, a2n) {
    const a2o = this[a1G('0x0')];
    const a2p = a2o[a1G('0x1c')];
    var a2q = a2p[a1G('0x1d')]();
    const a2r = a2o[a1G('0x22')];
    var a2s = a2o[a1G('0x23')][a1G('0x24')]('Control');
    let a2t = null, a2u;
    var a2v = a2r['displayList'][a1G('0x25')](a2m => a2m !== a2l && a2m !== a2n && a2m[a1G('0x26')] && a2m[a1G('0x27')]);
    let a2x, a2y;
    a2q = ra(a2q, a2v, this[a1G('0x1')]);
    return null != a2q ? (a2x = a2q[a1G('0x28')], a2y = a2q['anchorName'], a2u = new y5(a2x, a2y), this['setTarget'](a2x, a2y)) : !a2s || null != (a2v = this[a1G('0x20')](a2v)) && (a2x = a2v[a1G('0x28')], this[a1G('0x6')](a2x, a2y), a2u = new y1(a2x, a2v[a1G('0x29')], a2v[a1G('0x15')]), this[a1G('0x2a')](a2v)), null != a2x && a2x !== a2l && a2x !== a2n && (a2t = a2u), a2t;
  }
}

var a2z = ['undoFn', 'redoFn', 'undo', 'editor', 'undoHistory', 'push', 'redoHistory', 'length', 'pop', 'redo', 'undoAll', 'update', 'redoAll', '添加图元', '辅助粘贴', '尺寸修改', '位置改变', '连线调整', 'type'];
!function (a2A) {
  !function (a2B) {
    for (; --a2B;) a2A['push'](a2A['shift']());
  }(0x12b);
}(a2z);
var a2C = function (a2D, a2E) {
  return a2z[a2D = +a2D];
};
const a2F = {
  'cut': 'cut',
  'copy': 'copy',
  'delete': '删除',
  'modify': '修改',
  'addChild': a2C('0x0'),
  'pasteCopy': a2C('0x1'),
  'pasteCut': '剪切粘贴',
  'resize': a2C('0x2'),
  'rotate': '旋转',
  'dragNodeOrLink': a2C('0x3'),
  'modifyLink': a2C('0x4')
};

class a2G {
  constructor(a2H, a2I, a2J) {
    this[a2C('0x5')] = a2H, this[a2C('0x6')] = a2J, this['redoFn'] = a2I;
  }

  ['redo']() {
    this[a2C('0x7')]();
  }

  [a2C('0x8')]() {
    this[a2C('0x6')]();
  }
}

class a2K extends cz {
  constructor(a2L) {
    super(), this[a2C('0x9')] = a2L, this[a2C('0xa')] = [], this['redoHistory'] = [];
  }

  [a2C('0xb')](a2M, a2N, a2O) {
    let a2P = new a2G(a2M, a2N, a2O);
    return a2P[a2C('0x9')] = this[a2C('0x9')], this[a2C('0xc')][a2C('0xd')] = 0x0, this['undoHistory'][a2C('0xb')](a2P), a2P;
  }

  [a2C('0x8')]() {
    if (0x0 == this[a2C('0xa')][a2C('0xd')]) return null;
    let a2Q = this[a2C('0xa')][a2C('0xe')]();
    return a2Q['undo'](), this[a2C('0xc')][a2C('0xb')](a2Q), a2Q;
  }

  [a2C('0xf')]() {
    if (0x0 == this[a2C('0xc')]['length']) return null;
    let a2R = this[a2C('0xc')]['pop']();
    return a2R[a2C('0xf')](), this[a2C('0xa')][a2C('0xb')](a2R), a2R;
  }

  [a2C('0x10')](a2S) {
    let a2T = this;
    null == a2S && (a2S = 0x1f4), function x() {
      var a2U = a2T['undo']();
      a2T['editor'][a2C('0x11')](), null != a2U && setTimeout(x, a2S);
    }();
  }

  [a2C('0x12')](a2V) {
    let a2W = this;
    null == a2V && (a2V = 0x1f4), function x() {
      a2W[a2C('0x9')][a2C('0x11')](), null != a2W[a2C('0xf')]() && setTimeout(x, a2V);
    }();
  }
}

var a2X = ['getType', 'source', 'take', 'copyPut', 'type', 'copy', 'cut', 'takeSource'];
!function (a2Y) {
  !function (a2Z) {
    for (; --a2Z;) a2Y['push'](a2Y['shift']());
  }(0x1ca);
}(a2X);
var a30 = function (a31, a32) {
  return a2X[a31 = +a31];
};

class a33 {
  constructor() {
    this['type'] = null, this[a30('0x0')] = null, this[a30('0x1')] = 0x0;
  }

  [a30('0x2')](a34) {
    this['take'] = 0x0, this[a30('0x3')] = a30('0x4'), this[a30('0x0')] = a34;
  }

  ['cutPut'](a35) {
    this[a30('0x1')] = -0x1, this[a30('0x3')] = a30('0x5'), this['source'] = a35;
  }

  [a30('0x6')]() {
    return this[a30('0x1')]++, this[a30('0x0')];
  }

  ['isFirstCutPaste']() {
    return this['type'] == a2F[a30('0x5')] && 0x0 == this[a30('0x1')];
  }

  [a30('0x7')]() {
    return this[a30('0x3')];
  }
}

var a36 = ['jtopo_input_textfield', 'appendChild', 'onkeydown', 'textarea', 'isNode', 'width', 'height', 'setSize', 'isLink', 'setValue', 'text', 'show', 'value', 'style', 'display', 'focus', 'max', 'left', 'top', 'editor', 'enterTextInputMode', 'leaveTextInputMode', 'none', 'key', 'Enter', 'ctrlKey', 'metaKey', 'pickedObject', 'update', 'hide', 'stage', 'createElement', 'classList', 'add'];
!function (a37) {
  !function (a38) {
    for (; --a38;) a37['push'](a37['shift']());
  }(0xa7);
}(a36);
var a39 = function (a3a, a3b) {
  return a36[a3a = +a3a];
};

class a3c {
  constructor(a3d) {
    this['editor'] = a3d, this[a39('0x0')] = a3d[a39('0x0')];
    let a3e = document[a39('0x1')]('textarea');
    a3e[a39('0x2')][a39('0x3')](a39('0x4')), this[a39('0x0')]['layersContainer'][a39('0x5')](a3e);
    let a3f = this;
    a3e[a39('0x6')] = function (a3d) {
      a3f[a39('0x6')](a3d);
    }, this[a39('0x7')] = a3e;
  }

  ['attachTo'](a3h, a3i) {
    let a3j = {'x': a3i['x'] - 0x32, 'y': a3i['y']};
    if (a3h[a39('0x8')]) {
      var a3k = a3h['getPosition'](c6['lt']);
      a3j = a3h['toStageXY'](a3k['x'], a3k['y']);
      a3i = rs(a3h[a39('0x9')], 0x3c, 0x64), a3k = rs(a3h[a39('0xa')], 0x3c, 0x64);
      this[a39('0xb')](a3i, a3k);
    } else if (a3h[a39('0xc')]) return;
    this[a39('0xd')](a3h[a39('0xe')]), this[a39('0xf')](a3j['x'], a3j['y']);
  }

  [a39('0xd')](a3l) {
    this[a39('0x7')][a39('0x10')] = a3l;
  }

  [a39('0xb')](a3m, a3n) {
    this[a39('0x7')][a39('0x11')][a39('0x9')] = a3m + 'px', this[a39('0x7')][a39('0x11')][a39('0xa')] = a3n + 'px';
  }

  [a39('0xf')](a3o, a3p) {
    this[a39('0x7')]['style'][a39('0x12')] = 'block', this[a39('0x7')][a39('0x13')](), null != a3o && (a3o = Math['max'](0x0, a3o), a3p = Math[a39('0x14')](0x0, a3p), this[a39('0x7')][a39('0x11')][a39('0x15')] = a3o, this[a39('0x7')][a39('0x11')][a39('0x16')] = a3p), this[a39('0x17')][a39('0x18')]();
  }

  ['hide']() {
    this[a39('0x17')][a39('0x19')](), this['textarea'][a39('0x11')]['display'] = a39('0x1a');
  }

  [a39('0x6')](a3q) {
    let a3r = this[a39('0x7')];
    if (a3q[a39('0x1b')] == a39('0x1c') && (a3q[a39('0x1d')] || a3q[a39('0x1e')])) {
      let a3q = stage[a39('0x1f')];
      null != a3q && (a3q[a39('0xe')] = a3r[a39('0x10')], a3r[a39('0x11')][a39('0x12')] = a39('0x1a'), this[a39('0x17')][a39('0x20')](), this[a39('0x21')]());
    }
  }
}

var a3t = ['reverse', 'length', 'getItem', 'setItem', 'now', 'keys', 'sort', 'getAllVersions'];
!function (a3u) {
  !function (a3v) {
    for (; --a3v;) a3u['push'](a3u['shift']());
  }(0x16b);
}(a3t);
var a3w = function (a3x, a3y) {
  return a3t[a3x = +a3x];
};
const a3z = {
  'getItem': function (a3A) {
    return localStorage[a3w('0x0')](a3A);
  }, 'setItem': function (a3B, a3C) {
    localStorage[a3w('0x1')](a3B, a3C);
  }, 'saveWithVersion'(a3D, a3E) {
    a3D += Date[a3w('0x2')](), this[a3w('0x1')](a3D, a3E);
  }, 'getAllVersions'(a3F) {
    return Object[a3w('0x3')](localStorage)['filter'](a3G => a3G['startsWith'](a3F))[a3w('0x4')]();
  }, 'getLastVersion'(a3H, a3I) {
    a3H = this[a3w('0x5')](a3H)[a3w('0x6')]();
    if (0x0 != a3H['length']) {
      a3I = a3H[a3I = (a3I = null == a3I ? 0x0 : a3I) + 0x1 >= a3H['length'] ? a3H[a3w('0x7')] - 0x1 : a3I];
      return this[a3w('0x0')](a3I);
    }
  }
};
var a3J = ['stage', 'selectedGroup', 'objects', 'showOpTooltip', '编组-', 'filter', 'parent', 'length', '选编组-', 'removeAll', 'addAll', 'pickedObject', 'centerBy', 'bindKey', 'preventDefault', 'KeysConfig', 'CreateGroup'];
!function (a3K) {
  !function (a3L) {
    for (; --a3L;) a3K['push'](a3K['shift']());
  }(0x1ca);
}(a3J);
var a3M = function (a3N, a3O) {
  return a3J[a3N = +a3N];
};

function a3P(a3Q, a3R, a3S) {
  const a3T = a3Q['keyboard'];
  var a3U = a3Q[a3M('0x0')][a3M('0x1')];
  let a3V = {};

  function a3W(a3T) {
    let a3Y = a3V[a3T];
    if (a3Y) return a3Y = a3Y[a3M('0x7')](a3T => null !== a3T[a3M('0x8')]), 0x0 < a3Y[a3M('0x9')] && (a3Q[a3M('0x5')](a3M('0xa') + a3T), a3Q['stage'][a3M('0x3')][a3M('0xb')]()[a3M('0xc')](a3Y), a3Q[a3M('0x2')][a3M('0xd')] = a3Y[0x0]), a3Y;
  }

  for (let a40 = 0x0; a40 <= 0x9; a40++) a3T[a3M('0xf')](a3U + '+' + a40, function (a3T) {
    a3T[a3M('0x10')](), a3T = a40, a3V[a3T] = a3Q[a3M('0x2')][a3M('0x3')][a3M('0x4')]['slice'](), a3Q[a3M('0x5')](a3M('0x6') + a3T);
  }), a3T[a3M('0xf')]('' + a40, function (a3T) {
    a3T[a3M('0x10')](), a3W(a40);
  }), a3T['bindKey'](a40 + '+' + a40, function (a3T) {
    a3T[a3M('0x10')](), a3W(a40) && a3S[a3M('0xe')](a3R[a3M('0x3')][a3M('0x4')]);
  });
}

var a44 = ['Copy_style', '复制样式', 'styleCopyHandler', 'paste_Style', 'stylePasteHandler', 'Move_left', 'isNode', 'Move_right', 'Move_down', 'Layout_tree', 'doTreeLayout', 'Layout_grid', 'doGridLayout', 'keydown', 'update', 'Shift', 'currentLayer', 'keyboard', 'KeysConfig', 'forEach', 'bindKey', 'deleteHandler', 'cutHandler', 'Copy', 'showOpTooltip', 'Paste', 'pasteHandler', 'Redo', 'redoHandler', 'getAllVisiable', 'Select_invert', 'selectedGroup', 'getNoChildrensObjects', 'select', 'filter', 'notContains', 'Save', 'saveHandler', 'Open'];
!function (a45) {
  !function (a46) {
    for (; --a46;) a45['push'](a45['shift']());
  }(0x148);
}(a44);
var a47 = function (a48, a49) {
  return a44[a48 = +a48];
};

function a4a(a4b) {
  const a4c = a4b['stage'], a4d = a4b[a47('0x1')];
  let a4e = a4b[a47('0x2')];
  var a4f = a4b[a47('0x3')];

  function a4g(a4f, a4g, a4b) {
    a4f[a47('0x4')](a4f => {
      a4e[a47('0x5')](a4f, function (a4f) {
        a4g(a4f);
      }, a4b);
    });
  }

  a4g(a4f['Delete'], a4f => a4b[a47('0x6')](a4f)), a4g(a4f['Cut'], a4f => a4b[a47('0x7')](a4f)), a4g(a4f[a47('0x8')], a4f => {
    a4b[a47('0x9')]('复制'), a4b['copyHandler'](a4f);
  }), a4g(a4f[a47('0xa')], a4f => a4b[a47('0xb')](a4f)), a4g(a4f['Undo'], a4f => {
    a4b[a47('0x9')]('撤销'), a4b['undoHandler'](a4f);
  }), a4g(a4f[a47('0xc')], a4f => {
    a4b['showOpTooltip']('重做'), a4b[a47('0xd')](a4f);
  }), a4g(a4f['Select_all'], a4f => {
    a4b['showOpTooltip']('全选'), a4c['select'](a4d[a47('0xe')]());
  }), a4g(a4f[a47('0xf')], a4f => {
    a4b[a47('0x9')]('反选');
    let a4g = a4c[a47('0x10')][a47('0x11')]();
    a4c[a47('0x12')](a4d['displayList'][a47('0x13')](a4f => a4g[a47('0x14')](a4f)));
  }), a4g(a4f[a47('0x15')], a4f => {
    a4b[a47('0x9')]('保存'), a4b[a47('0x16')](a4f);
  }, !0x1), a4g(a4f[a47('0x17')], a4f => {
    a4b[a47('0x9')]('打开'), a4b['openLasted'](a4f);
  }, !0x1), a4g(a4f[a47('0x18')], a4f => {
    a4b[a47('0x9')](a47('0x19')), a4b[a47('0x1a')](a4f);
  }, !0x1), a4g(a4f[a47('0x1b')], a4f => {
    a4b[a47('0x9')]('粘贴样式'), a4b[a47('0x1c')](a4f);
  }, !0x1), a4g(a4f[a47('0x1d')], a4f => {
    let a4g = a4c[a47('0x10')][a47('0x11')]()[a47('0x13')](a4f => a4f[a47('0x1e')]);
    a4g['forEach'](a4f => {
      --a4f['x'];
    });
  }), a4g(a4f[a47('0x1f')], a4f => {
    let a4g = a4c[a47('0x10')]['getNoChildrensObjects']()[a47('0x13')](a4f => a4f[a47('0x1e')]);
    a4g['forEach'](a4f => {
      a4f['x'] += 0x1;
    });
  }), a4g(a4f['Move_up'], a4f => {
    let a4g = a4c['selectedGroup']['getNoChildrensObjects']()[a47('0x13')](a4f => a4f[a47('0x1e')]);
    a4g[a47('0x4')](a4f => {
      --a4f['y'];
    });
  }), a4g(a4f[a47('0x20')], a4f => {
    let a4g = a4c[a47('0x10')][a47('0x11')]()[a47('0x13')](a4f => a4f['isNode']);
    a4g[a47('0x4')](a4f => {
      a4f['y'] += 0x1;
    });
  }), a4g(a4f[a47('0x21')], a4f => {
    a4b[a47('0x22')]();
  }), a4g(a4f[a47('0x23')], a4f => {
    a4b[a47('0x24')]();
  }), a3P(a4b, a4c, a4d), a4e['on'](a47('0x25'), function () {
    a4b[a47('0x26')]();
  }), a4e['on']('keyup', function () {
    a4b[a47('0x26')]();
  });
}

a47('0x0');
var a4S = ['isLink', 'addChild', 'isAncestors', 'length', 'getPaintedAABBInLayer', 'isIntersectRect', 'currentLayer', 'getAllVisiable', 'filter', 'visible', 'isNode', 'mouseEnabled', 'isOutOfParent', 'parent'];
!function (a4T) {
  !function (a4U) {
    for (; --a4U;) a4T['push'](a4T['shift']());
  }(0xf5);
}(a4S);
var a4V = function (a4W, a4X) {
  return a4S[a4W = +a4W];
};

function a4Y(a4Z, a50) {
  let a51 = a4Z[a4V('0x0')];
  var a52 = a4Z['currentLayer'][a4V('0x1')]()[a4V('0x2')](a4Z => a4Z[a4V('0x3')] && a4Z[a4V('0x4')] && 0x1 != a4Z['isSelected'] && a4Z[a4V('0x5')]);
  let a54 = a50[a4V('0x2')](a4Z => a4Z[a4V('0x6')]() || a4Z[a4V('0x7')] === a51), a55;
  for (let a4Z = 0x0; a4Z < a54['length']; a4Z++) {
    var a58 = a54[a4Z];
    if (a55 = a5a(a58, a52), null != a55) break;
  }
  return null == a55 && (a55 = a51, a54 = a54[a4V('0x2')](a4Z => a4Z[a4V('0x7')] !== a51)), cf(null == a55[a4V('0x8')], !0x0, a55), {
    'parent': a55,
    'objects': a54
  };
}

function a5a(a5b, a5c) {
  var a5d = a5b['getPaintedAABBInLayer'](),
    a5e = a5c[a4V('0x2')](a5c => a5c !== a5b[a4V('0x7')] && a5c !== a5b && !a5b[a4V('0xa')](a5c));
  for (let a5b = a5e[a4V('0xb')] - 0x1; 0x0 <= a5b; a5b--) {
    const a5h = a5e[a5b];
    let a5c = a5h[a4V('0xc')]();
    if (a5c[a4V('0xd')](a5d)) return a5h;
  }
  return null;
}

var a5j = ['顶部对齐', '底部对齐', 'getBottom', 'stage', 'isNode', 'isAlone', 'length', 'getAABB', '左对齐', 'translateWith', '右对齐', 'getRight'];
!function (a5k) {
  !function (a5l) {
    for (; --a5l;) a5k['push'](a5k['shift']());
  }(0x1cc);
}(a5j);
var a5m = function (a5n, a5o) {
  return a5j[a5n = +a5n];
};

function a5p(a5q, a5r) {
  let a5s = a5r[a5m('0x0')]['selectedGroup']['getNoChildrensObjects']();
  if (a5s = a5s['filter'](a5r => a5r[a5m('0x1')] || a5r[a5m('0x2')]()), 0x0 != a5s[a5m('0x3')]) {
    let a5u = a5s[a5m('0x4')](!0x1, co);
    for (let a5v = 0x0; a5v < a5s[a5m('0x3')]; a5v++) {
      let a5r = a5s[a5v], a5x = a5r[a5m('0x4')](!0x1, co);
      a5q == a5m('0x5') ? a5r[a5m('0x6')](a5u['x'] - a5x['x'], 0x0) : a5q == a5m('0x7') ? a5r[a5m('0x6')](a5u[a5m('0x8')]() - a5x[a5m('0x8')](), 0x0) : a5q == a5m('0x9') ? a5r[a5m('0x6')](0x0, a5u['y'] - a5x['y']) : a5q == a5m('0xa') && a5r['translateWith'](0x0, a5u[a5m('0xb')]() - a5x[a5m('0xb')]());
    }
  }
}

var a5y = ['顶部对齐', '底部对齐', '左右等距', '上下等距', 'parent', 'updatezIndex', 'update', 'stage', 'select', 'cutHandler', 'copyHandler', 'pasteHandler', '上移一层', 'zIndex', '移至顶部', '移至底部', 'alignHandler', '左对齐', '右对齐'];
!function (a5z) {
  !function (a5A) {
    for (; --a5A;) a5z['push'](a5z['shift']());
  }(0x1e3);
}(a5y);
var a5B = function (a5C, a5D) {
  return a5y[a5C = +a5C];
};
let a5E = '\x0a<div\x20class=\x22header\x22>编辑</div>\x0a<a>剪切</a>\x0a<a>复制</a>\x0a<a>粘贴</a>\x0a<a>删除</a>\x20\x0a<hr></hr>\x0a<div\x20class=\x22header\x22>前后</div>\x0a<a>上移一层</a>\x0a<a>下移一层</a>\x0a<a>移至顶部</a>\x0a<a>移至底部</a>\x0a<div\x20class=\x22header\x22>对齐</div>\x0a<a>左对齐</a>\x0a<a>右对齐</a>\x0a<a>顶部对齐</a>\x0a<a>底部对齐</a>\x0a';

function a5F(a5G) {
  const a5H = a5G[a5B('0x0')];
  let a5I = new Ut(a5H, a5E);
  return a5I['addEventListener'](a5B('0x1'), function (a5I) {
    a5I = a5I['item'];
    let a5K = a5H['pickedObject'];
    '剪切' == a5I ? a5G[a5B('0x2')]() : '复制' == a5I ? a5G[a5B('0x3')]() : '粘贴' == a5I ? a5G[a5B('0x4')](!0x0) : '删除' == a5I && a5G['deleteHandler'](), null != a5K && (a5I == a5B('0x5') ? a5K[a5B('0x6')]++ : '下移一层' == a5I ? a5K[a5B('0x6')]-- : a5I == a5B('0x7') ? a5K[a5B('0x6')] = 0x3e8 : a5I == a5B('0x8') ? a5K[a5B('0x6')] = 0x0 : '左对齐' == a5I ? a5G[a5B('0x9')](a5B('0xa')) : a5I == a5B('0xb') ? a5G[a5B('0x9')]('右对齐') : '顶部对齐' == a5I ? a5G[a5B('0x9')](a5B('0xc')) : a5I == a5B('0xd') ? a5G[a5B('0x9')](a5B('0xd')) : '左右等距' == a5I ? a5G[a5B('0x9')](a5B('0xe')) : a5I == a5B('0xf') && a5G[a5B('0x9')](a5B('0xf')), a5K[a5B('0x6')] < 0x0 ? a5K['zIndex'] = 0x0 : 0x3e8 < a5K['zIndex'] && (a5K[a5B('0x6')] = 0x3e8), a5K[a5B('0x10')][a5B('0x11')](), a5G[a5B('0x12')]());
  }), a5I;
}

var a5L = ['show', 'mouseEnabled', 'hide', 'guildlineW', 'handlerLayer', 'addChild', 'css', 'guildlineS', 'stage', 'setBegin', 'setEnd', 'width', 'height'];
!function (a5M) {
  !function (a5N) {
    for (; --a5N;) a5M['push'](a5M['shift']());
  }(0x1a2);
}(a5L);
var a5O = function (a5P, a5Q) {
  return a5L[a5P = +a5P];
};

function a5R(a5S) {
  const a5T = new yU();
  a5T[a5O('0x0')] = !0x1, a5T['css']({
    'strokeStyle': '#c8c8c8',
    'lineDash': [0x1, 0x1]
  }), a5T[a5O('0x1')](), a5S[a5O('0x2')] = a5T, a5S[a5O('0x3')][a5O('0x4')](a5S[a5O('0x2')]);
  const a5U = new yU();
  a5T['mouseEnabled'] = !0x1, a5U[a5O('0x5')]({
    'strokeStyle': '#c8c8c8',
    'lineDash': [0x1, 0x1]
  }), a5U[a5O('0x1')](), a5S[a5O('0x6')] = a5U, a5S[a5O('0x3')][a5O('0x4')](a5S[a5O('0x6')]);
}

function a5V(a5W, a5X) {
  var a5Y = a5W[a5O('0x7')];
  const a5Z = a5W['guildlineW'], a60 = a5W[a5O('0x6')];
  null == a5X && (a5X = {'x': details['x'], 'y': details['y']}), a5Z[a5O('0x8')]({
    'x': 0x0,
    'y': a5X['y']
  }), a5Z[a5O('0x9')]({'x': a5Y[a5O('0xa')], 'y': a5X['y']}), a5Z['show'](), a60[a5O('0x8')]({
    'x': a5X['x'],
    'y': 0x0
  }), a60[a5O('0x9')]({'x': a5X['x'], 'y': a5Y[a5O('0xb')]}), a60[a5O('0xc')]();
}

function a61(a62) {
  a62[a5O('0x2')][a5O('0x1')](), a62[a5O('0x6')][a5O('0x1')]();
}

var a63 = ['hide', 'stage', 'width', 'height', 'rulerW', 'setBegin', 'setEnd', 'rulerS', 'mouseEnabled', 'css', 'gray', 'top', 'left', 'handlerLayer', 'addChild', '---', 'rotateTo', 'middle', '___', 'origin', 'show', 'rolerS', 'rolerW'];
!function (a64) {
  !function (a65) {
    for (; --a65;) a64['push'](a64['shift']());
  }(0x157);
}(a63);
var a66 = function (a67, a68) {
  return a63[a67 = +a67];
};

function a69(a6a, a6b) {
  a6a['rolerW'][a66('0x0')](), a6a[a66('0x1')][a66('0x0')]();
}

function a6c(a6d, a6e) {
  a6d[a66('0x2')][a66('0x3')](), a6d[a66('0x1')]['hide']();
}

var a6f = ['endArrow', 'resizeTo', 'width', 'height', 'className', 'isNode', 'isLink', 'roundRadius', 'log', 'style', 'beginArrow', 'visible'];
!function (a6g) {
  !function (a6h) {
    for (; --a6h;) a6g['push'](a6g['shift']());
  }(0x185);
}(a6f);
var a6i = function (a6j, a6k) {
  return a6f[a6j = +a6j];
};

function a6l(a6m, a6n) {
  a6m !== a6n && a6m[a6i('0x0')] === a6n[a6i('0x0')] && (a6m['isNode'] && a6n[a6i('0x1')] || a6m[a6i('0x2')] && a6n[a6i('0x2')]) && (a6n[a6i('0x1')] && (a6m[a6i('0x3')] = a6n['roundRadius']), console[a6i('0x4')](a6n[a6i('0x5')]), a6m['css'](a6n['style']), a6m['isLink'] && (a6m[a6i('0x6')]['visible'] = a6n[a6i('0x6')][a6i('0x7')], a6m[a6i('0x8')][a6i('0x7')] = a6n[a6i('0x8')][a6i('0x7')], a6m[a6i('0x6')][a6i('0x9')](a6n[a6i('0x6')][a6i('0xa')], a6n['beginArrow'][a6i('0xb')]), a6m[a6i('0x8')]['resizeTo'](a6n['endArrow'][a6i('0xa')], a6n['endArrow'][a6i('0xb')])));
}

var a6o = ['selectedGroup', 'cutPut', 'record', 'forEach', 'removeChild', 'recordEnd', 'pickedObject', 'hideCtrlBox', 'clearTarget', 'takeSource', 'currentLayer', 'isFirstCutPaste', 'getType', 'stageToLocalXY', 'mouseX', 'addChild', 'inLinks', 'setEnd', 'getEndPoint', 'outLinks', 'setBegin', 'getBeginPoint', 'afterDeleteHandler', 'stage', 'getNoChildrensObjects', 'length', 'map', 'parent', 'clipBoard', 'copyPut'];
!function (a6p) {
  !function (a6q) {
    for (; --a6q;) a6p['push'](a6p['shift']());
  }(0xcc);
}(a6o);
var a6r = function (a6s, a6t) {
  return a6o[a6s = +a6s];
};

function a6u(a6v) {
  let a6w = a6v[a6r('0x0')], a6x = new b8()['concat'](a6w['selectedGroup'][a6r('0x1')]());
  var a6y;
  0x0 != a6x[a6r('0x2')] && (a6y = a6x[a6r('0x3')](a6v => a6v[a6r('0x4')]), a6v[a6r('0x5')][a6r('0x6')]([a6x, a6y]));
}

function a6A(a6B) {
  let a6C = a6B[a6r('0x0')], a6D = new b8()['concat'](a6C[a6r('0x7')][a6r('0x1')]());
  if (0x0 != a6D[a6r('0x2')]) {
    let a6E = a6D[a6r('0x3')](a6B => a6B[a6r('0x4')]);
    a6B[a6r('0x5')][a6r('0x8')]([a6D, a6E]), a6B[a6r('0x9')]('剪切', a6D), a6D[a6r('0xa')]((a6B, a6C) => {
      let a6D = a6E[a6C];
      a6D[a6r('0xb')](a6B);
    }), a6B[a6r('0xc')]('剪切'), a6C[a6r('0xd')] = null, a6B[a6r('0xe')](), a6B['anchorBox'][a6r('0xf')]();
  }
}

function a6J(a6K) {
  var a6L = a6K[a6r('0x5')][a6r('0x10')]();
  if (null != a6L) {
    let a6M = a6K[a6r('0x11')];
    var a6N = a6K[a6r('0x0')], a6O = a6K[a6r('0x5')][a6r('0x12')]();
    a6K[a6r('0x5')][a6r('0x13')]();
    let a6P = a6L[0x0], a6Q = a6L[0x1], a6R = a6P['getAABB'](!0x1, co);
    a6L = a6R['getCenter'](), a6N = a6M[a6r('0x14')](a6N[a6r('0x15')], a6N['mouseY']);
    let a6S = a6N['x'] - a6L['x'], a6T = a6N['y'] - a6L['y'];
    a6K[a6r('0x9')]('粘贴');
    let a6U = a6P;
    0x1 != a6O && (a6O = jE(a6P), a6U = h2(a6O)), a6U[a6r('0xa')]((a6M, a6P) => {
      a6M['translateWith'](a6S, a6T);
    }), a6U[a6r('0xa')]((a6M, a6P) => {
      let a6R = a6Q[a6P];
      a6R[a6r('0x16')](a6M);
    }), a6K['recordEnd']('粘贴');
  }
}

function a70(a71) {
  let a72 = a71[a6r('0x17')];
  null != a72 && a72[a6r('0xa')](a71 => {
    null != a71[a6r('0x4')] && a71[a6r('0x18')](a71[a6r('0x19')]());
  });
  let a74 = a71[a6r('0x1a')];
  null != a74 && a74[a6r('0xa')](a71 => {
    null != a71[a6r('0x4')] && a71[a6r('0x1b')](a71[a6r('0x1c')]());
  });
}

function a76(a77) {
  let a78 = a77[a6r('0x0')], a79 = a78['selectedGroup']['getNoChildrensObjects']();
  a79 && (a78['selectedGroup']['removeAll'](), a77[a6r('0x9')]('删除', a79), a79[a6r('0xa')](function (a78) {
    a70(a78), a78[a6r('0x4')][a6r('0xb')](a78), a77[a6r('0x1d')](a78);
  }), a77[a6r('0xc')]('删除'));
}

var a7b = ['removeChild', 'update', 'defaultPrevented', 'dispatchEvent', 'mousedown', 'popupMenu', 'hide', 'mouseup', 'button', 'details', 'isDragEnd', 'groupdrag', 'selectedGroupDragHandler', 'selectedGroup', 'getNoChildrensObjects', 'groupdragend', 'selectedGroupDragEndHandler', 'stage', 'handlerLayer', 'nodeCtrlBox', 'activeBox', 'anchorBox', 'modeChange', 'newMode', 'addChild'];
!function (a7c) {
  !function (a7d) {
    for (; --a7d;) a7c['push'](a7c['shift']());
  }(0x125);
}(a7b);
var a7e = function (a7f, a7g) {
  return a7b[a7f = +a7f];
};

function a7h(a7i) {
  let a7j = a7i[a7e('0x0')], a7k = a7i[a7e('0x1')], a7l = a7i[a7e('0x2')], a7m = a7i['linkCtrlBox'],
    a7n = a7i[a7e('0x3')], a7o = a7i[a7e('0x4')];
  a7j['on'](cp[a7e('0x5')], function (a7p) {
    a7p[a7e('0x6')] == c3['edit'] ? (a7k['addChild'](a7l), a7k[a7e('0x7')](a7m), a7k['addChild'](a7o), a7k[a7e('0x7')](a7n)) : (a7k[a7e('0x8')](a7l), a7k[a7e('0x8')](a7m), a7k[a7e('0x8')](a7o), a7k[a7e('0x8')](a7n)), a7j[a7e('0x9')]();
  }), a7j['on']('drop', function (a7q) {
    a7q[a7e('0xa')] || a7i[a7e('0xb')](a7q);
  }), a7j['on'](a7e('0xc'), function (a7r) {
    a7r[a7e('0xa')] || a7i[a7e('0xd')][a7e('0xe')]();
  }), a7j['on'](a7e('0xf'), function (a7s) {
    0x2 == a7s[a7e('0x10')] ? a7s[a7e('0x11')][a7e('0x12')] || a7i[a7e('0xd')]['showAt'](a7s['details']['x'], a7s['details']['y']) : a7i['popupMenu'][a7e('0xe')]();
  }), a7j['selectedGroup']['on'](cp[a7e('0x13')], function (a7t) {
    a7i[a7e('0x14')](a7t, a7j[a7e('0x15')][a7e('0x16')]());
  }), a7j['selectedGroup']['on'](cp[a7e('0x17')], function (a7u) {
    a7i[a7e('0x18')](a7u, a7j[a7e('0x15')][a7e('0x16')]());
  });
}

var a7v = ['getStageTransform', 'point', 'getPosition', 'center', 'atan2', 'rotate', 'resizeTo', 'rotateTo', 'translateCenterTo', 'zIndex', 'NodeCtrlBox', 'editor', '3px\x20solid\x20orange', 'currObject', 'attachTo', 'editable', 'hide', 'isLink', 'updateSize', 'show', 'viewClone'];
!function (a7w) {
  !function (a7x) {
    for (; --a7x;) a7w['push'](a7w['shift']());
  }(0xc7);
}(a7v);
var a7y = function (a7z, a7A) {
  return a7v[a7z = +a7z];
};

class a7B extends so {
  constructor(a7C, a7D, a7E, a7F, a7G) {
    super(null, a7D, a7E, a7F, a7G), this[a7y('0x0')] = c9[a7y('0x1')], this[a7y('0x2')] = a7C, this['css']({
      'border': a7y('0x3'),
      'lineDash': [0x5, 0x3]
    }), this['mouseEnabled'] = !0x1, this[a7y('0x4')];
  }

  [a7y('0x5')](a7H) {
    if (null == a7H || 0x1 != a7H[a7y('0x6')]) return this['currObject'] = null, void this[a7y('0x7')]();
    if (a7H[a7y('0x8')]) throw new Error('attach\x20not\x20Node');
    this[a7y('0x4')] = a7H, this[a7y('0x9')](), this[a7y('0xa')]();
  }

  ['updateSize']() {
    null != this['currObject'] && this[a7y('0xb')](this[a7y('0x4')]);
  }

  ['viewClone'](a7I) {
    let a7J = a7I[a7y('0xc')]();
    var a7K = a7J[a7y('0xd')](a7I[a7y('0xe')](c6[a7y('0xf')])), a7L = a7J['point'](a7I['getPosition'](c6['rm'])),
      a7M = Math[a7y('0x10')](a7L['y'] - a7K['y'], a7L['x'] - a7K['x']);
    a7J[a7y('0x11')](-a7M);
    var a7Q = a7J[a7y('0xd')](a7I[a7y('0xe')](c6[a7y('0xf')])), a7L = a7J['point'](a7I[a7y('0xe')](c6['rb'])),
      a7I = 0x2 * (a7L['x'] - a7Q['x']), a7Q = 0x2 * (a7L['y'] - a7Q['y']);
    this[a7y('0x12')](0x8 + a7I, 0x8 + a7Q), this[a7y('0x13')](a7M), this[a7y('0x14')](a7K['x'], a7K['y']);
  }
}

var a7R = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'toUpperCase', 'MAC\x20OS', 'Meta', 'Control', 'Shift', 'Delete', '+shift+z', 'Shift+c'];
!function (a7S) {
  !function (a7T) {
    for (; --a7T;) a7S['push'](a7S['shift']());
  }(0x164);
}(a7R);
var a7U = function (a7V, a7W) {
  return a7R[a7V = +a7V];
};
const a7X = -0x1 != navigator['userAgent'][a7U('0x0')]()['indexOf'](a7U('0x1')), a7Y = a7X ? a7U('0x2') : a7U('0x3'),
  a7Z = {
    'CtrlOrCmd': a7Y,
    'CreateGroup': a7Y,
    'DropTo_leader': a7U('0x4'),
    'Delete': [a7U('0x5'), 'Meta+Backspace'],
    'Select_all': [a7Y + '+a'],
    'Select_invert': [a7Y + '+i'],
    'Cut': [a7Y + '+x'],
    'Copy': [a7Y + '+c'],
    'Paste': [a7Y + '+v'],
    'Save': [a7Y + '+s'],
    'Open': [a7Y + '+o'],
    'Undo': [a7Y + '+z'],
    'Redo': [a7Y + a7U('0x6')],
    'Copy_style': [a7U('0x7')],
    'paste_Style': ['Shift+v'],
    'Move_up': [a7U('0x8')],
    'Move_down': [a7U('0x9')],
    'Move_left': [a7U('0xa')],
    'Move_right': ['ArrowRight'],
    'Layout_tree': ['t'],
    'Layout_grid': ['g']
  };
var a80 = ['link'];
!function (a81) {
  !function (a82) {
    for (; --a82;) a81['push'](a81['shift']());
  }(0xd2);
}(a80);
var a83 = function (a84, a85) {
  return a80[a84 = +a84];
};

class a86 {
  constructor(a87, a88, a89) {
    this['from'] = a87, this['to'] = a88, this[a83('0x0')] = a89;
  }
}

var a8a = ['allObjects', 'map', 'object', 'indexData', 'index', 'maxDeep', 'children', 'push', 'length', 'getRect', 'reduce', 'union', 'forEach', 'getCenter', 'translateWith', 'translateTo', 'getLeafs', 'root', 'descendants', 'flatten', 'allVirtualNodes', 'concat'];
!function (a8b) {
  !function (a8c) {
    for (; --a8c;) a8b['push'](a8b['shift']());
  }(0x19e);
}(a8a);
var a8d = function (a8e, a8f) {
  return a8a[a8e = +a8e];
};

class a8g {
  constructor(a8h) {
    this[a8d('0x0')] = a8h, this[a8d('0x1')] = a8h[a8d('0x2')](), this[a8d('0x3')] = [a8h][a8d('0x4')](this[a8d('0x1')]), this[a8d('0x5')] = this[a8d('0x3')][a8d('0x6')](a8h => a8h[a8d('0x7')]), this[a8d('0x8')] = {}, this['maxDeep'] = 0x0, this[a8d('0x9')]();
  }

  ['index']() {
    let a8j = new b8();
    const a8k = this;
    !function x(a8l, a8m) {
      a8k[a8d('0xa')] < a8m && (a8k[a8d('0xa')] = a8m);
      var a8n = a8l[a8d('0xb')];
      let a8o = a8j[a8m];
      null == a8o && (a8o = [], a8j[a8m] = a8o), a8o[a8d('0xc')](a8l);
      for (var a8p = 0x0; a8p < a8n[a8d('0xd')]; a8p++) x(a8n[a8p], a8m + 0x1);
    }(this[a8d('0x0')], 0x0), this[a8d('0x8')] = a8j;
  }

  [a8d('0xe')]() {
    const a8q = this[a8d('0x0')][a8d('0x2')]();
    return a8q[a8d('0xf')]((a8q, a8s) => a8q['getRect']()[a8d('0x10')](a8s['getRect']));
  }

  ['centerTo'](a8t, a8u) {
    const a8v = this['allVirtualNodes'];
    let a8w = this[a8d('0x0')][a8d('0xe')]();
    a8v[a8d('0x11')](a8t => {
      a8w = a8w[a8d('0x10')](a8t[a8d('0xe')]());
    });
    var a8y = a8w[a8d('0x12')]();
    let a8z = a8t - a8y['x'], a8A = a8u - a8y['y'];
    return a8v[a8d('0x11')](a8t => {
      a8t[a8d('0x13')](a8z, a8A);
    }), this;
  }

  [a8d('0x14')](a8C, a8D) {
    const a8E = this['allVirtualNodes'];
    let a8F = this['root'][a8d('0xe')]();
    a8E[a8d('0x11')](a8C => {
      a8F = a8F[a8d('0x10')](a8C['getRect']());
    });
    let a8H = a8C - a8F['x'], a8I = a8D - a8F['y'];
    return a8E[a8d('0x11')](a8C => {
      a8C['translateWith'](a8H, a8I);
    }), this;
  }

  ['translateWith'](a8K, a8L) {
    const a8M = this[a8d('0x3')];
    return a8M[a8d('0x11')](a8M => {
      a8M[a8d('0x13')](a8K, a8L);
    }), this;
  }

  [a8d('0x15')]() {
    return this['indexData'][this[a8d('0xa')]];
  }
}

var a8O = ['addChild', 'edges', 'toTrees', 'nodes', 'push', 'filter', 'isNode', 'isLink', 'fromObject', 'forEach', 'target', 'end', 'get'];
!function (a8P) {
  !function (a8Q) {
    for (; --a8Q;) a8P['push'](a8P['shift']());
  }(0x6e);
}(a8O);
var a8R = function (a8S, a8T) {
  return a8O[a8S = +a8S];
};

class a8U {
  constructor(a8V) {
    const a8W = a8V[a8R('0x0')](a8V => a8V[a8R('0x1')]), a8X = a8V[a8R('0x0')](a8V => a8V[a8R('0x2')]),
      a8Y = new WeakMap();
    a8V = a8W['map'](a8V => {
      const a8W = new Ni();
      return a8W[a8R('0x3')](a8V), a8Y['set'](a8V, a8W), a8W;
    });
    const a93 = [];
    a8X[a8R('0x4')](a8W => {
      if (a8W['begin'][a8R('0x5')][a8R('0x1')] && a8W[a8R('0x6')][a8R('0x5')][a8R('0x1')]) {
        let a8V = a8Y[a8R('0x7')](a8W['begin']['target']);
        var a8X = a8Y['get'](a8W[a8R('0x6')][a8R('0x5')]);
        null != a8V && null != a8X && (a8V[a8R('0x8')](a8X), a8W = new a86(a8V, a8X, a8W), a93['push'](a8W));
      }
    }), this['nodes'] = a8V, this[a8R('0x9')] = a93;
  }

  [a8R('0xa')]() {
    let a97 = [], a98 = this[a8R('0xb')], a99 = a98[a8R('0x0')](a98 => null == a98['parent']);
    return a99[a8R('0x4')](a98 => {
      a98 = new a8g(a98);
      a97[a8R('0xc')](a98);
    }), a97;
  }
}

var a9c = ['nodeCtrlBox', 'linkCtrlBox', 'anchorBox', 'popupMenu', 'hideCtrlBox', 'pickedObject', 'zoomAfter', 'update', 'mousedrag', 'controlTarget', 'mouseOverTarget', 'AutoFoldLink', 'inputTextfield', 'textInputMode', 'opTooltip', 'domElement', 'style', 'paddingLeft', '20px', 'paddingRight', 'getCurrentLayer', 'defineKeys', 'assign', 'width', 'fadeOut', 'showRuler', 'hideRuler', 'showGuildLine', 'enterTextInputMode', 'leaveTextInputMode', 'saveHandler', 'toJson', 'topo_last_doc', 'log', '保存成功', 'getItem', 'debug', 'removeAllChild', 'undoHandler', 'redoUndoSys', 'undo', 'redoHandler', 'redo', 'copyHandler', 'pasteHandler', 'styleCopyHandler', 'isEmpty', 'copyPut', 'stylePasteHandler', 'takeSource', 'objects', 'getType', 'record', 'forEach', 'recordEnd', '粘贴样式', 'alignHandler', 'hide', 'mousewheelHandler', 'mousedownHandler', 'pickUpChild', 'preventDefault', 'mouseupHandler', 'isDragEnd', '控制点', 'editable', 'isLink', 'attachTo', 'setTarget', 'activeBox', 'currObject', 'getNoChildrensObjects', 'parent', 'changeParent', 'mousedragHandler', 'buttons', 'isKeydown', 'Shift', 'details', 'isDragStart', 'defaultPrevented', 'DropTo_leader', 'setCursor', 'auto', 'mouseoutHandler', 'mouseenterHandler', 'mouseOvertarget\x27s\x20parent\x20is\x20null', 'mousemoveHandler', 'move', 'isNode', 'connectable', 'selectedGroupDragHandler', '对象拖拽', 'length', 'getAABB', 'getCenter', 'isInterrupt', 'recordInterrupt', 'round', 'recordName', 'recordName\x20is\x20null', 'warn', 'record和recordEnd没有成对出现', 'lastLayerState', 'recordName\x20error', 'push', 'mouseenterStageHandler', 'mouseoutStageHandler', 'newLink', 'LinkClassName', 'newLinkProperties', 'css', 'zIndex', 'EditorNewLink', 'addChild', 'afterDeleteHandler', 'addNewInstance', 'addLink', 'object\x20neither\x20Node\x20nor\x20Link', 'visible', 'updatezIndex', 'openJson', 'showTip', 'msg', 'keys', 'setImage', 'getMousePoint', 'className', 'indexOf', 'Node', 'properties', 'Link', 'mode', 'setMode', 'view', 'doTreeLayout', 'getNodesRect', 'filter', 'showOpTooltip', '树形布局', 'down', 'setMargin', 'setTime', 'onLayout', 'toTrees', 'doLayout', 'doGridLayout', 'ceil', 'sqrt', '网格布局', 'setCenter', 'sendKey', 'charAt', 'stage', 'editor', 'currentLayer', 'KeysConfig', 'handlerLayer', 'selectedGroup', 'keyboard', 'clipBoard', 'cssClipBoard'];
!function (a9d) {
  !function (a9e) {
    for (; --a9e;) a9d['push'](a9d['shift']());
  }(0x1dd);
}(a9c);
var a9f = function (a9g, a9h) {
  return a9c[a9g = +a9g];
};
const a9i = null != d3['w'] ? d3['w'][a9f('0x0')](0x3) : '1';

class a9j extends cz {
  constructor(a9k) {
    super(), ((this[a9f('0x1')] = a9k)[a9f('0x2')] = this)[a9f('0x3')] = this['getCurrentLayer'](), this[a9f('0x4')] = a7Z, this[a9f('0x5')] = a9k[a9f('0x5')], this[a9f('0x6')] = this[a9f('0x1')]['selectedGroup'], this['keyboard'] = a9k[a9f('0x7')], this[a9f('0x8')] = new a33(), this[a9f('0x9')] = new a33(), this[a9f('0xa')] = new Zx(this), this[a9f('0xb')] = new a0G(this), this[a9f('0xc')] = new a1J(this), this['activeBox'] = new a7B(this), this[a9f('0xd')] = a5F(this), a7h(this), a4a(this), this[a9f('0xe')](), this[a9f('0xf')] = null;
    let a9l = this;
    this[a9f('0x1')]['on'](cp[a9f('0x10')], function () {
      a9l[a9f('0x11')](), a9l[a9f('0xc')][a9f('0x11')]();
    }), this[a9f('0x1')]['on'](a9f('0x12'), function () {
      a9l[a9f('0xc')][a9f('0x11')]();
    }), this[a9f('0x13')] = null, this[a9f('0x14')] = null, this['LinkClassName'] = a9f('0x15'), this[a9f('0x16')] = new a3c(this), this['redoUndoSys'] = new a2K(this), this[a9f('0x17')] = !0x1, a5R(this), this[a9f('0x18')] = new UM(a9k), this[a9f('0x18')][a9f('0x19')][a9f('0x1a')][a9f('0x1b')] = a9f('0x1c'), this[a9f('0x18')]['domElement'][a9f('0x1a')][a9f('0x1d')] = a9f('0x1c');
  }

  [a9f('0x1e')]() {
    return this['stage'][a9f('0x1e')]();
  }

  [a9f('0x1f')](a9m) {
    Object[a9f('0x20')](this[a9f('0x4')], a9m);
  }

  ['showOpTooltip'](a9n) {
    this[a9f('0x18')]['setHtml'](a9n), this['opTooltip']['showAt'](0.5 * this[a9f('0x1')][a9f('0x21')], 0.5 * this['stage']['height']), this[a9f('0x18')][a9f('0x22')](0x50);
  }

  [a9f('0x23')](a9o) {
    a69(this);
  }

  [a9f('0x24')](a9p) {
    a6c(this);
  }

  [a9f('0x25')](a9q) {
    a5V(this, a9q);
  }

  ['hideGuidLine']() {
    a61(this);
  }

  [a9f('0x26')]() {
    this[a9f('0x17')] = !0x0;
  }

  [a9f('0x27')]() {
    this[a9f('0x17')] = !0x1;
  }

  [a9f('0x28')](a9r) {
    var a9s = this[a9f('0x3')][a9f('0x29')]();
    a3z['setItem'](a9f('0x2a'), a9s), console[a9f('0x2b')](a9f('0x2c'), a9s);
  }

  ['openLasted'](a9t) {
    const a9u = this[a9f('0x3')];
    var a9v = a3z[a9f('0x2d')](a9f('0x2a'));
    null != a9v && (console[a9f('0x2e')]('加载', a9v), a9u[a9f('0x2f')](), a9u['fillByJson'](a9v));
  }

  [a9f('0x30')]() {
    this[a9f('0x31')][a9f('0x32')]();
  }

  [a9f('0x33')]() {
    this[a9f('0x31')][a9f('0x34')]();
  }

  [a9f('0x35')]() {
    a6u(this);
  }

  ['cutHandler']() {
    a6A(this);
  }

  [a9f('0x36')]() {
    a6J(this);
  }

  ['deleteHandler']() {
    a76(this);
  }

  [a9f('0x37')](a9w) {
    let a9x = this[a9f('0x1')][a9f('0xf')];
    null == a9x && (this['stage']['selectedGroup'][a9f('0x38')]() || (a9x = this[a9f('0x1')][a9f('0x6')]['objects'][0x0]), null == a9x) || this[a9f('0x9')][a9f('0x39')](a9x);
  }

  [a9f('0x3a')](a9y) {
    let a9z = this[a9f('0x9')][a9f('0x3b')]();
    if (null != a9z) {
      let a9y = this[a9f('0x1')][a9f('0x6')][a9f('0x3c')];
      this[a9f('0x8')][a9f('0x3d')](), this[a9f('0x3e')]('粘贴样式'), a9y[a9f('0x3f')](a9y => {
        a6l(a9y, a9z);
      }), this[a9f('0x40')](a9f('0x41'));
    }
  }

  [a9f('0x42')](a9C) {
    a5p(a9C, this), this[a9f('0x11')]();
  }

  [a9f('0xe')]() {
    this[a9f('0xb')]['hide'](), this['nodeCtrlBox'][a9f('0x43')]();
  }

  ['dblclickHandler'](a9D) {
  }

  [a9f('0x44')](a9E) {
  }

  [a9f('0x45')](a9F) {
    let a9G = this['handlerLayer'], a9H = this['nodeCtrlBox'], a9I = this['linkCtrlBox'];
    if (this[a9f('0xc')][a9f('0x43')](), this[a9f('0x13')] = a9G[a9f('0x46')](), null != this['controlTarget']) return this[a9f('0x13')]['mousedownHandler'](a9F), a9F[a9f('0x47')](), void this[a9f('0x11')]();
    a9I['hide'](), a9H['hide'](), this[a9f('0x11')]();
  }

  [a9f('0x48')](a9J) {
    this['hideGuidLine']();
    var a9K = this[a9f('0x1')];
    let a9L = this[a9f('0xa')], a9M = this[a9f('0xb')], a9N = this[a9f('0x13')];
    if (null != a9N) return !a9J['details'][a9f('0x49')] || a9N instanceof a1g || this[a9f('0x40')](a9f('0x4a')), a9N[a9f('0x48')](a9J), a9J[a9f('0x47')](), void this[a9f('0x11')]();
    if (0x2 != a9J['button']) {
      a9K = a9K[a9f('0xf')];
      if (null != a9K ? a9K[a9f('0x4b')] && (a9K[a9f('0x4c')] ? a9M[a9f('0x4d')](a9K) : (this[a9f('0xc')][a9f('0x4e')](a9K), a9L[a9f('0x4d')](a9K))) : (this[a9f('0xc')][a9f('0x43')](), a9L[a9f('0x43')](), a9M['hide']()), null != this[a9f('0x4f')][a9f('0x50')]) {
        a9K = this['selectedGroup'][a9f('0x51')](), a9K = a4Y(this, a9K);
        let a9L = a9K[a9f('0x52')], a9J = a9K['objects'];
        a9J[a9f('0x3f')](a9J => {
          a9J[a9f('0x53')](a9L), a9J['upgradeLinks']();
        });
      }
      this['activeBox']['attachTo'](null), this['update']();
    }
  }

  [a9f('0x54')](a9R) {
    if (0x2 != a9R[a9f('0x55')]) {
      this[a9f('0x7')][a9f('0x56')](a9f('0x57')) && this[a9f('0x1')]['setCursor']('crosshair'), this[a9f('0x3')], this['showGuildLine'](a9R[a9f('0x58')]);
      let a9S = this[a9f('0x13')];
      if (null != a9S) {
        if (!a9R[a9f('0x58')][a9f('0x59')] || a9S instanceof a1g || this[a9f('0x3e')](a9f('0x4a')), a9S['mousedragHandler'](a9R), this[a9f('0x11')](), 0x1 == a9R[a9f('0x5a')]) return;
        a9R[a9f('0x47')]();
      }
      this['activeBox'][a9f('0x43')]();
      var a9R = this['KeysConfig'][a9f('0x5b')];
      this[a9f('0x1')][a9f('0xf')] && this[a9f('0x7')]['isKeydown'](a9R) && (a9R = this['selectedGroup'][a9f('0x51')](), null != (a9R = a4Y(this, a9R)[a9f('0x52')]) && a9R[a9f('0x4b')] && this[a9f('0x4f')][a9f('0x4d')](a9R));
    }
  }

  ['mousemoveHandler'](a9U) {
    let a9V = this['stage'];
    const a9W = a9V[a9f('0x5')];
    let a9X = this['currentLayer'];
    a9V[a9f('0x5c')](a9f('0x5d'));
    let a9Y = a9W[a9f('0x46')]();
    if (a9Y !== this[a9f('0x14')] && (null != this[a9f('0x14')] && this[a9f('0x14')][a9f('0x5e')](a9U), null != a9Y && a9Y[a9f('0x5f')](a9U)), this[a9f('0x14')] = a9Y, null != a9Y) return cc(a9Y[a9f('0x52')], a9f('0x60')), a9Y[a9f('0x61')](a9U), void a9U[a9f('0x47')]();
    var a9U = a9X[a9f('0x46')]();
    null != a9U && (this[a9f('0x1')][a9f('0x5c')](a9f('0x62')), a9U[a9f('0x63')] && a9U[a9f('0x64')] && this[a9f('0xc')][a9f('0x4e')](a9U), this['keyboard'][a9f('0x56')]('Control') && a9U[a9f('0x64')] && (this[a9f('0xc')]['setTarget'](a9U), null != (a9U = this['anchorBox']['getObjectsIntersect']([a9U])) && this[a9f('0xc')]['setIntersect'](a9U))), this[a9f('0x11')]();
  }

  [a9f('0x65')](aa0, aa1) {
    if (aa0['details']['isDragStart'] && this[a9f('0x3e')](a9f('0x66')), 0x1 == aa1[a9f('0x67')]) {
      const aa2 = aa1[0x0], aa3 = aa2[a9f('0x68')](!0x1, cn);
      aa1 = aa3[a9f('0x69')]();
      this[a9f('0x25')](aa1);
    }
  }

  ['selectedGroupDragEndHandler'](aa4, aa5) {
    0x1 != aa4[a9f('0x6a')] ? (aa5[a9f('0x3f')](aa4 => {
      aa4[a9f('0x63')] && (aa4['x'] = Math[a9f('0x6c')](aa4['x']), aa4['y'] = Math[a9f('0x6c')](aa4['y']));
    }), this[a9f('0x40')](a9f('0x66'))) : this[a9f('0x6b')]();
  }

  ['recordInterrupt']() {
    this[a9f('0x6d')] = null, this['lastLayerState'] = null;
  }

  [a9f('0x3e')](aa7) {
    if (null == aa7) throw new Error(a9f('0x6e'));
    null != this[a9f('0x6d')] && console[a9f('0x6f')](a9f('0x70')), this[a9f('0x6d')] = aa7, this[a9f('0x71')] = this[a9f('0x3')]['getState']();
  }

  ['recordEnd'](aa8) {
    if (null == aa8) throw new Error('recordName\x20is\x20null');
    if (aa8 != this[a9f('0x6d')]) throw console[a9f('0x2b')](this['recordName'], aa8), new Error(a9f('0x72'));
    this[a9f('0x6d')] = null;
    let aa9 = this[a9f('0x3')], aaa = this[a9f('0x71')], aab = aa9['getState']();
    var aac = this[a9f('0x1')][a9f('0xf')];
    aac && aac['id'], this[a9f('0x31')][a9f('0x73')](aa8, function () {
      aa9['restore'](aab);
    }, function () {
      aa9['restore'](aaa);
    });
  }

  [a9f('0x5f')](aad) {
    this[a9f('0xb')][a9f('0x74')](aad), this['nodeCtrlBox'][a9f('0x74')](aad), this[a9f('0xc')]['mouseenterStageHandler'](aad);
  }

  [a9f('0x5e')](aae) {
    this[a9f('0xb')]['mouseoutStageHandler'](aae), this[a9f('0xa')][a9f('0x75')](aae), this[a9f('0xc')]['mouseoutStageHandler'](aae);
  }

  [a9f('0x76')](aaf, aag, aah, aai) {
    let aaj = gT(this[a9f('0x77')]);
    const aak = new aaj(aaf, aag, aah, aai), aal = Object['assign']({}, this[a9f('0x78')]);
    aal[a9f('0x79')] && (aak[a9f('0x79')](aal[a9f('0x79')]), delete aal[a9f('0x79')]), Object[a9f('0x20')](aak, aal);
    let aam = aag[a9f('0x63')] || aag['isLink'] ? aag[a9f('0x52')] : this[a9f('0x3')];
    return aak[a9f('0x7a')] = c9[a9f('0x7b')], aam[a9f('0x7c')](aak), aak;
  }

  [a9f('0x7d')](aan) {
    if ('1' != a9i) return null;
    this['showOpTooltip']('删除'), aan === this[a9f('0xc')]['target'] && this['anchorBox']['hide']();
  }

  [a9f('0x7e')](aao) {
    let aap = this[a9f('0x1e')]();
    aap[a9f('0x7c')](aao);
  }

  [a9f('0x7f')](aaq) {
    let aar = this[a9f('0x3')];
    aar[a9f('0x7c')](aaq);
  }

  [a9f('0x7c')](aas) {
    if (aas['isNode']) this['addNode'](aas); else {
      if (!aas['isLink']) throw new Error(a9f('0x80'));
      this[a9f('0x7f')](aas);
    }
  }

  [a9f('0x11')]() {
    this[a9f('0x4f')][a9f('0x81')] && this['activeBox']['updateSize'](), this[a9f('0xa')][a9f('0x81')] && this[a9f('0xa')]['updateSize'](), this[a9f('0xc')]['update'](), this[a9f('0x1')][a9f('0x11')]();
  }

  [a9f('0x82')]() {
    this[a9f('0x3')][a9f('0x82')]();
  }

  [a9f('0x29')]() {
    return this[a9f('0x3')][a9f('0x29')]();
  }

  [a9f('0x83')](aat) {
    this[a9f('0x3')][a9f('0x83')](aat), this[a9f('0x1')]['translateToCenter']();
  }

  [a9f('0x84')](aau, aav) {
    let aaw = new Event('log');
    aaw[a9f('0x85')] = aau + (aav || ''), this['dispatchEvent'](aaw);
  }

  ['create'](aax) {
    function aay(aaz, aaA) {
      if (null != aaA) {
        let aax = Object[a9f('0x86')](aaA);
        aax['forEach'](function (aax) {
          var aay = aaA[aax];
          'css' == aax ? aaz['css'](aay) : 'image' == aax ? aaz[a9f('0x87')](aay, aaA['sizeToImage']) : aaz[aax] = aay;
        });
      }
    }

    var aaE = this[a9f('0x3')][a9f('0x88')](), aaF = aaE['x'], aaG = aaE['y'];
    let aaH = aax[a9f('0x89')], aaI = gT(aaH);
    if (-0x1 != aaH[a9f('0x8a')](a9f('0x8b'))) {
      aaE = new aaI(null, aaF - 0x15, aaG - 0x15, 0x40, 0x40);
      return aay(aaE, aax[a9f('0x8c')]), this['addNewInstance'](aaE), aaE;
    }
    if (-0x1 != aaH[a9f('0x8a')](a9f('0x8d'))) {
      this[a9f('0x1')][a9f('0x54')][a9f('0x8e')] && this[a9f('0x1')][a9f('0x8f')](a9f('0x90'));
      aaG = new aaI(null, {'x': aaF - 0x28, 'y': aaG}, {'x': aaF + 0x28, 'y': aaG + ('Link' == aaH ? 0x0 : 0x50)});
      return aay(aaG, aax[a9f('0x8c')]), this[a9f('0x7e')](aaG), aaG;
    }
  }

  [a9f('0x91')]() {
    let aaJ = this, aaK = this[a9f('0x1')], aaL = aaK[a9f('0x6')][a9f('0x51')]();
    var aaM = aaL['filter'](aaN => aaN[a9f('0x63')]);
    if (!(aaM[a9f('0x67')] < 0x2)) {
      let aaO = LD[a9f('0x92')](aaL[a9f('0x93')](aaO => aaO[a9f('0x63')]));
      var aaQ = aaO[a9f('0x69')]();
      this[a9f('0x94')](a9f('0x95'));
      var aaU = aaM[0x0], aaS = aaU[a9f('0x21')], aaM = aaU['height'], aaU = new OU(a9f('0x96'));
      aaU[a9f('0x97')](0x0, 1.5 * aaS, 0x2 * aaM), aaU[a9f('0x98')](0xc8), aaU[a9f('0x99')](() => aaK['update']()), aaU['setCenter'](aaQ['x'], aaQ['y']);
      var aaQ = new a8U(aaL)[a9f('0x9a')]();
      0x0 < aaQ[a9f('0x67')] && (this[a9f('0x3e')](a9f('0x95')), aaQ = aaQ[0x0], aaU[a9f('0x9b')](aaQ)['then'](() => {
        aaJ[a9f('0x40')](a9f('0x95'));
      }));
    }
  }

  [a9f('0x9c')]() {
    let aaW = this, aaX = this[a9f('0x1')];
    var aaY = aaX[a9f('0x6')]['getNoChildrensObjects']()[a9f('0x93')](ab0 => ab0[a9f('0x63')]),
      aaZ = Math[a9f('0x9d')](Math[a9f('0x9e')](aaY[a9f('0x67')]));
    if (!(aaY['length'] < 0x2)) {
      let ab1 = LD[a9f('0x92')](aaY);
      var ab2 = ab1[a9f('0x69')]();
      this[a9f('0x94')](a9f('0x9f'));
      aaZ = new NQ(aaZ, aaZ);
      aaZ[a9f('0x97')](0x28, 0x28, 0x0, 0x0), aaZ['setTime'](0xc8), aaZ[a9f('0x99')](() => aaX[a9f('0x11')]()), aaZ[a9f('0xa0')](ab2['x'], ab2['y']), this[a9f('0x3e')](a9f('0x9f')), aaZ[a9f('0x9b')](aaY)['then'](() => {
        aaW[a9f('0x40')](a9f('0x9f'));
      });
    }
  }

  [a9f('0xa1')](ab3, ab4) {
    this['keyboard'][a9f('0xa1')](ab3, ab4);
  }
}

a9j[a9f('0x4')] = a7Z;
var ab5 = ['paintText', 'prototype', 'serializers', 'concat', 'ratio', 'css', 'center', 'middle', 'draw', 'style', 'strokeAndFill', 'mousePickupPath', 'beginPath', 'fillStyle', 'ratioColor', 'borderWidth', 'height', 'direction', 'right', 'left', 'width', 'down', 'Unknow\x20RatioNode\x27s\x20direction:', 'rect', 'fill'];
!function (ab6) {
  !function (ab7) {
    for (; --ab7;) ab6['push'](ab6['shift']());
  }(0x1e1);
}(ab5);
var ab8 = function (ab9, aba) {
  return ab5[ab9 = +ab9];
};

class abb extends so {
  constructor(abc, abd, abe, abf, abg) {
    super(abc, abd, abe, abf, abg), this[ab8('0x0')]({
      'textPosition': ab8('0x1'),
      'textAlign': ab8('0x1'),
      'textBaseline': ab8('0x2')
    });
  }

  [ab8('0x3')](abh) {
    var abi = this[ab8('0x4')];
    this[ab8('0x5')](abh), this[ab8('0x6')](abh), abh[ab8('0x7')](), abh[ab8('0x8')] = abi[ab8('0x9')];
    var abj = abi[ab8('0xa')] || 0x0, abk = abi['padding'] || 0x0, abi = 0x2 * abk + 0x2 * abj;
    let abm = abj + abk, abn = abj + abk, abo = (this['width'] - abi) * this['ratio'],
      abp = (this[ab8('0xb')] - abi) * this['ratio'];
    if (this[ab8('0xc')] == c6[ab8('0xd')]) abp = this[ab8('0xb')] - abi; else if (this['direction'] == c6[ab8('0xe')]) abm = this[ab8('0xf')] - abj - abk - abo, abp = this[ab8('0xb')] - abi; else if (this['direction'] == c6[ab8('0x10')]) abo = this[ab8('0xf')] - abi; else {
      if (this[ab8('0xc')] != c6['up']) throw new Error(ab8('0x11') + this[ab8('0xc')]);
      abn = this[ab8('0xb')] - abj - abk - abp, abo = this['width'] - abi;
    }
    abh[ab8('0x12')](abm, abn, abo, abp), abh[ab8('0x13')](), this[ab8('0x14')](abh);
  }
}

bN(abb['prototype'], {
  'className': {'value': 'RatioNode', 'writable': !0x1},
  'ratio': {'value': 0.5},
  'direction': {'value': c6['right']},
  'serializers': {'value': so[ab8('0x15')][ab8('0x16')][ab8('0x17')]([ab8('0x18'), 'padding', ab8('0xc')])}
});
var abq = ['marginLeft', 'marginBottom', 'startX', 'length', 'max', 'centerX', 'getNodesRect', 'getCenter', 'forEach', 'doLayout', 'filter', 'isNode', 'translate', 'width', 'height', 'setSize', 'getLayoutData', 'marginTop'];
!function (abr) {
  !function (abt) {
    for (; --abt;) abr['push'](abr['shift']());
  }(0x176);
}(abq);
var abu = function (abv, abw) {
  return abq[abv = +abv];
};

class abx extends LD {
  constructor() {
    super(), this[abu('0x0')], this[abu('0x1')];
  }

  [abu('0x2')](aby, abz) {
    this['width'] = aby, this[abu('0x1')] = abz;
  }

  [abu('0x3')](abA) {
    let abB = new b8();
    var abC = 0x0 | this[abu('0x4')], abD = 0x0 | this[abu('0x5')], abE = 0x0 | this['marginRight'],
      abF = 0x0 | this[abu('0x6')];
    let abG = 0x0 | this[abu('0x7')], abH = 0x0 | this['startY'];
    var abI = this['width'];
    let abJ = 0x0;
    for (let abK = 0x0; abK < abA[abu('0x8')]; abK++) {
      var abL = abA[abK], abM = abD + abL['width'] + abE, abN = abC + abL[abu('0x1')] + abF;
      abG + abM > abI && (abG = 0x0, abH = abJ);
      abL = new Ni(abG, abH, abM, abN);
      abB['push'](abL);
      abN = abH + abN;
      abJ = Math[abu('0x9')](abJ, abN), abG += abM;
    }
    let abO = {'x': this[abu('0xa')], 'y': this['centerY']};
    if (null == this[abu('0x7')] && null == this['centerX']) {
      let abP = LD[abu('0xb')](abA);
      abO = abP[abu('0xc')]();
    }
    if (null != abO['x']) {
      let abQ = LD[abu('0xb')](abB);
      var abR = abQ[abu('0xc')]();
      let abA = abO['x'] - abR['x'], abC = abO['y'] - abR['y'];
      abB[abu('0xd')](abQ => {
        abQ['x'] += abA, abQ['y'] += abC;
      });
    }
    return abB;
  }

  [abu('0xe')](abV) {
    abV = abV[abu('0xf')](abV => abV[abu('0x10')]);
    var abX = this[abu('0x3')](abV);
    return this[abu('0x11')](abV, abX);
  }
}

c('.jtopo_popoupmenu{padding:10px;border-radius:5px;min-width:210px;background-color:#fff;border:1px\x20solid;position:absolute;z-index:10000}.jtopo_popoupmenu\x20.header{font-size:14px;height:24px;padding-bottom:3px}.jtopo_popoupmenu\x20a{text-rendering:optimizeLegibility;font-family:\x22Open\x20Sans\x22,\x22Helvetica\x20Neue\x22,\x22Helvetica\x22,\x22Arial\x22,sans-serif;padding-left:20px;display:block;height:25px;color:rgba(0,0,0,.5);font-size:13px;cursor:pointer}.jtopo_popoupmenu\x20a:hover{color:#000}.jtopo_iconsPanel{opacity:.8;padding-left:5px;position:absolute;background-color:#e8e8e8;top:90px;width:52px;height:425px;z-index:1000;border-radius:5px}.jtopo_iconsPanel\x20.item{border:1px\x20solid\x20#fff;width:42px;height:42px;margin-top:10px}.jtopo_toolbar{border-bottom:1px\x20dotted;padding-bottom:2px;border-color:#e0e0e0;width:100%;min-height:33px;background-color:#e8e8e8}.jtopo_toolbar\x20.group{float:left;margin-right:5px}.jtopo_toolbar\x20.item{float:left;width:32px;height:32px;stroke:gray;stroke-width:1;stroke-linecap:square;stroke-linejoin:miter;fill:none;font-size:12px;color:gray}.jtopo_toolbar\x20.active{background-color:#d3d3d3;border:1px\x20solid\x20#000}.jtopo_toolbar\x20input[type=text]{font-size:12px;color:gray;float:left;width:120px;height:26px;margin:2px;border:1px\x20solid\x20#fff;margin-left:4px}.jtopo_input_textfield{position:absolute;display:none;font-size:smaller;z-index:10000}.jtopo_tooltip{pointer-events:none;opacity:.9;min-width:30px;min-height:30px;padding:10px;border-radius:5px;background-color:#f8f8f8;border:1px\x20solid;position:absolute;z-index:10000}.jtopo_historyPanel{position:absolute;left:0px;top:100%;width:879px;overflow-x:scroll;height:600px;z-index:1000}.jtopo_debugPanel{left:0px;top:0%;width:100%;height:auto;background-color:orange;overflow-x:scroll;z-index:1000;text-align:left}');
var abY = ['1.4.6_5', 'assign'];
!function (abZ) {
  !function (ac0) {
    for (; --ac0;) abZ['push'](abZ['shift']());
  }(0x1e4);
}(abY);
var ac1 = function (ac2, ac3) {
  return abY[ac2 = +ac2];
};
Object[ac1('0x0')](c1, {
  'version': ac1('0x1'),
  'Point': i8,
  'FlowLayout': abx,
  'Graph': a8U,
  'SimpleLink': Yt,
  'RatioNode': abb,
  'constraint': pg,
  'EndpointSegment': y1,
  'EndpointFixedName': y5,
  'EndpointFixedPoint': ya,
  'EndpointNearest': y8,
  'PropertiesPanel': Xh,
  'IconsPanel': Wt,
  'AutoFoldLink': V0,
  'ArrowNode': X0,
  'Tooltip': UM,
  'PopupMenu': Ut,
  'Grid': Tx,
  'Position': c6,
  'vec2': eB,
  'HtmlImage': rX,
  'regClass': gK,
  'getClass': gT,
  'TopoPainter': SY,
  'AutoBoundLayout': RU,
  'ShapeNode': QF,
  'DomUtil': tu,
  'BezierLink': An,
  'ArcLink': B8,
  'PolygonNode': xj,
  'Color': QV,
  'randomColor': RJ,
  'ColorKeywords': RI,
  'ForceDirectLayout': PR,
  'VideoNode': Pw,
  'Style': da,
  'RadialGradient': ee,
  'LinearGradient': e3,
  'Pattern': er,
  'Layout': LD,
  'GridLayout': NQ,
  'TreeLayout': OU,
  'CircleLayout': Om,
  'Animation': D7,
  'TextNode': yy,
  'Transform': ac,
  'Layer': vG,
  'Stage': Gi,
  'Node': so,
  'CircleNode': IV,
  'Link': yU,
  'FoldLink': Ji,
  'CurveLink': JE,
  'FlexionalLink': L5,
  'TipNode': KD,
  'Collection': b8,
  'Rectangle': u,
  'Debug': ov,
  'Editor': a9j
});

let J_Point = c1.Point;
let J_FlowLayout = c1.FlowLayout;
let J_Graph = c1.Graph;
let J_SimpleLink = c1.SimpleLink;
let J_RatioNode = c1.RatioNode;
let J_constraint = c1.constraint;
let J_EndpointSegment = c1.EndpointSegment;
let J_EndpointFixedName = c1.EndpointFixedName;
let J_EndpointFixedPoint = c1.EndpointFixedPoint;
let J_EndpointNearest = c1.EndpointNearest;
let J_PropertiesPanel = c1.PropertiesPanel;
let J_IconsPanel = c1.IconsPanel;
let J_AutoFoldLink = c1.AutoFoldLink;
let J_ArrowNode = c1.ArrowNode;
let J_Tooltip = c1.Tooltip;
let J_PopupMenu = c1.PopupMenu;
let J_Grid = c1.Grid;
let J_Position = c1.Position;
let J_vec2 = c1.vec2;
let J_HtmlImage = c1.HtmlImage;
let J_regClass = c1.regClass;
let J_getClass = c1.getClass;
let J_TopoPainter = c1.TopoPainter;
let J_AutoBoundLayout = c1.AutoBoundLayout;
let J_ShapeNode = c1.ShapeNode;
let J_DomUtil = c1.DomUtil;
let J_BezierLink = c1.BezierLink;
let J_ArcLink = c1.ArcLink;
let J_PolygonNode = c1.PolygonNode;
let J_Color = c1.Color;
let J_randomColor = c1.randomColor;
let J_ColorKeywords = c1.ColorKeywords;
let J_ForceDirectLayout = c1.ForceDirectLayout;
let J_VideoNode = c1.VideoNode;
let J_Style = c1.Style;
let J_RadialGradient = c1.RadialGradient;
let J_LinearGradient = c1.LinearGradient;
let J_Pattern = c1.Pattern;
let J_Layout = c1.Layout;
let J_GridLayout = c1.GridLayout;
let J_TreeLayout = c1.TreeLayout;
let J_CircleLayout = c1.CircleLayout;
let J_Animation = c1.Animation;
let J_TextNode = c1.TextNode;
let J_Transform = c1.Transform;
let J_Layer = c1.Layer;
let J_Stage = c1.Stage;
let J_Node = c1.Node;
let J_CircleNode = c1.CircleNode;
let J_Link = c1.Link;
let J_FoldLink = c1.FoldLink;
let J_CurveLink = c1.CurveLink;
let J_FlexionalLink = c1.FlexionalLink;
let J_TipNode = c1.TipNode;
//Camera,
let J_Collection = c1.Collection;
let J_Rectangle = c1.Rectangle;
let J_Debug = c1.Debug;

let J_Editor = c1.Editor;
let J_ThreeRender = c1.ThreeRender;

export {
  J_Animation as Animation,
  J_ArcLink as ArcLink,
  J_ArrowNode as ArrowNode,
  J_AutoBoundLayout as AutoBoundLayout,
  J_AutoFoldLink as AutoFoldLink,
  J_BezierLink as BezierLink,
  J_CircleLayout as CircleLayout,
  J_CircleNode as CircleNode,
  J_Collection as Collection,
  J_Color as Color,
  J_ColorKeywords as ColorKeywords,
  J_CurveLink as CurveLink,
  J_Debug as Debug,
  J_DomUtil as DomUtil,
  J_Editor as Editor,
  J_EndpointFixedName as EndpointFixedName,
  J_EndpointFixedPoint as EndpointFixedPoint,
  J_EndpointNearest as EndpointNearest,
  J_EndpointSegment as EndpointSegment,
  J_FlexionalLink as FlexionalLink,
  J_FlowLayout as FlowLayout,
  J_FoldLink as FoldLink,
  J_ForceDirectLayout as ForceDirectLayout,
  J_Graph as Graph,
  J_Grid as Grid,
  J_GridLayout as GridLayout,
  J_HtmlImage as HtmlImage,
  J_IconsPanel as IconsPanel,
  J_Layer as Layer,
  J_Layout as Layout,
  J_LinearGradient as LinearGradient,
  J_Link as Link,
  J_Node as Node,
  J_Pattern as Pattern,
  J_Point as Point,
  J_PolygonNode as PolygonNode,
  J_PopupMenu as PopupMenu,
  J_Position as Position,
  J_PropertiesPanel as PropertiesPanel,
  J_RadialGradient as RadialGradient,
  J_RatioNode as RatioNode,
  J_Rectangle as Rectangle,
  J_ShapeNode as ShapeNode,
  J_SimpleLink as SimpleLink,
  J_Stage as Stage,
  J_Style as Style,
  J_TextNode as TextNode,
  J_ThreeRender as ThreeRender,
  J_TipNode as TipNode,
  J_Tooltip as Tooltip,
  J_TopoPainter as TopoPainter,
  J_Transform as Transform,
  J_TreeLayout as TreeLayout,
  J_VideoNode as VideoNode,
  J_constraint as constraint,
  c1 as default,
  J_getClass as getClass,
  c1 as jtopo,
  J_randomColor as randomColor,
  J_regClass as regClass,
  J_vec2 as vec2
};
