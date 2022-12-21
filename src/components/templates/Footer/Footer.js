import { Component } from "../../../core";

export class Footer extends Component {
    render() {
        return `
            <div class="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-3">
                <div class="row pt-1 d-flex justify-content-between">
                    <div class="col-lg-6 col-md-4 mb-1">
                        <a class="navbar-brand" href="">
                            <h1 class="text-primary">VEL<span class="text-white">TRAVEL</span></h1>
                        </a>
                        <p>The traveler lives four lives: 
                        in one he plans a journey, 
                        in another he makes it, 
                        in the third he remembers, 
                        and in the fourth he lives like all other people.
                        <br>EASTERN WISDOM</p>
                        <h6 class="text-white text-uppercase mt-4 mb-3" style="letter-spacing: 5px;">Follow Us</h6>
                        <div class="d-flex justify-content-start">
                            <a class="btn btn-outline-primary btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-primary btn-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-primary btn-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-primary btn-square" href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 mb-1">
                        <h5 class="text-white text-uppercase mt-4" style="letter-spacing: 5px;">Contact Us</h5>
                        <p><i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>+375 (44) 123 45 67</p>
                        <p><i class="fa fa-envelope mr-2"></i>veltravel@example.com</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style="border-color: rgba(256, 256, 256, .1) !important;">
                <div class="row">
                    <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p class="m-0 text-white-50">Copyright &copy; <a href="#">Domain</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('travel-footer', Footer);