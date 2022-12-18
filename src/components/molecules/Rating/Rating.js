import { Component } from "../../../core";

export class Rating extends Component {
  static get observedAttributes() {
    return ["count"];
  }

  render() {
    return `
      <div class="rating">
        <div class="stars">
            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i><small class="stars-${this.props.count} stars-colorfull"></small></h6>
        </div>
      </div>
    `;
  }
}

customElements.define("travel-rating", Rating);
