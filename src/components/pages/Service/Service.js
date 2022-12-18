import { Component } from "../../../core";

export class ServicesPage extends Component {


    render() {
        return `
            <travel-header></travel-header>
            <travel-service></travel-service>
            <travel-destination></travel-destination>
        `
    }
}

customElements.define('services-page', ServicesPage);