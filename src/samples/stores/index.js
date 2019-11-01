// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport { count, multiplier, total } from \"./stores.js\";\n\timport Counter from \"./Counter.svelte\";\n\timport Multiplier from \"./Multiplier.svelte\";\n</script>\n\n<Counter />\n<Multiplier />\n\n<h1>{$count} x {$multiplier} = {$total}</h1>\n"
  },
  {
    "type": "svelte",
    "name": "Counter",
    "source": "<script>\n\timport { count } from \"./stores.js\";\n</script>\n\n<button on:click={() => ($count -= 1)}>-</button>\n<button on:click={() => ($count += 1)}>+</button>\n<strong>Count: {$count}</strong>\n\n<br />\n\n<style>\n\tstrong {\n\t\tmargin-left: 10px;\n\t\tfont-size: 20px;\n\t\ttext-transform: uppercase;\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "Multiplier",
    "source": "<script>\n\timport { multiplier } from \"./stores.js\";\n</script>\n\n<button on:click={() => ($multiplier -= 1)}>-</button>\n<button on:click={() => ($multiplier += 1)}>+</button>\n<strong>Multiplier: {$multiplier}</strong>\n\n<style>\n\tstrong {\n\t\tmargin-left: 10px;\n\t\tfont-size: 20px;\n\t\ttext-transform: uppercase;\n\t}\n</style>\n"
  },
  {
    "type": "js",
    "name": "stores",
    "source": "import { writable, derived } from \"svelte/store\";\n\nexport const count = writable(1);\nexport const multiplier = writable(2);\n\nexport const total = derived(\n\t[count, multiplier],\n\t([$count, $multiplier]) => $count * $multiplier,\n);\n"
  }
]