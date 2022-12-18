import { appCountries } from "../../../constants";
import { Component } from "../../../core";
import './subnavigation.scss';

export class SubNavigation extends Component {
    
    constructor() {
        super();
        this.state = {
            activeCountry: appCountries[0].value,
        }
    }

    render() {
        return `
            <div class="sub-navigation row">
                <ul>
                    ${appCountries.map((item) => {
                        const isActive = this.state.activeCountry === item.value ? 'active' : '';
                        return `
                            <li>
                                <a href="#" class="${isActive}" data-country="${item.value}">
                                    ${item.label}
                                </a>
                            </li>
                        `;
                    }).join(' ')}
                </ul>
            </div>
        `;
    }
}

customElements.define('travel-subnavigation', SubNavigation);