import * as core from "../../../core";
import { appRoutes } from "../../../constants";

export class Header extends core.Component {

    constructor() {
        super();
        this.state = {
            page: document.title,
        }
    }

    render() {
        return `
            <div class="container-fluid page-header">
                <div class="container">
                    <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                        <h3 class="display-4 text-white text-uppercase">${this.state.page}</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase">
                                <travel-link to="${appRoutes.home}"><span class="text-white">Home</span></travel-link>
                            </p>
                            <i class="fa fa-angle-double-right pt-1 px-3"></i>
                            <p class="m-0 text-uppercase">${this.state.page}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('travel-header', Header);