import * as core from "../../../core";
import { initialFieldsState } from "./initialState";
import { authService } from "../../../services";
import { appRoutes, appEvents } from "../../../constants";
import "../../atoms";
import "../../molecules";
import { eventBus } from "../../../core";

export class SignIn extends core.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isLoading: false,
      fields: {
        ...initialFieldsState,
      },
    };

    this.form = new core.FormManager();
  }

  toggleIsLoading = () => {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  };

  signIn = (data) => {
    this.toggleIsLoading();
    authService
      .signIn(data.email, data.password)
      .then((user) => {
        authService.user = user;
        eventBus.emit(appEvents.changeRoute, { target: appRoutes.home });
        eventBus.emit(appEvents.userAuthorized);
      })
      .catch((error) => {
        this.setState((state) => {
          return {
            ...state,
            error: error.message,
          };
        });
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
        password: [core.Validator.required("The field should not be empty")],
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

  componentDidMount() {
    eventBus.on(appEvents.validateControls, this.validate);
    this.addEventListener("click", this.validateForm);
    this.addEventListener("submit", this.form.handleSubmit(this.signIn));
  }

  componentWillUnmount() {
    eventBus.off(appEvents.validateControls, this.validate);
    this.removeEventListener("click", this.validateForm);
    this.removeEventListener("submit", this.form.handleSubmit(this.signIn));
  }

  render() {
    const {
      fields: { email, password },
    } = this.state;

    return `
      <div class="container-fluid bg-registration py-5 page-header">
          <div class="container py-5">
              <div class="row align-items-center">
                  <div class="col-lg-5">
                      <div class="card border-0">
                          <div class="card-header bg-primary text-center p-4">
                              <h1 class="text-white m-0">Sign In</h1>
                          </div>
                          <div class="card-body rounded-bottom bg-white p-5">
                              <travel-preloader is-loading="${this.state.isLoading}">
                                  <form class="registration-form">
                                      <div class="invalid-feedback text-center mb-3 d-block">${this.state.error}</div>
                                      <div class="form-group">
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
                                      <div class="form-group">
                                          <travel-input
                                              type="password"
                                              placeholder="Your password"
                                              control-name="password"
                                              value="${password.value}" 
                                              is-valid="${password.isValid}"
                                              is-touched="${password.isTouched}"
                                              error-message="${password.errors?.message}"
                                          ></travel-input>
                                      </div>
                                      <div>
                                          <button class="btn btn-primary btn-block py-3" type="submit">Sign In</button>
                                      </div>
                                  </form>
                              </travel-preloader>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-7 mt-5 mb-lg-0">
                      <div class="mb-4">
                          <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Authorization</h6>
                          <h1 class="text-white"><span class="text-primary">15% OFF</span> For Family Holiday</h1>
                      </div>
                      <p class="text-white">Going on a trip with children, we pre-select tours focused on families with children. 
                      We choose the best hotels with animation and entertainment to entertain our child, 
                      we are looking for countries and resorts only with sandy beaches and a smooth descent into the water. 
                      After all, comfort and convenience for a small child and older children will help you spend a family vacation with comfort and without worries!
                      </p>
                      <ul class="list-inline text-white m-0">
                          <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Rest from the usual routine and nice memories</li>
                          <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Strengthening health and relationships</li>
                          <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Spend time with children</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    `;
  }
}

customElements.define("travel-sign-in", SignIn);
