export class FooComponent extends HTMLElement {
  constructor() {
    super()

    const paragraph = document.createElement('p')
    paragraph.textContent = 'FooComponent'

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(paragraph)
  }

  static register() {
    customElements.define('foo-component', FooComponent)
  }
}
