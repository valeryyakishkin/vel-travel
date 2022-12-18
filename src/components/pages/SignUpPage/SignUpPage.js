import { Component } from "../../../core";

export class SignUpPage extends Component {


    render() {
        return `
            <travel-registration></travel-registration>
        `
    }
}

customElements.define('sign-up-page', SignUpPage);