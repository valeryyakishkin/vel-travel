import { appCountries } from "../../../constants";
import * as core from "../../../core";
import {
  databaseService,
  storageService,
} from "../../../services";

export class AdminPage extends core.Component {
  constructor() {
    super();
    this.state = {
      page: document.title,
      isLoading: false,
    };

    this.form = new core.FormManager();
  }

  toggleIsLoading = () => {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !this.state.isLoading,
      };
    });
  };

  createDestination = (data) => {
    this.toggleIsLoading();
    storageService
      .uploadPoster(data.poster)
      .then((snapshot) => {
        storageService.getDownloadURL(snapshot.ref).then((url) => {
          databaseService
            .create("destinations", {
              ...data,
              poster: url,
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  componentDidMount() {
    this.form.init(this.querySelector("send-destination"), {});
    this.addEventListener("submit", this.form.handleSubmit(this.createDestination));
  }

  render() {
    return `
      <travel-preloader is-loading="${this.state.isLoading}">
        <travel-header></travel-header>
        <div class="container-fluid py-5">
          <div class="container py-2">
            <div class="text-center">
              <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Admin</h6>
              <h1>Admin Page</h1>
            </div>
            <div class="row justify-content-center">
              <div>
                <div class="contact-form" style="padding: 30px;">
                  <form class="send-destination">
                    <div class="control-group my-3">
                      <label class="form-label">Type destination name:</label>
                      <input type="text" class="form-control p-4" name="title" placeholder="Destination Name">
                    </div>
                    <div class="control-group my-3">
                      <label class="form-label">Travel duration, days:</label>
                      <input type="number" class="form-control p-4" name="duration" placeholder="Duration">
                    </div>
                    <div class="control-group my-3">
                      <label class="form-label">Number of persons:</label>
                      <input type="number" class="form-control p-4" name="persons" placeholder="Persons">
                    </div>
                    <div class="control-group my-3">
                      <label class="form-label">Price, $:</label>
                      <input type="number" class="form-control p-4" name="price" placeholder="Price">
                    </div>
                    <div class="control-group my-3">
                      <label class="form-label">Travel rating:</label>
                      <input type="range" class="form-range p-4" name="rating" min="1" max="5" step="1">
                    </div>
                    <div class="control-group my-3">
                      <label class="form-label">Upload a poster:</label>
                      <input class="form-control" type="file" id="formFile" name="poster">
                    </div>
                    <div class="control-group my-3">
                      <label class="form-label">Choose a country:</label>
                      <br>
                      <select class="form-select" name="country">
                        ${appCountries.map((item) => {
                          return `<option value="${item.value}">${item.label}</option>`;
                        }).join(' ')}
                      </select>
                    </div>
                    <div class="control-group my-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Example textarea:</label>
                      <textarea name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="text-center mt-4">
                      <button class="btn btn-primary py-2 px-5" type="submit" id="sendMessageButton">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </travel-preloader>
    `;
  }
}

customElements.define("admin-page", AdminPage);

{
  /* <travel-header></travel-header>
            <travel-preloader is-loading="${this.state.isLoading}">
              <div class="container mt-5 mb-5">
                <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Admin</h6>
                <h1>${this.state.page} Page</h1>
                <div class="row">
                  <div class="col-12">
                    <form>
                      <div class="mb-3">
                        <label class="form-label">Type travel name</label>
                        <input class="form-control" type="text" name="title">
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Travel rating</label>
                        <input class="form-range" type="range" name="rating" min="0" max="5" step="0.5">
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Upload a poster</label>
                        <input class="form-control" type="file" id="formFile" name="poster">
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Choose a country</label>
                        <select>
                          <option selected value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Australia">Australia</option>
                          <option value="India">India</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Indonesia">Indonesia</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </travel-preloader> */
}
