import { html, LitElement } from 'lit';

export class Dashboard extends LitElement {
  render() {
    return html`
      <sl-button>Click me</sl-button>
      <sl-button>Click me</sl-button>
      <sl-input></sl-input>
      <sl-button>
        <sl-icon slot="prefix" name="gear"></sl-icon>
        Settings
      </sl-button>
    `;
  }
}

customElements.define('dashboard-page', Dashboard);
