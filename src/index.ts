import './testbed.css';
import { initializeTestBed } from './testbed';
import { JsControlName } from './ts-control';
import { value } from './value';

/**
 * This is mock container app that simulates how Decisions will
 * instantiate, initialize, and setValue, getValue, resize, etc.
 */

const control = new JsControlName();
const host = initializeTestBed(control);
control.initialize(host);

document.addEventListener('resize', () => {
  const size = host[0].getBoundingClientRect();
  control.resize(size.height, size.width);
});

control.setValue(value);
