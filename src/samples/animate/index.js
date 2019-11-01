// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport {\n\t\tmake_list,\n\t\tadd_random,\n\t\tremove_random,\n\t\tshuffle_list,\n\t} from \"./list.js\";\n\n\tlet list = make_list();\n\tlet id = list[0] + 1;\n\n\tconst add = () => (list = add_random(list, id++));\n\tconst remove = () => (list = remove_random(list));\n\tconst reverse = () => (list = list.reverse());\n\tconst shuffle = () => (list = shuffle_list(list));\n\tconst rotate = () => (list = list.slice(1).concat(list[0]));\n</script>\n\n<div class=\"controls\">\n\t<button on:click={add}>Add</button>\n\t<button on:click={remove}>Remove</button>\n\t<button on:click={rotate}>Rotate</button>\n\t<button on:click={reverse}>Reverse</button>\n\t<button on:click={shuffle}>Shuffle</button>\n</div>\n\n<div class=\"container\">\n\t{#each list as key (key)}\n\t\t<div class=\"item\">{key}</div>\n\t{/each}\n</div>\n\n<style>\n\t.controls {\n\t\theight: 75px;\n\t\tdisplay: grid;\n\t\tgrid-gap: 5px;\n\t\tgrid-template-columns: repeat(5, 1fr);\n\t}\n\t.container {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(5, 1fr);\n\t\tgrid-template-rows: repeat(5, 1fr);\n\t\tgrid-gap: 5px;\n\t\twidth: 100%;\n\t\theight: calc(100% - 75px);\n\t}\n\n\t.item {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tborder-radius: 4px;\n\t\tbackground: cadetblue;\n\t\tfont-size: 30px;\n\t\tfont-weight: bold;\n\t\tcolor: #fff;\n\t}\n</style>\n"
  },
  {
    "type": "js",
    "name": "list",
    "source": "export const make_list = () =>\n\tArray(20)\n\t\t.fill(0)\n\t\t.map((_, i) => i + 1);\n\nexport const add_random = (list, item) => {\n\tconst _list = [...list];\n\tconst _index = ~~(Math.random() * list.length);\n\t_list.splice(_index, 0, item);\n\treturn _list;\n};\n\nexport const remove_random = list => {\n\tconst _index = ~~(Math.random() * list.length);\n\treturn list.filter((v, i) => i !== _index);\n};\n\nexport const shuffle_list = list => {\n\tlet r;\n\tlet t;\n\tlet l = list.length;\n\tlet n = list.slice();\n\n\twhile (l) {\n\t\tr = ~~(Math.random() * l--);\n\t\tt = n[l];\n\t\tn[l] = n[r];\n\t\tn[r] = t;\n\t}\n\n\treturn n;\n};\n"
  }
]