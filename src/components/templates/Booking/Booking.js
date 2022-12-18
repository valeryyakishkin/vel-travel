import * as core from "../../../core";
import { initialFieldsState } from "./initialState";

export class Booking extends core.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isLoading: false,
      fields: {
        ...initialFieldsState,
      },
    };

    this.form = new core.FormManager();
  }

  render() {
    const {
      fields: { departDate, returnDate },
    } = this.state;

    return `
            <div class="container-fluid booking mt-5 pb-5">
                <div class="container pb-5">
                    <div class="bg-light shadow" style="padding: 30px;">
                        <form class="row align-items-center booking-form" style="min-height: 60px;">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="md-3 mb-md-0">
                                            <select class="custom-select px-4" style="height: 50px;">
                                                <option selected>Destination</option>
                                                <option value="1">Destination 1</option>
                                                <option value="2">Destination 1</option>
                                                <option value="3">Destination 1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-3 mb-md-0">
                                            <div class="date" id="date1">
                                                <travel-input
                                                    type="text"
                                                    placeholder="Depart Date"
                                                    control-name="depart-date"
                                                    value="${departDate.value}"
                                                    is-valid="${departDate.isValid}"
                                                    is-touched="${departDate.isTouched}"
                                                    error-message="${departDate.errors?.message}"
                                                ></travel-input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="md-3 mb-md-0">
                                            <div class="date" id="date2" data-target-input="nearest">
                                                <travel-input
                                                    type="text"
                                                    placeholder="Return Date"
                                                    control-name="return-date"
                                                    value="${returnDate.value}"
                                                    is-valid="${returnDate.isValid}"
                                                    is-touched="${returnDate.isTouched}"
                                                    error-message="${returnDate.errors?.message}"
                                                ></travel-input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-primary btn-block" type="submit" style="height: 47px; margin-top: -2px;">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("travel-booking", Booking);
