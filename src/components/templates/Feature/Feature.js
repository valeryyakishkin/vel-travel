import { Component } from "../../../core";

export class Feature extends Component {
  render() {
    return `
            <div class="container-fluid pb-5">
                <div class="container pb-5">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="d-flex mb-4 mb-lg-0">
                                <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="width: 100px; height: 100px;">
                                    <i class="fa fa-2x fa-money-check-alt text-white"></i>
                                </div>
                                <div class="d-flex flex-column">
                                    <h5 class="">Competitive Pricing</h5>
                                    <p class="m-0">A strategy that helps a business attract more customers through price optimization</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex mb-4 mb-lg-0">
                                <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="width: 100px; height: 100px;">
                                    <i class="fa fa-2x fa-award text-white"></i>
                                </div>
                                <div class="d-flex flex-column">
                                    <h5 class="">Best Services</h5>
                                    <p class="m-0">In modern conditions, the service sector is the engine of economic growth</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex mb-4 mb-lg-0">
                                <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="width: 100px; height: 100px;">
                                    <i class="fa fa-2x fa-globe text-white"></i>
                                </div>
                                <div class="d-flex flex-column">
                                    <h5 class="">Worldwide Coverage</h5>
                                    <p class="m-0">We on a potential audience in order to attract as many satisfied as possible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define('travel-feature', Feature);
