import { Component } from "../../../core";

export class Input extends Component {
    
    static get observedAttributes() {
        return [
            'type',
            'label',
            'control-name',
            'class-name',
            'value',
            'is-valid',
            'is-touched',
            'error-message',
            'placeholder',
        ];
    }
    
    render() {

        const controlClassName = JSON.parse(this.props['is-valid']) ? 'is-valid' : 'is-invalid';
        const isAddClassName = JSON.parse(this.props['is-touched']) ? controlClassName : '';

        return `
            <input 
                type="${this.props.type}" 
                class="form-control p-4 ${isAddClassName} ${this.props['class-name'] ?? ''}" 
                name="${this.props['control-name']}"
                value="${this.props.value}"
                placeholder="${this.props.placeholder}"
            >
            <div class="invalid-feedback">${this.props['error-message']}</div>
        `
    }
}

customElements.define('travel-input', Input);