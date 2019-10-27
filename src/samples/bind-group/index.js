// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\tlet animals = [\n\t\t{ name: \"Dog\", icon: \"🐶\" },\n\t\t{ name: \"Cat\", icon: \"🐱\" },\n\t\t{ name: \"Cow\", icon: \"🐮\" },\n\t\t{ name: \"Fox\", icon: \"🦊\" },\n\t\t{ name: \"Octopus\", icon: \"🐙\" },\n\t\t{ name: \"Penguin\", icon: \"🐧\" },\n\t];\n\n\tlet selected_animals = [\"Penguin\"];\n</script>\n\n<h1>Favourite animals:</h1>\n\n{#each animals as { name, icon }}\n\t<div>\n\t\t<input\n\t\t\tid={name}\n\t\t\ttype=\"checkbox\"\n\t\t\tvalue={name}\n\t\t\tbind:group={selected_animals} />\n\n\t\t<label for={name}>\n\t\t\t<span class=\"icon\">{icon}</span>\n\t\t\t{name}\n\t\t</label>\n\t</div>\n{/each}\n\n<pre>{JSON.stringify(selected_animals, null, 2)}</pre>\n\n{#if !selected_animals.includes('Penguin')}\n\t<h1>You seem to have deselected Penguin</h1>\n\t<h2>Must have been a misclick</h2>\n{/if}\n\n<style>\n\tdiv {\n\t\theight: 50px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\th1,\n\th2 {\n\t\tmargin-left: 20px;\n\t}\n\n\tlabel {\n\t\tfont-size: 30px;\n\t}\n\n\t.icon {\n\t\tmargin-right: 10px;\n\t}\n\n\tinput {\n\t\tmargin: -5px 20px 0 20px;\n\t}\n\n\tpre {\n\t\tfont-size: 2em;\n\t}\n</style>\n"
  }
]