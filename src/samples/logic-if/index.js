// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\tlet penguins = [\n\t\t{\n\t\t\ttype: \"Baby\",\n\t\t\timage: \"./images/baby_penguin.gif\",\n\t\t\tdescription: \"A baby penguin, running around\",\n\t\t},\n\t\t{\n\t\t\ttype: \"Not baby\",\n\t\t\timage: \"./images/not_baby_penguin.gif\",\n\t\t\tdescription: \"An adult penguin, falling over\",\n\t\t},\n\t];\n</script>\n\n<style>\n\t:global(body) {\n\t\ttext-align: center;\n\t}\n</style>\n\n<h1>Types of Penguin?</h1>\n\n{#each penguins as { type, image }}\n\t<h2>{type}</h2>\n\t<img src={image} />\n{/each}\n"
  }
]