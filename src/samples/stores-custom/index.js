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
    "source": "<script>\n\timport { count } from \"./stores.js\";\n</script>\n\n<button on:click={count.dec}>-</button>\n<button on:click={count.inc}>+</button>\n<strong>Count: {$count}</strong>\n\n<br />\n\n<style>\n\tstrong {\n\t\tmargin-left: 10px;\n\t\tfont-size: 20px;\n\t\ttext-transform: uppercase;\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "Multiplier",
    "source": "<script>\n\timport { multiplier } from \"./stores.js\";\n</script>\n\n<button on:click={multiplier.dec}>-</button>\n<button on:click={multiplier.inc}>+</button>\n<strong>Multiplier: {$multiplier}</strong>\n\n<style>\n\tstrong {\n\t\tmargin-left: 10px;\n\t\tfont-size: 20px;\n\t\ttext-transform: uppercase;\n\t}\n</style>\n"
  },
  {
    "type": "js",
    "name": "stores",
    "source": "import { writable, derived } from \"svelte/store\";\n\nconst _count = writable(1);\n\nexport const count = {\n\tsubscribe: _count.subscribe,\n\tset: _count.set,\n\tinc: () => _count.update(v => v + 1),\n\tdec: () => _count.update(v => v - 1),\n};\n\nconst _multiplier = writable(2);\n\nexport const multiplier = {\n\tsubscribe: _multiplier.subscribe,\n\tset: _multiplier.set,\n\tinc: () => _multiplier.update(v => v + 1),\n\tdec: () => _multiplier.update(v => v - 1),\n};\n\nexport const total = derived(\n\t[count, multiplier],\n\t([$count, $multiplier]) => $count * $multiplier,\n);\n"
  }
]