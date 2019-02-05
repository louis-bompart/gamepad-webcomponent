import { LitElement, html, customElement, property } from "lit-element";

/**
 * Custom Element representing a GamePad
 * Can contains Axis and buttons.
 */
@customElement("gamepad-element")
export class GamepadElement extends LitElement {

  
  @property()
  foo = "foo";

  render() {
    return html`
      <p>A paragraph ${this.foo}</p>
    `;
  }
}