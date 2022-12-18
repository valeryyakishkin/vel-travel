import { Component } from "../../../core";
import '../../templates';

export class HomePage extends Component {


    render() {
        return `
            <travel-carousel></travel-carousel>
            <travel-booking></travel-booking>
            <travel-about></travel-about>
            <travel-feature></travel-feature>
            <travel-service></travel-service>
            <travel-destinations></travel-destinations>
            <travel-guides></travel-guides>
        `
    }
}

customElements.define('home-page', HomePage);