// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport { pengwinning } from \"./actions.js\";\n</script>\n\n<style>\n\th1 {\n\t\ttext-align: center;\n\t}\n\n\t:global(body) {\n\t\tbackground: #cbdbfc;\n\t}\n</style>\n\n<h1 use:pengwinning>Penguin?</h1>\n"
  },
  {
    "type": "js",
    "name": "actions",
    "source": "export function pengwinning(node) {\n\tconst tooltip = document.createElement(\"div\");\n\tconst { top, right, bottom } = node.getBoundingClientRect();\n\n\tObject.assign(tooltip.style, {\n\t\tbackground: `url('images/penguingif.gif')`,\n\t\tposition: \"absolute\",\n\t\ttop: `${bottom}px`,\n\t\tleft: \"-64px\",\n\t\twidth: \"64px\",\n\t\theight: \"70px\",\n\t\tcolor: \"white\",\n\t\tpointerEvents: \"none\",\n\t\ttransition: \"8s linear\",\n\t});\n\n\tfunction startAnimation() {\n\t\ttooltip.style.transform = \"translateX(calc(100vw + 64px))\";\n\t}\n\n\tdocument.body.appendChild(tooltip);\n\trequestAnimationFrame(() => requestAnimationFrame(startAnimation));\n}\n"
  }
]