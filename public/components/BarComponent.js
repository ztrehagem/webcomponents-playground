export class BarComponent extends HTMLElement {
  /** @type {Node} */
  static template

  static async register() {
    const res = await fetch('/components/BarComponent.html')
    const html = await res.text()
    const dom = new DOMParser().parseFromString(html, 'text/html')
    BarComponent.template = dom.body.firstChild
    customElements.define('bar-component', BarComponent)
  }

  #style = document.createElement('style')

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(this.#style)
    this.shadowRoot.appendChild(BarComponent.template.cloneNode(true))
  }

  static get observedAttributes() {
    return ['text-color']
  }

  connectedCallback() {
    this.updateStyle()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.updateStyle()
  }

  updateStyle() {
    const colorStyle = this.getAttribute('text-color')
    if (colorStyle) {
      this.#style.textContent = `.bar-component { color: ${colorStyle}; }`
    }
  }
}
