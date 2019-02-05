import { LitElement, html, customElement } from "lit-element";
import { GamepadElement } from "./components/gamepad-element/gamepad-element";

/**
 * The entrypoint of the app, for testing purposes.
 */
@customElement("entrypoint-app")
export class EntryPoint extends LitElement {
  render() {
    return html`
      ${new GamepadElement()}
    `;
  }
}
