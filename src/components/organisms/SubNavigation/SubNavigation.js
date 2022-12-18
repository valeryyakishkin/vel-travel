import { appCountries } from "../../../constants";
import { Component } from "../../../core";
import './subnavigation.scss';

export class SubNavigation extends Component {
    render() {
        return `
            <div class="sub-navigation row">
                <ul>
                    ${appCountries.map((item) => {
                        return `
                            <li><a href="#" data-country="${item.value}">${item.label}</a></li>
                        `;
                    }).join(' ')}
                </ul>
            </div>
        `;
    }
}

customElements.define('travel-subnavigation', SubNavigation);