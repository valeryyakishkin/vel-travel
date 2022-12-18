import * as core from "./core";
import "./components";
import { appRoutes, appEvents } from "./constants";
import { authService } from "./services";
import { eventBus } from "./core";
import "./auth";

export class App extends core.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isLogged: false,
      error: "",
    };
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  getUser() {
    this.toggleIsLoading();
    authService
      .init()
      .then((user) => {
        authService.user = user;
        this.setState((state) => {
          return {
            ...state,
            isLogged: Boolean(user),
          };
        });
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
  }

  onSignOut = () => {
    this.toggleIsLoading();
    authService
      .signOut()
      .then(() => {
        this.setState((state) => {
          return {
            ...state,
            isLogged: false,
          };
        });
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

  setIsAuthorized = () => {
    this.setState((state) => {
      return {
        ...state,
        isLogged: true,
      };
    });
  };

  componentDidMount() {
    this.getUser();
    eventBus.on(appEvents.userAuthorized, this.setIsAuthorized);
    eventBus.on(appEvents.userLoggedOut, this.onSignOut);
  }

  componentWillUnmount() {
    eventBus.off(appEvents.userAuthorized, this.setIsAuthorized);
    eventBus.off(appEvents.userLoggedOut, this.onSignOut);
  }

  render() {
    return this.state.isLoading
      ? `<travel-preloader is-loading="${this.state.isLoading}"></travel-preloader>`
      : `
        <div>
          <travel-router>
              <travel-topbar></travel-topbar>
              <travel-navbar is-logged="${this.state.isLogged}"></travel-navbar>
              <main>
                <travel-route path="${appRoutes.home}" component="home-page" title="Home"></travel-route>
                <travel-route path="${appRoutes.about}" component="about-page" title="About"></travel-route>
                <travel-route path="${appRoutes.services}" component="services-page" title="Services"></travel-route>
                <travel-route path="${appRoutes.destinations}" component="destinations-page" title="Destinations"></travel-route>
                <travel-route path="${appRoutes.guides}" component="guides-page" title="Guides"></travel-route>
                <travel-route path="${appRoutes.signUp}" component="sign-up-page" title="Sign Up"></travel-route>
                <travel-route path="${appRoutes.signIn}" component="sign-in-page" title="Sign In"></travel-route>
                <private-route path="${appRoutes.admin}" component="admin-page" title="Admin"></private-route>
                <travel-route path="${appRoutes.packageDetails}/:id" component="package-details" title="Package Details"></travel-route>
                <travel-route path="${appRoutes.errorPage}" component="error-page" title="Not Found"></travel-route>
                <travel-outlet></travel-outlet>
              </main>
              <travel-footer></travel-footer>
          </travel-router>
        </div>
      `;
  }
}

customElements.define("travel-app", App);
