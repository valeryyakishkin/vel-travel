import { Component } from "../../../core";
import { authService, databaseService } from "../../../services";
import "../../atoms";

export class PackageDetails extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      destination: null,
    };
  }

  static get observedAttributes() {
    return ["id"];
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  getDestination = () => {
    this.toggleIsLoading();
    databaseService
      .getDocument("destinations", this.props.id)
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            destination: data,
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  showStars = () => {
    let result = "";
    for (let i = 1; i <= Number(this.state.destination.rating); i++) {
      result += `<i class="fa fa-star text-primary mr-1"></i>`;
    }
    return result;
  };

  componentDidMount() {
    this.getDestination();
  }

  render() {
    return `
      ${
        !this.state.destination
          ? `<travel-preloader is-loading="${this.state.isLoading}"></travel-preloader>`
          : `
          <div class="container-fluid">
            <div class="row mt-5 flex-column">
              <div class="col-12">
                <table class="table table-white">
                  <tr>
                    <td colspan="2" class="text-center">
                      <img src="${
                        this.state.destination.poster
                      }" class="col-lg-6 col-md-8 col-sm-12" />
                    </td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>${this.state.destination.title}</td>
                  </tr>
                  <tr>
                    <td>Country:</td>
                    <td>${this.state.destination.country}</td>
                  </tr>
                  <tr>
                    <td>Rating:</td>
                    <td>${this.showStars()}</td>
                  </tr>
                  <tr>
                    <td colspan="2">${this.state.destination.description}</td>
                  </tr>
                </table>
                <form class="mb-5">
                  <input type="text" name="title" value="${this.state.destination.title}" style="display: none;">
                  <input type="text" name="country" value="${this.state.destination.country}" style="display: none;">
                  <input type="email" name="email" value="${this.state.destination.country}" style="display: none;">
                  <input>
                  <button type="button" class="btn btn-secondary btn-lg mx-2">Back to destinations</button>
                  <button type="sumbit" class="btn btn-primary btn-lg mx-2">Book now</button>
                </form>
              </div>
            </div>
          </div>
      `
      }
    `;
  }
}

customElements.define("package-details", PackageDetails);
