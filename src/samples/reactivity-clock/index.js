// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport { onMount } from \"svelte\";\n\timport Clock from \"./Clock.svelte\";\n\n\tlet time = Date.now();\n\tlet hours, minutes, seconds;\n\n\thours = time.getHours();\n\tminutes = time.getMinutes();\n\tseconds = time.getSeconds();\n\n\tonMount(() => {\n\t\tconst interval = setInterval(() => {\n\t\t\ttime = new Date();\n\t\t}, 1000);\n\n\t\treturn () => {\n\t\t\tclearInterval(interval);\n\t\t};\n\t});\n</script>\n\n<Clock {hours} {minutes} {seconds} />\n"
  },
  {
    "type": "svelte",
    "name": "Clock",
    "source": "<script>\n\texport let hours;\n\texport let minutes;\n\texport let seconds;\n</script>\n\n<svg viewBox=\"-50 -50 100 100\">\n\t<circle class=\"clock-face\" r=\"48\" />\n\n\t<!-- markers -->\n\t{#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}\n\t\t<line class=\"major\" y1=\"35\" y2=\"45\" transform=\"rotate({30 * minute})\" />\n\n\t\t{#each [1, 2, 3, 4] as offset}\n\t\t\t<line\n\t\t\t\tclass=\"minor\"\n\t\t\t\ty1=\"42\"\n\t\t\t\ty2=\"45\"\n\t\t\t\ttransform=\"rotate({6 * (minute + offset)})\" />\n\t\t{/each}\n\t{/each}\n\n\t<!-- hour hand -->\n\t<line\n\t\tclass=\"hour\"\n\t\ty1=\"2\"\n\t\ty2=\"-20\"\n\t\ttransform=\"rotate({30 * hours + minutes / 2})\" />\n\n\t<!-- minute hand -->\n\t<line\n\t\tclass=\"minute\"\n\t\ty1=\"4\"\n\t\ty2=\"-30\"\n\t\ttransform=\"rotate({6 * minutes + seconds / 10})\" />\n\n\t<!-- second hand -->\n\t<g transform=\"rotate({6 * seconds})\">\n\t\t<line class=\"second\" y1=\"10\" y2=\"-38\" />\n\t\t<line class=\"second-counterweight\" y1=\"10\" y2=\"2\" />\n\t</g>\n</svg>\n\n<style>\n\tsvg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t.clock-face {\n\t\tstroke: #333;\n\t\tfill: white;\n\t}\n\n\t.minor {\n\t\tstroke: #999;\n\t\tstroke-width: 0.5;\n\t}\n\n\t.major {\n\t\tstroke: #333;\n\t\tstroke-width: 1;\n\t}\n\n\t.hour {\n\t\tstroke: #333;\n\t}\n\n\t.minute {\n\t\tstroke: #666;\n\t}\n\n\t.second,\n\t.second-counterweight {\n\t\tstroke: rgb(180, 0, 0);\n\t}\n\n\t.second-counterweight {\n\t\tstroke-width: 3;\n\t}\n</style>\n"
  }
]