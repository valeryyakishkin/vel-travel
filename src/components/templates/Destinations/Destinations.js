import { Component } from "../../../core";
import { databaseService } from "../../../services";
import "../../organisms";

export class Destinations extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      destinations: [],
    };
  }

  toggleIsLoading = () => {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  };

  getDestinations = () => {
    this.toggleIsLoading();
    databaseService
      .read("destinations")
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            destinations: data,
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  componentDidMount() {
    this.getDestinations();
  }

  render() {
    return `
      <travel-preloader is-loading="${this.state.isLoading}">
        <div class="container-fluid py-5">
            <div class="container pt-5 pb-3">
                <div class="text-center mb-3 pb-3">
                    <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Destinations</h6>
                    <h1>Perfect Tour Destinations</h1>
                </div>
                <div class="row" style="box-sizing: border-box;">
                    ${
                      this.state.destinations.length > 0
                        ? `
                                ${this.state.destinations
                                  .map(
                                    ({
                                      title,
                                      duration,
                                      persons,
                                      price,
                                      rating,
                                      poster,
                                      country,
                                      description,
                                      id,
                                    }) => {
                                      return `
                                <destination-card
                                    title="${title}"
                                    duration="${duration}"
                                    description="${description}"
                                    persons="${persons}"
                                    price="${price}"
                                    rating="${rating}"
                                    poster="${poster}"
                                    country="${country}"
                                    id="${id}"
                                    class="col-lg-4 col-md-6 mb-4"
                                >
                                </destination-card>
                                `;
                                    }
                                  )
                                  .join(" ")}
                            `
                        : "<h2>Destinations is not available</h2>"
                    }
                </div>
            </div>
        </div>
      </travel-preloader>
        `;
  }
}

customElements.define("travel-destinations", Destinations);
