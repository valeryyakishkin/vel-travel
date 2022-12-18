import { appRoutes, appEvents } from "../../../constants";
import * as core from "../../../core";
import { eventBus } from "../../../core";

export class Navbar extends core.Component {
  constructor() {
    super();
    this.state = {
      isShowed: false,
      activePath: window.location.pathname,
    };
  }

  static get observedAttributes() {
    return ["is-logged"];
  }

  onClick = (evt) => {
    if (evt.target.closest(".navbar-toggler")) {
      this.onShowNaviation();
    }
    if (evt.target.closest(".sign-out-link")) {
      evt.preventDefault();
      this.onSignOut();
    }
  };

  onShowNaviation = () => {
    this.setState((state) => {
      return {
        ...state,
        isShowed: !this.state.isShowed,
      };
    });
  };

  onSignOut = () => {
    eventBus.emit(appEvents.userLoggedOut);
  };

  onChangeRoute = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        activePath: evt.detail.target,
      };
    });
  };

  isActiveLink(path) {
    return this.state.activePath === path ? "active" : "";
  }

  componentDidMount() {
    eventBus.on(appEvents.changeRoute, this.onChangeRoute);
    this.addEventListener("click", this.onClick);
  }

  componentWillUnmount() {
    eventBus.off(appEvents.changeRoute, this.onChangeRoute);
    this.removeEventListener("click", this.onClick);
  }

  render() {
    return `
            <div class="container-fluid position-relative nav-bar p-0">
                <div class="container-lg position-relative p-0 px-lg-3" style="z-index: 9;">
                    <nav class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-3">
                        <travel-link to="${
                          appRoutes.home
                        }" class="navbar-brand">
                            <h1 class="m-2 text-primary">VEL<span class="text-dark">TRAVEL</span></h1>
                        </travel-link>
                        <button type="button" class="navbar-toggler ${
                          !this.state.isShowed ? "collapsed" : ""
                        }" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse justify-content-between px-3 collapse ${
                          this.state.isShowed ? "show" : ""
                        }" id="navbarCollapse">
                            <div class="navbar-nav ml-auto py-0">
                                <travel-link to="${appRoutes.home}">
                                    <span class="nav-item nav-link ${this.isActiveLink(
                                      appRoutes.home
                                    )}">Home</span>
                                </travel-link>
                                <travel-link to="${appRoutes.about}">
                                    <span class="nav-item nav-link ${this.isActiveLink(
                                      appRoutes.about
                                    )}">About</span>
                                </travel-link>
                                <travel-link to="${appRoutes.services}">
                                    <span class="nav-item nav-link ${this.isActiveLink(
                                      appRoutes.services
                                    )}">Services</span>
                                </travel-link>
                                <travel-link to="${appRoutes.destinations}">
                                    <span class="nav-item nav-link ${this.isActiveLink(
                                      appRoutes.destinations
                                    )}">Destinations</span>
                                </travel-link>
                                <travel-link to="${appRoutes.guides}">
                                    <span class="nav-item nav-link ${this.isActiveLink(
                                      appRoutes.guides
                                    )}">Guides</span>
                                </travel-link>
                                ${
                                  JSON.parse(this.props["is-logged"])
                                    ? `
                                      <travel-link to="${appRoutes.admin}">
                                        <span class="nav-item nav-link ${this.isActiveLink(
                                          appRoutes.admin
                                        )}">Admin</span>
                                      </travel-link>
                                      <a href="#" class="sign-out-link" style="text-decoration: none;">
                                        <span class="nav-item nav-link">SignOut</span>
                                      </a>
                                    `
                                    : `
                                    <travel-link to="${appRoutes.signIn}">
                                      <span class="nav-item nav-link ${this.isActiveLink(
                                        appRoutes.signIn
                                      )}">SignIn</span>
                                    </travel-link>
                                    <travel-link to="${appRoutes.signUp}">
                                        <span class="nav-item nav-link ${this.isActiveLink(
                                          appRoutes.signUp
                                        )}">SignUp</span>
                                    </travel-link>
                                  `
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        `;
  }
}

customElements.define("travel-navbar", Navbar);
