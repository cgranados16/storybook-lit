import { css } from "lit";

export default css`
  /* Primary button */
  :host {
    --md-ripple-pressed-color: #fff;
    /* --md-ripple-hover-color: transparent; */
  }
  :host(.primary)::part(base) {
    background-color: var(--primary-black-main);
    border-color: var(--primary-black-main);
    color: var(--primary-black-contrast);
  }

  /* :host(.primary)::part(base):hover {
    background-color: var(--primary-black-dark);
    border-color: var(--primary-black-dark);
  } */

  :host(.primary[outline])::part(base) {
    background-color: var(--primary-black-contrast);
    border-color: var(--primary-black-states-outlined-border);
    color: var(--primary-black-main);
    --md-ripple-pressed-color: var(--primary-black-main);
  }

  :host(.primary[outline])::part(base):hover {
    background-color: var(--primary-black-states-hover);
  }

  /* Primary-alt button */
  :host(.primary-alt)::part(base) {
    background-color: var(--primary-main);
    border-color: var(--primary-main);
    color: var(--primary-contrast);
  }

  :host(.primary-alt)::part(base):hover {
    background-color: var(--primary-dark);
    border-color: var(--primary-dark);
  }

  :host(.primary-alt[outline])::part(base) {
    background-color: var(--primary-contrast);
    border-color: var(--primary-states-outlined-border);
    color: var(--primary-main);
    --md-ripple-pressed-color: var(--primary-main);
  }

  :host(.primary-alt[outline])::part(base):hover {
    background-color: var(--primary-states-hover);
  }

  /* Secondary button */
  :host(.secondary)::part(base) {
    background-color: var(--secondary-main);
    border-color: var(--secondary-main);
    color: var(--secondary-contrast);
  }

  :host(.secondary)::part(base):hover {
    background-color: var(--secondary-dark);
    border-color: var(--secondary-dark);
  }

  :host(.secondary[outline])::part(base) {
    background-color: var(--secondary-contrast);
    border-color: var(--secondary-states-outlined-border);
    color: var(--secondary-main);
    --md-ripple-pressed-color: var(--secondary-main);
  }

  :host(.secondary[outline])::part(base):hover {
    background-color: var(--secondary-states-hover);
  }

  /* Error button */
  :host(.error)::part(base) {
    background-color: var(--error-main);
    border-color: var(--error-main);
    color: var(--error-contrast);
  }

  :host(.error)::part(base):hover {
    background-color: var(--error-dark);
    border-color: var(--error-dark);
  }

  :host(.error[outline])::part(base) {
    background-color: var(--error-contrast);
    border-color: var(--error-states-outlined-border);
    color: var(--error-main);
    --md-ripple-pressed-color: var(--error-main);
  }

  :host(.error[outline])::part(base):hover {
    background-color: var(--error-states-hover);
  }

  /* Success button */
  :host(.success)::part(base) {
    background-color: var(--success-main);
    border-color: var(--success-main);
    color: var(--success-contrast);
  }

  :host(.success)::part(base):hover {
    background-color: var(--success-dark);
    border-color: var(--success-dark);
  }

  :host(.success[outline])::part(base) {
    background-color: var(--success-contrast);
    border-color: var(--success-states-outlined-border);
    color: var(--success-main);
    --md-ripple-pressed-color: var(--success-main);
  }

  :host(.success[outline])::part(base):hover {
    background-color: var(--success-states-hover);
  }

  /* Text button */
  :host([variant="text"])::part(base) {
    color: var(--primary-main);
    --md-ripple-pressed-color: var(--primary-main);
  }
  :host([variant="text"])::part(label) {
    text-decoration: underline;
  }
`;
