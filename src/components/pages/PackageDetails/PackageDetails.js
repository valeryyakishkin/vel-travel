import { Component } from "../../../core";
import { databaseService } from "../../../services";
import '../../atoms';

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
  };

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
              <div class="col-sm-6 col-md-8">
                <img src="${this.state.destination.poster}" class="col-md-12 col-sm-12" />
              </div>
              <div class="col-sm-6 col-md-8">
                <table class="table table-white table-striped">
                  <tr>
                    <td>Name</td>
                    <td>${this.state.destination.title}</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>${this.state.destination.country}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td><h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>${this.state.destination.rating}</h6></td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="mt-5">
              <p>${this.state.destination.description}</p>
            </div>
          </div>
      `}
    `;
  }
}

customElements.define("package-details", PackageDetails);
