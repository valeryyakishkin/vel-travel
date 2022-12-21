import { Component } from "../../../core";

export class ServicesPage extends Component {


    render() {
        return `
            <travel-header></travel-header>
            <travel-service></travel-service>
            <travel-feature></travel-feature>
        `
    }
}

customElements.define('services-page', ServicesPage);