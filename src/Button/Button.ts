import SlButton from "@shoelace-style/shoelace/dist/components/button/button";
import { customElement, property } from "lit/decorators.js";
import "@material/web/ripple/ripple.js";
import styles from "./Button.syles";

/**
 * Buttons let people take action and make choices with one tap.
 * @extends `SlButton`
 */
@customElement("bp-button")
export class BpButton extends SlButton {
  static styles: CSSResultGroup = [SlButton.styles, styles];
  /** The label text of the button. */
  @property()
  label: string;

  /**
   * Creates a new instance of `BpButton`.
   * Sets the `pill` property to `true` and the `label` property to `"Label"`.
   */
  constructor() {
    super();
    this.pill = true;
    this.label = "Label";
  }

  firstUpdated(): void {
    const button = this.renderRoot.querySelector("button");
    const rippleSurface = document.createElement("md-ripple");
    button?.appendChild(rippleSurface);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bp-button": BpButton;
  }
}
