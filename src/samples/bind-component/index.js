// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport Keypad from \"./Keypad.svelte\";\n\n\tlet pin;\n\t$: view = pin ? pin : \"enter your pin\";\n\n\tfunction handleSubmit() {\n\t\talert(`submitted ${pin}`);\n\t}\n</script>\n\n<div>\n\t<h1 style=\"color: {pin ? '#333' : '#ccc'}\">{view}</h1>\n\t<Keypad bind:value={pin} on:submit={handleSubmit} />\n</div>\n\n<style>\n\tdiv {\n\t\twidth: 22em;\n\t\tmargin: auto;\n\t\tmargin-top: 4em;\n\t}\n\n\th1 {\n\t\tfont-size: 30px;\n\t\ttext-align: center;\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "Keypad",
    "source": "<script>\n\timport { createEventDispatcher } from \"svelte\";\n\n\texport let value = \"\";\n\n\tconst dispatch = createEventDispatcher();\n\tconst keys = [\"🐧\", \"🐱\", \"🐙\", \"🐮\", \"🐼\", \"🐸\", \"🐯\", \"🐷\", \"🦁\"];\n\n\tconst select = num => () => (value += num);\n\tconst clear = () => (value = \"\");\n\tconst submit = () => dispatch(\"submit\");\n</script>\n\n<div class=\"keypad\">\n\t{#each keys as key}\n\t\t<button on:click={select(key)}>{key}</button>\n\t{/each}\n\n\t<button class=\"text\" disabled={!value} on:click={clear}>clear</button>\n\t<button on:click={select('🐨')}>🐨</button>\n\t<button class=\"text\" disabled={!value} on:click={submit}>submit</button>\n</div>\n\n<style>\n\t.keypad {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 6fr);\n\t\tgrid-template-rows: repeat(4, 6fr);\n\t\tgrid-gap: 0.5em;\n\t}\n\n\tbutton {\n\t\tmargin: 0;\n\t\tfont-size: 50px;\n\t}\n\n\t.text {\n\t\tfont-size: 20px;\n\t}\n</style>\n"
  }
]