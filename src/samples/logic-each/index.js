// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\tlet is_penguin;\n</script>\n\n<h1>Are you a penguin?</h1>\n<button on:click={() => (is_penguin = true)}>Yes</button>\n<button on:click={() => (is_penguin = false)}>No</button>\n\n{#if is_penguin === undefined}\n\t<h2>It isn't a difficult question. Click something.</h2>\n{:else if is_penguin}\n\t<h2>Welcome Friend!</h2>\n{:else}\n\t<h2>Shame.</h2>\n{/if}\n\n<style>\n\t:global(body) {\n\t\ttext-align: center;\n\t}\n</style>\n"
  }
]