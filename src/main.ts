import './style.css'
import presetIcons from '@unocss/preset-icons/browser'
import { presetAttributify, presetUno } from 'unocss'
import initUnocssRuntime from '@unocss/runtime'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

initUnocssRuntime({
  defaults: {
    safelist: [/* ...icons, */'w-min!'],
    rules: [

    ],
    theme: {
      colors: {

      },
    },
    presets: [
      presetUno({}),
      presetAttributify({}),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
    ],
  },
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
