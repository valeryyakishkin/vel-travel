import { Component } from "../../../core";

export class Destination extends Component {
  render() {
    return `
            <div class="container-fluid py-5">
                <div class="container pt-5 pb-3">
                    <div class="text-center mb-3 pb-3">
                        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Destination</h6>
                        <h1>Explore Top Destination</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="../../../assets/images/destination-1.jpg" alt="">
                                <a class="destination-overlay text-white text-decoration-none" href="">
                                    <h5 class="text-white">United States</h5>
                                    <span>Valley of Fire</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="../../../assets/images//destination-2.jpg" alt="">
                                <a class="destination-overlay text-white text-decoration-none" href="">
                                    <h5 class="text-white">United Kingdom</h5>
                                    <span>Fairy Pools on the Isle of Skye</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="../../../assets/images/destination-3.jpg" alt="">
                                <a class="destination-overlay text-white text-decoration-none" href="">
                                    <h5 class="text-white">Australia</h5>
                                    <span>Waitomo Caves</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="../../../assets/images/destination-4.jpg" alt="">
                                <a class="destination-overlay text-white text-decoration-none" href="">
                                    <h5 class="text-white">India</h5>
                                    <span>Taj Mahal</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="../../../assets/images/destination-5.jpg" alt="">
                                <a class="destination-overlay text-white text-decoration-none" href="">
                                    <h5 class="text-white">South Africa</h5>
                                    <span>Hidden Beach</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="../../../assets/images/destination-6.jpg" alt="">
                                <a class="destination-overlay text-white text-decoration-none" href="">
                                    <h5 class="text-white">Indonesia</h5>
                                    <span>Toba Lake</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("travel-destination", Destination);
