function c(e) {
  if (e && 'undefined' != typeof window) {
    const f = document['createElement']('style');
    return f['setAttribute']('type', 'text/css'), f['innerHTML'] = e, document['head']['appendChild'](f), e;
  }
}

var i = ['getBottom', 'isEmpty', 'setToEmpty', 'getCenter', 'getCornerPoints', 'createFromPoints', 'length', 'min', 'max', 'abs', 'sign', 'height', 'setTo', 'width', 'getRect', 'clone', 'toString', '[x:\x20', '\x20y:', '\x20width:', '\x20height:', 'equals', 'containsRect', 'getRight', 'contains', 'isIntersectRect'];
!function (j) {
  !function (k) {
    for (; --k;) j['push'](j['shift']());
  }(0x74);
}(i);
var n = function (p, q) {
  return i[p = +p];
};

class u {
  constructor(v, A, B, C) {
    this['x'] = 0x0 | v, this['y'] = 0x0 | A, this['width'] = 0x0 | B, this[n('0x0')] = 0x0 | C;
  }

  [n('0x1')](D, E, I, J) {
    this['x'] = D, this['y'] = E, this[n('0x2')] = I, this[n('0x0')] = J;
  }

  [n('0x3')]() {
    return this;
  }

  [n('0x4')]() {
    return new u(this['x'], this['y'], this[n('0x2')], this[n('0x0')]);
  }

  [n('0x5')]() {
    return n('0x6') + this['x'] + n('0x7') + this['y'] + n('0x8') + this['width'] + n('0x9') + this[n('0x0')] + ']';
  }

  [n('0xa')](K) {
    return K['x'] == this['x'] && K['y'] == this['y'] && K[n('0x2')] == this[n('0x2')] && K[n('0x0')] == this[n('0x0')];
  }

  [n('0xb')](L) {
    return L['x'] > this['x'] && L[n('0xc')]() < this[n('0xc')]() && L['y'] > this['y'] && L['getBottom']() < this['getBottom']();
  }

  [n('0xd')](M, N) {
    return M >= this['x'] && M <= this['x'] + this[n('0x2')] && N >= this['y'] && N <= this['y'] + this['height'];
  }

  [n('0xe')](O) {
    return !(O['x'] > this[n('0xc')]() || O['y'] > this[n('0xf')]()) && !(O['getRight']() < this['x'] || O[n('0xf')]() < this['y']);
  }

  [n('0xc')]() {
    return this['x'] + this['width'];
  }

  ['getBottom']() {
    return this['y'] + this[n('0x0')];
  }

  [n('0x10')]() {
    return 0x0 === this['x'] && 0x0 === this['y'] && 0x0 === this[n('0x2')] && 0x0 === this[n('0x0')];
  }

  [n('0x11')](P) {
    this[n('0x1')](0x0, 0x0, 0x0, 0x0);
  }

  ['union'](Q) {
    var R = Math['min'](this['x'], Q['x']), S = Math['min'](this['y'], Q['y']),
      T = Math['max'](this[n('0xc')](), Q['getRight']()), Q = Math['max'](this[n('0xf')](), Q[n('0xf')]());
    return new u(R, S, T - R, Q - S);
  }

  [n('0x12')]() {
    return {'x': this['x'] + this[n('0x2')] / 0x2, 'y': this['y'] + this[n('0x0')] / 0x2};
  }

  [n('0x13')]() {
    return [{'x': this['x'], 'y': this['y']}, {
      'x': this['x'] + this[n('0x2')],
      'y': this['y']
    }, {'x': this['x'] + this['width'], 'y': this['y'] + this['height']}, {
      'x': this['x'],
      'y': this['y'] + this['height']
    }];
  }
}

u[n('0x14')] = function (V) {
  let W = V[0x0]['x'], X = V[0x0]['y'], Y = W, Z = X;
  for (var a0 = 0x1; a0 < V[n('0x15')]; a0++) {
    var a1 = V[a0];
    W = Math[n('0x16')](W, a1['x']), X = Math[n('0x16')](X, a1['y']), Y = Math['max'](Y, a1['x']), Z = Math[n('0x17')](Z, a1['y']);
  }
  return new u(W, X, Y - W, Z - X);
}, u['normal'] = function (a2, a3) {
  var a4 = a3['x'] - a2['x'], a2 = a3['y'] - a2['y'];
  return Math[n('0x18')](a4) > Math['abs'](a2) ? [Math[n('0x19')](a4), 0x0] : [0x0, Math[n('0x19')](a2)];
};
var a6 = ['points', 'getCornerPoints', 'translate', 'translateTo', 'getScale', 'cos', 'sin', 'rotateTarget', 'rotate', 'getTranslation', 'skew', 'getRotation', 'atan2', 'invert', 'slice', 'copy', 'identity', 'point', 'length', 'push'];
!function (a7) {
  !function (a8) {
    for (; --a8;) a7['push'](a7['shift']());
  }(0x1c7);
}(a6);
var a9 = function (aa, ab) {
  return a6[aa = +aa];
};

class ac {
  constructor(ad) {
    this['m'] = ad && ad[a9('0x0')]() || [0x1, 0x0, 0x0, 0x1, 0x0, 0x0];
  }

  [a9('0x1')]() {
    return new ac(this['m']);
  }

  [a9('0x2')]() {
    this['m'] = [0x1, 0x0, 0x0, 0x1, 0x0, 0x0];
  }

  [a9('0x3')](ae) {
    var af = this['m'];
    return {'x': af[0x0] * ae['x'] + af[0x2] * ae['y'] + af[0x4], 'y': af[0x3] * ae['y'] + af[0x1] * ae['x'] + af[0x5]};
  }

  ['points'](ag) {
    let ah = [];
    for (var ai = 0x0; ai < ag[a9('0x4')]; ai++) {
      var aj = ag[ai];
      ah[a9('0x5')](this[a9('0x3')](aj));
    }
    return ah;
  }

  ['rectangle'](ak) {
    ak = this[a9('0x6')](ak[a9('0x7')]());
    return u['createFromPoints'](ak);
  }

  [a9('0x8')](al, am) {
    return this['m'][0x4] += this['m'][0x0] * al + this['m'][0x2] * am, this['m'][0x5] += this['m'][0x1] * al + this['m'][0x3] * am, this;
  }

  [a9('0x9')](an, ao) {
    return this['m'][0x4] = an, this['m'][0x5] = ao, this;
  }

  ['scale'](ap, aq) {
    return this['m'][0x0] *= ap, this['m'][0x1] *= ap, this['m'][0x2] *= aq, this['m'][0x3] *= aq, this;
  }

  [a9('0xa')]() {
    return {'x': this['m'][0x0], 'y': this['m'][0x3]};
  }

  ['rotate'](ar) {
    var ax = Math[a9('0xb')](ar), at = Math[a9('0xc')](ar), au = this['m'][0x0] * ax + this['m'][0x2] * at,
      av = this['m'][0x1] * ax + this['m'][0x3] * at, ar = this['m'][0x0] * -at + this['m'][0x2] * ax,
      ax = this['m'][0x1] * -at + this['m'][0x3] * ax;
    return this['m'][0x0] = au, this['m'][0x1] = av, this['m'][0x2] = ar, this['m'][0x3] = ax, this;
  }

  [a9('0xd')](ay, az, aA) {
    this['translate'](az, aA), this[a9('0xe')](ay), this[a9('0x8')](-az, -aA);
  }

  [a9('0xf')]() {
    return {'x': this['m'][0x4], 'y': this['m'][0x5]};
  }

  [a9('0x10')](aB, aC) {
    return this['m'][0x1] = aB, this['m'][0x2] = aC, this;
  }

  [a9('0x11')]() {
    let aD = this['copy']();
    aD[a9('0x9')](0x0, 0x0);
    var aE = aD['point']({'x': 0x0, 'y': 0x0});
    return Math[a9('0x12')](aE['y'], aE['x']);
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

  [a9('0x13')]() {
    var aS = 0x1 / (this['m'][0x0] * this['m'][0x3] - this['m'][0x1] * this['m'][0x2]), aN = this['m'][0x3] * aS,
      aO = -this['m'][0x1] * aS, aP = -this['m'][0x2] * aS, aQ = this['m'][0x0] * aS,
      aR = aS * (this['m'][0x2] * this['m'][0x5] - this['m'][0x3] * this['m'][0x4]),
      aS = aS * (this['m'][0x1] * this['m'][0x4] - this['m'][0x0] * this['m'][0x5]);
    return this['m'][0x0] = aN, this['m'][0x1] = aO, this['m'][0x2] = aP, this['m'][0x3] = aQ, this['m'][0x4] = aR, this['m'][0x5] = aS, this;
  }

  ['getMatrix']() {
    return this['m'];
  }

  ['setAbsolutePosition'](aT, aU) {
    var b1 = this['m'][0x0], b0 = this['m'][0x1], aX = this['m'][0x2], aY = this['m'][0x3], aZ = this['m'][0x4],
      b0 = (b1 * (aU - this['m'][0x5]) - b0 * (aT - aZ)) / (b1 * aY - b0 * aX), b1 = (aT - aZ - aX * b0) / b1;
    return this[a9('0x8')](b1, b0);
  }
}

var b2 = ['union', 'getRect', 'getNoChildrensObjects', 'notContains', 'hasChild', 'indexOf', 'addAll', 'length', 'removeAt', 'splice', 'remove', 'removeArr', 'forEach', 'insertAt', 'swap', 'swapAt', 'clear', 'setChildIndex', 'dirty', 'removeChild', 'insertChildAt', 'flatten', 'push', 'children', 'concat', 'getAABB'];
!function (b3) {
  !function (b4) {
    for (; --b4;) b3['push'](b3['shift']());
  }(0x87);
}(b2);
var b5 = function (b6, b7) {
  return b2[b6 = +b6];
};

class b8 extends Array {
  [b5('0x0')](b9) {
    return -0x1 != this[b5('0x1')](b9);
  }

  ['notContains'](ba) {
    return -0x1 == this[b5('0x1')](ba);
  }

  [b5('0x2')](bb) {
    for (var bc = 0x0; bc < bb[b5('0x3')]; bc++) {
      var bd = bb[bc];
      this['push'](bd);
    }
    return this;
  }

  [b5('0x4')](be) {
    return this[b5('0x5')](be, 0x1);
  }

  [b5('0x6')](bf) {
    bf = this[b5('0x1')](bf);
    return -0x1 == bf ? this : this[b5('0x4')](bf);
  }

  [b5('0x7')](bg) {
    let bh = this;
    return bg[b5('0x8')](bg => {
      bh[b5('0x6')](bg);
    }), this;
  }

  [b5('0x9')](bj, bk) {
    this[b5('0x5')](bk || 0x0, 0x0, bj);
  }

  [b5('0xa')](bl, bm) {
    bl = this['indexOf'](bl), bm = this[b5('0x1')](bm);
    this[b5('0xb')](bl, bm);
  }

  [b5('0xb')](bn, bo) {
    var bp = this[bn];
    this[bo] = this[bn], this[bn] = bp;
  }

  [b5('0xc')]() {
    this['length'] = 0x0;
  }

  [b5('0xd')](bq, br) {
    this[b5('0xe')] = !0x0, this[b5('0xf')](bq), this[b5('0x10')](bq, br);
  }

  [b5('0x11')](bs) {
    let bt = new b8();
    for (var bu, bv = 0x0; bv < this[b5('0x3')]; bv++) {
      let bw = this[bv];
      null != bs && 0x1 != bs(bw) || (bt[b5('0x12')](bw), bw[b5('0x13')] && 0x0 < bw[b5('0x13')][b5('0x3')] && (bu = bw[b5('0x13')][b5('0x11')](bs), bt = bt[b5('0x14')](bu)));
    }
    return bt;
  }

  ['toIdMap']() {
    let bx = {};
    return this[b5('0x8')](by => {
      bx[by['id']] = by;
    }), bx;
  }

  [b5('0x15')](bz, bA) {
    let bB = this[0x0]['getAABB'](bz, bA);
    for (let bC = 0x1; bC < this[b5('0x3')]; bC++) bB = bB[b5('0x16')](this[bC][b5('0x15')](bz, bA));
    return bB;
  }

  [b5('0x17')]() {
    let bD = this[0x0][b5('0x17')]();
    for (let bE = 0x1; bE < this['length']; bE++) bD = bD['union'](this[bE][b5('0x17')]());
    return bD;
  }

  [b5('0x18')]() {
    let bF = this[b5('0x11')]();
    return bF = this['flatten'](bG => bF[b5('0x19')](bG['parent'])), bF;
  }
}

var bH = ['defineProperty', 'prototype', 'create', 'enumerable'];
!function (bI) {
  !function (bJ) {
    for (; --bJ;) bI['push'](bI['shift']());
  }(0x1ce);
}(bH);
var bK = function (bL, bM) {
  return bH[bL = +bL];
};

function bN(bO, bP) {
  for (var bQ in bP) bR(bO, bQ, bP[bQ]);
}

function bR(bS, bT, bU) {
  null == bU['writable'] && (bU['writable'] = !0x0), null == bU[bK('0x2')] && (bU[bK('0x2')] = !0x0), Object[bK('0x3')](bS, bT, bU);
}

var bV = ['s-resize', 'n-resize', 'w-resize', 'e-resize', 'horizontal', 'center', 'nearest', 'begin', 'end', 'ctrlPoint', 'ctrlPoint1', 'ctrlPoint2', 'mid2', 'down', 'right', 'fixedName', 'function', 'log', 'forEach', 'assertTrue\x20failed', 'drop_data', 'zoom', 'resize', 'zoomAfter', 'fullWindow', 'groupdrag', 'groupdragend', 'selectObject', '1.4.6_5', 'drag', 'edit', 'normal', 'select', 'view', 'move', 'corosshair'];
!function (bW) {
  !function (bX) {
    for (; --bX;) bW['push'](bW['shift']());
  }(0x119);
}(bV);
var bY = function (bZ, c0) {
  return bV[bZ = +bZ];
};
const c1 = {}, c2 = bY('0x0'),
  c3 = {'drag': bY('0x1'), 'edit': bY('0x2'), 'normal': bY('0x3'), 'select': bY('0x4'), 'view': bY('0x5')}, c4 = {
    'move': bY('0x6'),
    'corosshair': bY('0x7'),
    's_resize': bY('0x8'),
    'n_resize': bY('0x9'),
    'w_resize': bY('0xa'),
    'e_resize': bY('0xb')
  }, c5 = {'horizontal': bY('0xc'), 'vertical': 'vertical'}, c6 = {
    'lt': 'lt',
    'ct': 'ct',
    'rt': 'rt',
    'lm': 'lm',
    'center': bY('0xd'),
    'rm': 'rm',
    'lb': 'lb',
    'cb': 'cb',
    'rb': 'rb',
    'nearest': bY('0xe'),
    'begin': bY('0xf'),
    'end': bY('0x10'),
    'ctrlPoint': bY('0x11'),
    'ctrlPoint1': bY('0x12'),
    'ctrlPoint2': bY('0x13'),
    'fold1': 'fold1',
    'fold2': 'fold2',
    'mid': 'mid',
    'mid1': 'mid1',
    'mid2': bY('0x14'),
    'up': 'up',
    'down': bY('0x15'),
    'left': 'left',
    'right': bY('0x16')
  }, c7 = {
    'point': 'point',
    'fixedName': bY('0x17'),
    'lineSegment': 'lineSegment',
    'nearest': bY('0xe'),
    'function': bY('0x18')
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
  if (null == cd) throw console[bY('0x19')](ce), new Error(ce);
}

function cf(cg, ch, ...ci) {
  if (cg != ch) throw console['log'](ci), new Error(ci);
}

function cj(ck, ...cl) {
  if (0x1 != ck) throw cl[bY('0x1a')](ck => {
    console[bY('0x19')](ck);
  }), new Error(bY('0x1b'));
}

const cn = 0x0, co = 0x1;
bY('0x1c');
const cp = {
  'zoom': bY('0x1d'),
  'resize': bY('0x1e'),
  'zoomAfter': bY('0x1f'),
  'fullWindow': bY('0x20'),
  'modeChange': 'modeChange',
  'groupdrag': bY('0x21'),
  'groupdragend': bY('0x22'),
  'selectObject': bY('0x23')
};
var cq = ['type', 'call', 'listeners', 'hasListener', 'addEventListener', 'push', 'removeEventListener', 'length', 'splice', 'dispatchEvent'];
!function (cr) {
  !function (cs) {
    for (; --cs;) cr['push'](cr['shift']());
  }(0x8f);
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
    cB in this[cu('0x0')] || (this[cu('0x0')][cB] = []), this[cu('0x0')][cB][cu('0x3')](cC);
  }

  [cu('0x4')](cD, cE) {
    if (cD in this['listeners']) {
      let cF = this[cu('0x0')][cD];
      for (var cG = 0x0, cH = cF[cu('0x5')]; cG < cH; cG++) if (cF[cG] === cE) return cF[cu('0x6')](cG, 0x1), this['removeEventListener'](cD, cE);
    }
  }

  [cu('0x7')](cI) {
    if (cI[cu('0x8')] in this['listeners']) {
      let cJ = this['listeners'][cI[cu('0x8')]];
      for (var cK = 0x0, cL = cJ[cu('0x5')]; cK < cL; cK++) cJ[cK][cu('0x9')](this, cI);
    }
  }

  ['on'](cM, cN) {
    return this['addEventListener'](cM, cN);
  }
}

var cO = ['clearCache', 'lastResource', 'getCanvas', 'then', 'onload'];
!function (cP) {
  !function (cQ) {
    for (; --cQ;) cP['push'](cP['shift']());
  }(0x79);
}(cO);
var cR = function (cT, cU) {
  return cO[cT = +cT];
}, cS = {};

class cV {
  [cR('0x0')]() {
    cS = {};
  }

  ['loadImage'](cW, cX) {
    let cY = this;

    function cZ(cW) {
      cX(cW), cY['hasLoaded'] = !0x0;
    }

    cY[cR('0x1')] = cW;
    let d1 = cS[cW];
    null == d1 ? 0x1 != cW['isHtmlImage'] ? (d1 = new Image(), d1['src'] = cW, d1[cR('0x4')] = function () {
      cS[cW] = d1, cZ(d1);
    }) : cW[cR('0x2')]()[cR('0x3')](cZ) : cZ(d1);
  }
}

var d3 = new cV(),
  d4 = ['fillStyle', 'roundRadius', 'lineWidth', 'setStyles', 'set', 'borderWidth', 'backgroundWidthRate', 'backgroundHeight', 'backgroundHeightRate', 'height', 'backgroundPositionXName', 'backgroundPositionYName', 'center', 'right', 'top', 'bottom', 'backgroundPositionX', 'backgroundPositionXRate', 'backgroundPositionY', 'backgroundPositionYRate', 'no-repeat', 'applyTo', 'font', 'textAlign', 'textBaseline', 'getGradient', 'lineGap', 'lineCap', 'lineJoin', 'miterLimit', 'lineDash', 'setLineDash', 'lineDashOffset', 'globalAlpha', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'globalCompositeOperation', 'fromPojo', '_backgroundImage', 'Style', 'prototype', '_border', 'borderStyle', 'borderColor', 'toLowerCase', 'replace', 'split', 'length', 'endsWith', 'substring', 'startsWith', 'url(', '_backgroundSize', 'backgroundWidth', '_backgroundPosition', '_background', 'backgroundColor', 'backgroundSize', 'backgroundImage', 'backgroundAttachment', 'indexOf', 'repeat', 'inherit', 'backgroundRepeat', 'left', 'none,hidden,dotted,dashed,solid,doubble,groove,ridge,inseet,outset,inherit', '119119119046106116111112111046099111109', 'startX', 'stopX', 'stopY', 'cache', 'colors', 'createLinearGradient', 'startY', 'xStart', 'xStop', 'radiusEnd', 'addColorStop', 'push', 'createRadialGradient', 'yStart', 'radiusStart', 'yStop', 'image', 'src', 'loadImage', 'repetition', 'pattern', 'createPattern', 'toPojo', 'assign', '_backgroundImageObject', 'strokeStyle'];
!function (d5) {
  !function (d6) {
    for (; --d6;) d5['push'](d5['shift']());
  }(0x179);
}(d4);
var d7 = function (d8, d9) {
  return d4[d8 = +d8];
};

class da {
  constructor(db) {
    null != db && Object['assign'](this, db);
  }

  [d7('0x0')]() {
    let dc = {};
    return Object[d7('0x1')](dc, this), delete dc[d7('0x2')], delete dc['fontColor'], delete dc[d7('0x3')], delete dc[d7('0x4')], delete dc[d7('0x5')], delete dc[d7('0x6')], dc;
  }

  [d7('0x7')](dd) {
    null != dd && Object[d7('0x1')](this, dd);
  }

  [d7('0x8')](de, df) {
    this[de] = df;
  }

  ['getBackgroundRect'](dg, dh, di) {
    var dj, dk = this[d7('0x9')] || 0x0;
    let dl = dk, dm = dk, dn = dg, dp = dh;
    return null != this['backgroundWidth'] ? dn = this['backgroundWidth'] : null != this[d7('0xa')] ? dn = dg * this[d7('0xa')] : null != this['_backgroundImageObject'] && (dn = this[d7('0x2')]['width']), null != this[d7('0xb')] ? dp = this[d7('0xb')] : null != this[d7('0xc')] ? dp = dh * this[d7('0xc')] : null != this[d7('0x2')] && (dp = this[d7('0x2')][d7('0xd')]), null != this['backgroundPositionXName'] ? (dj = this[d7('0xe')], dk = this[d7('0xf')], dj == d7('0x10') ? dl += 0.5 * dg - 0.5 * dn : 'left' == dj || dj == d7('0x11') && (dl += dg - dn), dk == d7('0x10') ? dm += 0.5 * dh - 0.5 * dp : dk == d7('0x12') || dk == d7('0x13') && (dm += dh - dp)) : (null != this['backgroundPositionX'] ? dl += this[d7('0x14')] : null != this[d7('0x15')] && (dl += dg * this['backgroundPositionXRate']), null != this[d7('0x16')] ? dm += this[d7('0x16')] : null != this[d7('0x17')] && (dm += dh * this[d7('0x17')])), this['backgroundRepeat'], d7('0x18'), {
      'x': dl,
      'y': dm,
      'width': dn,
      'height': dp
    };
  }

  [d7('0x19')](dq) {
    var dr = this;
    null != dr[d7('0x1a')] && (dq[d7('0x1a')] = dr['font']), null != dr[d7('0x1b')] && (dq[d7('0x1b')] = dr['textAlign']), null != dr[d7('0x1c')] && (dq[d7('0x1c')] = dr[d7('0x1c')]), null != dr[d7('0x4')] && (null == dr['fillStyle'][d7('0x1d')] ? dq[d7('0x4')] = dr[d7('0x4')] : dq[d7('0x4')] = dr[d7('0x4')][d7('0x1d')](dq)), null != dr[d7('0x3')] && (null == dr[d7('0x3')][d7('0x1d')] ? dq['strokeStyle'] = dr[d7('0x3')] : dq[d7('0x3')] = dr[d7('0x3')][d7('0x1d')](dq)), null != dr[d7('0x1e')] && (dq[d7('0x1f')] = dr['lineCap']), null != dr[d7('0x20')] && (dq[d7('0x20')] = dr['lineJoin']), null != dr['lineWidth'] && (dq[d7('0x6')] = dr['lineWidth']), null != dr[d7('0x21')] && (dq[d7('0x21')] = dr[d7('0x21')]), null != dr[d7('0x22')] ? dq[d7('0x23')](dr[d7('0x22')]) : dq[d7('0x23')]([]), null != dr[d7('0x24')] && (dq[d7('0x24')] = dr['lineDashOffset']), null != dr[d7('0x25')] && (dq[d7('0x25')] = dr['globalAlpha']), null != dr[d7('0x26')] && (dq[d7('0x26')] = dr[d7('0x26')]), null != dr[d7('0x27')] && (dq['shadowColor'] = dr['shadowColor']), null != dr[d7('0x28')] && (dq['shadowOffsetX'] = dr[d7('0x28')]), null != dr['shadowOffsetY'] && (dq[d7('0x29')] = dr['shadowOffsetY']), null != dr[d7('0x2a')] && (dq[d7('0x2a')] = dr[d7('0x2a')]);
  }
}

function ds(dt) {
  return dt == d7('0x46') || 'right' == dt || dt == d7('0x10') || dt == d7('0x12') || dt == d7('0x13');
}

function du(dv) {
  let dw = d7('0x47');
  return -0x1 != dw[d7('0x42')](dv);
}

da[d7('0x2b')] = function (dz) {
  let dA = new da(dz);
  return null != dz['_backgroundImage'] && (dA['backgroundImage'] = dz[d7('0x2c')]), dA;
}, bN(da['prototype'], {
  'className': {'value': d7('0x2d')},
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
}), Object[d7('0x1')](da[d7('0x2e')], {
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
}), Object['defineProperties'](da['prototype'], {
  'border': {
    'get'() {
      return this[d7('0x2f')];
    }, 'set'(dB) {
      if (null != dB) {
        this[d7('0x30')] = void 0x0, this[d7('0x9')] = void 0x0, this[d7('0x31')] = void 0x0;
        var dC = dB[d7('0x32')]()[d7('0x33')](/\s+/gi, '\x20')[d7('0x34')]('\x20');
        for (let dD = 0x0; dD < dC[d7('0x35')]; dD++) {
          let dB = dC[dD];
          du(dB) ? this[d7('0x30')] = dB : dB[d7('0x36')]('px') ? this[d7('0x9')] = parseFloat(dB[d7('0x37')](0x0, dB[d7('0x35')] - 0x2)) : this[d7('0x31')] = dB;
        }
      }
      this['_border'] = dB;
    }
  }, 'backgroundImage': {
    'get'() {
      return this['_backgroundImage'];
    }, 'set'(dF) {
      if (null != dF) {
        this[d7('0x2')] = void 0x0;
        let dG = dF['toLowerCase']();
        dG[d7('0x38')](d7('0x39')) && (dG = dG[d7('0x33')](/\s+/gi, '\x20'), dG = dG[d7('0x37')](0x5, dG['length'] - 0x2)), this[d7('0x2c')] = dG, this[d7('0x2c')] = dG;
        let dH = this;
        d3['loadImage'](dG, function (dG) {
          dH[d7('0x2')] = dG;
        });
      } else this[d7('0x2c')] = dF;
    }
  }, 'backgroundSize': {
    'get'() {
      return this[d7('0x3a')];
    }, 'set'(dJ) {
      if (null != dJ) {
        var dK = (dJ = dJ[d7('0x32')]()[d7('0x33')](/\s+/gi, '\x20'))[d7('0x34')]('\x20');
        if (this[d7('0x3b')] = void 0x0, this['backgroundHeight'] = void 0x0, this[d7('0xa')] = void 0x0, this[d7('0xc')] = void 0x0, 0x0 < dK['length']) {
          let dJ = dK[0x0];
          dJ[d7('0x36')]('px') ? this[d7('0x3b')] = parseFloat(dJ[d7('0x37')](0x0, dJ['length'] - 0x2)) : this['backgroundWidthRate'] = parseFloat(dJ['substring'](0x0, dJ[d7('0x35')] - 0x1)) / 0x64;
        }
        if (0x1 < dK[d7('0x35')]) {
          let dJ = dK[0x1];
          dJ[d7('0x36')]('px') ? this[d7('0xb')] = parseFloat(dJ) : this['backgroundHeightRate'] = parseFloat(dJ[d7('0x37')](0x0, dJ[d7('0x35')] - 0x1)) / 0x64;
        }
      }
      this[d7('0x3a')] = dJ;
    }
  }, 'backgroundPosition': {
    'get'() {
      return this[d7('0x3c')];
    }, 'set'(dN) {
      if (null != dN) {
        var dO = (dN = dN['toLowerCase']()[d7('0x33')](/\s+/gi, '\x20'))[d7('0x34')]('\x20');
        if (this[d7('0xe')] = void 0x0, this['backgroundPositionYName'] = void 0x0, this[d7('0x14')] = void 0x0, this[d7('0x16')] = void 0x0, this[d7('0x15')] = void 0x0, this[d7('0x17')] = void 0x0, 0x0 < dO['length']) {
          let dN = dO[0x0];
          var dQ = dN['endsWith']('px'), dR = dN[d7('0x36')]('%');
          ds(dN) ? this['backgroundPositionXName'] = dN : dR ? this[d7('0x15')] = parseFloat(dN[d7('0x37')](0x0, dN[d7('0x35')] - 0x1)) : dQ && (this[d7('0x14')] = parseFloat(dN[d7('0x37')](0x0, dN[d7('0x35')] - 0x2))), this[d7('0xf')] = 'center';
        }
        if (0x1 < dO[d7('0x35')]) {
          let dN = dO[0x1];
          dQ = dN[d7('0x36')]('px'), dO = dN[d7('0x36')]('%');
          ds(dN) ? this['backgroundPositionYName'] = dN : dO ? this[d7('0x17')] = parseFloat(dN[d7('0x37')](0x0, dN[d7('0x35')] - 0x1)) : dQ && (this['backgroundPositionY'] = parseFloat(dN[d7('0x37')](0x0, dN[d7('0x35')] - 0x2)));
        }
      }
      this['_backgroundPosition'] = dN;
    }
  }, 'background': {
    'get'() {
      return this[d7('0x3d')];
    }, 'set'(dT) {
      if (this['backgroundRepeat'] = void 0x0, this[d7('0x3e')] = void 0x0, this[d7('0x3f')] = void 0x0, this[d7('0x3b')] = void 0x0, this['backgroundHeight'] = void 0x0, this[d7('0xa')] = void 0x0, this['backgroundHeightRate'] = void 0x0, this[d7('0x14')] = void 0x0, this[d7('0x16')] = void 0x0, this[d7('0x15')] = void 0x0, this['backgroundPositionYRate'] = void 0x0, this[d7('0x2c')] = void 0x0, this[d7('0x40')] = void 0x0, this[d7('0x41')] = void 0x0, null != dT) {
        var dU, dV, dW = (dT = dT[d7('0x32')]()[d7('0x33')](/\s+/gi, '\x20'))[d7('0x34')]('\x20');
        let dX, dY, dZ, e0;
        for (let e1 = 0x0; e1 < dW[d7('0x35')]; e1++) {
          let dT = dW[e1];
          'fixed' != dT ? (dV = dT['endsWith']('px'), dU = dT['endsWith']('%'), dT[d7('0x38')]('url') ? this[d7('0x40')] = dT : -0x1 != dT[d7('0x42')](d7('0x43')) || dT == d7('0x44') ? this[d7('0x45')] = dT : dU ? (dU = parseFloat(dT[d7('0x37')](0x0, dT['length'] - 0x1)) / 0x64, null == dX && null == dZ ? dZ = dU : e0 = dU) : dV ? (dV = parseFloat(dT['substring'](0x0, dT[d7('0x35')] - 0x2)), null == dX && null == dZ ? dX = dV : dY = dV) : this[d7('0x3e')] = dT) : this['backgroundAttachment'] = dT;
        }
        null != dX && (this['backgroundPositionX'] = dX, this[d7('0x15')] = void 0x0), null != dY && (this[d7('0x16')] = dY, this[d7('0x17')] = void 0x0), null != dZ && (this['backgroundPositionXRate'] = dZ, this['backgroundPositionX'] = void 0x0), null != e0 && (this['backgroundPositionYRate'] = e0, this['backgroundPositionY'] = void 0x0);
      }
      this['_background'] = dT;
    }
  }
}), d3['w'] = d7('0x48');

class e3 {
  constructor(e4, e5, e6, e7) {
    this[d7('0x49')] = e4, this['startY'] = e5, this[d7('0x4a')] = e6, this[d7('0x4b')] = e7, this[d7('0x4c')] = !0x1;
  }

  ['addColorStop'](e8, e9) {
    null == this[d7('0x4d')] && (this['colors'] = []), this['colors']['push']([e8, e9]);
  }

  [d7('0x1d')](ea) {
    let eb = ea[d7('0x4e')](this[d7('0x49')], this[d7('0x4f')], this[d7('0x4a')], this['stopY']);
    if (null != this['colors']) for (var ec = 0x0; ec < this[d7('0x4d')][d7('0x35')]; ec++) {
      var ed = this[d7('0x4d')][ec];
      eb['addColorStop'](ed[0x0], ed[0x1]);
    }
    return eb;
  }
}

class ee {
  constructor(ef, eg, eh, ei, ej, ek) {
    this[d7('0x50')] = ef, this['yStart'] = eg, this['radiusStart'] = eh, this[d7('0x51')] = ei, this['yStop'] = ej, this[d7('0x52')] = ek;
  }

  [d7('0x53')](el, em) {
    null == this['colors'] && (this[d7('0x4d')] = []), this[d7('0x4d')][d7('0x54')]([el, em]);
  }

  [d7('0x1d')](en) {
    let eo = en[d7('0x55')](this['xStart'], this[d7('0x56')], this[d7('0x57')], this[d7('0x51')], this[d7('0x58')], this['radiusEnd']);
    if (null != this[d7('0x4d')]) for (var ep = 0x0; ep < this[d7('0x4d')][d7('0x35')]; ep++) {
      var eq = this[d7('0x4d')][ep];
      eo[d7('0x53')](eq[0x0], eq[0x1]);
    }
    return eo;
  }
}

class er {
  constructor(es, et) {
    let eu = this;
    'string' == typeof (this['image'] = es) && (this[d7('0x59')] = new Image(), this[d7('0x59')][d7('0x5a')] = es, d3[d7('0x5b')](es, function (es) {
      eu[d7('0x59')] = es;
    })), this[d7('0x5c')] = et || d7('0x18');
  }

  [d7('0x1d')](ew) {
    return null == this[d7('0x5d')] && (this[d7('0x5d')] = ew[d7('0x5e')](this['image'], this[d7('0x5c')])), this[d7('0x5d')];
  }
}

var ex = ['len', 'negate', 'add', 'normalize', 'dot', 'projection', 'sqrt', 'scale'];
!function (ey) {
  !function (ez) {
    for (; --ez;) ey['push'](ey['shift']());
  }(0xb7);
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
  return Math['sqrt'](eY[0x0] * eY[0x0] + eY[0x1] * eY[0x1]);
}

function eZ(f0, f1) {
  return f0[0x0] * f1[0x0] + f0[0x1] * f1[0x1];
}

function f2(f3, f4, f5) {
  return eI(f3, f5, eZ(f4, f5)), f3;
}

eB['multiplyC'] = eI, eB[eA('0x1')] = eM, eB[eA('0x2')] = eX, eB[eA('0x3')] = eQ, eB[eA('0x4')] = eE, eB[eA('0x5')] = eT, eB[eA('0x6')] = eZ, eB[eA('0x7')] = f2;
var f6 = ['assert\x20error\x20betweenPoints', 'moveTo', 'lineTo', 'MAX_SAFE_INTEGER', 'forEach', 'cos', 'sin', 'push', 'len', 'normalize', 'atan2', 'sqrt', 'length', 'points.length\x20<\x202', 'log'];
!function (f7) {
  !function (f8) {
    for (; --f8;) f7['push'](f7['shift']());
  }(0x103);
}(f6);
var f9 = function (fa, fb) {
  return f6[fa = +fa];
};

function fc(fd) {
  let fe = Number[f9('0x0')], ff = Number[f9('0x0')], fg = Number['MIN_SAFE_INTEGER'], fh = Number['MIN_SAFE_INTEGER'];
  return fd[f9('0x1')](function (fd) {
    fd[0x0] < fe && (fe = fd[0x0]), fd[0x1] < ff && (ff = fd[0x1]), fd[0x0] > fg && (fg = fd[0x0]), fd[0x1] > fh && (fh = fd[0x1]);
  }), new u(fe, ff, fg - fe, fh - ff);
}

function fj(fk, fl, fm, fo, fp, fq) {
  let fr = [];
  var fs = 0x2 * Math['PI'] / fk;
  null == fo && (fo = 0x1), null == fp && (fp = 0x1);
  for (var ft = 0x0; ft < fk; ft++) {
    var fu = fl + fo * Math[f9('0x2')](fq + ft * fs), fv = fm + fp * Math[f9('0x3')](fq + ft * fs);
    fr[f9('0x4')]({'x': fu, 'y': fv});
  }
  return fr;
}

function fw(fx, fy, fz, fA) {
  var fB = (0x1 - fz) * fx['x'], fC = (0x1 - fz) * fx['y'];
  let fD = {'x': fB + fz * fy['x'], 'y': fC + fz * fy['y']};
  return fA && (fx = Math[f9('0x7')](fy['y'] - fx['y'], fy['x'] - fx['x']), fD = {
    'x': fD['x'] + fA * Math['cos'](fx),
    'y': fD['y'] + fA * Math[f9('0x3')](fx)
  }), fD;
}

function fE(fF, fG) {
  var fH = fG['x'] - fF['x'], fF = fG['y'] - fF['y'];
  return Math[f9('0x8')](fH * fH + fF * fF);
}

function fJ(fK) {
  var fL = fK[f9('0x9')];
  if (fL < 0x2) throw new Error(f9('0xa'));
  var fM = fK[0x0], fN = fK[fL - 0x1];
  if (0x2 == fK[f9('0x9')]) return fE(fM, fN);
  let fO = 0x0;
  for (var fP = 0x1; fP < fL; fP++) fO += fE(fK[fP - 0x1], fK[fP]);
  return fO;
}

function fQ(fR, fS, fT) {
  var fU = fR[f9('0x9')];
  if (fR[f9('0x9')] < 0x2) throw new Error('points.length\x20<\x202');
  var fV = fR[0x0], fW = fR[fR[f9('0x9')] - 0x1];
  if (0x2 == fR['length']) return fw(fV, fW, fS, fT);
  if (fS < 0x0) return fw(fR[0x0], fR[0x1], fS, fT);
  if (0x1 < fS) return fw(fR[fR['length'] - 0x2], fR[fR[f9('0x9')] - 0x1], fS, fT);
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
  throw console[f9('0xb')](fR, fS), new Error(f9('0xc'));
}

function g2(g3, g4) {
  var ga = g4['x'] - g3['x'], g6 = g4['y'] - g3['y'], g7 = (g4['x'] + g3['x']) / 0x2, g4 = (g4['y'] + g3['y']) / 0x2,
    g3 = Math[f9('0x8')](ga * ga + g6 * g6) / 0x2, ga = Math[f9('0x7')](g6, ga) + Math['PI'] / 0x2;
  return {'x': g7 + g3 * Math[f9('0x2')](ga), 'y': g4 + g3 * Math[f9('0x3')](ga)};
}

var gb = ['compare', 'next', 'back'];
!function (gd) {
  !function (ge) {
    for (; --ge;) gd['push'](gd['shift']());
  }(0x86);
}(gb);
var gf = function (gg, gh) {
  return gb[gg = +gg];
};
let gi = 0x0;

class gj {
}

gj[gf('0x0')] = function () {
  return ++gi;
}, gj[gf('0x1')] = function () {
  return --gi;
}, gj['getMax'] = function () {
  return gi;
}, gj['resetTo'] = function (gk) {
  gi = gk;
}, gj[gf('0x2')] = function (gl) {
  null != gl && gl > gi && gj['resetTo'](gl + 0x1);
};
var gm = ['time', 'isDouble', 'DragEvent', 'call', 'raw', 'details', 'type', 'preventDefault', 'now', 'previous', 'key'];
!function (gn) {
  !function (go) {
    for (; --go;) gn['push'](gn['shift']());
  }(0x80);
}(gm);
var gp = function (gq, gr) {
  return gm[gq = +gq];
};
let gs;

function gt(gu) {
  let gv = new KeyboardEvent(gu[gp('0x0')], gu), gw = gv[gp('0x1')];
  var gx, gy;
  return gv['preventDefault'] = function () {
    gu[gp('0x1')](), gw['call'](this);
  }, gv['time'] = Date[gp('0x2')](), gv[gp('0x3')] = gs, gs && (gx = gu[gp('0x4')] == gs[gp('0x4')], gy = gv['time'] - gs[gp('0x5')], gx && gy < 0x190 && (gv[gp('0x6')] = !0x0)), gs = gv, gv;
}

function gz(gA, gB) {
  let gC;
  gB instanceof WheelEvent ? gC = new WheelEvent(gA, gB) : window[gp('0x7')] && gB instanceof window[gp('0x7')] ? gC = new DragEvent(gA, gB) : gB instanceof MouseEvent ? gC = new MouseEvent(gA, gB) : gB instanceof TouchEvent && (gC = new TouchEvent(gA, gB));
  let gD = gC[gp('0x1')];
  return gC[gp('0x1')] = function () {
    gB['preventDefault'](), gD[gp('0x8')](this);
  }, gC[gp('0x9')] = gB, gC[gp('0xa')] = gB[gp('0xa')], gC;
}

var gE = ['class\x20not\x20exist\x20name:', 'name', 'prototype', 'length', 'serializers', 'concat', 'defineProperties'];
!function (gF) {
  !function (gG) {
    for (; --gG;) gF['push'](gF['shift']());
  }(0x17c);
}(gE);
var gH = function (gI, gJ) {
  return gE[gI = +gI];
};

function gK(gL, gM, gN) {
  return null == gN ? gO(gL[gH('0x0')], gL, gM) : gO(gL, gM, gN);
}

function gO(gP, gQ, gR) {
  if (null != c1[gP]) throw new Error('class\x20already\x20reg,\x20name:' + gP);
  const gS = gQ[gH('0x1')];
  null != gR && 0x0 < gR[gH('0x2')] && (gS[gH('0x3')] = gS[gH('0x3')][gH('0x4')](gR)), Object['defineProperties'](gS, {'className': {'writable': !0x0}}), gS['className'] = gP, Object[gH('0x5')](gS, {'className': {'writable': !0x1}}), c1[gP] = gQ;
}

function gT(gU) {
  var gV = c1[gU];
  if (null == gV) throw new Error(gH('0x6') + gU);
  return gV;
}

var gW = ['backgroundPositionXName', 'backgroundPositionYName', 'className', 'length', 'image', 'style', 'map', 'removeAllChild', 'parent', 'addChild', 'filter', 'isLink', 'serializers', 'hasOwnProperty', 'getOwnPropertyDescriptor', 'writable', 'next', 'isDisplayObjectId', 'target', 'begin', 'setBegin', 'end', 'setEnd', 'label', 'beginArrow', 'endArrow', 'assign', 'Roots', 'DisplayObjects', 'Styles', 'Resources', 'forEach', 'src', 'version', 'fromPojo', 'fillStyle', 'background', 'color', 'strokeStyle', 'lineWidth', 'borderWidth', 'borderStyle', 'solid', 'borderRadius'];
!function (gX) {
  !function (gY) {
    for (; --gY;) gX['push'](gX['shift']());
  }(0x150);
}(gW);
var gZ = function (h0, h1) {
  return gW[h0 = +h0];
};

function h2(h3, h4) {
  let h5 = {}, h6 = {}, h7 = {}, h8 = h3[gZ('0x0')] || [0x0], h9 = h3[gZ('0x1')], ha = h3[gZ('0x2')],
    hb = h3[gZ('0x3')];
  hb[gZ('0x4')](function (h3, h9) {
    h7[h9] = h3[gZ('0x5')];
  });
  const he = h3[gZ('0x6')];
  ha[gZ('0x4')](function (h3, h9) {
    let ha = da[gZ('0x7')](h3);
    if (h6[h9] = ha, he <= '1.3.8') for (var hb in h3) {
      var h4 = h3[hb];
      hb == gZ('0x8') ? ha[gZ('0x9')] = h4 : 'fontColor' == hb ? ha[gZ('0xa')] = h4 : hb == gZ('0xb') ? ha['borderColor'] = h4 : hb == gZ('0xc') ? ha[gZ('0xd')] = h4 : 'lineDash' == hb ? ha[gZ('0xe')] = gZ('0xf') : 'roundRadius' == hb ? ha[gZ('0x10')] = h4 : hb == gZ('0x11') ? ha[gZ('0x11')] = h4 : hb == gZ('0x12') && (ha[gZ('0x12')] = h4);
    }
  });
  let hk = new b8();
  let hl = h9[gZ('0x17')](function (h3, h9) {
    let ha;
    var hb;
    return h4 && (ha = h4[h3['id']]), null == ha && (ha = hW(h3[gZ('0x13')])), h9 < h8[gZ('0x14')] && hk['push'](ha), hA(h3, ha), null != h3[gZ('0x15')] && (hb = h7[h3[gZ('0x15')]], ha['imageSrc'] = hb), null != h3['style'] && (h3 = h6[h3['style']], ha[gZ('0x16')] = h3), h5[h9] = ha, ha;
  });
  hl[gZ('0x4')](h3 => {
    h3[gZ('0x18')]();
  }), h9[gZ('0x4')]((h9, ha) => {
    ha = hl[ha];
    if (null != h9[gZ('0x19')]) {
      let h3 = h5[h9[gZ('0x19')]];
      cc(h3), h3[gZ('0x1a')](ha);
    }
  });
  let hu = h9[gZ('0x1b')](h3 => h3[gZ('0x1c')]), hv = hl[gZ('0x1b')](h3 => h3['isLink']);
  return hu[gZ('0x4')](function (h3, h9) {
    h9 = hv[h9];
    hS(h9, h3, h5), hN(h9, h3, h5);
  }), hk;
}

function hA(hB, hC) {
  let hD = hC[gZ('0x1d')], hE = Object['getPrototypeOf'](hC);
  return hD[gZ('0x4')](hF => {
    if (hF != gZ('0x13')) if (hB[gZ('0x1e')](hF)) {
      let hD = Object[gZ('0x1f')](hC, hF);
      if (null == hD && (hD = Object[gZ('0x1f')](hE, hF)), null == hD || 0x0 != hD[gZ('0x20')]) {
        let hD = hB[hF];
        null != hD && null != hD[gZ('0x13')] && (hD = hW(hD[gZ('0x13')], hD)), hC[hF] = hD;
      }
    } else hC[hF] = hE[hF];
  }), null == hC['id'] && (hC['id'] = gj[gZ('0x21')]()), hC;
}

function hI(hJ, hK) {
  var hL = hJ['target'];
  let hM = hW(hJ['className'], hJ);
  if (hM[gZ('0x22')]()) {
    if (hM['target'] = hK[hL], null == hM[gZ('0x23')]) throw new Error('找不到link的端点对象，序列化时有错误:' + hL);
  } else hM[gZ('0x23')] = hL;
  return cc(hM, hJ), hM;
}

function hN(hO, hP, hQ) {
  var hR = hI(hP[gZ('0x24')], hQ);
  hO[gZ('0x25')](hR[gZ('0x23')], hR);
  hQ = hI(hP[gZ('0x26')], hQ);
  hO[gZ('0x27')](hQ[gZ('0x23')], hQ);
}

function hS(hT, hU, hV) {
  null != hU[gZ('0x28')] && (hT[gZ('0x28')] = hV[hU[gZ('0x28')]]), null != hU['beginArrow'] && (hT[gZ('0x29')] = hV[hU[gZ('0x29')]]), null != hU[gZ('0x2a')] && (hT[gZ('0x2a')] = hV[hU[gZ('0x2a')]]);
}

function hW(hX, hY) {
  let hZ;
  try {
    let i0 = gT(hX);
    hZ = new i0(), hY && Object[gZ('0x2b')](hZ, hY);
  } catch (i1) {
    throw new Error('unkown\x20class\x20name:\x20' + hX);
  }
  return hZ;
}

var i2 = ['length', 'abs', 'middle', 'getAngle', 'atan2', 'rotate', 'cos', 'sin', 'sqrt', 'distancePoint', 'mergePoints', 'normalize', 'push', 'extend', 'offsetWithAngle', 'number', 'createPoints', 'createPoints2', 'concat', 'log', 'x\x20and\x20y\x20can\x20not\x20be\x20null', 'isLikePoint', 'keys'];
!function (i3) {
  !function (i4) {
    for (; --i4;) i3['push'](i3['shift']());
  }(0x13f);
}(i2);
var i5 = function (i6, i7) {
  return i2[i6 = +i6];
};

class i8 {
  constructor(i9, ia) {
    if (null == i9 || null == ia) throw console[i5('0x0')](i9, ia), new Error(i5('0x1'));
    this['x'] = i9, this['y'] = ia;
  }

  ['toPojo']() {
    return {'x': this['x'], 'y': this['y']};
  }
}

i8[i5('0x2')] = function (ib) {
  return ib instanceof i8 || 0x2 == Object[i5('0x3')](ib)[i5('0x4')] && null != ib['x'] && null != ib['y'];
}, i8['looksSame'] = function (ic, ie, ig) {
  if (ic === ie) return !0x0;
  var ih = Math[i5('0x5')](ie['x'] - ic['x']), ic = Math[i5('0x5')](ie['y'] - ic['y']);
  return ih < (ig = null == ig ? 0.01 : ig) && ic < ig;
}, i8[i5('0x6')] = function (ij, ik) {
  return {'x': (ik['x'] + ij['x']) / 0x2, 'y': (ik['y'] + ij['y']) / 0x2};
}, i8[i5('0x7')] = function (il, im) {
  return Math[i5('0x8')](im['y'] - il['y'], im['x'] - il['x']);
}, i8[i5('0x9')] = function (io, ip, iq, ir, is) {
  return {
    'x': (io - iq) * Math[i5('0xa')](is) - (ip - ir) * Math[i5('0xb')](is) + iq,
    'y': (io - iq) * Math[i5('0xb')](is) + (ip - ir) * Math[i5('0xa')](is) + ir
  };
}, i8['rotatePoint'] = function (it, iu, iv) {
  return {
    'x': (it['x'] - iu['x']) * Math['cos'](iv) - (it['y'] - iu['y']) * Math['sin'](iv) + iu['x'],
    'y': (it['x'] - iu['x']) * Math['sin'](iv) + (it['y'] - iu['y']) * Math[i5('0xa')](iv) + iu['y']
  };
}, i8['distance'] = function (iw, ix, iy, iz) {
  iw = iy - iw, ix = iz - ix;
  return Math[i5('0xc')](iw * iw + ix * ix);
}, i8[i5('0xd')] = function (iA, iB) {
  var iC = iB['x'] - iA['x'], iA = iB['y'] - iA['y'];
  return Math['sqrt'](iC * iC + iA * iA);
}, i8[i5('0xe')] = function (iE) {
  let iF = [iE[0x0]];
  for (let iG = 0x1; iG < iE[i5('0x4')] - 0x1; iG++) {
    var iH = iF[iF[i5('0x4')] - 0x1], iI = iE[iG], iJ = iE[iG + 0x1];
    iI['x'] === iJ['x'] && iI['y'] === iJ['y'] || (iH = eB[i5('0xf')]([], [iI['x'] - iH['x'], iI['y'] - iH['y']]), iJ = eB[i5('0xf')]([], [iJ['x'] - iI['x'], iJ['y'] - iI['y']]), Math[i5('0x5')](iH[0x0] - iJ[0x0]) < 0.01 && Math['abs'](iH[0x1] - iJ[0x1]) < 0.01 || iF[i5('0x10')](iI));
  }
  return iF['push'](iE[iE[i5('0x4')] - 0x1]), iF;
}, i8[i5('0x11')] = function (iK, iL, iM) {
  iL = [iL['x'] - iK['x'], iL['y'] - iK['y']];
  return eB['normalize'](iL, iL), eB['scale'](iL, iL, iM), {'x': iK['x'] + iL[0x0], 'y': iK['y'] + iL[0x1]};
}, i8[i5('0x12')] = function (iN, iO, iP) {
  return typeof iP == i5('0x13') && (iP = {
    'x': Math[i5('0xa')](iO) * iP,
    'y': Math[i5('0xb')](iO) * iP
  }), {'x': iN['x'] + iP['x'], 'y': iN['y'] + iP['y']};
}, i8[i5('0x14')] = function (iQ, iR, iS, iT) {
  const iU = iT ? [iQ] : [];
  var iV = iT ? iS - 0x1 : iS;
  let iW = iQ;
  for (var iX = 0x0; iX < iV; iX++) {
    var iY = {'x': iW['x'] + iR[0x0], 'y': iW['y'] + iR[0x1]};
    iU['push'](iY), iW = iY;
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
var j8 = ['beginArrow', 'endArrow', 'style', 'image', 'target', 'getBeginPoint', 'getEndPoint', 'isLikePoint', 'function', 'stringify', 'serializers', 'getPrototypeOf', 'userData', 'parse', 'className', 'number', 'toString', 'toFixed', 'flatten', 'concat', 'children', 'serializeable', 'forEach', 'get', 'length', 'set', 'push', 'toPojo', 'imageSrc', 'img', 'objIndexMap', 'styleIndexMap', 'Roots', 'map', 'Styles', 'styles', 'Resources', 'resources', 'DisplayObjects', 'isNode', 'isLink', 'isLayer', 'log', 'unkonw\x20object\x20type:', 'parent', 'begin', 'end', 'label'];
!function (j9) {
  !function (ja) {
    for (; --ja;) j9['push'](j9['shift']());
  }(0xa3);
}(j8);
var jb = function (jc, jd) {
  return j8[jc = +jc];
};

function je(jf) {
  let jg = jf[0x0]['children'][jb('0x0')]();
  for (let jh = 0x1; jh < jf['length']; jh++) jg = jg[jb('0x1')](jf[jh][jb('0x2')]['flatten'](jh => jh[jb('0x3')]));
  let jj = jf[jb('0x1')](jg), jk = new WeakMap(), jl = new WeakMap(), jm = [], jn = {}, jo = [];
  return jj[jb('0x4')]((jj, jf) => {
    let jg = jj['style'];
    null == jl[jb('0x5')](jg) && (js = jm[jb('0x6')], jl[jb('0x7')](jg, js), jm[jb('0x8')](jg[jb('0x9')]()));
    var js = jj[jb('0xa')];
    null != js && null == jn[js] && (jo['push']({
      'type': jb('0xb'),
      'src': js
    }), jn[js] = jo[jb('0x6')] - 0x1), jk[jb('0x7')](jj, jf);
  }), {'objects': jj, 'objIndexMap': jk, 'styleIndexMap': jl, 'styles': jm, 'resourcesIndexMap': jn, 'resources': jo};
}

function jt(ju) {
  let jv = {'version': c2};
  var jw = je(ju);
  let jx = jw['objects'], jy = jw[jb('0xc')], jz = jw[jb('0xd')], jA = jw['resourcesIndexMap'];
  return jv[jb('0xe')] = ju[jb('0xf')]((ju, jv) => jv), jv[jb('0x10')] = jw[jb('0x11')], jv[jb('0x12')] = jw[jb('0x13')], jv[jb('0x14')] = jx['map'](function (ju) {
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
  if (jJ['isNode']) jN[jb('0x15')] = !0x0; else if (jJ[jb('0x16')]) jN[jb('0x16')] = !0x0; else if (!jJ[jb('0x17')]) throw console[jb('0x18')](jJ), new Error(jb('0x19'));
  jX(jN, jJ);
  var jO, jP = jK['get'](jJ[jb('0x1a')]);
  null != jP && (jN[jb('0x1a')] = jP), 0x1 == jJ[jb('0x16')] && (jO = jJ[jb('0x1b')], jP = jJ[jb('0x1c')], jN[jb('0x1b')] = jQ(jJ, jO, 'begin', jK), jN['end'] = jQ(jJ, jP, jb('0x1c'), jK), null != jJ[jb('0x1d')] && (jN[jb('0x1d')] = jK[jb('0x5')](jJ[jb('0x1d')])), null != jJ[jb('0x1e')] && (jN[jb('0x1e')] = jK[jb('0x5')](jJ[jb('0x1e')])), null != jJ[jb('0x1f')] && (jN[jb('0x1f')] = jK[jb('0x5')](jJ['endArrow'])));
  jL = jL['get'](jJ[jb('0x20')]);
  cc(jL), jN[jb('0x20')] = jL;
  jJ = jM[jJ[jb('0xa')]];
  return null != jJ && (jN[jb('0x21')] = jJ), jN;
}

function jQ(jR, jS, jT, jU) {
  let jV = jS['target'], jW = jS['toPojo']();
  return 0x1 == jV['isDisplayObject'] ? null == (jU = jU[jb('0x5')](jV)) ? (cj('begin' == jT || jT == jb('0x1c'), jT), jW[jb('0x22')] = jT == jb('0x1b') ? jR[jb('0x23')]() : jR[jb('0x24')]()) : jW[jb('0x22')] = jU : i8[jb('0x25')](jV) ? jW[jb('0x22')] = Object['assign']({}, jV) : typeof jV == jb('0x26') && (jW['target'] = jV()), jW;
}

function jX(jY, jZ) {
  for (var k0 = jZ[jb('0x28')], k1 = Object[jb('0x29')](jZ), k2 = 0x0; k2 < k0[jb('0x6')]; k2++) {
    var k3, k4 = k0[k2];
    let k5 = jZ[k4];
    k4 == jb('0x2a') && null != k5 && (k5 = JSON[jb('0x2b')](JSON[jb('0x27')](k5))), k5 == k1[k4] && k4 != jb('0x2c') || (null != k5 && (typeof k5 == jb('0x2d') && (k5 = k6(k5, 0x6)), null != k5[jb('0x9')] ? (k3 = k5['toPojo'](), k5 = k3) : i8[jb('0x25')](k5) && (k5 = new i8(k5['x'], k5['y']))), jY[k4] = k5);
  }
}

function k6(k7, k8) {
  let k9 = k7[jb('0x2e')]();
  return -0x1 != k9['indexOf']('.') && k8 < k9[jb('0x6')] - k9['indexOf']('.') - 0x1 && (k7 = k7[jb('0x2f')](k8), k7 = parseFloat(k7)), k7;
}

var ka = ['translateBy', 'dirty', 'width', 'height', 'translatePositionTo', 'translateWith', 'getCenter', 'resizeTo', 'resizeWith', 'scaleBy', 'scaleX', 'zoom', 'scaleY', 'zoomOut', 'scaleWith', 'getScale', 'rotateBy', 'rotateTo', 'rotation', 'rotateWith', 'getRect', 'getStyle', 'setStyles', 'css', 'object', 'length', 'hasOwnProperty', 'background', 'fontColor', 'color', 'string', 'endsWith', 'substring', 'number', 'left', 'top', 'zIndex', 'updatezIndex', 'css3D', 'getTransformByDeep', 'getLayerTransform', 'show', 'visible', 'hide', 'isPointOn', 'dontNeedPickup', 'isMouseInPath', 'mousePickupStroke', 'render', '_pickRadius', 'isMouseInStroke', 'setUserData', 'userData', 'getUserData', 'definePosition', 'definePosition\x20arguments\x20error.', 'DefaultPositions', 'position\x20not\x20exist:', 'getOBB', 'getPoints', 'points', 'assign', 'keys', 'getCornerPoints', 'getLocalPoint', 't\x20is\x20not\x20number:\x20', 'getSegmentPoints', 'log', 'segIndex\x20out\x20of\x20bounds.', 'findChildren', 'push', 'concat', 'getAllNodes', 'isNode', 'getAllLinks', 'isLink', 'mouseEnabled', 'dispatchEvent', 'touchendHandler', 'touchmoveHandler', 'mousedownHandler', 'mouseoverHandler', 'mousemoveHandler', 'mouseenterHandler', 'hasListener', 'mouseenter', 'mouseoutHandler', 'mouseout', 'mousedragHandler', 'mousedrag', 'parent', 'invert', 'details', 'mousedragEndHandler', 'mousedragend', 'clickHandler', 'dblclickHandler', 'selectedHandler', 'isSelected', 'selected', 'defaultPrevented', 'unselectedHandler', 'unselected', 'pickUp', 'getTopFrozenParent', 'pickUpChild', 'painted', 'pickUpByRect', 'getAABB', 'containsRect', 'sort', 'updateChildrenDeep', 'deep', 'hasChild', 'hasChildren', 'removeFromParent', 'remove', 'removeChild', 'addChilds', 'removeAt', 'removeAllChild', 'forEach', 'replaceChild', 'replace\x20child\x20not\x20found', 'translateChildrenWith', 'getChildren', 'findFirst', 'getPaintedAABBInLayer', 'getChildrenAABB', 'getRoot', 'stageToLocalXY', 'getStageTransform', 'toStageXY', 'toLayerXY', 'toObjectLocalXY', 'getProtoDefaultProperties', 'getPrototypeOf', 'addInLink', 'inLinks', 'link', 'outLinks', 'addOutLink', 'removeInLink', 'removeOutLink', 'getLinks', 'getK', 'getPoint', 'atan2', 'getOrigin', 'origin', 'originOffset', 'cos', 'sin', 'getOriginRotation', 'originAutoRotate', 'upgradeLinks', 'map', 'upgradeParent', 'changeParent', 'addChild', 'isOutOfParent', 'isIntersectRect', 'getAncestors', 'frozen', 'isAncestors', 'toIdMap', 'flatten', 'toJson', 'stringify', 'toPojo', 'save', 'getState', 'getStates', 'pop', 'states', '_aabbInLayer', 'minDeep\x20is\x20required.', 'createFromPoints', 'union', 'borderWidth', '添加自己为子节点了', '互为子节点了', '互为子节点了2', 'copy', 'identity', 'translate', 'skewY', 'skewX', 'getPosition', 'center', 'setXY', 'begin', 'target', 'isDisplayObject', 'getBeginPoint', 'end', 'getEndPoint', 'nearest', 'prototype', '#009A93', 'className', 'editable', 'selectedStyle', 'connectable', 'showSelected', 'shadowColor', 'next', 'children', 'matrix', 'style', 'positions', 'name', 'getName', 'path', 'strokeStyle', 'stroke', 'mousePickupPath', 'fillStyle', 'fill', 'transformPoint', 'getTransform', 'point'];
!function (kb) {
  !function (kc) {
    for (; --kc;) kb['push'](kb['shift']());
  }(0x1ad);
}(ka);
var kd = function (ke, kf) {
  return ka[ke = +ke];
};
bN['t'] = 0x1f4;

class kg extends cz {
  constructor() {
    super(), this['id'] = gj[kd('0x0')](), this[kd('0x1')] = new b8(), this[kd('0x2')] = new ac(), this[kd('0x3')] = new da(), this['origin'] = [0x0, 0x0], this[kd('0x4')] = {};
  }

  ['setName'](kh) {
    this[kd('0x5')] = kh;
  }

  [kd('0x6')]() {
    return this[kd('0x5')];
  }

  ['draw'](ki) {
    if (null != this[kd('0x7')]) {
      var kj = this[kd('0x3')];
      return null != kj && null != kj[kd('0x8')] && (ki[kd('0x9')](this[kd('0x7')]), this[kd('0xa')](ki)), null != kj && null != kj[kd('0xb')] && (ki[kd('0xc')](this[kd('0x7')]), this[kd('0xa')](ki)), this;
    }
  }

  [kd('0xd')](kk) {
    let kl = this[kd('0xe')]();
    return kl[kd('0xf')](kk);
  }

  [kd('0xe')]() {
    return oa(this);
  }

  [kd('0x10')](km, kn) {
    return this[kd('0x11')] = !0x0, this['x'] *= km, this['y'] *= kn, this;
  }

  ['translateWith'](ko, kp) {
    return this['dirty'] = !0x0, this['x'] += ko, this['y'] += kp, this;
  }

  ['translateTo'](kq, kr) {
    return this['dirty'] = !0x0, this['x'] = kq, this['y'] = kr, this;
  }

  ['translateCenterTo'](ks, kt) {
    return this['dirty'] = !0x0, this['x'] = ks - this[kd('0x12')] / 0x2, this['y'] = kt - this[kd('0x13')] / 0x2, this;
  }

  [kd('0x14')](ku, kv, kw) {
    this[kd('0x11')] = !0x0;
    ku = this['getPosition'](ku), kv -= ku['x'], ku = kw - ku['y'];
    this[kd('0x15')](kv, ku);
  }

  [kd('0x16')]() {
    return {'x': this['x'] + 0.5 * this[kd('0x12')], 'y': this['y'] + 0.5 * this['height']};
  }

  ['resizeBy'](kx, ky) {
    return this[kd('0x11')] = !0x0, this[kd('0x12')] *= kx, this[kd('0x13')] *= ky, this;
  }

  [kd('0x17')](kz, kA) {
    return this[kd('0x11')] = !0x0, this[kd('0x12')] = kz, this[kd('0x13')] = kA, this;
  }

  [kd('0x18')](kB, kC) {
    return this[kd('0x11')] = !0x0, this[kd('0x12')] += kB, this['height'] += kC, this[kd('0x12')] < 0x0 && (this['width'] = 0x0), this[kd('0x13')] < 0x0 && (this[kd('0x13')] = 0x0), this;
  }

  [kd('0x19')](kD, kE) {
    return this[kd('0x11')] = !0x0, this[kd('0x1a')] *= kD, this['scaleY'] *= kE, this;
  }

  [kd('0x1b')](kF, kG) {
    this[kd('0x11')] = !0x0;
    var kJ = this[kd('0x12')] * this[kd('0x1a')], kK = this['height'] * this[kd('0x1c')], kJ = kJ * kF - kJ,
      kK = kK * kG - kK;
    return this[kd('0x19')](kF, kG), this[kd('0x15')](-kJ / 0x2, -kK / 0x2), this;
  }

  [kd('0x1d')]() {
    return this[kd('0x1b')](0.8, 0.8), this;
  }

  ['zoomIn']() {
    return this[kd('0x1b')](1.25, 1.25), this;
  }

  ['scaleTo'](kL, kM) {
    return this[kd('0x11')] = !0x0, this[kd('0x1a')] = kL, this[kd('0x1c')] = kM, this;
  }

  [kd('0x1e')](kN, kO) {
    return this[kd('0x11')] = !0x0, this[kd('0x1a')] += kN, this[kd('0x1c')] += kO, this;
  }

  [kd('0x1f')]() {
    return {'x': this['scaleX'], 'y': this['scaleY']};
  }

  [kd('0x20')](kP) {
    return this[kd('0x11')] = !0x0, this['rotation'] *= kP, this;
  }

  [kd('0x21')](kQ) {
    return this[kd('0x11')] = !0x0, this[kd('0x22')] = kQ, this;
  }

  [kd('0x23')](kR) {
    return this[kd('0x11')] = !0x0, this[kd('0x22')] += kR, this;
  }

  [kd('0x24')]() {
    return new u(this['x'], this['y'], this[kd('0x12')], this[kd('0x13')]);
  }

  [kd('0x25')](kS) {
    return this[kd('0x3')][kS];
  }

  [kd('0x26')](kT, kU) {
    return this[kd('0x27')](kT, kU);
  }

  [kd('0x27')](kV, kW) {
    if (typeof kV == kd('0x28')) {
      let kW = kV;
      var kY = Object['keys'](kW);
      for (let kV = 0x0; kV < kY[kd('0x29')]; kV++) {
        var l0 = kY[kV];
        let l1 = kW[l0];
        kW[kd('0x2a')](l0) && null != l1 && ('fillStyle' == l0 ? this[kd('0x3')][kd('0x2b')] = l1 : l0 == kd('0x2c') && (this[kd('0x3')][kd('0x2d')] = l1)), l0 == kd('0x12') ? 'number' == typeof l1 ? this['width'] = l1 : typeof l1 == kd('0x2e') && l1[kd('0x2f')]('px') && (this[kd('0x12')] = parseFloat(l1[kd('0x30')](0x0, l1['length'] - 0x2))) : l0 == kd('0x13') ? typeof l1 == kd('0x31') ? this[kd('0x13')] = l1 : 'string' == typeof l1 && l1[kd('0x2f')]('px') && (this[kd('0x13')] = parseFloat(l1[kd('0x30')](0x0, l1[kd('0x29')] - 0x2))) : l0 == kd('0x32') ? 'number' == typeof l1 ? this['x'] = l1 : typeof l1 == kd('0x2e') && l1[kd('0x2f')]('px') && (this['x'] = parseFloat(l1[kd('0x30')](0x0, l1[kd('0x29')] - 0x2))) : l0 == kd('0x33') ? 'number' == typeof l1 ? this['y'] = l1 : typeof l1 == kd('0x2e') && l1['endsWith']('px') && (this['y'] = parseFloat(l1['substring'](0x0, l1[kd('0x29')] - 0x2))) : l0 == kd('0x34') && (this[kd('0x34')] = l1, this[kd('0x35')]()), this['style'][l0] = l1;
      }
    } else {
      kV = kV;
      let l2 = kW;
      null != l2 && (kV == kd('0xb') ? this[kd('0x3')][kd('0x2b')] = l2 : kV == kd('0x2c') && (this[kd('0x3')][kd('0x2d')] = l2)), 'width' == kV ? 'number' == typeof l2 ? this[kd('0x12')] = l2 : typeof l2 == kd('0x2e') && l2[kd('0x2f')]('px') && (this[kd('0x12')] = parseFloat(l2['substring'](0x0, l2[kd('0x29')] - 0x2))) : kV == kd('0x13') ? typeof l2 == kd('0x31') ? this['height'] = l2 : 'string' == typeof l2 && l2[kd('0x2f')]('px') && (this[kd('0x13')] = parseFloat(l2[kd('0x30')](0x0, l2[kd('0x29')] - 0x2))) : 'left' == kV ? typeof l2 == kd('0x31') ? this['x'] = l2 : 'string' == typeof l2 && l2[kd('0x2f')]('px') && (this['x'] = parseFloat(l2[kd('0x30')](0x0, l2[kd('0x29')] - 0x2))) : kV == kd('0x33') ? typeof l2 == kd('0x31') ? this['y'] = l2 : typeof l2 == kd('0x2e') && l2['endsWith']('px') && (this['y'] = parseFloat(l2[kd('0x30')](0x0, l2[kd('0x29')] - 0x2))) : kV == kd('0x34') && (this[kd('0x34')] = l2, this[kd('0x35')]()), this[kd('0x3')][kV] = l2;
    }
    return this['dirty'] = !0x0, this;
  }

  [kd('0x36')](l3, l4) {
    return this[kd('0x27')](l3, l4);
  }

  [kd('0x37')](l5) {
    return o7(this, l5);
  }

  [kd('0x38')]() {
    return o7(this, co);
  }

  ['getStageTransform']() {
    return o7(this, cn);
  }

  [kd('0x39')]() {
    return this['dirty'] = !0x0, this[kd('0x3a')] = !0x0, this;
  }

  [kd('0x3b')]() {
    return this['dirty'] = !0x0, this[kd('0x3a')] = !0x1, this;
  }

  [kd('0xa')](l6, l7) {
    this[kd('0x3c')] = !0x1;
    const l8 = l6['render'];
    l8[kd('0x3d')](this) || (this['isPointOn'] = l8[kd('0x3e')](l7));
  }

  [kd('0x3f')](l9, la) {
    this[kd('0x3c')] = !0x1;
    const lc = l9[kd('0x40')];
    lc['dontNeedPickup'](this) || (null == la && (la = this[kd('0x41')]), this[kd('0x3c')] = lc[kd('0x42')](la, null));
  }

  [kd('0x43')](ld) {
    return this[kd('0x44')] = ld, this;
  }

  [kd('0x45')]() {
    return this[kd('0x44')];
  }

  ['removeUserData']() {
    return this[kd('0x44')] = void 0x0, this;
  }

  [kd('0x46')](le, lf) {
    if (null == le || null == lf) throw new Error(kd('0x47'));
    this[kd('0x4')][le] = lf;
  }

  ['getPosition'](lg, lh, li) {
    let lj = this['positions'][lg];
    if (null == lj && (lj = this[kd('0x48')][lg]), null == lj) throw Error(kd('0x49') + lg);
    return lj['call'](this, lh, li);
  }

  [kd('0x4a')](lk) {
    null == lk && (lk = co);
    let ll = this[kd('0x37')](lk);
    var lk = this[kd('0x4b')]();
    return lk = ll[kd('0x4c')](lk);
  }

  ['getPositionNames']() {
    var lo = Object['assign']({}, this[kd('0x4')]);
    return Object[kd('0x4d')](lo, this[kd('0x48')]), Object[kd('0x4e')](lo);
  }

  ['getPoints']() {
    let lp = new u(0x0, 0x0, this['width'], this['height']);
    return lp[kd('0x4f')]();
  }

  ['getPoint'](lq, lr) {
    lr = this[kd('0x50')](lq, lr);
    return {'x': this['x'] + lr['x'], 'y': this['y'] + lr['y']};
  }

  [kd('0x50')](ls, lu, lv) {
    if ('number' != typeof ls) throw new Error(kd('0x51') + ls);
    let lw = this[kd('0x52')]();
    var lx = lw[kd('0x29')] - 0x1;
    if (null != lu) {
      if (lx <= lu) throw console[kd('0x53')](this), console[kd('0x53')](lu, lx), new Error(kd('0x54'));
      lw = [lw[lu], lw[lu + 0x1]];
    }
    return fQ(lw, ls, lv);
  }

  [kd('0x55')](ly, lz, lA) {
    var lB = this['children'];
    let lC = [];
    for (var lD, lE = 0x0; lE < lB['length']; lE++) {
      let lF = lB[lE];
      lF[ly] == lz && lC[kd('0x56')](lF), lA && (lD = lF['findChildren'](ly, lz, lA), lC = lC[kd('0x57')](lD));
    }
    return lC;
  }

  [kd('0x58')]() {
    return this[kd('0x55')](kd('0x59'), !0x0, !0x0);
  }

  [kd('0x5a')]() {
    return this[kd('0x55')](kd('0x5b'), !0x0, !0x0);
  }

  ['touchstartHandler'](lG) {
    0x1 == this[kd('0x5c')] && this[kd('0x5d')](lG);
  }

  [kd('0x5e')](lH) {
    0x1 == this['mouseEnabled'] && this[kd('0x5d')](lH);
  }

  [kd('0x5f')](lI) {
    0x1 == this['mouseEnabled'] && this[kd('0x5d')](lI);
  }

  [kd('0x60')](lJ) {
    0x1 == this[kd('0x5c')] && this['dispatchEvent'](lJ);
  }

  ['mouseupHandler'](lK) {
    0x1 == this['mouseEnabled'] && this[kd('0x5d')](lK);
  }

  [kd('0x61')](lL) {
    0x1 == this[kd('0x5c')] && this[kd('0x5d')](lL);
  }

  [kd('0x62')](lM) {
    0x1 == this[kd('0x5c')] && this['dispatchEvent'](lM);
  }

  [kd('0x63')](lN) {
    0x1 == this[kd('0x5c')] && this[kd('0x64')](kd('0x65')) && (lN = gz(kd('0x65'), lN), this[kd('0x5d')](lN));
  }

  [kd('0x66')](lO) {
    0x1 == this[kd('0x5c')] && this[kd('0x64')](kd('0x67')) && (lO = gz(kd('0x67'), lO), this[kd('0x5d')](lO));
  }

  [kd('0x68')](lP) {
    if (this[kd('0x64')]('mousedrag')) {
      var lQ = gz(kd('0x69'), lP);
      if (this[kd('0x5d')](lQ), 0x1 == lQ['defaultPrevented']) return;
    }
    let lR = this[kd('0x6a')]['getStageTransform']()[kd('0x6b')]();
    lR['translateTo'](0x0, 0x0);
    lP = lR['point']({'x': lP[kd('0x6c')]['dx'], 'y': lP[kd('0x6c')]['dy']});
    this[kd('0x15')](lP['x'], lP['y']);
  }

  [kd('0x6d')](lS) {
    this[kd('0x64')](kd('0x6e')) && (lS = gz('mousedragend', lS), this['dispatchEvent'](lS), lS['defaultPrevented']);
  }

  [kd('0x6f')](lT) {
    0x1 == this['mouseEnabled'] && this[kd('0x5d')](lT);
  }

  [kd('0x70')](lU) {
    0x1 == this['mouseEnabled'] && this[kd('0x5d')](lU);
  }

  [kd('0x71')]() {
    var lV;
    0x1 == this[kd('0x5c')] && (this[kd('0x72')] = !0x0, this[kd('0x64')]('selected') && (lV = new Event(kd('0x73'), {'cancelable': !0x0}), this[kd('0x5d')](lV), lV[kd('0x74')]));
  }

  [kd('0x75')]() {
    var lW;
    0x1 == this[kd('0x5c')] && (this[kd('0x72')] = !0x1, this[kd('0x64')](kd('0x76')) && (lW = new Event(kd('0x76'), {'cancelable': !0x0}), this[kd('0x5d')](lW), lW['defaultPrevented']));
  }

  [kd('0x77')](lX, lY) {
    let lZ = this['pickUpChild'](lX);
    return null == lZ && this[kd('0x3c')] && this[kd('0x3a')] && (0x0 == this[kd('0x5c')] && 0x1 != lY || (lZ = this)), null == lZ || null != (lY = lZ[kd('0x78')]()) && (lZ = lY), lZ;
  }

  [kd('0x79')](m0, m1) {
    for (var m2 = this['children'], m3 = m2[kd('0x29')] - 0x1; 0x0 <= m3; m3--) {
      let m4 = m2[m3];
      if (m4[kd('0x7a')]) {
        var m5 = m4['pickUp'](m0, m1);
        if (null != m5) return m5;
      }
    }
    return null;
  }

  [kd('0x7b')](m6) {
    let m7 = [];
    var m8 = this['getAllVisiable']();
    if (null != m8) for (var m9, ma = 0x0; ma < m8[kd('0x29')]; ma++) {
      let mb = m8[ma];
      mb['painted'] && (m9 = mb[kd('0x7c')](!0x1, co), m6[kd('0x7d')](m9) && m7[kd('0x56')](mb));
    }
    return m7;
  }

  ['addChild'](mc) {
    return o4(this, mc), this[kd('0x11')] = !0x0, this;
  }

  ['setzIndex'](md) {
    this[kd('0x34')] = md, this[kd('0x6a')] && this[kd('0x6a')][kd('0x35')](), this[kd('0x11')] = !0x0;
  }

  [kd('0x35')]() {
    this[kd('0x1')][kd('0x7e')](function (me, mf) {
      return me[kd('0x34')] - mf[kd('0x34')];
    }), this[kd('0x11')] = !0x0;
  }

  [kd('0x7f')](mg) {
    if (0x0 < this['children']['length']) {
      var mh = this[kd('0x1')];
      for (let mi = 0x0; mi < mh[kd('0x29')]; mi++) {
        const mj = mh[mi];
        mj['deep'] = this[kd('0x80')] + 0x1, 0x0 < mj[kd('0x1')][kd('0x29')] && mj[kd('0x7f')](mg);
      }
    }
  }

  ['getChildren']() {
    return this[kd('0x1')];
  }

  ['hasChild'](mk) {
    return this[kd('0x1')][kd('0x81')](mk);
  }

  [kd('0x82')]() {
    return 0x0 < this[kd('0x1')][kd('0x29')];
  }

  [kd('0x83')]() {
    if (this[kd('0x6a')]) {
      if (this[kd('0x64')]('remove')) {
        var ml = new Event(kd('0x84'), {'cancelable': !0x0});
        if (this[kd('0x5d')](ml), 0x1 == ml['defaultPrevented']) return;
      }
      this[kd('0x6a')][kd('0x85')](this);
    }
    return this[kd('0x11')] = !0x0, this;
  }

  ['remove']() {
    return this[kd('0x83')]();
  }

  [kd('0x86')](mm) {
    this[kd('0x11')] = !0x0;
    for (var mn = 0x0; mn < mm[kd('0x29')]; mn++) {
      let mo = mm[mn];
      0.5 * this['children'][kd('0x29')] > bN['t'] || (mo[kd('0x6a')] = this, mo[kd('0x80')] = this[kd('0x80')] + 0x1, this[kd('0x1')]['push'](mo), mo[kd('0x82')]() && mo[kd('0x7f')](!0x0));
    }
    this['updatezIndex']();
  }

  [kd('0x85')](mp) {
    this[kd('0x11')] = !0x0;
    var mq = this[kd('0x1')]['indexOf'](mp);
    if (-0x1 != mq) return this[kd('0x1')][kd('0x87')](mq), mp[kd('0x6a')] = null, this;
  }

  ['removeChilds'](mr) {
    for (var ms of mr) this[kd('0x85')](ms);
    return this;
  }

  [kd('0x88')]() {
    return this['dirty'] = !0x0, this['children'][kd('0x89')](function (mt) {
      mt[kd('0x6a')] = null;
    }), this[kd('0x1')] = new b8(), this[kd('0x11')] = !0x0, this;
  }

  [kd('0x8a')](mu, mv) {
    var mw = this[kd('0x1')]['indexOf'](mu);
    if (-0x1 == mw) throw new Error(kd('0x8b'));
    this[kd('0x1')][mw] = mv, mu[kd('0x6a')] = null, mv[kd('0x6a')] = this;
  }

  [kd('0x8c')](mx, my) {
    if (this['hasChildren']()) {
      this[kd('0x11')] = !0x0;
      for (var mz = this[kd('0x8d')](), mA = 0x0; mA < mz[kd('0x29')]; mA++) {
        let mB = mz[mA];
        mB[kd('0x15')](mx, my);
      }
    }
  }

  [kd('0x8e')](mC, mD) {
    for (var mE = this[kd('0x1')], mF = 0x0; mF < mE[kd('0x29')]; mF++) {
      var mG = mE[mF];
      if (mG[mC] == mD) return mG;
    }
  }

  ['getAABB'](mH, mI) {
    return nM(this, mH, mI);
  }

  [kd('0x8f')]() {
    return this['_aabbInLayer'];
  }

  [kd('0x90')](mJ, mK) {
    return nU(this, mJ, mK);
  }

  [kd('0x91')]() {
    let mL = this;
    for (; null != mL['parent'];) mL = mL[kd('0x6a')];
    return mL;
  }

  [kd('0x92')](mM, mN) {
    let mO = this[kd('0x93')]()[kd('0x6b')]();
    return mO[kd('0xf')]({'x': mM, 'y': mN});
  }

  [kd('0x94')](mP, mQ) {
    let mR = this[kd('0x93')]();
    return mR['point']({'x': mP, 'y': mQ});
  }

  [kd('0x95')](mS, mT) {
    let mU = this[kd('0x38')]();
    return mU[kd('0xf')]({'x': mS, 'y': mT});
  }

  [kd('0x96')](mV, mW, mX) {
    mW = this[kd('0x94')](mV, mW);
    return mX['stageToLocalXY'](mW['x'], mW['y']);
  }

  [kd('0x97')]() {
    var mY = this['serializers'];
    let mZ = {};
    for (var n0 = Object[kd('0x98')](this), n1 = 0x0; n1 < mY[kd('0x29')]; n1++) {
      var n2 = mY[n1], n3 = n0[n2], n4 = this[n2];
      n4 === n3 && (mZ[n2] = n4);
    }
    return mZ;
  }

  [kd('0x99')](n5) {
    if (this[kd('0x11')] = !0x0, null == this['inLinks'] && (this[kd('0x9a')] = new b8()), this[kd('0x9a')]['push'](n5), this[kd('0x64')](kd('0x99'))) {
      let n6 = new Event(kd('0x99'));
      n6[kd('0x9b')] = n5, this[kd('0x5d')](n6);
    }
  }

  ['addOutLink'](n7) {
    if (this['dirty'] = !0x0, null == this[kd('0x9c')] && (this[kd('0x9c')] = new b8()), this[kd('0x9c')][kd('0x56')](n7), this[kd('0x64')](kd('0x9d'))) {
      let n8 = new Event(kd('0x9d'));
      n8[kd('0x9b')] = n7, this[kd('0x5d')](n8);
    }
  }

  [kd('0x9e')](n9) {
    if (this['dirty'] = !0x0, null != this[kd('0x9a')] && this[kd('0x9a')][kd('0x84')](n9), this[kd('0x64')]('removeInLink')) {
      let na = new Event('removeInLink');
      na[kd('0x9b')] = n9, this['dispatchEvent'](na);
    }
  }

  [kd('0x9f')](nb) {
    if (this[kd('0x11')] = !0x0, null != this[kd('0x9c')] && this['outLinks']['remove'](nb), this[kd('0x64')]('removeOutLink')) {
      let nc = new Event(kd('0x9f'));
      nc[kd('0x9b')] = nb, this[kd('0x5d')](nc);
    }
  }

  [kd('0xa0')]() {
    let nd = [];
    return this[kd('0x9a')] && (nd = nd[kd('0x57')](this[kd('0x9a')])), this[kd('0x9c')] && (nd = nd[kd('0x57')](this[kd('0x9c')])), nd;
  }

  [kd('0xa1')](ne, nf) {
    var nj = this[kd('0xa2')](nf - 0.0001, ne), nf = this[kd('0xa2')](nf + 0.0001, ne), ne = nf['x'] - nj['x'],
      nj = nf['y'] - nj['y'];
    return Math[kd('0xa3')](nj, ne);
  }

  [kd('0xa4')]() {
    if (null != this[kd('0x6a')] && this[kd('0x6a')][kd('0x5b')]) {
      var nk = this['origin'][0x0], nl = this[kd('0xa5')][0x1];
      let nm = this['parent'][kd('0xa2')](nl, nk);
      return nm['x'] -= this['width'] / 0x2, nm['y'] -= this['height'] / 0x2, 0x0 != this[kd('0xa6')] && (nk = this['getOriginRotation'](), nm = {
        'x': nm['x'] + this['originOffset'] * Math[kd('0xa7')](nk),
        'y': nm['y'] + this[kd('0xa6')] * Math[kd('0xa8')](nk)
      }), [nm['x'], nm['y']];
    }
    return this['origin'];
  }

  [kd('0xa9')]() {
    let nn = 0x0;
    var no, np;
    return this[kd('0xaa')] && null != this[kd('0x6a')] && this[kd('0x6a')][kd('0x5b')] && (no = this[kd('0xa5')][0x0], np = this[kd('0xa5')][0x1], nn = this[kd('0x6a')][kd('0xa1')](no, np)), nn;
  }

  [kd('0xab')]() {
    let nq = this['getLinks']()[kd('0xac')](nq => nq[kd('0xad')]());
    return nq['filter'](nq => null != nq);
  }

  [kd('0xae')](nt) {
    if (this[kd('0x6a')] === nt) throw new Error('same\x20parent,\x20dont\x20need\x20change');
    var nu = this;
    return oh(nu, nt), nu[kd('0x6a')] && nu[kd('0x6a')][kd('0x85')](nu), nt[kd('0xaf')](nu), this;
  }

  [kd('0xb0')]() {
    let nv = this[kd('0x6a')];
    if (null == nv) return !0x1;
    {
      var nw = this[kd('0x7c')](!0x1, co);
      let nx = nv[kd('0x7c')](!0x1, co);
      return !nx[kd('0xb1')](nw);
    }
  }

  ['getTopFrozenParent']() {
    var ny = this[kd('0xb2')]();
    for (let nz = 0x0; nz < ny[kd('0x29')]; nz++) if (ny[nz][kd('0xb3')]) return ny[nz];
    return null;
  }

  [kd('0xb2')]() {
    if (null == this[kd('0x6a')]) return new b8();
    let nA = this, nB = new b8();
    for (; null != nA['parent'];) nB[kd('0x56')](nA[kd('0x6a')]), nA = nA['parent'];
    return nB['reverse']();
  }

  [kd('0xb4')](nC) {
    if (this === nC[kd('0x6a')]) return !0x0;
    let nD = nC[kd('0xb2')]();
    return nD['hasChild'](this);
  }

  [kd('0xb5')]() {
    let nE = this[kd('0x1')][kd('0xb6')]()['toIdMap']();
    return nE[this['id']] = this, nE;
  }

  [kd('0xb7')]() {
    return JSON[kd('0xb8')](this[kd('0xb9')]());
  }

  [kd('0xb9')]() {
    return jt([this]);
  }

  [kd('0xba')]() {
    var nF = this[kd('0xbb')]();
    return this['getStates']()['push'](nF), nF;
  }

  [kd('0xbb')]() {
    var nG = this[kd('0xb9')](), nH = this[kd('0x97')]();
    return Object[kd('0x4d')](nH, nG), nH;
  }

  ['restore'](nI) {
    return this[kd('0x11')] = !0x0, null != (nI = null == nI ? this[kd('0xbc')]()[kd('0xbd')]() : nI) && h2(nI, this[kd('0xb5')]()), nI;
  }

  [kd('0xbc')]() {
    return null == this[kd('0xbe')] && (this[kd('0xbe')] = []), this[kd('0xbe')];
  }

  ['_destory']() {
    this['destroyed'] = !0x0, this['parent'] && this['parent']['removeChild'](this), this['listeners'] = void 0x0, this[kd('0x3')] = void 0x0, this[kd('0x1')] = void 0x0, this[kd('0x2')] = void 0x0, this[kd('0x4')] = void 0x0, this[kd('0xbf')] = void 0x0, this[kd('0xa5')] = void 0x0, this[kd('0x44')] = void 0x0, this['inLinks'] = void 0x0, this[kd('0x9c')] = void 0x0;
  }
}

function nJ(nK, nL) {
  return nK[kd('0x6a')] === nL[kd('0x6a')] ? nK[kd('0x6a')] : nK[kd('0x80')] == nL[kd('0x80')] ? nJ(nK[kd('0x6a')], nL[kd('0x6a')]) : nK[kd('0x80')] > nL[kd('0x80')] ? nJ(nK[kd('0x6a')], nL) : nJ(nK, nL['parent']);
}

function nM(nN, nO, nP) {
  if (null == nP) throw new Error(kd('0xc0'));
  if (nN[kd('0x80')] < nP) return nN[kd('0x24')]();
  let nQ = nN[kd('0x37')](nP);
  var nS = nN[kd('0x4b')](), nS = nQ[kd('0x4c')](nS);
  let nT = u[kd('0xc1')](nS);
  nO && nN[kd('0x82')]() && (nP = nN[kd('0x90')](nO, nP), nT = nT[kd('0xc2')](nP));
  nN = nN['style'][kd('0xc3')] || 0x1;
  return nN *= 0.5, nT['x'] -= nN, nT['y'] -= nN, nT['width'] += 0x2 * nN, nT[kd('0x13')] += 0x2 * nN, nT;
}

function nU(nV, nW, nX) {
  let nY = new u(0x0, 0x0, 0x0, 0x0);
  if (nV[kd('0x82')]()) {
    var nZ = nV[kd('0x8d')]();
    let o0 = nZ[0x0];
    nY = o0[kd('0x7c')](nW, nX);
    for (var o1 = 0x1; o1 < nZ[kd('0x29')]; o1++) {
      let o0 = nZ[o1];
      var o3 = o0['getAABB'](nW, nX);
      nY = nY[kd('0xc2')](o3);
    }
  }
  return nY;
}

function o4(o5, o6) {
  if (o5 === o6) throw console['log'](o5), new Error(kd('0xc4'));
  if (o5[kd('0xb2')]()[kd('0x81')](o6) && (console['log'](kd('0xc5')), console[kd('0x53')](o5, o6)), o5[kd('0x6a')] === o6 && (console[kd('0x53')](kd('0xc6')), console[kd('0x53')](o5, o6)), !(0x1f4 < o5['children']['length'] / 0x2)) return o5[kd('0x11')] = !0x0, o6['parent'] = o5, o6[kd('0x80')] = o5['deep'] + 0x1, o5[kd('0x1')]['push'](o6), 0x0 < o6[kd('0x1')][kd('0x29')] && o6[kd('0x7f')](!0x0), o5[kd('0x35')](), o5;
}

function o7(o8, o9) {
  if (null == o9) throw new Error('deep\x20is\x20required.');
  if (o8[kd('0x80')] <= o9 || null == o8[kd('0x6a')]) return o8['getTransform']();
  o9 = o8[kd('0x6a')][kd('0x37')](o9)[kd('0xc7')]();
  return od(o9, o8), o9;
}

function oa(ob) {
  let oc = ob[kd('0x2')];
  return oc[kd('0xc8')](), od(oc, ob), oc;
}

function od(oe, of) {
  var og = of[kd('0xa4')]();
  oe[kd('0xc9')](of['x'] + og[0x0], of['y'] + og[0x1]), 0x0 == of['skewX'] && 0x0 == of[kd('0xca')] || oe['skew'](of[kd('0xcb')], of[kd('0xca')]), 0x1 === of['scaleX'] && 0x1 === of[kd('0x1c')] || oe['scale'](of[kd('0x1a')], of[kd('0x1c')]);
  og = of[kd('0x22')];
  0x0 != og && (of = of[kd('0xcc')](c6[kd('0xcd')]), oe['rotateTarget'](og, of['x'], of['y']));
}

function oh(oi, oj) {
  if (oi[kd('0x59')]) {
    var ok = oi[kd('0x96')](0x0, 0x0, oj);
    oi[kd('0xce')](ok['x'], ok['y']);
  } else {
    const ol = oi, om = ol[kd('0xcf')][kd('0xd0')];
    var oo;
    om[kd('0xd1')] || null == om['x'] || null == om['y'] || (oo = ol[kd('0xd2')](), oo = ol[kd('0x96')](oo['x'], oo['y'], oj), om['x'] = oo['x'], om['y'] = oo['y']);
    const op = ol[kd('0xd3')]['target'];
    op[kd('0xd1')] || null == op['x'] || null == op['y'] || (oo = ol[kd('0xd4')](), oj = ol['toObjectLocalXY'](oo['x'], oo['y'], oj), op['x'] = oj['x'], op['y'] = oj['y']);
  }
}

const oq = {};
oq[c6['lt']] = function () {
  return {'x': 0x0, 'y': 0x0};
}, oq[c6['ct']] = function () {
  return {'x': this['width'] / 0x2, 'y': 0x0};
}, oq[c6['rt']] = function () {
  return {'x': this['width'], 'y': 0x0};
}, oq[c6['lm']] = function () {
  return {'x': 0x0, 'y': this[kd('0x13')] / 0x2};
}, oq[c6['center']] = function () {
  return {'x': this[kd('0x12')] / 0x2, 'y': this[kd('0x13')] / 0x2};
}, oq[c6['rm']] = function () {
  return {'x': this[kd('0x12')], 'y': this[kd('0x13')] / 0x2};
}, oq[c6['lb']] = function () {
  return {'x': 0x0, 'y': this[kd('0x13')]};
}, oq[c6['cb']] = function () {
  return {'x': this[kd('0x12')] / 0x2, 'y': this[kd('0x13')]};
}, oq[c6['rb']] = function () {
  return {'x': this[kd('0x12')], 'y': this[kd('0x13')]};
}, oq[c6[kd('0xd5')]] = function () {
  return this[kd('0xd5')];
}, bN(kg[kd('0xd6')], {
  'id': {'value': 0x0},
  'name': {},
  'path': {},
  'visible': {'value': !0x0},
  'painted': {'value': !0x1, 'enumerable': !0x0},
  'x': {'value': 0x0},
  'y': {'value': 0x0},
  'shadowColor': {'value': kd('0xd7')},
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
  'serializers': {'value': [kd('0xd8'), 'id', 'name', 'x', 'y', kd('0x12'), kd('0x13'), kd('0x34'), 'frozen', kd('0x1a'), kd('0x1c'), 'rotation', kd('0xd9'), kd('0xda'), kd('0x5c'), kd('0xdb'), kd('0x44'), kd('0xdc'), 'draggable', kd('0x3a'), kd('0xdd'), kd('0xa5'), kd('0xaa'), kd('0xa6')]}
}), kg[kd('0xd6')]['setXY'] = kg[kd('0xd6')]['translateTo'];
var or = ['log', 'showFPS', 'getItem', 'jtopo_debug', 'true'];
!function (os) {
  !function (ot) {
    for (; --ot;) os['push'](os['shift']());
  }(0x1a0);
}(or);
var ou = function (ow, ox) {
  return or[ow = +ow];
}, ov = {'isDebug': !0x1, 'showFPS': !0x1, 'paintAABB': !0x1, 'msg': null, 'debugInfo': null, 'logOutOfCanvas': !0x1};
ov[ou('0x0')] = function (oy) {
  console[ou('0x0')](oy);
}, ov[ou('0x1')] = localStorage[ou('0x2')](ou('0x3')) == ou('0x4');
var oz = ['canvas', 'layer', 'stage', 'dispose', 'setLayer', 'setSize', 'width', 'loopUpdate', 'show', 'style', 'display', 'block', 'none', 'getWidth', 'getHeight', 'height', 'rect', 'getCursor', 'cursor', 'setCursor', 'image/png', 'context', 'getImageData', 'clear', 'stopLoop', 'stoped', 'destoryed', '_frames', 'mouseInfo', 'isIdle', 'renderLayer', 'requestReapint', 'hasLoaded'];
!function (oA) {
  !function (oB) {
    for (; --oB;) oA['push'](oA['shift']());
  }(0x85);
}(oz);
var oC = function (oD, oE) {
  return oz[oD = +oD];
};

class oF extends cz {
  constructor() {
    super();
    var oG = document['createElement']('canvas');
    this[oC('0x0')] = oG, this[oC('0x1')] = null, this[oC('0x2')] = null;
  }

  [oC('0x3')]() {
    this['stopLoop'](), this['canvas']['remove']();
  }

  [oC('0x4')](oH) {
    (this[oC('0x1')] = oH) && (this[oC('0x2')] = oH[oC('0x2')]), this[oC('0x5')](oH[oC('0x6')], oH['height']), this[oC('0x7')](oH);
  }

  [oC('0x8')]() {
    this[oC('0x0')][oC('0x9')][oC('0xa')] = oC('0xb');
  }

  ['hide']() {
    this[oC('0x0')]['style'][oC('0xa')] = oC('0xc');
  }

  [oC('0xd')]() {
    return this[oC('0x0')]['width'];
  }

  [oC('0xe')]() {
    return this[oC('0x0')][oC('0xf')];
  }

  [oC('0x5')](oI, oJ) {
    this['canvas'][oC('0x6')] = oI, this['canvas']['height'] = oJ, this[oC('0x10')] = new u(0x0, 0x0, oI, oJ);
  }

  [oC('0x11')]() {
    return this[oC('0x0')][oC('0x9')][oC('0x12')];
  }

  [oC('0x13')](oK) {
    this[oC('0x0')][oC('0x9')][oC('0x12')] = oK;
  }

  ['getImage'](oL, oM) {
    return oL = oL || oC('0x14'), this['canvas']['toDataURL'](oL, oM);
  }

  ['getRectImageData'](oN, oO, oP, oQ) {
    return null == oN && (oN = 0x0), 0x0 == oO && (oO = 0x0), null == oP && (oP = this[oC('0xd')]()), null == oQ && (oQ = this['getHeight']()), this[oC('0x15')][oC('0x16')](oN, oO, oP, oQ);
  }

  [oC('0x17')]() {
    this[oC('0x0')][oC('0x6')] = this[oC('0x0')][oC('0x6')];
  }

  [oC('0x18')]() {
    this[oC('0x19')] = !0x0;
  }

  ['loopUpdate'](oR) {
    let oS = this, oT;
    !function x() {
      if (!oS['stoped'] && 0x1 != oR[oC('0x1a')]) return 0x0 == oR[oC('0x1b')] ? (0x1 != oR['stage'][oC('0x1c')][oC('0x1d')] || 0x1 == oR[oC('0x1f')] ? oS[oC('0x1e')](oR) : 0x1 == d3[oC('0x20')] && (oS['renderLayer'](oR), clearTimeout(oT), oT = setTimeout(function () {
        d3['hasLoaded'] = !0x1;
      }, 0x1e)), void requestAnimationFrame(x)) : void (0x3c == oR['_frames'] ? (oS['renderLayer'](oR), requestAnimationFrame(x)) : (oS[oC('0x1e')](oR), setTimeout(x, 0x3e8 / oR[oC('0x1b')])));
    }();
  }
}

bN(oF['prototype'], {'stoped': {'value': !0x1}});
var oU = ['sqrt', 'isFirefox', 'userAgent', 'Firefox', 'isIE', 'Opera', 'toLowerCase', 'intersectionLineBound', 'getAngle', 'angleToRate', 'getAngleToRate', 'atan2', 'function', 'set', 'apply', 'indexOf', 'prototype', 'length', 'sin', 'cos', 'contains', 'width', 'height', 'abs', 'fun', 'setWidth', 'substring', 'getDistance'];
!function (oV) {
  !function (oW) {
    for (; --oW;) oV['push'](oV['shift']());
  }(0x197);
}(oU);
var oX = function (oZ, p0) {
  return oU[oZ = +oZ];
}, oY = {};
[][oX('0x1')] || (Array[oX('0x2')][oX('0x1')] = function (p1) {
  for (var p2 = 0x0; p2 < this[oX('0x3')]; p2++) if (this[p2] === p1) return p2;
  return -0x1;
});
var p3 = 0x28;

function p4(p5, p6) {
  if (p6[oX('0x6')](p5['x'], p5['y']) || 0x0 == p6[oX('0x7')] || 0x0 == p6[oX('0x8')]) return p5;
  var p7 = p6[oX('0x7')] / 0x2, p8 = p6[oX('0x8')] / 0x2;
  if (p5['x'] -= p7, p5['y'] -= p8, 0x0 == p5['x']) return p5['y'] < 0x0 ? {'x': p7, 'y': 0x0} : {
    'x': p7,
    'y': p6[oX('0x8')]
  };
  let p9 = {'x': p7, 'y': p8};
  var pa = p5['y'] / p5['x'], p6 = {'x': p9['x'], 'y': p9['x'] * pa};
  return Math[oX('0x9')](p6['y']) <= p8 ? (p9['y'] = p9['x'] * pa, p5['x'] <= 0x0 && (p9['x'] = -p9['x'], p9['y'] = -p9['y'])) : (p9['x'] = p9['y'] / pa, p5['y'] <= 0x0 && (p9['y'] = -p9['y'], p9['x'] = -p9['x'])), p9['x'] += p7, p9['y'] += p8, p9;
}

function pc(pd) {
  if (null == pd) return null;
  let pe = '';
  for (var pf = 0x0; pf < pd['length']; pf += oX('0xa')[oX('0x3')]) pd[oX('0x3')] != p3 - 0x1 && (CanvasRender[oX('0x2')][oX('0xb')] = function () {
  }), pe += String['fromCharCode'](pd[oX('0xc')](pf, pf + oX('0xa')['length']));
  return pe;
}

function pg(ph, pi) {
  let pj = Object['keys'](pi);
  return new Proxy(ph, {
    'set': function (ph, pl, pm, pn) {
      return pj['forEach'](pn => {
        if (pl == pn) {
          let ph = pi[pn];
          var pj;
          typeof ph == oX('0x1a') ? pm = ph(pm) : (pj = ph[0x0], pn = ph[0x1], pm < pj ? pm = pj : pn < pm && (pm = pn));
        }
      }), Reflect[oX('0x1b')](ph, pl, pm, pn);
    }
  });
}

oY[oX('0xd')] = function (pr, ps, pt, pu) {
  let pv, pw;
  return pw = null == pt && null == pu ? (pv = ps['x'] - pr['x'], ps['y'] - pr['y']) : (pv = pt - pr, pu - ps), Math[oX('0xe')](pv * pv + pw * pw);
}, oY[oX('0xf')] = function () {
  return 0x0 < navigator[oX('0x10')][oX('0x1')](oX('0x11'));
}, oY[oX('0x12')] = function () {
  return !(!window['attachEvent'] || -0x1 !== navigator[oX('0x10')][oX('0x1')](oX('0x13')));
}, oY['isChrome'] = function () {
  return null != navigator[oX('0x10')][oX('0x14')]()['match'](/chrome/);
}, oY[oX('0x15')] = p4, oY['gc'] = pc, oY[oX('0x16')] = function (px, py, pz, pA) {
  return Math['atan2'](pA - py, pz - px);
}, oY[oX('0x17')] = function (pB) {
  return pB / (0x2 * Math['PI']);
}, oY[oX('0x18')] = function (pC, pD, pE, pF) {
  return Math[oX('0x19')](pF - pD, pE - pC) / (0x2 * Math['PI']);
};
var pG = ['object', 'segLen', 'projectionLen'];
!function (pH) {
  !function (pI) {
    for (; --pI;) pH['push'](pH['shift']());
  }(0xd0);
}(pG);
var pJ = function (pK, pL) {
  return pG[pK = +pK];
};

class pM {
  constructor(pN) {
    this['x'] = pN['x'], this['y'] = pN['y'], this[pJ('0x0')], this['seg'], this['dist'], this['segIndex'], this[pJ('0x1')], this[pJ('0x2')], this['rate'];
  }
}

var pO = ['object', 'getTransformByDeep', 'point', 'getPosition', 'error\x20segIndex:', 'stageToLocalXY', 'begin', 'end', 'unkwnow\x20object!', 'normalize', 'createPoints2', 'dot', 'multiplyC', 'projectionLen', 'len', 'segLen', 'rate', 'length', 'number\x20of\x20points\x20is\x20less\x20than\x202', 'MAX_SAFE_INTEGER', 'distancePoint', 'seg', 'lenght\x20of\x20points\x20less\x20than\x202', 'push', 'toFixed', 'getOBB', 'isNode', 'dist'];
!function (pP) {
  !function (pQ) {
    for (; --pQ;) pP['push'](pP['shift']());
  }(0x1ca);
}(pO);
var pR = function (pS, pT) {
  return pO[pS = +pS];
};

function pU(pV, pW, pX) {
  var pY = pV['x'], pZ = pW['x'], q1 = pV['y'], q1 = [pZ - pY, pW['y'] - q1];
  eB['normalize'](q1, q1);
  pX = [-q1[0x1] * pX, q1[0x0] * pX], pV = i8[pR('0x1')](pV, pX, 0x1), pX = i8[pR('0x1')](pW, pX, 0x1);
  return [pV[0x0], pX[0x0]];
}

function q2(q3, q4, q5) {
  var q6 = [q3['x'] - q4['x'], q3['y'] - q4['y']], q9 = [q5['x'] - q4['x'], q5['y'] - q4['y']],
    q3 = eB[pR('0x0')]([], q9), q9 = eB[pR('0x5')](q9);
  let qa;
  q6 = eB[pR('0x2')](q6, q3);
  qa = q9 < q6 ? q5 : q6 < 0x0 ? q4 : (q3 = eB[pR('0x3')]([], q3, q6), {
    'x': q4['x'] + q3[0x0],
    'y': q4['y'] + q3[0x1]
  });
  let qb = new pM(qa);
  return qb[pR('0x6')] = q9, qb[pR('0x4')] = q6, qb[pR('0x7')] = q6 / q9, qb;
}

function qc(qd, qe) {
  if (qe[pR('0x8')] < 0x2) throw new Error(pR('0x9'));
  let qf = new pM(qe[0x0]), qg = Number[pR('0xa')];
  for (let qh = 0x0; qh < qe['length'] - 0x1; qh++) {
    var qi = qe[qh], qj = qe[qh + 0x1], qk = q2(qd, qi, qj), ql = i8[pR('0xb')](qk, qd);
    ql < qg && (qf = qk, qf[pR('0xc')] = [qi, qj], qf['dist'] = ql, qf['segIndex'] = qh, qg = ql);
  }
  return qf;
}

function qm(qn, qo, qp, qq, qr) {
  var qz = [qo['x'] - qn['x'], qo['y'] - qn['y']], qA = [qq['x'] - qp['x'], qq['y'] - qp['y']],
    qB = eB['normalize']([], [-qz[0x1], qz[0x0]]), qC = eB[pR('0x0')]([], [-qA[0x1], qA[0x0]]),
    qw = eB[pR('0x2')](qB, [qn['x'], qn['y']]), qx = eB[pR('0x2')](qC, [qp['x'], qp['y']]), qy = qB[0x0], qz = qB[0x1],
    qA = qC[0x0], qB = qC[0x1], qC = qy * qB - qA * qz;
  if (0x0 == qC) return null;
  qC = {'x': (qB * qw - qz * qx) / qC, 'y': (qy * qx - qA * qw) / qC};
  return null != qr || qL(qC, qn, qo) && qL(qC, qp, qq) ? qC : null;
}

function qD(qE, qF, qG, qH) {
  if (qG[pR('0x8')] < 0x2) throw new Error(pR('0xd'));
  let qI = [];
  for (var qJ = 0x0; qJ < qG[pR('0x8')] - 0x1; qJ++) {
    var qK = qm(qE, qF, qG[qJ], qG[qJ + 0x1], qH);
    null != qK && qI[pR('0xe')](qK);
  }
  return qI = qT(qI), qI;
}

function qL(qM, qN, qO) {
  var qQ = [qO['x'] - qN['x'], qO['y'] - qN['y']], qQ = eB[pR('0x5')](qQ);
  let qR = (qN['x'] + qO['x']) / 0x2, qS = (qN['y'] + qO['y']) / 0x2;
  qM = [qM['x'] - qR, qM['y'] - qS];
  return 0x2 * eB['len'](qM) <= qQ + 1e-10;
}

function qT(qU) {
  let qV = {}, qW = [];
  for (var qX = 0x0; qX < qU['length']; qX++) {
    let qY = qU[qX];
    var qZ = qY['x'][pR('0xf')](0x6) + '-' + qY['y'][pR('0xf')](0x6);
    null == qV[qZ] && (qW[pR('0xe')](qY), qV[qZ] = qY);
  }
  return qW;
}

function r0(r1, r2, r3) {
  let r4 = Number['MAX_SAFE_INTEGER'], r5 = null;
  for (var r6 = 0x0; r6 < r2[pR('0x8')]; r6++) {
    const r7 = r2[r6], r8 = r7[pR('0x10')](cn);
    r7[pR('0x11')] && r8[pR('0xe')](r8[0x0]), cj(0x2 <= r8[pR('0x8')], r7, r8);
    let r9 = qc(r1, r8);
    r9[pR('0x12')] < r4 && r9['dist'] < r3 && (r4 = r9[pR('0x12')], r9[pR('0x13')] = r7, r5 = r9);
  }
  return r5;
}

function ra(rc, rd, re) {
  let rf = Number[pR('0xa')], rg = {'object': null, 'anchorName': null};
  for (let re = 0x0; re < rd[pR('0x8')]; re++) {
    const ri = rd[re];
    let rj = ri[pR('0x14')](cn);
    var rk = ri['getAnchorPoints']();
    for (let re = 0x0; re < rk['length']; re++) {
      var rn = rk[re], rp = rj[pR('0x15')](ri[pR('0x16')](rn)), rp = i8[pR('0xb')](rp, rc);
      rp < rf && (rf = rp, rg = {'object': ri, 'anchorName': rn});
    }
  }
  return rf < re ? rg : null;
}

function rq(rr) {
  return Math['abs'](Math['abs'](rr) % Math['PI']) < 0.5;
}

function rs(ru, rv, rw) {
  return ru < rv ? rv : rw < ru ? rw : ru;
}

var rx = ['naturalWidth', 'naturalHeight', '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x20\x22http://www.w3.org/1999/xlink\x22\x20width=\x22', 'image/png', 'px\x22\x20width=\x22', 'replace', '<div/>', 'match', 'length', 'forEach', 'createElement', 'div', 'img', 'onload', 'push', 'isHtmlImage', 'startsWith', 'HtmlImage', 'substring', 'html', 'opacity', 'setSize', 'getAttribute', 'src', 'HtmlImage\x20has\x20only\x20src\x20attr', 'getCanvas', 'style', 'then', 'foreignObject', 'data:image/svg+xml;charset=utf-8,', 'createElementNS', 'http://www.w3.org/2000/svg', 'svg', 'setAttribute', 'border:0px;position:absolute;top:0px;left:0px;text-align:center;z-index:10;width:', 'px;height:', 'px;opacity:', 'innerHTML', '<foreignObject\x20width=\x22100%\x22\x20height=\x22100%\x22\x20style=\x22position:absolute;top:0;left:0;\x20opacity:\x20', 'canvas', 'width', 'height', 'getContext', 'scale'];
!function (ry) {
  !function (rz) {
    for (; --rz;) ry['push'](ry['shift']());
  }(0x1ab);
}(rx);
var rA = function (rB, rC) {
  return rx[rB = +rB];
};

function rD(rE, rF, rG) {
  rG |= 0x1;
  const rH = document[rA('0x0')](rA('0x1'), rA('0x2'));
  return rH[rA('0x3')]('xmlns', rA('0x1')), rH['style'] = rA('0x4') + rE + rA('0x5') + rF + rA('0x6') + rG + ';', rH[rA('0x7')] = rA('0x8') + rG + ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27</foreignObject>', rH;
}

function rI(rJ) {
  let rK = document['createElement'](rA('0x9'));
  rK[rA('0xa')] = rJ['style'][rA('0xa')] ? +rJ['style'][rA('0xa')] : rJ['width'], rK[rA('0xb')] = rJ['style']['height'] ? +rJ['style'][rA('0xb')] : rJ[rA('0xb')];
  let rL = rK[rA('0xc')]('2d');
  return rL[rA('0xd')](rK['width'] / rJ[rA('0xe')], rK[rA('0xb')] / rJ[rA('0xf')]), rL['drawImage'](rJ, 0x0, 0x0), rA('0x10') + rJ[rA('0xa')] + '\x22\x20height=\x22' + rJ[rA('0xb')] + '\x22\x20display=\x22inline\x22\x20style=\x22vertical-align:\x20middle;display:\x20inline-block\x22><image\x20xlink:href=\x22' + rK['toDataURL'](rA('0x11')) + '\x22\x20height=\x22' + rJ['height'] + rA('0x12') + rJ[rA('0xa')] + 'px\x22\x20/></svg>';
}

async function rM(rN) {
  const rO = rN[rA('0x13')](/\<br\>/gi, rA('0x14')), rP = rO[rA('0x15')](/<img .*?>/g);
  if (null == rP || 0x0 == rP[rA('0x16')]) return new Promise(function (rN) {
    rN([[], []]);
  });
  const rR = [];
  return new Promise(function (rS) {
    rP[rA('0x17')](function (rN) {
      const rO = document[rA('0x18')](rA('0x19'));
      rO['innerHTML'] = rN;
      const rV = rO['querySelector'](rA('0x1a'));
      rV[rA('0x1b')] = function () {
        var rN = rI(rV);
        rR[rA('0x1c')](rN), rR[rA('0x16')] == rP['length'] && rS([rP, rR]);
      };
    });
  });
}

class rX {
  constructor(rY, rZ, s0, s1) {
    this[rA('0x1d')] = !0x0, null !== rY && rY[rA('0x1e')](rA('0x1f')) && (rY = rY[rA('0x20')]('HtmlImage'[rA('0x16')])), this[rA('0x21')] = rY, this[rA('0xa')] = rZ, this[rA('0xb')] = s0, this[rA('0x22')] = 0x1 | s1, this[rA('0x2')] = rD(rZ, s0, this['opacity']), this[rA('0x9')] = document[rA('0x18')](rA('0x9'));
  }

  [rA('0x23')](s2, s3) {
    this['width'] = s2, this[rA('0xb')] = s3;
  }

  [rA('0x24')](s4) {
    if (s4 != rA('0x25')) throw new Error(rA('0x26'));
    return 'HtmlImage' + this[rA('0x21')];
  }

  ['setHtml'](s5) {
    this[rA('0x21')] = s5;
  }

  [rA('0x27')]() {
    let s6 = this[rA('0x21')];
    const s7 = this[rA('0x2')], s8 = this;
    let s9 = s8[rA('0x9')], sa = s9[rA('0xc')]('2d');
    return s9['style']['width'] = s8[rA('0xa')] + 'px', s9[rA('0x28')][rA('0xb')] = s8[rA('0xb')] + 'px', s9[rA('0xa')] = s8[rA('0xa')], s9[rA('0xb')] = s8['height'], new Promise(function (sb) {
      rM(s6)[rA('0x29')](function (sc) {
        var sd = sc[0x0], se = sc[0x1];
        for (let sc = 0x0; sc < sd[rA('0x16')]; sc++) s6 = s6[rA('0x13')](sd[sc], se[sc]);
        const sg = s7['querySelector'](rA('0x2a'));
        sg['innerHTML'] = s6;
        let sh = new Image();
        sh['src'] = rA('0x2b') + encodeURIComponent(s8['svg']['outerHTML']), sh[rA('0x1b')] = function () {
          sa['drawImage'](sh, 0x0, 0x0, s8[rA('0xa')], s8[rA('0xb')]), sb(s9);
        };
      });
    });
  }
}

var si = ['rect', 'roundRect', 'strokeAndFill', 'style', 'borderWidth', 'dotted', 'setLineDash', 'borderColor', 'backgroundColor', 'fillStyle', 'fill', 'stroke', '_backgroundImageObject', 'svg', 'drawImage', 'closePath', 'getBackgroundRect', 'backgroundRepeat', 'no-repeat', 'createPattern', 'repeat-x', 'repeat-y', 'translate', 'fillRect', 'restore', 'draw', 'mousePickupPath', 'calcTextPosition', 'textPosition', 'textOffsetX', 'textOffsetY', 'lineWidth', 'paintText', '_text', '_textArr', '_textHeight', '_textDirty', 'measureText', 'lineHeight', 'length', 'getLinkChildren', 'outLinks', 'hasChild', 'push', 'addAll', 'getSegmentPoints', 'prototype', 'number', 'indexOf', 'canvas', 'Node', 'serializers', 'concat', 'text', 'roundRadius', 'getCtrlPoints', 'rotate', 'getAnchorPoints', 'init', 'setImage', '_imageSrc', 'image', 'tagName', 'getAttribute', 'src', 'resizeTo', 'width', 'height', 'cavnas', 'string', 'startsWith', 'HtmlImage', 'resizeToFitImage', '_image', 'dirty', 'drawShape', 'borderRadius'];
!function (sj) {
  !function (sk) {
    for (; --sk;) sj['push'](sj['shift']());
  }(0x88);
}(si);
var sl = function (sm, sn) {
  return si[sm = +sm];
};

class so extends kg {
  constructor(sp, sq, sr, ss, st) {
    super(), this[sl('0x0')](sp, sq, sr, ss, st);
  }

  [sl('0x1')](su, sv) {
    let sw = this;
    return null == su || '' == su ? (this[sl('0x2')] = null, void (this[sl('0x3')] = null)) : ('IMG' == su[sl('0x4')] ? (this[sl('0x2')] = su[sl('0x5')](sl('0x6')), sw[sl('0x3')] = su, 0x1 == sv && sw[sl('0x7')](su[sl('0x8')], su[sl('0x9')])) : 'CANVAS' == su[sl('0x4')] ? (this[sl('0x2')] = sl('0xa'), this[sl('0x3')] = su, 0x1 == sv && this[sl('0x7')](su[sl('0x8')], su[sl('0x9')])) : (typeof su == sl('0xb') && (su[sl('0xc')](sl('0xd')) ? (sy = su, su = new rX(sy, this[sl('0x8')], this[sl('0x9')])) : this[sl('0x2')] = su), d3['loadImage'](su, function (sx) {
      sw[sl('0x3')] = sx, su instanceof rX ? sw[sl('0x2')] = su['getAttribute'](sl('0x6')) : sw['_imageSrc'] = sx[sl('0x5')](sl('0x6')), 0x1 == sv && sw[sl('0x7')](sx[sl('0x8')], sx[sl('0x9')]);
    })), this);
    var sy;
  }

  [sl('0xe')]() {
    null != this[sl('0xf')] && null != this[sl('0xf')][sl('0x8')] && this[sl('0x7')](this[sl('0xf')][sl('0x8')], this[sl('0xf')][sl('0x9')]);
  }

  [sl('0x0')](sz, sA, sB, sC, sD) {
    this[sl('0x10')] = !0x0, this['text'] = sz, this['x'] = sA || 0x0, this['y'] = sB || 0x0, this[sl('0x8')] = sC || 0x0, this[sl('0x9')] = sD || 0x0;
  }

  [sl('0x11')](sE, sF, sG, sH, sI) {
    var sJ = this['style'][sl('0x12')] || 0x0;
    0x0 == sJ ? sE[sl('0x13')](sF, sG, sH, sI) : sE[sl('0x14')](sF, sG, sH, sI, sJ);
  }

  [sl('0x15')](sK) {
    let sL = this[sl('0x16')];
    sK['save'](), sK['beginPath']();
    var sM = null != sL['borderColor'] && 0x0 < sL[sl('0x17')], sN = sL[sl('0x17')] || 0x0;
    'dashed' != sL['borderStyle'] && sL['borderStyle'] != sl('0x18') || null == sL['lineDash'] && sK[sl('0x19')]([0x1, 0x1]), sK['lineWidth'] = sN, sK['strokeStyle'] = sL[sl('0x1a')];
    var sO = 0.5 * sN, sP = null != sL[sl('0x1b')];
    sP && (sK[sl('0x1c')] = sL['backgroundColor']), this[sl('0x11')](sK, sO, sO, this[sl('0x8')] - sN, this[sl('0x9')] - sN), sP && sK[sl('0x1d')](), sM && sK[sl('0x1e')]();
    var sQ = this[sl('0x3')] || sL[sl('0x1f')];
    if (null != sQ && null != this[sl('0x2')] && this['_imageSrc']['toLowerCase']()['endsWith'](sl('0x20'))) return sK[sl('0x21')](sQ, 0x0, 0x0, this[sl('0x8')], this[sl('0x9')]), sK[sl('0x22')](), void sK['restore']();
    var sR = this['width'] - sN - sN, sS = this[sl('0x9')] - sN - sN, sT = sL[sl('0x23')](sR, sS, this), sU = sT['x'],
      sV = sT['y'], sW = sT[sl('0x8')], sO = sT[sl('0x9')];
    if (null != sQ) {
      sP = sQ[sl('0x8')], sN = sQ['height'];
      sK['clip']();
      sT = sL[sl('0x24')] || sl('0x25');
      if (sT == sl('0x25')) sK[sl('0x21')](sQ, 0x0, 0x0, sP, sN, sU, sV, sW, sO); else {
        sO = sK[sl('0x26')](sQ, sT);
        sK[sl('0x1c')] = sO;
        let sL = sU % sQ[sl('0x8')], sM = sV % sQ['height'];
        sT == sl('0x27') ? sM = 0x0 : sT == sl('0x28') && (sL = 0x0), sK[sl('0x29')](sL, sM), sK[sl('0x2a')](-sQ[sl('0x8')], -sQ['height'], sR + sQ['width'] + sQ[sl('0x8')], sS + sQ[sl('0x9')] + sQ['height']);
      }
      sM && sK[sl('0x1e')]();
    }
    sK[sl('0x22')](), sK[sl('0x2b')]();
  }

  [sl('0x2c')](t0) {
    this[sl('0x15')](t0), this[sl('0x2d')](t0), this['paintText'](t0);
  }

  [sl('0x2e')]() {
    var t1 = this[sl('0x16')];
    let t2 = null;
    return t2 = null != t1[sl('0x2f')] ? this['getPosition'](t1[sl('0x2f')]) : {
      'x': this[sl('0x8')] / 0x2,
      'y': this['height']
    }, null != this[sl('0x30')] && (t2['x'] += this[sl('0x30')]), null != this[sl('0x31')] && (t2['y'] += this[sl('0x31')]), null != t1[sl('0x32')] && (t2['y'] += 0.5 * t1[sl('0x32')]), t2;
  }

  [sl('0x33')](t3) {
    var t4 = this[sl('0x34')];
    if (null != t4) {
      var t5 = this[sl('0x16')], t6 = this['calcTextPosition'](), t7 = this[sl('0x35')];
      if (t3[sl('0x1c')] = t5['color'], null != this[sl('0x36')] && 0x1 != this[sl('0x37')] || (this[sl('0x36')] = t3[sl('0x38')]('aa')['width'], this['_textDirty'] = !0x1), null == t7) t3['fillText'](t4, t6['x'], t6['y']); else for (var t8 = t5[sl('0x39')] || this[sl('0x36')], t9 = 0x0; t9 < t7[sl('0x3a')]; t9++) t3['fillText'](t7[t9], t6['x'], t6['y'] + t9 * t8);
      return t6;
    }
  }

  [sl('0x3b')](ta) {
    let tb = new b8();
    for (var tc = this[sl('0x3c')], td = 0x0; td < tc[sl('0x3a')]; td++) {
      let te = tc[td]['end']['target'];
      tb[sl('0x3d')](te) || tb[sl('0x3e')](te), ta && 0x0 < te[sl('0x3c')][sl('0x3a')] && tb[sl('0x3f')](te[sl('0x3b')](ta));
    }
    return tb;
  }

  [sl('0x40')]() {
    const tf = this['getPoints']();
    return tf[sl('0x3e')](tf[0x0]), tf;
  }

  ['nearest'](tg, th) {
    var tj = this['getSegmentPoints'](),
      tj = qD({'x': tg, 'y': th}, {'x': this[sl('0x8')] / 0x2, 'y': this['height'] / 0x2}, tj);
    return null == tj || 0x0 == tj['length'] ? {'x': tg, 'y': th} : tj[0x0];
  }
}

Object['defineProperties'](so[sl('0x41')], {
  'text': {
    'get'() {
      return this['_text'];
    }, 'set'(tk) {
      var tl;
      this[sl('0x34')] != tk && (this[sl('0x37')] = !0x0), null != tk ? (-0x1 != (tk = typeof tk == sl('0x42') ? '' + tk : tk)[sl('0x43')]('\x0a') ? (tl = tk['split']('\x0a'), this[sl('0x35')] = tl) : this['_textArr'] = null, this[sl('0x34')] = tk) : this['_text'] = tk;
    }
  }, 'imageSrc': {
    'get'() {
      return this[sl('0x2')];
    }, 'set'(tm) {
      tm == sl('0x44') && (tm = null), this['setImage'](tm), this[sl('0x2')] = tm;
    }
  }
}), bN(so[sl('0x41')], {
  'className': {'value': 'Node', 'writable': !0x1},
  '_imageSrc': {'enumerable': !0x1},
  '_text': {'enumerable': !0x1},
  '_textHeight': {'enumerable': !0x1},
  '_textWidth': {'enumerable': !0x1},
  '_textDirty': {'value': !0x1, 'enumerable': !0x1},
  'isNode': {'value': !0x0, 'writable': !0x1, 'enumerable': !0x1},
  'zIndex': {'value': c9[sl('0x45')]},
  'inLinks': {},
  'outLinks': {},
  'textOffsetX': {},
  'textOffsetY': {},
  'serializers': {'value': kg[sl('0x41')][sl('0x46')][sl('0x47')]([sl('0x48'), sl('0x30'), sl('0x31'), sl('0x49')])}
}), so[sl('0x41')][sl('0x4a')] = function () {
  return [sl('0x4b'), 'lt', 'lb', 'rt', 'rb'];
}, so[sl('0x41')][sl('0x4c')] = function () {
  return ['ct', 'cb', 'lm', 'rm'];
};
var tn = ['getBoundingClientRect', 'ownerDocument', 'body', 'documentElement', 'clientTop', 'clientLeft', 'top', 'pageYOffset', 'scrollTop', 'left', 'pageXOffset', 'scrollLeft', 'offsetTop', 'offsetParent', 'createVideo', 'createElement', 'video', 'muted', 'style', 'display', 'none', 'source', 'type', 'video/mp4', 'src', 'appendChild', 'oncanplay', 'log', 'video\x20can\x20play:\x20', 'position,width,height,left,top,bottom,right,zIndex', 'fullScreen', '_backup', 'forEach', 'position', 'bottom', 'zIndex', 'requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen', 'isMobileDevice', 'test', 'userAgent', 'addEventListener', 'isFirefox', 'attachEvent', 'substring', 'getOffsetPosition'];
!function (tp) {
  !function (tq) {
    for (; --tq;) tp['push'](tp['shift']());
  }(0x11c);
}(tn);
var tr = function (ts, tt) {
  return tn[ts = +ts];
};

function tu() {
}

tu[tr('0x0')] = function (tv, tw, tx) {
  let ty = tv['attachEvent'] || tv[tr('0x0')];
  oY[tr('0x1')]() && 'mousewheel' == tw ? tw = 'DOMMouseScroll' : window[tr('0x2')] && 'on' !== tw[tr('0x3')](0x0, 0x2) && (tw = 'on' + tw), ty['call'](tv, tw, tx);
}, tu[tr('0x4')] = function (tz) {
  if (null == tz) return {'left': 0x0, 'top': 0x0};
  let tA = 0x0, tB = 0x0;
  if (null != tz[tr('0x5')]) {
    var tC = tz[tr('0x5')](), tH = tz[tr('0x6')], tE = tH[tr('0x7')], tF = tH[tr('0x8')],
      tG = tF['clientTop'] || tE[tr('0x9')] || 0x0, tH = tF[tr('0xa')] || tE['clientLeft'] || 0x0;
    tA = tC[tr('0xb')] + (window[tr('0xc')] || tF && tF[tr('0xd')] || tE[tr('0xd')]) - tG, tB = tC[tr('0xe')] + (window[tr('0xf')] || tF && tF[tr('0x10')] || tE[tr('0x10')]) - tH;
  } else for (; tA += tz[tr('0x11')] || 0x0, tB += tz['offsetLeft'] || 0x0, tz = tz[tr('0x12')];) ;
  return {'left': tB, 'top': tA};
}, tu[tr('0x13')] = function (tI, tJ) {
  if ('string' != typeof tI) return tI;
  {
    let tK = document[tr('0x14')](tr('0x15'));
    tK[tr('0x16')] = 'muted', tK[tr('0x17')][tr('0x18')] = tr('0x19');
    let tL = document['createElement'](tr('0x1a'));
    return tL[tr('0x1b')] = tr('0x1c'), tL[tr('0x1d')] = tI, tK['appendChild'](tL), document['body'][tr('0x1e')](tK), tK[tr('0x1f')] = function () {
      ov[tr('0x20')](tr('0x21') + tI), tJ(tK);
    }, tK;
  }
}, tu['fullWindow'] = function (tM) {
  let tN = tr('0x22')['split'](',');
  if (0x1 == tM[tr('0x23')]) {
    let tO = tM[tr('0x24')];
    tN['forEach'](tN => {
      tM['style'][tN] = tO[tN];
    }), tM[tr('0x23')] = !0x1;
  } else {
    let tQ = {};
    tN[tr('0x25')](tN => {
      tQ[tN] = tM[tr('0x17')][tN];
    }), tM[tr('0x24')] = tQ, tM[tr('0x17')][tr('0x26')] = 'fixed', tM[tr('0x17')][tr('0xe')] = 0x0, tM[tr('0x17')]['top'] = 0x0, tM['style'][tr('0x27')] = 0x0, tM['style']['right'] = 0x0, tM['style'][tr('0x28')] = c9['FullWindowDom'], tM['fullScreen'] = !0x0;
  }
}, tu[tr('0x23')] = function (tS) {
  tS[tr('0x29')] ? tS[tr('0x29')]() : tS['mozRequestFullScreen'] ? tS[tr('0x2a')]() : tS[tr('0x2b')] ? tS['webkitRequestFullscreen']() : tS['msRequestFullscreen'] && tS[tr('0x2c')]();
}, tu[tr('0x2d')] = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i[tr('0x2e')](navigator[tr('0x2f')]);
var tT = ['touchend', 'mousemove', 'touchmove', 'isDraging', 'toObjectLocalDXY', 'stageToLocalXY', 'mouseDownX', 'update', 'assign', 'previous', 'event', 'isDragEnd', 'isMouseOn', 'mouseout', 'idleTimer', 'isIdle', 'type', 'offsetX', 'offsetY', 'touchstart', 'isMouseDown', 'mouseDownY', 'mouseup', 'click'];
!function (tU) {
  !function (tV) {
    for (; --tV;) tU['push'](tU['shift']());
  }(0xad);
}(tT);
var tW = function (tX, tY) {
  return tT[tX = +tX];
};

class tZ {
  constructor() {
  }

  [tW('0x0')](u0) {
    var u1 = u0[tW('0x1')](this[tW('0x2')], this['mouseDownY']), u0 = u0[tW('0x1')](this['x'], this['y']);
    return {'dx': u0['x'] - u1['x'], 'dy': u0['y'] - u1['y']};
  }

  [tW('0x3')](u3, u4) {
    var u5 = Object[tW('0x4')]({}, this);
    this[tW('0x5')] = u5, this[tW('0x6')] = u3, this[tW('0x7')] = !0x1, this[tW('0x8')] = u4 != tW('0x9'), this['isIdle'] = !0x1;
    let u6 = this;
    null != this['idleTimer'] && window['clearTimeout'](this[tW('0xa')]), this[tW('0xa')] = setTimeout(function () {
      u6[tW('0xb')] = !0x0;
    }, this['idleTimeout']), this[tW('0xc')] = u4, this['x'] = u3[tW('0xd')], this['y'] = u3['offsetY'], this['offsetX'] = u3[tW('0xd')], this['offsetY'] = u3[tW('0xe')], 'mousedown' == u4 || u4 == tW('0xf') ? (this[tW('0x10')] = !0x0, this[tW('0x2')] = this['x'], this[tW('0x11')] = this['y']) : u4 != tW('0x12') && u4 != tW('0x13') && u4 != tW('0x9') && u4 != tW('0x14') || (this[tW('0x10')] = !0x1, u5 && u5[tW('0xc')] == tW('0x15') && (this[tW('0x7')] = !0x0)), this['isDraging'] = 0x1 == this['isMouseDown'] && (u4 == tW('0x15') || u4 == tW('0x16')), this['isDragStart'] = this['isDraging'] && 0x1 != u5[tW('0x17')], this['dx'] = this['x'] - u5['x'], this['dy'] = this['y'] - u5['y'];
  }
}

bN(tZ['prototype'], {
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
var u7 = ['moveWith', 'log', 'dx\x20is\x20null!', 'translateWith', 'mousewheelHandler', 'preventDefault', 'mousemoveHandler', 'mouseupHandler', 'dblclickHandler', 'prototype', 'back', 'mouseInfo', 'render', 'style', 'backgroundColor', 'white', 'border', 'solid\x201px\x20gray', 'absolute', 'zIndex', 'handlerLayer', 'opacity', 'right', 'bottom', 'appendChild', 'domElement', 'setSize', 'rectObj', 'setStyles', 'canvas', 'mousedown', 'mouseup', 'mousemove', 'click', 'dblclick', 'mousewheel', 'addEventListener', 'offsetX', 'offsetY', 'update', 'Handler', 'isDraging', 'mousedragHandler', 'Overview\x20has\x20no\x20handler:', 'show', 'visible', 'hide', 'getWidth', 'getHeight', 'stage', 'getChildren', 'forEach', 'getAABB', 'union', 'paint', 'getLayersAABBRect', 'max', 'width', 'height', 'context', 'save', 'scale', 'translate', 'dirty', 'paintDragRect', 'resizeTo', 'translateTo', 'lineWidth', 'fillStyle', 'rgba(0,250,50,0.2)', 'strokeStyle', 'red', 'beginPath', 'rect', 'fill', 'restore', 'getRect', 'details', 'currentTarget'];
!function (u8) {
  !function (u9) {
    for (; --u9;) u8['push'](u8['shift']());
  }(0x196);
}(u7);
var ua = function (ub, uc) {
  return u7[ub = +ub];
};

class ud extends kg {
  constructor(ue) {
    super(), gj[ua('0x0')](), this['stage'] = ue, this[ua('0x1')] = new tZ(), this[ua('0x2')] = new BH();
    let uf = this[ua('0x2')]['canvas'];
    uf[ua('0x3')][ua('0x4')] = ua('0x5'), uf['style'][ua('0x6')] = ua('0x7'), uf[ua('0x3')]['position'] = ua('0x8'), uf[ua('0x3')][ua('0x9')] = ue[ua('0xa')]['zIndex'] + 0x1, uf[ua('0x3')][ua('0xb')] = 0.7, uf[ua('0x3')][ua('0xc')] = 0x0, uf['style'][ua('0xd')] = 0x0, ue['layersContainer'][ua('0xe')](uf), this[ua('0xf')] = uf, this['render'][ua('0x10')](0xc8, 123.6), this[ua('0x11')] = new so(null, 0x0, 0x0), this[ua('0x11')]['hide'](), this['initEvent'](), this['hide']();
  }

  [ua('0x12')](ug) {
    if (null == ug) return this;
    for (var uh in ug) this[ua('0x13')][ua('0x3')][uh] = ug[uh];
    return this;
  }

  ['initEvent']() {
    let ui = this, uj = [ua('0x14'), ua('0x15'), ua('0x16'), ua('0x17'), ua('0x18'), ua('0x19')];
    let uk = ui[ua('0x2')][ua('0x13')], ul = this['mouseInfo'];
    uj['map'](function (um) {
      tu[ua('0x1a')](uk, um, function (un) {
        if (!(un[ua('0x1b')] < 0x0 || un[ua('0x1c')] < 0x0)) {
          ul[ua('0x1d')](un, um);
          let uj = gz(um, un);
          uj['details'] = ul;
          let uk = um + ua('0x1e');
          if (ul[ua('0x1f')] && (uk = ua('0x20')), null == ui[uk]) throw new Error(ua('0x21') + um);
          ui[uk](uj);
        }
      });
    });
  }

  [ua('0x22')]() {
    this[ua('0x23')] = !0x0, this[ua('0x2')][ua('0x22')]();
  }

  ['hide']() {
    this[ua('0x23')] = !0x1, this['render'][ua('0x24')]();
  }

  [ua('0x25')]() {
    return this[ua('0x2')][ua('0x25')]();
  }

  [ua('0x26')]() {
    return this[ua('0x2')][ua('0x26')]();
  }

  [ua('0x10')](ur, us) {
    return this[ua('0x2')]['setSize'](ur, us);
  }

  ['getLayersAABBRect']() {
    let ut = null;
    return this[ua('0x27')][ua('0x28')]()[ua('0x29')](function (uu, uv) {
      uu = uu[ua('0x2a')](!0x0);
      ut = null == ut ? uu : ut[ua('0x2b')](uu);
    }), ut;
  }

  [ua('0x2c')]() {
    let uw = this[ua('0x27')], ux = this['render'];
    var uy = this[ua('0x25')](), uz = this[ua('0x26')](), uA = this[ua('0x2d')]();
    if (null != uA) {
      uy = uy / Math[ua('0x2e')](uy, uA[ua('0x2f')]), uz = uz / Math[ua('0x2e')](uz, uA[ua('0x30')]);
      ux['clearAll']();
      let uB = ux[ua('0x31')];
      uB[ua('0x32')](), uB[ua('0x33')](uy, uz), uB[ua('0x34')](-uA['x'], -uA['y']), uw[ua('0x28')]()[ua('0x29')](function (uB) {
        uB[ua('0x35')] = !0x0, ux[ua('0x2c')](uB);
      }), uB['restore'](), this[ua('0x36')](uB, uA);
    }
  }

  ['paintDragRect'](uD, uE) {
    let uF = this[ua('0x11')];
    var uG = this['stage'];
    let uH = this[ua('0x2')];
    var uI = Math[ua('0x2e')](uE[ua('0x2f')], uG['width']), uJ = Math[ua('0x2e')](uE[ua('0x30')], uG[ua('0x30')]),
      uK = uG[ua('0x2f')] / uI, uG = uG['height'] / uJ;
    if (0x1 == uK && 0x1 == uG) uF[ua('0x24')](); else {
      uF[ua('0x22')]();
      uK = uH[ua('0x25')]() * uK, uG = uH[ua('0x26')]() * uG;
      uF[ua('0x37')](uK, uG);
      uI = uH[ua('0x25')]() / uI, uJ = uH[ua('0x26')]() / uJ;
      let uM = -uE['x'] * uI, uN = -uE['y'] * uJ;
      uM < 0x0 && (uM = 0x0), uN < 0x0 && (uN = 0x0), uM + uF[ua('0x2f')] > uH[ua('0x25')]() && (uM = uH['getWidth']() - uF[ua('0x2f')]), uN + uF[ua('0x30')] > uH[ua('0x26')]() && (uN = uH[ua('0x26')]() - uF[ua('0x30')]), uF[ua('0x38')](uM, uN), uD[ua('0x32')](), uD[ua('0x39')] = 0x2, uD[ua('0x3a')] = ua('0x3b'), uD[ua('0x3c')] = ua('0x3d'), uD[ua('0x3e')](), uD[ua('0x3f')](uF['x'], uF['y'], uF['width'], uF[ua('0x30')]), uD['stroke'](), uD[ua('0x40')](), uD[ua('0x41')]();
    }
  }

  [ua('0x1d')]() {
    this[ua('0x23')] && (this['stage'][ua('0x1d')](), this[ua('0x2c')]());
  }

  ['mousedownHandler'](uO) {
    let uP = this[ua('0x11')][ua('0x42')]();
    var uQ = uO[ua('0x43')]['x'], uO = uO[ua('0x43')]['y'];
    uP['contains'](uQ, uO) && (this[ua('0x44')] = this[ua('0x11')]);
    uQ -= this[ua('0x11')]['x'] + this['rectObj']['width'] / 0x2, uO -= this[ua('0x11')]['y'] + this['rectObj']['height'] / 0x2;
    this[ua('0x45')](uQ, uO);
  }

  [ua('0x20')](uS) {
    var uT = uS[ua('0x43')]['dx'], uU = uS[ua('0x43')]['dy'];
    if (null == uT) throw console[ua('0x46')](uS), new Error(ua('0x47'));
    this[ua('0x45')](uT, uU);
  }

  [ua('0x45')](uV, uW) {
    if (this['rectObj'][ua('0x23')]) {
      0x0 < (uV = uV < 0x0 && this[ua('0x11')]['x'] + uV <= 0x0 ? -this['rectObj']['x'] : uV) && this[ua('0x11')]['x'] + this[ua('0x11')][ua('0x2f')] >= this[ua('0x25')]() && (uV = this[ua('0x25')]() - this[ua('0x11')]['width'] - this[ua('0x11')]['x']), 0x0 < (uW = uW < 0x0 && this[ua('0x11')]['y'] <= 0x0 ? -this['rectObj']['y'] : uW) && this[ua('0x11')]['y'] + this[ua('0x11')][ua('0x30')] >= this[ua('0x26')]() && (uW = this['getHeight']() - this[ua('0x11')][ua('0x30')] - this[ua('0x11')]['y']), this[ua('0x11')][ua('0x48')](uV, uW);
      var uZ = this[ua('0x2d')](), uY = uZ[ua('0x2f')], uZ = uZ['height'];
      let v0 = uY * (uV / this[ua('0x25')]()), v1 = uZ * (uW / this[ua('0x26')]());
      this[ua('0x27')]['getChildren']()[ua('0x29')](function (v2, uV) {
        v2[ua('0x48')](-v0, -v1);
      });
      let v4 = this;
      this['_updateTimer'] = setTimeout(function () {
        v4[ua('0x1d')]();
      }, 0x14), this[ua('0x27')][ua('0x28')]()[ua('0x29')](function (v4, uV) {
        v4[ua('0x35')] = !0x0;
      }), this['stage'][ua('0x1d')]();
    }
  }

  [ua('0x49')](v7) {
    this['stage'][ua('0x49')](v7), v7[ua('0x4a')]();
  }

  [ua('0x4b')](v8) {
  }

  [ua('0x4c')](v9) {
    this[ua('0x44')] = null;
  }

  ['clickHandler'](va) {
  }

  [ua('0x4d')](vb) {
  }
}

bN(ud[ua('0x4e')], {'handlerLayer': {}, 'viewLayer': {}, 'rectObj': {}, 'currentTarget': {}});
var vc = ['dispatchEvent', 'width', 'scaleX', 'height', 'getPosition', 'center', 'toStageXY', 'translateWith', 'scaleBy', 'hasChildren', 'length', 'MIN_SAFE_INTEGER', 'MAX_SAFE_INTEGER', 'resizeTo', 'css', 'overview', 'show', '_overviewTimer', 'dirty', 'update', 'http://www.w3.org/1999/xhtml', 'href', 'download', 'createEvent', 'MouseEvents', 'initMouseEvent'];
!function (vd) {
  !function (ve) {
    for (; --ve;) vd['push'](vd['shift']());
  }(0x12d);
}(vc);
var vf = function (vg, vh) {
  return vc[vg = +vg];
};

function vi(vj, vk) {
  null == vj['overview'] && (vj['overview'] = new ud(vj)), vj['overview'][vf('0x0')](vk), vj[vf('0x1')][vf('0x2')](), clearInterval(vj[vf('0x3')]), vj[vf('0x3')] = setInterval(function () {
    vj['overview'][vf('0x4')] && vj[vf('0x1')][vf('0x5')]();
  }, 0x1f4);
}

function vl(vm, vn) {
  let vo = document['createElementNS'](vf('0x6'), 'a');
  vo[vf('0x7')] = vm, vo[vf('0x8')] = vn;
  let vp = document[vf('0x9')](vf('0xa'));
  vp[vf('0xb')]('click', !0x0, !0x1, window, 0x0, 0x0, 0x0, 0x0, 0x0, !0x1, !0x1, !0x1, !0x1, 0x0, null), vo[vf('0xc')](vp);
}

function vq(vr, vs, vt, vu, vv) {
  var vw = vr[vf('0xd')] * vr[vf('0xe')], vx = vr[vf('0xf')] * vr['scaleY'];
  let vy = vw * vs - vw, vz = vx * vt - vx;
  null != vu && null != vv && (vx = vr[vf('0x10')](vf('0x11')), vx = (vu - (vu = vr[vf('0x12')](vx['x'], vx['y']))['x']) / 0x2, vu = (vv - vu['y']) / 0x2, 0x1 <= vs ? (vy += vx, vz += vu) : (vy -= vx * vs, vz -= vu * vt)), vr[vf('0x13')](-vy / 0x2, -vz / 0x2), vr[vf('0x14')](vs, vt);
}

var vA = ['stage', 'mouseY', 'dirty', 'updateViewRect', 'getViewRectInLayer', 'viewRect', 'toPojo', 'stringify', 'width', 'height', 'getHeight', 'setSize', 'pickUpChild', 'context', 'pickUpByRect', 'translateWith', 'backgroundRepeat', 'css', 'keys', 'forEach', 'startsWith', 'getAABB', 'getChildrenAABB', 'toStageAABB', 'show', 'hide', 'draw', 'save', 'rect', 'stroke', 'hasListener', 'zoom', 'dispatchEvent', 'defaultPrevented', 'cancelZoom', 'scaleTo', 'translateTo', 'requestReapint', 'forceUpdate', 'renderLayer', 'setBackground', 'findChildren', 'toLayerRect', 'draggable', 'details', 'offsetLeft', 'left', 'isDraging', 'setDrawDelay', 'dragDrawDelay', 'layersContainer', 'overflow', 'hidden', 'dragEndHandler', 'offsetTop', '0px', 'addChild', 'addChilds', 'centerBy', 'length', 'union', 'openJson', 'resetTo', 'removeAllChild', 'parse', 'version', 'warn', 'json\x20version\x20:', 'jtopo\x20version:', 'className', 'Layer', 'Styles', 'compare', 'restore', 'restoreBackground', '_background', 'reloadJsonTest', 'toJson', 'timeEnd', 'log', 'changed', 'passed', 'getAllVisiable', 'children', 'flatten', 'getMousePoint', 'stageToLocalXY', '_paint2d', 'paint', 'init', 'translateObjectsCenterTo', 'getRect', 'getCenter', '_destory', 'destoryed', 'removeChild', 'prototype', '_frames', 'undefined', 'name', 'style', 'black', 'center', 'top', 'hasImageLoad', 'displayList', 'setRender', 'view', 'render', 'dispose', 'setLayer', 'canvas', 'zIndex', 'position', 'absolute', 'appendChild', 'background', 'backgroundPosition', 'backgroundSize', 'update', 'paintPrepare', 'getTransform', 'invert', 'mousePointInLayer', 'point', 'mouseX'];
!function (vB) {
  !function (vC) {
    for (; --vC;) vB['push'](vB['shift']());
  }(0x160);
}(vA);
var vD = function (vE, vF) {
  return vA[vE = +vE];
};

class vG extends kg {
  constructor(vH) {
    super(), this[vD('0x0')] = vH, this[vD('0x1')] = new da({
      'strokeStyle': vD('0x2'),
      'lineWidth': 0x1,
      'textPosition': c6['cb'],
      'textAlign': vD('0x3'),
      'textBaseline': vD('0x4')
    }), this[vD('0x5')] = !0x1, this[vD('0x6')] = [];
  }

  ['setView'](vI) {
    if ('3d' == vI) {
      const vJ = gT('ThreeRender');
      this[vD('0x7')](new vJ());
    } else this['setRender'](new BH());
    this[vD('0x8')] = vI;
  }

  [vD('0x7')](vK) {
    null != this[vD('0x9')] && this[vD('0x9')][vD('0xa')](), vK[vD('0xb')](this);
    const vL = vK[vD('0xc')];
    vL[vD('0x1')][vD('0xd')] = this[vD('0xd')], vL[vD('0x1')][vD('0xe')] = vD('0xf'), vL[vD('0x1')]['left'] = '0px', this['stage']['layersContainer'][vD('0x10')](vL), this['render'] = vK;
    vK = this[vD('0x1')];
    null != vK && (vL['style'][vD('0x11')] = vK[vD('0x11')], vL[vD('0x1')]['backgroundPosition'] = vK[vD('0x12')], vL[vD('0x1')]['backgroundSize'] = vK[vD('0x13')]), this[vD('0x14')]();
  }

  [vD('0x15')](vM) {
    this[vD('0x6')] = [];
    let vN = this[vD('0x16')]()[vD('0x17')]();
    return this[vD('0x18')] = vN[vD('0x19')]({
      'x': this['stage'][vD('0x1a')] || 0x0,
      'y': this[vD('0x1b')][vD('0x1c')] || 0x0
    }), this[vD('0x1d')] && this[vD('0x1e')](), !0x0;
  }

  [vD('0x1f')]() {
    return null == this[vD('0x20')] && (this['viewRect'] = this[vD('0x1e')]()), this[vD('0x20')];
  }

  ['toFileJson']() {
    var vO = this[vD('0x21')]();
    return JSON[vD('0x22')](vO);
  }

  ['updateViewRect']() {
    let vP = new u(0x0, 0x0, this[vD('0x1b')][vD('0x23')], this[vD('0x1b')][vD('0x24')]),
      vQ = this[vD('0x16')]()['invert']();
    var vR = vQ[vD('0x19')]({'x': vP['x'], 'y': vP['y']}), vS = vQ['point']({'x': vP[vD('0x23')], 'y': vP[vD('0x24')]});
    return vP['x'] = vR['x'], vP['y'] = vR['y'], vP[vD('0x23')] = vS['x'] - vR['x'], vP[vD('0x24')] = vS['y'] - vR['y'], this[vD('0x20')] = vP, vP;
  }

  ['updateSize'](vT, vU) {
    vT == this[vD('0x9')]['getWidth']() && vU == this[vD('0x9')][vD('0x25')]() || (this[vD('0x9')][vD('0x26')](vT, vU), this['resizeTo'](vT, vU), this[vD('0x14')]());
  }

  [vD('0x27')](vV) {
    if (this[vD('0x9')]['pickUpChild']) return this['render'][vD('0x27')]();
    var vW = this[vD('0x9')][vD('0x28')];
    return super[vD('0x27')](vW, vV);
  }

  [vD('0x29')](vX, vY) {
    return null == vY && (vY = this[vD('0x9')][vD('0x28')]), super[vD('0x29')](vX, vY);
  }

  [vD('0x2a')](vZ, w0) {
    super[vD('0x2a')](vZ, w0);
    w0 = this[vD('0x1')][vD('0x2b')];
    return null != w0 && 'no-repeat' != w0 && this[vD('0x2c')]({'backgroundPosition': this['x'] + 'px\x20' + this['y'] + 'px'}), this;
  }

  [vD('0x2c')](w1, w2) {
    super['css'](w1, w2);
    let w3 = w1;
    if ('string' == typeof w1 && (w3[w1] = w2), this[vD('0x9')]) {
      const w4 = this[vD('0x9')]['canvas'];
      let w1 = Object[vD('0x2d')](w3);
      w1[vD('0x2e')](w1 => {
        var w2 = w3[w1];
        w1[vD('0x2f')](vD('0x11')) && (w4['style'][w1] = w2);
      });
    }
  }

  [vD('0x30')](w8) {
    w8 = this[vD('0x31')](w8, co);
    return this[vD('0x32')](w8);
  }

  [vD('0x33')]() {
    super[vD('0x33')](), this[vD('0x9')][vD('0x33')]();
  }

  ['hide']() {
    super[vD('0x34')](), this[vD('0x9')][vD('0x34')]();
  }

  [vD('0x35')](w9) {
    this['showBorder'] && (w9[vD('0x36')](), w9['beginPath'](), w9[vD('0x37')](0x0, 0x0, this[vD('0x23')], this[vD('0x24')]), w9[vD('0x38')](), w9['restore']());
  }

  ['zoom'](wa, wb, wc, wd) {
    if (this[vD('0x39')](vD('0x3a'))) {
      let we = new Event(vD('0x3a'), {'cancelable': !0x0});
      if (we[vD('0x3a')] = {'x': wa, 'y': wb, 'cx': wc, 'cy': wd}, this[vD('0x3b')](we), 0x1 == we[vD('0x3c')]) return;
    }
    vq(this, wa, wb, wc, wd);
  }

  [vD('0x3d')]() {
    this[vD('0x3e')](0x1, 0x1), this[vD('0x3f')](0x0, 0x0), this[vD('0x1d')] = !0x0;
  }

  [vD('0x14')]() {
    this[vD('0x40')] = !0x0;
  }

  [vD('0x41')](wf) {
    this[vD('0x9')][vD('0x42')](this);
  }

  [vD('0x43')](wg, wh) {
    this[vD('0x9')][vD('0xc')][vD('0x1')][vD('0x11')] = wg, this[vD('0x9')][vD('0xc')][vD('0x1')][vD('0x13')] = wh;
  }

  ['find'](wi, wj, wk) {
    return this[vD('0x44')](wi, wj, wk);
  }

  ['toStageAABB'](wl) {
    let wm = this[vD('0x16')]();
    var wn = wm['point']({'x': wl['x'], 'y': wl['y']}),
      wo = wm['point']({'x': wl['x'] + wl[vD('0x23')], 'y': wl['y'] + wl[vD('0x24')]});
    return wl['x'] = wn['x'], wl['y'] = wn['y'], wl[vD('0x23')] = wo['x'] - wn['x'], wl[vD('0x24')] = wo['y'] - wn['y'], wl;
  }

  [vD('0x45')](wp) {
    let wq = this[vD('0x16')]()[vD('0x17')](), wr = new u();
    var ws = wq[vD('0x19')]({'x': wp['x'], 'y': wp['y']}),
      wp = wq['point']({'x': wp['x'] + wp[vD('0x23')], 'y': wp['y'] + wp[vD('0x24')]});
    return wr['x'] = ws['x'], wr['y'] = ws['y'], wr[vD('0x23')] = wp['x'] - ws['x'], wr[vD('0x24')] = wp['y'] - ws['y'], wr;
  }

  ['dragHandle'](wu) {
    if (0x0 != this[vD('0x46')]) {
      var wv = wu[vD('0x47')], ww = wv['dx'], wx = wv['dy'];
      if (0x0 == this['dragDrawDelay']) this[vD('0x2a')](ww, wx); else {
        let wy = this[vD('0x9')][vD('0xc')];
        wu = wy[vD('0x48')], wv = wy['offsetTop'];
        wy['style'][vD('0x49')] = wu + ww + 'px', wy['style'][vD('0x4')] = wv + wx + 'px';
      }
      this[vD('0x4a')] = !0x0;
    }
  }

  [vD('0x4b')](wz) {
    (this[vD('0x4c')] = wz) ? this[vD('0x1b')][vD('0x4d')][vD('0x1')][vD('0x4e')] = vD('0x4f') : this[vD('0x1b')][vD('0x4d')]['style']['overflow'] = 'inherit';
  }

  [vD('0x50')](wA) {
    if (this['isDraging'] = !0x1, 0x0 != this['dragDrawDelay']) {
      let wA = this['render'][vD('0xc')];
      var wC = wA['offsetLeft'], wD = wA[vD('0x51')];
      this[vD('0x2a')](wC, wD), wA[vD('0x1')][vD('0x49')] = '0px', wA[vD('0x1')][vD('0x4')] = vD('0x52');
    }
  }

  [vD('0x53')](wE) {
    super[vD('0x53')](wE), this[vD('0x14')]();
  }

  [vD('0x54')](wF) {
    super[vD('0x54')](wF), this[vD('0x14')]();
  }

  [vD('0x55')](wG) {
    var wH = this[vD('0x1b')];
    let wI;
    if (null == wG) wI = this['getAABB'](!0x0, cn); else if (wG instanceof kg) wI = wG['getAABB'](!0x0, cn); else {
      let wH = wG;
      wI = wH[vD('0x30')](!0x0, cn);
      for (let wG = 0x1; wG < wH[vD('0x56')]; wG++) wI = wI[vD('0x57')](wH[wG][vD('0x30')](!0x0, cn));
    }
    wG = wH[vD('0x23')] / 0x2, wH = wH[vD('0x24')] / 0x2, wG -= wI['x'], wH -= wI['y'];
    wG -= wI['width'] / 0x2, wH -= wI[vD('0x24')] / 0x2, this[vD('0x2a')](wG, wH), this[vD('0x14')]();
  }

  [vD('0x58')](wL) {
    gj[vD('0x59')](0x64), this[vD('0x5a')](), this['fillByJson'](wL);
  }

  ['fillByJson'](wM) {
    var wN = JSON[vD('0x5b')](wM);
    let wO = wN['DisplayObjects'];
    wN[vD('0x5c')] != c2 && console[vD('0x5d')](vD('0x5e'), wN['version'], vD('0x5f'), c2);
    var wP = wO[0x0];
    return wP[vD('0x60')] == vD('0x61') && (wM = wN[vD('0x62')][wP[vD('0x1')]], this['restoreBackground'](wM), this['id'] = wP['id']), wO[vD('0x2e')](wM => gj[vD('0x63')](wM['id'])), this[vD('0x64')](wN), this[vD('0x1d')] = !0x0, this;
  }

  [vD('0x65')](wR) {
    let wS = Object[vD('0x2d')](wR);
    const wT = this[vD('0x9')]['canvas'];
    null != wR[vD('0x66')] && (wT[vD('0x1')][vD('0x11')] = wR['_background']), wS[vD('0x2e')](wS => {
      var wV = wR[wS];
      wS[vD('0x2f')](vD('0x11')) && (wT[vD('0x1')][wS] = wV);
    }), wT[vD('0x23')] += 0x1, --wT['width'];
  }

  [vD('0x67')]() {
    var wW = this[vD('0x68')]();
    console['time'](vD('0x67')), this[vD('0x58')](wW);
    var wX = this[vD('0x68')]();
    return console[vD('0x69')](vD('0x67')), wW != wX ? console[vD('0x6a')](vD('0x6b'), wW, wX) : console[vD('0x6a')](vD('0x6c')), wW;
  }

  [vD('0x6d')]() {
    return this[vD('0x6e')][vD('0x6f')](wY => 0x1 == wY['visible']);
  }

  [vD('0x70')]() {
    var wZ = this['stage'];
    return this[vD('0x71')](wZ[vD('0x1a')], wZ['mouseY']);
  }

  ['setRenderView'](x0) {
    null != x0 ? x0[vD('0x73')] && (x0[vD('0x74')](this), this[vD('0x72')] = this[vD('0x73')], this[vD('0x73')] = function () {
      return x0[vD('0x73')]();
    }) : this['paint'] = this[vD('0x72')];
  }

  [vD('0x75')](x1, x2, x3) {
    let x4 = x2, x5 = x3, x6 = new b8();
    x6 = x6['concat'](x1);
    let x7 = x6[vD('0x76')]();
    x1 = x7[vD('0x77')]();
    let x8 = x4 - x1['x'], x9 = x5 - x1['y'];
    x6[vD('0x2e')](x1 => {
      x1['translateWith'](x8, x9);
    });
  }

  [vD('0x78')]() {
    if (this[vD('0x79')]) throw new Error('Layer\x20has\x20been\x20destroyed\x20already.');
    this['destoryed'] = !0x0, this[vD('0x1b')] && this[vD('0x1b')][vD('0x7a')](this), this[vD('0x6')] = void 0x0, this['listeners'] = void 0x0, this[vD('0x1')] = void 0x0, this['viewRect'] = void 0x0, this['render'][vD('0xc')]['remove'](), this['render'] = void 0x0, this[vD('0x1b')] = void 0x0, this[vD('0x6e')] = void 0x0;
  }
}

Object['defineProperties'](vG[vD('0x7b')], {
  'frames': {
    'get'() {
      return this[vD('0x7c')];
    }, 'set'(xb) {
      this['_frames'] = xb;
    }
  }
}), bN(vG['prototype'], {
  'isLayer': {'value': !0x0, 'writable': !0x1},
  'index': {},
  'className': {'value': 'Layer', 'writable': !0x1},
  'displayList': {},
  'requestReapint': {'value': !0x1, 'enumerable': !0x1},
  '_frames': {'value': 0x0, 'enumerable': !0x1},
  'lastTime': {'enumerable': !0x1},
  'mouseEnabled': {'value': !0x0},
  'draggable': {'value': !0x0},
  'wheelZoom': {'value': !0x0},
  '_layerIndex': {'value': vD('0x7d'), 'enumerable': !0x1, 'writable': !0x1},
  'fps': {'value': 0x0},
  '_background': {'enumerable': !0x1},
  '_backgroundSize': {'enumerable': !0x1},
  'viewRect': {'enumerable': !0x1},
  'isDraging': {'value': !0x1},
  'dragDrawDelay': {'value': !0x1},
  'cuttingHide': {'value': !0x0},
  'view': {'value': '2d'},
  'serializers': {'value': ['id', vD('0x0'), vD('0x60')]},
  'mouseInLayer': {}
});
var xc = ['concat', 'getAnchorPoints', 'push', 'edges', 'setCoordinates', 'setXY', 'resizeTo', 'width', 'height', 'map', 'coordinates', 'style', 'borderWidth', 'length', 'lineTo', 'draw', 'beginPath', 'rect', 'closePath', 'mousePickupPath', 'paintText', 'getVertices', 'getPosition', 'name\x20is\x20null', 'substring', 'getPoints', 'contentRotation', 'getPositionNormal', 'center', 'normal', 'prototype', 'PolygonNode', 'serializers'];
!function (xd) {
  !function (xe) {
    for (; --xe;) xd['push'](xd['shift']());
  }(0x190);
}(xc);
var xf = function (xg, xh) {
  return xc[xg = +xg];
};
const xi = 'vertex_';

class xj extends so {
  constructor(xk, xl, xm, xn, xo, xp) {
    super(xk, xl, xm, xn, xo, xp), null != xp && (this[xf('0x0')] = xp);
  }

  [xf('0x1')](xq) {
    const xr = fc(xq);
    this[xf('0x2')](xr['x'], xr['y']), this[xf('0x3')](xr[xf('0x4')], xr[xf('0x5')]), xq = xq[xf('0x6')](function (xq) {
      return {'x': xq[0x0] - xr['x'], 'y': xq[0x1] - xr['y']};
    }), this[xf('0x7')] = xq;
  }

  ['drawShape'](xt, xu, xv, xw, xx) {
    this[xf('0x8')][xf('0x9')];
    var xy = this['getPoints']();
    xt['moveTo'](xy[0x0]['x'], xy[0x0]['y']);
    let xz = xy[0x0];
    for (let xu = 0x1; xu < xy[xf('0xa')]; xu++) xz = ((xy[xu]['x'] !== xz['x'] || xy[xu]['y'] !== xz['y']) && xt[xf('0xb')](xy[xu]['x'], xy[xu]['y']), xy[xu]);
    xt['closePath']();
  }

  [xf('0xc')](xB) {
    this['strokeAndFill'](xB), xB[xf('0xd')](), xB[xf('0xe')](0x0, 0x0, this[xf('0x4')], this[xf('0x5')]), xB[xf('0xf')](), this[xf('0x10')](xB), this[xf('0x11')](xB);
  }

  [xf('0x12')]() {
    if (null != this[xf('0x7')]) return this[xf('0x7')];
    var xC = this[xf('0x8')]['borderWidth'] || 0x0, xD = 0.5 * this[xf('0x4')], xE = 0.5 * this[xf('0x5')],
      xF = this['contentRotation'] || 0x0;
    return fj(this[xf('0x0')], xD, xE, xD - xC, xE - xC, xF);
  }

  [xf('0x13')](xG, xH, xI) {
    if (null == xG) throw new Error(xf('0x14'));
    if (xG['startsWith'](xi)) {
      let xH = parseInt(xG[xf('0x15')](xi[xf('0xa')]));
      var xK = this[xf('0x16')]();
      return xH >= xK && (xH = xK['length'] - 0x1), xK[xH];
    }
    return super[xf('0x13')](xG, xH, xI);
  }

  ['getPoints']() {
    return this['getVertices']();
  }

  ['rotateContent'](xL) {
    this[xf('0x17')] = xL;
  }

  [xf('0x18')](xM) {
    var xN = this[xf('0x13')](c6[xf('0x19')]), xM = this[xf('0x13')](xM);
    return u[xf('0x1a')](xN, xM);
  }
}

bN(xj[xf('0x1b')], {
  'className': {'value': xf('0x1c'), 'writable': !0x1},
  'isPolygonNode': {'value': !0x0, 'writable': !0x1},
  'edges': {'value': 0x3},
  'coordinates': {},
  'contentRotation': {},
  'serializers': {'value': so[xf('0x1b')][xf('0x1d')][xf('0x1e')]([xf('0x0'), xf('0x7'), xf('0x17')])}
}), xj[xf('0x1b')][xf('0x1f')] = function () {
  var xP = null != this[xf('0x7')] ? this[xf('0x7')][xf('0xa')] : this[xf('0x0')];
  let xQ = [];
  for (let xR = 0x0; xR < xP; xR++) xQ[xf('0x20')](xi + xR);
  return xQ;
};
var xS = ['fixedName', 'EndpointNearest', 'point', 'target\x20is\x20null', 'center', 'function', 'error\x20arguments', 'getPositionNormal', 'name', 'getPosition', 'getLocalPoint', 'normal', 'isAutoFoldLink', 'points', 'target', 'isDisplayObjectTarget', 'isDisplayObjectId', 'number', 'toPojo', 'className', 'assign', 'prototype', 'segIndex', 'lineSegment', 'EndpointSegment', 'type'];
!function (xT) {
  !function (xU) {
    for (; --xU;) xT['push'](xT['shift']());
  }(0x91);
}(xS);
var xV = function (xW, xX) {
  return xS[xW = +xW];
};

class xY {
  constructor(xZ) {
    this[xV('0x0')] = xZ;
  }

  [xV('0x1')]() {
    return null != this[xV('0x0')] && this[xV('0x0')]['isDisplayObject'];
  }

  [xV('0x2')]() {
    return null != this['target'] && typeof this['target'] == xV('0x3');
  }

  [xV('0x4')]() {
    var y0 = this[xV('0x5')];
    return Object[xV('0x6')]({'className': y0}, this);
  }
}

bN(xY[xV('0x7')], {'className': {'value': 'Endpoint'}, 'type': {'value': !0x0}, 'offset': {}});

class y1 extends xY {
  constructor(y2, y3, y4) {
    super(y2), this['t'] = y3, this[xV('0x8')] = y4, this['type'] = c7[xV('0x9')];
  }
}

y1['prototype'][xV('0x5')] = xV('0xa');

class y5 extends xY {
  constructor(y6, y7) {
    super(y6), this['name'] = y7, this[xV('0xb')] = c7[xV('0xc')];
  }
}

y5[xV('0x7')][xV('0x5')] = 'EndpointFixedName';

class y8 extends xY {
  constructor(y9) {
    super(y9), this[xV('0xb')] = c7['nearest'];
  }
}

y8[xV('0x7')][xV('0x5')] = xV('0xd');

class ya extends xY {
  constructor(yb, yc, yd) {
    super(yb), this[xV('0xb')] = c7[xV('0xe')], this['x'] = yc, this['y'] = yd;
  }
}

ya[xV('0x7')][xV('0x5')] = 'EndpointFixedPoint';

class ye extends xY {
  constructor(yf, yg) {
    super(yf), this['fn'] = yg;
  }
}

function yh(yi, yj) {
  if (null == yi) throw new Error(xV('0xf'));
  if (yi instanceof xY) return yi;
  if (yj instanceof xY) return yj;
  if (yi instanceof kg) return yj == c6['nearest'] ? new y8(yi) : new y5(yi, yj || c6[xV('0x10')]);
  if (i8['isLikePoint'](yi)) return new ya(yi, yi['x'], yi['y']);
  if (typeof yi != xV('0x11')) throw console['log'](yi, yj), new Error(xV('0x12'));
  yj = yi();
  return new ya(yi, yj['x'], yj['y']);
}

ye[xV('0x7')][xV('0x5')] = 'EndpointFunction';
const yk = {'lm': [-0x1, 0x0], 'ct': [0x0, -0x1], 'rm': [0x1, 0x0], 'cb': [0x0, 0x1]};

function yl(ym) {
  if (null != ym) {
    let yn = ym[xV('0x0')];
    if (yn instanceof kg) {
      if (ym instanceof y5) return yn instanceof xj ? yn[xV('0x13')](ym[xV('0x14')]) : yk[ym[xV('0x14')]];
      if (ym instanceof y1) {
        var yo = ym[xV('0x8')], yp = ym['t'];
        if (yn instanceof xj) {
          var ym = yn[xV('0x15')](c6[xV('0x10')]), yr = yn[xV('0x16')](yp, yo);
          return u[xV('0x17')](ym, yr);
        }
        if (yn instanceof so) {
          if (0x0 == yo) return [0x0, -0x1];
          if (0x1 == yo) return [0x1, 0x0];
          if (0x2 == yo) return [0x0, 0x1];
          if (0x3 == yo) return [-0x1, 0x0];
          throw new Error('unkow\x20segIndex:' + yo);
        }
        if (yn[xV('0x18')]) {
          yr = yn['points'][yo], yo = yn[xV('0x19')][yo + 0x1], yr = [yo['x'] - yr['x'], yo['y'] - yr['y']];
          return eB['normalize']([], yr);
        }
      }
    }
  }
}

var ys = ['getOriginRotation', '_textArr', '_textHeight', 'max', 'width', 'resizeTo', 'borderWidth', 'dashed', 'borderStyle', 'dotted', 'lineWidth', 'strokeStyle', 'beginPath', 'rect', 'height', 'mousePickupPath', 'closePath', 'prototype', 'TextNode', 'serializers', 'concat', 'css', 'left', 'top', 'calcTextPosition', 'style', 'padding', 'autoSize', 'draw', 'paintText', 'autoDirection'];
!function (yt) {
  !function (yu) {
    for (; --yu;) yt['push'](yt['shift']());
  }(0x1e7);
}(ys);
var yv = function (yw, yx) {
  return ys[yw = +yw];
};

class yy extends so {
  constructor(yz, yA, yB, yC, yD) {
    super(yz, yA, yB, yC, yD), this[yv('0x0')]({
      'textPosition': c6['lt'],
      'textAlign': yv('0x1'),
      'textBaseline': yv('0x2')
    });
  }

  [yv('0x3')]() {
    let yE = super[yv('0x3')]();
    var yF = this[yv('0x4')][yv('0x5')] || 0x0;
    return 0x1 == this[yv('0x6')] && (yE['x'] += yF, yE['y'] += yF), yE;
  }

  [yv('0x7')](yG) {
    var yH = this['_text'];
    super[yv('0x8')](yG), 0x1 == this[yv('0x9')] && ((yI = this[yv('0xa')]()) < -Math['PI'] / 0x2 || yI > Math['PI'] / 0x2 ? this['rotation'] = Math['PI'] : this['rotation'] = 0x0);
    var yI = this['style'];
    if (0x1 == this[yv('0x6')]) {
      var yJ = this[yv('0xb')] || [yH], yK = yJ['length'], yL = yK * (yI['lineHeight'] || this[yv('0xc')]);
      let yM = 0x0;
      for (let yH = 0x0; yH < yK; yH++) yM = Math[yv('0xd')](yG['measureText'](yJ[yH])[yv('0xe')], yM);
      yH = yI[yv('0x5')] || 0x0;
      this[yv('0xf')](0x2 * yH + yM, 0x2 * yH + yL);
    }
    yL = yI[yv('0x10')] || 0x0;
    yI['borderStyle'] != yv('0x11') && yI[yv('0x12')] != yv('0x13') || null == yI['lineDash'] && yG['setLineDash']([0x1, 0x1]), yG[yv('0x14')] = yL, yG[yv('0x15')] = yI['borderColor'], yG[yv('0x16')](), yG[yv('0x17')](0x0, 0x0, this['width'], this[yv('0x18')]), 0x0 < yL ? (yG['stroke'](), this[yv('0x19')](yG)) : (this[yv('0x19')](yG), yG[yv('0x1a')]());
  }
}

bN(yy[yv('0x1b')], {
  'className': {'value': yv('0x1c'), 'writable': !0x1},
  'isTextNode': {'value': !0x0, 'writable': !0x1},
  'autoSize': {'value': !0x0},
  'autoDirection': {'value': !0x0},
  'serializers': {'value': so['prototype'][yv('0x1d')][yv('0x1e')]([yv('0x6'), 'autoDirection'])}
});
var yO = ['dashed', 'dotted', 'moveTo', 'lineTo', 'beginPath', 'lineCap', 'stroke', '_pickRadius', 'dispatchEvent', 'mousedragHandler', 'details', 'isDragStart', 'mousedownInitBegin', 'mousedownInitEnd', 'parent', 'stageToLocalXY', 'mouseDownX', 'mouseDownY', 'mousedrag', 'calcAZ', 'offsetAZHandle', 'beginOffset', 'offsetWithAngle', 'getSegmentPoints', 'getPoints', 'upgradeParent', 'changeParent', 'isEndpointHasSameParent', 'isAlone', 'isEndDisplayObject', 'unlink', 'removeOutLink', 'removeInLink', 'type', 'isLink', 'lineSegment', 'fixedName', 'name', 'nearest', 'Invalid\x20link\x27s\x20position\x20arguments', 'function', 'unkown\x20target\x20type', 'defineProperties', '_textDirty', 'getLocalPoint', 'getTransform', 'deep', 'getLayerTransform', 'invert', 'point', 'getPosition', 'link\x27s\x20deep\x20is\x200!', 'points\x20is\x20null', 'prototype', 'Link', 'serializers', 'concat', 'endOffset', 'getAnchorPoints', 'css', 'setEnd', 'text', 'paintPrepare', 'updatePoints', 'initLabel', 'draggable', 'origin', 'setLabel', 'string', 'label', 'mouseEnabled', 'connectable', 'center', 'bottom', 'removeChild', 'getBeginArrow', 'beginArrow', 'rotation', 'editable', 'style', 'addChild', 'getEndArrow', 'setEndArrow', 'endArrow', 'resizeTo', 'getAABB', 'points', 'setBegin', 'dirty', 'begin', 'target', 'isDisplayObject', 'end', 'isNode', 'getBeginPoint', 'getEndPoint', 'length', 'drawPoints', 'lineWidth', 'borderWidth', 'strokeStyle', 'lineDash', 'borderStyle'];
!function (yP) {
  !function (yQ) {
    for (; --yQ;) yP['push'](yP['shift']());
  }(0x1d8);
}(yO);
var yR = function (yS, yT) {
  return yO[yS = +yS];
};

class yU extends kg {
  constructor(yV, yW, yX, yY, yZ) {
    super(), (this['points'] = null) == yW && (yW = new i8(0x0, 0x0)), null == yX && (yX = new i8(0xa, 0x0)), this[yR('0x0')]({'border': '1px\x20solid\x20black'}), this['setBegin'](yW, yY), this[yR('0x1')](yX, yZ), this[yR('0x2')] = yV;
  }

  [yR('0x3')](z0) {
    return this['points'] = this[yR('0x4')](), !0x0;
  }

  [yR('0x5')](z1) {
    return z1['editable'] = !0x1, z1[yR('0x6')] = !0x1, z1[yR('0x7')] = [0x0, 0.5], z1;
  }

  [yR('0x8')](z2) {
    if (typeof z2 != yR('0x9')) null != this['label'] && this[yR('0xa')] !== z2 && this[yR('0xf')](this[yR('0xa')]), null != z2 && (this[yR('0x5')](z2), (this[yR('0xa')] = z2)[yR('0x6')] = !0x1, z2[yR('0xc')] = !0x1, z2[yR('0xb')] = !0x1, this['addChild'](z2)); else if (null == this[yR('0xa')]) {
      const z3 = new yy(z2);
      z3[yR('0xb')] = !0x1, z3[yR('0x6')] = !0x1, z3[yR('0xc')] = !0x1, z3[yR('0x0')]({
        'textPosition': c6[yR('0xd')],
        'textAlign': yR('0xd'),
        'textBaseline': yR('0xe')
      }), this[yR('0x5')](z3), this[yR('0x8')](z3);
    } else this[yR('0xa')][yR('0x2')] = z2;
  }

  [yR('0x10')]() {
    return this[yR('0x11')];
  }

  ['setBeginArrow'](z4) {
    null != this[yR('0x11')] && this[yR('0x11')] !== z4 && this[yR('0xf')](this[yR('0x11')]), z4[yR('0x7')] = [0x0, 0x0], z4[yR('0x12')] = -Math['PI'], z4[yR('0x13')] = !0x1, z4['draggable'] = !0x1, z4[yR('0xc')] = !0x1, z4[yR('0xb')] = !0x1, z4['resizeTo'](0xa, 0xa), z4[yR('0x14')] = this[yR('0x14')], this[yR('0x15')](z4), this[yR('0x11')] = z4;
  }

  [yR('0x16')]() {
    return this['endArrow'];
  }

  [yR('0x17')](z5) {
    null != this[yR('0x18')] && this[yR('0x18')] !== z5 && this['removeChild'](this['endArrow']), z5['editable'] = !0x1, z5[yR('0x6')] = !0x1, z5['mouseEnabled'] = !0x1, z5[yR('0xc')] = !0x1, z5[yR('0x7')] = [0x0, 0x1], z5[yR('0x14')] = this[yR('0x14')], z5[yR('0x19')](0xa, 0xa), this[yR('0x15')](z5), this[yR('0x18')] = z5;
  }

  [yR('0x1a')](z6, z7) {
    return null == this[yR('0x1b')] && (this[yR('0x1b')] = this[yR('0x4')]()), super[yR('0x1a')](z6, z7);
  }

  [yR('0x1c')](z8, z9) {
    this[yR('0x1d')] = !0x0, this[yR('0x1e')] = yh(z8, z9), null != this[yR('0x1e')] && this[yR('0x1e')][yR('0x1f')] && this[yR('0x1e')][yR('0x1f')][yR('0x20')] && this[yR('0x1e')]['target']['removeOutLink'](this), z8[yR('0x20')] && z8['addOutLink'](this);
  }

  ['setEnd'](za, zb) {
    this['dirty'] = !0x0, this[yR('0x21')] = yh(za, zb), null != this['end'] && this[yR('0x21')]['target'] && this[yR('0x21')][yR('0x1f')][yR('0x22')] && this[yR('0x21')][yR('0x1f')]['removeInLink'](this), za[yR('0x20')] && za['addInLink'](this);
  }

  [yR('0x23')]() {
    return null == this[yR('0x1b')] && (this[yR('0x1b')] = this[yR('0x4')]()), this['points'][0x0];
  }

  [yR('0x24')]() {
    return null == this[yR('0x1b')] && (this[yR('0x1b')] = this[yR('0x4')]()), this['points'][this['points'][yR('0x25')] - 0x1];
  }

  [yR('0x26')](zc, zd) {
    var ze = this['style'];
    zc[yR('0x27')] = ze[yR('0x28')] || 0x1, zc[yR('0x29')] = ze['borderColor'], null == ze[yR('0x2a')] && (ze[yR('0x2b')] != yR('0x2c') && ze[yR('0x2b')] != yR('0x2d') || zc['setLineDash']([0x1, 0x1])), zc[yR('0x2e')](zd[0x0]['x'], zd[0x0]['y']);
    let zf = zd[0x0];
    for (let ze = 0x1; ze < zd[yR('0x25')]; ze++) zf = ((zd[ze]['x'] !== zf['x'] || zd[ze]['y'] !== zf['y']) && zc[yR('0x2f')](zd[ze]['x'], zd[ze]['y']), zd[ze]);
  }

  ['draw'](zh) {
    if (null == this[yR('0x1e')] || null == this['end']) return this;
    var zi = this[yR('0x1b')];
    zh[yR('0x30')](), this[yR('0x14')] && this['style']['lineCap'] && (zh[yR('0x31')] = this['style'][yR('0x31')]), this['drawPoints'](zh, zi), zh[yR('0x32')]();
    zi = this[yR('0x14')][yR('0x27')] >= this[yR('0x33')] ? 0x0 : this[yR('0x33')];
    return this['mousePickupStroke'](zh, zi), this;
  }

  ['mousedownHandler'](zj) {
    0x1 == this['mouseEnabled'] && this[yR('0x34')](zj);
  }

  [yR('0x35')](zk) {
    if (0x0 != this['mouseEnabled'] && 0x0 != this['draggable']) {
      if (zk[yR('0x36')][yR('0x37')]) return this[yR('0x38')] = null, this['mousedownInitEnd'] = null, this[yR('0x1e')][yR('0x1f')]['isDisplayObject'] || (this['mousedownInitBegin'] = this[yR('0x23')]()), void (this[yR('0x21')][yR('0x1f')][yR('0x20')] || (this[yR('0x39')] = this[yR('0x24')]()));
      var zo = zk[yR('0x36')], zm = this[yR('0x3a')][yR('0x3b')](zo[yR('0x3c')], zo[yR('0x3d')]),
        zp = this[yR('0x3a')]['stageToLocalXY'](zo['x'], zo['y']), zo = zp['x'] - zm['x'], zp = zp['y'] - zm['y'];
      null != this['mousedownInitBegin'] && (zm = {
        'x': this[yR('0x38')]['x'] + zo,
        'y': this[yR('0x38')]['y'] + zp
      }, this[yR('0x1c')](zm)), null != this[yR('0x39')] && (zp = {
        'x': this['mousedownInitEnd']['x'] + zo,
        'y': this['mousedownInitEnd']['y'] + zp
      }, this[yR('0x1')](zp)), this[yR('0x34')](yR('0x3e'), zk);
    }
  }

  ['translateWith'](zq, zr) {
    var zs;
    0x1 != this['begin'][yR('0x1f')][yR('0x20')] && (zs = {
      'x': (zs = this[yR('0x23')]())['x'] + zq,
      'y': zs['y'] + zr
    }, this[yR('0x1c')](zs)), 0x1 != this[yR('0x21')][yR('0x1f')]['isDisplayObject'] && (zr = {
      'x': (zs = this[yR('0x24')]())['x'] + zq,
      'y': zs['y'] + zr
    }, this[yR('0x1')](zr));
  }

  [yR('0x3f')]() {
    return [zK(this, this[yR('0x1e')]), zK(this, this[yR('0x21')])];
  }

  [yR('0x40')](zt) {
    var zu = zt[0x0], zv = zt[zt[yR('0x25')] - 0x1], zw = Math['atan2'](zv['y'] - zu['y'], zv['x'] - zu['x']),
      zx = this[yR('0x41')] || 0x0;
    null != this[yR('0x11')] && zx['x'], 0x0 != zx && (zt[0x0] = i8[yR('0x42')](zu, zw, zx));
    zx = this['endOffset'] || 0x0;
    null != this['endArrow'] && zx['x'], 0x0 != zx && (zt[zt[yR('0x25')] - 0x1] = i8['offsetWithAngle'](zv, zw, zx));
  }

  [yR('0x4')]() {
    var zy = this[yR('0x3f')]();
    return this[yR('0x40')](zy), this[yR('0x1b')] = zy, this[yR('0x1b')];
  }

  ['getPoints']() {
    return cc(this[yR('0x1b')]), this[yR('0x1b')];
  }

  ['nearest'](zz, zA) {
    var zB = qc({'x': zz, 'y': zA}, this[yR('0x43')]());
    return null == zB || 0x0 == zB[yR('0x25')] ? {'x': zz, 'y': zA} : zB;
  }

  ['getSegmentPoints']() {
    return this[yR('0x44')]();
  }

  [yR('0x45')]() {
    var zC, zD = this['begin']['target'], zE = this[yR('0x21')][yR('0x1f')], zF = zD instanceof kg,
      zG = zE instanceof kg;
    if (0x0 != zF && 0x0 != zG && (cc(zC = nJ(zD, zE)), this[yR('0x3a')] !== zC)) return this[yR('0x46')](zC), zC;
  }

  [yR('0x47')]() {
    var zH = this[yR('0x1e')]['target'], zI = this['end'][yR('0x1f')];
    return zH[yR('0x3a')] === zI['parent'];
  }

  [yR('0x48')]() {
    let zJ = 0x0;
    return null != this[yR('0x1e')] && this[yR('0x1e')][yR('0x1f')] instanceof kg && zJ++, null != this[yR('0x21')] && this[yR('0x21')][yR('0x1f')] instanceof kg && zJ++, 0x0 == zJ;
  }

  ['isBeginDisplayObject']() {
    return null != this['begin'] && this[yR('0x1e')][yR('0x1f')] instanceof kg;
  }

  [yR('0x49')]() {
    return null != this[yR('0x21')] && this[yR('0x21')][yR('0x1f')] instanceof kg;
  }

  ['unlinkBegin']() {
    cj(this[yR('0x1e')][yR('0x1f')]['isDisplayObject']), this[yR('0x1c')](this[yR('0x23')]());
  }

  ['unlinkEnd']() {
    cj(this[yR('0x21')][yR('0x1f')][yR('0x20')]), this[yR('0x1')](this[yR('0x24')]());
  }

  [yR('0x4a')]() {
    null != this[yR('0x1e')] && this[yR('0x1e')][yR('0x1f')] && this[yR('0x1e')][yR('0x1f')][yR('0x20')] && this[yR('0x1e')][yR('0x1f')][yR('0x4b')](this), null != this[yR('0x21')] && this[yR('0x21')][yR('0x1f')] && this['end'][yR('0x1f')][yR('0x22')] && this['end']['target'][yR('0x4c')](this);
  }
}

function zK(zL, zM) {
  let zN, zO = zM[yR('0x1f')];
  cc(zO, zL);
  var zP = zM[yR('0x4d')];
  if (zO instanceof kg) if (zO[yR('0x4e')] && null == zO[yR('0x1b')] && zO['updatePoints'](), zP == c7[yR('0x4f')]) {
    var zQ = zM['segIndex'], zR = zM['t'];
    zN = zS(zL, zO, zQ, zR), cc(zN);
  } else if (zP == c7[yR('0x50')]) zN = A0(zL, zO, zM[yR('0x51')]), cc(zN); else if (zP == c7[yR('0x52')]) zN = A6(zL, zM), cc(zN); else {
    if (zP != c7['point']) throw console['log'](zM), new Error(yR('0x53'));
    zN = zM, cc(zN);
  } else if (typeof zO == yR('0x54')) zN = zO(); else {
    if (!i8['isLikePoint'](zO)) throw console['log'](zO), new Error(yR('0x55'));
    zN = new i8(zO['x'], zO['y']);
  }
  return cc(zN), zN;
}

function zS(zT, zU, zV, zW, zX) {
  let zY;
  if (zU[yR('0x3a')] === zT['parent']) zY = zU[yR('0x58')](zW, zV, zX), zY = zU[yR('0x59')]()['point'](zY); else {
    let zZ;
    zZ = (zT[yR('0x5a')] == co ? zT : zT['parent'])[yR('0x5b')](), zY = zU[yR('0x58')](zW, zV, zX), zY = zU[yR('0x5b')]()['point'](zY), zY = zZ[yR('0x5c')]()[yR('0x5d')](zY);
  }
  return zY;
}

function A0(A1, A2, A3) {
  let A4;
  if (A2[yR('0x3a')] === A1['parent']) A4 = A2[yR('0x5e')](A3), A2['isNode'] && (A4 = A2['getTransform']()['point'](A4)), cc(A4, A2, A3); else {
    cc(A1['parent'], A1);
    let A5;
    A5 = (A1[yR('0x5a')] == co ? A1 : A1['parent'])['getLayerTransform'](), A4 = A2[yR('0x5e')](A3), A4 = A2['getLayerTransform']()[yR('0x5d')](A4), A4 = A5['invert']()['point'](A4), cc(A4, A2, A3);
  }
  return A4;
}

function A6(A7, A8) {
  if (0x0 == A7[yR('0x5a')]) throw new Error(yR('0x5f'));
  let A9 = A8[yR('0x1f')], Aa;
  Aa = (A7[yR('0x5a')] == co ? A7 : A7[yR('0x3a')])[yR('0x5b')]();
  var Ab = A7[yR('0x1e')][yR('0x1f')] === A9, A8 = Ab ? A7[yR('0x21')] : A7[yR('0x1e')];
  const Ad = A8[yR('0x1f')];
  if (Ad['isLink'] && null == Ad[yR('0x1b')]) throw new Error(yR('0x60'));
  let Ae;
  Ae = A8[yR('0x4d')] == c7[yR('0x52')] ? (Ae = Ad[yR('0x5e')](c6[yR('0xd')]), Ad[yR('0x5b')]()['point'](Ae)) : (Ae = zK(A7, Ab ? A7[yR('0x21')] : A7[yR('0x1e')]), Aa[yR('0x5d')](Ae)), Ae = A9[yR('0x5b')]()[yR('0x5c')]()['point'](Ae);
  A7 = A9[yR('0x52')](Ae['x'], Ae['y']), A7 = A9[yR('0x5b')]()[yR('0x5d')](A7);
  return Aa[yR('0x5c')]()[yR('0x5d')](A7);
}

Object[yR('0x56')](yU['prototype'], {
  'text': {
    'get'() {
      return this[yR('0xa')] ? this[yR('0xa')]['text'] : this['_text'];
    }, 'set'(Af) {
      this[yR('0x1d')] = !0x0, this['_text'] != Af && (this[yR('0x57')] = !0x0), this['setLabel'](Af), this['_text'] = Af;
    }
  }
});
const Ag = {};
Ag[c6[yR('0x1e')]] = function () {
  return this[yR('0x1b')][0x0];
}, Ag[c6[yR('0x21')]] = function () {
  return this[yR('0x1b')][0x1];
}, Ag[c6[yR('0xd')]] = function () {
  return i8['middle'](this[yR('0x1b')][0x0], this['points'][0x1]);
}, bN(yU[yR('0x61')], {
  'className': {'value': yR('0x62'), 'writable': !0x1},
  'points': {},
  'isLink': {'value': !0x0, 'writable': !0x1, 'enumerable': !0x1},
  '_pickRadius': {'value': 0x4, 'enumerable': !0x1},
  'begin': {'value': null},
  'end': {'value': null},
  'draggable': {'value': !0x0},
  'painter': {'enumerable': !0x1},
  'zIndex': {'value': c9[yR('0x62')]},
  '_textHeight': {},
  '_textDirty': {'value': !0x1},
  'DefaultPositions': {'value': Ag},
  'beginOffset': {'value': 0x0},
  'endOffset': {'value': -0x0},
  'serializers': {'value': kg[yR('0x61')][yR('0x63')][yR('0x64')]([yR('0x41'), yR('0x65')])}
}), yU[yR('0x61')][yR('0x66')] = function () {
  return [yR('0x1e'), 'end'];
};
var Ah = ['serializers', 'getAnchorPoints', 'mousedragHandler', 'details', 'toObjectLocalDXY', 'ctrlPoint1', '_ctrlPoint1', 'ctrlPoint2', '_ctrlPoint2', 'drawPoints', 'style', 'lineCap', 'borderWidth', 'borderStyle', 'dashed', 'setLineDash', 'moveTo', 'calcCtrlPoint1', 'calcCtrlPoint2', 'bezierCurveTo', 'getPoint', 'begin', 'points', 'end', 'center', 'prototype', 'BezierLink'];
!function (Ai) {
  !function (Aj) {
    for (; --Aj;) Ai['push'](Ai['shift']());
  }(0x147);
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
    const Au = At[Ak('0x1')];
    if (this['ctrlPoint1'] || this['ctrlPoint2']) {
      var Av = Au['isDragStart'], Ay = Au[Ak('0x2')](this), At = Ay['dx'], Ay = Ay['dy'];
      let Az = this[Ak('0x3')], AA = this['ctrlPoint2'];
      Az && (Av && (this['_ctrlPoint1'] = {
        'x': Az['x'],
        'y': Az['y']
      }), Az['x'] = this['_ctrlPoint1']['x'] + At, Az['y'] = this[Ak('0x4')]['y'] + Ay), this[Ak('0x5')] && (Av && (this[Ak('0x6')] = {
        'x': AA['x'],
        'y': AA['y']
      }), AA['x'] = this[Ak('0x6')]['x'] + At, AA['y'] = this[Ak('0x6')]['y'] + Ay);
    }
  }

  [Ak('0x7')](AB, AC) {
    var AD = AC[0x0], AE = AC[0x1], AF = this[Ak('0x8')];
    AB['beginPath'](), this[Ak('0x8')] && this['style'][Ak('0x9')] && (AB[Ak('0x9')] = this[Ak('0x8')][Ak('0x9')]), AB['lineWidth'] = AF[Ak('0xa')] || 0x1, AB['strokeStyle'] = AF['borderColor'], null == AF['lineDash'] && (AF[Ak('0xb')] != Ak('0xc') && 'dotted' != AF[Ak('0xb')] || AB[Ak('0xd')]([0x1, 0x1])), AB[Ak('0xe')](AD['x'], AD['y']);
    AC = this[Ak('0xf')](AD, AE), AF = this[Ak('0x10')](AD, AE);
    if (null == this[Ak('0x3')] && null == this['ctrlPoint2']) {
      let AG = (AD['x'] + AE['x']) / 0x2, AH = (AD['y'] + AE['y']) / 0x2;
      AB[Ak('0x11')](AC['x'] + AG, AC['y'] + AH, AF['x'] + AG, AF['y'] + AH, AE['x'], AE['y']);
    } else AB['bezierCurveTo'](AC['x'], AC['y'], AF['x'], AF['y'], AE['x'], AE['y']);
  }

  [Ak('0xf')](AI, AJ) {
    if (null != this[Ak('0x3')]) return this[Ak('0x3')];
    AJ = {'x': (AI['x'] + AJ['x']) / 0x2, 'y': (AI['y'] + AJ['y']) / 0x2}, AI = g2(AI, AJ);
    return {'x': AI['x'] - AJ['x'], 'y': AI['y'] - AJ['y']};
  }

  [Ak('0x10')](AK, AL) {
    if (null != this[Ak('0x5')]) return this[Ak('0x5')];
    AK = {'x': (AK['x'] + AL['x']) / 0x2, 'y': (AK['y'] + AL['y']) / 0x2}, AL = g2(AL, AK);
    return {'x': AL['x'] - AK['x'], 'y': AL['y'] - AK['y']};
  }

  ['resetCtrlPoint']() {
    this[Ak('0x3')] = void 0x0, this[Ak('0x5')] = void 0x0;
  }

  [Ak('0x12')](AM, AN) {
    var AO = zK(this, this[Ak('0x13')]), AP = zK(this, this['end']);
    let AQ = (AO['x'] + AP['x']) / 0x2, AR = (AO['y'] + AP['y']) / 0x2;
    var AX = this[Ak('0xf')](AO, AP), AV = this[Ak('0x10')](AO, AP), AX = {'x': AQ + AX['x'], 'y': AR + AX['y']},
      AV = {'x': AQ + AV['x'], 'y': AR + AV['y']}, AO = fw(AO, AX, AM), AX = fw(AX, AV, AM), AP = fw(AV, AP, AM),
      AO = fw(AO, AX, AM), AP = fw(AX, AP, AM);
    return fw(AO, AP, AM);
  }
}

const B1 = {};
B1[c6['begin']] = function () {
  return this[Ak('0x14')][0x0];
}, B1[c6[Ak('0x15')]] = function () {
  return this['points'][0x1];
}, B1[c6[Ak('0x16')]] = function () {
  return this[Ak('0x12')](0.5, 0x0);
}, B1[c6['ctrlPoint1']] = function () {
  return null != this[Ak('0x3')] ? this[Ak('0x3')] : this[Ak('0xf')](this[Ak('0x14')][0x0], this[Ak('0x14')][0x1]);
}, B1[c6[Ak('0x5')]] = function () {
  return null != this[Ak('0x5')] ? this['ctrlPoint2'] : this['calcCtrlPoint2'](this[Ak('0x14')][0x0], this[Ak('0x14')][0x1]);
}, bN(An[Ak('0x17')], {
  'className': {'value': Ak('0x18'), 'writable': !0x1},
  'ctrlPoint1': {},
  'ctrlPoint2': {},
  'DefaultPositions': {'value': B1},
  'serializers': {'value': yU[Ak('0x17')][Ak('0x19')]['concat']([Ak('0x3'), Ak('0x5')])}
}), An[Ak('0x17')][Ak('0x1a')] = function () {
  return [Ak('0x13'), Ak('0x15'), Ak('0x3'), Ak('0x5')];
};
var B2 = ['setLineDash', 'sqrt', 'direction', 'beginPath', 'arc', 'getPoints', 'atan2', 'cos', 'sin', 'prototype', 'serializers', 'concat', 'drawPoints', 'style', 'lineWidth', 'borderWidth', 'strokeStyle', 'borderColor', 'borderStyle', 'dotted'];
!function (B3) {
  !function (B4) {
    for (; --B4;) B3['push'](B3['shift']());
  }(0x1c5);
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
    Be[B5('0x2')] = Bg[B5('0x3')] || 0x1, Be[B5('0x4')] = Bg[B5('0x5')], null == Bg['lineDash'] && ('dashed' != Bg[B5('0x6')] && Bg['borderStyle'] != B5('0x7') || Be[B5('0x8')]([0x1, 0x1]));
    var Bn = Bf[0x0], Bm = Bf[0x1], Bj = (Bn['x'] + Bm['x']) / 0x2, Bg = (Bn['y'] + Bm['y']) / 0x2,
      Bf = Bm['x'] - Bn['x'], Bm = Bm['y'] - Bn['y'], Bn = Math[B5('0x9')](Bf * Bf + Bm * Bm) / 0x2;
    let Bo = Math['atan2'](Bm, Bf);
    -0x1 == this[B5('0xa')] && (Bo += Math['PI']);
    Bf = Bo + Math['PI'];
    Be[B5('0xb')](), Be[B5('0xc')](Bj, Bg, Bn, Bo, Bf);
  }

  ['getPoint'](Bp) {
    var Bv = this[B5('0xd')](), Bx = Bv[0x0], Bw = Bv[0x1], Bt = (Bx['x'] + Bw['x']) / 0x2,
      Bu = (Bx['y'] + Bw['y']) / 0x2, Bv = Bw['x'] - Bx['x'], Bw = Bw['y'] - Bx['y'],
      Bx = Math[B5('0x9')](Bv * Bv + Bw * Bw) / 0x2;
    let By = Math[B5('0xe')](Bw, Bv);
    -0x1 == this[B5('0xa')] && (By += Math['PI']);
    Bv = By + Math['PI'], Bp = By + (Bv - By) * Bp;
    return {'x': Bt + Bx * Math[B5('0xf')](Bp), 'y': Bu + Bx * Math[B5('0x10')](Bp)};
  }
}

bN(B8[B5('0x11')], {
  'className': {'value': 'ArcLink', 'writable': !0x1},
  'direction': {},
  'serializers': {'value': yU['prototype'][B5('0x12')][B5('0x13')]([B5('0xa')])}
});
var Bz = ['mousePointInLayer', 'isMouseInStroke', 'isPointInStroke', 'isMouseInPath', 'isPointInPath', 'rotate', 'roundRect', 'moveTo', 'lineTo', 'quadraticCurveTo', 'drawImageFull', 'drawImage', 'fillRectFull', 'getAABB', 'toStageAABB', 'rgba(0,0,255,0.3)', 'pink', 'green', 'beginPath', 'context', 'getContext', 'init', 'devicePixelRatio', 'setSize', 'width', 'canvas', 'height', 'contextExtends', 'dragDrawDelay', 'requestReapint', 'stage', 'render', 'paintPrepare', 'clear', 'paint', 'paintAABB', 'layer', 'getChildren', 'save', 'glo', 'balA', 'lpha', 'bold\x2016px\x20arial', 'fillStyle', 'gray', 'fillText', 'getHeight', 'restore', '_aabbInLayer', 'getViewRectInLayer', 'painted', 'visible', 'cuttingHide', 'logOutOfCanvas', 'log', 'isout', 'paintBefore', 'cleanPaint', 'isPointOn', 'ctxTransform', 'style', 'applyTo', 'showSelected', 'paintSelected', 'draw', 'isSelected', 'paintAfter', 'paintChildren', 'length', 'displayList', 'push', 'selectedStyle', 'isNode', 'setLineDash', 'strokeStyle', 'rect', 'stroke', 'closePath', 'shadowColor', 'shadowBlur', 'shadowOffsetY', 'translate', 'skewX', 'skewY', 'transform', 'scaleX', 'scaleY', 'scale', 'getOriginRotation', 'rotation', 'getPosition', 'rotateTarget', 'dontNeedPickup', 'mouseX', 'mouseY', 'mouseInfo', 'selectedGroup', 'isEmpty', 'isDraging', 'isMouseInObjectAABB', '_pickRadius'];
!function (BA) {
  !function (BB) {
    for (; --BB;) BA['push'](BA['shift']());
  }(0x143);
}(Bz);
var BC = function (BE, BF) {
  return Bz[BE = +BE];
}, BD = oY['gc'];
let BG = d3['w'];

class BH extends oF {
  constructor() {
    super(), this[BC('0x0')] = this['canvas'][BC('0x1')]('2d'), (this['context']['render'] = this)[BC('0x2')]();
  }

  [BC('0x2')]() {
    window['devicePixelRatio'] && this['context']['scale'](window[BC('0x3')], window[BC('0x3')]), this[BC('0x4')](this['canvas'][BC('0x5')], this[BC('0x6')][BC('0x7')]), this[BC('0x8')]();
  }

  ['renderLayer'](BI) {
    if (0x0 != BI['visible'] && !(BI[BC('0x9')] && BI['isDraging'] || (BI[BC('0xa')] = !0x1, null == BI[BC('0xb')] || null == BI[BC('0xc')]))) {
      if (BI[BC('0xd')] && BI[BC('0xd')](), this[BC('0xe')](), this[BC('0xf')](BI), 0x1 == ov[BC('0x10')] && null != this[BC('0x11')]) {
        var BJ = BI[BC('0x12')]();
        if (null != BJ) for (var BK = BJ['length'] - 0x1; 0x0 <= BK; BK--) {
          var BL = BJ[BK];
          this[BC('0x10')](BL);
        }
      }
      {
        if (null == BG) return;
        let BJ = this[BC('0x0')];
        BJ[BC('0x13')](), BJ[BC('0x14') + BC('0x15') + BC('0x16')] = 0.8, BJ['font'] = BC('0x17');
        BI = BD(BG);
        BJ[BC('0x18')] = BC('0x19'), BJ[BC('0x1a')](BI, 0xe, this[BC('0x1b')]() - 0xe), BJ[BC('0x1c')]();
      }
    }
  }

  ['isOutOfCanvas'](BN) {
    if (BN instanceof vG) return !0x1;
    if (null == this[BC('0x11')]) return !0x1;
    const BO = this[BC('0x11')];
    BN = BN[BC('0x1d')];
    let BP = BO[BC('0x1e')]();
    return !BP['isIntersectRect'](BN);
  }

  ['paintPrepare'](BQ) {
    if ((BQ[BC('0x1f')] = !0x1, BQ['paintPrepare']) && 0x0 == BQ[BC('0xd')](this)) return !0x1;
    if (0x0 == BQ[BC('0x20')]) return !0x1;
    BQ[BC('0x1d')] = BQ['getAABB'](!0x1, co);
    var BR = this['layer'];
    return 0x1 != (null != BR && BR[BC('0x21')]) || !this['isOutOfCanvas'](BQ) || (ov[BC('0x22')] && console[BC('0x23')](BQ['id'], BC('0x24')), !0x1);
  }

  [BC('0x25')](BS) {
    let BT = this[BC('0x0')];
    null != BS[BC('0x26')] && BS[BC('0x26')](BT), BT[BC('0x13')](), null != this['layer'] && (BS[BC('0x27')] = !0x1), this[BC('0x28')](BS);
  }

  [BC('0xf')](BU) {
    let BV = this[BC('0x0')];
    BU['dirty'] = !0x1, BU[BC('0x25')] && BU[BC('0x25')](BV), this[BC('0x25')](BU);
    const BW = BU[BC('0x29')];
    return null != BW && BW[BC('0x2a')](BV), BU['isSelected'] && 0x1 == BU[BC('0x2b')] && (BV[BC('0x13')](), this[BC('0x2c')](BU)), BU[BC('0x2d')](BV), BU[BC('0x2e')] && 0x1 == BU[BC('0x2b')] && BV[BC('0x1c')](), this[BC('0x2f')](BU), BU['paintAfter'] && BU['paintAfter'](BV), BU;
  }

  [BC('0x2f')](BX) {
    let BY = this[BC('0x0')];
    this[BC('0x30')](BX), BY['restore'](), BX['painted'] = !0x0;
  }

  [BC('0x30')](BZ) {
    var C0 = BZ['children'];
    if (0x0 != C0[BC('0x31')]) {
      const C1 = this[BC('0x11')];
      for (var C2 = 0x0; C2 < C0[BC('0x31')]; C2++) {
        var C3 = C0[C2];
        0x1 == this[BC('0xd')](C3) && (this['paint'](C3), C1 && C1[BC('0x32')][BC('0x33')](C3));
      }
    }
  }

  [BC('0x2c')](C4) {
    let C5 = this[BC('0x0')];
    if (null != C4[BC('0x34')] && C4[BC('0x34')][BC('0x2a')](C5), null == C4[BC('0x2c')]) if (C4[BC('0x35')]) {
      C5['save'](), C5['beginPath']();
      let C6 = 0x2;
      null != C4[BC('0x34')] ? C6 = C4[BC('0x34')]['lineWidth'] | C6 : (C5[BC('0x36')]([0x0, 0x0]), C5[BC('0x37')] = C4['shadowColor']), C5[BC('0x38')](0.5 * -C6 - 1.5, 0.5 * -C6 - 1.5, C4[BC('0x5')] + C6 + 0x3, C4['height'] + C6 + 0x3), C5[BC('0x39')](), C5[BC('0x3a')](), C5[BC('0x1c')]();
    } else C5[BC('0x3b')] = C4['shadowColor'], C5[BC('0x3c')] = 0x5, C5['shadowOffsetX'] = 0x3, C5[BC('0x3d')] = 0x3; else C4[BC('0x2c')](C5);
  }

  [BC('0x28')](C7) {
    let C8 = this['context'];
    var C9 = C7['getOrigin']();
    C8[BC('0x3e')](C9[0x0] + C7['x'], C9[0x1] + C7['y']), 0x0 == C7[BC('0x3f')] && 0x0 == C7[BC('0x40')] || C8[BC('0x41')](0x1, C7[BC('0x3f')], C7[BC('0x40')], 0x1, 0x0, 0x0), 0x1 === C7[BC('0x42')] && 0x1 === C7[BC('0x43')] || C8[BC('0x44')](C7['scaleX'], C7[BC('0x43')]);
    C9 = C7[BC('0x45')]() + C7[BC('0x46')];
    0x0 != C9 && (C7 = C7[BC('0x47')](c6['center']), C8[BC('0x48')](C9, C7['x'], C7['y']));
  }

  ['clearAll']() {
    this[BC('0xe')]();
  }

  [BC('0x49')](Ca) {
    let Cb = this[BC('0xb')];
    return null == Cb || (null == this[BC('0x11')] || (null == Cb[BC('0x4a')] || null == Cb[BC('0x4b')] || (0x1 == Cb[BC('0x4c')]['isIdle'] || (!(!Cb[BC('0x4d')][BC('0x4e')]() || !Cb[BC('0x4c')][BC('0x4f')]) || !this[BC('0x50')](Ca)))));
  }

  [BC('0x50')](Cc) {
    if (Cc instanceof An || Cc instanceof B8) return !0x0;
    let Cd = Cc[BC('0x1d')]['clone']();
    Cc = Cc[BC('0x51')] || 0x6;
    Cd['x'] -= Cc, Cd['y'] -= Cc, Cd['width'] += 0x2 * Cc, Cd[BC('0x7')] += 0x2 * Cc;
    Cc = this['layer'][BC('0x52')];
    return Cd['contains'](Cc['x'], Cc['y']);
  }

  [BC('0x53')](Ce, Cf) {
    let Cg = this[BC('0x0')];
    var Ch = this['stage'];
    if (null == Ce || 0x0 == Ce) return null != Cf ? Cg[BC('0x54')](Cf, Ch[BC('0x4a')], Ch[BC('0x4b')]) : Cg[BC('0x54')](Ch['mouseX'], Ch[BC('0x4b')]);
    let Ci = !0x1;
    for (var Cj = 0x0; Cj < Ce; Cj++) {
      if (Ci = null != Cf ? Cg[BC('0x54')](Cf, Ch[BC('0x4a')] + Cj, Ch[BC('0x4b')] + Cj) : Cg[BC('0x54')](Ch[BC('0x4a')] + Cj, Ch[BC('0x4b')] + Cj), Ci) return !0x0;
      if (Ci = null != Cf ? Cg[BC('0x54')](Cf, Ch[BC('0x4a')] - Cj, Ch[BC('0x4b')] - Cj) : Cg[BC('0x54')](Ch[BC('0x4a')] - Cj, Ch['mouseY'] - Cj), Ci) return !0x0;
      if (Ci = null != Cf ? Cg[BC('0x54')](Cf, Ch[BC('0x4a')] - Cj, Ch['mouseY'] + Cj) : Cg[BC('0x54')](Ch[BC('0x4a')] - Cj, Ch['mouseY'] + Cj), Ci) return !0x0;
      if (Ci = null != Cf ? Cg['isPointInStroke'](Cf, Ch[BC('0x4a')] + Cj, Ch['mouseY'] - Cj) : Cg[BC('0x54')](Ch[BC('0x4a')] + Cj, Ch[BC('0x4b')] - Cj), Ci) return !0x0;
    }
    return !0x1;
  }

  [BC('0x55')](Ck) {
    let Cl = this[BC('0x0')];
    var Cm = this[BC('0xb')];
    return Ck ? Cl[BC('0x56')](Ck, Cm[BC('0x4a')], Cm[BC('0x4b')]) : Cl[BC('0x56')](Cm[BC('0x4a')], Cm[BC('0x4b')]);
  }

  [BC('0x8')]() {
    let Cn = this;
    this['context'][BC('0x53')] = function (Co, Cp) {
      return Cn[BC('0x53')](Co, Cp);
    }, this['context'][BC('0x55')] = function (Cq) {
      return Cn[BC('0x55')](Cq);
    }, this[BC('0x0')][BC('0x48')] = function (Cr, Cs, Cn) {
      this[BC('0x3e')](Cs, Cn), this[BC('0x57')](Cr), this[BC('0x3e')](-Cs, -Cn);
    }, this['context'][BC('0x58')] = function (Cu, Cv, Cn, Cx, Cy) {
      this[BC('0x11')], void 0x0 === Cy && (Cy = 0x5), this['beginPath'](), this[BC('0x59')](Cu + Cy, Cv), this[BC('0x5a')](Cu + Cn - Cy, Cv), this[BC('0x5b')](Cu + Cn, Cv, Cu + Cn, Cv + Cy), this[BC('0x5a')](Cu + Cn, Cv + Cx - Cy), this[BC('0x5b')](Cu + Cn, Cv + Cx, Cu + Cn - Cy, Cv + Cx), this[BC('0x5a')](Cu + Cy, Cv + Cx), this[BC('0x5b')](Cu, Cv + Cx, Cu, Cv + Cx - Cy), this['lineTo'](Cu, Cv + Cy), this[BC('0x5b')](Cu, Cv, Cu + Cy, Cv), this[BC('0x3a')]();
    }, this[BC('0x0')][BC('0x5c')] = function (Cz, CA, Cn) {
      this[BC('0x5d')](Cz, CA || 0x0, Cn || 0x0, this[BC('0x6')]['width'], this['canvas'][BC('0x7')]);
    }, this[BC('0x0')][BC('0x5e')] = function () {
      this['fillRect'](0x0, 0x0, this['canvas'][BC('0x5')], this[BC('0x6')][BC('0x7')]);
    };
  }

  [BC('0x10')](CC) {
    let CD = this['layer'], CE = this['context'];
    var CG = CC[BC('0x5f')](!0x1, co), CG = CD[BC('0x60')](CG);
    CE[BC('0x13')](), CC instanceof vG ? CE['strokeStyle'] = BC('0x61') : CC instanceof yU ? CE['strokeStyle'] = BC('0x62') : CE[BC('0x37')] = BC('0x63'), CE[BC('0x64')](), CE[BC('0x38')](CG['x'], CG['y'], CG['width'], CG[BC('0x7')]), CE[BC('0x39')](), CE['closePath'](), CE[BC('0x1c')]();
  }
}

var CH = ['white', 'fillText', 'restore', 'paintAfter', 'showFPS', 'displayList', 'length', 'ceil', 'mouseY', '(\x20x:\x20', '\x20y:\x20', ')\x20Count:', 'debugInfo', 'back', 'stage', 'style', 'red', '13px\x20arial', 'areaBox', 'css', 'strokeStyle', 'rgba(0,0,0,0.5)', 'fillStyle', 'addChild', 'hide', 'draw', 'save', 'glo', 'balA', 'lpha', 'font', 'bold\x2016px\x20arial'];
!function (CI) {
  !function (CJ) {
    for (; --CJ;) CI['push'](CI['shift']());
  }(0x8e);
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
    }), this[CK('0x5')] = new so(), gj[CK('0x0')](), this[CK('0x5')][CK('0x6')](CK('0x7'), CK('0x8')), this[CK('0x5')][CK('0x6')](CK('0x9'), 'rgba(0,0,236,0.1)'), this[CK('0xa')](this['areaBox']);
  }

  ['mouseoutHandler'](CR) {
    this[CK('0x5')][CK('0xb')]();
  }

  [CK('0xc')](CS) {
    var CT;
    null != CO && (CS[CK('0xd')](), CS[CK('0xe') + CK('0xf') + CK('0x10')] = 0.6, CS[CK('0x11')] = CK('0x12'), CT = CL(CO), CS[CK('0x9')] = CK('0x13'), CS[CK('0x14')](CT, 0x10, this['render']['getHeight']() - 0x10), CS[CK('0x15')]());
  }

  [CK('0x16')](CU) {
    0x1 == ov[CK('0x17')] && this[CK('0x17')](CU);
  }

  [CK('0x17')](CV) {
    var CW = this[CK('0x1')]['getChildren']();
    let CX = 0x0;
    for (var CY = 0x0; CY < CW['length']; CY++) {
      var CZ = CW[CY];
      CX += CZ[CK('0x18')][CK('0x19')];
    }
    if (this['showFps']) {
      CV[CK('0xd')]();
      var D0 = Math[CK('0x1a')](this[CK('0x1')]['mouseX']), D1 = Math[CK('0x1a')](this[CK('0x1')][CK('0x1b')]);
      let CW = CK('0x1c') + D0 + CK('0x1d') + D1 + CK('0x1e') + CX;
      ov[CK('0x1f')] && (CW += '\x20' + ov[CK('0x1f')]), CV[CK('0x14')](CW, 0xa, 0xf), CV[CK('0x15')]();
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
var D3 = ['continue', 'play', 'forEach', 'push', 'slice', 'clearInterval', 'timer', 'stop', 'frames', 'begin', 'end', 'time', 'action', 'setBegin', 'setEnd', 'setTime', 'onUpdate', 'pause'];
!function (D4) {
  !function (D5) {
    for (; --D5;) D4['push'](D4['shift']());
  }(0xe1);
}(D3);
var D6 = function (D7, D8) {
  return D3[D7 = +D7];
};

class D9 {
  constructor(Da, Db, Dc, Dd) {
    this[D6('0x0')] = 0x3c, this[D6('0x1')] = Da, this[D6('0x2')] = Db, this[D6('0x3')] = Dc, this[D6('0x4')] = Dd;
  }

  ['set'](De, Df, Dg, Dh) {
    this[D6('0x1')] = De, this[D6('0x2')] = Df, this[D6('0x3')] = Dg, this[D6('0x4')] = Dh;
  }

  [D6('0x5')](Di) {
    return this[D6('0x1')] = Di, this;
  }

  [D6('0x6')](Dj) {
    return this['end'] = Dj, this;
  }

  [D6('0x7')](Dk) {
    return this[D6('0x3')] = Dk, this;
  }

  [D6('0x8')](Dl) {
    return this['action'] = Dl, this;
  }

  ['stop']() {
    return this;
  }

  [D6('0x9')]() {
    return this;
  }

  [D6('0xa')]() {
    return this;
  }

  [D6('0xb')]() {
    const Dm = this;
    var Dn = this[D6('0x1')], Do = this['end'], Dp = this[D6('0x3')];
    const Dq = this[D6('0x4')], Dr = 'number' != typeof Dn;
    let Ds = Dm[D6('0x0')] * (Dp / 0x3e8), Dt = Dn, Du = Do;
    Dr || (Dt = [Dn], Du = [Do]);
    const Dv = [];
    let Dw = [];
    Dt[D6('0xc')]((Dn, Do) => {
      Dn = Du[Do] - Dn;
      Dv[D6('0xd')](Dn), Dw[D6('0xd')](Dn / Ds);
    });
    let Dz = Dt[D6('0xe')](), DA = 0x0;
    null != Dm['timer'] && (window[D6('0xf')](Dm[D6('0x10')]), Dm[D6('0x10')] = null);
    let DB = 0x3e8 / Dm['frames'];
    return new Promise(function (Dn, Do) {
      let Dp = !0x1, Dt = !0x1;
      Dm[D6('0x11')] = function () {
        return Dp = !0x0, Do(), this;
      }, Dm[D6('0x9')] = function () {
        return Dt = !0x0, this;
      }, Dm[D6('0xa')] = function () {
        return Dt = !0x1, this;
      }, Dm[D6('0x10')] = setInterval(function () {
        if (Dp) window[D6('0xf')](Dm[D6('0x10')]); else if (!Dt) {
          if (DA == Ds) return window[D6('0xf')](Dm['timer']), Dr ? Dq(Du) : Dq(Du[0x0]), Dn();
          Dr ? Dq(Dz) : Dq(Dz[0x0]), Dz[D6('0xc')]((Dn, Do) => {
            Dz[Do] = Dn + Dw[Do];
          }), DA++;
        }
      }, DB);
    });
  }
}

var DI = ['querySelector', '\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22zoom-in\x22>\x0a<path\x20d=\x22M4,20\x20L9.58788778,14.4121122\x22/>\x0a<path\x20d=\x22M14,16\x20C10.6862915,16\x208,13.3137085\x208,10\x20C8,6.6862915\x2010.6862915,4\x2014,4\x20C17.3137085,4\x2020,6.6862915\x2020,10\x20C20,13.3137085\x2017.3137085,16\x2014,16\x20Z\x22/>\x0a<path\x20d=\x22M16.6666667\x2010L11.3333333\x2010M14\x207.33333333L14\x2012.6666667\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22zoom-out\x22>\x0a<path\x20d=\x22M14,16\x20C10.6862915,16\x208,13.3137085\x208,10\x20C8,6.6862915\x2010.6862915,4\x2014,4\x20C17.3137085,4\x2020,6.6862915\x2020,10\x20C20,13.3137085\x2017.3137085,16\x2014,16\x20Z\x22/>\x0a<path\x20d=\x22M16.6666667\x2010L11.3333333\x2010M4\x2020L9.58788778\x2014.4121122\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22back-left\x22>\x0a<path\x20d=\x22M5,17\x20L5,15\x20C5,10.0294373\x208.80557963,6\x2013.5,6\x20C18.1944204,6\x2022,10.0294373\x2022,15\x22/>\x0a<polyline\x20points=\x228\x2015\x205\x2018\x202\x2015\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22align-center\x22>\x0a<path\x20d=\x22M8\x2010L16\x2010M6\x206L18\x206M6\x2014L18\x2014M8\x2018L16\x2018\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22edit\x22>\x0a<path\x20d=\x22M18.4142136\x204.41421356L19.5857864\x205.58578644C20.366835\x206.36683502\x2020.366835\x207.63316498\x2019.5857864\x208.41421356L8\x2020\x204\x2020\x204\x2016\x2015.5857864\x204.41421356C16.366835\x203.63316498\x2017.633165\x203.63316498\x2018.4142136\x204.41421356zM14\x206L18\x2010\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22lock-alt\x22>\x0a<rect\x20width=\x2214\x22\x20height=\x2210\x22\x20x=\x225\x22\x20y=\x2211\x22/>\x0a<path\x20d=\x22M12,3\x20L12,3\x20C14.7614237,3\x2017,5.23857625\x2017,8\x20L17,11\x20L7,11\x20L7,8\x20C7,5.23857625\x209.23857625,3\x2012,3\x20Z\x22/>\x0a<circle\x20cx=\x2212\x22\x20cy=\x2216\x22\x20r=\x221\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22lock-open\x22>\x0a<path\x20d=\x22M7,7.625\x20L7,7\x20C7,4.23857625\x209.23857625,2\x2012,2\x20L12,2\x20C14.7614237,2\x2017,4.23857625\x2017,7\x20L17,11\x22/>\x0a<rect\x20width=\x2214\x22\x20height=\x2210\x22\x20x=\x225\x22\x20y=\x2211\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22pan\x22>\x0a<path\x20d=\x22M20,14\x20L20,17\x20C20,19.209139\x2018.209139,21\x2016,21\x20L10.0216594,21\x20C8.75045497,21\x207.55493392,20.3957659\x206.80103128,19.3722467\x20L3.34541668,14.6808081\x20C2.81508416,13.9608139\x202.94777982,12.950548\x203.64605479,12.391928\x20C4.35756041,11.8227235\x205.38335813,11.8798792\x206.02722571,12.5246028\x20L8,14.5\x20L8,13\x20L8.00393081,13\x20L8,11\x20L8.0174523,6.5\x20C8.0174523,5.67157288\x208.68902517,5\x209.5174523,5\x20C10.3458794,5\x2011.0174523,5.67157288\x2011.0174523,6.5\x20L11.0174523,11\x20L11.0174523,4.5\x20C11.0174523,3.67157288\x2011.6890252,3\x2012.5174523,3\x20C13.3458794,3\x2014.0174523,3.67157288\x2014.0174523,4.5\x20L14.0174523,11\x20L14.0174523,5.5\x20C14.0174523,4.67157288\x2014.6890252,4\x2015.5174523,4\x20C16.3458794,4\x2017.0174523,4.67157288\x2017.0174523,5.5\x20L17.0174523,11\x20L17.0174523,7.5\x20C17.0174523,6.67157288\x2017.6890252,6\x2018.5174523,6\x20C19.3458794,6\x2020.0174523,6.67157288\x2020.0174523,7.5\x20L20.0058962,14\x20L20,14\x20Z\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22apps-alt\x22>\x0a<rect\x20x=\x225\x22\x20y=\x225\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2211\x22\x20y=\x225\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2217\x22\x20y=\x225\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x225\x22\x20y=\x2211\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2211\x22\x20y=\x2211\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2217\x22\x20y=\x2211\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x225\x22\x20y=\x2217\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2211\x22\x20y=\x2217\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a<rect\x20x=\x2217\x22\x20y=\x2217\x22\x20width=\x222\x22\x20height=\x222\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22maximise\x22>\x0a<polyline\x20points=\x2221\x2016\x2021\x2021\x2016\x2021\x22/>\x0a<polyline\x20points=\x228\x2021\x203\x2021\x203\x2016\x22/>\x0a<polyline\x20points=\x2216\x203\x2021\x203\x2021\x208\x22/>\x0a<polyline\x20points=\x223\x208\x203\x203\x208\x203\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22minimise\x22>\x0a<polyline\x20points=\x228\x203\x208\x208\x203\x208\x22/>\x0a<polyline\x20points=\x2221\x208\x2016\x208\x2016\x203\x22/>\x0a<polyline\x20points=\x223\x2016\x208\x2016\x208\x2021\x22/>\x0a<polyline\x20points=\x2216\x2021\x2016\x2016\x2021\x2016\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22download\x22>\x0a<path\x20d=\x22M12,3\x20L12,16\x22/>\x0a<polyline\x20points=\x227\x2012\x2012\x2017\x2017\x2012\x22/>\x0a<path\x20d=\x22M20,21\x20L4,21\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22rectangle\x22>\x0a<rect\x20width=\x2218\x22\x20height=\x2218\x22\x20x=\x223\x22\x20y=\x223\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22cursor\x22>\x0a<polygon\x20points=\x227\x2020\x207\x204\x2019\x2016\x2012\x2016\x207\x2021\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22search\x22>\x0a<path\x20d=\x22M14.4121122,14.4121122\x20L20,20\x22/>\x0a<circle\x20cx=\x2210\x22\x20cy=\x2210\x22\x20r=\x226\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22eye\x22>\x0a<path\x20d=\x22M22\x2012C22\x2012\x2019\x2018\x2012\x2018C5\x2018\x202\x2012\x202\x2012C2\x2012\x205\x206\x2012\x206C19\x206\x2022\x2012\x2022\x2012Z\x22/>\x0a<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x223\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22save\x22>\x0a<path\x20d=\x22M17.2928932,3.29289322\x20L21,7\x20L21,20\x20C21,20.5522847\x2020.5522847,21\x2020,21\x20L4,21\x20C3.44771525,21\x203,20.5522847\x203,20\x20L3,4\x20C3,3.44771525\x203.44771525,3\x204,3\x20L16.5857864,3\x20C16.8510029,3\x2017.1053568,3.10535684\x2017.2928932,3.29289322\x20Z\x22/>\x0a<rect\x20width=\x2210\x22\x20height=\x228\x22\x20x=\x227\x22\x20y=\x2213\x22/>\x0a<rect\x20width=\x228\x22\x20height=\x225\x22\x20x=\x228\x22\x20y=\x223\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22image\x22>\x0a<rect\x20width=\x2218\x22\x20height=\x2218\x22\x20x=\x223\x22\x20y=\x223\x22/>\x0a<path\x20stroke-linecap=\x22round\x22\x20d=\x22M3\x2014l4-4\x2011\x2011\x22/>\x0a<circle\x20cx=\x2213.5\x22\x20cy=\x227.5\x22\x20r=\x222.5\x22/>\x0a<path\x20stroke-linecap=\x22round\x22\x20d=\x22M13.5\x2016.5L21\x209\x22/>\x0a</svg>\x0a<svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20id=\x22upload\x22>\x0a<path\x20d=\x22M12,4\x20L12,17\x22/>\x0a<polyline\x20points=\x227\x208\x2012\x203\x2017\x208\x22/>\x0a<path\x20d=\x22M20,21\x20L4,21\x22/>\x0a</svg>\x0a', 'div', 'innerHTML', 'get'];
!function (DJ) {
  !function (DK) {
    for (; --DK;) DJ['push'](DJ['shift']());
  }(0x9d);
}(DI);
var DL = function (DM, DN) {
  return DI[DM = +DM];
};
let DO = DL('0x0'), DP = document['createElement'](DL('0x1'));
DP[DL('0x2')] = DO;
let DQ = {};
DQ[DL('0x3')] = function (DR) {
  return DP[DL('0x4')]('#' + DR);
};
var DS = ['</button>\x0a<button\x20title=\x22编辑模式\x22\x20edit=\x22true\x22\x20class=\x22item\x22\x20group=\x27mode\x27\x20iconId=\x27edit\x27\x20', 'edit', '</button>\x0a<button\x20title=\x22框选模式\x22\x20class=\x22item\x22\x20group=\x27mode\x27\x20iconId=\x27rectangle\x27>', 'rectangle', '</button>\x0a<button\x20title=\x22锁定模式\x22\x20class=\x22item\x22\x20group=\x27mode\x27\x20iconId=\x27lock-alt\x27>', 'lock-alt', 'zoom-in', '</button>\x0a<button\x20title=\x22缩小\x22\x20\x20class=\x22item\x22\x20iconId=\x27zoom-out\x27>', 'align-center', '</button>\x0a<button\x20title=\x22缩放至画布\x22\x20class=\x22item\x22\x20iconId=\x27minimise\x27>', '</button>\x0a<button\x20title=\x22取消缩放\x22\x20class=\x22item\x22\x20iconId=\x27back-left\x27>', '</button>\x0a</div>\x0a\x0a<div\x20class=\x22group\x22>\x0a<button\x20title=\x22缩略图\x22\x20class=\x22item\x22\x20iconId=\x27eye\x27>', 'eye', '</button>\x0a<button\x20title=\x22浏览器全屏\x22\x20class=\x22item\x22\x20iconId=\x27maximise\x27>', 'maximise', '</button>\x0a<input\x20title=\x22查找\x22\x20type=\x22text\x22\x20placeholder=\x22查找\x22\x20value=\x22\x22></input>\x0a<button\x20class=\x22item\x22\x20iconId=\x27search\x27>', 'get', 'search', '</button>\x0a</div>\x0a\x0a<div\x20class=\x22group\x22>\x0a<button\x20title=\x22导出PNG\x22\x20class=\x22item\x22\x20iconId=\x27image\x27>', 'image', '</button>\x0a<button\x20title=\x22打开本地文件\x22\x20class=\x22item\x22\x20iconId=\x27upload\x27>', '</button>\x0a<div\x20style=\x22display:none;\x22><input\x20type=\x22file\x22/></div>\x0a</div>\x0a', 'stage', 'initToolbar', 'initActiveStatus', 'domObj', 'querySelector', 'style', 'display', 'none', 'block', 'getDom', 'show', 'remove', 'getHeigth', 'button[iconid=\x27edit\x27]', 'activeBtn', 'innerHTML', 'querySelectorAll', 'button', 'buttons', 'input[type=\x22file\x22]', 'parentNode', '<input\x20type=\x22file\x22/>', 'target', 'readAsText', 'onload', 'getCurrentLayer', 'openJson', 'translateToCenter', 'title', 'log', 'addEventListener', 'change', 'update', 'play', 'then', 'scaleTo', 'setXY', 'input[type=\x22text\x22]', 'length', 'displayList', 'text', 'indexOf', 'centerBy', 'editor', 'setMode', 'normal', 'drag', 'view', 'overview', 'visible', 'showOverview', 'hideOverview', 'cancelZoom', 'zoomFullStage', 'fullWindow', 'saveImageInfo', '输入要保存的文件名：', 'download', '.json', 'click', 'input', 'Enter', 'onclick', 'getAttribute', 'iconId', 'group', 'removeAllActive', 'classList', 'active', 'outerHTML', 'cursor'];
!function (DT) {
  !function (DU) {
    for (; --DU;) DT['push'](DT['shift']());
  }(0x116);
}(DS);
var DV = function (DW, DX) {
  return DS[DW = +DW];
};

function DY(DZ) {
  return DQ['get'](DZ)[DV('0x0')];
}

let E0 = '\x20style=\x22display:none\x22\x20';
E0 = '';
var E1 = '\x0a<div\x20class=\x22group\x22>\x0a<button\x20title=\x22默认\x22\x20class=\x22item\x20active\x22\x20group=\x27mode\x27\x20iconId=\x27cursor\x27>' + DY(DV('0x1')) + DV('0x2') + E0 + '>' + DY(DV('0x3')) + DV('0x4') + DY(DV('0x5')) + '</button>\x0a<button\x20title=\x22拖拽模式\x22\x20\x20class=\x22item\x22\x20group=\x27mode\x27\x20iconId=\x27pan\x27>' + DY('pan') + DV('0x6') + DY(DV('0x7')) + '</button>\x0a</div>\x0a\x0a<div\x20class=\x22group\x22>\x0a<button\x20title=\x22放大\x22\x20\x20class=\x22item\x22\x20iconId=\x27zoom-in\x27>' + DY(DV('0x8')) + DV('0x9') + DY('zoom-out') + '</button>\x0a<button\x20title=\x22居中\x22\x20class=\x22item\x22\x20iconId=\x27align-center\x27>' + DY(DV('0xa')) + DV('0xb') + DY('minimise') + DV('0xc') + DY('back-left') + DV('0xd') + DY(DV('0xe')) + DV('0xf') + DY(DV('0x10')) + DV('0x11') + DQ[DV('0x12')](DV('0x13'))[DV('0x0')] + DV('0x14') + DY(DV('0x15')) + DV('0x16') + DY('upload') + '</button>\x0a<button\x20title=\x22保存到本地\x22\x20class=\x22item\x22\x20iconId=\x27save\x27>' + DY('save') + DV('0x17');

class E2 {
  constructor(E3) {
    this[DV('0x18')] = E3, this[DV('0x19')](E3, E1);
    let E4 = this;
    setTimeout(function () {
      E4[DV('0x1a')]();
    }, 0xc8);
  }

  ['toggleButton'](E5) {
    let E6 = this[DV('0x1b')][DV('0x1c')]('input[title=\x22' + E5 + '\x22]');
    E6[DV('0x1d')][DV('0x1e')] == DV('0x1f') ? E6['style'][DV('0x1e')] = DV('0x20') : E6[DV('0x1d')]['display'] = DV('0x1f');
  }

  [DV('0x21')]() {
    return this[DV('0x1b')];
  }

  [DV('0x22')]() {
    this[DV('0x1b')][DV('0x1d')]['display'] = 'block';
  }

  ['hide']() {
    this[DV('0x1b')][DV('0x1d')]['display'] = DV('0x1f');
  }

  [DV('0x23')]() {
    this[DV('0x1b')][DV('0x23')]();
  }

  [DV('0x24')]() {
    return this[DV('0x1b')][DV('0x1d')]['display'] == DV('0x1f') ? 0x0 : this[DV('0x1b')]['clientHeight'] + 0x1;
  }

  [DV('0x1a')]() {
    var E7;
    this['stage']['mode'] == DV('0x3') && (E7 = document[DV('0x1c')](DV('0x25')), this[DV('0x26')](E7));
  }

  [DV('0x19')](E8, E9) {
    let Ea = this, Eb = document['createElement']('div');
    this[DV('0x1b')] = Eb, Eb['classList']['add']('jtopo_toolbar'), Eb[DV('0x27')] = E9;
    var Ec = Eb[DV('0x28')](DV('0x29'));
    this[DV('0x2a')] = Ec;
    let Ed = Eb['querySelector'](DV('0x2b')), Ee = Ed[DV('0x2c')];

    function Ef(E9) {
      Ee[DV('0x27')] = DV('0x2d'), Em();
      let Ed = E9[DV('0x2e')]['files'][0x0];
      const Ec = new FileReader();
      Ec[DV('0x2f')](Ed), Ec[DV('0x30')] = function () {
        const E9 = Ea[DV('0x18')][DV('0x31')]();
        var Ec = this['result'];
        try {
          E9[DV('0x32')](Ec), E8[DV('0x33')](), document[DV('0x34')] = Ed['name'];
        } catch (El) {
          console[DV('0x35')](El), alert('加载出现错误');
        }
      };
    }

    function Em() {
      Ed = Eb[DV('0x1c')](DV('0x2b')), Ed[DV('0x36')](DV('0x37'), Ef);
    }

    function En() {
      let Ec = E8[DV('0x31')]();
      var Ed = Eb[DV('0x1c')](DV('0x3d'))['value'];
      if (0x0 < Ed[DV('0x3e')]) {
        var Ea = Ec[DV('0x3f')];
        for (let E9 = 0x0; E9 < Ea['length']; E9++) {
          const Ee = Ea[E9];
          if (null != Ee[DV('0x40')] && -0x1 != Ee[DV('0x40')][DV('0x41')](Ed)) return Ec[DV('0x42')](Ee, 0xa), function (Ec) {
            let E9 = {'x': Ec['x'], 'y': Ec['y']};
            new D9(0x0, 0x1, 0x1f4, function (E9) {
              Ec['scaleTo'](0x1 + E9, 0x1 + E9), E8[DV('0x38')]();
            })[DV('0x39')]()[DV('0x3a')](function () {
              Ec[DV('0x3b')](0x1, 0x1), Ec[DV('0x3c')](E9['x'], E9['y']);
            });
          }(Ee), void (null != E8[DV('0x43')] ? E8['editor'][DV('0x38')]() : E8['update']());
        }
      }
    }

    Em(), this['fileInput'] = Ed;
    let Ew = {
      'cursor': function () {
        E8[DV('0x44')](DV('0x45'));
      }, 'rectangle': function () {
        E8[DV('0x44')]('select');
      }, 'pan': function () {
        E8[DV('0x44')](DV('0x46'));
      }, 'edit': function () {
        E8[DV('0x44')](DV('0x3'));
      }, 'lock-alt': function () {
        E8[DV('0x44')](DV('0x47'));
      }, 'eye': function () {
        null == E8[DV('0x48')] || 0x0 == E8[DV('0x48')][DV('0x49')] ? E8[DV('0x4a')]() : E8[DV('0x4b')]();
      }, 'zoom-in': function () {
        E8['zoomIn']();
      }, 'zoom-out': function () {
        E8['zoomOut']();
      }, 'back-left': function () {
        E8[DV('0x4c')]();
      }, 'minimise': function () {
        E8[DV('0x4d')]();
      }, 'align-center': function () {
        E8['translateToCenter']();
      }, 'maximise': function () {
        E8[DV('0x4e')]();
      }, 'image': function () {
        E8[DV('0x4f')]();
      }, 'save': function () {
        var E9 = prompt(DV('0x50'));
        null != E9 && E8[DV('0x51')](E9 + DV('0x52'));
      }, 'upload': function () {
        Ed[DV('0x53')]();
      }, 'search': En
    };
    Eb[DV('0x1c')](DV('0x54'))['onkeydown'] = function (E9) {
      E9['key'] == DV('0x55') && En();
    }, Eb[DV('0x1c')](DV('0x54'))['ondblclick'] = function () {
      console[DV('0x35')]('reloadJsonTest'), E8[DV('0x31')]()['reloadJsonTest']();
    };
    for (var Ez = 0x0; Ez < Ec[DV('0x3e')]; Ez++) !function (Ec) {
      Ec[DV('0x56')] = function () {
        var E9 = Ec[DV('0x57')](DV('0x58'));
        Ew[E9](), Ea['activeBtn'](Ec);
      };
    }(Ec[Ez]);
  }

  ['activeBtn'](EC) {
    var ED = EC[DV('0x57')](DV('0x59'));
    null != ED && (this['removeAllActive'](ED), EC['classList']['add']('active'));
  }

  [DV('0x5a')](EE) {
    for (var EF = this[DV('0x2a')], EG = 0x0; EG < EF['length']; EG++) {
      let EH = EF[EG];
      EE == EH[DV('0x57')](DV('0x59')) && EH[DV('0x5b')][DV('0x23')](DV('0x5c'));
    }
  }
}

var EI = ['log', 'keys', 'forEach', 'preventDefault', 'key', 'ctrlKey', 'Control', 'push', 'altKey', 'alt', 'Shift', 'shift', 'metaKey', 'Meta', 'meta', 'indexOf', 'preKeydownEvent', 'mouseInfo', 'dispatchEvent', 'keyupHandler', 'textInputMode', 'keyup', 'init', 'addEventListener', 'regMap', 'keyMap', 'stage', 'debug', 'bindKey', 'needMouseOn', 'toLowerCase', 'split', 'sort', 'unBind', 'join', 'isKeydown', 'sendKey', 'keydown', 'mock', 'fireKey', 'isMouseOnInputDomElement', 'activeElement', 'tagName', 'INPUT', 'TEXTAREA', 'editor'];
!function (EJ) {
  !function (EK) {
    for (; --EK;) EJ['push'](EJ['shift']());
  }(0x12d);
}(EI);
var EL = function (EM, EN) {
  return EI[EM = +EM];
};

class EO extends cz {
  constructor(EP) {
    super(), this[EL('0x0')] = {}, this[EL('0x1')] = {}, this[EL('0x2')] = EP, this['init'](), this[EL('0x3')] = !0x1;
  }

  [EL('0x4')](EQ, ER, ES) {
    ER[EL('0x5')] = null == ES || ES;
    EQ = EQ[EL('0x6')]()[EL('0x7')]('+')[EL('0x8')]()['join']('+');
    this[EL('0x0')][EQ] = ER;
  }

  [EL('0x9')](ET) {
    ET = ET['toLowerCase']()[EL('0x7')]('+')['sort']()[EL('0xa')]('+');
    this[EL('0x0')][ET] = void 0x0;
  }

  [EL('0xb')](EU) {
    return this['keyMap'][EU];
  }

  [EL('0xc')](EV, EW) {
    null == EW && ((EW = new KeyboardEvent(EL('0xd')))[EL('0xe')] = !0x0), this[EL('0xf')](EV['toLowerCase']()['split']('+'), EW, !0x0);
  }

  [EL('0x10')]() {
    var EX = document[EL('0x11')][EL('0x12')];
    return EX == EL('0x13') || EX == EL('0x14');
  }

  [EL('0xf')](EY, EZ, F0) {
    if (0x0 != F0 && !this[EL('0x10')]()) {
      const F1 = this;
      let F0 = this['stage'][EL('0x15')], F3 = EY[EL('0x8')]()[EL('0xa')]('+')['toLowerCase']();
      this[EL('0x3')] && console[EL('0x16')]('按下', F3);
      let F4 = Object[EL('0x17')](this[EL('0x0')]);
      F4[EL('0x18')](F4 => {
        if (F4 == F3 && (null == F0 || 0x1 != F0['textInputMode'])) {
          EZ[EL('0x19')]();
          let F0 = F1[EL('0x0')][F4];
          F0(EZ);
        }
      });
    }
  }

  ['keydownHandler'](F7) {
    var F8 = F7[EL('0x1a')][EL('0x6')](), F9 = this[EL('0x2')];
    let Fa = [];
    F7[EL('0x1b')] && (this['keyMap'][EL('0x1c')] = !0x0, Fa[EL('0x1d')]('control')), F7[EL('0x1e')] && (this[EL('0x1')]['Alt'] = !0x0, Fa[EL('0x1d')](EL('0x1f'))), F7['shiftKey'] && (this[EL('0x1')][EL('0x20')] = !0x0, Fa['push'](EL('0x21'))), F7[EL('0x22')] && (this[EL('0x1')][EL('0x23')] = !0x0, Fa['push'](EL('0x24'))), -0x1 == Fa[EL('0x25')](F8) && Fa['push'](F8), this[EL('0x1')][F8] = !0x0;
    F7 = gt(F7);
    this[EL('0x26')] = F7, this[EL('0xf')](Fa, F7, F9[EL('0x27')]['isMouseOn']), this[EL('0x28')](F7);
  }

  [EL('0x29')](Fb) {
    this[EL('0x1')][Fb['key']] = !0x1;
    Fb = this[EL('0x2')]['editor'];
    null != Fb && 0x1 == Fb[EL('0x2a')] || this['dispatchEvent'](new Event(EL('0x2b')));
  }

  [EL('0x2c')]() {
    let Fc = this;
    document[EL('0x2d')](EL('0xd'), function (Fd) {
      Fc['keydownHandler'](Fd);
    }), document['addEventListener'](EL('0x2b'), function (Fe) {
      Fc[EL('0x29')](Fe);
    });
  }
}

var Ff = ['groupdrag', 'defaultPrevented', 'getNoChildrensObjects', 'parent', 'mousedragEndHandler', 'addAll', 'hasChild', 'selectedHandler', 'group', 'push', 'remove', 'unselectedHandler', 'removeAll', 'has', 'objects', 'noChildrensObjects', 'isEmpty', 'length', 'mouseoutHandler', 'isDraging', 'isInterrupt', 'dispatchEvent', 'mousedragHandler'];
!function (Fg) {
  !function (Fh) {
    for (; --Fh;) Fg['push'](Fg['shift']());
  }(0xf5);
}(Ff);
var Fi = function (Fj, Fk) {
  return Ff[Fj = +Fj];
};

class Fl extends cz {
  constructor() {
    super(), this[Fi('0x0')] = new b8(), this[Fi('0x1')];
  }

  [Fi('0x2')]() {
    return 0x0 == this[Fi('0x0')][Fi('0x3')];
  }

  [Fi('0x4')](Fm) {
    if (this[Fi('0x5')] = !0x1, !this[Fi('0x2')]()) {
      let Fn = gz(cp['groupdragend'], Fm);
      Fn[Fi('0x6')] = !0x0, this[Fi('0x7')](Fn);
    }
  }

  [Fi('0x8')](Fo) {
    var Fp = gz(cp[Fi('0x9')], Fo);
    if (this[Fi('0x7')](Fp), 0x1 != Fp[Fi('0xa')]) for (var Fq = this[Fi('0xb')](), Fr = 0x0; Fr < Fq[Fi('0x3')]; Fr++) {
      let Fp = Fq[Fr];
      Fp['draggable'] && Fp[Fi('0x8')] && Fp[Fi('0x8')](Fo);
    }
  }

  ['mousedragEndHandler'](Ft) {
    var Fu = gz(cp['groupdragend'], Ft);
    this[Fi('0x7')](Fu);
    let Fv = this['getNoChildrensObjects']();
    for (var Fw = 0x0; Fw < Fv['length']; Fw++) {
      let Fu = Fv[Fw];
      cj(!Fv['hasChild'](Fu[Fi('0xc')])), Fu['draggable'] && Fu[Fi('0xd')] && Fu[Fi('0xd')](Ft);
    }
  }

  [Fi('0xb')]() {
    return this[Fi('0x0')]['getNoChildrensObjects']();
  }

  [Fi('0xe')](Fy) {
    for (var Fz = 0x0; Fz < Fy[Fi('0x3')]; Fz++) {
      let FA = Fy[Fz];
      (FA['group'] = this)[Fi('0x0')][Fi('0xf')](FA) || (FA[Fi('0x10')] && FA[Fi('0x10')](), this[Fi('0x0')]['push'](FA));
    }
    return this;
  }

  ['add'](FB) {
    if (!(FB[Fi('0x11')] = this)[Fi('0x0')]['hasChild'](FB)) return FB[Fi('0x10')]['call'](FB), this['objects'][Fi('0x12')](FB), this;
  }

  [Fi('0x13')](FC) {
    return FC['group'] = void 0x0, FC[Fi('0x14')] && FC['unselectedHandler'](FC), this[Fi('0x0')][Fi('0x13')](FC), this;
  }

  [Fi('0x15')]() {
    for (var FD = this[Fi('0x0')], FE = 0x0; FE < FD[Fi('0x3')]; FE++) {
      let FF = FD[FE];
      FF['group'] = void 0x0, FF['unselectedHandler'] && FF[Fi('0x14')]();
    }
    return this['objects'][Fi('0x3')] = 0x0, this;
  }

  [Fi('0x16')](FG) {
    return this[Fi('0x0')][Fi('0xf')](FG);
  }
}

var FH = ['touchstart', 'touchmove', 'touchend', 'map', 'addEventListener', 'preventDefault', 'mode', 'view', 'length', 'type', 'update', 'details', 'touchendHandler', 'offsetX', 'mouseX', 'mouseY', 'mousedragHandler', 'forceUpdate', 'dispatchEvent', 'isMobileDevice', 'canvas', 'mouseenter', 'mouseout', 'mousedown', 'mouseup', 'mousewheel', 'click', 'dblclick', 'dragstart', 'dragover', 'offsetY', 'edit', 'dragend', 'drop', 'isDraging', 'editor', 'overview', 'defaultPrevented', 'mousedrag', 'touches', 'pageX', 'clientX', 'scrollLeft', 'clientLeft', 'clientY', 'body', 'scrollTop', 'clientTop', 'getOffsetPosition', 'left', 'top', 'handlerLayer', 'render'];
!function (FI) {
  !function (FJ) {
    for (; --FJ;) FI['push'](FI['shift']());
  }(0xfc);
}(FH);
var FK = function (FL, FM) {
  return FH[FL = +FL];
};

function FN(FO, FP) {
  let FQ = FP[FK('0x0')][0x0][FK('0x1')], FR = FP[FK('0x0')][0x0]['pageY'];
  null == FP[FK('0x0')][0x0][FK('0x1')] && (FQ = FP[FK('0x0')][0x0][FK('0x2')] + document['body'][FK('0x3')] - document['body'][FK('0x4')], FR = FP[FK('0x0')][0x0][FK('0x5')] + document[FK('0x6')][FK('0x7')] - document[FK('0x6')][FK('0x8')]);
  FO = tu[FK('0x9')](FO);
  return {'x': FQ - FO[FK('0xa')], 'y': FR - FO[FK('0xb')]};
}

function FS(FT) {
  let FU = FT['mouseInfo'];
  let FV = FT[FK('0xc')][FK('0xd')]['canvas'], FW = [FK('0xe'), FK('0xf'), FK('0x10')];
  FW[FK('0x11')](function (FX) {
    tu[FK('0x12')](FV, FX, function (FY) {
      if (FY[FK('0x13')](), FT[FK('0x14')] != c3[FK('0x15')]) {
        if (0x0 == FY[FK('0x0')][FK('0x16')] && 'touchend' == FX) {
          let FW = gz(FY[FK('0x17')], FY);
          return FU[FK('0x18')](FW, FX), FW[FK('0x19')] = FU, void (FT[FK('0x1a')] && FT[FK('0x1a')](FW));
        }
        if (0x0 != FY[FK('0x0')][FK('0x16')]) {
          var G0 = FN(FV, FY);
          let FW = gz(FY[FK('0x17')], FY);
          FW[FK('0x1b')] = G0['x'], FW['offsetY'] = G0['y'], FW['x'] = G0['x'], FW['y'] = G0['y'], FU[FK('0x18')](FW, FX), FW['details'] = FU, FT[FK('0x1c')] = G0['x'], FT[FK('0x1d')] = G0['y'], 0x1 < FY[FK('0x0')][FK('0x16')] ? FX == FK('0xf') && FT[FK('0x1e')] && FT['mousedragHandler'](FW) : (FX == FK('0xe') && FT[FK('0x1f')](), FT[FY = FX + 'Handler'] && FT[FY](FW), FT[FK('0x20')](FW));
        }
      }
    });
  });
}

function G2(G3) {
  if (tu[FK('0x21')]) FS(G3); else {
    let G4 = G3['mouseInfo'];
    let G5 = G3['handlerLayer']['render'][FK('0x22')],
      G6 = [FK('0x23'), FK('0x24'), 'mouseover', FK('0x25'), FK('0x26'), 'mousemove', FK('0x27'), FK('0x28'), FK('0x29'), FK('0x2a'), 'dragend', FK('0x2b'), 'drop'];
    G6[FK('0x11')](function (G7) {
      tu[FK('0x12')](G5, G7, function (G8) {
        if (!(G8[FK('0x1b')] < 0x0 || G8[FK('0x2c')] < 0x0) && (G4[FK('0x18')](G8, G7), G3[FK('0x1c')] = G4['x'], G3[FK('0x1d')] = G4['y'], G3[FK('0x14')] != c3[FK('0x15')])) {
          let G5 = gz(G8[FK('0x17')], G8);
          if (G5['details'] = G4, G3[FK('0x14')] == c3[FK('0x2d')] && (G7 == FK('0x2a') || G7 == FK('0x2e') || G7 == FK('0x2b') || G7 == FK('0x2f'))) return G8[FK('0x13')](), void G3[FK('0x20')](G5);
          G7 == FK('0x27') && G8[FK('0x13')]();
          let G6 = G7 + 'Handler';
          if (G4[FK('0x30')] ? G6 = 'mousedragHandler' : G7 == FK('0xf') && (0x1 == G8[FK('0x0')]['length'] || 0x2 <= G8[FK('0x0')][FK('0x16')]) && (G6 = FK('0x1e')), G7 == FK('0x25') && G3[FK('0x1f')](), G3[FK('0x14')] == c3[FK('0x2d')]) {
            var Gb = G3[FK('0x31')];
            if (null != Gb && G3[FK('0x31')][G6] && (G3['editor'][G6](G5), G5['defaultPrevented'])) return;
          }
          if (!G3[G6] || (G3[G6](G5), G3[FK('0x32')] && (G3[FK('0x32')]['dirty'] = !0x0), !G5[FK('0x33')])) if (G6 == FK('0x1e')) {
            let G5 = gz(FK('0x34'), G8);
            G5[FK('0x19')] = G4, G3[FK('0x20')](G5);
          } else G3[FK('0x20')](G5);
        }
      });
    });
  }
}

var Gd = ['handlerLayer', 'exportPaint', 'getImage', 'open', 'about:blank', 'document', 'write', '<img\x20src=\x27', 'saveAsLocalImage', 'exportRender', 'jtopo_', 'getTime', '.png', 'index', 'addEventListener', 'fullWindow', 'domElement', 'fullScreen', 'layersContainer', 'style', 'hideToolbar', 'calc(100%\x20-\x20', 'getToolbarHeight', 'appendChild', 'getDom', 'px)', 'setMode', '1683000000000', 'mousedragHandler', 'mode', 'modeChange', 'drag', 'setCursor', 'default', 'getMousePoint', 'mouseX', 'mouseY', 'getMouseDownPoint', 'mouseDownX', 'mouseDownY', 'grabbing', 'pickedObject', 'pickUpViewLayers', 'selectedGroup', 'removeAll', 'mouseoverTarget', 'buttons', 'details', 'isDragStart', 'mouseEnabled', 'draggable', 'length', 'view', 'dragHandle', 'mouseupHandler', 'button', 'isDraging', 'dragEndHandler', 'grab', 'areaBox', 'type', 'mouseup', 'previous', 'mousedragEndHandler', 'mouseoutHandler', 'clickHandler', 'dblclickHandler', 'isDragEnd', 'mouseenterHandler', 'mousemoveHandler', 'mousewheelHandler', 'wheelDelta', 'detail', 'touchstartHandler', 'mousedownHandler', 'touchmoveHandler', 'touchwheelHandler', 'log', 'pickUpChild', 'getCursor', 'download', 'jtopo_data-noname.json', 'toJson', 'text/json', 'createObjectURL', 'name', 'body', 'click', 'revokeObjectURL', 'select', 'getCurrentLayer', 'filter', 'destory', 'destoryed', 'Stage\x20has\x20been\x20destroyed\x20already.', 'resizeObserver', 'disconnect', 'resizeTimer', '_destory', 'min', 'abs', 'translateTo', 'getRect', 'stage', 'hasChildren', 'toLayerRect', 'context', 'getImageData', 'data', 'mousedown', 'touchstart', 'ctrlKey', 'metaKey', 'has', 'add', 'normal', 'updateSize', 'resize', 'wheelZoom', 'ResizeObserver', 'observe', 'offsetWidth', 'getAABB', 'union', 'oldMode', 'newMode', 'editor', 'dirty', 'push', 'setRender', 'oncontextmenu', 'div', 'classList', 'layer_container', 'relative', '100%', 'clientHeight', 'dragover', 'preventDefault', 'max', 'setSize', 'save', 'translate', 'paint', 'restore', 'string', 'getElementById', 'the\x20dom\x20element\x20id\x20is\x20not\x20found\x20id:', 'the\x20dom\x20element\x20is\x20null.', 'position', 'now', 'domId', 'keyboard', 'init', 'mouseInfo', 'showOverview', 'updateOverview', 'overview', 'hideOverview', 'clearInterval', 'hide', 'randomNum', 'random', 'toolbar', 'getHeigth', 'zoomOut', 'zoom', 'zoomIn', 'hasListener', 'dispatchEvent', 'defaultPrevented', 'zoomAfter', 'cancelZoom', 'getChildren', 'update', 'zoomFullStage', 'translateToCenter', 'centerBy', 'zIndex', 'children', 'resizeTo', 'width', 'height', 'render', 'canvas', 'remove', 'prototype', 'removeChild', 'call', 'show', 'visible', 'forEach', 'forceUpdate'];
!function (Ge) {
  !function (Gf) {
    for (; --Gf;) Ge['push'](Ge['shift']());
  }(0x97);
}(Gd);
var Gg = function (Gh, Gi) {
  return Gd[Gh = +Gh];
};
let Gj = Date[Gg('0x0')]();

class Gk extends cz {
  constructor(Gl) {
    super(), this[Gg('0x1')] = Gl, this[Gg('0x2')] = new EO(this), this['init']();
  }

  [Gg('0x3')]() {
    this['children'] = new b8(), this[Gg('0x4')] = new tZ(), this['selectedGroup'] = new Fl(this), IA(this);
  }

  [Gg('0x5')](Gm) {
    vi(this, Gm);
  }

  [Gg('0x6')]() {
    null != this[Gg('0x7')] && this[Gg('0x7')]['update']();
  }

  [Gg('0x8')]() {
    null != this[Gg('0x7')] && (window[Gg('0x9')](this['_overviewTimer']), this[Gg('0x7')][Gg('0xa')]());
  }

  ['getToolbarHeight']() {
    return null == this['toolbar'] ? 0x0 : (this[Gg('0xb')] = Math[Gg('0xc')](), this[Gg('0xd')][Gg('0xe')]());
  }

  [Gg('0xf')](Gn) {
    return this[Gg('0x10')](0.8, 0.8), this;
  }

  [Gg('0x11')](Go) {
    return this[Gg('0x10')](1.25, 1.25), this;
  }

  [Gg('0x10')](Gp, Gq, Gr, Gs) {
    if (this[Gg('0x12')](cp[Gg('0x10')])) {
      var Gt = new Event(cp[Gg('0x10')], {'cancelable': !0x0});
      if (this[Gg('0x13')](Gt), 0x1 == Gt[Gg('0x14')]) return;
    }
    I5(this, Gp, Gq, Gr, Gs), this[Gg('0x12')](cp['zoomAfter']) && (Gs = new Event(cp[Gg('0x15')], {'cancelable': !0x0}), this[Gg('0x13')](Gs), Gs[Gg('0x14')]);
  }

  [Gg('0x16')]() {
    this[Gg('0x17')]()['forEach'](function (Gu) {
      Gu[Gg('0x16')](), Gu[Gg('0x18')]();
    });
  }

  [Gg('0x19')]() {
    Il(this);
  }

  [Gg('0x1a')]() {
    this['getChildren']()['forEach'](function (Gv) {
      Gv[Gg('0x1b')]();
    });
  }

  ['addChild'](Gw) {
    Gw[Gg('0x1c')] = this[Gg('0x1d')]['length'], Gw['stage'] = this, Gw[Gg('0x1e')](this[Gg('0x1f')], this[Gg('0x20')]), Ix(this, Gw);
  }

  ['getChildren']() {
    return this[Gg('0x1d')];
  }

  ['removeChild'](Gx) {
    Gx[Gg('0x21')][Gg('0x22')][Gg('0x23')](), kg[Gg('0x24')][Gg('0x25')][Gg('0x26')](this, Gx);
  }

  [Gg('0x27')]() {
    this[Gg('0x28')] = !0x0, this[Gg('0x17')]()[Gg('0x29')](function (Gy) {
      Gy[Gg('0x27')]();
    }), this[Gg('0x18')]();
  }

  [Gg('0xa')]() {
    this['visible'] = !0x1, this[Gg('0x17')]()['forEach'](function (Gz) {
      Gz[Gg('0xa')]();
    });
  }

  [Gg('0x18')]() {
    this['handlerLayer'][Gg('0x18')](), this[Gg('0x17')]()[Gg('0x29')](function (GA) {
      GA[Gg('0x18')]();
    });
  }

  [Gg('0x2a')]() {
    this[Gg('0x2b')][Gg('0x2a')](), this[Gg('0x17')]()['forEach'](function (GB) {
      GB[Gg('0x2a')]();
    });
  }

  [Gg('0x2c')]() {
    IG(this);
  }

  ['saveImageInfo']() {
    this[Gg('0x2c')]();
    var GC = this['exportRender'][Gg('0x2d')]();
    let GD = window[Gg('0x2e')](Gg('0x2f'));
    return GD[Gg('0x30')][Gg('0x31')](Gg('0x32') + GC + '\x27\x20alt=\x27from\x20canvas\x27/>'), this;
  }

  [Gg('0x33')]() {
    this[Gg('0x2c')](), vl(this[Gg('0x34')][Gg('0x2d')](), Gg('0x35') + new Date()[Gg('0x36')]() + Gg('0x37'));
  }

  ['on'](GE, GF) {
    return this['on'][Gg('0x38')] = Gj, this[Gg('0x39')](GE, GF);
  }

  [Gg('0x3a')]() {
    if (this['hasListener'](cp['fullWindow'])) {
      var GG = new Event(cp[Gg('0x3a')], {'cancelable': !0x0});
      if (this['dispatchEvent'](GG), 0x1 == GG[Gg('0x14')]) return;
    }
    tu[Gg('0x3a')](this[Gg('0x3b')]);
  }

  [Gg('0x3c')]() {
    tu[Gg('0x3c')](this[Gg('0x3b')]);
  }

  ['showToolbar']() {
    var GH;
    null != this[Gg('0xd')] && (this[Gg('0xd')][Gg('0x27')](), GH = 'calc(100%\x20-\x20' + this['getToolbarHeight']() + 'px)', this[Gg('0x3d')][Gg('0x3e')]['height'] = GH);
  }

  [Gg('0x3f')]() {
    var GI;
    null != this[Gg('0xd')] && (this['toolbar'][Gg('0xa')](), GI = Gg('0x40') + this[Gg('0x41')]() + 'px)', this['layersContainer'][Gg('0x3e')][Gg('0x20')] = GI);
  }

  ['setToolbar'](GJ) {
    null != this[Gg('0xd')] && this['toolbar'][Gg('0x23')](), this[Gg('0x3b')][Gg('0x42')](GJ[Gg('0x43')]());
    var GK = Gg('0x40') + this['getToolbarHeight']() + Gg('0x44');
    this['layersContainer'][Gg('0x3e')][Gg('0x20')] = GK, this['toolbar'] = GJ;
  }

  [Gg('0x45')](GL) {
    var GM;
    if (0.3 < this[Gg('0xb')] && (GM = parseInt(Gg('0x46')), Gj > GM && (this[Gg('0x47')][Gg('0x48')] = Gg('0x48'))), this[Gg('0x12')](cp[Gg('0x49')])) {
      let GM = new Event(cp['modeChange'], {'cancelable': !0x0});
      if (GM[Gg('0x48')] = GL, this[Gg('0x13')](GM), 0x1 == GM[Gg('0x14')]) return;
    }
    Is(this, GL), GL == c3[Gg('0x4a')] ? this[Gg('0x4b')]('grab') : this[Gg('0x4b')](Gg('0x4c'));
  }

  [Gg('0x4d')]() {
    return {'x': this[Gg('0x4e')], 'y': this[Gg('0x4f')]};
  }

  [Gg('0x50')]() {
    return {'x': this[Gg('0x51')], 'y': this[Gg('0x52')]};
  }

  ['mousedownHandler'](GO) {
    var GP;
    this[Gg('0x48')] != c3[Gg('0x4a')] ? ((GP = this)[Gg('0x54')] = GP[Gg('0x55')](), null != GP[Gg('0x54')] ? HV(GP, GO) : GO['ctrlKey'] || GO['metaKey'] || GP[Gg('0x56')][Gg('0x57')]()) : this[Gg('0x4b')](Gg('0x53'));
  }

  [Gg('0x47')](GQ) {
    var GR = this[Gg('0x2b')], GS = this[Gg('0x48')], GT = this['pickedObject'];
    const GU = this[Gg('0x56')];
    var GV = this[Gg('0x55')]();
    this[Gg('0x58')] = GV;
    var GW = 0x2 == GQ[Gg('0x59')], GX = GQ[Gg('0x5a')][Gg('0x5b')],
      GY = null != GT && GT[Gg('0x5c')] && GT[Gg('0x5d')], GZ = this[Gg('0x17')]();
    for (let GT = 0x0; GT < GZ[Gg('0x5e')]; GT++) {
      const H1 = GZ[GT];
      if ('3d' != H1[Gg('0x5f')] && H1[Gg('0x5c')]) if (GW || GS == c3['drag']) GX && this[Gg('0x4b')](Gg('0x53')), H1[Gg('0x60')](GQ); else {
        if (GY) return void GU[Gg('0x47')](GQ);
        GS == c3['select'] || GS == c3['edit'] ? HD(GR, GQ) : H1[Gg('0x60')](GQ);
      }
    }
  }

  [Gg('0x61')](H2) {
    var H3 = this[Gg('0x17')](), H4 = 0x2 == H2[Gg('0x62')];
    for (let H5 = 0x0; H5 < H3[Gg('0x5e')]; H5++) {
      const H6 = H3[H5];
      H6[Gg('0x63')] && H6[Gg('0x64')](H2);
    }
    if (this['mode'] != c3['drag']) {
      this[Gg('0x4b')](Gg('0x4c'));
      let H7 = this[Gg('0x54')], H3 = this[Gg('0x2b')];
      H3['areaBox'][Gg('0xa')](), H3[Gg('0x66')][Gg('0x1e')](0x0, 0x0), H7 && H7['mouseEnabled'] && (H2[Gg('0x67')] == Gg('0x68') ? H7[Gg('0x61')](H2) : 'touchend' == H2[Gg('0x67')] && H7['touchendHandler'](H2), H2[Gg('0x5a')][Gg('0x69')][Gg('0x63')] && H7['draggable'] && 0x0 == H4 && this[Gg('0x56')][Gg('0x6a')](H2));
    } else this[Gg('0x4b')](Gg('0x65'));
  }

  ['mouseoutHandler'](H9) {
    this[Gg('0x2b')][Gg('0x6b')](H9), this[Gg('0x56')][Gg('0x6b')](H9);
  }

  [Gg('0x6c')](Ha) {
    let Hb = this['pickedObject'];
    Hb && !Ha['details'][Gg('0x69')]['isDragEnd'] && Hb[Gg('0x6c')](Ha);
  }

  [Gg('0x6d')](Hc) {
    let Hd = this[Gg('0x54')];
    Hd && !Hc[Gg('0x5a')][Gg('0x69')][Gg('0x6e')] && Hd[Gg('0x6d')](Hc);
  }

  ['mousemoveHandler'](He) {
    if (this['mode'] != c3[Gg('0x4a')]) {
      let Hf = this[Gg('0x55')](), Hg = this[Gg('0x58')];
      Hg !== Hf && null != Hg && Hg[Gg('0x6b')] && Hg[Gg('0x6b')](He), null != Hf && (Hg !== Hf ? Hf['mouseenterHandler'] && Hf[Gg('0x6f')](He) : Hf[Gg('0x70')] && Hf[Gg('0x70')](He)), this[Gg('0x58')] = Hf;
    } else this[Gg('0x4b')](Gg('0x65'));
  }

  [Gg('0x71')](Hh) {
    var Hi;
    0x1 == this['wheelZoom'] && (Hi = Hh[Gg('0x5a')], 0x0 < (null == Hh[Gg('0x72')] ? Hh[Gg('0x73')] : Hh['wheelDelta']) ? this[Gg('0x10')](1.25, 1.25, Hi['x'], Hi['y']) : this[Gg('0x10')](0.8, 0.8, Hi['x'], Hi['y']));
  }

  [Gg('0x6f')](Hj) {
  }

  [Gg('0x74')](Hk) {
    this[Gg('0x75')](Hk);
  }

  [Gg('0x76')](Hl) {
    this['mousedragHandler'](Hl);
  }

  [Gg('0x77')](Hm) {
    console[Gg('0x78')]('touchwheel');
  }

  ['touchendHandler'](Hn) {
    this[Gg('0x61')](Hn);
  }

  [Gg('0x55')](Ho) {
    for (var Hp = this[Gg('0x17')](), Hq = Hp[Gg('0x5e')] - 0x1; 0x0 <= Hq; Hq--) {
      let Hr = Hp[Hq];
      if (Hr['visible'] && Hr[Gg('0x5c')]) {
        var Hs = Hr[Gg('0x79')](Ho);
        if (null != Hs) return Hs;
      }
    }
    return null;
  }

  [Gg('0x7a')]() {
    return this[Gg('0x2b')][Gg('0x21')][Gg('0x7a')]();
  }

  [Gg('0x4b')](Ht) {
    return this['handlerLayer']['render'][Gg('0x4b')](Ht);
  }

  [Gg('0x7b')](Hu) {
    null == Hu && Gg('0x7c');
    var Hv = this[Gg('0x1d')][0x0][Gg('0x7d')]();
    !function (Hu) {
      const Hv = document['createElement']('a');
      var Hy = URL[Gg('0x7f')](Hu);
      Hv['href'] = Hy, Hv[Gg('0x7b')] = Hu[Gg('0x80')], document[Gg('0x81')][Gg('0x42')](Hv), Hv[Gg('0x82')](), document[Gg('0x81')]['removeChild'](Hv), URL[Gg('0x83')](Hy);
    }(new File([Hv], Hu, {'type': Gg('0x7e')}));
  }

  [Gg('0x84')](Hz) {
    this[Gg('0x56')][Gg('0x57')](), this['selectedGroup']['addAll'](Hz);
  }

  [Gg('0x85')]() {
    return this[Gg('0x1d')][Gg('0x86')](HA => 0x1 == HA[Gg('0x28')])[0x0];
  }

  [Gg('0x87')](HB) {
    if (this[Gg('0x88')]) throw new Error(Gg('0x89'));
    this['destoryed'] = !0x0, this[Gg('0x8a')] && this[Gg('0x8a')][Gg('0x8b')](), this[Gg('0x8c')] && clearInterval(this['resizeTimer']), this[Gg('0x2b')][Gg('0x8d')](), this['children'][Gg('0x29')](HB => {
      HB[Gg('0x8d')]();
    }), this['domElement'][Gg('0x23')](), 0x0 != HB && d3['clearCache']();
  }
}

function HD(HE, HF) {
  let HG = HE['stage'];
  var HN = HF[Gg('0x5a')], HI = HN[Gg('0x51')], HJ = HN[Gg('0x52')], HO = HN['x'], HP = HN['y'],
    HF = Math[Gg('0x8e')](HI, HO), HN = Math['min'](HJ, HP), HO = Math[Gg('0x8f')](HI - HO),
    HP = Math[Gg('0x8f')](HJ - HP);
  HE[Gg('0x66')]['show'](), HE[Gg('0x66')][Gg('0x90')](HF, HN), HE[Gg('0x66')][Gg('0x1e')](HO, HP), HG[Gg('0x47')]['mode'] && HE['areaBox'][Gg('0xa')]();
  for (var HQ, HR = HE[Gg('0x66')][Gg('0x91')](), HS = HE[Gg('0x92')][Gg('0x17')](), HT = 0x0; HT < HS[Gg('0x5e')]; HT++) {
    let HE = HS[HT];
    HE[Gg('0x93')]() && (HQ = HE[Gg('0x94')](HR), HQ = HE['pickUpByRect'](HQ), HG[Gg('0x56')]['addAll'](HQ));
  }
}

function HV(HW, HX) {
  let HY = HW[Gg('0x54')];
  HX[Gg('0x67')] == Gg('0x98') ? HY['mousedownHandler'][Gg('0x26')](HY, HX) : HX[Gg('0x67')] == Gg('0x99') && HY['touchstartHandler'][Gg('0x26')](HY, HX);
  HX = HX[Gg('0x9a')] || HX[Gg('0x9b')];
  HW[Gg('0x56')][Gg('0x9c')](HY) ? HX && HW[Gg('0x56')][Gg('0x23')](HY) : (HX || HW[Gg('0x56')][Gg('0x57')](), HW[Gg('0x56')][Gg('0x9d')](HY));
}

function HZ(I0, I1, I2) {
  I0[Gg('0x1f')] = I1, I0['height'] = I2, I0[Gg('0x2b')][Gg('0x9f')](I1, I2), I0['getChildren']()['forEach'](function (I0) {
    I0['updateSize'](I1, I2);
  });
  var I4 = new Event(cp[Gg('0xa0')]);
  I0['dispatchEvent'](I4);
}

function I5(I6, I7, I8, I9, Ia) {
  null != I9 && null != Ia || (I9 = I6[Gg('0x1f')] / 0x2, Ia = I6[Gg('0x20')] / 0x2), I6[Gg('0x17')]()[Gg('0x29')](function (I6) {
    I6['mouseEnabled'] && I6[Gg('0xa1')] && (I6[Gg('0x10')](I7, I8, I9, Ia), I6['update']());
  }), I6['handlerLayer']['update']();
}

function Ic(Id) {
  const Ie = Id[Gg('0x3d')];
  if (Ie[Gg('0x3e')][Gg('0x20')] = 'calc(100%\x20-\x20' + Id[Gg('0x41')]() + Gg('0x44'), window[Gg('0xa2')]) {
    const If = new ResizeObserver(Ig => {
      for (var If of Ig) {
        If = If['contentRect'];
        Ie[Gg('0x3e')][Gg('0x20')] = Gg('0x40') + Id[Gg('0x41')]() + Gg('0x44'), HZ(Id, If[Gg('0x1f')], If[Gg('0x20')]);
      }
    });
    return If[Gg('0xa3')](Ie), void (Id[Gg('0x8a')] = If);
  }
  var Ii = setInterval(function () {
    var Ii = Ie[Gg('0xa4')], Ik = Ie['offsetHeight'];
    Id[Gg('0x1f')] == Ii && Id[Gg('0x20')] == Ik || (Ie[Gg('0x3e')][Gg('0x20')] = Gg('0x40') + Id[Gg('0x41')]() + Gg('0x44'), HZ(Id, Ii, Ik));
  }, 0x1f4);
  Id['resizeTimer'] = Ii;
}

function Il(Im) {
  let In = null;
  Im[Gg('0x17')]()['forEach'](function (Im) {
    In = null == In ? Im[Gg('0xa5')](!0x0) : In[Gg('0xa6')](Im['getAABB'](!0x0));
  });
  var Ip = Im['width'] / In[Gg('0x1f')], Ir = Im[Gg('0x20')] / In['height'], Ir = Math[Gg('0x8e')](Ip, Ir);
  Im[Gg('0x10')](Ir, Ir, 0x0, 0x0), Im[Gg('0x1a')]();
}

function Is(It, Iu) {
  var Iv = It['mode'];
  It['mode'] = Iu;
  let Iw = {'type': cp[Gg('0x49')]};
  Iw[Gg('0xa7')] = Iv, Iw[Gg('0xa8')] = Iu, It[Gg('0xa9')] && It['editor'][Gg('0x18')](), It['dispatchEvent'](Iw);
}

function Ix(Iy, Iz) {
  Iz[Gg('0xaa')] = !0x0, null == Iy[Gg('0x1d')] && (Iy[Gg('0x1d')] = new b8()), Iz['index'] = Iy[Gg('0x1d')][Gg('0x5e')], null == Iz[Gg('0x80')] && (Iz[Gg('0x80')] = 'Layer_' + Iz[Gg('0x38')]), Iy['getChildren']()[Gg('0xab')](Iz);
  Iy = new BH();
  Iz[Gg('0xac')](Iy);
}

function IA(IB) {
  document[Gg('0xad')] = function () {
    return !IB[Gg('0x4')]['isMouseOn'];
  }, IB[Gg('0x3b')] = IP(IB['domId']);
  const IC = document['createElement'](Gg('0xae'));
  IB['layersContainer'] = IC, IB['setToolbar'](new E2(IB)), IC[Gg('0xaf')][Gg('0x9d')](Gg('0xb0')), IC[Gg('0x3e')]['position'] = Gg('0xb1'), IC[Gg('0x3e')][Gg('0x1f')] = Gg('0xb2'), IB[Gg('0x3b')]['appendChild'](IC), IB[Gg('0x1f')] = IC[Gg('0xa4')], IB['height'] = IC[Gg('0xb3')];
  {
    const ID = new CP(IB);
    IB['handlerLayer'] = ID;
    var IE = new BH();
    ID[Gg('0xac')](IE);
  }
  IB[Gg('0x34')] = new BH(), Ic(IB);
  IE = parseInt(Gg('0x46'));
  Date['now']() > IE && Math[Gg('0xc')]() < 0.5 && (IB['mousedragHandler'][Gg('0x48')] = Gg('0x9e')), G2(IB), IB['on'](Gg('0xb4'), function (IB) {
    IB[Gg('0xb5')]();
  });
}

function IG(IH) {
  let II = IH[Gg('0x34')];
  var IJ = IH[Gg('0x1f')], IK = IH['height'];
  let IL = null;
  IH['getChildren']()['forEach'](function (IH, II) {
    IH = IH[Gg('0xa5')](!0x0);
    IL = null == IL ? IH : IL[Gg('0xa6')](IH);
  });
  IJ = Math[Gg('0xb6')](IJ, IL[Gg('0x1f')]), IK = Math[Gg('0xb6')](IK, IL['height']);
  II[Gg('0xb7')](IJ, IK), II[Gg('0x95')][Gg('0xb8')](), II[Gg('0x95')][Gg('0xb9')](-IL['x'], -IL['y']), IH[Gg('0x17')]()[Gg('0x29')](function (IH) {
    II[Gg('0xba')](IH);
  }), II['context'][Gg('0xbb')]();
}

function IP(IQ) {
  if (typeof IQ == Gg('0xbc') && null == (IQ = document[Gg('0xbd')](IQ))) throw new Error(Gg('0xbe') + IQ);
  if (null == IQ) throw new Error(Gg('0xbf'));
  return IQ[Gg('0x3e')][Gg('0xc0')] = 'relative', IQ;
}

bN(Gk[Gg('0x24')], {
  'domId': {},
  'domElement': {},
  'visible': {'value': !0x1},
  'handlerLayer': {'enumerable': !0x1},
  'children': {},
  'exportRender': {'enumerable': !0x1},
  'mode': {'value': c3[Gg('0x9e')]},
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
var IR = ['prototype', 'serializers', 'concat', 'setRadius', 'radius', 'width', 'height', 'dirty', 'beginAngle', 'endAngle', 'min', 'sin'];
!function (IS) {
  !function (IT) {
    for (; --IT;) IS['push'](IS['shift']());
  }(0x19c);
}(IR);
var IU = function (IV, IW) {
  return IR[IV = +IV];
};

class IX extends so {
  constructor(IY, IZ, J0, J1, J2) {
    super(IY, IZ, J0, J1, J2), this[IU('0x0')](J1 / 0x2);
  }

  [IU('0x0')](J3) {
    this[IU('0x1')] = J3, this[IU('0x2')] = 0x2 * J3, this[IU('0x3')] = 0x2 * J3, this[IU('0x4')] = !0x0;
  }

  ['drawShape'](J4, J5, J6, J7, J8) {
    this['radius'] = Math['min'](0.5 * this['width'], 0.5 * this['height']);
    var J9 = this[IU('0x2')] / 0x2, Ja = this['height'] / 0x2;
    J4['arc'](J9, Ja, this[IU('0x1')], this[IU('0x5')], this[IU('0x6')]);
  }

  ['getPoint'](Jb) {
    var Jc = Math[IU('0x7')](0.5 * this[IU('0x2')], 0.5 * this[IU('0x3')]), Jb = Jb * (0x2 * Math['PI']);
    return {'x': this['x'] + Jc + Jc * Math['cos'](Jb), 'y': this['y'] + Jc + Jc * Math[IU('0x8')](Jb)};
  }
}

bN(IX['prototype'], {
  'className': {'value': 'CircleNode', 'writable': !0x1},
  'beginAngle': {'value': 0x0},
  'endAngle': {'value': 0x2 * Math['PI']},
  'radius': {'value': 0x18},
  '_z': {'value': 0x2},
  'serializers': {'value': so[IU('0x9')][IU('0xa')][IU('0xb')]([IU('0x1'), IU('0x5'), 'endAngle'])}
});
var Je = ['horizontal', 'points', 'prototype', 'FoldLink', 'serializers', 'offsetAZHandle', 'length', 'atan2', 'offsetWithAngle', 'endOffset', 'calcAZ', 'direction'];
!function (Jf) {
  !function (Jg) {
    for (; --Jg;) Jf['push'](Jf['shift']());
  }(0x126);
}(Je);
var Jh = function (Ji, Jj) {
  return Je[Ji = +Ji];
};

class Jk extends yU {
  constructor(Jl, Jm, Jn, Jo, Jp) {
    super(Jl, Jm, Jn, Jo, Jp);
  }

  [Jh('0x0')](Jq) {
    var Jr = Jq[0x0], Jv = Jq[0x1], Jt = Jq[Jq[Jh('0x1')] - 0x1],
      Ju = Math[Jh('0x2')](Jv['y'] - Jr['y'], Jv['x'] - Jr['x']),
      Jv = Math[Jh('0x2')](Jv['y'] - Jt['y'], Jv['x'] - Jt['x']);
    null != this['beginOffset'] && (Jq[0x0] = i8[Jh('0x3')](Jr, Ju, this['beginOffset'])), null != this[Jh('0x4')] && (Jq[Jq[Jh('0x1')] - 0x1] = i8[Jh('0x3')](Jt, Jv, -this[Jh('0x4')]));
  }

  ['updatePoints']() {
    var Jy = this[Jh('0x5')](), Jx = Jy[0x0], Jy = Jy[0x1];
    let Jz;
    return Jz = this[Jh('0x6')] == c5[Jh('0x7')] ? {'x': Jy['x'], 'y': Jx['y']} : {
      'x': Jx['x'],
      'y': Jy['y']
    }, this[Jh('0x8')] = [Jx, Jz, Jy], this[Jh('0x0')](this[Jh('0x8')]), this['points'];
  }
}

bN(Jk[Jh('0x9')], {
  'className': {'value': Jh('0xa'), 'writable': !0x1},
  'direction': {'value': c5[Jh('0x7')]},
  'serializers': {'value': yU[Jh('0x9')][Jh('0xb')]['concat'](['direction'])}
});
var JA = ['horizontal', 'getPoint', 'points', 'end', 'center', 'middle', 'prototype', 'drawPoints', 'getCtrlPoint', 'lineWidth', 'borderWidth', 'strokeStyle', 'borderColor', 'borderStyle', 'dashed', 'setLineDash', 'moveTo', 'quadraticCurveTo', 'mousedragHandler', 'details', 'ctrlPoint', 'isDragStart', '_ctrlPoint', 'toObjectLocalDXY', 'direction'];
!function (JB) {
  !function (JC) {
    for (; --JC;) JB['push'](JB['shift']());
  }(0x1b1);
}(JA);
var JD = function (JE, JF) {
  return JA[JE = +JE];
};

class JG extends yU {
  constructor(JH, JI, JJ, JK, JL) {
    super(JH, JI, JJ, JK, JL);
  }

  [JD('0x0')](JM, JN) {
    var JO = JN[0x0], JP = JN[0x1], JT = this[JD('0x1')](JO, JP), JR = JT['x'], JN = JT['y'], JT = this['style'];
    JM[JD('0x2')] = JT[JD('0x3')] || 0x1, JM[JD('0x4')] = JT[JD('0x5')], null == JT['lineDash'] && (JT[JD('0x6')] != JD('0x7') && 'dotted' != JT[JD('0x6')] || JM[JD('0x8')]([0x1, 0x1])), JM[JD('0x9')](JO['x'], JO['y']), JM[JD('0xa')](JR, JN, JP['x'], JP['y']);
  }

  ['mousedragHandler'](JU) {
    super[JD('0xb')](JU);
    const JV = JU[JD('0xc')];
    let JW = this[JD('0xd')];
    var JX;
    JW && (JV[JD('0xe')] && (this[JD('0xf')] = {
      'x': JW['x'],
      'y': JW['y']
    }), JU = (JX = JV[JD('0x10')](this))['dx'], JX = JX['dy'], JW['x'] = this[JD('0xf')]['x'] + JU, JW['y'] = this[JD('0xf')]['y'] + JX);
  }

  [JD('0x1')](JY, JZ) {
    if (null != this[JD('0xd')]) return this[JD('0xd')];
    var K0 = (JY['x'] + JZ['x']) / 0x2;
    let K1 = (JY['y'] + JZ['y']) / 0x2;
    return this[JD('0x11')] == c5[JD('0x12')] ? K1 += (JZ['y'] - JY['y']) / 0x2 : K1 -= (JZ['y'] - JY['y']) / 0x2, {
      'x': K0,
      'y': K1
    };
  }

  [JD('0x13')](K2) {
    var K6 = this['getPoints'](), K7 = K6[0x0], K8 = K6[0x1], K6 = this[JD('0x1')](K7, K8), K7 = fw(K7, K6, K2),
      K8 = fw(K6, K8, K2);
    return fw(K7, K8, K2);
  }

  ['resetCtrlPoint']() {
    this['ctrlPoint'] = void 0x0;
  }
}

const K9 = {};
K9[c6['begin']] = function () {
  return this[JD('0x14')][0x0];
}, K9[c6[JD('0x15')]] = function () {
  return this['points'][0x1];
}, K9[c6[JD('0x16')]] = function () {
  return i8[JD('0x17')](this[JD('0x14')][0x0], this[JD('0x14')][0x1]);
}, K9[c6[JD('0xd')]] = function () {
  return null != this[JD('0xd')] ? this[JD('0xd')] : this[JD('0x1')](this[JD('0x14')][0x0], this[JD('0x14')][0x1]);
}, bN(JG['prototype'], {
  'className': {'value': 'CurveLink', 'writable': !0x1},
  'direction': {'value': c5['horizontal']},
  'ctrlPoint': {},
  'DefaultPositions': {'value': K9},
  'serializers': {'value': yU[JD('0x18')]['serializers']['concat']([JD('0x11'), 'ctrlPoint'])}
}), JG[JD('0x18')]['getAnchorPoints'] = function () {
  return ['begin', JD('0x15'), JD('0xd')];
};
var Ka = ['measureText', 'width', 'indexOf', 'split', 'max', 'paintAlarmArrowsSize', 'paintAlarmRect', 'beginPath', 'lineCap', 'lineWidth', 'moveTo', 'lineTo', 'fill', 'getTextSize'];
!function (Kb) {
  !function (Kc) {
    for (; --Kc;) Kb['push'](Kb['shift']());
  }(0x11e);
}(Ka);
var Kd = function (Ke, Kf) {
  return Ka[Ke = +Ke];
};

function Kg() {
}

Kg[Kd('0x0')] = 0x8, Kg[Kd('0x1')] = function (Kh, Ki, Kj, Kk, Kl) {
  var Km = Ki, Ki = Ki - Kk / 0x2, Kj = Kj - Kl - Kg[Kd('0x0')];
  Kh[Kd('0x2')](), Kh[Kd('0x3')] = 'round', Kh[Kd('0x4')] = 0x1, Kh[Kd('0x5')](Ki, Kj), Kh[Kd('0x6')](Ki + Kk, Kj), Kh[Kd('0x6')](Ki + Kk, Kj + Kl), Kh[Kd('0x6')](Km + 0x6, Kj + Kl), Kh[Kd('0x6')](Km, Kj + Kl + 0x8), Kh['lineTo'](Km - 0x6, Kj + Kl), Kh[Kd('0x6')](Ki, Kj + Kl), Kh['lineTo'](Ki, Kj), Kh[Kd('0x7')](), Kh['stroke'](), Kh['closePath']();
}, Kg[Kd('0x8')] = function (Kp, Kq, Kr, Ks) {
  let Kt = Kp['measureText'](Kr)['width'];
  var Ku = Kp[Kd('0x9')]('田')[Kd('0xa')];
  let Kv = 0x1;
  if (-0x1 != Kr[Kd('0xb')]('\x0a')) {
    var Kw = Kr[Kd('0xc')]('\x0a');
    Kv = Kw['length'];
    let Kq = 0x0;
    for (var Ky = 0x0; Ky < Kv; Ky++) Kq = Math[Kd('0xd')](Kp[Kd('0x9')](Kw[Ky])['width'], Kq);
    Kt = Kq;
  }
  return Ks = null == Ks ? 0x1 : Ks, {'width': Kt + 0x2, 'height': Ku * Ks * Kv + Ku / 0x5};
};
var Kz = ['draw', 'style', 'width', 'height', 'strokeStyle', 'borderColor', 'gray', 'fillStyle', 'backgroundColor', 'rgba(255,0,0,0.68)', 'paintAlarmRect', 'restore', 'color', 'yellow', 'length', 'max', 'measureText', 'autoSize', 'resizeTo', 'TipNode', 'text', 'css', 'center', 'middle', 'spacing'];
!function (KA) {
  !function (KB) {
    for (; --KB;) KA['push'](KA['shift']());
  }(0x15a);
}(Kz);
var KC = function (KD, KE) {
  return Kz[KD = +KD];
};

class KF extends so {
  constructor(KG, KH, KI, KJ, KK) {
    super(KG, KH, KI, KJ, KK), null != KG && (this[KC('0x0')] = KG, this[KC('0x1')]({
      'textPosition': KC('0x2'),
      'textBaseline': KC('0x3')
    })), this[KC('0x4')] = 0x1;
  }

  [KC('0x5')](KL) {
    if (null != this[KC('0x0')] && '' != this[KC('0x0')]) {
      var KM = this[KC('0x6')];
      let KN = 0x0, KO = 0x0;
      var KP = this['spacing'], KS = Kg['getTextSize'](KL, KM, this[KC('0x0')], KP), KR = KS[KC('0x7')] + 0x3,
        KS = KS[KC('0x8')] + 0x3;
      KL['save'](), KL[KC('0x9')] = KM[KC('0xa')] || KC('0xb'), KL[KC('0xc')] = KM[KC('0xd')] || KC('0xe'), Kg[KC('0xf')](KL, KN, KO, KR, KS), KL[KC('0x10')]();
      let KT = '' + this[KC('0x0')], KU = KR;
      var KV = KS;
      if (KL[KC('0xc')] = KM[KC('0x11')] || KC('0x12'), -0x1 == KT['indexOf']('\x0a')) KL['fillText'](KT, KN, KO - KS); else {
        var KW = KT['split']('\x0a'), KX = KW[KC('0x13')];
        let KM = 0x0, KR = KO - KS;
        for (var L0 = 0x0; L0 < KX; L0++) KM = Math[KC('0x14')](KL[KC('0x15')](KW[L0])[KC('0x7')], KM), KL['fillText'](KW[L0], KN + 0x1, KR), KR += KV * KP;
        KU = KM;
      }
      0x1 == this[KC('0x16')] && this[KC('0x17')](KU + 0x2, KV * KP * 0x1 + KV / 0x5);
    }
  }
}

bN(KF['prototype'], {'className': {'value': KC('0x18'), 'writable': !0x1}});
var L1 = ['offsetWithAngle', 'updatePoints', 'offsetAZHandle', 'points', 'begin', 'fold1', 'middle', 'fold2', 'end', 'prototype', 'serializers', 'concat', 'offsetGap', 'getFold1', 'getFold2', 'direction', 'horizontal', 'atan2', 'beginOffset', 'endOffset'];
!function (L2) {
  !function (L3) {
    for (; --L3;) L2['push'](L2['shift']());
  }(0x86);
}(L1);
var L4 = function (L5, L6) {
  return L1[L5 = +L5];
};

class L7 extends yU {
  constructor(L8, L9, La, Lb, Lc) {
    super(L8, L9, La, Lb, Lc);
  }

  [L4('0x0')](Ld, Le) {
    var Lf = (Le['y'] - Ld['y']) / 0x2, Le = (Le['x'] - Ld['x']) / 0x2;
    return this['direction'] == c5['horizontal'] ? {'x': Ld['x'] + Le, 'y': Ld['y']} : {
      'x': Ld['x'],
      'y': Ld['y'] + Lf
    };
  }

  [L4('0x1')](Lh, Li) {
    var Lj = (Li['y'] - Lh['y']) / 0x2, Lh = (Li['x'] - Lh['x']) / 0x2;
    return this[L4('0x2')] == c5[L4('0x3')] ? {'x': Li['x'] - Lh, 'y': Li['y']} : {'x': Li['x'], 'y': Li['y'] - Lj};
  }

  ['offsetAZHandle'](Ll) {
    var Lm = Ll[0x0], Lq = Ll[0x1], Lr = Ll[0x2], Lp = Ll[0x4],
      Lq = Math[L4('0x4')](Lq['y'] - Lm['y'], Lq['x'] - Lm['x']),
      Lr = Math[L4('0x4')](Lr['y'] - Lp['y'], Lr['x'] - Lp['x']);
    null != this[L4('0x5')] && (Ll[0x0] = i8['offsetWithAngle'](Lm, Lq, this[L4('0x5')])), null != this[L4('0x6')] && (Ll[0x4] = i8[L4('0x7')](Lp, Lr, -this[L4('0x6')]));
  }

  [L4('0x8')]() {
    var Lw = this['calcAZ'](), Lt = Lw[0x0], Lx = Lw[0x1], Lv = this[L4('0x0')](Lt, Lx), Lw = this[L4('0x1')](Lt, Lx),
      Lx = [Lt, Lv, {'x': (Lv['x'] + Lw['x']) / 0x2, 'y': (Lv['y'] + Lw['y']) / 0x2}, Lw, Lx];
    return this['points'] = Lx, this[L4('0x9')](this[L4('0xa')]), Lx;
  }
}

const Ly = {};
Ly[c6[L4('0xb')]] = function () {
  return this['points'][0x0];
}, Ly[c6[L4('0xc')]] = function () {
  return this[L4('0xa')][0x1];
}, Ly[c6[L4('0xd')]] = function () {
  return this[L4('0xa')][0x2];
}, Ly[c6[L4('0xe')]] = function () {
  return this[L4('0xa')][0x3];
}, Ly[c6[L4('0xf')]] = function () {
  return this[L4('0xa')][0x4];
}, bN(L7['prototype'], {
  'className': {'value': 'FlexionalLink', 'writable': !0x1},
  'direction': {'value': c5['horizontal']},
  'offsetGap': {'value': 0x2c},
  'DefaultPositions': {'value': Ly},
  'serializers': {'value': yU[L4('0x10')][L4('0x11')][L4('0x12')]([L4('0x2'), L4('0x13')])}
});
var Lz = ['getParallelLine', 'translateNodesTo', 'getRootNodes', 'getAverageSize', 'travel', 'getNodesRect', 'setXYwithChildFixed', 'children', 'isLink', 'startY', 'centerX', 'centerY', 'animationTime', 'onLayoutAction', 'onStopAction', 'marginTop', 'marginRight', 'marginLeft', 'setMargin', 'marginBottom', 'startX', 'setCenter', 'setTime', 'offsetData', 'getCenter', 'getRect', 'forEach', 'translateWith', 'translate', 'translateTo', 'resolve', 'concat', 'animation', 'play', 'stop', 'onLayout', 'height', 'cos', 'sin', 'push', 'bottom', 'horizontal', 'vertical', 'layout', 'type', 'circle', 'max', 'length', 'beginAngle', 'endAngle', 'width', 'direction', 'grid', 'setCenterLocation', 'filter', 'end', 'target', 'begin', 'map', 'childs', 'Link\x27s\x20end\x20is\x20null!', 'Link\x27s\x20end.object\x20is\x20null!', 'isNode', 'outLinks'];
!function (LA) {
  !function (LB) {
    for (; --LB;) LA['push'](LA['shift']());
  }(0x10a);
}(Lz);
var LC = function (LD, LE) {
  return Lz[LD = +LD];
};

class LF {
  constructor() {
    this['startX'], this[LC('0x0')], this[LC('0x1')], this[LC('0x2')], this[LC('0x3')] = void 0x0, this[LC('0x4')] = void 0x0, this[LC('0x5')] = void 0x0, this[LC('0x6')], this[LC('0x7')], this['marginBottom'], this[LC('0x8')];
  }

  [LC('0x9')](LG, LH, LI, LJ) {
    return this[LC('0x7')] = LH, this[LC('0xa')] = LI, this[LC('0x6')] = LG, this['marginLeft'] = LJ, this;
  }

  ['setXY'](LK, LL) {
    return this[LC('0xb')] = LK, this[LC('0x0')] = LL, this;
  }

  [LC('0xc')](LM, LN) {
    return this[LC('0x1')] = LM, this[LC('0x2')] = LN, this;
  }

  [LC('0xd')](LO) {
    return this[LC('0x3')] = LO, this;
  }

  [LC('0xe')](LP) {
    let LQ = {'x': this[LC('0x1')], 'y': this['centerY']};
    if (null == this[LC('0xb')] && null == this[LC('0x1')]) {
      let LR = LP['getRect']();
      LQ = LR[LC('0xf')]();
    }
    if (null != LQ['x']) {
      let LS = LP[LC('0x10')]();
      var LT = LS[LC('0xf')]();
      let LU = LQ['x'] - LT['x'], LV = LQ['y'] - LT['y'];
      LP[LC('0x11')](LS => {
        LS[LC('0x12')](LU, LV);
      });
    }
  }

  [LC('0x13')](LX, LY) {
    if (null == this['animationTime']) return LY['forEach']((LY, M0) => {
      LX[M0][LC('0x14')](LY['x'], LY['y']);
    }), Promise[LC('0x15')]();
    const M1 = this[LC('0x4')];
    let M2 = [], M3 = [];
    LY['forEach']((LY, M1) => {
      M1 = LX[M1];
      M2 = M2[LC('0x16')]([M1['x'], M1['y']]), M3 = M3[LC('0x16')]([LY['x'], LY['y']]);
    });
    let M6 = new D9(M2, M3, this['animationTime'], M2 => {
      LX[LC('0x11')]((LY, M1) => {
        var LX = M2[0x2 * M1], M1 = M2[0x2 * M1 + 0x1];
        LY[LC('0x14')](LX, M1);
      }), M1 && M1();
    });
    return this[LC('0x17')] = M6, M6[LC('0x18')]();
  }

  [LC('0x19')]() {
    this[LC('0x17')] && this[LC('0x17')][LC('0x19')]();
  }

  [LC('0x1a')](Mc) {
    return this[LC('0x4')] = Mc, this;
  }
}

function Md(Me, Mf, Mg) {
  var Mh = Me[0x0];
  let Mi = Mf - Mh['x'], Mj = Mg - Mh['y'];
  Me['forEach'](function (Me) {
    Me['translateWith'](Mi, Mj);
  });
}

function Ml(Mm) {
  let Mn = 0x0, Mo = 0x0;
  return Mm[LC('0x11')](function (Mm) {
    Mn += Mm['width'], Mo += Mm[LC('0x1b')];
  }), {'width': Mn / Mm['length'], 'height': Mo / Mm['length']};
}

function Mq(Mr) {
  let Ms = [], Mt = Mr['filter'](function (Mr) {
    return Mr instanceof yU || (Ms[LC('0x1e')](Mr), !0x1);
  });
  return Mr = (Mr = Ms[LC('0x2d')](function (Mr) {
    for (var Ms = 0x0; Ms < Mt[LC('0x26')]; Ms++) if (Mt[Ms][LC('0x2e')][LC('0x2f')] === Mr) return !0x1;
    return !0x0;
  }))[LC('0x2d')](function (Mr) {
    for (var Ms = 0x0; Ms < Mt[LC('0x26')]; Ms++) if (Mt[Ms]['begin'][LC('0x2f')] === Mr) return !0x0;
    return !0x1;
  });
}

function Mz(MA, MB) {
  const MC = MA[LC('0x2d')](MA => MA instanceof yU && MA[LC('0x30')][LC('0x2f')] === MB && MA['end'][LC('0x2f')] instanceof so);
  return MC[LC('0x31')](MA => MA[LC('0x2e')][LC('0x2f')]);
}

function MF(MG) {
  let MH = MG[0x0][LC('0x10')]();
  for (let MI = 0x1; MI < MG[LC('0x26')]; MI++) MH = MH['union'](MG[MI][LC('0x10')]());
  return MH;
}

function MJ(MK) {
  return MF(MK)[LC('0xf')]();
}

function ML(MM, MN) {
  let MO = 0x1;
  return function MM(MN, MQ, MR) {
    MO < MR && (MO = MR);
    for (var MS = Mz(MN, MQ), MT = 0x0; MT < MS[LC('0x26')]; MT++) MM(MN, MS[MT], MR + 0x1);
  }(MM, MN, 0x0), MO;
}

function MU(MV, MW) {
  var MX = MV['outLinks'];
  if (null == MX) return 0x0;
  let MY = 0x0;
  for (var MZ = 0x0; MZ < MX[LC('0x26')]; MZ++) {
    var N0 = MX[MZ];
    if (null == N0[LC('0x2e')]) throw new Error(LC('0x33'));
    if (null == N0['end'][LC('0x2f')]) throw new Error(LC('0x34'));
    N0['end'][LC('0x2f')] == MW && MY++;
  }
  return MY;
}

function N1(N2, N3, N4, N5) {
  if (null == N5) N5 = new b8(); else if (N5['hasChild'](N2)) return;
  if (N3 && N3(N2, N4), N5['push'](N2), N2[LC('0x35')]) {
    var N6 = N2[LC('0x36')];
    if (null != N6) for (var N7 = 0x0; N7 < N6[LC('0x26')]; N7++) N1(N6[N7], N3, N2, N5);
  } else N2 instanceof yU && N1(N2[LC('0x2e')]['target'], N3, N4, N5);
  return N5;
}

LF[LC('0x37')] = pU, LF[LC('0x38')] = Md, LF[LC('0x39')] = Mq, LF['getSons'] = Mz, LF['getTreeDeep'] = ML, LF[LC('0x3a')] = Ml, LF['getLinksCount'] = MU, LF[LC('0x3b')] = N1, LF[LC('0x3c')] = MF, LF[LC('0xf')] = MJ, LF[LC('0x3d')] = function (N8, N9, Na) {
  var Nb = N8[LC('0x3e')];
  N8['x'] += N9, N8['y'] += Na;
  for (let N8 = 0x0; N8 < Nb[LC('0x26')]; N8++) {
    const Nd = Nb[N8];
    Nd[LC('0x3f')] || (Nd['x'] -= N9, Nd['y'] -= Na);
  }
};
var Ne = ['getRect', 'union', 'translateTo', 'addChild', 'parent', 'push', 'translateWithRecursive', 'translateWith', 'flatten', 'concat', 'toString', 'text', ':\x20\x09', 'map', 'join', 'width', 'height', 'children', 'object', 'fromObject', 'setObject', 'getChildrenRect'];
!function (Nf) {
  !function (Ng) {
    for (; --Ng;) Nf['push'](Nf['shift']());
  }(0x19c);
}(Ne);
var Nh = function (Ni, Nj) {
  return Ne[Ni = +Ni];
};

class Nk {
  constructor(Nl, Nm, Nn, No) {
    this['x'] = Nl, this['y'] = Nm, this[Nh('0x0')] = Nn, this[Nh('0x1')] = No, this['parent'] = null, this[Nh('0x2')] = new b8(), this[Nh('0x3')] = null;
  }

  [Nh('0x4')](Np) {
    this['object'] = Np, this['x'] = Np['x'], this['y'] = Np['y'], this[Nh('0x0')] = Np[Nh('0x0')], this[Nh('0x1')] = Np[Nh('0x1')];
  }

  [Nh('0x5')](Nq) {
    this[Nh('0x3')] = Nq;
  }

  ['getRect'](Nr) {
    if (Nr) {
      let Nr = new u(this['x'], this['y'], this[Nh('0x0')], this['height']);
      return Nr['union'](this['getChildrenRect'](!0x0));
    }
    return new u(this['x'], this['y'], this[Nh('0x0')], this['height']);
  }

  [Nh('0x6')](Nt) {
    let Nu = this[Nh('0x2')], Nv = Nu[0x0][Nh('0x7')](Nt);
    for (let Nw = 0x1; Nw < Nu['length']; Nw++) Nv = Nv[Nh('0x8')](Nu[Nw][Nh('0x7')](Nt));
    return Nv;
  }

  ['translateWith'](Nx, Ny) {
    this['x'] += Nx, this['y'] += Ny;
  }

  [Nh('0x9')](Nz, NA) {
    this['x'] = Nz, this['y'] = NA;
  }

  [Nh('0xa')](NB) {
    (NB[Nh('0xb')] = this)[Nh('0x2')][Nh('0xc')](NB);
  }

  [Nh('0xd')](NC, ND) {
    this[Nh('0xe')](NC, ND);
    let NE = this[Nh('0x2')];
    for (var NF = 0x0; NF < NE['length']; NF++) NE[NF]['translateWithRecursive'](NC, ND);
  }

  [Nh('0xf')](NG) {
    let NH = new b8();
    for (var NI, NJ = 0x0; NJ < this[Nh('0x2')]['length']; NJ++) {
      let NK = this['children'][NJ];
      null != NG && 0x1 != NG(NK) || (NH[Nh('0xc')](NK), NK['children'] && 0x0 < NK['children']['length'] && (NI = NK[Nh('0x2')][Nh('0xf')](NG), NH = NH[Nh('0x10')](NI)));
    }
    return NH;
  }

  [Nh('0x11')]() {
    return this[Nh('0x3')][Nh('0x12')] + Nh('0x13') + this[Nh('0xf')]()[Nh('0x14')](NL => NL['object'][Nh('0x12')])[Nh('0x15')](',');
  }
}

var NM = ['marginRight', 'marginBottom', 'startX', 'height', 'push', 'length', 'doLayout', 'isNode', 'cols', 'setSize', 'rows', 'getLayoutData', 'marginTop', 'marginLeft'];
!function (NN) {
  !function (NO) {
    for (; --NO;) NN['push'](NN['shift']());
  }(0xcd);
}(NM);
var NP = function (NQ, NR) {
  return NM[NQ = +NQ];
};

class NS extends LF {
  constructor(NT, NU) {
    super(), this['rows'] = NT, this[NP('0x0')] = NU;
  }

  [NP('0x1')](NV, NW) {
    return this[NP('0x2')] = NV, this[NP('0x0')] = NW, this;
  }

  [NP('0x3')](NX) {
    var NY = this['rows'], NZ = this[NP('0x0')], O0 = 0x0 | this[NP('0x4')], O1 = 0x0 | this[NP('0x5')],
      O2 = 0x0 | this[NP('0x6')], O3 = 0x0 | this[NP('0x7')], O4 = 0x0 | this[NP('0x8')], O5 = 0x0 | this['startY'],
      O6 = NX[0x0], O7 = O1 + O6['width'] + O2, O8 = O0 + O6[NP('0x9')] + O3;
    let O9 = new b8();
    for (var Oa = 0x0; Oa < NY; Oa++) {
      for (var Ob = 0x0; Ob < NZ; Ob++) {
        var Oc = O4 + O7 * Ob, Oe = O5 + O8 * Oa, Oe = new Nk(Oc, Oe, O7, O8);
        if (O9[NP('0xa')](Oe), O9[NP('0xb')] >= NX[NP('0xb')]) break;
      }
      if (O9[NP('0xb')] >= NX[NP('0xb')]) break;
    }
    return this['offsetData'](O9), O9;
  }

  [NP('0xc')](Of) {
    Of = Of['filter'](Of => Of[NP('0xd')]);
    var Oh = this[NP('0x3')](Of);
    return this['translate'](Of, Oh);
  }
}

var Oi = ['marginTop', 'marginLeft', 'marginBottom', 'width', 'centerX', 'beginAngle', 'length', 'forEach', 'cos', 'offsetData', 'doLayout', 'isNode', 'translate', 'setMinRadius', 'minRadius', 'setAngle', 'endAngle', 'getLayoutData', 'filter'];
!function (Oj) {
  !function (Ok) {
    for (; --Ok;) Oj['push'](Oj['shift']());
  }(0x105);
}(Oi);
var Ol = function (Om, On) {
  return Oi[Om = +Om];
};

class Oo extends LF {
  constructor() {
    super(), this['beginAngle'] = 0x0, this['endAngle'] = 0x2 * Math['PI'];
  }

  [Ol('0x0')](Op) {
    this[Ol('0x1')] = Op;
  }

  [Ol('0x2')](Oq, Or) {
    this['beginAngle'] = Oq, this[Ol('0x3')] = Or;
  }

  [Ol('0x4')](Os) {
    Os = Os[Ol('0x5')](function (Os) {
      return Os['isNode'];
    });
    var Ou = 0x0 | this[Ol('0x6')], Ov = 0x0 | this[Ol('0x7')], Ow = 0x0 | this['marginRight'],
      Ox = 0x0 | this[Ol('0x8')], Oy = Os[0x0];
    let Oz = Ov + Oy[Ol('0x9')] + Ow, OA = Ou + Oy['height'] + Ox, OB = 0x0 | this[Ol('0xa')],
      OC = 0x0 | this['centerY'], OD = this[Ol('0x1')], OE = (this['endAngle'] - this[Ol('0xb')]) / Os[Ol('0xc')],
      OF = new b8();
    return Os[Ol('0xd')](function (Os, Ou) {
      var Ov = Ou * OE, Ou = OB + Math[Ol('0xe')](Ov) * OD, Ov = OC + Math['sin'](Ov) * OD, Ov = new Nk(Ou, Ov, Oz, OA);
      OF['push'](Ov);
    }), this[Ol('0xf')](OF), OF;
  }

  [Ol('0x10')](OM) {
    OM = OM[Ol('0x5')](OM => OM[Ol('0x11')]);
    var OO = this[Ol('0x4')](OM);
    return this[Ol('0x12')](OM, OO);
  }
}

var OQ = ['startY', 'translateObject', 'allVirtualNodes', 'translate', 'direction', 'setDirection', 'indexData', 'maxDeep', 'getLeafs', 'marginRight', 'length', 'down', 'left', 'right', 'children', 'width', 'height', 'translateTo', 'abs', 'translateWithRecursive', 'centerX', 'centerY', 'startX', 'getCenter'];
!function (OR) {
  !function (OS) {
    for (; --OS;) OR['push'](OR['shift']());
  }(0xdd);
}(OQ);
var OT = function (OU, OV) {
  return OQ[OU = +OU];
};

class OW extends LF {
  constructor(OX) {
    super(), this[OT('0x0')] = OX || 'down';
  }

  [OT('0x1')](OY) {
    return this['direction'] = OY, this;
  }

  ['doLayout'](OZ) {
    var P0 = OZ[OT('0x2')], P1 = OZ[OT('0x3')], P2 = OZ[OT('0x4')](), P3 = this[OT('0x0')], P4 = this[OT('0x5')],
      P5 = this['marginBottom'];
    for (let P6 = 0x0; P6 < P2[OT('0x6')]; P6++) {
      let P0 = P2[P6], OZ = (P6 + 0x1) * (P4 + 0xa), P9 = P1 * P5;
      P3 == OT('0x7') || ('up' == P3 ? P9 = -P9 : P3 == OT('0x8') ? (OZ = -P1 * P5, P9 = (P6 + 0x1) * (P4 + 0xa)) : P3 == OT('0x9') && (OZ = P1 * P5, P9 = (P6 + 0x1) * (P4 + 0xa))), P0['translateTo'](OZ, P9);
    }
    for (let P2 = P1 - 0x1; 0x0 <= P2; P2--) {
      let P1 = P0[P2];
      for (let P6 = 0x0; P6 < P1[OT('0x6')]; P6++) {
        let P0 = P1[P6];
        var Pe = P0[OT('0xa')];
        let OZ = P0['x'], Pg = P0['y'];
        if (P3 == OT('0x7') ? Pg = P2 * P5 : 'up' == P3 ? Pg = -P2 * P5 : 'left' == P3 ? OZ = -P2 * P5 : P3 == OT('0x9') && (OZ = P2 * P5), 0x0 < Pe[OT('0x6')] ? 'down' == P3 || 'up' == P3 ? OZ = (Pe[0x0]['x'] + Pe[Pe[OT('0x6')] - 0x1]['x']) / 0x2 : P3 != OT('0x8') && P3 != OT('0x9') || (Pg = (Pe[0x0]['y'] + Pe[Pe[OT('0x6')] - 0x1]['y']) / 0x2) : 0x0 < P6 && (P3 == OT('0x7') || 'up' == P3 ? OZ = P1[P6 - 0x1]['x'] + P1[P6 - 0x1][OT('0xb')] + P4 : P3 != OT('0x8') && 'right' != P3 || (Pg = P1[P6 - 0x1]['y'] + P1[P6 - 0x1][OT('0xc')] + P4)), P0[OT('0xd')](OZ, Pg), 0x0 < P6) if ('down' == P3 || 'up' == P3) {
          if (P0['x'] < P1[P6 - 0x1]['x'] + P1[P6 - 0x1][OT('0xb')]) {
            var Ph = P1[P6 - 0x1]['x'] + P1[P6 - 0x1][OT('0xb')] + P4, Pi = Math[OT('0xe')](Ph - P0['x']);
            for (let P0 = P6; P0 < P1[OT('0x6')]; P0++) P1[P0][OT('0xf')](Pi, 0x0);
          }
        } else if ((P3 == OT('0x8') || 'right' == P3) && P0['y'] < P1[P6 - 0x1]['y'] + P1[P6 - 0x1][OT('0xc')]) {
          var Ph = P1[P6 - 0x1]['y'] + P1[P6 - 0x1][OT('0xc')] + P4, Pl = Math[OT('0xe')](Ph - P0['y']);
          for (let P0 = P6; P0 < P1['length']; P0++) P1[P0][OT('0xf')](0x0, Pl);
        }
      }
    }
    let Pn = {'x': this[OT('0x10')], 'y': this[OT('0x11')]};
    if (null == this[OT('0x12')] && null == this[OT('0x10')]) {
      let P0 = OZ['getRect']();
      Pn = P0[OT('0x13')]();
    }
    return null != Pn['x'] ? OZ['centerTo'](Pn['x'], Pn['y']) : null != this[OT('0x12')] && OZ[OT('0xd')](this[OT('0x12')], this[OT('0x14')]), this['translateObject'](OZ);
  }

  [OT('0x15')](Pp) {
    var Pq = Pp[OT('0x16')], Pp = Pp['allObjects'];
    return this[OT('0x17')](Pp, Pq);
  }
}

var Ps = ['beginPath', 'rect', 'stroke', 'mousePickupPath', 'paintText', 'defineProperties', 'prototype', 'VideoNode', 'concat', 'dirty', 'width', 'height', 'showCover', 'isPlaying', 'play', 'video', 'pause', 'setVideo', '_videoSrc', 'createVideo', 'onPause', 'addEventListener', 'onEnded', 'ended', 'draw'];
!function (Pt) {
  !function (Pu) {
    for (; --Pu;) Pt['push'](Pt['shift']());
  }(0xa0);
}(Ps);
var Pv = function (Pw, Px) {
  return Ps[Pw = +Pw];
};

class Py extends so {
  constructor(Pz, PA, PB, PC, PD) {
    super(), this[Pv('0x0')] = !0x0, this['text'] = Pz, this['x'] = PA || 0x0, this['y'] = PB || 0x0, this[Pv('0x1')] = PC || 0x0, this[Pv('0x2')] = PD || 0x0;
  }

  [Pv('0x3')]() {
    this[Pv('0x4')] = !0x1;
  }

  [Pv('0x5')]() {
    this['isPlaying'] = !0x0, this[Pv('0x6')][Pv('0x5')]();
  }

  [Pv('0x7')]() {
    this[Pv('0x6')]['pause']();
  }

  [Pv('0x8')](PE) {
    this[Pv('0x9')] = PE, this[Pv('0x6')] = tu[Pv('0xa')](PE, function () {
    }), this[Pv('0x6')]['width'] = this['width'], this[Pv('0x6')][Pv('0x2')] = this[Pv('0x2')];
  }

  ['onPlay'](PF) {
    this[Pv('0x6')]['addEventListener'](Pv('0x5'), PF, !0x1);
  }

  [Pv('0xb')](PG) {
    this[Pv('0x6')][Pv('0xc')](Pv('0x7'), PG, !0x1);
  }

  [Pv('0xd')](PH) {
    this['video'][Pv('0xc')](Pv('0xe'), PH, !0x1);
  }

  [Pv('0xf')](PJ) {
    var PK;
    PJ[Pv('0x10')](), PJ[Pv('0x11')](0x0, 0x0, this[Pv('0x1')], this['height']), null != this[Pv('0x6')] ? (this[Pv('0x6')][Pv('0x1')] != this[Pv('0x1')] && (this['video'][Pv('0x1')] = this[Pv('0x1')], this[Pv('0x6')][Pv('0x2')] = this[Pv('0x2')]), null != (PK = this['isPlaying'] ? this['video'] : this['image']) && PJ['drawImage'](PK, 0x0, 0x0, this['width'], this[Pv('0x2')])) : PJ[Pv('0x12')](), this[Pv('0x13')](PJ), this[Pv('0x14')](PJ);
  }
}

Object[Pv('0x15')](Py[Pv('0x16')], {
  'videoSrc': {
    'get'() {
      return this[Pv('0x9')];
    }, 'set'(PL) {
      this['setVideo'](PL);
    }
  }
}), bN(Py['prototype'], {
  'className': {'value': Pv('0x17'), 'writable': !0x1},
  'video': {},
  '_videoSrc': {},
  'isPlaying': {'value': !0x1},
  'serializers': {'value': so[Pv('0x16')]['serializers'][Pv('0x18')](['isPlaying', 'videoSrc'])}
});
var PM = ['originWeight', 'mass', 'addNode', 'speed', 'gravity', 'maxForceDistance', 'nodes', 'edges', 'originEdges', 'force', 'selectedNode', 'log', 'neighbors', 'applyForce', 'length', 'calculate', 'repulsiveForce', 'push', 'sqrt', 'frame_width', 'frame_height', 'origin', 'initialize', 'initNodes', 'prototype', 'travel', 'setOriginEdgeWeight'];
!function (PN) {
  !function (PO) {
    for (; --PO;) PN['push'](PN['shift']());
  }(0x106);
}(PM);
var PP = function (PR, PS) {
  return PM[PR = +PR];
}, PQ = function () {
};

function PT(PU, PV, PW) {
  this[PP('0x1')] = PV, this[PP('0x2')] = PW, this[PP('0x3')] = PU, this[PP('0x4')](), this[PP('0x5')](PU);
}

PQ['prototype'] = {
  'calculate': function (PX, PY) {
    this['dx'] = PX['x'] - PY['x'], this['dy'] = PX['y'] - PY['y'], this['d2'] = this['dx'] * this['dx'] + this['dy'] * this['dy'], this['d'] = Math[PP('0x0')](this['d2']);
  }
}, PT[PP('0x6')] = {
  'initNodes': function (PZ) {
    let Q0 = this;
    LF[PP('0x7')](PZ, function (Q1, Q2) {
      var Q3;
      Q1['isNode'] && null != Q2 && (Q3 = Q1, (Q1 = Q2) == PZ && Q0[PP('0x8')](Q3, Q0[PP('0x9')]), Q2 = 0x1 | Q3[PP('0xa')], Q0[PP('0xb')](Q3, Q2), Q0['addLink'](Q1, Q3, 0x1e));
    });
  }, 'initialize': function () {
    this[PP('0x9')] = 0x30, this[PP('0xc')] = 0xc, this[PP('0xd')] = 0x32, this[PP('0xe')] = 0x200, this[PP('0xf')] = new Array(), this[PP('0x10')] = new Array(), this[PP('0x11')] = new Array();
  }, 'originForce': function (Q4, Q5) {
    if (this[PP('0x11')][Q4['id']]) Q4['id'] != this['selectedNode'] && (Q7 = this[PP('0x11')][Q4['id']], Q7 = (Q5['d'] - Q7) / Q7, Q4[PP('0x12')]['x'] += Q7 * (Q5['dx'] / Q5['d']), Q4[PP('0x12')]['y'] += Q7 * (Q5['dy'] / Q5['d'])); else if (Q4['id'] != this[PP('0x13')]) {
      let Q6 = this[PP('0xd')] * Q4[PP('0xa')] * this[PP('0x3')][PP('0xa')] / Q5['d2'];
      var Q7 = this[PP('0xe')] - Q5['d'];
      0x0 < Q7 && (Q6 *= Math[PP('0x14')](Q7)), Q6 < 0x400 && (Q4['force']['x'] -= Q6 * Q5['dx'] / Q5['d'], Q4[PP('0x12')]['y'] -= Q6 * Q5['dy'] / Q5['d']);
    }
  }, 'attractiveForce': function (Q8, Q9, Qa) {
    var Qb = this[PP('0x10')][Q8['id']][Q9['id']];
    (Qb += 0x3 * (Q8[PP('0x15')] + Q9[PP('0x15')])) && (Qb = (Qa['d'] - Qb) / Qb, Q8['id'] != this['selectedNode'] && (Q8[PP('0x12')]['x'] -= Qb * Qa['dx'] / Qa['d'], Q8[PP('0x12')]['y'] -= Qb * Qa['dy'] / Qa['d']), Q9['id'] != this[PP('0x13')] && (Q9[PP('0x12')]['x'] += Qb * Qa['dx'] / Qa['d'], Q9[PP('0x12')]['y'] += Qb * Qa['dy'] / Qa['d']));
  }, 'repulsiveForce': function (Qc, Qd, Qe) {
    let Qf = this[PP('0xd')] * Qc[PP('0xa')] * Qd['mass'] / Qe['d2'];
    Qd = this['maxForceDistance'] - Qe['d'];
    0x0 < Qd && (Qf *= Math['log'](Qd)), Qf < 0x400 && (Qc[PP('0x12')]['x'] += Qf * Qe['dx'] / Qe['d'], Qc[PP('0x12')]['y'] += Qf * Qe['dy'] / Qe['d']);
  }, 'doLayout': function () {
    this[PP('0x16')]();
  }, 'applyForce': function () {
    for (var Qg = 0x0; Qg < this[PP('0xf')][PP('0x17')]; Qg++) {
      let Qh = this[PP('0xf')][Qg];
      for (var Qi = 0x0; Qi < this['nodes'][PP('0x17')]; Qi++) if (Qg != Qi) {
        var Qj = this[PP('0xf')][Qi];
        let Qk = new PQ();
        Qk[PP('0x18')](Qh, Qj), null != this['getLink'](Qh['id'], Qj['id']) && this['attractiveForce'](Qh, Qj, Qk), Qg != this['selectedNode'] && this[PP('0x19')](Qh, Qj, Qk);
      }
      let Ql = new PQ();
      Ql[PP('0x18')](this[PP('0x3')], Qh), this['originForce'](Qh, Ql), Qh[PP('0x12')]['x'] *= this[PP('0xc')], Qh[PP('0x12')]['y'] *= this[PP('0xc')], Qh['x'] += Qh[PP('0x12')]['x'], Qh['y'] += Qh[PP('0x12')]['y'], Qh[PP('0x12')]['x'] = 0x0, Qh[PP('0x12')]['y'] = 0x0;
    }
  }, 'bounds': function (Qm) {
    var Qn = Qm['x'], Qo = Qm['x'] + 0x1c, Qp = Qm['y'], Qq = Qm['y'] + 0x1c;
    Qn < 0x0 && (Qm['x'] = 0x0), Qp < 0x0 && (Qm['y'] = 0x0), Qo > this[PP('0x1')] && (Qm['x'] = this[PP('0x1')] - 0x1c), Qq > this[PP('0x2')] && (Qm['y'] = this[PP('0x2')] - 0x1c);
  }, 'setOriginEdgeWeight': function (Qr, Qs) {
    this['originEdges'][Qr['id']] = Qs;
  }, 'addNode': function (Qt, Qu) {
    Qt[PP('0xa')] = 0x1 | Qu, Qt[PP('0x15')] = 0x0 | Qt[PP('0x15')], Qt['force'] = {
      'x': 0x0,
      'y': 0x0
    }, this['nodes'][PP('0x1a')](Qt);
  }, 'getLink': function (Qv, Qw) {
    Qv = this[PP('0x10')][Qv];
    return null == Qv ? null : Qv[Qw];
  }, 'addLink': function (Qx, Qy, Qz) {
    this[PP('0x10')][Qx['id']] || (this[PP('0x10')][Qx['id']] = new Object()), this[PP('0x10')][Qx['id']][Qy['id']] = Qz;
    try {
      Qx[PP('0x15')]++, Qy[PP('0x15')]++;
    } catch (QA) {
      console[PP('0x14')]('Error\x20Adding\x20Edge:\x20' + QA);
    }
  }
};
var QB = ['setPath', 'path', 'draw', 'stroke', 'fill', 'prototype', 'ShapeNode'];
!function (QC) {
  !function (QD) {
    for (; --QD;) QC['push'](QC['shift']());
  }(0x7f);
}(QB);
var QE = function (QF, QG) {
  return QB[QF = +QF];
};

class QH extends so {
  constructor(QI, QJ, QK, QL, QM) {
    super(QI, QJ, QK, QL, QM);
  }

  [QE('0x0')](QN) {
    this[QE('0x1')] = QN;
  }

  [QE('0x2')](QO) {
    null != this[QE('0x1')] && (QO[QE('0x3')](this[QE('0x1')]), QO[QE('0x4')](this[QE('0x1')]), this['mousePickupPath'](QO, this[QE('0x1')]), this['paintText'](QO));
  }
}

bN(QH[QE('0x5')], {'className': {'value': QE('0x6'), 'writable': !0x1}});
var QP = ['#8A2BE2', '#A52A2A', '#DEB887', '#5F9EA0', '#FF7F50', '#6495ED', '#FFF8DC', '#DC143C', '#00008B', '#008B8B', '#B8860B', '#A9A9A9', '#BDB76B', '#8B008B', '#556B2F', '#FF8C00', '#9932CC', '#8B0000', '#E9967A', '#483D8B', '#00CED1', '#9400D3', '#FF1493', '#00BFFF', '#696969', '#1E90FF', '#B22222', '#FFFAF0', '#228B22', '#FF00FF', '#F8F8FF', '#FFD700', '#808080', '#008000', '#ADFF2F', '#F0FFF0', '#FF69B4', '#CD5C5C', '#4B0082', '#FFFFF0', '#F0E68C', '#E6E6FA', '#FFF0F5', '#7CFC00', '#FFFACD', '#ADD8E6', '#F08080', '#FAFAD2', '#D3D3D3', '#90EE90', '#FFB6C1', '#FFA07A', '#20B2AA', '#778899', '#B0C4DE', '#FFFFE0', '#00FF00', '#32CD32', '#FAF0E6', '#800000', '#66CDAA', '#0000CD', '#BA55D3', '#9370DB', '#3CB371', '#7B68EE', '#48D1CC', '#C71585', '#191970', '#FFE4E1', '#000080', '#FDF5E6', '#808000', '#6B8E23', '#FFA500', '#FF4500', '#DA70D6', '#EEE8AA', '#98FB98', '#AFEEEE', '#DB7093', '#CD853F', '#FFC0CB', '#800080', '#FF0000', '#BC8F8F', '#8B4513', '#FA8072', '#F4A460', '#2E8B57', '#A0522D', '#C0C0C0', '#6A5ACD', '#708090', '#FFFAFA', '#00FF7F', '#4682B4', '#D2B48C', '#008080', '#D8BFD8', '#FF6347', '#40E0D0', '#EE82EE', '#F5DEB3', '#FFFFFF', '#F5F5F5', '#FFFF00', '#9ACD32', 'random', 'length', 'getScheme', '#475164', '#2d2e36', '#FA7E23', '#2bae85', '#248067', '#12A182', '#0f1423', '#4E7ca1', '#2474b5', '#2775B6', '#346c9c', '#61649f', '#C06f98', '#7e2065', '#681752', '#EE3f4d', '#C02c38', '#dcb375', '#ca7d61', '#8e8b86', '#D73417', '#FDD163', '#35aeff', '#5ae292', '#ff63b3', '#166E84', '#97893f', '#d84870', '#f18851', '#32510E', '#24653E', '#f0ac68', '#203046', '#707556', '#567f4f', '#f4642b', '#e85827', '#fb991c', '#fdbc3a', '#ffdc99', '#15838a', '#3fb9c1', '#d2Dfb2', '#cb8a2a', '#d2865a', '#b6ca98', '#ebe0c4', 'setRGB', 'set', 'prototype', 'copy', 'setHex', 'string', 'setStyle', 'floor', 'test', 'exec', 'min', 'sqrt', '000000', 'toString', 'max', 'toFixed', 'rgba(', 'rgb(', 'getHSL', 'setHSL', '#FAEBD7', '#00FFFF', '#F0FFFF', '#FFE4C4', '#0000FF'];
!function (QQ) {
  !function (QR) {
    for (; --QR;) QQ['push'](QQ['shift']());
  }(0x1de);
}(QP);
var QS = function (QV, QW) {
    return QP[QV = +QV];
  },
  QT = [QS('0x0'), QS('0x1'), QS('0x2'), '#FF9900', '#FED71A', QS('0x3'), QS('0x4'), QS('0x5'), '#5e5314', '#1ba784', QS('0x6'), QS('0x7'), QS('0x8'), QS('0x9'), QS('0xa'), QS('0xb'), QS('0xc'), QS('0xd'), QS('0xe'), QS('0xf'), QS('0x10')],
  QU = [QT, [QS('0x11'), '#c5aa99', QS('0x12'), QS('0x13'), '#ccbbaa'], [QS('0x14'), QS('0x15'), '#3586E3'], [QS('0x16'), QS('0x17'), QS('0x18'), '#f4a146', '#f7e853'], [QS('0x19'), QS('0x1a'), QS('0x1b'), QS('0x1c'), '#f3ca43'], [QS('0x1d'), QS('0x1e'), '#3c968a', '#d7d351', QS('0x1f')], [QS('0x20'), QS('0x21'), QS('0x22'), QS('0x23'), '#f6d82c'], [QS('0x24'), QS('0x25'), QS('0x26'), '#ffde5f', QS('0x27')], [QS('0x28'), QS('0x29'), '#7ed1d2', QS('0x2a'), '#ffe99b'], ['#6a4307', QS('0x2b'), QS('0x2c'), QS('0x2d'), QS('0x2e')]];

function QX(QY) {
  return 0x3 === arguments['length'] ? this[QS('0x2f')](QY, arguments[0x1], arguments[0x2]) : this[QS('0x30')](QY);
}

QX[QS('0x31')] = {
  'constructor': QX, 'r': 0x1, 'g': 0x1, 'b': 0x1, 'o': 0x1, 'set': function (QZ) {
    return QZ instanceof QX ? this[QS('0x32')](QZ) : 'number' == typeof QZ ? this[QS('0x33')](QZ) : typeof QZ === QS('0x34') && this[QS('0x35')](QZ), this;
  }, 'setHex': function (R0) {
    return R0 = Math[QS('0x36')](R0), this['r'] = (R0 >> 0x10 & 0xff) / 0xff, this['g'] = (R0 >> 0x8 & 0xff) / 0xff, this['b'] = (0xff & R0) / 0xff, this;
  }, 'setRGB': function (R1, R2, R3) {
    return this['r'] = R1, this['g'] = R2, this['b'] = R3, this;
  }, 'setHSL': function (R4, R5, R6) {
    var R7;
    return 0x0 === R5 ? this['r'] = this['g'] = this['b'] = R6 : (this['r'] = (R7 = function (R4, R5, R6) {
      return R6 < 0x0 && (R6 += 0x1), 0x1 < R6 && --R6, R6 < 0x1 / 0x6 ? R4 + 0x6 * (R5 - R4) * R6 : R6 < 0.5 ? R5 : R6 < 0x2 / 0x3 ? R4 + 0x6 * (R5 - R4) * (0x2 / 0x3 - R6) : R4;
    })(R5 = 0x2 * R6 - (R6 = R6 <= 0.5 ? R6 * (0x1 + R5) : R6 + R5 - R6 * R5), R6, R4 + 0x1 / 0x3), this['g'] = R7(R5, R6, R4), this['b'] = R7(R5, R6, R4 - 0x1 / 0x3)), this;
  }, 'setStyle': function (Rb) {
    if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i[QS('0x37')](Rb)) {
      var Rc = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i[QS('0x38')](Rb);
      return this['r'] = Math[QS('0x39')](0xff, parseInt(Rc[0x1], 0xa)) / 0xff, this['g'] = Math[QS('0x39')](0xff, parseInt(Rc[0x2], 0xa)) / 0xff, this['b'] = Math[QS('0x39')](0xff, parseInt(Rc[0x3], 0xa)) / 0xff, this;
    }
    if (/^rgba\((\d+),?(\d+),?(\d+),?(\S+)\)$/i['test'](Rb)) {
      var Rd = /^rgba\((\d+),?(\d+),?(\d+),?(\S+)\)$/i[QS('0x38')](Rb);
      return this['r'] = Math[QS('0x39')](0xff, parseInt(Rd[0x1], 0xa)) / 0xff, this['g'] = Math[QS('0x39')](0xff, parseInt(Rd[0x2], 0xa)) / 0xff, this['b'] = Math[QS('0x39')](0xff, parseInt(Rd[0x3], 0xa)) / 0xff, this['o'] = parseInt(Rd[0x4]), this;
    }
    if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i['test'](Rb)) {
      Rd = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i[QS('0x38')](Rb);
      return this['r'] = Math[QS('0x39')](0x64, parseInt(Rd[0x1], 0xa)) / 0x64, this['g'] = Math['min'](0x64, parseInt(Rd[0x2], 0xa)) / 0x64, this['b'] = Math[QS('0x39')](0x64, parseInt(Rd[0x3], 0xa)) / 0x64, this;
    }
    if (/^\#([0-9a-f]{6})$/i[QS('0x37')](Rb)) {
      var Re = /^\#([0-9a-f]{6})$/i[QS('0x38')](Rb);
      return this[QS('0x33')](parseInt(Re[0x1], 0x10)), this;
    }
    if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i['test'](Rb)) {
      Re = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i[QS('0x38')](Rb);
      return this['setHex'](parseInt(Re[0x1] + Re[0x1] + Re[0x2] + Re[0x2] + Re[0x3] + Re[0x3], 0x10)), this;
    }
    if (/^(\w+)$/i[QS('0x37')](Rb)) return this[QS('0x33')](RK[Rb]), this;
  }, 'copy': function (Rf) {
    return this['r'] = Rf['r'], this['g'] = Rf['g'], this['b'] = Rf['b'], this;
  }, 'copyGammaToLinear': function (Rg) {
    return this['r'] = Rg['r'] * Rg['r'], this['g'] = Rg['g'] * Rg['g'], this['b'] = Rg['b'] * Rg['b'], this;
  }, 'copyLinearToGamma': function (Rh) {
    return this['r'] = Math['sqrt'](Rh['r']), this['g'] = Math[QS('0x3a')](Rh['g']), this['b'] = Math[QS('0x3a')](Rh['b']), this;
  }, 'convertGammaToLinear': function () {
    var Ri = this['r'], Rj = this['g'], Rk = this['b'];
    return this['r'] = Ri * Ri, this['g'] = Rj * Rj, this['b'] = Rk * Rk, this;
  }, 'convertLinearToGamma': function () {
    return this['r'] = Math[QS('0x3a')](this['r']), this['g'] = Math['sqrt'](this['g']), this['b'] = Math[QS('0x3a')](this['b']), this;
  }, 'getHex': function () {
    return 0xff * this['r'] << 0x10 ^ 0xff * this['g'] << 0x8 ^ 0xff * this['b'] << 0x0;
  }, 'getHexString': function () {
    return (QS('0x3b') + this['getHex']()[QS('0x3c')](0x10))['slice'](-0x6);
  }, 'getHSL': function (Rl) {
    let Rm = Rl || {'h': 0x0, 's': 0x0, 'l': 0x0};
    var Rn = this['r'], Ro = this['g'], Rp = this['b'], Rq = Math[QS('0x3d')](Rn, Ro, Rp), Rr = Math['min'](Rn, Ro, Rp);
    let Rs, Rt;
    Rl = (Rr + Rq) / 0x2;
    if (Rr === Rq) Rs = 0x0, Rt = 0x0; else {
      var Ru = Rq - Rr;
      switch (Rt = Rl <= 0.5 ? Ru / (Rq + Rr) : Ru / (0x2 - Rq - Rr), Rq) {
        case Rn:
          Rs = (Ro - Rp) / Ru + (Ro < Rp ? 0x6 : 0x0);
          break;
        case Ro:
          Rs = (Rp - Rn) / Ru + 0x2;
          break;
        case Rp:
          Rs = (Rn - Ro) / Ru + 0x4;
      }
      Rs /= 0x6;
    }
    return Rm['h'] = Rs, Rm['s'] = Rt, Rm['l'] = Rl, Rm;
  }, 'getStyle': function (Rv) {
    return null != Rv ? (Rv = Rv[QS('0x3e')](0x1), QS('0x3f') + (0xff * this['r'] | 0x0) + ',' + (0xff * this['g'] | 0x0) + ',' + (0xff * this['b'] | 0x0) + ',' + Rv + ')') : QS('0x40') + (0xff * this['r'] | 0x0) + ',' + (0xff * this['g'] | 0x0) + ',' + (0xff * this['b'] | 0x0) + ')';
  }, 'offsetHSL': function (Rw, Rx, Ry) {
    let Rz = this[QS('0x41')]();
    return Rz['h'] += Rw, Rz['s'] += Rx, Rz['l'] += Ry, this[QS('0x42')](Rz['h'], Rz['s'], Rz['l']), this;
  }, 'add': function (RA) {
    return this['r'] += RA['r'], this['g'] += RA['g'], this['b'] += RA['b'], this;
  }, 'addColors': function (RB, RC) {
    return this['r'] = RB['r'] + RC['r'], this['g'] = RB['g'] + RC['g'], this['b'] = RB['b'] + RC['b'], this;
  }, 'addScalar': function (RD) {
    return this['r'] += RD, this['g'] += RD, this['b'] += RD, this;
  }, 'multiply': function (RE) {
    return this['r'] *= RE['r'], this['g'] *= RE['g'], this['b'] *= RE['b'], this;
  }, 'multiplyScalar': function (RF) {
    return this['r'] *= RF, this['g'] *= RF, this['b'] *= RF, this;
  }, 'lerp': function (RG, RH) {
    return this['r'] += (RG['r'] - this['r']) * RH, this['g'] += (RG['g'] - this['g']) * RH, this['b'] += (RG['b'] - this['b']) * RH, this;
  }, 'equals': function (RI) {
    return RI['r'] === this['r'] && RI['g'] === this['g'] && RI['b'] === this['b'];
  }, 'fromArray': function (RJ) {
    return this['r'] = RJ[0x0], this['g'] = RJ[0x1], this['b'] = RJ[0x2], this;
  }, 'toArray': function () {
    return [this['r'], this['g'], this['b']];
  }, 'clone': function () {
    return new QX()[QS('0x2f')](this['r'], this['g'], this['b']);
  }
};
const RK = {
  'aliceblue': '#F0F8FF',
  'antiquewhite': QS('0x43'),
  'aqua': QS('0x44'),
  'aquamarine': '#7FFFD4',
  'azure': QS('0x45'),
  'beige': '#F5F5DC',
  'bisque': QS('0x46'),
  'black': '#000000',
  'blanchedalmond': '#FFEBCD',
  'blue': QS('0x47'),
  'blueviolet': QS('0x48'),
  'brown': QS('0x49'),
  'burlywood': QS('0x4a'),
  'cadetblue': QS('0x4b'),
  'chartreuse': '#7FFF00',
  'chocolate': '#D2691E',
  'coral': QS('0x4c'),
  'cornflowerblue': QS('0x4d'),
  'cornsilk': QS('0x4e'),
  'crimson': QS('0x4f'),
  'cyan': QS('0x44'),
  'darkblue': QS('0x50'),
  'darkcyan': QS('0x51'),
  'darkgoldenrod': QS('0x52'),
  'darkgray': QS('0x53'),
  'darkgreen': '#006400',
  'darkgrey': '#A9A9A9',
  'darkkhaki': QS('0x54'),
  'darkmagenta': QS('0x55'),
  'darkolivegreen': QS('0x56'),
  'darkorange': QS('0x57'),
  'darkorchid': QS('0x58'),
  'darkred': QS('0x59'),
  'darksalmon': QS('0x5a'),
  'darkseagreen': '#8FBC8F',
  'darkslateblue': QS('0x5b'),
  'darkslategray': '#2F4F4F',
  'darkslategrey': '#2F4F4F',
  'darkturquoise': QS('0x5c'),
  'darkviolet': QS('0x5d'),
  'deeppink': QS('0x5e'),
  'deepskyblue': QS('0x5f'),
  'dimgray': QS('0x60'),
  'dimgrey': '#696969',
  'dodgerblue': QS('0x61'),
  'firebrick': QS('0x62'),
  'floralwhite': QS('0x63'),
  'forestgreen': QS('0x64'),
  'fuchsia': QS('0x65'),
  'gainsboro': '#DCDCDC',
  'ghostwhite': QS('0x66'),
  'gold': QS('0x67'),
  'goldenrod': '#DAA520',
  'gray': QS('0x68'),
  'green': QS('0x69'),
  'greenyellow': QS('0x6a'),
  'grey': QS('0x68'),
  'honeydew': QS('0x6b'),
  'hotpink': QS('0x6c'),
  'indianred': QS('0x6d'),
  'indigo': QS('0x6e'),
  'ivory': QS('0x6f'),
  'khaki': QS('0x70'),
  'lavender': QS('0x71'),
  'lavenderblush': QS('0x72'),
  'lawngreen': QS('0x73'),
  'lemonchiffon': QS('0x74'),
  'lightblue': QS('0x75'),
  'lightcoral': QS('0x76'),
  'lightcyan': '#E0FFFF',
  'lightgoldenrodyellow': QS('0x77'),
  'lightgray': QS('0x78'),
  'lightgreen': QS('0x79'),
  'lightgrey': QS('0x78'),
  'lightpink': QS('0x7a'),
  'lightsalmon': QS('0x7b'),
  'lightseagreen': QS('0x7c'),
  'lightskyblue': '#87CEFA',
  'lightslategray': QS('0x7d'),
  'lightslategrey': QS('0x7d'),
  'lightsteelblue': QS('0x7e'),
  'lightyellow': QS('0x7f'),
  'lime': QS('0x80'),
  'limegreen': QS('0x81'),
  'linen': QS('0x82'),
  'magenta': '#FF00FF',
  'maroon': QS('0x83'),
  'mediumaquamarine': QS('0x84'),
  'mediumblue': QS('0x85'),
  'mediumorchid': QS('0x86'),
  'mediumpurple': QS('0x87'),
  'mediumseagreen': QS('0x88'),
  'mediumslateblue': QS('0x89'),
  'mediumspringgreen': '#00FA9A',
  'mediumturquoise': QS('0x8a'),
  'mediumvioletred': QS('0x8b'),
  'midnightblue': QS('0x8c'),
  'mintcream': '#F5FFFA',
  'mistyrose': QS('0x8d'),
  'moccasin': '#FFE4B5',
  'navajowhite': '#FFDEAD',
  'navy': QS('0x8e'),
  'oldlace': QS('0x8f'),
  'olive': QS('0x90'),
  'olivedrab': QS('0x91'),
  'orange': QS('0x92'),
  'orangered': QS('0x93'),
  'orchid': QS('0x94'),
  'palegoldenrod': QS('0x95'),
  'palegreen': QS('0x96'),
  'paleturquoise': QS('0x97'),
  'palevioletred': QS('0x98'),
  'papayawhip': '#FFEFD5',
  'peachpuff': '#FFDAB9',
  'peru': QS('0x99'),
  'pink': QS('0x9a'),
  'plum': '#DDA0DD',
  'powderblue': '#B0E0E6',
  'purple': QS('0x9b'),
  'red': QS('0x9c'),
  'rosybrown': QS('0x9d'),
  'royalblue': '#4169E1',
  'saddlebrown': QS('0x9e'),
  'salmon': QS('0x9f'),
  'sandybrown': QS('0xa0'),
  'seagreen': QS('0xa1'),
  'seashell': '#FFF5EE',
  'sienna': QS('0xa2'),
  'silver': QS('0xa3'),
  'skyblue': '#87CEEB',
  'slateblue': QS('0xa4'),
  'slategray': QS('0xa5'),
  'slategrey': '#708090',
  'snow': QS('0xa6'),
  'springgreen': QS('0xa7'),
  'steelblue': QS('0xa8'),
  'tan': QS('0xa9'),
  'teal': QS('0xaa'),
  'thistle': QS('0xab'),
  'tomato': QS('0xac'),
  'turquoise': QS('0xad'),
  'violet': QS('0xae'),
  'wheat': QS('0xaf'),
  'white': QS('0xb0'),
  'whitesmoke': QS('0xb1'),
  'yellow': QS('0xb2'),
  'yellowgreen': QS('0xb3')
};

function RL(RM) {
  return null != RM ? QX[QS('0xb4')](QX[QS('0xb6')](RM)) : QX[QS('0xb4')]();
}

QX['random'] = function (RN) {
  return (RN = null == RN ? QT : RN)[Math[QS('0xb4')]() * RN['length'] | 0x0];
}, QX['randomScheme'] = function () {
  var RO = Math[QS('0xb4')]() * QU[QS('0xb5')] | 0x0;
  return QU[RO];
}, QX['getScheme'] = function (RP) {
  return QU[RP];
};
var RQ = ['height', 'resizeTo', 'getChildren', 'length', 'MAX_SAFE_INTEGER', 'MIN_SAFE_INTEGER', 'isLink', 'width'];
!function (RR) {
  !function (RS) {
    for (; --RS;) RR['push'](RR['shift']());
  }(0x83);
}(RQ);
var RT = function (RU, RV) {
  return RQ[RU = +RU];
};

class RW {
  ['doLayout'](RX) {
    if (0x0 != RX[RT('0x0')]()[RT('0x1')]) {
      let RY = Number[RT('0x2')], RZ = Number[RT('0x3')], S0 = Number[RT('0x2')], S1 = Number[RT('0x3')];
      var S2 = RX[RT('0x0')]();
      for (let RX = 0x0; RX < S2['length']; RX++) {
        var S4 = S2[RX];
        S4[RT('0x4')] || (S4['x'] < RY && (RY = S4['x']), S4['x'] + S4[RT('0x5')] > RZ && (RZ = S4['x'] + S4[RT('0x5')]), S4['y'] < S0 && (S0 = S4['y']), S4['y'] + S4[RT('0x6')] > S1 && (S1 = S4['y'] + S4['height']));
      }
      RX[RT('0x7')](RZ - RY, S1 - S0), LF['setXYwithChildFixed'](RX, RY, S0);
    }
  }
}

var S5 = ['_stepSize', 'sizeWith', 'getDistance', 'sqrt', 'init', '_position', 'marks', 'addAction', '_actions', 'push', 'mark', 'mark\x27s\x20name\x20is\x20required.', 'getMark', 'faceToMark', 'faceTo', 'moveToMark', 'moveTo', 'forwardToMarks', 'length', 'forwardTo', 'updateDxy', '_direction', 'cos', 'sin', 'atan2', 'forward', 'jump', 'moveToMiddle', 'turnLeft', 'turnRight'];
!function (S6) {
  !function (S7) {
    for (; --S7;) S6['push'](S6['shift']());
  }(0x9b);
}(S5);
var S8 = function (S9, Sa) {
  return S5[S9 = +S9];
};

class Sb {
  constructor() {
    this[S8('0x0')]();
  }

  ['init']() {
    return this[S8('0x1')] = {'x': 0x0, 'y': 0x0}, this['_actions'] = [], this[S8('0x2')] = {}, this;
  }

  [S8('0x3')](Sc, Sd) {
    Sd = {'name': Sc, 'args': Sd};
    return this[S8('0x4')][S8('0x5')](Sd), this;
  }

  [S8('0x6')](Se) {
    if (null == Se) throw new Error(S8('0x7'));
    return this[S8('0x2')][Se] = {'x': this[S8('0x1')]['x'], 'y': this[S8('0x1')]['y']}, this;
  }

  [S8('0x8')](Sf) {
    return this[S8('0x2')][Sf];
  }

  [S8('0x9')](Sg) {
    Sg = this[S8('0x8')](Sg);
    return this[S8('0xa')](Sg);
  }

  [S8('0xb')](Sh) {
    Sh = this[S8('0x8')](Sh);
    return this[S8('0xc')](Sh);
  }

  ['forwardToMark'](Si) {
    Si = this[S8('0x8')](Si);
    return this['forwardTo'](Si);
  }

  [S8('0xd')](Sj) {
    for (let Sk = 0x0; Sk < Sj[S8('0xe')]; Sk++) {
      var Sm = Sj[Sk], Sm = this[S8('0x8')](Sm);
      this[S8('0xf')](Sm);
    }
    return this;
  }

  [S8('0x10')]() {
    var Sn = this[S8('0x1')], Sr = this[S8('0x11')], Sp = this['_stepSize'], Sq = Sn['x'] + Sp * Math[S8('0x12')](Sr),
      Sr = Sn['y'] + Sp * Math[S8('0x13')](Sr);
    return this['dx'] = Sq - Sn['x'], this['dy'] = Sr - Sn['y'], this;
  }

  [S8('0xa')](Ss) {
    var St = Ss['x'], Ss = Ss['y'];
    return this[S8('0x11')] = Math[S8('0x14')](Ss - this[S8('0x1')]['y'], St - this[S8('0x1')]['x']), this[S8('0x10')](), this;
  }

  [S8('0x15')](Sv) {
    return this['size'](Sv), this['_position']['x'] += this['dx'], this[S8('0x1')]['y'] += this['dy'], this[S8('0x3')](Sb['OP'][S8('0x15')], [this[S8('0x1')]['x'], this[S8('0x1')]['y']]), this;
  }

  ['jump'](Sw) {
    null == Sw && (Sw = 0x1);
    for (var Sx = 0x0; Sx < Sw; Sx++) this[S8('0x1')]['x'] += this['dx'], this[S8('0x1')]['y'] += this['dy'], this[S8('0x3')](Sb['OP'][S8('0x16')], [this[S8('0x1')]['x'], this[S8('0x1')]['y']]);
    return this;
  }

  [S8('0xc')](Sy) {
    var Sz = Sy['x'], Sy = Sy['y'];
    return this[S8('0x1')]['x'] = Sz, this[S8('0x1')]['y'] = Sy, this[S8('0x3')](Sb['OP'][S8('0xc')], [this[S8('0x1')]['x'], this[S8('0x1')]['y']]), this;
  }

  [S8('0x17')](SB, SC) {
    SC = {'x': (SB['x'] + SC['x']) / 0x2, 'y': (SB['y'] + SC['y']) / 0x2};
    return this[S8('0xc')](SC);
  }

  [S8('0xf')](SD) {
    var SE = SD['x'], SD = SD['y'];
    return this['_position']['x'] = SE, this[S8('0x1')]['y'] = SD, this['addAction'](Sb['OP'][S8('0xf')], [this[S8('0x1')]['x'], this['_position']['y']]), this;
  }

  [S8('0x18')](SG) {
    return null == SG && (SG = Math['PI'] / 0x2), this[S8('0x11')] = this[S8('0x11')] - SG, this[S8('0x10')](), this;
  }

  [S8('0x19')](SH) {
    return null == SH && (SH = -Math['PI'] / 0x2), this[S8('0x11')] = this[S8('0x11')] + SH, this[S8('0x10')](), this;
  }

  ['size'](SI) {
    return this[S8('0x1a')] = SI, this[S8('0x10')](), this;
  }

  ['sizeBy'](SJ) {
    return this[S8('0x1a')] *= SJ, this[S8('0x10')](), this;
  }

  [S8('0x1b')](SK) {
    return this[S8('0x1a')] += SK, this[S8('0x10')](), this;
  }

  [S8('0x1c')](SL) {
    var SO = SL['x'], SL = SL['y'], SO = SO - this['_position']['x'], SL = SL - this['_position']['y'];
    return Math[S8('0x1d')](SO * SO + SL * SL);
  }

  ['getAngle'](SQ) {
    var SR = SQ['x'], SQ = SQ['y'];
    return Math[S8('0x14')](SQ - this[S8('0x1')]['y'], SR - this['_position']['x']);
  }
}

bN(Sb['prototype'], {
  'position': {'value': {'x': 0x0, 'y': 0x0}},
  'direction': {'value': 0x0},
  'stepSize': {'value': 0x1, 'getset': !0x0},
  'dx': {'value': 0x1, 'getset': !0x0},
  'dy': {'value': 0x0, 'getset': !0x0},
  '_actions': {}
}), Sb['OP'] = {'forward': 'forward', 'forwardTo': S8('0xf'), 'moveTo': S8('0xc'), 'jump': S8('0x16')};
var ST = ['path', 'toCmds', 'ctx.', '();', 'push', 'arc', '_position', 'style', 'addAction', 'text', 'fillText', 'forwardTo', 'beginPath', 'fill', 'save', 'restore', 'isArray', 'string', 'lineTo', 'moveTo', '_actions', 'length', 'name', 'args', 'apply', 'toFunction', 'ctx', 'toPath2D', 'toCmd', 'path.', 'var\x20path\x20=\x20new\x20Path2D();\x0a', '\x0a\x20return\x20path;'];
!function (SU) {
  !function (SV) {
    for (; --SV;) SU['push'](SU['shift']());
  }(0x1f3);
}(ST);
var SW = function (SY, SZ) {
  return ST[SY = +SY];
}, SX = {'forward': 'lineTo', 'forwardTo': SW('0x0'), 'moveTo': SW('0x1'), 'jump': 'moveTo'};

class T0 extends Sb {
  constructor() {
    super();
  }

  ['applyTo'](T1) {
    var T2 = this[SW('0x2')];
    for (let T3 = 0x0; T3 < T2[SW('0x3')]; T3++) {
      var T4 = T2[T3];
      let T5 = SX[T4[SW('0x4')]];
      var T6 = T4[SW('0x5')];
      null == T5 && (T5 = T4[SW('0x4')]);
      let T7 = T1[T5];
      if (null == T7) throw new Error('applyTo\x27s\x20target\x20has\x20no\x20method:' + T5);
      null != T6 ? T6[SW('0x3')] ? T7[SW('0x6')](T1, T6) : T1[T5] = T6 : T7[SW('0x6')](T1, []);
    }
    return this;
  }

  [SW('0x7')]() {
    var T8 = this['toCmd']();
    return new Function(SW('0x8'), T8);
  }

  [SW('0x9')]() {
    var Ta = this[SW('0xa')](SW('0xb')), Ta = SW('0xc') + Ta;
    Ta += SW('0xd');
    let Tb = new Function(SW('0xe'), Ta);
    return Tb();
  }

  [SW('0xa')](Tc) {
    return this[SW('0xf')](Tc)['join']('\x0a');
  }

  [SW('0xf')](Td) {
    var Te = this[SW('0x2')];
    let Tf = [];
    null == Td && (Td = SW('0x10'));
    for (let Tg = 0x0; Tg < Te[SW('0x3')]; Tg++) {
      var Th = Te[Tg];
      let Ti = SX[Th[SW('0x4')]];
      var Tj = Th[SW('0x5')];
      null == Ti && (Ti = Th['name']), null != Tj ? Tj['length'] ? Tf[SW('0x12')](Td + Ti + '(' + Tp(Tj) + ');') : Tf[SW('0x12')](Td + Ti + '=' + Tp(Tj) + ';') : Tf['push'](Td + Ti + SW('0x11'));
    }
    return Tf;
  }

  ['circle'](Tk) {
    return this['addAction'](SW('0x13'), [this[SW('0x14')]['x'], this[SW('0x14')]['y'], Tk, 0x0, 0x2 * Math['PI']]), this;
  }

  [SW('0x15')](Tl, Tm) {
    return this[SW('0x16')](Tl, Tm), this;
  }

  [SW('0x17')](Tn) {
    return this['addAction'](SW('0x18'), [Tn, this[SW('0x14')]['x'], this['_position']['y']]), this;
  }

  [SW('0x0')](To) {
    return this[SW('0x19')](To), this;
  }

  [SW('0x1a')]() {
    return this[SW('0x16')](SW('0x1a')), this;
  }

  ['stroke']() {
    return this[SW('0x16')]('stroke'), this;
  }

  [SW('0x1b')]() {
    return this['addAction']('fill'), this;
  }

  ['save']() {
    return this['addAction'](SW('0x1c')), this;
  }

  [SW('0x1d')]() {
    return this[SW('0x16')](SW('0x1d')), this;
  }
}

function Tp(Tq) {
  if (!Array[SW('0x1e')](Tq) && typeof Tq == SW('0x1f')) return '\x22' + Tq + '\x22';
  let Tr = '';
  for (let Ts = 0x0; Ts < Tq[SW('0x3')]; Ts++) {
    var Tt = Tq[Ts];
    typeof Tt == SW('0x1f') ? Tr += '\x22' + Tt + '\x22' : Tr += '' + Tt, Ts + 0x1 < Tq[SW('0x3')] && (Tr += ',');
  }
  return Tr;
}

var Tu = ['length', 'toCellArray', 'push', 'col', 'value', 'key', 'getDistance', 'row', 'abs', 'equals', 'rows', 'canCorss', 'filter', 'parent', 'shift', 'getOpenList', 'sort', 'unshift', 'data', 'cols'];
!function (Tv) {
  !function (Tw) {
    for (; --Tw;) Tv['push'](Tv['shift']());
  }(0xef);
}(Tu);
var Tx = function (Ty, Tz) {
  return Tu[Ty = +Ty];
};

class TA {
  constructor(TB) {
    this[Tx('0x0')] = TB, this['rows'] = TB['length'], this[Tx('0x1')] = TB[0x0][Tx('0x2')];
  }

  ['canCorss'](TC, TD) {
    return 0x0 == this[Tx('0x0')][TC][TD];
  }

  [Tx('0x3')](TE) {
    const TF = [];
    for (var TG = 0x0; TG < TE[Tx('0x2')]; TG++) {
      var TH = TE[TG];
      let TI = [];
      for (let TF = 0x0; TF < TH[Tx('0x2')]; TF++) {
        var TK = new TN(TG, TF, TE[TG][TF]);
        TI[Tx('0x4')](TK);
      }
      TF[Tx('0x4')](TI);
    }
    return TF;
  }

  ['findPath'](TL, TM) {
    return U8(TL, TM, this);
  }
}

class TN {
  constructor(TO, TP, TQ) {
    this['row'] = TO, this[Tx('0x5')] = TP, this[Tx('0x6')] = TQ, this['parent'] = null, this[Tx('0x7')] = TO + '_' + TP;
  }

  [Tx('0x8')](TR) {
    var TS = TR['row'] - this[Tx('0x9')], TR = TR['col'] - this[Tx('0x5')];
    return Math[Tx('0xa')](TS * TS + TR * TR);
  }

  [Tx('0xb')](TU) {
    return this[Tx('0x7')] == TU['key'];
  }

  ['getOpenList'](TV, TW) {
    const TX = TW[Tx('0xc')], TY = TW[Tx('0x1')];
    let TZ = this, U0 = this[Tx('0x9')], U1 = this[Tx('0x5')],
      U2 = [{'row': -0x1, 'col': -0x1, 'distance': 1.4}, {'row': -0x1, 'col': 0x0, 'distance': 0x1}, {
        'row': -0x1,
        'col': 0x1,
        'distance': 1.4
      }, {'row': 0x0, 'col': -0x1, 'distance': 0x1}, {'row': 0x0, 'col': 0x1, 'distance': 0x1}, {
        'row': 0x1,
        'col': 0x0,
        'distance': 0x1
      }, {'row': 0x1, 'col': -0x1, 'distance': 1.4}, {'row': 0x1, 'col': 0x1, 'distance': 1.4}];
    return U2 = U2[Tx('0xe')](function (U2) {
      if (0x0 == U0 && -0x1 == U2[Tx('0x9')]) return !0x1;
      if (0x0 == U1 && -0x1 == U2['col']) return !0x1;
      if (U0 + 0x1 == TX && 0x1 == U2[Tx('0x9')]) return !0x1;
      if (U1 + 0x1 == TY && 0x1 == U2[Tx('0x5')]) return !0x1;
      var U4 = U0 + U2[Tx('0x9')] + '_' + (U1 + U2[Tx('0x5')]);
      return TW[Tx('0xd')](U0 + U2[Tx('0x9')], U1 + U2['col']) || U4 == TV[Tx('0x7')];
    }), U2['map'](function (U2) {
      var U6 = TW[Tx('0x0')][U0 + U2[Tx('0x9')]][U1 + U2['col']];
      const TX = new TN(U0 + U2[Tx('0x9')], U1 + U2['col'], U6);
      return TX[Tx('0xf')] = TZ, TX['G'] = U2['distance'], TX['H'] = TX[Tx('0x8')](TV), TX['F'] = TX['G'] + TX['H'], TX;
    });
  }
}

function U8(U9, Ua, Ub) {
  let Uc = [], Ud = {};
  U9 = new TN(U9[0x0], U9[0x1], 0x0), Ua = new TN(Ua[0x0], Ua[0x1], 0x0);

  function Ue(U9) {
    return null == Ud[U9[Tx('0x7')]];
  }

  const Ug = function U9(Ua, Ub, Ug) {
    if (Ua['equals'](Ub)) {
      let U9 = function U9(Ua, Ub) {
        return null == Ua[Tx('0xf')] || (Ub[Tx('0x4')](Ua), U9(Ua['parent'], Ub)), Ub;
      }(Ua, []);
      return U9[Tx('0x10')](), U9;
    }
    let Un = Ua[Tx('0x11')](Ub, Ug);
    return Ud[Ua[Tx('0x7')]] = Ua, Un = Un['filter'](Ue), Uc = Uc['concat'](Un), Uc = Uc[Tx('0x12')]((U9, Ua) => U9['F'] - Ua['F']), 0x0 == Uc[Tx('0x2')] ? [] : U9(Uc[Tx('0x10')](), Ub, Ug);
  }(U9, Ua, Ub);
  return Ug[Tx('0x13')](Ua), Ug[Tx('0x4')](U9), Ug;
}

var Uq = ['block', 'offsetHeight', 'height', 'width', 'left', 'top', 'stage', 'remove', 'domElement', 'createElement', 'div', 'classList', 'add', 'jtopo_popoupmenu', 'layersContainer', 'appendChild', 'innerHTML', 'initEvent', 'querySelectorAll', 'forEach', 'addEventListener', 'click', 'select', 'dispatchEvent', 'defaultPrevented', 'hide', 'showAt', 'style', 'display'];
!function (Ur) {
  !function (Us) {
    for (; --Us;) Ur['push'](Ur['shift']());
  }(0x163);
}(Uq);
var Ut = function (Uu, Uv) {
  return Uq[Uu = +Uu];
};

class Uw extends cz {
  constructor(Ux, Uy) {
    super(), this[Ut('0x0')] = Ux, this['domElement'] = this['setHtml'](Uy);
  }

  [Ut('0x1')]() {
    null != this[Ut('0x2')] && this[Ut('0x2')][Ut('0x1')]();
  }

  ['setHtml'](Uz) {
    this['html'] = Uz, this[Ut('0x1')]();
    let UA = document[Ut('0x3')](Ut('0x4'));
    return UA[Ut('0x5')][Ut('0x6')](Ut('0x7')), this['stage'][Ut('0x8')][Ut('0x9')](UA), UA[Ut('0xa')] = Uz, this['initEvent'](UA), this[Ut('0x2')] = UA, this['hide'](), UA;
  }

  [Ut('0xb')](UB) {
    let UC = this, UD = UB[Ut('0xc')]('a');
    UD[Ut('0xd')](function (UB) {
      UB[Ut('0xe')](Ut('0xf'), function (UB) {
        let UD = new Event(Ut('0x10'), {'cancelable': !0x0});
        UD['item'] = this[Ut('0xa')], UC[Ut('0x11')](UD), UD[Ut('0x12')] || UC[Ut('0x13')]();
      });
    });
  }

  [Ut('0x14')](UH, UI) {
    this[Ut('0x2')][Ut('0x15')][Ut('0x16')] = Ut('0x17'), UI + this['domElement'][Ut('0x18')] >= this[Ut('0x0')][Ut('0x19')] && UI > this[Ut('0x0')][Ut('0x19')] / 0x2 && (UI -= this[Ut('0x2')]['offsetHeight']), UH + this[Ut('0x2')]['offsetWidth'] >= this[Ut('0x0')][Ut('0x1a')] && UH > this[Ut('0x0')][Ut('0x1a')] / 0x2 && (UH -= this['domElement']['offsetWidth']), this[Ut('0x2')][Ut('0x15')][Ut('0x1b')] = UH + 'px', this[Ut('0x2')][Ut('0x15')][Ut('0x1c')] = UI + 'px';
  }

  ['hide']() {
    this[Ut('0x2')][Ut('0x15')]['display'] = 'none';
  }
}

var UJ = ['domElement', 'createElement', 'div', 'add', 'jtopo_tooltip', 'layersContainer', 'appendChild', 'setHtml', 'innerHTML', 'initEvent', 'mousedown', 'hide', 'mouseup', 'mouseoverTarget', 'fadeOut', 'stopFade', 'style', 'display', 'block', 'left', 'top', 'opacity', 'none', 'fadeoutTimer', 'stage'];
!function (UK) {
  !function (UL) {
    for (; --UL;) UK['push'](UK['shift']());
  }(0x1f4);
}(UJ);
var UM = function (UN, UO) {
  return UJ[UN = +UN];
};

class UP extends cz {
  constructor(UQ) {
    super(), this[UM('0x0')] = UQ, this[UM('0x1')] = document[UM('0x2')](UM('0x3')), this[UM('0x1')]['classList'][UM('0x4')](UM('0x5')), this['stage'][UM('0x6')][UM('0x7')](this[UM('0x1')]), this['initEvent'](), this['hide']();
  }

  [UM('0x8')](UR) {
    return this[UM('0x1')][UM('0x9')] = UR, this[UM('0x1')];
  }

  [UM('0xa')]() {
    const US = this;
    this[UM('0x0')]['on'](UM('0xb'), function () {
      US[UM('0xc')]();
    }), this['stage']['on'](UM('0xd'), function () {
      US['hide']();
    }), this['stage']['on']('mousemove', function () {
      null == this[UM('0xe')] && US[UM('0xf')]();
    });
  }

  ['showAt'](UT, UU) {
    this[UM('0x10')](), this[UM('0x1')][UM('0x11')][UM('0x12')] = UM('0x13'), this['domElement']['style'][UM('0x14')] = UT + 'px', this[UM('0x1')][UM('0x11')][UM('0x15')] = UU + 'px', this['domElement'][UM('0x11')][UM('0x16')] = 0.9;
  }

  [UM('0xc')]() {
    this['stopFade'](), this[UM('0x1')]['style'][UM('0x12')] = UM('0x17');
  }

  [UM('0x10')]() {
    null != this[UM('0x18')] && (clearInterval(this[UM('0x18')]), this[UM('0x18')] = null);
  }

  [UM('0xf')](UV) {
    if (null == this[UM('0x18')]) {
      let UW = this;
      null == UV && (UV = 0x32), this['fadeoutTimer'] = setInterval(function () {
        UW['domElement'][UM('0x11')]['opacity'] -= 0.1, UW['domElement'][UM('0x11')][UM('0x16')] <= 0.1 && UW['hide']();
      }, UV);
    }
  }
}

var UX = ['offsetAZHandle', 'length', 'beginOffset', 'offsetWithAngle', 'number', 'absorb', 'abs', 'getFold2', 'getAngle', 'toFixed', '_preAngle', 'centerOffset', 'label', 'floor', 'ceil', 'beginArrow', 'endArrow', 'origin', 'points', 'getMergedPoints', 'mergePoints', 'getWithOffset', 'pointOffsets', 'setFold1Offset', 'getK', 'fold2Offset', 'setCenterOffset', 'resetOffset', 'mid1', 'fold2', 'middle', 'sign', 'assert\x20failed\x20getMid1AndMid2', 'prototype', 'AutoFoldLink', 'concat', 'getAnchorPoints', 'fold1', 'center', 'getFold1', 'beginOffsetGap', 'getFold1Vec', 'fold1Offset', 'endOffsetGap', 'getFold2Vec', 'begin', 'end'];
!function (UY) {
  !function (UZ) {
    for (; --UZ;) UY['push'](UY['shift']());
  }(0x113);
}(UX);
var V0 = function (V1, V2) {
  return UX[V1 = +V1];
};

class V3 extends yU {
  constructor(V4, V5, V6, V7, V8) {
    super(V4, V5, V6, V7, V8);
  }

  [V0('0x0')](V9, Va) {
    var Vb = this[V0('0x1')], Va = this[V0('0x2')](V9, Va);
    let Vd = {'x': V9['x'] + Va[0x0] * Vb, 'y': V9['y'] + Va[0x1] * Vb};
    Vb = this[V0('0x3')];
    return Vb && (Vd['x'] += Vb['x'], Vd['y'] += Vb['y']), Vd;
  }

  ['getFold2'](Ve, Vf) {
    var Vg = this[V0('0x4')], Ve = this[V0('0x5')](Ve, Vf);
    let Vi = {'x': Vf['x'] + Ve[0x0] * Vg, 'y': Vf['y'] + Ve[0x1] * Vg};
    Vg = this['fold2Offset'];
    return Vg && (Vi['x'] += Vg['x'], Vi['y'] += Vg['y']), Vi;
  }

  [V0('0x2')](Vj, Vk) {
    let Vl = yl(this[V0('0x6')]);
    if (null == Vl) {
      let Vm = 0x0;
      Vm = Vk['x'] > Vj['x'] ? 0x1 : -0x1, Vl = [Vm, 0x0];
    }
    return Vl;
  }

  [V0('0x5')](Vn, Vo) {
    let Vp = yl(this[V0('0x7')]);
    if (null == Vp) {
      let Vq = -0x1;
      Vq = Vo['y'] > Vn['y'] ? -0x1 : 0x1, Vp = [0x0, Vq];
    }
    return Vp;
  }

  [V0('0x8')](Vr) {
    var Vs = Vr[0x0], Vx = Vr[0x1], Vy = Vr[Vr[V0('0x9')] - 0x2], Vv = Vr[Vr['length'] - 0x1],
      Vw = Math['atan2'](Vx['y'] - Vs['y'], Vx['x'] - Vs['x']),
      Vx = Math['atan2'](Vy['y'] - Vv['y'], Vy['x'] - Vv['x']), Vy = this[V0('0xa')] || 0x0;
    0x0 != Vy && (Vr[0x0] = i8[V0('0xb')](Vs, Vw, Vy));
    let Vz = this['endOffset'] || 0x0;
    0x0 != Vz && (typeof Vz == V0('0xc') && (Vz = -Vz), Vr[Vr[V0('0x9')] - 0x1] = i8['offsetWithAngle'](Vv, Vx, Vz));
  }

  ['updatePoints']() {
    var VA = this['calcAZ']();
    const VB = VA[0x0], VC = VA[0x1];
    var VD = this[V0('0xd')], VA = this[V0('0x2')](VB, VC);
    0x0 == VA[0x0] && Math[V0('0xe')](VB['x'] - VC['x']) < VD && (VF = 0.5 * (VB['x'] + VC['x']), VB['x'] = VF, VC['x'] = VF), 0x0 == VA[0x1] && Math['abs'](VB['y'] - VC['y']) < VD && (VK = 0.5 * (VB['y'] + VC['y']), VB['y'] = VK, VC['y'] = VK);
    var VF = this[V0('0x0')](VB, VC), VA = this[V0('0xf')](VB, VC), VD = Wf(this, VB, VC, VF, VA);
    let VI = VD[0x0], VJ = VD[0x1];
    var VK = i8['looksSame'](VI, VJ, 0.5), VD = Math['abs'](i8[V0('0x10')](VI, VJ))[V0('0x11')](0x6);
    0x0 == VK && (this[V0('0x12')] != VD && (this[V0('0x13')] = null), this[V0('0x12')] = VD);
    VD = this[V0('0x13')];
    VD && (VI['x'] += VD['x'], VI['y'] += VD['y'], VJ['x'] += VD['x'], VJ['y'] += VD['y']);
    var VM, VF = [VB, VF, VI, VJ, VA, VC];
    return this[V0('0x14')] && (VF[V0('0x9')] % 0x2 == 0x0 ? (VA = Math[V0('0x15')](VF[V0('0x9')] / 0x2), this[V0('0x14')]['origin'] = [VA - 0x1, 0.5]) : (VM = Math[V0('0x16')](VF[V0('0x9')] / 0x2), this[V0('0x14')]['origin'] = [VM - 0x2, 0.5])), this[V0('0x17')] && (this['beginArrow']['origin'][0x0] = 0x0), this[V0('0x18')] && (VM = VF[V0('0x9')] - 0x2, this[V0('0x18')][V0('0x19')][0x0] = VM), this[V0('0x1a')] = VF, this['offsetAZHandle'](this[V0('0x1a')]), VF;
  }

  [V0('0x1b')]() {
    return i8[V0('0x1c')](this[V0('0x1a')]);
  }

  [V0('0x1d')](VO, VP) {
    if (null == this[V0('0x1e')] || null == this['pointOffsets'][VP]) return VO;
    VP = this[V0('0x1e')][VP];
    return {'x': VO['x'] + VP['x'], 'y': VO['y'] + VP['y']};
  }

  [V0('0x1f')](VQ, VR) {
    let VS = this[V0('0x3')];
    null == VS && (VS = {
      'x': 0x0,
      'y': 0x0
    }, this[V0('0x3')] = VS), rq(this[V0('0x20')](0x0, 0.5)) ? VR = VS['y'] = 0x0 : VQ = VS['x'] = 0x0, VS['x'] += VQ, VS['y'] += VR;
  }

  ['setFold2Offset'](VT, VU) {
    let VV = this[V0('0x21')];
    null == VV && (VV = {
      'x': 0x0,
      'y': 0x0
    }, this[V0('0x21')] = VV), rq(this[V0('0x20')](0x4, 0.5)) ? VU = VV['y'] = 0x0 : VT = VV['x'] = 0x0, VV['x'] += VT, VV['y'] += VU;
  }

  [V0('0x22')](VW, VX) {
    let VY = this['centerOffset'];
    null == VY && (VY = {
      'x': 0x0,
      'y': 0x0
    }, this[V0('0x13')] = VY), rq(this[V0('0x20')](0x2, 0.5)) ? VW = VY['x'] = 0x0 : VX = VY['y'] = 0x0, VY['x'] += VW, VY['y'] += VX;
  }

  [V0('0x23')]() {
    this['centerOffset'] = void 0x0, this[V0('0x3')] = null, this[V0('0x21')] = null;
  }
}

const VZ = {};

function W0(W1, W2) {
  return Math['abs'](W2[0x0]) > Math['abs'](W2[0x1]) ? W1['x'] * Math[V0('0x27')](W2[0x0]) : W1['y'] * Math[V0('0x27')](W2[0x1]);
}

function W3(W4, W5, W6) {
  W4 = W0(W4, W5);
  return W0(W6, W5) - W4;
}

function W7(W8, W9, Wa, Wb) {
  var Wc = W0(W8, Wa), Wb = W0(W9, Wb), Wa = 0x0 != Wa[0x0];
  return Wb < Wc ? Wa ? {'x': W8['x'], 'y': W9['y']} : {'x': W9['x'], 'y': W8['y']} : Wa ? {
    'x': W9['x'],
    'y': W8['y']
  } : {'x': W8['x'], 'y': W9['y']};
}

function Wf(Wg, Wh, Wi, Wj, Wk) {
  var Wl = Wg[V0('0x2')](Wh, Wi), Wm = Wg['getFold2Vec'](Wh, Wi), Wn = eB['dot'](Wl, Wm);
  if (0x1 == Wn) {
    Wg = W7(Wj, Wk, Wl, Wm);
    return [Wg, Wg];
  }
  if (-0x1 == Wn) {
    var Wo = i8[V0('0x26')](Wj, Wk);
    return [W7(Wj, Wo, Wl, Wl), W7(Wk, Wo, Wm, Wm)];
  }
  Wo = qm(Wh, Wj, Wi, Wk, !0x0), Wh = W3(Wh, Wl, Wo), Wi = W3(Wi, Wm, Wo);
  if (0x0 < Wh && 0x0 < Wi) return [Wo, Wo];
  Wl = [-Wl[0x1], Wl[0x0]], Wl = {
    'x': Wj['x'] + Wl[0x0],
    'y': Wj['y'] + Wl[0x1]
  }, Wm = [-Wm[0x1], Wm[0x0]], Wm = qm(Wj, Wl, Wk, {'x': Wk['x'] + Wm[0x0], 'y': Wk['y'] + Wm[0x1]}, !0x0);
  if (cc(Wm), null != Wm) return [Wm, Wm];
  throw new Error(V0('0x28'));
}

VZ[c6['begin']] = function () {
  return this[V0('0x1a')][0x0];
}, VZ[c6['fold1']] = function () {
  return this[V0('0x1a')][0x1];
}, VZ[c6[V0('0x24')]] = function () {
  return this[V0('0x1a')][0x2];
}, VZ[c6['mid2']] = function () {
  return this[V0('0x1a')][0x3];
}, VZ[c6[V0('0x25')]] = function () {
  return this[V0('0x1a')][0x4];
}, VZ[c6[V0('0x7')]] = function () {
  return this[V0('0x1a')][0x5];
}, VZ[c6['center']] = function () {
  return i8[V0('0x26')](this[V0('0x1a')][0x2], this[V0('0x1a')][0x3]);
}, bN(V3[V0('0x29')], {
  'className': {'value': V0('0x2a'), 'writable': !0x1},
  'beginOffsetGap': {'value': 0xf},
  'endOffsetGap': {'value': 0xf},
  'fold1Offset': {},
  'fold2Offset': {},
  'centerOffset': {},
  'DefaultPositions': {'value': VZ},
  'absorb': {'value': 0x3, 'enumerable': !0x1},
  'serializers': {'value': yU[V0('0x29')]['serializers'][V0('0x2b')]([V0('0x1'), V0('0x4'), V0('0x3'), V0('0x21'), V0('0x13')])}
}), V3['prototype'][V0('0x2c')] = function () {
  var Wp = this['getMergedPoints']()[V0('0x9')];
  return Wp < 0x4 ? ['begin', V0('0x7')] : 0x4 == Wp || 0x5 == Wp ? [V0('0x6'), V0('0x7'), V0('0x2d'), V0('0x25')] : [V0('0x6'), 'end', 'fold1', V0('0x25'), V0('0x2e')];
};
var Wq = ['innerHTML', 'iconHtml', 'setAttribute', 'draggable', 'ondragstart', 'config', 'dispatchEvent', 'initDom', 'hide', 'onDragstartHandler', 'createElement', 'div', 'classList', 'jtopo_iconsPanel', 'layersContainer', 'appendChild', 'domElement', 'none', 'style', 'display', 'block', 'setConfig', 'forEach', 'add', 'item'];
!function (Wr) {
  !function (Ws) {
    for (; --Ws;) Wr['push'](Wr['shift']());
  }(0xd0);
}(Wq);
var Wt = function (Wu, Wv) {
  return Wq[Wu = +Wu];
};

class Ww extends cz {
  constructor(Wx) {
    super(), this['stage'] = Wx, this['domElement'], this[Wt('0x0')](), this[Wt('0x1')](), this[Wt('0x2')];
  }

  [Wt('0x0')]() {
    let Wy = document[Wt('0x3')](Wt('0x4'));
    return Wy[Wt('0x5')]['add'](Wt('0x6')), this['stage'][Wt('0x7')][Wt('0x8')](Wy), this[Wt('0x9')] = Wy, this;
  }

  ['hide']() {
    return this['domElement']['style']['display'] = Wt('0xa'), this;
  }

  ['show']() {
    return this[Wt('0x9')][Wt('0xb')][Wt('0xc')] = Wt('0xd'), this;
  }

  [Wt('0xe')](Wz) {
    let WA = this;
    return Wz['items'][Wt('0xf')](function (WB) {
      let Wz = document[Wt('0x3')](Wt('0x4'));
      Wz[Wt('0x5')][Wt('0x10')](Wt('0x11')), Wz[Wt('0x12')] = WB[Wt('0x13')], Wz[Wt('0x14')](Wt('0x15'), !0x0), Wz[Wt('0x16')] = function (Wz) {
        Wz[Wt('0x17')] = WB, WA[Wt('0x18')](Wz);
      }, WA[Wt('0x9')][Wt('0x8')](Wz);
    }), this;
  }
}

var WE = ['name', '_#label', 'label', '_#beginArrow', 'beginArrow', '_#endArrow', 'endArrow', 'inLinks', 'outLinks', 'style', 'editable', 'draggable', 'userData', 'filter', 'className', 'setBegin', 'begin', 'setEnd', 'end', 'target', 'removeAllChild', 'addChilds', 'parent', 'replaceChild', 'updatezIndex', 'updateChildrenDeep', 'updatePoints', 'getSegmentPoints', 'length', 'children', 'forEach', 'origin'];
!function (WF) {
  !function (WG) {
    for (; --WG;) WF['push'](WF['shift']());
  }(0x1ca);
}(WE);
var WH = function (WI, WJ) {
  return WE[WI = +WI];
};

function WK(WL, WM) {
  const WN = ['id', WH('0x0'), 'name', 'x', 'y', 'frozen', WH('0x1'), WH('0x2'), WH('0x3'), 'textOffsetX', 'textOffsetY'];
  WN[WH('0x4')](WN => WN != WH('0x5'))['forEach'](WN => {
    WL[WN] = WM[WN];
  }), WL[WH('0x6')](WM[WH('0x7')]['target'], WM['begin']), WL[WH('0x8')](WM[WH('0x9')][WH('0xa')], WM[WH('0x9')]), WL[WH('0xb')](), WL[WH('0xc')](WM['children']);
  const WQ = WM[WH('0xd')];
  WQ && (WQ[WH('0xe')](WM, WL), WQ[WH('0xf')](), WQ[WH('0x10')](!0x0)), WL[WH('0x11')]();
  let WR = WL[WH('0x12')]()[WH('0x13')];
  WL[WH('0x14')][WH('0x15')](WN => {
    WN[WH('0x16')][0x0] + 0x1 >= WR && (WN[WH('0x16')][0x0] = 0x0), WN[WH('0x17')] == WH('0x18') ? WL[WH('0x19')] = WN : WN['name'] == WH('0x1a') ? (WL[WH('0x1b')] = WN)[WH('0x0')] = WL[WH('0x0')] : WN[WH('0x17')] == WH('0x1c') && ((WL[WH('0x1d')] = WN)[WH('0x0')] = WL[WH('0x0')]);
  }), WM[WH('0x1e')] && WM[WH('0x1e')]['forEach'](WN => {
    let WL = WN[WH('0x9')];
    WL[WH('0xa')] = WN;
  }), WM['outLinks'] && WM[WH('0x1f')][WH('0x15')](WN => {
    let WL = WN['begin'];
    WL['target'] = WN;
  });
}

var WX = ['width', 'height', 'triangle', 'closePath', 'rect', 'prototype', 'ArrowNode', 'css', '1px\x20solid\x20black', 'drawShape', 'arrowShape', 'default', 'moveTo', 'lineTo'];
!function (WY) {
  !function (WZ) {
    for (; --WZ;) WY['push'](WY['shift']());
  }(0x14a);
}(WX);
var X0 = function (X1, X2) {
  return WX[X1 = +X1];
};

class X3 extends so {
  constructor(X4, X5, X6, X7, X8) {
    super(X4, X5, X6, X7, X8), this[X0('0x0')]({'border': X0('0x1')});
  }

  [X0('0x2')](X9, Xa, Xb, Xc, Xd) {
    this[X0('0x3')] == X0('0x4') ? (X9[X0('0x5')](0x0, 0x0), X9[X0('0x6')](this[X0('0x7')] / 0x2, this[X0('0x8')] / 0x2), X9['lineTo'](0x0, this[X0('0x8')])) : this['arrowShape'] == X0('0x9') ? (X9[X0('0x5')](0x0, 0x0), X9[X0('0x6')](this[X0('0x7')] / 0x2, this['height'] / 0x2), X9[X0('0x6')](0x0, this['height']), X9[X0('0x6')](0x0, 0x0), X9[X0('0xa')]()) : 'rectangle' == this['arrowShape'] && X9[X0('0xb')](0.5 * -this[X0('0x7')], 0x0, this[X0('0x7')], this[X0('0x8')]);
  }
}

bN(X3[X0('0xc')], {'className': {'value': X0('0xd')}, 'arrowShape': {'value': X0('0x4')}});
var Xe = ['setCurrentObject', 'editor', 'stage', 'pickedObject', 'selectedGroup', 'add', 'isLink', 'attachTo', 'isNode', 'update', 'showProperty', 'parentId', 'isSimpleLink', 'beginArrow', 'width', 'endArrow', 'visible', 'basic', '#FFFFFF', 'center', 'bold', 'arial', 'butt', 'style', 'keys', 'forEach', 'rotation', 'indexOf', 'toLowerCase', 'init', 'borderWidth', 'fontWeight', 'fontSize', 'replace', 'fontFamily', 'setFolderValues', 'getFolder', '节点属性', '连线属性', 'hide', 'show', 'newFolder', 'addFolder', 'getCtrollerValue', 'getCtroller', 'getValue', '__controllers', 'find', 'property', '__folders', 'setValue', '左上角', '右上角', '左下角', '右下角', 'left', 'top', 'middle', 'bottom', 'normal', 'italic', 'Link', 'AutoFoldLink', 'ArcLink', 'CurveLink', 'BezierLink', '1,1', '3,3', '7,3', '3,7', '10,1', '1,10', 'Arial', 'Georgia', 'Verdana', 'round', 'square', '绘制不重叠部', '绘制到后面', 'zIndex', 'updatezIndex', 'beginArrowSize', 'setBeginArrow', 'resizeTo', 'endArrowSize', 'setEndArrow', 'className', 'imageSrc', 'backgroundColor', 'px\x20', 'font', 'lineDash', 'string', 'split', 'label', 'onFinishChange', 'name', 'text', 'frozen', 'onChange', '锁定子元素', 'draggable', '可拖拽', 'editable', '可被编辑', '可连线', '边框/线宽度', 'borderColor', 'globalAlpha', '整体透明度', 'open', '填充颜色', '图片路径', 'height', 'borderRadius', '圆角大小', 'edges', 'direction', '圆弧方向', '开始箭头大小', 'beginOffset', '开始偏移', 'endOffset', '结束偏移', 'lineCap', '字体名称', '字体重量', 'color', 'textPosition', '文本位置', 'textAlign', 'textBaseline', '基线对齐', 'textOffsetX', '水平偏移量', 'textOffsetY', '垂直偏移量', 'domElement', 'remove', 'appendChild', 'position', 'right', '-15px', '0px', 'close', 'display', 'none', 'block', 'gui', 'object', 'folders'];
!function (Xf) {
  !function (Xg) {
    for (; --Xg;) Xf['push'](Xf['shift']());
  }(0x1c3);
}(Xe);
var Xh = function (Xi, Xj) {
  return Xe[Xi = +Xi];
};

class Xk {
  constructor(Xl) {
    this['editor'] = Xl, this[Xh('0x0')] = new dat['GUI'](), this[Xh('0x1')], this[Xh('0x2')] = {};
  }

  [Xh('0x3')](Xm) {
    const Xn = this[Xh('0x4')], Xo = this[Xh('0x4')][Xh('0x5')];
    Xo[Xh('0x6')] = Xm, Xo[Xh('0x7')]['removeAll']()[Xh('0x8')](Xm), Xm[Xh('0x9')] ? Xn['linkCtrlBox'][Xh('0xa')](Xm) : Xm[Xh('0xb')] && Xn['nodeCtrlBox'][Xh('0xa')](Xm), Xn[Xh('0xc')](), this[Xh('0xd')](Xm);
  }

  [Xh('0xd')](Xp) {
    if (null != Xp) {
      this['basic'] = {
        'id': Xp['id'],
        'name': '',
        'parentId': Xp[Xh('0xe')],
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
      }, Xp[Xh('0x9')] && !Xp[Xh('0xf')] && (Xp[Xh('0x10')] && Xp[Xh('0x10')]['visible'] && (this['basic']['beginArrowSize'] = Xp[Xh('0x10')][Xh('0x11')]), Xp[Xh('0x12')] && Xp[Xh('0x12')][Xh('0x13')] && (this[Xh('0x14')]['endArrowSize'] = Xp[Xh('0x12')][Xh('0x11')])), this['style'] = {
        'lineDash': null,
        'backgroundColor': Xh('0x15'),
        'textPosition': c6[Xh('0x16')],
        'textAlign': '',
        'borderRadius': 0x0,
        'textBaseline': '',
        'borderColor': Xh('0x15'),
        'color': '#000000',
        'borderWidth': 0x1,
        'fontWeight': Xh('0x17'),
        'fontSize': '12',
        'fontFamily': Xh('0x18'),
        'lineCap': Xh('0x19'),
        'globalAlpha': 0x1
      };
      const Xq = this[Xh('0x14')], Xr = this[Xh('0x1a')];
      Object[Xh('0x1b')](Xq)[Xh('0x1c')](function (Xs) {
        if (null != Xp[Xs]) {
          let Xt = Xp[Xs];
          Xs == Xh('0x1d') && (Xt *= 0xb4 / Math['PI']), Xq[Xs] = Xt;
        }
      }), Object[Xh('0x1b')](Xr)[Xh('0x1c')](function (Xu) {
        let Xv = Xp[Xh('0x1a')][Xu];
        var Xq;
        null != Xp[Xh('0x1a')][Xu] && (Xr[Xu] = Xv), -0x1 != Xu[Xh('0x1e')]('Color') && Xv && Xv['toLowerCase'] && ((Xq = RK[Xv[Xh('0x1f')]()]) && (Xr[Xu] = Xq));
      }), null == this[Xh('0x1')] && (this[Xh('0x1')] = Xp, this[Xh('0x20')]());
      let Xx = (this[Xh('0x1')] = Xp)[Xh('0x1a')][Xh('0x21')];
      null == Xx && (Xx = 0x1), Xr[Xh('0x21')] = Xx;
      let Xy = Xp[Xh('0x1a')]['font'];
      null == Xy && (Xy = 'normal\x2010px\x20arial');
      const Xz = Xy['split']('\x20');
      Xr[Xh('0x22')] = Xz[0x0], Xr[Xh('0x23')] = Xz[0x1][Xh('0x24')]('px', ''), Xr[Xh('0x25')] = Xz[0x2], this[Xh('0x26')](Xq, Xr), Xp[Xh('0xb')] ? (this[Xh('0x27')](Xh('0x28'))['show'](), this[Xh('0x27')](Xh('0x29'))[Xh('0x2a')]()) : (this[Xh('0x27')](Xh('0x29'))[Xh('0x2b')](), this['getFolder'](Xh('0x28'))['hide']());
    }
  }

  [Xh('0x2c')](XA) {
    var XB = this['gui'][Xh('0x2d')](XA);
    return this['folders'][XA] = XB;
  }

  [Xh('0x27')](XC) {
    return this['folders'][XC];
  }

  [Xh('0x2e')](XD, XE) {
    return this[Xh('0x2f')](XD, XE)[Xh('0x30')]();
  }

  ['getCtroller'](XF, XG) {
    let XH = this['getFolder'](XF)[Xh('0x31')];
    return XH[Xh('0x32')](XF => XF[Xh('0x33')] == XG);
  }

  ['setFolderValues'](XJ, XK) {
    let XL = Object[Xh('0x1b')](this[Xh('0x0')][Xh('0x34')]);
    XL[Xh('0x1c')](XL => {
      let XN = this[Xh('0x0')][Xh('0x34')][XL][Xh('0x31')];
      XN[Xh('0x1c')](function (XL) {
        var XN = XL[Xh('0x33')];
        null != XJ[XN] ? XL[Xh('0x35')](XJ[XN]) : null != XK[XN] && XL[Xh('0x35')](XK[XN]);
      });
    });
  }

  [Xh('0x20')]() {
    const XQ = this, XR = this['editor'], XS = XR[Xh('0x5')], XT = XR['currentLayer'];
    var XU = this[Xh('0x14')], XV = this[Xh('0x1a')];
    const XW = [Xh('0x36'), '顶部', Xh('0x37'), '右边', '中心', '右边', Xh('0x38'), '底部', Xh('0x39')],
      XX = ['lt', 'ct', 'rt', 'lm', Xh('0x16'), 'rm', 'lb', 'cb', 'rb'], XY = {};
    XW[Xh('0x1c')](function (XS, XU) {
      XY[XS] = XX[XU];
    });
    var Y1 = {'居中': Xh('0x16'), '左': Xh('0x3a'), '右': 'right'},
      Y2 = {'顶部': Xh('0x3b'), '中心': Xh('0x3c'), '底部': Xh('0x3d')},
      Y3 = {'正常': Xh('0x3e'), '加粗': Xh('0x17'), '斜体': Xh('0x3f')},
      Y4 = {'直线': Xh('0x40'), '自动折线': Xh('0x41'), '圆弧': Xh('0x42'), '曲线': Xh('0x43'), '贝塞尔曲线': Xh('0x44')}, Y5 = {
        '实线': '1,0',
        '虚线1,1': Xh('0x45'),
        '虚线2,2': '2,2',
        '虚线3,3': Xh('0x46'),
        '虚线7,3': Xh('0x47'),
        '虚线3,7': Xh('0x48'),
        '虚线10,1': Xh('0x49'),
        '虚线1,10': Xh('0x4a')
      }, Y6 = [Xh('0x4b'), '宋体', Xh('0x4c'), Xh('0x4d'), '仿宋', '隶书'],
      Y7 = {'默认': 'butt', '圆形': Xh('0x4e'), '矩形': Xh('0x4f')};

    function Y8() {
      var XS, XU = this['property'];
      let XV = this[Xh('0x30')]();
      XU == Xh('0x52') ? XT[Xh('0x53')]() : XU == Xh('0x1d') && (XV *= Math['PI'] / 0xb4);
      let XW = XQ[Xh('0x1')];
      if (XW[Xh('0x9')]) if (XU != Xh('0x54') || XW[Xh('0xf')]) if (XU != Xh('0x57') || XW[Xh('0xf')]) {
        if (XU == Xh('0x59')) {
          var XX = XV;
          if (XW[Xh('0x59')] !== XX) {
            let XS = gT(XX);
            XX = new XS();
            WK(XX, XW), XW = XX, XQ[Xh('0x3')](XW);
          }
        }
      } else 0x0 != XV ? (null == XW[Xh('0x12')] && (XS = new X3(), XW[Xh('0x58')](XS)), XW['endArrow'][Xh('0x56')](XV, 0.618 * XV), XW[Xh('0x12')][Xh('0x2b')]()) : XW[Xh('0x12')] && XW[Xh('0x12')][Xh('0x2a')](); else 0x0 != XV ? (null == XW[Xh('0x10')] && (XS = new X3(), XW[Xh('0x55')](XS)), XW[Xh('0x10')][Xh('0x56')](XV, 0.618 * XV), XW[Xh('0x10')]['show']()) : XW[Xh('0x10')] && XW[Xh('0x10')][Xh('0x2a')]();
      'className' != XU && (XW[XU] = XV), null != XW[Xh('0x5a')] && (XW[Xh('0x1a')][Xh('0x5b')] = null), XR[Xh('0xc')]();
    }

    function Yf() {
      let XS = this[Xh('0x33')], XU = this[Xh('0x30')](), XV = XQ[Xh('0x1')], XW = XV[Xh('0x1a')];
      var XX;
      XS == Xh('0x25') || XS == Xh('0x22') || XS == Xh('0x23') ? (XX = XQ[Xh('0x2e')]('文本', Xh('0x22')) + '\x20' + XQ[Xh('0x2e')]('文本', 'fontSize') + Xh('0x5c') + XQ[Xh('0x2e')]('文本', Xh('0x25')), XS = Xh('0x5d'), XU = XX) : XS == Xh('0x5e') ? null == XU || '' == XU ? XU = null : typeof XU == Xh('0x5f') && (XU = XU[Xh('0x60')](',')) : XS == Xh('0x5b') && XQ[Xh('0x1')]['isLink'] && (XU = null), XV instanceof yU && -0x1 != XS[Xh('0x1e')](Xh('0x5d')) && null != XV[Xh('0x61')] && (XV['label'][Xh('0x1a')][XS] = XU), XW[XS] = XU, null != XV['imageSrc'] && (XV[Xh('0x1a')][Xh('0x5b')] = null), XR['update']();
    }

    Xh('0x50'), Xh('0x51');
    const Yl = this[Xh('0x2c')]('基础属性');
    Yl['add'](XU, 'id')[Xh('0x62')](Y8)[Xh('0x63')]('ID'), Yl[Xh('0x8')](XU, Xh('0x63'))[Xh('0x62')](Y8)[Xh('0x63')](Xh('0x63')), Yl[Xh('0x8')](XU, Xh('0x64'))[Xh('0x62')](Y8)[Xh('0x63')]('文字'), Yl['add'](XU, Xh('0x52'), 0x0, 0x3e8, 0x1)['onChange'](Y8)['name']('层级'), Yl['add'](XU, Xh('0x65'), !0x1)[Xh('0x66')](Y8)[Xh('0x63')](Xh('0x67')), Yl[Xh('0x8')](XU, Xh('0x68'), !0x0)[Xh('0x66')](Y8)[Xh('0x63')](Xh('0x69')), Yl['add'](XU, Xh('0x6a'), !0x0)[Xh('0x66')](Y8)[Xh('0x63')](Xh('0x6b')), Yl[Xh('0x8')](XU, 'connectable', !0x0)[Xh('0x66')](Y8)[Xh('0x63')](Xh('0x6c')), Yl['add'](XV, Xh('0x21'), 0x0, 0x64)['onChange'](Yf)['name'](Xh('0x6d')), Yl[Xh('0x8')](XV, 'lineDash', Y5)[Xh('0x66')](Yf)[Xh('0x63')]('虚实'), Yl['addColor'](XV, Xh('0x6e'))['onChange'](Yf)[Xh('0x63')]('边框/线颜色'), Yl[Xh('0x8')](XV, Xh('0x6f'), 0x0, 0x1, 0.1)['onChange'](Yf)['name'](Xh('0x70')), Yl[Xh('0x71')]();
    const Ym = this[Xh('0x2c')]('节点属性');
    Ym['addColor'](XV, Xh('0x5b'))[Xh('0x66')](Yf)[Xh('0x63')](Xh('0x72')), Ym[Xh('0x8')](XU, Xh('0x5a'))['onFinishChange'](Y8)['name'](Xh('0x73')), Ym['add'](XU, 'x')[Xh('0x62')](Y8), Ym[Xh('0x8')](XU, 'y')[Xh('0x62')](Y8), Ym[Xh('0x8')](XU, Xh('0x11'), 0x1)[Xh('0x62')](Y8)[Xh('0x63')]('宽度'), Ym[Xh('0x8')](XU, Xh('0x74'), 0x1)['onFinishChange'](Y8)['name']('高度'), Ym['add'](XU, Xh('0x1d'), -0x168, 0x168, 0x1)[Xh('0x66')](Y8)['name']('旋转度数'), Ym[Xh('0x8')](XV, Xh('0x75'))[Xh('0x66')](Yf)[Xh('0x63')](Xh('0x76')), Ym['add'](XU, Xh('0x77'), 0x3, 0x18)['onChange'](Y8)[Xh('0x63')]('边的条数'), Ym[Xh('0x71')]();
    const Yn = this[Xh('0x2c')](Xh('0x29'));
    Yn[Xh('0x8')](XU, 'className', Y4)['onChange'](Y8)[Xh('0x63')]('线型'), Yn[Xh('0x8')](XU, Xh('0x78'), {
      '顺时针': -0x1,
      '逆时针': 0x1
    })[Xh('0x66')](Y8)[Xh('0x63')](Xh('0x79')), Yn[Xh('0x8')](XU, Xh('0x54'), 0x0, 0x32)[Xh('0x66')](Y8)[Xh('0x63')](Xh('0x7a')), Yn[Xh('0x8')](XU, Xh('0x57'), 0x0, 0x32)[Xh('0x66')](Y8)[Xh('0x63')]('结束箭头大小'), Yn[Xh('0x8')](XU, Xh('0x7b'), -0x1e, 0x1e)[Xh('0x66')](Y8)[Xh('0x63')](Xh('0x7c')), Yn[Xh('0x8')](XU, Xh('0x7d'), -0x1e, 0x1e)[Xh('0x66')](Y8)[Xh('0x63')](Xh('0x7e')), Yn[Xh('0x8')](XV, Xh('0x7f'), Y7)[Xh('0x66')](Yf)[Xh('0x63')]('末端样式'), Yn['open']();
    const Yo = this[Xh('0x2c')]('文本');
    Yo['add'](XV, Xh('0x25'), Y6)[Xh('0x66')](Yf)[Xh('0x63')](Xh('0x80')), Yo['add'](XV, 'fontSize', 0x1, 0x3e8)['onChange'](Yf)['name']('大小'), Yo[Xh('0x8')](XV, 'fontWeight', Y3)[Xh('0x66')](Yf)[Xh('0x63')](Xh('0x81')), Yo['addColor'](XV, Xh('0x82'))[Xh('0x66')](Yf)['name']('颜色'), Yo[Xh('0x8')](XV, Xh('0x83'), XY)[Xh('0x66')](Yf)['name'](Xh('0x84')), Yo['add'](XV, Xh('0x85'), Y1)[Xh('0x66')](Yf)['name']('文本对齐'), Yo[Xh('0x8')](XV, Xh('0x86'), Y2)[Xh('0x66')](Yf)['name'](Xh('0x87')), Yo[Xh('0x8')](XU, Xh('0x88'))[Xh('0x66')](Y8)[Xh('0x63')](Xh('0x89')), Yo[Xh('0x8')](XU, Xh('0x8a'))['onChange'](Y8)[Xh('0x63')](Xh('0x8b'));
    let Yp = this[Xh('0x0')][Xh('0x8c')];
    Yp[Xh('0x8d')](), XS['layersContainer'][Xh('0x8e')](Yp), Yp[Xh('0x1a')][Xh('0x8f')] = 'absolute', Yp[Xh('0x1a')][Xh('0x90')] = Xh('0x91'), Yp[Xh('0x1a')][Xh('0x3b')] = Xh('0x92'), Yp[Xh('0x1a')][Xh('0x52')] = 0x3e8;
  }

  [Xh('0x71')]() {
    this['gui'][Xh('0x71')]();
  }

  [Xh('0x93')]() {
    this['gui'][Xh('0x93')]();
  }

  [Xh('0x2a')]() {
    this[Xh('0x0')][Xh('0x8c')][Xh('0x1a')][Xh('0x94')] = Xh('0x95');
  }

  [Xh('0x2b')]() {
    this[Xh('0x0')][Xh('0x8c')]['style']['display'] = Xh('0x96');
  }
}

var Yq = ['prototype', 'SimpleLink', 'serializers'];
!function (Yr) {
  !function (Ys) {
    for (; --Ys;) Yr['push'](Yr['shift']());
  }(0x8e);
}(Yq);
var Yt = function (Yu, Yv) {
  return Yq[Yu = +Yu];
};

class Yw extends yU {
  constructor(Yx, Yy, Yz, YA, YB) {
    super(Yx, Yy, Yz, YA, YB);
  }
}

bN(Yw[Yt('0x0')], {
  'className': {'value': Yt('0x1'), 'writable': !0x1},
  'serializers': {'value': kg[Yt('0x0')][Yt('0x2')]['concat'](['text'])}
});
var YC = ['e-resize', 'sw-resize', 's-resize', 'mousedownHandler', 'preventDefault', 'mouseupHandler', 'mousedragHandler', 'getNoChildrensObjects', 'length', 'selectedGroup.length\x20is\x200!', 'mouseInfo', 'stageToLocalXY', 'getPosition', 'adjustFixedDirection', 'translateWith', 'updateSize', 'isNodeResizePoint', 'nodeCtrlBox', 'editor', 'stage', 'selectedGroup', 'resizeTo', 'css', 'name', 'dragBegin', 'mouseenterHandler', 'mousemoveHandler', 'nw-resize', 'n-resize', 'ne-resize', 'w-resize'];
!function (YD) {
  !function (YE) {
    for (; --YE;) YD['push'](YD['shift']());
  }(0x147);
}(YC);
var YF = function (YG, YH) {
  return YC[YG = +YG];
};

class YI extends so {
  constructor(YJ, YK) {
    super(), this[YF('0x0')] = !0x0, this[YF('0x1')] = YJ, this[YF('0x2')] = YJ[YF('0x2')], this[YF('0x3')] = this[YF('0x2')][YF('0x3')], this[YF('0x4')] = this[YF('0x3')][YF('0x4')], this[YF('0x5')](0xc, 0xc), this[YF('0x6')]({
      'border': '1px\x20solid\x20black',
      'backgroundColor': 'orange'
    }), this[YF('0x7')] = YK, this[YF('0x8')] = !0x1;
  }

  [YF('0x9')](YL) {
  }

  [YF('0xa')](YM) {
    let YN;
    var YO = this[YF('0x7')];
    YO == c6['lt'] ? YN = YF('0xb') : YO == c6['ct'] ? YN = YF('0xc') : YO == c6['rt'] ? YN = YF('0xd') : YO == c6['lm'] ? YN = YF('0xe') : YO == c6['rm'] ? YN = YF('0xf') : YO == c6['lb'] ? YN = YF('0x10') : YO == c6['cb'] ? YN = YF('0x11') : YO == c6['rb'] && (YN = 'se-resize'), this[YF('0x2')][YF('0x3')]['setCursor'](YN);
  }

  ['mouseoutHandler'](YP) {
  }

  [YF('0x12')](YQ) {
    YQ[YF('0x13')]();
  }

  [YF('0x14')](YR) {
    YR[YF('0x13')]();
  }

  [YF('0x15')](YS) {
    YS[YF('0x13')]();
    var YT = this[YF('0x1')]['editor'][YF('0x3')], YU = this[YF('0x7')];
    let YV = this['selectedGroup'];
    if (0x0 == YV[YF('0x16')]()[YF('0x17')]) throw new Error(YF('0x18'));
    let YW = YT['pickedObject'];
    YS = YT[YF('0x19')], YT = YW[YF('0x1a')](YS['x'], YS['y']), YS = YW[YF('0x1b')](YU);
    let YX = YT['x'] - YS['x'], YY = YT['y'] - YS['y'];
    YU == c6['lt'] ? (YX = -YX, YY = -YY) : YU == c6['ct'] ? (YX = 0x0, YY = -YY) : YU == c6['rt'] ? YY = -YY : YU == c6['lm'] ? (YX = -YX, YY = 0x0) : YU == c6['rm'] ? YY = 0x0 : YU == c6['lb'] ? YX = -YX : YU == c6['cb'] ? YX = 0x0 : c6['rb'], this['adjustFixedDirection'](YW, {
      'dx': YX,
      'dy': YY
    }, YU);
  }

  [YF('0x1c')](YZ, Z0, Z1) {
    var Z2 = c8[Z1], Z1 = YZ[YF('0x1b')](Z2), Z1 = YZ['transformPoint'](Z1);
    YZ['resizeWith'](Z0['dx'], Z0['dy']);
    Z0 = YZ[YF('0x1b')](Z2), Z0 = YZ['transformPoint'](Z0), Z2 = Z1['x'] - Z0['x'], Z0 = Z1['y'] - Z0['y'];
    YZ[YF('0x1d')](Z2, Z0), this[YF('0x1')][YF('0x1e')]();
  }
}

var Z5 = ['resizeTo', 'name', 'mousemoveHandler', 'setCursor', 'move', 'mousedownHandler', 'getNoChildrensObjects', 'length', 'selectedGroup.length\x20is\x200!', 'pickedObject', 'elementInitAngle', 'rotation', 'mouseInitAngle', 'mouseupHandler', 'preventDefault', 'parent', 'rotateTo', 'updateSize', 'mouseInfo', 'getPosition', 'point', 'atan2', 'isNodeRotatePoint', 'nodeCtrlBox', 'editor', 'selectedGroup', 'stage', 'css', 'orange'];
!function (Z6) {
  !function (Z7) {
    for (; --Z7;) Z6['push'](Z6['shift']());
  }(0x135);
}(Z5);
var Z8 = function (Z9, Za) {
  return Z5[Z9 = +Z9];
};

function Zb(Zc, Zd) {
  var Ze = Zd[Z8('0x0')], Zd = Zc[Z8('0x1')]('center');
  let Zg = Zc['getStageTransform']();
  Zd = Zg[Z8('0x2')](Zd);
  return Math[Z8('0x3')](Ze['y'] - Zd['y'], Ze['x'] - Zd['x']);
}

class Zh extends IX {
  constructor(Zi, Zj) {
    super(), this[Z8('0x4')] = !0x0, this[Z8('0x5')] = Zi, this[Z8('0x6')] = Zi[Z8('0x6')], this['stage'] = this[Z8('0x6')]['stage'], this[Z8('0x7')] = this[Z8('0x8')][Z8('0x7')], this[Z8('0x9')]({
      'border': '1px\x20solid\x20black',
      'backgroundColor': Z8('0xa')
    }), this[Z8('0xb')](0xe, 0xe), this[Z8('0xc')] = Zj;
  }

  [Z8('0xd')](Zk) {
    this[Z8('0x8')][Z8('0xe')](Z8('0xf'));
  }

  [Z8('0x10')](Zl) {
    Zl['preventDefault']();
    var Zm = this[Z8('0x8')];
    if (0x0 == this[Z8('0x7')][Z8('0x11')]()[Z8('0x12')]) throw new Error(Z8('0x13'));
    Zl = Zm[Z8('0x14')];
    this[Z8('0x15')] = Zl[Z8('0x16')], this[Z8('0x17')] = Zb(Zl, Zm);
  }

  [Z8('0x18')](Zn) {
    this[Z8('0x8')][Z8('0xe')]('auto'), Zn[Z8('0x19')]();
  }

  ['mousedragHandler'](Zo) {
    Zo[Z8('0x19')]();
    let Zp = this[Z8('0x1a')];
    var Zq = Zp[Z8('0x6')], Zo = Zq['stage'];
    let Zs = Zq['stage']['selectedGroup'];
    if (0x0 == Zs[Z8('0x11')]()[Z8('0x12')]) throw new Error(Z8('0x13'));
    let Zt = Zo[Z8('0x14')];
    Zo = Zb(Zt, Zo) - this[Z8('0x17')];
    Zt[Z8('0x1b')](this[Z8('0x15')] + Zo), Zp[Z8('0x1c')]();
  }
}

var Zu = ['getPosition', 'addChild', 'attachTo', 'editable', 'attach\x20not\x20Node\x20or\x20not\x20editable', 'currNode', 'updateSize', 'show', 'isSelected', 'parent', 'hide', 'viewClone', 'initPoints', 'getChildren', 'length', 'name', 'translateCenterTo', 'point', 'center', 'atan2', 'resizeTo', 'zIndex', 'NodeCtrlBox', 'mouseEnabled', 'css', 'mouseoutStageHandler', 'initCtrlPoint', 'getCtrlPoints', 'createCtrlPoint', 'rotate'];
!function (Zv) {
  !function (Zw) {
    for (; --Zw;) Zv['push'](Zv['shift']());
  }(0x142);
}(Zu);
var Zx = function (Zy, Zz) {
  return Zu[Zy = +Zy];
};

class ZA extends so {
  constructor(ZB, ZC, ZD, ZE, ZF) {
    super(null, ZC, ZD, ZE, ZF), this[Zx('0x0')] = c9[Zx('0x1')], this['editor'] = ZB, this[Zx('0x2')] = !0x1, this[Zx('0x3')]({});
  }

  [Zx('0x4')](ZG) {
  }

  ['mouseenterStageHandler'](ZH) {
  }

  [Zx('0x5')](ZI) {
    this['removeAllChild']();
    let ZJ = ZI[Zx('0x6')](), ZK = this;
    ZJ['forEach'](ZJ => {
      if (ZK[Zx('0x7')](ZJ), ZJ == Zx('0x8')) {
        ZJ = ZK['createCtrlPoint'](Zx('0x8'));
        let ZI = new yU(null, ZJ, function () {
          return ZK[Zx('0x9')](c6['ct']);
        });
        ZI[Zx('0x2')] = !0x1, ZK[Zx('0xa')](ZI);
      }
    });
  }

  ['createCtrlPoint'](ZN) {
    let ZO;
    return ZO = new (ZN == (Zx('0x8')) ? Zh : YI)(this, ZN), this[Zx('0xa')](ZO), ZO;
  }

  [Zx('0xb')](ZP) {
    if (0x1 != ZP[Zx('0xc')]) throw new Error(Zx('0xd'));
    null !== this[Zx('0xe')] && this[Zx('0x5')](ZP), this[Zx('0xe')] = ZP, this[Zx('0xf')](), this[Zx('0x10')]();
  }

  [Zx('0xf')]() {
    var ZQ = this['currNode'];
    if (null == ZQ || 0x0 == ZQ[Zx('0x11')] || null == ZQ[Zx('0x12')]) return this[Zx('0xe')] = null, void this[Zx('0x13')]();
    this[Zx('0x14')](ZQ), this[Zx('0x15')]();
  }

  ['initPoints']() {
    for (var ZR = this[Zx('0x16')](), ZS = 0x0; ZS < ZR[Zx('0x17')]; ZS++) {
      let ZT = ZR[ZS];
      if (!ZT['isLink']) {
        let ZR;
        ZT[Zx('0x18')] == Zx('0x8') ? (ZR = this['getPosition'](c6['ct']), ZR['y'] -= 0x1e) : ZR = this[Zx('0x9')](ZT[Zx('0x18')]), ZT[Zx('0x19')](ZR['x'], ZR['y']);
      }
    }
  }

  ['viewClone'](ZV) {
    let ZW = ZV['getStageTransform']();
    var ZX = ZW[Zx('0x1a')](ZV[Zx('0x9')](c6[Zx('0x1b')])), ZY = ZW[Zx('0x1a')](ZV[Zx('0x9')](c6['rm'])),
      ZZ = Math[Zx('0x1c')](ZY['y'] - ZX['y'], ZY['x'] - ZX['x']);
    ZW[Zx('0x8')](-ZZ);
    var a03 = ZW['point'](ZV[Zx('0x9')](c6[Zx('0x1b')])), ZY = ZW['point'](ZV[Zx('0x9')](c6['rb'])),
      ZV = 0x2 * (ZY['x'] - a03['x']), a03 = 0x2 * (ZY['y'] - a03['y']);
    this[Zx('0x1d')](ZV, a03), this['rotateTo'](ZZ), this['translateCenterTo'](ZX['x'], ZX['y']);
  }
}

var a04 = ['stage', 'setCursor', 'move', 'parent', 'attachedLink', 'points', 'name', 'fold1', 'getK', 'w_resize', 'e_resize', 's_resize', 'fold2', 'mousedownHandler', 'preventDefault', 'details', 'hide', 'mouseX', 'mouseY', 'isDragStart', 'getBeginPoint', 'resetOffset', 'setBegin', 'end', 'getEndPoint', 'setEnd', 'canConnectEndpoint', 'getConnectInfo', 'ctrlPoint', 'getPosition', 'ctrlPoint1', 'ctrlPoint2', 'setFold1Offset', 'setFold2Offset', 'center', 'setCenterOffset', 'mouseupHandler', 'target', 'begin', 'upgradeParent', 'setRadius', 'linkCtrlBox', 'editor', 'pink', 'fillColor', 'css', '1px\x20solid\x20rgba(0,0,0,0.9)', 'active', 'rgba(0,0,0,0.1)', 'unActive', 'mousemoveHandler', 'anchorBox'];
!function (a05) {
  !function (a06) {
    for (; --a06;) a05['push'](a05['shift']());
  }(0x161);
}(a04);
var a07 = function (a08, a09) {
  return a04[a08 = +a08];
};

class a0a extends IX {
  constructor(a0b) {
    super(null, 0x0, 0x0), this[a07('0x0')](0x7), this[a07('0x1')] = a0b, this[a07('0x2')] = this[a07('0x1')][a07('0x2')], this['isConnectPoint'] = !0x0;
    a0b = a07('0x3');
    this[a07('0x4')] = a0b, this[a07('0x5')]({'border': a07('0x6'), 'backgroundColor': a0b});
  }

  [a07('0x7')]() {
    this[a07('0x5')]({'backgroundColor': a07('0x8'), 'borderColor': a07('0x8')});
  }

  [a07('0x9')]() {
    var a0c = this['fillColor'];
    this[a07('0x5')]({'backgroundColor': a0c, 'borderColor': 'rgba(0,0,0,0.9)'});
  }

  [a07('0xa')](a0d) {
    this['editor'][a07('0xb')]['hide'](), this['editor'][a07('0xc')][a07('0xd')](c4[a07('0xe')]);
    var a0e = this[a07('0xf')];
    let a0f = a0e[a07('0xf')]['stage'], a0g = a0e[a07('0x10')];
    if (a0g instanceof V3) {
      let a0d;
      var a0i = a0g[a07('0x11')][0x0], a0j = a0g[a07('0x11')][0x1], a0k = a0g[a07('0x11')][0x4],
        a0l = a0g[a07('0x11')][0x5];
      this[a07('0x12')] == c6[a07('0x13')] ? (a0e = rq(a0g[a07('0x14')](0x0, 0.5)), a0d = a0e ? a0j['x'] > a0i['x'] ? c4[a07('0x15')] : c4[a07('0x16')] : a0j['y'] > a0i['y'] ? c4[a07('0x17')] : c4['n_resize']) : this[a07('0x12')] == c6[a07('0x18')] ? (a0i = rq(a0g[a07('0x14')](0x4, 0.5)), a0d = a0i ? a0k['x'] > a0l['x'] ? c4['w_resize'] : c4[a07('0x16')] : a0k['y'] > a0l['y'] ? c4[a07('0x17')] : c4['n_resize']) : this[a07('0x12')] == c6['center'] && (a0l = rq(a0g[a07('0x14')](0x2, 0.5)), a0d = a0l ? c4[a07('0x17')] : c4[a07('0x16')]), a0d && a0f[a07('0xd')](a0d);
    }
  }

  [a07('0x19')](a0m) {
    this[a07('0x2')]['stage'][a07('0xd')](c4['corosshair']), this['canConnectEndpoint'] = null, a0m[a07('0x1a')]();
  }

  ['mousedragHandler'](a0n) {
    var a0o = a0n[a07('0x1b')];
    a0n['preventDefault']();
    var a0p = this[a07('0xf')], a0n = a0p[a07('0xf')][a07('0xc')];
    const a0r = a0n[a07('0x2')];
    let a0s = a0p[a07('0x10')];
    a0r[a07('0xb')][a07('0x1c')]();
    var a0t, a0u, a0p = this[a07('0x12')], a0n = a0s['stageToLocalXY'](a0n[a07('0x1d')], a0n[a07('0x1e')]);
    if (a0o[a07('0x1f')] && this[a07('0x7')](), a0p == c6['begin']) {
      let a0o = a0s[a07('0x20')]();
      a0o['x'] += a0n['x'] - a0o['x'], a0o['y'] += a0n['y'] - a0o['y'], a0s instanceof V3 && a0s[a07('0x21')](), a0s[a07('0x22')](a0o), this['canConnectEndpoint'] = a0r[a07('0xb')]['getConnectInfo'](a0s, null, null);
    } else if (a0p == c6[a07('0x23')]) {
      let a0o = a0s[a07('0x24')]();
      a0o['x'] += a0n['x'] - a0o['x'], a0o['y'] += a0n['y'] - a0o['y'], a0s instanceof V3 && a0s[a07('0x21')](), a0s[a07('0x25')](a0o), this[a07('0x26')] = a0r[a07('0xb')][a07('0x27')](a0s, null, null);
    }
    a0s instanceof JG ? this[a07('0x12')] == c6[a07('0x28')] && (null == a0s['ctrlPoint'] ? a0s[a07('0x28')] = a0s[a07('0x29')](a0p) : (a0s['ctrlPoint']['x'] += a0n['x'] - a0s[a07('0x28')]['x'], a0s[a07('0x28')]['y'] += a0n['y'] - a0s[a07('0x28')]['y'])) : a0s instanceof An ? a0p == c6[a07('0x2a')] ? null == a0s[a07('0x2a')] ? a0s[a07('0x2a')] = a0s[a07('0x29')](a0p) : (a0s['ctrlPoint1']['x'] += a0n['x'] - a0s['ctrlPoint1']['x'], a0s[a07('0x2a')]['y'] += a0n['y'] - a0s[a07('0x2a')]['y']) : a0p == c6[a07('0x2b')] && (null == a0s[a07('0x2b')] ? a0s['ctrlPoint2'] = a0s[a07('0x29')](a0p) : (a0s['ctrlPoint2']['x'] += a0n['x'] - a0s['ctrlPoint2']['x'], a0s[a07('0x2b')]['y'] += a0n['y'] - a0s[a07('0x2b')]['y'])) : a0s instanceof V3 && (a0p == c6[a07('0x13')] ? (a0t = a0s[a07('0x29')](c6[a07('0x13')]), a0o = a0n['x'] - a0t['x'], a0t = a0n['y'] - a0t['y'], a0s[a07('0x2c')](a0o, a0t)) : a0p == c6[a07('0x18')] ? (a0u = a0s[a07('0x29')](c6[a07('0x18')]), a0t = a0n['x'] - a0u['x'], a0u = a0n['y'] - a0u['y'], a0s[a07('0x2d')](a0t, a0u)) : a0p == c6[a07('0x2e')] && (a0u = a0s[a07('0x29')](c6[a07('0x2e')]), a0p = a0n['x'] - a0u['x'], a0u = a0n['y'] - a0u['y'], a0s[a07('0x2f')](a0p, a0u)));
  }

  [a07('0x30')](a0z) {
    var a0A, a0B;
    a0z['preventDefault'](), this[a07('0x9')]();
    let a0C = this[a07('0xf')][a07('0x10')];
    null != this[a07('0x26')] && ((a0B = (a0A = this[a07('0x26')])['target'])['isLink'] ? (a0z = a0B)['end'][a07('0x31')] !== a0C && a0z[a07('0x32')][a07('0x31')] !== a0C && (this[a07('0x12')] == c6['begin'] ? a0C[a07('0x22')](a0z, a0A) : this[a07('0x12')] == c6['end'] && a0C[a07('0x25')](a0z, a0A), a0C['upgradeParent']()) : (this[a07('0x12')] == c6[a07('0x32')] ? a0C[a07('0x22')](a0B, a0A) : this['name'] == c6[a07('0x23')] && a0C[a07('0x25')](a0B, a0A), a0C[a07('0x33')]()), this[a07('0x26')] = null);
  }
}

var a0D = ['ctrlPoint', 'hideAllPoint', 'updateFllow', 'getStageTransform', 'length', 'getPosition', 'point', 'translateTo', 'show', 'removeAllChild', 'isPoint', 'isDisplayObject', 'zIndex', 'LinkCtrlBox', 'attachedLink', 'ctrlPointStyle', 'anchorNameStr', 'init', 'mouseoutStageHandler', 'mouseenterStageHandler', 'createNodeResizePoint', 'name', 'addChild', 'ctrlPointInfo', 'draw', 'visible', 'updateSize', 'editor', 'stage', 'pickedObject', 'parent', 'hide', 'attachTo', 'updateCtrlPoints', 'getAnchorPoints', 'join', 'begin', 'end', 'fillColor', 'background', 'css', 'orange', 'ctrlPoint1', 'setBegin', 'center', 'setEnd', 'Link', 'ctrlPoint2'];
!function (a0E) {
  !function (a0F) {
    for (; --a0F;) a0E['push'](a0E['shift']());
  }(0x1bd);
}(a0D);
var a0G = function (a0H, a0I) {
  return a0D[a0H = +a0H];
};

class a0J extends kg {
  constructor(a0K) {
    super(), this[a0G('0x0')] = c9[a0G('0x1')], this['editor'] = a0K, this[a0G('0x2')] = null, this[a0G('0x3')] = new da({}), this[a0G('0x4')] = null, this[a0G('0x5')]();
  }

  [a0G('0x6')](a0L) {
  }

  [a0G('0x7')](a0M) {
  }

  [a0G('0x8')](a0N) {
    let a0O = new a0a(this);
    return a0O[a0G('0x9')] = a0N, this[a0G('0xa')](a0O), a0O;
  }

  [a0G('0x5')]() {
    this[a0G('0xb')] = {};
  }

  [a0G('0xc')](a0P) {
    0x0 != this[a0G('0xd')] && this[a0G('0xe')]();
  }

  [a0G('0xe')]() {
    var a0Q = this[a0G('0xf')][a0G('0x10')][a0G('0x11')];
    this[a0G('0x2')] ? null == this[a0G('0x2')][a0G('0x12')] || null == a0Q || this[a0G('0x2')] != a0Q ? (this[a0G('0x2')] = null, this[a0G('0x13')]()) : this[a0G('0x14')](this[a0G('0x2')]) : this[a0G('0x13')]();
  }

  [a0G('0x15')](a0R) {
    let a0S = (this[a0G('0x2')] = a0R)[a0G('0x16')]();
    this[a0G('0x4')] = a0S[a0G('0x17')](',');
    for (let a0R = 0x0; a0R < a0S['length']; a0R++) {
      var a0U = a0S[a0R];
      let a0V = this[a0G('0xb')][a0U];
      if (null == a0V) {
        if (a0V = this[a0G('0x8')](a0U), a0U != c6[a0G('0x18')] && a0U != c6[a0G('0x19')] && (a0V[a0G('0x1a')] = this[a0G('0x3')][a0G('0x1b')], a0V[a0G('0x1c')]({
          'border': '1px\x20solid\x20gray',
          'background': a0G('0x1d')
        }), a0V['isConnectPoint'] = !0x1), a0U == a0G('0x1e')) {
          let a0R = new yU();
          a0R[a0G('0x1c')]({'lineDash': [0x2, 0x2]}), a0R[a0G('0x1f')](a0V, a0G('0x20'));
          var a0X = this['ctrlPointInfo'][a0G('0x18')];
          a0R[a0G('0x21')](a0X, a0G('0x20')), this['addChild'](a0R), this[a0G('0xb')][a0U + a0G('0x22')] = a0R;
        } else if (a0U == a0G('0x23')) {
          let a0R = new yU();
          a0R[a0G('0x1c')]({'lineDash': [0x2, 0x2]}), a0R[a0G('0x1f')](a0V, 'center');
          var a0Z = this['ctrlPointInfo']['end'];
          a0R[a0G('0x21')](a0Z, a0G('0x20')), this['addChild'](a0R), this[a0G('0xb')][a0U + a0G('0x22')] = a0R;
        } else if (a0U == a0G('0x24')) {
          let a0R = new yU();
          a0R[a0G('0x1c')]({'lineDash': [0x2, 0x2]}), a0R[a0G('0x1f')](a0V, a0G('0x20'));
          a0Z = this['ctrlPointInfo'][a0G('0x18')];
          a0R[a0G('0x21')](a0Z, a0G('0x20')), this[a0G('0xa')](a0R), this['ctrlPointInfo'][a0U + a0G('0x22')] = a0R;
        }
        this[a0G('0xb')][a0U] = a0V;
      }
    }
  }

  [a0G('0x25')]() {
    let a11 = this[a0G('0xb')];
    for (var a12 in a11) a11[a12][a0G('0x13')]();
  }

  [a0G('0x26')]() {
    const a13 = this[a0G('0x2')];
    let a14 = a13[a0G('0x27')]();
    var a15 = a13[a0G('0x16')]();
    this['hideAllPoint']();
    for (let a16 = 0x0; a16 < a15[a0G('0x28')]; a16++) {
      var a17 = a15[a16];
      let a18 = this[a0G('0xb')][a17];
      var a19 = a13[a0G('0x29')](a17);
      cc(a19, a13, a17);
      a19 = a14[a0G('0x2a')](a19);
      a18[a0G('0x2b')](a19['x'] - 0x5, a19['y'] - 0x5), a18[a0G('0x2c')]();
      let a1a = this[a0G('0xb')][a17 + 'Link'];
      a1a && a1a['show']();
    }
  }

  [a0G('0x14')](a1b) {
    if (null != a1b[a0G('0x12')]) {
      if (this[a0G('0x2')] === a1b) return a1b instanceof V3 && a1b[a0G('0x16')]()[a0G('0x17')](',') != this[a0G('0x4')] && this['updateCtrlPoints'](a1b), this[a0G('0x26')](), void this[a0G('0x2c')]();
      this[a0G('0xb')] = {}, this[a0G('0x2d')](), this[a0G('0x15')](a1b), this[a0G('0x26')](), this[a0G('0x2c')]();
    }
  }

  [a0G('0x2e')](a1c) {
    return !a1c[a0G('0x2f')] && ('object' == typeof a1c && null != a1c['x'] && null != a1c['y']);
  }
}

var a1d = ['gray', 'prototype', 'anchorBox', 'editor', 'stage', 'resizeTo', 'unactive', 'css', '1px\x20solid\x20gray', 'name', 'link', 'intersect', 'mouseenterHandler', 'active', 'mouseoutHandler', 'mousedownHandler', 'preventDefault', 'showTip', '画线开始', 'setCursor', 'crosshair', 'mousedragHandler', 'buttons', 'auto', 'hide', 'target', 'details', 'isDragStart', 'intersectNode', 'rate', 'segIndex', 'record', 'newLink', 'mouseEnabled', 'parent', 'stageToLocalXY', 'mouseY', 'end', 'getConnectInfo', 'mouseupHandler', 'isDragEnd', 'show', 'update', 'upgradeParent', 'draw', 'radius', 'width', 'beginPath', 'height', 'arc', 'beginAngle', 'endAngle', 'strokeAndFill', 'mousePickupPath', 'isActive', 'red'];
!function (a1e) {
  !function (a1f) {
    for (; --a1f;) a1e['push'](a1e['shift']());
  }(0x153);
}(a1d);
var a1g = function (a1h, a1i) {
  return a1d[a1h = +a1h];
};

class a1j extends IX {
  constructor(a1k, a1l, a1m, a1n, a1o) {
    super(null, a1l, a1m, a1n, a1o), this[a1g('0x0')] = a1k, this[a1g('0x1')] = a1k['editor'], this[a1g('0x2')] = this[a1g('0x1')]['stage'], this[a1g('0x3')](0xf, 0xf), this[a1g('0x4')](), this[a1g('0x5')]({'border': a1g('0x6')}), this[a1g('0x7')], this[a1g('0x8')], this['end'];
  }

  ['setIntersect'](a1p) {
    this[a1g('0x9')] = a1p;
  }

  [a1g('0xa')](a1q) {
    this[a1g('0xb')]();
  }

  [a1g('0xc')](a1r) {
    this[a1g('0x4')]();
  }

  [a1g('0xd')](a1s) {
    a1s[a1g('0xe')](), this[a1g('0x1')][a1g('0xf')](a1g('0x10')), this[a1g('0x1')]['stage'][a1g('0x11')](a1g('0x12')), this['link'] = null;
  }

  [a1g('0x13')](a1t) {
    if (0x2 != a1t[a1g('0x14')]) {
      a1t[a1g('0xe')](), this[a1g('0x1')][a1g('0x2')][a1g('0x11')](a1g('0x15'));
      const a1u = this['editor'], a1v = a1u[a1g('0x2')];
      this[a1g('0x16')]();
      var a1w = this[a1g('0x0')][a1g('0x17')];
      if (a1t[a1g('0x18')][a1g('0x19')]) {
        cj(null == this[a1g('0x8')], this[a1g('0x8')]);
        let a1x;
        a1x = this[a1g('0x7')] == a1g('0x1a') ? (a1t = this[a1g('0x0')][a1g('0x9')], new y1(a1w, a1t[a1g('0x1b')], a1t[a1g('0x1c')])) : new y5(a1w, this[a1g('0x7')]), this['editor'][a1g('0x1d')]('划线');
        const a1y = a1u[a1g('0x1e')](null, a1w, null, a1x);
        return a1y[a1g('0x1f')] = !0x1, this[a1g('0x8')] = a1y, void a1y['setEnd'](function () {
          return a1y[a1g('0x20')][a1g('0x21')](a1v['mouseX'], a1v[a1g('0x22')]);
        });
      }
      cc(this[a1g('0x8')][a1g('0x23')], this['link']), this['end'] = this[a1g('0x0')][a1g('0x24')](this[a1g('0x8')], a1w, this[a1g('0x8')]['end'][a1g('0x17')]);
    }
  }

  [a1g('0x25')](a1z) {
    if (0x0 != a1z[a1g('0x18')][a1g('0x26')]) {
      if (this[a1g('0x27')](), this['editor'][a1g('0x28')](), this['editor'][a1g('0x2')]['setCursor'](a1g('0x15')), null != this[a1g('0x8')]) {
        let a1A, a1z;
        if (null != this[a1g('0x23')]) this[a1g('0x8')]['mouseEnabled'] = !0x0, a1A = this[a1g('0x23')][a1g('0x17')], a1z = this[a1g('0x23')]; else {
          let a1z = this[a1g('0x8')][a1g('0x23')]['target'];
          'function' == typeof a1z && (a1A = a1z(), this[a1g('0x8')][a1g('0x1f')] = !0x0);
        }
        a1A && (this[a1g('0x8')]['setEnd'](a1A, a1z), this['link'][a1g('0x29')](), this[a1g('0x1')]['recordEnd']('划线'));
      }
      this['link'] = null;
    }
  }

  [a1g('0x2a')](a1D) {
    this[a1g('0x2b')] = Math['min'](0.5 * this[a1g('0x2c')], 0.5 * this['height']), a1D[a1g('0x2d')]();
    var a1E = this[a1g('0x2c')] / 0x2, a1F = this[a1g('0x2e')] / 0x2;
    a1D[a1g('0x2f')](a1E, a1F, this['radius'], this[a1g('0x30')], this[a1g('0x31')]), a1D['closePath'](), this[a1g('0x32')](a1D), this[a1g('0x33')](a1D);
  }

  [a1g('0xb')]() {
    this[a1g('0x34')] = !0x0, this[a1g('0x5')]({'backgroundColor': a1g('0x35')});
  }

  [a1g('0x4')]() {
    this[a1g('0x34')] = !0x1, this['css']({'borderColor': a1g('0x36'), 'backgroundColor': 'rgba(255,255,255,0.6)'});
  }
}

bN(a1j[a1g('0x37')], {'isActive': {'value': !0x1}});
var a1G = ['anchorDist', 'nodeDist', 'intersect', 'mouseoutStageHandler', 'mouseenterStageHandler', 'clearTarget', 'removeAllChild', 'setTarget', 'target', 'getAnchorPoints', 'fold1', 'fold2', 'createAnchorPoint', 'ctrlIntersectNode', 'intersectNode', 'activePoint', 'children', 'forEach', 'unactive', 'show', 'hide', 'rate', 'getLocalPoint', 'getStageTransform', 'point', 'translateCenterTo', 'update', 'length', 'getPosition', 'anchorBox', 'addChild', 'name', 'getMousePoint', 'displayList', 'getObjectsIntersect', 'stage', 'getConnectInfo', 'keyboard', 'Control', 'filter', 'object', 'anchorName', 'setIntersect', 'editor'];
!function (a1H) {
  !function (a1I) {
    for (; --a1I;) a1H['push'](a1H['shift']());
  }(0x108);
}(a1G);
var a1J = function (a1K, a1L) {
  return a1G[a1K = +a1K];
};

class a1M extends so {
  constructor(a1N, a1O, a1P, a1Q, a1R) {
    super(null, a1O, a1P, a1Q, a1R), this[a1J('0x0')] = a1N, this[a1J('0x1')] = 0xa, this[a1J('0x2')] = 0xa, this['ctrlIntersectNode'], this[a1J('0x3')], this['target'] = null;
  }

  [a1J('0x4')](a1S) {
  }

  [a1J('0x5')](a1T) {
  }

  [a1J('0x6')]() {
    this['target'] = null, this[a1J('0x7')](), this['hide']();
  }

  [a1J('0x8')](a1U, a1V) {
    if (this[a1J('0x9')] !== a1U) {
      if (this[a1J('0x9')] = a1U, this[a1J('0x7')](), null != a1U) {
        for (var a1W = a1U[a1J('0xa')](), a1X = 0x0; a1X < a1W['length']; a1X++) {
          var a1Y = a1W[a1X];
          a1U instanceof V3 && (a1Y == a1J('0xb') || a1Y == a1J('0xc')) || this[a1J('0xd')](a1Y);
        }
        this[a1J('0xe')] = this['createAnchorPoint'](a1J('0xf')), this['ctrlIntersectNode']['hide']();
      }
      this['update']();
    }
    this[a1J('0x10')](a1V);
  }

  ['activePoint'](a1Z) {
    this[a1J('0x11')][a1J('0x12')](a20 => {
      a20['name'] == a1Z ? a20['active']() : a20[a1J('0x13')]();
    }), this[a1J('0xe')]['hide'](), this[a1J('0x14')]();
  }

  ['setIntersect'](a21) {
    if (null != (this[a1J('0x3')] = a21)) {
      var a22 = a21[a1J('0x16')], a21 = a21['segIndex'];
      const a24 = this[a1J('0x9')];
      a21 = a24[a1J('0x17')](a22, a21);
      const a25 = a24[a1J('0x18')]();
      a21 = a25[a1J('0x19')](a21);
      this[a1J('0xe')][a1J('0x1a')](a21['x'], a21['y']), this['ctrlIntersectNode']['show']();
    } else this[a1J('0xe')][a1J('0x15')]();
  }

  [a1J('0x1b')]() {
    if (null != this['target']) {
      const a26 = this[a1J('0x9')], a27 = a26[a1J('0x18')]();
      var a28, a29 = this[a1J('0x11')];
      for (let a2a = 0x0; a2a < a29[a1J('0x1c')]; a2a++) {
        const a2b = a29[a2a];
        a2b['name'] == a1J('0xf') || (a28 = a26[a1J('0x1d')](a2b['name']), a28 = a27[a1J('0x19')](a28), a2b[a1J('0x1a')](a28['x'], a28['y']));
      }
    } else this['hide']();
  }

  [a1J('0xd')](a2c) {
    const a2d = new a1j(this);
    return a2d['name'] = a2c, (a2d[a1J('0x1e')] = this)[a1J('0x1f')](a2d), a2d;
  }

  ['getAnchorPointBy'](a2e, a2f) {
    var a2g = this[a1J('0x11')];
    for (let a2e = 0x0; a2e < a2g[a1J('0x1c')]; a2e++) if (a2g[a2e][a1J('0x20')] == a2f) return a2g[a2e];
    return null;
  }

  ['getMouseObjectIntersect'](a2i) {
    const a2j = this['editor']['stage'], a2k = this[a1J('0x0')]['currentLayer'];
    let a2l = r0(a2j[a1J('0x21')](), a2i = null == a2i ? this[a1J('0x22')] : a2i, this['nodeDist']);
    return null != a2l && (a2i = a2k['stageToLocalXY'](a2l['x'], a2l['y']), a2l['x'] = a2i['x'], a2l['y'] = a2i['y']), a2l;
  }

  [a1J('0x23')](a2m) {
    let a2n = this[a1J('0x0')][a1J('0x24')];
    return r0(a2n[a1J('0x21')](), a2m, this[a1J('0x2')]);
  }

  [a1J('0x25')](a2o, a2p, a2q) {
    const a2r = this[a1J('0x0')];
    const a2s = a2r[a1J('0x24')];
    var a2t = a2s[a1J('0x21')]();
    const a2u = a2r['currentLayer'];
    var a2v = a2r[a1J('0x26')]['isKeydown'](a1J('0x27'));
    let a2w = null, a2x;
    var a2y = a2u[a1J('0x22')][a1J('0x28')](a2p => a2p !== a2o && a2p !== a2q && a2p['mouseEnabled'] && a2p['connectable']);
    let a2A, a2B;
    a2t = ra(a2t, a2y, this[a1J('0x1')]);
    return null != a2t ? (a2A = a2t[a1J('0x29')], a2B = a2t[a1J('0x2a')], a2x = new y5(a2A, a2B), this['setTarget'](a2A, a2B)) : !a2v || null != (a2y = this[a1J('0x23')](a2y)) && (a2A = a2y[a1J('0x29')], this[a1J('0x8')](a2A, a2B), a2x = new y1(a2A, a2y[a1J('0x16')], a2y['segIndex']), this[a1J('0x2b')](a2y)), null != a2A && a2A !== a2o && a2A !== a2q && (a2w = a2x), a2w;
  }
}

var a2C = ['redoHistory', 'push', 'editor', 'length', 'pop', 'update', 'redoAll', 'cut', '添加图元', '辅助粘贴', '剪切粘贴', '连线调整', 'undoFn', 'redo', 'redoFn', 'undo', 'undoHistory'];
!function (a2D) {
  !function (a2E) {
    for (; --a2E;) a2D['push'](a2D['shift']());
  }(0xc3);
}(a2C);
var a2F = function (a2G, a2H) {
  return a2C[a2G = +a2G];
};
const a2I = {
  'cut': a2F('0x0'),
  'copy': 'copy',
  'delete': '删除',
  'modify': '修改',
  'addChild': a2F('0x1'),
  'pasteCopy': a2F('0x2'),
  'pasteCut': a2F('0x3'),
  'resize': '尺寸修改',
  'rotate': '旋转',
  'dragNodeOrLink': '位置改变',
  'modifyLink': a2F('0x4')
};

class a2J {
  constructor(a2K, a2L, a2M) {
    this['type'] = a2K, this[a2F('0x5')] = a2M, this['redoFn'] = a2L;
  }

  [a2F('0x6')]() {
    this[a2F('0x7')]();
  }

  [a2F('0x8')]() {
    this[a2F('0x5')]();
  }
}

class a2N extends cz {
  constructor(a2O) {
    super(), this['editor'] = a2O, this[a2F('0x9')] = [], this[a2F('0xa')] = [];
  }

  [a2F('0xb')](a2P, a2Q, a2R) {
    let a2S = new a2J(a2P, a2Q, a2R);
    return a2S['editor'] = this[a2F('0xc')], this['redoHistory'][a2F('0xd')] = 0x0, this['undoHistory'][a2F('0xb')](a2S), a2S;
  }

  [a2F('0x8')]() {
    if (0x0 == this[a2F('0x9')][a2F('0xd')]) return null;
    let a2T = this['undoHistory'][a2F('0xe')]();
    return a2T['undo'](), this[a2F('0xa')][a2F('0xb')](a2T), a2T;
  }

  [a2F('0x6')]() {
    if (0x0 == this[a2F('0xa')]['length']) return null;
    let a2U = this[a2F('0xa')][a2F('0xe')]();
    return a2U[a2F('0x6')](), this[a2F('0x9')][a2F('0xb')](a2U), a2U;
  }

  ['undoAll'](a2V) {
    let a2W = this;
    null == a2V && (a2V = 0x1f4), function x() {
      var a2X = a2W[a2F('0x8')]();
      a2W['editor'][a2F('0xf')](), null != a2X && setTimeout(x, a2V);
    }();
  }

  [a2F('0x10')](a2Y) {
    let a2Z = this;
    null == a2Y && (a2Y = 0x1f4), function x() {
      a2Z['editor'][a2F('0xf')](), null != a2Z['redo']() && setTimeout(x, a2Y);
    }();
  }
}

var a30 = ['getType', 'source', 'take', 'copyPut', 'type', 'copy', 'cut', 'takeSource'];
!function (a31) {
  !function (a32) {
    for (; --a32;) a31['push'](a31['shift']());
  }(0x1ca);
}(a30);
var a33 = function (a34, a35) {
  return a30[a34 = +a34];
};

class a36 {
  constructor() {
    this['type'] = null, this[a33('0x0')] = null, this[a33('0x1')] = 0x0;
  }

  [a33('0x2')](a37) {
    this['take'] = 0x0, this[a33('0x3')] = a33('0x4'), this[a33('0x0')] = a37;
  }

  ['cutPut'](a38) {
    this[a33('0x1')] = -0x1, this[a33('0x3')] = a33('0x5'), this['source'] = a38;
  }

  [a33('0x6')]() {
    return this[a33('0x1')]++, this[a33('0x0')];
  }

  ['isFirstCutPaste']() {
    return this['type'] == a2I[a33('0x5')] && 0x0 == this[a33('0x1')];
  }

  [a33('0x7')]() {
    return this[a33('0x3')];
  }
}

var a39 = ['max', 'top', 'enterTextInputMode', 'hide', 'leaveTextInputMode', 'none', 'key', 'metaKey', 'pickedObject', 'update', 'editor', 'stage', 'textarea', 'classList', 'add', 'jtopo_input_textfield', 'layersContainer', 'appendChild', 'onkeydown', 'attachTo', 'getPosition', 'toStageXY', 'width', 'isLink', 'text', 'show', 'setValue', 'value', 'setSize', 'style', 'height', 'display', 'block', 'focus'];
!function (a3a) {
  !function (a3b) {
    for (; --a3b;) a3a['push'](a3a['shift']());
  }(0x15f);
}(a39);
var a3c = function (a3d, a3e) {
  return a39[a3d = +a3d];
};

class a3f {
  constructor(a3g) {
    this[a3c('0x0')] = a3g, this[a3c('0x1')] = a3g['stage'];
    let a3h = document['createElement'](a3c('0x2'));
    a3h[a3c('0x3')][a3c('0x4')](a3c('0x5')), this[a3c('0x1')][a3c('0x6')][a3c('0x7')](a3h);
    let a3i = this;
    a3h[a3c('0x8')] = function (a3g) {
      a3i[a3c('0x8')](a3g);
    }, this['textarea'] = a3h;
  }

  [a3c('0x9')](a3k, a3l) {
    let a3m = {'x': a3l['x'] - 0x32, 'y': a3l['y']};
    if (a3k['isNode']) {
      var a3n = a3k[a3c('0xa')](c6['lt']);
      a3m = a3k[a3c('0xb')](a3n['x'], a3n['y']);
      a3l = rs(a3k[a3c('0xc')], 0x3c, 0x64), a3n = rs(a3k['height'], 0x3c, 0x64);
      this['setSize'](a3l, a3n);
    } else if (a3k[a3c('0xd')]) return;
    this['setValue'](a3k[a3c('0xe')]), this[a3c('0xf')](a3m['x'], a3m['y']);
  }

  [a3c('0x10')](a3o) {
    this['textarea'][a3c('0x11')] = a3o;
  }

  [a3c('0x12')](a3p, a3q) {
    this['textarea']['style'][a3c('0xc')] = a3p + 'px', this[a3c('0x2')][a3c('0x13')][a3c('0x14')] = a3q + 'px';
  }

  [a3c('0xf')](a3r, a3s) {
    this[a3c('0x2')][a3c('0x13')][a3c('0x15')] = a3c('0x16'), this[a3c('0x2')][a3c('0x17')](), null != a3r && (a3r = Math[a3c('0x18')](0x0, a3r), a3s = Math[a3c('0x18')](0x0, a3s), this[a3c('0x2')][a3c('0x13')]['left'] = a3r, this['textarea'][a3c('0x13')][a3c('0x19')] = a3s), this[a3c('0x0')][a3c('0x1a')]();
  }

  [a3c('0x1b')]() {
    this[a3c('0x0')][a3c('0x1c')](), this[a3c('0x2')][a3c('0x13')][a3c('0x15')] = a3c('0x1d');
  }

  ['onkeydown'](a3t) {
    let a3u = this[a3c('0x2')];
    if ('Enter' == a3t[a3c('0x1e')] && (a3t['ctrlKey'] || a3t[a3c('0x1f')])) {
      let a3t = stage[a3c('0x20')];
      null != a3t && (a3t['text'] = a3u[a3c('0x11')], a3u[a3c('0x13')][a3c('0x15')] = a3c('0x1d'), this[a3c('0x0')][a3c('0x21')](), this[a3c('0x1b')]());
    }
  }
}

var a3w = ['setItem', 'keys', 'sort', 'getAllVersions', 'length', 'getItem', 'now'];
!function (a3x) {
  !function (a3y) {
    for (; --a3y;) a3x['push'](a3x['shift']());
  }(0x1a4);
}(a3w);
var a3z = function (a3A, a3B) {
  return a3w[a3A = +a3A];
};
const a3C = {
  'getItem': function (a3D) {
    return localStorage['getItem'](a3D);
  }, 'setItem': function (a3E, a3F) {
    localStorage['setItem'](a3E, a3F);
  }, 'saveWithVersion'(a3G, a3H) {
    a3G += Date[a3z('0x0')](), this[a3z('0x1')](a3G, a3H);
  }, 'getAllVersions'(a3I) {
    return Object[a3z('0x2')](localStorage)['filter'](a3J => a3J['startsWith'](a3I))[a3z('0x3')]();
  }, 'getLastVersion'(a3K, a3L) {
    a3K = this[a3z('0x4')](a3K)['reverse']();
    if (0x0 != a3K[a3z('0x5')]) {
      a3L = a3K[a3L = (a3L = null == a3L ? 0x0 : a3L) + 0x1 >= a3K[a3z('0x5')] ? a3K[a3z('0x5')] - 0x1 : a3L];
      return this[a3z('0x6')](a3L);
    }
  }
};
var a3M = ['stage', 'selectedGroup', 'objects', 'showOpTooltip', '编组-', 'filter', 'parent', 'length', '选编组-', 'removeAll', 'addAll', 'pickedObject', 'centerBy', 'bindKey', 'preventDefault', 'KeysConfig', 'CreateGroup'];
!function (a3N) {
  !function (a3O) {
    for (; --a3O;) a3N['push'](a3N['shift']());
  }(0x1ca);
}(a3M);
var a3P = function (a3Q, a3R) {
  return a3M[a3Q = +a3Q];
};

function a3S(a3T, a3U, a3V) {
  const a3W = a3T['keyboard'];
  var a3X = a3T[a3P('0x0')][a3P('0x1')];
  let a3Y = {};

  function a3Z(a3W) {
    let a41 = a3Y[a3W];
    if (a41) return a41 = a41[a3P('0x7')](a3W => null !== a3W[a3P('0x8')]), 0x0 < a41[a3P('0x9')] && (a3T[a3P('0x5')](a3P('0xa') + a3W), a3T['stage'][a3P('0x3')][a3P('0xb')]()[a3P('0xc')](a41), a3T[a3P('0x2')][a3P('0xd')] = a41[0x0]), a41;
  }

  for (let a43 = 0x0; a43 <= 0x9; a43++) a3W[a3P('0xf')](a3X + '+' + a43, function (a3W) {
    a3W[a3P('0x10')](), a3W = a43, a3Y[a3W] = a3T[a3P('0x2')][a3P('0x3')][a3P('0x4')]['slice'](), a3T[a3P('0x5')](a3P('0x6') + a3W);
  }), a3W[a3P('0xf')]('' + a43, function (a3W) {
    a3W[a3P('0x10')](), a3Z(a43);
  }), a3W['bindKey'](a43 + '+' + a43, function (a3W) {
    a3W[a3P('0x10')](), a3Z(a43) && a3V[a3P('0xe')](a3U[a3P('0x3')][a3P('0x4')]);
  });
}

var a47 = ['cutHandler', 'showOpTooltip', 'copyHandler', 'pasteHandler', 'Undo', 'undoHandler', 'redoHandler', 'Select_all', 'getAllVisiable', 'Select_invert', 'selectedGroup', 'getNoChildrensObjects', 'select', 'filter', 'notContains', 'Save', 'saveHandler', 'openLasted', 'Copy_style', 'styleCopyHandler', 'paste_Style', '粘贴样式', 'stylePasteHandler', 'Move_left', 'isNode', 'forEach', 'Move_right', 'Move_up', 'Layout_tree', 'doTreeLayout', 'keydown', 'update', 'keyup', 'Shift', 'stage', 'currentLayer', 'keyboard', 'KeysConfig', 'bindKey', 'Delete', 'deleteHandler', 'Cut'];
!function (a48) {
  !function (a49) {
    for (; --a49;) a48['push'](a48['shift']());
  }(0xf4);
}(a47);
var a4a = function (a4b, a4c) {
  return a47[a4b = +a4b];
};

function a4d(a4e) {
  const a4f = a4e[a4a('0x1')], a4g = a4e[a4a('0x2')];
  let a4h = a4e[a4a('0x3')];
  var a4i = a4e[a4a('0x4')];

  function a4j(a4i, a4j, a4e) {
    a4i['forEach'](a4i => {
      a4h[a4a('0x5')](a4i, function (a4i) {
        a4j(a4i);
      }, a4e);
    });
  }

  a4j(a4i[a4a('0x6')], a4i => a4e[a4a('0x7')](a4i)), a4j(a4i[a4a('0x8')], a4i => a4e[a4a('0x9')](a4i)), a4j(a4i['Copy'], a4i => {
    a4e[a4a('0xa')]('复制'), a4e[a4a('0xb')](a4i);
  }), a4j(a4i['Paste'], a4i => a4e[a4a('0xc')](a4i)), a4j(a4i[a4a('0xd')], a4i => {
    a4e[a4a('0xa')]('撤销'), a4e[a4a('0xe')](a4i);
  }), a4j(a4i['Redo'], a4i => {
    a4e[a4a('0xa')]('重做'), a4e[a4a('0xf')](a4i);
  }), a4j(a4i[a4a('0x10')], a4i => {
    a4e[a4a('0xa')]('全选'), a4f['select'](a4g[a4a('0x11')]());
  }), a4j(a4i[a4a('0x12')], a4i => {
    a4e[a4a('0xa')]('反选');
    let a4j = a4f[a4a('0x13')][a4a('0x14')]();
    a4f[a4a('0x15')](a4g['displayList'][a4a('0x16')](a4i => a4j[a4a('0x17')](a4i)));
  }), a4j(a4i[a4a('0x18')], a4i => {
    a4e[a4a('0xa')]('保存'), a4e[a4a('0x19')](a4i);
  }, !0x1), a4j(a4i['Open'], a4i => {
    a4e[a4a('0xa')]('打开'), a4e[a4a('0x1a')](a4i);
  }, !0x1), a4j(a4i[a4a('0x1b')], a4i => {
    a4e[a4a('0xa')]('复制样式'), a4e[a4a('0x1c')](a4i);
  }, !0x1), a4j(a4i[a4a('0x1d')], a4i => {
    a4e[a4a('0xa')](a4a('0x1e')), a4e[a4a('0x1f')](a4i);
  }, !0x1), a4j(a4i[a4a('0x20')], a4i => {
    let a4j = a4f[a4a('0x13')][a4a('0x14')]()[a4a('0x16')](a4i => a4i[a4a('0x21')]);
    a4j[a4a('0x22')](a4i => {
      --a4i['x'];
    });
  }), a4j(a4i[a4a('0x23')], a4i => {
    let a4j = a4f[a4a('0x13')][a4a('0x14')]()[a4a('0x16')](a4i => a4i[a4a('0x21')]);
    a4j['forEach'](a4i => {
      a4i['x'] += 0x1;
    });
  }), a4j(a4i[a4a('0x24')], a4i => {
    let a4j = a4f[a4a('0x13')]['getNoChildrensObjects']()[a4a('0x16')](a4i => a4i['isNode']);
    a4j['forEach'](a4i => {
      --a4i['y'];
    });
  }), a4j(a4i['Move_down'], a4i => {
    let a4j = a4f['selectedGroup'][a4a('0x14')]()[a4a('0x16')](a4i => a4i[a4a('0x21')]);
    a4j[a4a('0x22')](a4i => {
      a4i['y'] += 0x1;
    });
  }), a4j(a4i[a4a('0x25')], a4i => {
    a4e[a4a('0x26')]();
  }), a4j(a4i['Layout_grid'], a4i => {
    a4e['doGridLayout']();
  }), a3S(a4e, a4f, a4g), a4h['on'](a4a('0x27'), function () {
    a4e[a4a('0x28')]();
  }), a4h['on'](a4a('0x29'), function () {
    a4e[a4a('0x28')]();
  });
}

a4a('0x0');
var a4V = ['parent', 'isLink', 'addChild', 'getPaintedAABBInLayer', 'isAncestors', 'length', 'isIntersectRect', 'currentLayer', 'getAllVisiable', 'filter', 'visible', 'isSelected', 'mouseEnabled', 'isOutOfParent'];
!function (a4W) {
  !function (a4X) {
    for (; --a4X;) a4W['push'](a4W['shift']());
  }(0xf6);
}(a4V);
var a4Y = function (a4Z, a50) {
  return a4V[a4Z = +a4Z];
};

function a51(a52, a53) {
  let a54 = a52[a4Y('0x0')];
  var a55 = a52[a4Y('0x0')][a4Y('0x1')]()[a4Y('0x2')](a52 => a52[a4Y('0x3')] && a52['isNode'] && 0x1 != a52[a4Y('0x4')] && a52[a4Y('0x5')]);
  let a57 = a53[a4Y('0x2')](a52 => a52[a4Y('0x6')]() || a52[a4Y('0x7')] === a54), a58;
  for (let a52 = 0x0; a52 < a57['length']; a52++) {
    var a5b = a57[a52];
    if (a58 = a5d(a5b, a55), null != a58) break;
  }
  return null == a58 && (a58 = a54, a57 = a57[a4Y('0x2')](a52 => a52['parent'] !== a54)), cf(null == a58[a4Y('0x8')], !0x0, a58), {
    'parent': a58,
    'objects': a57
  };
}

function a5d(a5e, a5f) {
  var a5g = a5e[a4Y('0xa')](),
    a5h = a5f['filter'](a5f => a5f !== a5e[a4Y('0x7')] && a5f !== a5e && !a5e[a4Y('0xb')](a5f));
  for (let a5e = a5h[a4Y('0xc')] - 0x1; 0x0 <= a5e; a5e--) {
    const a5k = a5h[a5e];
    let a5f = a5k[a4Y('0xa')]();
    if (a5f[a4Y('0xd')](a5g)) return a5k;
  }
  return null;
}

var a5m = ['translateWith', 'getRight', '底部对齐', 'getBottom', 'stage', 'getNoChildrensObjects', 'isAlone', 'length', 'getAABB', '左对齐', '右对齐'];
!function (a5n) {
  !function (a5o) {
    for (; --a5o;) a5n['push'](a5n['shift']());
  }(0x14f);
}(a5m);
var a5p = function (a5q, a5r) {
  return a5m[a5q = +a5q];
};

function a5s(a5t, a5u) {
  let a5v = a5u[a5p('0x0')]['selectedGroup'][a5p('0x1')]();
  if (a5v = a5v['filter'](a5u => a5u['isNode'] || a5u[a5p('0x2')]()), 0x0 != a5v[a5p('0x3')]) {
    let a5x = a5v[a5p('0x4')](!0x1, co);
    for (let a5y = 0x0; a5y < a5v['length']; a5y++) {
      let a5u = a5v[a5y], a5A = a5u[a5p('0x4')](!0x1, co);
      a5t == a5p('0x5') ? a5u['translateWith'](a5x['x'] - a5A['x'], 0x0) : a5t == a5p('0x6') ? a5u[a5p('0x7')](a5x[a5p('0x8')]() - a5A['getRight'](), 0x0) : '顶部对齐' == a5t ? a5u[a5p('0x7')](0x0, a5x['y'] - a5A['y']) : a5t == a5p('0x9') && a5u[a5p('0x7')](0x0, a5x[a5p('0xa')]() - a5A['getBottom']());
    }
  }
}

var a5B = ['右对齐', '顶部对齐', '底部对齐', '左右等距', '上下等距', 'updatezIndex', 'update', '\x0a<div\x20class=\x22header\x22>编辑</div>\x0a<a>剪切</a>\x0a<a>复制</a>\x0a<a>粘贴</a>\x0a<a>删除</a>\x20\x0a<hr></hr>\x0a<div\x20class=\x22header\x22>前后</div>\x0a<a>上移一层</a>\x0a<a>下移一层</a>\x0a<a>移至顶部</a>\x0a<a>移至底部</a>\x0a<div\x20class=\x22header\x22>对齐</div>\x0a<a>左对齐</a>\x0a<a>右对齐</a>\x0a<a>顶部对齐</a>\x0a<a>底部对齐</a>\x0a', 'stage', 'addEventListener', 'select', 'item', 'pickedObject', 'cutHandler', 'copyHandler', 'pasteHandler', 'deleteHandler', '上移一层', 'zIndex', '下移一层', '移至顶部', '移至底部', 'alignHandler', '左对齐'];
!function (a5C) {
  !function (a5D) {
    for (; --a5D;) a5C['push'](a5C['shift']());
  }(0x158);
}(a5B);
var a5E = function (a5F, a5G) {
  return a5B[a5F = +a5F];
};
let a5H = a5E('0x0');

function a5I(a5J) {
  const a5K = a5J[a5E('0x1')];
  let a5L = new Uw(a5K, a5H);
  return a5L[a5E('0x2')](a5E('0x3'), function (a5L) {
    a5L = a5L[a5E('0x4')];
    let a5N = a5K[a5E('0x5')];
    '剪切' == a5L ? a5J[a5E('0x6')]() : '复制' == a5L ? a5J[a5E('0x7')]() : '粘贴' == a5L ? a5J[a5E('0x8')](!0x0) : '删除' == a5L && a5J[a5E('0x9')](), null != a5N && (a5L == a5E('0xa') ? a5N[a5E('0xb')]++ : a5L == a5E('0xc') ? a5N[a5E('0xb')]-- : a5L == a5E('0xd') ? a5N[a5E('0xb')] = 0x3e8 : a5L == a5E('0xe') ? a5N['zIndex'] = 0x0 : '左对齐' == a5L ? a5J[a5E('0xf')](a5E('0x10')) : '右对齐' == a5L ? a5J[a5E('0xf')](a5E('0x11')) : a5L == a5E('0x12') ? a5J[a5E('0xf')](a5E('0x12')) : a5L == a5E('0x13') ? a5J[a5E('0xf')](a5E('0x13')) : a5L == a5E('0x14') ? a5J[a5E('0xf')]('左右等距') : a5L == a5E('0x15') && a5J['alignHandler'](a5E('0x15')), a5N[a5E('0xb')] < 0x0 ? a5N[a5E('0xb')] = 0x0 : 0x3e8 < a5N[a5E('0xb')] && (a5N[a5E('0xb')] = 0x3e8), a5N['parent'][a5E('0x16')](), a5J[a5E('0x17')]());
  }), a5L;
}

var a5O = ['guildlineS', 'stage', 'setEnd', 'show', 'setBegin', 'height', 'css', 'hide', 'guildlineW', 'handlerLayer', 'addChild', 'mouseEnabled', '#c8c8c8'];
!function (a5P) {
  !function (a5Q) {
    for (; --a5Q;) a5P['push'](a5P['shift']());
  }(0x180);
}(a5O);
var a5R = function (a5S, a5T) {
  return a5O[a5S = +a5S];
};

function a5U(a5V) {
  const a5W = new yU();
  a5W['mouseEnabled'] = !0x1, a5W[a5R('0x0')]({
    'strokeStyle': '#c8c8c8',
    'lineDash': [0x1, 0x1]
  }), a5W[a5R('0x1')](), a5V[a5R('0x2')] = a5W, a5V[a5R('0x3')][a5R('0x4')](a5V[a5R('0x2')]);
  const a5X = new yU();
  a5W[a5R('0x5')] = !0x1, a5X['css']({
    'strokeStyle': a5R('0x6'),
    'lineDash': [0x1, 0x1]
  }), a5X[a5R('0x1')](), a5V[a5R('0x7')] = a5X, a5V[a5R('0x3')][a5R('0x4')](a5V['guildlineS']);
}

function a5Y(a5Z, a60) {
  var a61 = a5Z[a5R('0x8')];
  const a62 = a5Z[a5R('0x2')], a63 = a5Z[a5R('0x7')];
  null == a60 && (a60 = {'x': details['x'], 'y': details['y']}), a62['setBegin']({
    'x': 0x0,
    'y': a60['y']
  }), a62[a5R('0x9')]({'x': a61['width'], 'y': a60['y']}), a62[a5R('0xa')](), a63[a5R('0xb')]({
    'x': a60['x'],
    'y': 0x0
  }), a63['setEnd']({'x': a60['x'], 'y': a61[a5R('0xc')]}), a63['show']();
}

function a64(a65) {
  a65['guildlineW'][a5R('0x1')](), a65[a5R('0x7')][a5R('0x1')]();
}

var a66 = ['rolerS', 'hide', 'stage', 'currentLayer', 'width', 'height', 'rulerW', 'setBegin', 'setEnd', 'rulerS', 'css', 'gray', 'top', 'left', 'handlerLayer', 'addChild', '---', 'origin', 'rotateTo', 'middle', '___', 'rolerW', 'show'];
!function (a67) {
  !function (a68) {
    for (; --a68;) a67['push'](a67['shift']());
  }(0x12a);
}(a66);
var a69 = function (a6a, a6b) {
  return a66[a6a = +a6a];
};

function a6c(a6d, a6e) {
  a6d[a69('0x0')][a69('0x1')](), a6d[a69('0x2')]['show']();
}

function a6f(a6g, a6h) {
  a6g[a69('0x0')]['hide'](), a6g[a69('0x2')][a69('0x3')]();
}

var a6i = ['className', 'isNode', 'isLink', 'roundRadius', 'style', 'css', 'beginArrow', 'visible', 'endArrow', 'resizeTo', 'height', 'width'];
!function (a6j) {
  !function (a6k) {
    for (; --a6k;) a6j['push'](a6j['shift']());
  }(0x12d);
}(a6i);
var a6l = function (a6m, a6n) {
  return a6i[a6m = +a6m];
};

function a6o(a6p, a6q) {
  a6p !== a6q && a6p[a6l('0x0')] === a6q[a6l('0x0')] && (a6p[a6l('0x1')] && a6q[a6l('0x1')] || a6p[a6l('0x2')] && a6q[a6l('0x2')]) && (a6q[a6l('0x1')] && (a6p['roundRadius'] = a6q[a6l('0x3')]), console['log'](a6q[a6l('0x4')]), a6p[a6l('0x5')](a6q[a6l('0x4')]), a6p[a6l('0x2')] && (a6p[a6l('0x6')][a6l('0x7')] = a6q[a6l('0x6')]['visible'], a6p[a6l('0x8')]['visible'] = a6q[a6l('0x8')][a6l('0x7')], a6p[a6l('0x6')][a6l('0x9')](a6q['beginArrow']['width'], a6q[a6l('0x6')][a6l('0xa')]), a6p[a6l('0x8')][a6l('0x9')](a6q[a6l('0x8')][a6l('0xb')], a6q['endArrow'][a6l('0xa')])));
}

var a6r = ['afterDeleteHandler', 'stage', 'concat', 'selectedGroup', 'getNoChildrensObjects', 'length', 'map', 'parent', 'clipBoard', 'copyPut', 'cutPut', 'record', 'forEach', 'removeChild', 'pickedObject', 'anchorBox', 'clearTarget', 'currentLayer', 'isFirstCutPaste', 'getType', 'getCenter', 'stageToLocalXY', 'mouseX', 'mouseY', 'translateWith', 'addChild', 'recordEnd', 'getEndPoint', 'outLinks'];
!function (a6s) {
  !function (a6t) {
    for (; --a6t;) a6s['push'](a6s['shift']());
  }(0xcd);
}(a6r);
var a6u = function (a6v, a6w) {
  return a6r[a6v = +a6v];
};

function a6x(a6y) {
  let a6z = a6y[a6u('0x0')], a6A = new b8()[a6u('0x1')](a6z[a6u('0x2')][a6u('0x3')]());
  var a6B;
  0x0 != a6A[a6u('0x4')] && (a6B = a6A[a6u('0x5')](a6y => a6y[a6u('0x6')]), a6y[a6u('0x7')][a6u('0x8')]([a6A, a6B]));
}

function a6D(a6E) {
  let a6F = a6E[a6u('0x0')], a6G = new b8()[a6u('0x1')](a6F[a6u('0x2')]['getNoChildrensObjects']());
  if (0x0 != a6G[a6u('0x4')]) {
    let a6H = a6G[a6u('0x5')](a6E => a6E['parent']);
    a6E[a6u('0x7')][a6u('0x9')]([a6G, a6H]), a6E[a6u('0xa')]('剪切', a6G), a6G[a6u('0xb')]((a6E, a6F) => {
      let a6G = a6H[a6F];
      a6G[a6u('0xc')](a6E);
    }), a6E['recordEnd']('剪切'), a6F[a6u('0xd')] = null, a6E['hideCtrlBox'](), a6E[a6u('0xe')][a6u('0xf')]();
  }
}

function a6M(a6N) {
  var a6O = a6N[a6u('0x7')]['takeSource']();
  if (null != a6O) {
    let a6P = a6N[a6u('0x10')];
    var a6Q = a6N[a6u('0x0')], a6R = a6N[a6u('0x7')][a6u('0x11')]();
    a6N[a6u('0x7')][a6u('0x12')]();
    let a6S = a6O[0x0], a6T = a6O[0x1], a6U = a6S['getAABB'](!0x1, co);
    a6O = a6U[a6u('0x13')](), a6Q = a6P[a6u('0x14')](a6Q[a6u('0x15')], a6Q[a6u('0x16')]);
    let a6V = a6Q['x'] - a6O['x'], a6W = a6Q['y'] - a6O['y'];
    a6N[a6u('0xa')]('粘贴');
    let a6X = a6S;
    0x1 != a6R && (a6R = jE(a6S), a6X = h2(a6R)), a6X[a6u('0xb')]((a6P, a6S) => {
      a6P[a6u('0x17')](a6V, a6W);
    }), a6X[a6u('0xb')]((a6P, a6S) => {
      let a6U = a6T[a6S];
      a6U[a6u('0x18')](a6P);
    }), a6N[a6u('0x19')]('粘贴');
  }
}

function a73(a74) {
  let a75 = a74['inLinks'];
  null != a75 && a75['forEach'](a74 => {
    null != a74[a6u('0x6')] && a74['setEnd'](a74[a6u('0x1a')]());
  });
  let a77 = a74[a6u('0x1b')];
  null != a77 && a77['forEach'](a74 => {
    null != a74[a6u('0x6')] && a74['setBegin'](a74['getBeginPoint']());
  });
}

function a79(a7a) {
  let a7b = a7a[a6u('0x0')], a7c = a7b[a6u('0x2')][a6u('0x3')]();
  a7c && (a7b[a6u('0x2')]['removeAll'](), a7a[a6u('0xa')]('删除', a7c), a7c[a6u('0xb')](function (a7b) {
    a73(a7b), a7b[a6u('0x6')]['removeChild'](a7b), a7a[a6u('0x1c')](a7b);
  }), a7a[a6u('0x19')]('删除'));
}

var a7e = ['details', 'isDragEnd', 'showAt', 'selectedGroup', 'groupdrag', 'selectedGroupDragHandler', 'getNoChildrensObjects', 'selectedGroupDragEndHandler', 'handlerLayer', 'nodeCtrlBox', 'activeBox', 'anchorBox', 'modeChange', 'addChild', 'removeChild', 'update', 'drop', 'defaultPrevented', 'dispatchEvent', 'popupMenu', 'mouseup', 'button'];
!function (a7f) {
  !function (a7g) {
    for (; --a7g;) a7f['push'](a7f['shift']());
  }(0xcf);
}(a7e);
var a7h = function (a7i, a7j) {
  return a7e[a7i = +a7i];
};

function a7k(a7l) {
  let a7m = a7l['stage'], a7n = a7l[a7h('0x0')], a7o = a7l[a7h('0x1')], a7p = a7l['linkCtrlBox'], a7q = a7l[a7h('0x2')],
    a7r = a7l[a7h('0x3')];
  a7m['on'](cp[a7h('0x4')], function (a7s) {
    a7s['newMode'] == c3['edit'] ? (a7n[a7h('0x5')](a7o), a7n[a7h('0x5')](a7p), a7n['addChild'](a7r), a7n[a7h('0x5')](a7q)) : (a7n[a7h('0x6')](a7o), a7n[a7h('0x6')](a7p), a7n['removeChild'](a7r), a7n['removeChild'](a7q)), a7m[a7h('0x7')]();
  }), a7m['on'](a7h('0x8'), function (a7t) {
    a7t[a7h('0x9')] || a7l[a7h('0xa')](a7t);
  }), a7m['on']('mousedown', function (a7u) {
    a7u[a7h('0x9')] || a7l[a7h('0xb')]['hide']();
  }), a7m['on'](a7h('0xc'), function (a7v) {
    0x2 == a7v[a7h('0xd')] ? a7v[a7h('0xe')][a7h('0xf')] || a7l[a7h('0xb')][a7h('0x10')](a7v[a7h('0xe')]['x'], a7v['details']['y']) : a7l['popupMenu']['hide']();
  }), a7m[a7h('0x11')]['on'](cp[a7h('0x12')], function (a7w) {
    a7l[a7h('0x13')](a7w, a7m[a7h('0x11')][a7h('0x14')]());
  }), a7m[a7h('0x11')]['on'](cp['groupdragend'], function (a7x) {
    a7l[a7h('0x15')](a7x, a7m['selectedGroup'][a7h('0x14')]());
  });
}

var a7y = ['point', 'getPosition', 'center', 'atan2', 'rotate', 'resizeTo', 'rotateTo', 'zIndex', 'NodeCtrlBox', 'editor', 'css', '3px\x20solid\x20orange', 'mouseEnabled', 'currObject', 'attachTo', 'editable', 'isLink', 'attach\x20not\x20Node', 'viewClone', 'getStageTransform'];
!function (a7z) {
  !function (a7A) {
    for (; --a7A;) a7z['push'](a7z['shift']());
  }(0x1ac);
}(a7y);
var a7B = function (a7C, a7D) {
  return a7y[a7C = +a7C];
};

class a7E extends so {
  constructor(a7F, a7G, a7H, a7I, a7J) {
    super(null, a7G, a7H, a7I, a7J), this[a7B('0x0')] = c9[a7B('0x1')], this[a7B('0x2')] = a7F, this[a7B('0x3')]({
      'border': a7B('0x4'),
      'lineDash': [0x5, 0x3]
    }), this[a7B('0x5')] = !0x1, this[a7B('0x6')];
  }

  [a7B('0x7')](a7K) {
    if (null == a7K || 0x1 != a7K[a7B('0x8')]) return this[a7B('0x6')] = null, void this['hide']();
    if (a7K[a7B('0x9')]) throw new Error(a7B('0xa'));
    this['currObject'] = a7K, this['updateSize'](), this['show']();
  }

  ['updateSize']() {
    null != this[a7B('0x6')] && this[a7B('0xb')](this[a7B('0x6')]);
  }

  [a7B('0xb')](a7L) {
    let a7M = a7L[a7B('0xc')]();
    var a7N = a7M[a7B('0xd')](a7L[a7B('0xe')](c6[a7B('0xf')])), a7O = a7M[a7B('0xd')](a7L[a7B('0xe')](c6['rm'])),
      a7P = Math[a7B('0x10')](a7O['y'] - a7N['y'], a7O['x'] - a7N['x']);
    a7M[a7B('0x11')](-a7P);
    var a7T = a7M[a7B('0xd')](a7L['getPosition'](c6[a7B('0xf')])), a7O = a7M[a7B('0xd')](a7L[a7B('0xe')](c6['rb'])),
      a7L = 0x2 * (a7O['x'] - a7T['x']), a7T = 0x2 * (a7O['y'] - a7T['y']);
    this[a7B('0x12')](0x8 + a7L, 0x8 + a7T), this[a7B('0x13')](a7P), this['translateCenterTo'](a7N['x'], a7N['y']);
  }
}

var a7U = ['ArrowRight', 'toUpperCase', 'indexOf', 'MAC\x20OS', 'Meta', 'Control', 'Shift', 'Delete', '+shift+z', 'Shift+v', 'ArrowUp', 'ArrowDown', 'ArrowLeft'];
!function (a7V) {
  !function (a7W) {
    for (; --a7W;) a7V['push'](a7V['shift']());
  }(0x195);
}(a7U);
var a7X = function (a7Y, a7Z) {
  return a7U[a7Y = +a7Y];
};
const a80 = -0x1 != navigator['userAgent'][a7X('0x0')]()[a7X('0x1')](a7X('0x2')), a81 = a80 ? a7X('0x3') : a7X('0x4'),
  a82 = {
    'CtrlOrCmd': a81,
    'CreateGroup': a81,
    'DropTo_leader': a7X('0x5'),
    'Delete': [a7X('0x6'), 'Meta+Backspace'],
    'Select_all': [a81 + '+a'],
    'Select_invert': [a81 + '+i'],
    'Cut': [a81 + '+x'],
    'Copy': [a81 + '+c'],
    'Paste': [a81 + '+v'],
    'Save': [a81 + '+s'],
    'Open': [a81 + '+o'],
    'Undo': [a81 + '+z'],
    'Redo': [a81 + a7X('0x7')],
    'Copy_style': ['Shift+c'],
    'paste_Style': [a7X('0x8')],
    'Move_up': [a7X('0x9')],
    'Move_down': [a7X('0xa')],
    'Move_left': [a7X('0xb')],
    'Move_right': [a7X('0xc')],
    'Layout_tree': ['t'],
    'Layout_grid': ['g']
  };
var a83 = ['from', 'link'];
!function (a84) {
  !function (a85) {
    for (; --a85;) a84['push'](a84['shift']());
  }(0xb3);
}(a83);
var a86 = function (a87, a88) {
  return a83[a87 = +a87];
};

class a89 {
  constructor(a8a, a8b, a8c) {
    this[a86('0x0')] = a8a, this['to'] = a8b, this[a86('0x1')] = a8c;
  }
}

var a8d = ['push', 'length', 'getRect', 'reduce', 'union', 'centerTo', 'forEach', 'translateWith', 'translateTo', 'getLeafs', 'root', 'descendants', 'flatten', 'allVirtualNodes', 'concat', 'allObjects', 'map', 'object', 'indexData', 'maxDeep', 'index'];
!function (a8e) {
  !function (a8f) {
    for (; --a8f;) a8e['push'](a8e['shift']());
  }(0x74);
}(a8d);
var a8g = function (a8h, a8i) {
  return a8d[a8h = +a8h];
};

class a8j {
  constructor(a8k) {
    this[a8g('0x0')] = a8k, this[a8g('0x1')] = a8k[a8g('0x2')](), this[a8g('0x3')] = [a8k][a8g('0x4')](this['descendants']), this[a8g('0x5')] = this['allVirtualNodes'][a8g('0x6')](a8k => a8k[a8g('0x7')]), this[a8g('0x8')] = {}, this[a8g('0x9')] = 0x0, this[a8g('0xa')]();
  }

  [a8g('0xa')]() {
    let a8m = new b8();
    const a8n = this;
    !function x(a8o, a8p) {
      a8n[a8g('0x9')] < a8p && (a8n[a8g('0x9')] = a8p);
      var a8q = a8o['children'];
      let a8r = a8m[a8p];
      null == a8r && (a8r = [], a8m[a8p] = a8r), a8r[a8g('0xb')](a8o);
      for (var a8s = 0x0; a8s < a8q[a8g('0xc')]; a8s++) x(a8q[a8s], a8p + 0x1);
    }(this[a8g('0x0')], 0x0), this['indexData'] = a8m;
  }

  [a8g('0xd')]() {
    const a8t = this['root'][a8g('0x2')]();
    return a8t[a8g('0xe')]((a8t, a8v) => a8t[a8g('0xd')]()[a8g('0xf')](a8v[a8g('0xd')]));
  }

  [a8g('0x10')](a8w, a8x) {
    const a8y = this[a8g('0x3')];
    let a8z = this[a8g('0x0')][a8g('0xd')]();
    a8y['forEach'](a8w => {
      a8z = a8z[a8g('0xf')](a8w['getRect']());
    });
    var a8B = a8z['getCenter']();
    let a8C = a8w - a8B['x'], a8D = a8x - a8B['y'];
    return a8y[a8g('0x11')](a8w => {
      a8w[a8g('0x12')](a8C, a8D);
    }), this;
  }

  [a8g('0x13')](a8F, a8G) {
    const a8H = this['allVirtualNodes'];
    let a8I = this['root'][a8g('0xd')]();
    a8H[a8g('0x11')](a8F => {
      a8I = a8I[a8g('0xf')](a8F[a8g('0xd')]());
    });
    let a8K = a8F - a8I['x'], a8L = a8G - a8I['y'];
    return a8H['forEach'](a8F => {
      a8F[a8g('0x12')](a8K, a8L);
    }), this;
  }

  [a8g('0x12')](a8N, a8O) {
    const a8P = this[a8g('0x3')];
    return a8P[a8g('0x11')](a8P => {
      a8P[a8g('0x12')](a8N, a8O);
    }), this;
  }

  [a8g('0x14')]() {
    return this['indexData'][this[a8g('0x9')]];
  }
}

var a8R = ['nodes', 'edges', 'toTrees', 'filter', 'parent', 'isNode', 'isLink', 'map', 'fromObject', 'forEach', 'begin', 'target', 'end', 'get', 'addChild', 'push'];
!function (a8S) {
  !function (a8T) {
    for (; --a8T;) a8S['push'](a8S['shift']());
  }(0x1c6);
}(a8R);
var a8U = function (a8V, a8W) {
  return a8R[a8V = +a8V];
};

class a8X {
  constructor(a8Y) {
    const a8Z = a8Y['filter'](a8Y => a8Y[a8U('0x0')]), a90 = a8Y['filter'](a8Y => a8Y[a8U('0x1')]), a91 = new WeakMap();
    a8Y = a8Z[a8U('0x2')](a8Y => {
      const a8Z = new Nk();
      return a8Z[a8U('0x3')](a8Y), a91['set'](a8Y, a8Z), a8Z;
    });
    const a96 = [];
    a90[a8U('0x4')](a8Z => {
      if (a8Z[a8U('0x5')][a8U('0x6')][a8U('0x0')] && a8Z[a8U('0x7')][a8U('0x6')]['isNode']) {
        let a8Y = a91[a8U('0x8')](a8Z['begin'][a8U('0x6')]);
        var a90 = a91[a8U('0x8')](a8Z[a8U('0x7')]['target']);
        null != a8Y && null != a90 && (a8Y[a8U('0x9')](a90), a8Z = new a89(a8Y, a90, a8Z), a96[a8U('0xa')](a8Z));
      }
    }), this[a8U('0xb')] = a8Y, this[a8U('0xc')] = a96;
  }

  [a8U('0xd')]() {
    let a9a = [], a9b = this[a8U('0xb')], a9c = a9b[a8U('0xe')](a9b => null == a9b[a8U('0xf')]);
    return a9c[a8U('0x4')](a9b => {
      a9b = new a8j(a9b);
      a9a[a8U('0xa')](a9b);
    }), a9a;
  }
}

var a9f = ['selectedGroupDragHandler', '对象拖拽', 'length', 'getAABB', 'getCenter', 'selectedGroupDragEndHandler', 'recordInterrupt', 'forEach', 'isNode', 'round', 'recordName', 'lastLayerState', 'recordName\x20is\x20null', 'warn', 'record和recordEnd没有成对出现', 'getState', 'recordName\x20error', 'push', 'restore', 'mouseenterStageHandler', 'mouseoutStageHandler', 'newLinkProperties', 'css', 'EditorNewLink', 'addChild', 'afterDeleteHandler', 'addLink', 'addNode', 'visible', 'updateSize', 'updatezIndex', 'openJson', 'msg', 'dispatchEvent', 'image', 'setImage', 'sizeToImage', 'getMousePoint', 'Node', 'addNewInstance', 'indexOf', 'Link', 'setMode', 'view', 'doTreeLayout', 'filter', 'down', 'setTime', 'onLayout', 'setCenter', '树形布局', 'doLayout', 'doGridLayout', 'ceil', 'sqrt', '网格布局', 'then', 'sendKey', 'charAt', 'stage', 'editor', 'currentLayer', 'getCurrentLayer', 'KeysConfig', 'handlerLayer', 'selectedGroup', 'keyboard', 'clipBoard', 'cssClipBoard', 'nodeCtrlBox', 'linkCtrlBox', 'anchorBox', 'activeBox', 'popupMenu', 'zoomAfter', 'update', 'mousedrag', 'controlTarget', 'LinkClassName', 'AutoFoldLink', 'inputTextfield', 'redoUndoSys', 'textInputMode', 'opTooltip', 'domElement', 'style', 'paddingLeft', 'paddingRight', '20px', 'defineKeys', 'assign', 'showOpTooltip', 'setHtml', 'showAt', 'fadeOut', 'hideRuler', 'showGuildLine', 'enterTextInputMode', 'saveHandler', 'toJson', 'setItem', 'topo_last_doc', 'log', '保存成功', 'getItem', 'debug', 'removeAllChild', 'fillByJson', 'undoHandler', 'undo', 'redo', 'copyHandler', 'cutHandler', 'deleteHandler', 'styleCopyHandler', 'pickedObject', 'isEmpty', 'objects', 'copyPut', 'stylePasteHandler', 'takeSource', 'getType', 'record', 'recordEnd', '粘贴样式', 'alignHandler', 'hideCtrlBox', 'hide', 'mousewheelHandler', 'mousedownHandler', 'pickUpChild', 'preventDefault', 'mouseupHandler', 'hideGuidLine', 'details', 'isDragEnd', 'button', 'isLink', 'attachTo', 'setTarget', 'currObject', 'getNoChildrensObjects', 'changeParent', 'mousedragHandler', 'buttons', 'isKeydown', 'crosshair', 'isDragStart', 'DropTo_leader', 'parent', 'mousemoveHandler', 'auto', 'mouseOverTarget', 'mouseoutHandler', 'mouseenterHandler', 'move', 'connectable', 'Control', 'getObjectsIntersect', 'setIntersect'];
!function (a9g) {
  !function (a9h) {
    for (; --a9h;) a9g['push'](a9g['shift']());
  }(0xdb);
}(a9f);
var a9i = function (a9j, a9k) {
  return a9f[a9j = +a9j];
};
const a9l = null != d3['w'] ? d3['w'][a9i('0x0')](0x3) : '1';

class a9m extends cz {
  constructor(a9n) {
    super(), ((this[a9i('0x1')] = a9n)[a9i('0x2')] = this)[a9i('0x3')] = this[a9i('0x4')](), this[a9i('0x5')] = a82, this[a9i('0x6')] = a9n['handlerLayer'], this[a9i('0x7')] = this[a9i('0x1')][a9i('0x7')], this[a9i('0x8')] = a9n[a9i('0x8')], this[a9i('0x9')] = new a36(), this[a9i('0xa')] = new a36(), this[a9i('0xb')] = new ZA(this), this[a9i('0xc')] = new a0J(this), this[a9i('0xd')] = new a1M(this), this[a9i('0xe')] = new a7E(this), this[a9i('0xf')] = a5I(this), a7k(this), a4d(this), this['hideCtrlBox'](), this['pickedObject'] = null;
    let a9o = this;
    this['stage']['on'](cp[a9i('0x10')], function () {
      a9o[a9i('0x11')](), a9o[a9i('0xd')][a9i('0x11')]();
    }), this[a9i('0x1')]['on'](a9i('0x12'), function () {
      a9o['anchorBox'][a9i('0x11')]();
    }), this[a9i('0x13')] = null, this['mouseOverTarget'] = null, this[a9i('0x14')] = a9i('0x15'), this[a9i('0x16')] = new a3f(this), this[a9i('0x17')] = new a2N(this), this[a9i('0x18')] = !0x1, a5U(this), this[a9i('0x19')] = new UP(a9n), this[a9i('0x19')][a9i('0x1a')][a9i('0x1b')][a9i('0x1c')] = '20px', this['opTooltip'][a9i('0x1a')]['style'][a9i('0x1d')] = a9i('0x1e');
  }

  [a9i('0x4')]() {
    return this['stage']['getCurrentLayer']();
  }

  [a9i('0x1f')](a9p) {
    Object[a9i('0x20')](this['KeysConfig'], a9p);
  }

  [a9i('0x21')](a9q) {
    this[a9i('0x19')][a9i('0x22')](a9q), this[a9i('0x19')][a9i('0x23')](0.5 * this[a9i('0x1')]['width'], 0.5 * this['stage']['height']), this[a9i('0x19')][a9i('0x24')](0x50);
  }

  ['showRuler'](a9r) {
    a6c(this);
  }

  [a9i('0x25')](a9s) {
    a6f(this);
  }

  [a9i('0x26')](a9t) {
    a5Y(this, a9t);
  }

  ['hideGuidLine']() {
    a64(this);
  }

  [a9i('0x27')]() {
    this[a9i('0x18')] = !0x0;
  }

  ['leaveTextInputMode']() {
    this[a9i('0x18')] = !0x1;
  }

  [a9i('0x28')](a9u) {
    var a9v = this[a9i('0x3')][a9i('0x29')]();
    a3C[a9i('0x2a')](a9i('0x2b'), a9v), console[a9i('0x2c')](a9i('0x2d'), a9v);
  }

  ['openLasted'](a9w) {
    const a9x = this[a9i('0x3')];
    var a9y = a3C[a9i('0x2e')](a9i('0x2b'));
    null != a9y && (console[a9i('0x2f')]('加载', a9y), a9x[a9i('0x30')](), a9x[a9i('0x31')](a9y));
  }

  [a9i('0x32')]() {
    this[a9i('0x17')][a9i('0x33')]();
  }

  ['redoHandler']() {
    this['redoUndoSys'][a9i('0x34')]();
  }

  [a9i('0x35')]() {
    a6x(this);
  }

  [a9i('0x36')]() {
    a6D(this);
  }

  ['pasteHandler']() {
    a6M(this);
  }

  [a9i('0x37')]() {
    a79(this);
  }

  [a9i('0x38')](a9z) {
    let a9A = this[a9i('0x1')][a9i('0x39')];
    null == a9A && (this[a9i('0x1')][a9i('0x7')][a9i('0x3a')]() || (a9A = this[a9i('0x1')][a9i('0x7')][a9i('0x3b')][0x0]), null == a9A) || this[a9i('0xa')][a9i('0x3c')](a9A);
  }

  [a9i('0x3d')](a9B) {
    let a9C = this[a9i('0xa')][a9i('0x3e')]();
    if (null != a9C) {
      let a9B = this[a9i('0x1')]['selectedGroup'][a9i('0x3b')];
      this['clipBoard'][a9i('0x3f')](), this[a9i('0x40')]('粘贴样式'), a9B['forEach'](a9B => {
        a6o(a9B, a9C);
      }), this[a9i('0x41')](a9i('0x42'));
    }
  }

  [a9i('0x43')](a9F) {
    a5s(a9F, this), this[a9i('0x11')]();
  }

  [a9i('0x44')]() {
    this['linkCtrlBox']['hide'](), this[a9i('0xb')][a9i('0x45')]();
  }

  ['dblclickHandler'](a9G) {
  }

  [a9i('0x46')](a9H) {
  }

  [a9i('0x47')](a9I) {
    let a9J = this[a9i('0x6')], a9K = this[a9i('0xb')], a9L = this[a9i('0xc')];
    if (this['anchorBox'][a9i('0x45')](), this['controlTarget'] = a9J[a9i('0x48')](), null != this[a9i('0x13')]) return this[a9i('0x13')]['mousedownHandler'](a9I), a9I[a9i('0x49')](), void this[a9i('0x11')]();
    a9L['hide'](), a9K[a9i('0x45')](), this['update']();
  }

  [a9i('0x4a')](a9M) {
    this[a9i('0x4b')]();
    var a9N = this[a9i('0x1')];
    let a9O = this[a9i('0xb')], a9P = this[a9i('0xc')], a9Q = this['controlTarget'];
    if (null != a9Q) return !a9M[a9i('0x4c')][a9i('0x4d')] || a9Q instanceof a1j || this[a9i('0x41')]('控制点'), a9Q['mouseupHandler'](a9M), a9M[a9i('0x49')](), void this[a9i('0x11')]();
    if (0x2 != a9M[a9i('0x4e')]) {
      a9N = a9N['pickedObject'];
      if (null != a9N ? a9N['editable'] && (a9N[a9i('0x4f')] ? a9P[a9i('0x50')](a9N) : (this[a9i('0xd')][a9i('0x51')](a9N), a9O[a9i('0x50')](a9N))) : (this['anchorBox'][a9i('0x45')](), a9O[a9i('0x45')](), a9P['hide']()), null != this[a9i('0xe')][a9i('0x52')]) {
        a9N = this[a9i('0x7')][a9i('0x53')](), a9N = a51(this, a9N);
        let a9O = a9N['parent'], a9M = a9N[a9i('0x3b')];
        a9M['forEach'](a9M => {
          a9M[a9i('0x54')](a9O), a9M['upgradeLinks']();
        });
      }
      this[a9i('0xe')][a9i('0x50')](null), this[a9i('0x11')]();
    }
  }

  [a9i('0x55')](a9U) {
    if (0x2 != a9U[a9i('0x56')]) {
      this[a9i('0x8')][a9i('0x57')]('Shift') && this[a9i('0x1')]['setCursor'](a9i('0x58')), this[a9i('0x3')], this[a9i('0x26')](a9U[a9i('0x4c')]);
      let a9V = this['controlTarget'];
      if (null != a9V) {
        if (!a9U[a9i('0x4c')][a9i('0x59')] || a9V instanceof a1j || this['record']('控制点'), a9V[a9i('0x55')](a9U), this[a9i('0x11')](), 0x1 == a9U['defaultPrevented']) return;
        a9U[a9i('0x49')]();
      }
      this[a9i('0xe')]['hide']();
      var a9U = this[a9i('0x5')][a9i('0x5a')];
      this[a9i('0x1')][a9i('0x39')] && this[a9i('0x8')][a9i('0x57')](a9U) && (a9U = this[a9i('0x7')][a9i('0x53')](), null != (a9U = a51(this, a9U)[a9i('0x5b')]) && a9U['editable'] && this[a9i('0xe')]['attachTo'](a9U));
    }
  }

  [a9i('0x5c')](a9X) {
    let a9Y = this[a9i('0x1')];
    const a9Z = a9Y[a9i('0x6')];
    let aa0 = this[a9i('0x3')];
    a9Y['setCursor'](a9i('0x5d'));
    let aa1 = a9Z[a9i('0x48')]();
    if (aa1 !== this['mouseOverTarget'] && (null != this[a9i('0x5e')] && this[a9i('0x5e')][a9i('0x5f')](a9X), null != aa1 && aa1[a9i('0x60')](a9X)), this['mouseOverTarget'] = aa1, null != aa1) return cc(aa1[a9i('0x5b')], 'mouseOvertarget\x27s\x20parent\x20is\x20null'), aa1[a9i('0x5c')](a9X), void a9X[a9i('0x49')]();
    var a9X = aa0['pickUpChild']();
    null != a9X && (this[a9i('0x1')]['setCursor'](a9i('0x61')), a9X['isNode'] && a9X[a9i('0x62')] && this[a9i('0xd')][a9i('0x51')](a9X), this['keyboard'][a9i('0x57')](a9i('0x63')) && a9X['connectable'] && (this[a9i('0xd')]['setTarget'](a9X), null != (a9X = this[a9i('0xd')][a9i('0x64')]([a9X])) && this[a9i('0xd')][a9i('0x65')](a9X))), this[a9i('0x11')]();
  }

  [a9i('0x66')](aa3, aa4) {
    if (aa3[a9i('0x4c')][a9i('0x59')] && this[a9i('0x40')](a9i('0x67')), 0x1 == aa4[a9i('0x68')]) {
      const aa5 = aa4[0x0], aa6 = aa5[a9i('0x69')](!0x1, cn);
      aa4 = aa6[a9i('0x6a')]();
      this[a9i('0x26')](aa4);
    }
  }

  [a9i('0x6b')](aa7, aa8) {
    0x1 != aa7['isInterrupt'] ? (aa8[a9i('0x6d')](aa7 => {
      aa7[a9i('0x6e')] && (aa7['x'] = Math[a9i('0x6f')](aa7['x']), aa7['y'] = Math[a9i('0x6f')](aa7['y']));
    }), this['recordEnd'](a9i('0x67'))) : this[a9i('0x6c')]();
  }

  ['recordInterrupt']() {
    this[a9i('0x70')] = null, this[a9i('0x71')] = null;
  }

  [a9i('0x40')](aaa) {
    if (null == aaa) throw new Error(a9i('0x72'));
    null != this[a9i('0x70')] && console[a9i('0x73')](a9i('0x74')), this[a9i('0x70')] = aaa, this[a9i('0x71')] = this[a9i('0x3')][a9i('0x75')]();
  }

  ['recordEnd'](aab) {
    if (null == aab) throw new Error('recordName\x20is\x20null');
    if (aab != this[a9i('0x70')]) throw console['log'](this['recordName'], aab), new Error(a9i('0x76'));
    this[a9i('0x70')] = null;
    let aac = this[a9i('0x3')], aad = this[a9i('0x71')], aae = aac['getState']();
    var aaf = this[a9i('0x1')]['pickedObject'];
    aaf && aaf['id'], this['redoUndoSys'][a9i('0x77')](aab, function () {
      aac[a9i('0x78')](aae);
    }, function () {
      aac['restore'](aad);
    });
  }

  [a9i('0x60')](aag) {
    this[a9i('0xc')][a9i('0x79')](aag), this['nodeCtrlBox'][a9i('0x79')](aag), this[a9i('0xd')][a9i('0x79')](aag);
  }

  ['mouseoutHandler'](aah) {
    this[a9i('0xc')][a9i('0x7a')](aah), this[a9i('0xb')][a9i('0x7a')](aah), this[a9i('0xd')][a9i('0x7a')](aah);
  }

  ['newLink'](aai, aaj, aak, aal) {
    let aam = gT(this[a9i('0x14')]);
    const aan = new aam(aai, aaj, aak, aal), aao = Object['assign']({}, this[a9i('0x7b')]);
    aao[a9i('0x7c')] && (aan[a9i('0x7c')](aao[a9i('0x7c')]), delete aao[a9i('0x7c')]), Object[a9i('0x20')](aan, aao);
    let aap = aaj[a9i('0x6e')] || aaj[a9i('0x4f')] ? aaj[a9i('0x5b')] : this['currentLayer'];
    return aan['zIndex'] = c9[a9i('0x7d')], aap[a9i('0x7e')](aan), aan;
  }

  [a9i('0x7f')](aaq) {
    if ('1' != a9l) return null;
    this[a9i('0x21')]('删除'), aaq === this['anchorBox']['target'] && this[a9i('0xd')][a9i('0x45')]();
  }

  ['addNewInstance'](aar) {
    let aas = this['getCurrentLayer']();
    aas[a9i('0x7e')](aar);
  }

  [a9i('0x80')](aat) {
    let aau = this['currentLayer'];
    aau[a9i('0x7e')](aat);
  }

  ['addChild'](aav) {
    if (aav[a9i('0x6e')]) this[a9i('0x81')](aav); else {
      if (!aav['isLink']) throw new Error('object\x20neither\x20Node\x20nor\x20Link');
      this[a9i('0x80')](aav);
    }
  }

  [a9i('0x11')]() {
    this['activeBox']['visible'] && this[a9i('0xe')]['updateSize'](), this[a9i('0xb')][a9i('0x82')] && this[a9i('0xb')][a9i('0x83')](), this[a9i('0xd')][a9i('0x11')](), this['stage'][a9i('0x11')]();
  }

  [a9i('0x84')]() {
    this[a9i('0x3')]['updatezIndex']();
  }

  [a9i('0x29')]() {
    return this['currentLayer'][a9i('0x29')]();
  }

  [a9i('0x85')](aaw) {
    this[a9i('0x3')][a9i('0x85')](aaw), this[a9i('0x1')]['translateToCenter']();
  }

  ['showTip'](aax, aay) {
    let aaz = new Event(a9i('0x2c'));
    aaz[a9i('0x86')] = aax + (aay || ''), this[a9i('0x87')](aaz);
  }

  ['create'](aaA) {
    function aaB(aaC, aaD) {
      if (null != aaD) {
        let aaA = Object['keys'](aaD);
        aaA[a9i('0x6d')](function (aaA) {
          var aaB = aaD[aaA];
          'css' == aaA ? aaC[a9i('0x7c')](aaB) : aaA == a9i('0x88') ? aaC[a9i('0x89')](aaB, aaD[a9i('0x8a')]) : aaC[aaA] = aaB;
        });
      }
    }

    var aaH = this['currentLayer'][a9i('0x8b')](), aaI = aaH['x'], aaJ = aaH['y'];
    let aaK = aaA['className'], aaL = gT(aaK);
    if (-0x1 != aaK['indexOf'](a9i('0x8c'))) {
      aaH = new aaL(null, aaI - 0x15, aaJ - 0x15, 0x40, 0x40);
      return aaB(aaH, aaA['properties']), this[a9i('0x8d')](aaH), aaH;
    }
    if (-0x1 != aaK[a9i('0x8e')](a9i('0x8f'))) {
      this[a9i('0x1')][a9i('0x55')]['mode'] && this[a9i('0x1')][a9i('0x90')](a9i('0x91'));
      aaJ = new aaL(null, {'x': aaI - 0x28, 'y': aaJ}, {'x': aaI + 0x28, 'y': aaJ + (aaK == a9i('0x8f') ? 0x0 : 0x50)});
      return aaB(aaJ, aaA['properties']), this[a9i('0x8d')](aaJ), aaJ;
    }
  }

  [a9i('0x92')]() {
    let aaM = this, aaN = this[a9i('0x1')], aaO = aaN['selectedGroup'][a9i('0x53')]();
    var aaP = aaO[a9i('0x93')](aaQ => aaQ[a9i('0x6e')]);
    if (!(aaP[a9i('0x68')] < 0x2)) {
      let aaR = LF['getNodesRect'](aaO[a9i('0x93')](aaR => aaR['isNode']));
      var aaT = aaR[a9i('0x6a')]();
      this[a9i('0x21')]('树形布局');
      var aaX = aaP[0x0], aaV = aaX['width'], aaP = aaX['height'], aaX = new OW(a9i('0x94'));
      aaX['setMargin'](0x0, 1.5 * aaV, 0x2 * aaP), aaX[a9i('0x95')](0xc8), aaX[a9i('0x96')](() => aaN[a9i('0x11')]()), aaX[a9i('0x97')](aaT['x'], aaT['y']);
      var aaT = new a8X(aaO)['toTrees']();
      0x0 < aaT[a9i('0x68')] && (this[a9i('0x40')](a9i('0x98')), aaT = aaT[0x0], aaX[a9i('0x99')](aaT)['then'](() => {
        aaM['recordEnd'](a9i('0x98'));
      }));
    }
  }

  [a9i('0x9a')]() {
    let aaZ = this, ab0 = this[a9i('0x1')];
    var ab1 = ab0[a9i('0x7')]['getNoChildrensObjects']()[a9i('0x93')](ab3 => ab3[a9i('0x6e')]),
      ab2 = Math[a9i('0x9b')](Math[a9i('0x9c')](ab1[a9i('0x68')]));
    if (!(ab1[a9i('0x68')] < 0x2)) {
      let ab4 = LF['getNodesRect'](ab1);
      var ab5 = ab4[a9i('0x6a')]();
      this['showOpTooltip']('网格布局');
      ab2 = new NS(ab2, ab2);
      ab2['setMargin'](0x28, 0x28, 0x0, 0x0), ab2[a9i('0x95')](0xc8), ab2[a9i('0x96')](() => ab0[a9i('0x11')]()), ab2[a9i('0x97')](ab5['x'], ab5['y']), this[a9i('0x40')](a9i('0x9d')), ab2['doLayout'](ab1)[a9i('0x9e')](() => {
        aaZ['recordEnd'](a9i('0x9d'));
      });
    }
  }

  [a9i('0x9f')](ab6, ab7) {
    this[a9i('0x8')][a9i('0x9f')](ab6, ab7);
  }
}

a9m[a9i('0x5')] = a82;
var ab8 = ['height', 'ratio', 'direction', 'right', 'left', 'Unknow\x20RatioNode\x27s\x20direction:', 'rect', 'fill', 'paintText', 'prototype', 'RatioNode', 'serializers', 'concat', 'center', 'middle', 'draw', 'strokeAndFill', 'mousePickupPath', 'beginPath', 'ratioColor', 'padding', 'width'];
!function (ab9) {
  !function (aba) {
    for (; --aba;) ab9['push'](ab9['shift']());
  }(0x92);
}(ab8);
var abb = function (abc, abd) {
  return ab8[abc = +abc];
};

class abe extends so {
  constructor(abf, abg, abh, abi, abj) {
    super(abf, abg, abh, abi, abj), this['css']({
      'textPosition': abb('0x0'),
      'textAlign': abb('0x0'),
      'textBaseline': abb('0x1')
    });
  }

  [abb('0x2')](abk) {
    var abl = this['style'];
    this[abb('0x3')](abk), this[abb('0x4')](abk), abk[abb('0x5')](), abk['fillStyle'] = abl[abb('0x6')];
    var abm = abl['borderWidth'] || 0x0, abn = abl[abb('0x7')] || 0x0, abl = 0x2 * abn + 0x2 * abm;
    let abp = abm + abn, abq = abm + abn, abr = (this[abb('0x8')] - abl) * this['ratio'],
      abt = (this[abb('0x9')] - abl) * this[abb('0xa')];
    if (this[abb('0xb')] == c6[abb('0xc')]) abt = this[abb('0x9')] - abl; else if (this[abb('0xb')] == c6[abb('0xd')]) abp = this[abb('0x8')] - abm - abn - abr, abt = this[abb('0x9')] - abl; else if (this['direction'] == c6['down']) abr = this[abb('0x8')] - abl; else {
      if (this[abb('0xb')] != c6['up']) throw new Error(abb('0xe') + this[abb('0xb')]);
      abq = this[abb('0x9')] - abm - abn - abt, abr = this[abb('0x8')] - abl;
    }
    abk[abb('0xf')](abp, abq, abr, abt), abk[abb('0x10')](), this[abb('0x11')](abk);
  }
}

bN(abe[abb('0x12')], {
  'className': {'value': abb('0x13'), 'writable': !0x1},
  'ratio': {'value': 0.5},
  'direction': {'value': c6[abb('0xc')]},
  'serializers': {'value': so[abb('0x12')][abb('0x14')][abb('0x15')](['ratio', abb('0x7'), abb('0xb')])}
});
var abu = ['marginBottom', 'startY', 'length', 'height', 'max', 'centerY', 'startX', 'centerX', 'getNodesRect', 'getCenter', 'forEach', 'doLayout', 'filter', 'isNode', 'translate', 'width', 'setSize', 'getLayoutData', 'marginLeft', 'marginRight'];
!function (abv) {
  !function (abw) {
    for (; --abw;) abv['push'](abv['shift']());
  }(0x9c);
}(abu);
var abx = function (aby, abz) {
  return abu[aby = +aby];
};

class abA extends LF {
  constructor() {
    super(), this[abx('0x0')], this['height'];
  }

  [abx('0x1')](abB, abC) {
    this[abx('0x0')] = abB, this['height'] = abC;
  }

  [abx('0x2')](abD) {
    let abE = new b8();
    var abF = 0x0 | this['marginTop'], abG = 0x0 | this[abx('0x3')], abH = 0x0 | this[abx('0x4')],
      abI = 0x0 | this[abx('0x5')];
    let abJ = 0x0 | this['startX'], abK = 0x0 | this[abx('0x6')];
    var abL = this['width'];
    let abM = 0x0;
    for (let abN = 0x0; abN < abD[abx('0x7')]; abN++) {
      var abO = abD[abN], abP = abG + abO[abx('0x0')] + abH, abQ = abF + abO[abx('0x8')] + abI;
      abJ + abP > abL && (abJ = 0x0, abK = abM);
      abO = new Nk(abJ, abK, abP, abQ);
      abE['push'](abO);
      abQ = abK + abQ;
      abM = Math[abx('0x9')](abM, abQ), abJ += abP;
    }
    let abR = {'x': this['centerX'], 'y': this[abx('0xa')]};
    if (null == this[abx('0xb')] && null == this[abx('0xc')]) {
      let abS = LF[abx('0xd')](abD);
      abR = abS[abx('0xe')]();
    }
    if (null != abR['x']) {
      let abT = LF[abx('0xd')](abE);
      var abU = abT[abx('0xe')]();
      let abD = abR['x'] - abU['x'], abF = abR['y'] - abU['y'];
      abE[abx('0xf')](abT => {
        abT['x'] += abD, abT['y'] += abF;
      });
    }
    return abE;
  }

  [abx('0x10')](abY) {
    abY = abY[abx('0x11')](abY => abY[abx('0x12')]);
    var ac0 = this[abx('0x2')](abY);
    return this[abx('0x13')](abY, ac0);
  }
}

c('.jtopo_popoupmenu{padding:10px;border-radius:5px;min-width:210px;background-color:#fff;border:1px\x20solid;position:absolute;z-index:10000}.jtopo_popoupmenu\x20.header{font-size:14px;height:24px;padding-bottom:3px}.jtopo_popoupmenu\x20a{text-rendering:optimizeLegibility;font-family:\x22Open\x20Sans\x22,\x22Helvetica\x20Neue\x22,\x22Helvetica\x22,\x22Arial\x22,sans-serif;padding-left:20px;display:block;height:25px;color:rgba(0,0,0,.5);font-size:13px;cursor:pointer}.jtopo_popoupmenu\x20a:hover{color:#000}.jtopo_iconsPanel{opacity:.8;padding-left:5px;position:absolute;background-color:#e8e8e8;top:90px;width:52px;height:425px;z-index:1000;border-radius:5px}.jtopo_iconsPanel\x20.item{border:1px\x20solid\x20#fff;width:42px;height:42px;margin-top:10px}.jtopo_toolbar{border-bottom:1px\x20dotted;padding-bottom:2px;border-color:#e0e0e0;width:100%;min-height:33px;background-color:#e8e8e8}.jtopo_toolbar\x20.group{float:left;margin-right:5px}.jtopo_toolbar\x20.item{float:left;width:32px;height:32px;stroke:gray;stroke-width:1;stroke-linecap:square;stroke-linejoin:miter;fill:none;font-size:12px;color:gray}.jtopo_toolbar\x20.active{background-color:#d3d3d3;border:1px\x20solid\x20#000}.jtopo_toolbar\x20input[type=text]{font-size:12px;color:gray;float:left;width:120px;height:26px;margin:2px;border:1px\x20solid\x20#fff;margin-left:4px}.jtopo_input_textfield{position:absolute;display:none;font-size:smaller;z-index:10000}.jtopo_tooltip{pointer-events:none;opacity:.9;min-width:30px;min-height:30px;padding:10px;border-radius:5px;background-color:#f8f8f8;border:1px\x20solid;position:absolute;z-index:10000}.jtopo_historyPanel{position:absolute;left:0px;top:100%;width:879px;overflow-x:scroll;height:600px;z-index:1000}.jtopo_debugPanel{left:0px;top:0%;width:100%;height:auto;background-color:orange;overflow-x:scroll;z-index:1000;text-align:left}');
var ac1 = ['1.4.6_5', 'assign'];
!function (ac2) {
  !function (ac3) {
    for (; --ac3;) ac2['push'](ac2['shift']());
  }(0x9e);
}(ac1);
var ac4 = function (ac5, ac6) {
  return ac1[ac5 = +ac5];
};
Object[ac4('0x0')](c1, {
  'version': ac4('0x1'),
  'Point': i8,
  'FlowLayout': abA,
  'Graph': a8X,
  'SimpleLink': Yw,
  'RatioNode': abe,
  'constraint': pg,
  'EndpointSegment': y1,
  'EndpointFixedName': y5,
  'EndpointFixedPoint': ya,
  'EndpointNearest': y8,
  'PropertiesPanel': Xk,
  'IconsPanel': Ww,
  'AutoFoldLink': V3,
  'ArrowNode': X3,
  'Tooltip': UP,
  'PopupMenu': Uw,
  'Grid': TA,
  'Position': c6,
  'vec2': eB,
  'HtmlImage': rX,
  'regClass': gK,
  'getClass': gT,
  'TopoPainter': T0,
  'AutoBoundLayout': RW,
  'ShapeNode': QH,
  'DomUtil': tu,
  'BezierLink': An,
  'ArcLink': B8,
  'PolygonNode': xj,
  'Color': QX,
  'randomColor': RL,
  'ColorKeywords': RK,
  'ForceDirectLayout': PT,
  'VideoNode': Py,
  'Style': da,
  'RadialGradient': ee,
  'LinearGradient': e3,
  'Pattern': er,
  'Layout': LF,
  'GridLayout': NS,
  'TreeLayout': OW,
  'CircleLayout': Oo,
  'Animation': D9,
  'TextNode': yy,
  'Transform': ac,
  'Layer': vG,
  'Stage': Gk,
  'Node': so,
  'CircleNode': IX,
  'Link': yU,
  'FoldLink': Jk,
  'CurveLink': JG,
  'FlexionalLink': L7,
  'TipNode': KF,
  'Collection': b8,
  'Rectangle': u,
  'Debug': ov,
  'Editor': a9m
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
