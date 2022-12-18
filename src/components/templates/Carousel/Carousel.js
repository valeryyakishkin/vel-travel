import { Component } from "../../../core";

export class Carousel extends Component {


    render() {
        return `
            <div class="container-fluid p-0">
                <div id="header-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img class="w-100" src="../../../assets/images/carousel-1.jpg" alt="Image">
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style="max-width: 900px;">
                                    <h4 class="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                    <h1 class="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
                                    <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item active">
                            <img class="w-100" src="../../../assets/images/carousel-2.jpg" alt="Image">
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style="max-width: 900px;">
                                    <h4 class="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                    <h1 class="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                                    <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#header-carousel" class="carousel-control-prev" data-slide="prev">
                        <div class="btn btn-dark" style="width: 45px; height: 45px; border-radius: 50%;">
                            <span class="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a href="#header-carousel" class="carousel-control-next" data-slide="next">
                        <div class="btn btn-dark" style="width: 45px; height: 45px; border-radius: 50%;">
                            <span class="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define('travel-carousel', Carousel);