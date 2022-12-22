import { appCountries, appEvents } from "../../../constants";
import { Component, eventBus } from "../../../core";
import "./subnavigation.scss";

export class SubNavigation extends Component {
  constructor() {
    super();
    this.state = {
      activeCountry: appCountries[0].value,
    };
  }

  onChangeCountry = (evt) => {
    if (evt.target.closest(".country")) {
      this.setState((state) => {
        return {
          ...state,
          activeCountry: evt.target.getAttribute("data-country"),
        };
      });
      eventBus.emit(appEvents.changeCountry, evt.target.getAttribute("data-country"));
    }
  };

  componentDidMount() {
    this.addEventListener("click", this.onChangeCountry);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onChangeCountry);
  }

  render() {
    return `
            <div class="sub-navigation row">
                <ul>
                    ${appCountries
                      .map((item) => {
                        return `
                            <li>
                                <a href="#" class="country" data-country="${item.value}">
                                    ${item.label}
                                </a>
                            </li>
                        `;
                      })
                      .join(" ")}
                </ul>
            </div>
        `;
  }
}

customElements.define("travel-subnavigation", SubNavigation);
