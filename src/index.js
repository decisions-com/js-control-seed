import './testbed.css';
import { initializeTestBed } from './testbed';
import { JsControlName } from './js-control';
import { value } from './value';

/**
 * This is mock container app that simulates how Decisions will
 * instantiate, initialize, and setValue, getValue, resize, etc.
 */

// track control instance, to preserve it on hot module reloads (HMR):
let control = window.controlInstance;

if (!control) {
  // instantiate and initialize your control, as Decisions will
  control = new JsControlName();
  const host = initializeTestBed(control);
  control.initialize(host);

  document.addEventListener('resize', () => {
    const size = host[0].getBoundingClientRect();
    control.resize(size.height, size.width);
  });
  
}

// we can call setValue on every HMR refresh, because it should be idempotent.
control.setValue(value);

