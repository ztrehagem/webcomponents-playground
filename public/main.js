import { FooComponent } from "./components/FooComponent.js";
import { WordCount } from "./components/WordCount.js";

WordCount.register()
FooComponent.register()

const appEl = document.querySelector('#app')
/** @type {HTMLTemplateElement} */
const appTemplate = document.querySelector('#app-template')
const appShadow = appEl.attachShadow({ mode: 'open' })
appShadow.appendChild(appTemplate.content.cloneNode(true))
