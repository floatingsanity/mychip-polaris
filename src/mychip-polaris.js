import { LitElement, html, css } from 'lit';

class MychipPolaris extends LitElement {
  static properties = {
    link: { type: String },
    name: { type: String },
  }

  static styles = css`
    :host {
      display: block;
    }

    .tag-module--tag--d9ee2 {
      flex: 1;
      text-decoration: none;
      color: #001e44;
      border: 2px solid #444;
      display: inline-block;
      font-family: Roboto, sans-serif;
      font-size: 17px;
      font-weight: 700;
      letter-spacing: 0.03em;
      line-height: 19px;
      text-align: center;
      padding: 17px;
      margin: 5px;
      width: 85%;
      transition: background-color 0.3s, color 0.3s, text-decoration 0.3s, border 0.3s;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      box-sizing: inherit;
      text-transform: uppercase;
    }

    .tag-module--tag--d9ee2:hover {
      background-color: #f0f0f0;
      color: #0052be;
      text-decoration: underline;
      border: 2px solid transparent;
    }
  `;

  render() {
    return html`
      <a class="tag-module--tag--d9ee2" href="${this.link}">${this.name}</a>
    `;
  }
}

customElements.define('mychip-polaris', MychipPolaris);
