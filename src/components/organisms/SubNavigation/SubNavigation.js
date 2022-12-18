import { Component } from "../../../core";
import './subnavigation.scss';

export class SubNavigation extends Component {
    render() {
        return `
            <div class="sub-navigation">
                <ul>
                    <li><a href="#">SHOW ALL</a></li>
                    <li><a href="#">LATEST TRAILERS</a></li>
                    <li><a href="#">TOP RATED</a></li>
                    <li><a href="#">MOST COMMENTED</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define('travel-subnavigation', SubNavigation);