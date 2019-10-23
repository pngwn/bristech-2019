// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\tlet done = false;\n\tlet error = false;\n\n\tlet promise = new Promise((res, rej) => {\n\t\tconst timer = setInterval(() => {\n\t\t\tif (done) {\n\t\t\t\tclearInterval(timer);\n\t\t\t\tres(\"oh hello there!\");\n\t\t\t} else if (error) {\n\t\t\t\trej(\"rejected again...\");\n\t\t\t}\n\t\t}, 10);\n\t});\n</script>\n\n{#await promise}\n\t<h1>Hi...</h1>\n{:then data}\n\t<h1>{data}</h1>\n{:catch error}\n\t<h1>{error}</h1>\n{/await}\n\n<button on:click={() => (done = true)}>Resolve</button>\n<button on:click={() => (error = true)}>Reject</button>\n"
  }
]