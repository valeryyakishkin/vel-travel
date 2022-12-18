import { Component } from "../../../core";

export class DestinationPage extends Component {


    render() {
        return `
            <travel-header></travel-header>
            <travel-booking></travel-booking>
            <travel-destination></travel-destination>

        `
    }
}

customElements.define('destination-page', DestinationPage);