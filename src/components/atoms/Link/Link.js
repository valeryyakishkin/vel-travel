import { Component } from "../../../core";

export class Link extends Component {


    render() {
        return `
        <a class="text-primary px-3" href="">
            <i class=""></i>
        </a>
        `
    }
}

customElements.define('travel-link', Link);