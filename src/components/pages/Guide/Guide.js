import { Component } from "../../../core";

export class GuidesPage extends Component {
  render() {
    return `
            <travel-header></travel-header>
            <travel-guides></travel-guides>
        `;
  }
}

customElements.define("guides-page", GuidesPage);
