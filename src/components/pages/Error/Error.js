import { Component } from "../../../core";

export class ErrorPage extends Component {
    render() {
        return `<h1>Not Found Page</h1>`;
    }
}

customElements.define('error-page', ErrorPage);