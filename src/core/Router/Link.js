import { Component } from "../Component";
import { appEvents } from "../../constants";
import { eventBus } from "../EventBus";

export class Link extends Component {
    constructor() {
        super();
        this.isShadow = true;
    }

    static get observedAttributes() {
        return ['to'];
    }

    onClick = (evt) => {
        evt.preventDefault();
        eventBus.emit(appEvents.changeRoute, { target: this.props.to });
    }

    componentDidMount() {
        this.addEventListener("click", this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener("click", this.onClick);
    }

    render() {
        return `
            <a href="${this.props.to}" style="text-decoration: none;">
                <slot></slot>
            </a>
        `;
    }
}

customElements.define('travel-link', Link);