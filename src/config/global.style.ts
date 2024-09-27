import { createGlobalStyle } from 'styled-components'
import { themes } from './variables'

const themeValues = Object.entries(themes)

const colorVariables = themeValues
  .map(
    ([theme, values]) => `
:root[data-theme='${theme}'] {
${Object.entries(values)
  .map(
    ([color, value]) => `
  --${color}-rgb: ${value};
  --${color}: rgb(${value});`
  )
  .join('')}
}`
  )
  .join('')

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

${colorVariables}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  line-height: 1.5;
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
  background-color: var(--neutral-0);
  color: var(--neutral-950);
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
  font-style: italic;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

code,
kbd,
samp {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
}

hr {
  all: unset;
  display: block;
  height: 1px;
  width: 100%;
  background: currentColor;
}

.visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.mb-32{
  margin-bottom: 32px;
}
.mb-24{
  margin-bottom: 24px;
}
.invoice-btn {
    color: var(--primary-500);
    border: transparent;
    background: var(--neutral-50);
    padding: 8px;
    min-width: 160px;

    &:not(:disabled):not(.ant-btn-disabled):hover {
      background: var(--neutral-250);
    }
  }
  //for chart texts
  .chart-text{
    tspan{
    font-family: "Manrope",sans-serif;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: .4px;
    font-weight: 400;
    font-style:normal;
  }}


`

export default GlobalStyle