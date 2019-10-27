// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport Check from \"./Check.svelte\";\n\timport Cross from \"./Cross.svelte\";\n\timport { RE_EMAIL } from \"./regexp.js\";\n\n\tlet text_value = \"\";\n\t$: match = text_value.match(RE_EMAIL);\n</script>\n\n<div>\n\t<input bind:value={text_value} />\n\n\t{#if !match}\n\t\t<Cross color=\"red\" />\n\t{:else}\n\t\t<Check color=\"green\" />\n\t{/if}\n\n</div>\n\n<style>\n\tdiv {\n\t\theight: 40px;\n\t\tdisplay: flex;\n\t}\n\n\tinput {\n\t\theight: 100%;\n\t}\n\n\t:global(body) {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "Check",
    "source": "<script>\n\texport let color;\n</script>\n\n<span>\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n\t\t<path\n\t\t\tfill={color}\n\t\t\td=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206\n\t\t\t0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69\n\t\t\t432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997\n\t\t\t9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207\n\t\t\t9.997-36.204-.001z\" />\n\t</svg>\n</span>\n\n<style>\n\tspan {\n\t\twidth: 40px;\n\t\tpadding: 5px 5px 5px 10px;\n\t}\n\n\tsvg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "Cross",
    "source": "<script>\n\texport let color;\n</script>\n\n<span>\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 352 512\">\n\t\t<path\n\t\t\tfill={color}\n\t\t\td=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19\n\t\t\t0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93\n\t\t\t89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28\n\t\t\t32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0\n\t\t\t44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07\n\t\t\t100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19\n\t\t\t0-44.48L242.72 256z\" />\n\t</svg>\n</span>\n\n<style>\n\tspan {\n\t\twidth: 40px;\n\t\tpadding: 5px;\n\t}\n\n\tsvg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n</style>\n"
  },
  {
    "type": "js",
    "name": "regexp",
    "source": "export const RE_EMAIL = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/;\n"
  }
]