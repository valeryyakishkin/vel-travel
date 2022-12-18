import { appRoutes, appEvents } from "../constants";
import { Component, eventBus } from "../core";
import { authService } from "../services";

export class PrivateRoute extends Component {

  static get observedAttributes() {
    return ["path", "component", "title"];
  }

  componentDidMount() {
    if (!authService.user && this.props.path === window.location.pathname) {
      eventBus.emit(appEvents.changeRoute, {
        target: appRoutes.signIn,
      });
    }
  }

  render() {
    return `<it-route 
      path="${this.props.path}" 
      component="${this.props.component}" 
      title="${this.props.title}"></it-route>`;
  }
}

customElements.define("private-route", PrivateRoute);
