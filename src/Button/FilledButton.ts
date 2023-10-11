import { css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import { FilledButton as MdFilledButton } from "@material/web/button/internal/filled-button";
import { styles as filledStyles } from "@material/web/button/internal/filled-styles.css.js";
import { styles as sharedElevationStyles } from "@material/web/button/internal/shared-elevation-styles.css.js";
import { styles as sharedStyles } from "@material/web/button/internal/shared-styles.css.js";

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
@customElement("bp-filled-button")
export class FilledButton extends MdFilledButton {
  static override styles: CSSResultGroup = [
    sharedStyles,
    sharedElevationStyles,
    filledStyles,
    css`
      :host,
      :host(.primary) {
        --md-filled-button-container-color: #212121;
      }
      :host(.secondary) {
        --md-filled-button-container-color: var(--md-sys-color-secondary);
        --md-filled-button-label-text-color: var(--md-sys-color-on-secondary);
      }
      :host(.primary-alt) {
        --md-filled-button-container-color: var(--md-sys-color-primary);
        --md-filled-button-label-text-color: var(--md-sys-color-on-primary);
      }
      :host(.error) {
        --md-filled-button-container-color: var(--md-sys-color-error-container);
      }
      :host(.success) {
        --md-filled-button-container-color: var(--md-custom-color-success);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "bp-filled-button": FilledButton;
  }
}
