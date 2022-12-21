import * as core from "../../../core";
import "bootstrap/js/dist/carousel";
import "./carousel.scss";
import { appRoutes } from "../../../constants";

export class Carousel extends core.Component {
  render() {
    return `
            <div class="container-fluid p-0 position-relative" style="top: -50px;">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img class="w-100" src="../../../assets/images/carousel-1.jpg" alt="Image">
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style="max-width: 900px;">
                                    <h4 class="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                    <h1 class="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
                                    <travel-link to="${appRoutes.destinations}">
                                        <span class="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</span>
                                    </travel-link>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="20000">
                            <img class="w-100" src="../../../assets/images/carousel-2.jpg" alt="Image">
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style="max-width: 900px;">
                                    <h4 class="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                    <h1 class="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                                    <travel-link to="${appRoutes.destinations}">
                                        <span class="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</span>
                                    </travel-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <div class="btn btn-dark" style="width: 45px; height: 45px; border-radius: 50%;">
                            <span class="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <div class="btn btn-dark" style="width: 45px; height: 45px; border-radius: 50%;">
                            <span class="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </button>
                </div>
            </div>
        `;
  }
}

customElements.define("travel-carousel", Carousel);
