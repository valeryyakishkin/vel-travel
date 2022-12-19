import { Component } from "../../../core";

export class About extends Component {

    render() {
        return `
            <div class="container-fluid py-5">
                <div class="container pt-5">
                    <div class="row">
                        <div class="col-lg-6" style="min-height: 500px;">
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100" src="../../../assets/images/about.jpg" style="object-fit: cover;">
                            </div>
                        </div>
                        <div class="col-lg-6 pt-5 pb-lg-5">
                            <div class="about-text bg-white p-4 p-lg-5 my-lg-5">
                                <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">About Us</h6>
                                <h1 class="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                                <p>The travel agency "Vel Travel" pays attention to all the details and "little things", which is especially important for clients that the tourism industry has not been focused on for many years. The strongest point of the company is the work of professionals who are ready to satisfy all the wishes of the client. The demand for such services is practically unlimited.</p>
                                <p>At the initial stage of its development, the travel agency "Vel Travel" was a small travel company, at the moment the company is actively developing, cooperating with the largest tour operator companies.</p>
                                <div class="row mb-4">
                                    <div class="col-6">
                                        <img class="img-fluid" src="../../../assets/images/about-1.jpg" alt="">
                                    </div>
                                    <div class="col-6">
                                        <img class="img-fluid" src="../../../assets/images/about-2.jpg" alt="">
                                    </div>
                                </div>
                                <a class="btn btn-primary mt-1" href="">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('travel-about', About);