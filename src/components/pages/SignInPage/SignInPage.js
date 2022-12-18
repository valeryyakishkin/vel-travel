import { Component } from "../../../core";

export class SignInPage extends Component {


    render() {
        return `
            <travel-sign-in></travel-sign-in>
        `
    }
}

customElements.define('sign-in-page', SignInPage);