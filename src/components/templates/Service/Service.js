import { Component } from "../../../core";

export class Service extends Component {
    render() {
        return `
            <div class="container-fluid py-5">
                <div class="container pt-5 pb-3">
                    <div class="text-center mb-3 pb-3">
                        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Services</h6>
                        <h1>Tours & Traves Services</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="service-item bg-white text-center mb-2 py-5 px-4">
                                <i class="fa fa-2x fa-route mx-auto mb-4"></i>
                                <h5 class="mb-2">Travel Guide</h5>
                                <p class="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="service-item bg-white text-center mb-2 py-5 px-4">
                                <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
                                <h5 class="mb-2">Ticket Booking</h5>
                                <p class="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="service-item bg-white text-center mb-2 py-5 px-4">
                                <i class="fa fa-2x fa-hotel mx-auto mb-4"></i>
                                <h5 class="mb-2">Hotel Booking</h5>
                                <p class="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('travel-service', Service);