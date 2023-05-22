// jtopo-wrapper.js
import { JSDOM } from 'jsdom';
import * as dat from 'dat.gui';

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.dat = dat;
const JTopo = require('@jtopo/core');

export const {
  ArrowNode,
  Editor,
  IconsPanel,
  Layer,
  Node,
  PropertiesPanel,
  Stage,
} = JTopo;
