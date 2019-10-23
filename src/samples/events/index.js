// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport Nested from \"./Nested.svelte\";\n\n\tlet data = \"\";\n\tlet data_from_component = {};\n\n\tconst handler = () => (data = \"boo!\");\n</script>\n\n<button on:click={handler}>Clicky</button>\n<Nested on:hello={e => (data_from_component = e.detail)} />\n\n<pre>{JSON.stringify(data_from_component, null, 2)}</pre>\n"
  },
  {
    "type": "svelte",
    "name": "Nested",
    "source": "<script>\n\timport { createEventDispatcher } from \"svelte\";\n\n\tconst dispatch = createEventDispatcher();\n</script>\n\n<button on:click={() => dispatch('hello', { data: 'I am the payload' })}>\n\tFrom a component\n</button>\n"
  }
]