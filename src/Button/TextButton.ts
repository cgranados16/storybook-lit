import { css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import { TextButton as MdTextButton } from "@material/web/button/internal/text-button.js";
import { styles as textStyles } from "@material/web/button/internal/text-styles.css.js";
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
 * __Rationale:__ Use an text button for actions that need attention but
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
@customElement("bp-text-button")
export class TextButton extends MdTextButton {
  static override styles: CSSResultGroup = [
    sharedStyles,
    sharedElevationStyles,
    textStyles,
    css`
      :host {
        text-decoration: underline;
        text-decoration-color: var(--md-text-button-label-text-color);
      }
      :host,
      :host(.primary) {
        --md-text-button-outline-color: hsla(0, 0%, 13%, 0.5);
        --md-text-button-label-text-color: #212121;
        --md-text-button-hover-label-text-color: var(
          --md-text-button-label-text-color
        );
        --md-text-button-pressed-label-text-color: var(
          --md-text-button-label-text-color
        );

        --md-text-button-hover-state-layer-color: var(
          --md-text-button-label-text-color
        );
        --md-text-button-focus-label-text-color: var(
          --md-text-button-label-text-color
        );
        --md-text-button-pressed-outline-color: var(
          --md-text-button-outline-color
        );
        --md-text-button-pressed-state-layer-color: var(
          --md-text-button-outline-color
        );
      }
      :host(.secondary) {
        --md-text-button-outline-color: var(--md-sys-color-secondary-outline);
        --md-text-button-label-text-color: var(--md-sys-color-secondary);
      }
      :host(.primary-alt) {
        --md-text-button-outline-color: var(--md-sys-color-outline);
        --md-text-button-label-text-color: var(--md-sys-color-primary);
      }
      :host(.error) {
        --md-text-button-outline-color: var(--md-sys-color-error-outline);
        --md-text-button-label-text-color: var(--md-sys-color-error-container);
      }
      :host(.success) {
        --md-text-button-outline-color: var(--md-custom-color-success-outline);
        --md-text-button-label-text-color: var(--md-custom-color-success);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "bp-text-button": TextButton;
  }
}
