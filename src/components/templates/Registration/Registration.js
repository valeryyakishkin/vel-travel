import * as core from "../../../core";
import { authService } from "../../../services";
import { initialFieldsState } from "./initialState";
import { appRoutes, appEvents } from "../../../constants";
import "../../molecules";
import "../../atoms";
import { eventBus } from "../../../core";

export class Registration extends core.Component {
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

  registerUser = (data) => {
    this.toggleIsLoading();
    authService
      .signUp(data.email, data.password)
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
    this.addEventListener("click", this.validateForm);
    eventBus.on(appEvents.validateControls, this.validate);
    this.addEventListener("submit", this.form.handleSubmit(this.registerUser));
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.validateForm);
    eventBus.off(appEvents.validateControls, this.validate);
    this.removeEventListener("submit", this.form.handleSubmit(this.registerUser));
  }

  render() {
    const {
      fields: { email, password },
    } = this.state;

    return `
      <div class="container-fluid bg-registration py-5 page-header">
          <div class="container py-5">
              <div class="row align-items-center">
                  <div class="col-lg-7 mb-5 mb-lg-0">
                      <div class="mb-4">
                          <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Registration</h6>
                          <h1 class="text-white"><span class="text-primary">30% OFF</span> For Honeymoon</h1>
                      </div>
                      <p class="text-white">Honeymoon is the time that all newlyweds are looking forward to. 
                          The wedding chores are over, the ceremony has remained a pleasant memory... 
                          It's the turn of the first family vacation! 
                          How to spend a honeymoon so that there is something to remember in order to fulfill all your dreams in one fell swoop?
                      </p>
                      <ul class="list-inline text-white m-0">
                          <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Free romantic dinner by the sea</li>
                          <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Photo session, discounts on accommodation and spa treatments</li>
                          <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Private tours and more...</li>
                      </ul>
                  </div>
                  <div class="col-lg-5">
                      <div class="card border-0">
                          <div class="card-header bg-primary text-center p-4">
                              <h1 class="text-white m-0">Sign Up Now</h1>
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
                                          <button class="btn btn-primary btn-block py-3" type="submit">Sign Up Now</button>
                                      </div>
                                  </form>
                              </travel-preloader>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `;
  }
}

customElements.define("travel-registration", Registration);
