export class FooComponent extends HTMLElement {
  constructor() {
    super()

    const paragraph = document.createElement('p')
    paragraph.textContent = 'FooComponent'

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(paragraph)
  }

  static register() {
    customElements.define('foo-component', FooComponent)
  }
}
