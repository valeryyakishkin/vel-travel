import { Component } from "../../../core";
import '../../templates';

export class HomePage extends Component {


    render() {
        return `
            <travel-carousel></travel-carousel>
            <travel-feature></travel-feature>
            <travel-about></travel-about>
            <travel-guides></travel-guides>
            <travel-service></travel-service>
        `
    }
}

customElements.define('home-page', HomePage);