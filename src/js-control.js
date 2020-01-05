import './js-control.css';
/**
 * This JSDoc type def represents the data coming into your control from Decisions,
 * when `setValue` is called.
 * @typedef YourInputs
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef DecisionsJsControl
 * @property {function} DecisionsJsControl.initialize - (host: JQuery, component: any): void;
 * @property {function} DecisionsJsControl.resize - (height: number, width: number): void;
 * @property {function} DecisionsJsControl.setValue - (data: YourInputs): void;
 * @property {function} DecisionsJsControl.getValue - (): YourOutputs;
 */

if (process.env.NODE_ENV === 'development') {
  // place things here that you need to load or do only in the dev environment.
  // this code will be removed in production.
}

/**
 * JSControl class. Name of class will become name of functional constructor that
 * Decisions will call to create an instance of your control.
 * 1. Rename to reflect the name of your JS Control
 * @typedef {DecisionsJsControl} JsControlName
 */
export class JsControlName {
  /** @type {HTMLElement} parent element, within which to render your control. */
  parentElement;

  /** @type {JQuery<HTMLElement>} host */
  host;

  /** @type {HTMLLabelElement} */
  labelWrapper;

  /**@type {HTMLSpanElement} */
  labelText;

  /** @type {HTMLInputElement} */
  input;

  constructor() {
    this.labelWrapper = document.createElement('label');
    this.labelWrapper.style.border = "dashed purple 1px";
    this.labelWrapper.className = 'my-label-wrapper';
    this.labelText = document.createElement('span');
    this.labelText.className = 'my-label-text';
    this.labelWrapper.appendChild(this.labelText);
    this.input = document.createElement('input');
    this.input.className = 'my-input';
    this.labelWrapper.appendChild(this.input);
  }

  /**
   * Do any work that needs to be done once for your control.
   *
   * In this example, we are creating the HTML parts using vanilla JS,
   * but you could embed another library into your control,
   * or use a [script control](https://documentation.decisions.com/docs/javascript-control-using-library)
   * @param {JQuery<HTMLElement>} host jquery element to append custom content into
   */
  initialize(host) {
    this.host = host;
    this.parentElement = host[0];
    this.parentElement.appendChild(this.labelWrapper);
  }

  /**
   * @param {YourInputs} values - an object with keys : values matching each input you have/will
   * define for your control on the Decisions side.
   */
  setValue(values) {
    // store any data your control needs to store
    this.labelText.innerText = values.name;
    this.input.value = values.value;
  }

  /**
   * If your control requires programmatic resize, handle it here.
   * @param {number} height in pixels
   * @param {number} width in pixels
   */
  resize(height, width) {
    console.log('height', height, 'width', width);
  }

  /**
   * Return values if control needs to output data.
   */
  getValue() {
    return { value: this.input.value };
  }
}

// add constructor to global context.
window.JsControlName = JsControlName;
