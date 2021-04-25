import { WordCount } from "./components/WordCount.js";

WordCount.register()

Object.defineProperty(window, 'WordCount', { value: WordCount })
