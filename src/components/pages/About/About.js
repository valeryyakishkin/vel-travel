import { Component } from "../../../core";
import '../../templates';

export class AboutPage extends Component {


    render() {
        return `
            <travel-header></travel-header>
            <travel-about></travel-about>
            <travel-feature></ravel-feature>
            <travel-registration></travel-registration>
            <travel-team></travel-team>
        `
    }
}

customElements.define('about-page', AboutPage);