import { Component } from "../../../core";
import { databaseService } from "../../../services";
import "../../organisms";

export class Destinations extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isShowedAll: false,
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

  onShowAll = (evt) => {
    evt.preventDefault();
    if (evt.target.closest(".see-all")) {
      this.setState((state) => {
        return {
          ...state,
          isShowedAll: !state.isShowedAll,
        };
      });
    }
  };

  componentDidMount() {
    this.getDestinations();
    this.addEventListener("click", this.onShowAll);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onShowAll);
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
                <div class="row">
                    ${
                      this.state.destinations.length > 0
                        ? `
                          ${
                            this.state.isShowedAll
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
                                  country="${country
                                    .split("")
                                    .map((item, index) =>
                                      index === 0 ? item.toUpperCase() : item
                                    )
                                    .join("")}"
                                  id="${id}"
                                  class="col-lg-4 col-md-6 mb-4"
                              >
                              </destination-card>
                              `;
                                  }
                                )
                                .join(" ")}
                            `
                              : `
                              ${this.state.destinations
                                .slice(0, 3)
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
                                  country="${country
                                    .split("")
                                    .map((item, index) =>
                                      index === 0 ? item.toUpperCase() : item
                                    )
                                    .join("")}"
                                  id="${id}"
                                  class="col-lg-4 col-md-6 mb-4"
                              >
                              </destination-card>
                              `;
                                  }
                                )
                                .join(" ")}
                              <div class="d-flex justify-content-center">
                                <button class="px-4 btn btn-primary text-center see-all"><a href="" class="text-white">See all</a></button>
                              </div>
                            `
                          }    
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
