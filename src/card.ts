import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Bootstrap Card Web Component
 * A flexible and extensible content container with multiple variants and options.
 */
@customElement('bs-card')
export class BsCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 0.375rem;
    }

    .card-body {
      flex: 1 1 auto;
      padding: 1rem 1rem;
    }

    .card-title {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.2;
    }

    .card-subtitle {
      margin-top: -0.25rem;
      margin-bottom: 0;
      font-size: 0.875rem;
      color: #6c757d;
    }

    .card-text:last-child {
      margin-bottom: 0;
    }

    .card-header {
      padding: 0.5rem 1rem;
      margin-bottom: 0;
      background-color: rgba(0, 0, 0, 0.03);
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      border-top-left-radius: calc(0.375rem - 1px);
      border-top-right-radius: calc(0.375rem - 1px);
    }

    .card-footer {
      padding: 0.5rem 1rem;
      background-color: rgba(0, 0, 0, 0.03);
      border-top: 1px solid rgba(0, 0, 0, 0.125);
      border-bottom-right-radius: calc(0.375rem - 1px);
      border-bottom-left-radius: calc(0.375rem - 1px);
    }

    .card-img-top {
      width: 100%;
      border-top-left-radius: calc(0.375rem - 1px);
      border-top-right-radius: calc(0.375rem - 1px);
    }

    .card-img-bottom {
      width: 100%;
      border-bottom-right-radius: calc(0.375rem - 1px);
      border-bottom-left-radius: calc(0.375rem - 1px);
    }

    /* Card variants */
    :host([variant="primary"]) .card {
      background-color: #0d6efd;
      border-color: #0d6efd;
      color: #fff;
    }

    :host([variant="secondary"]) .card {
      background-color: #6c757d;
      border-color: #6c757d;
      color: #fff;
    }

    :host([variant="success"]) .card {
      background-color: #198754;
      border-color: #198754;
      color: #fff;
    }

    :host([variant="danger"]) .card {
      background-color: #dc3545;
      border-color: #dc3545;
      color: #fff;
    }

    :host([variant="warning"]) .card {
      background-color: #ffc107;
      border-color: #ffc107;
      color: #000;
    }

    :host([variant="info"]) .card {
      background-color: #0dcaf0;
      border-color: #0dcaf0;
      color: #000;
    }

    :host([variant="light"]) .card {
      background-color: #f8f9fa;
      border-color: #f8f9fa;
      color: #000;
    }

    :host([variant="dark"]) .card {
      background-color: #212529;
      border-color: #212529;
      color: #fff;
    }

    /* Outline variants */
    :host([variant="outline-primary"]) .card {
      background-color: transparent;
      border-color: #0d6efd;
      color: #0d6efd;
    }

    :host([variant="outline-secondary"]) .card {
      background-color: transparent;
      border-color: #6c757d;
      color: #6c757d;
    }

    :host([variant="outline-success"]) .card {
      background-color: transparent;
      border-color: #198754;
      color: #198754;
    }

    :host([variant="outline-danger"]) .card {
      background-color: transparent;
      border-color: #dc3545;
      color: #dc3545;
    }

    :host([variant="outline-warning"]) .card {
      background-color: transparent;
      border-color: #ffc107;
      color: #ffc107;
    }

    :host([variant="outline-info"]) .card {
      background-color: transparent;
      border-color: #0dcaf0;
      color: #0dcaf0;
    }

    :host([variant="outline-light"]) .card {
      background-color: transparent;
      border-color: #f8f9fa;
      color: #f8f9fa;
    }

    :host([variant="outline-dark"]) .card {
      background-color: transparent;
      border-color: #212529;
      color: #212529;
    }
  `;

  @property({ type: String })
  variant?: string;

  @property({ type: String })
  header?: string;

  @property({ type: String })
  footer?: string;

  @property({ type: String })
  cardTitle?: string;

  @property({ type: String })
  subtitle?: string;

  @property({ type: String, attribute: 'img-top' })
  imgTop?: string;

  @property({ type: String, attribute: 'img-bottom' })
  imgBottom?: string;

  @property({ type: String, attribute: 'img-alt' })
  imgAlt?: string = '';

  render() {
    return html`
      <div class="card">
        ${this.header ? html`<div class="card-header">${this.header}</div>` : ''}
        ${this.imgTop ? html`<img src="${this.imgTop}" alt="${this.imgAlt}" class="card-img-top">` : ''}
        
        <div class="card-body">
          ${this.cardTitle ? html`<h5 class="card-title">${this.cardTitle}</h5>` : ''}
          ${this.subtitle ? html`<h6 class="card-subtitle mb-2 text-muted">${this.subtitle}</h6>` : ''}
          <div class="card-text">
            <slot></slot>
          </div>
        </div>

        ${this.imgBottom ? html`<img src="${this.imgBottom}" alt="${this.imgAlt}" class="card-img-bottom">` : ''}
        ${this.footer ? html`<div class="card-footer">${this.footer}</div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bs-card': BsCard;
  }
}