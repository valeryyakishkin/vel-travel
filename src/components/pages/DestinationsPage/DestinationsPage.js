import { Component } from "../../../core";

export class DestinationsPage extends Component {
  render() {
    return `
            <travel-header></travel-header>
            <travel-destinations></travel-destinations>
        `;
  }
}

customElements.define("destinations-page", DestinationsPage);
