import { appEvents } from "../../../constants";
import * as core from "../../../core";
import { eventBus } from "../../../core";
import { databaseService } from "../../../services";
import "../../atoms";
import "../../molecules";
import { initialFieldsState } from "./initialState";

export class PackageDetails extends core.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isShowSuccess: false,
      destination: null,
      fields: {
        ...initialFieldsState,
      },
    };

    this.form = new core.FormManager();
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

  createRequest = (data) => {
    this.toggleIsLoading();
    databaseService
      .create("requests", {
        ...data,
      })
      .then(() => {
        this.showSuccess();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  validateForm = (evt) => {
    if (evt.target.closest("travel-input")) {
      this.form.init(this.querySelector(".registration-form"), {
        email: [
          core.Validator.email("Email is not valid"),
          core.Validator.required("The field should not be empty"),
        ],
      });
    }
  };

  validate = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        fields: {
          ...state.fields,
          ...evt.detail,
        },
      };
    });
  };

  showStars = () => {
    let result = "";
    for (let i = 1; i <= Number(this.state.destination.rating); i++) {
      result += `<i class="fa fa-star text-primary mr-1"></i>`;
    }
    return result;
  };

  showSuccess() {
    this.setState((state) => {
      return {
        ...state,
        isShowSuccess: !state.isShowSuccess,
      };
    });
  }

  componentDidMount() {
    this.form.init(this.querySelector(".send-request"), {});
    this.getDestination();
    eventBus.on(appEvents.validateControls, this.validate);
    this.addEventListener("submit", this.form.handleSubmit(this.createRequest));
  }

  componentWillUnmount() {
    eventBus.off(appEvents.validateControls, this.validate);
    this.removeEventListener("submit", this.form.handleSubmit(this.createRequest));
  }

  render() {
    const {
      fields: { email },
    } = this.state;
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
                <travel-preloader is-loading="${this.state.isLoading}">
                  <form class="mb-5 send-request">
                    <input type="text" name="title" value="${
                      this.state.destination.title
                    }" style="display: none;">
                    <input type="text" name="country" value="${
                      this.state.destination.country
                    }" style="display: none;">
                    <div class="form-group col-6">
                      <label class="form-label">Type your email address:</label>
                      <travel-input
                        type="email"
                        placeholder="Your email"
                        control-name="email"
                        value="${email.value}" 
                        is-valid="${email.isValid}"
                        is-touched="${email.isTouched}"
                        error-message="${email.errors?.message}"   
                      ></travel-input>
                    </div>
                    <div class="form-group col-6 my-3">
                      <label class="form-label">Choose a vacant date for you:</label>
                      <input type="date" class="form-control p-4" name="date">
                    </div>
                    <div class="form-group col-6 my-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Leave a comment:</label>
                      <textarea name="comment" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                    <div class="alert alert-success ${
                      !this.state.isShowSuccess ? "d-none" : ""
                    }" role="alert">
                      Your request has been submitted and will be reviewed as soon as possible.
                    </div>
                    <div class="col-6 d-flex justify-content-around">
                      <button type="sumbit" class="btn btn-primary btn-lg mr-2 p-2">Book now</button>
                      <button type="button" class="btn btn-secondary btn-lg p-2 mr-2">Back to destinations</button>
                    </div>
                  </form>
                </travel-preloader>
              </div>
            </div>
          </div>
      `
      }
    `;
  }
}

customElements.define("package-details", PackageDetails);
