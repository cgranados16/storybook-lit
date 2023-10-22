import { css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import { OutlinedButton as MdOutlinedButton } from "@material/web/button/internal/outlined-button.js";
import { styles as outlinedStyles } from "@material/web/button/internal/outlined-styles.css.js";
import { styles as sharedElevationStyles } from "@material/web/button/internal/shared-elevation-styles.css.js";
import { styles as sharedStyles } from "@material/web/button/internal/shared-styles.css.js";

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Use an outlined button for actions that need attention but
 * aren’t the primary action, such as “See all” or “Add to cart.” This is also
 * the button to use for giving someone the opportunity to change their mind or
 * escape a flow.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
@customElement("bp-outlined-button")
export class OutlinedButton extends MdOutlinedButton {
  static override styles: CSSResultGroup = [
    sharedStyles,
    sharedElevationStyles,
    outlinedStyles,
    css`
      :host,
      :host(.primary) {
        --md-outlined-button-outline-color: hsla(0, 0%, 13%, 0.5);
        --md-outlined-button-label-text-color: #212121;
        --md-outlined-button-hover-label-text-color: var(
          --md-outlined-button-label-text-color
        );

        --md-outlined-button-pressed-label-text-color: var(
          --md-outlined-button-label-text-color
        );

        --md-outlined-button-hover-state-layer-color: var(
          --md-outlined-button-label-text-color
        );
        --md-outlined-button-focus-label-text-color: var(
          --md-outlined-button-label-text-color
        );
        --md-outlined-button-pressed-outline-color: var(
          --md-outlined-button-outline-color
        );
        --md-outlined-button-pressed-state-layer-color: var(
          --md-outlined-button-outline-color
        );
      }
      :host(.secondary) {
        --md-outlined-button-outline-color: var(
          --md-sys-color-secondary-outline
        );
        --md-outlined-button-label-text-color: var(--md-sys-color-secondary);
      }
      :host(.primary-alt) {
        --md-outlined-button-outline-color: var(--md-sys-color-outline);
        --md-outlined-button-label-text-color: var(--md-sys-color-primary);
      }
      :host(.error) {
        --md-outlined-button-outline-color: var(--md-sys-color-error-outline);
        --md-outlined-button-label-text-color: var(
          --md-sys-color-error-container
        );
      }
      :host(.success) {
        --md-outlined-button-outline-color: var(
          --md-custom-color-success-outline
        );
        --md-outlined-button-label-text-color: var(--md-custom-color-success);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "bp-outlined-button": OutlinedButton;
  }
}
