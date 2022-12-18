import { appRoutes } from "../../../constants";
import * as core from "../../../core";

export class DestinationCard extends core.Component {
  static get observedAttributes() {
    return [
      "title",
      "duration",
      "persons",
      "price",
      "rating",
      "poster",
      "country",
      "description",
      "id",
    ];
  }

  showStars = () => {
    let result = "";
    for (let i = 1; i <= Number(this.props.rating); i++) {
      result += `<i class="fa fa-star text-primary mr-1"></i>`;
    }
    return result;
  };

  render() {
    return `
        <div class="package-item bg-white mb-2">
            <travel-link to="${appRoutes.packageDetails}/${this.props.id}">
            <img class="img-fluid" src="${this.props.poster}" alt="${
      this.props.title
    }">
            </travel-link>
            <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>${
                      this.props.country
                    }</small>
                    <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>${
                      this.props.duration
                    } Days</small>
                    <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>${
                      this.props.persons
                    } Person</small>
                </div>
                <travel-link to="${appRoutes.packageDetails}/${
      this.props.id
    }"><span class="text-primary">${this.props.title}</span></travel-link>
                <div class="border-top mt-4 pt-4">
                    <div class="d-flex justify-content-between">
                        <h6 class="m-0">${this.showStars()}</h6>
                        <h5 class="m-0">$${this.props.price}</h5>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("destination-card", DestinationCard);
