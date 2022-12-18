import { Component } from "../../../core";

export class PackagesPage extends Component {
  render() {
    return `
            <travel-header></travel-header>
            <travel-package></travel-package>
        `;
  }
}

customElements.define("packages-page", PackagesPage);
