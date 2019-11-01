// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport Scale from \"./Scale.svelte\";\n\timport Fly from \"./Fly.svelte\";\n\timport Blur from \"./Blur.svelte\";\n</script>\n\n<div>\n\t<Scale />\n\t<Blur />\n\t<Fly />\n</div>\n\n<style>\n\tdiv {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "Blur",
    "source": "<script>\n\timport { blur } from \"svelte/transition\";\n\n\tlet show = false;\n</script>\n\n<div class=\"outer\">\n\t<h1 on:click={() => (show = !show)}>Blur</h1>\n\n\t{#if show}\n\t\t<div transition:blur={{ amount: 100, duration: 1000 }} class=\"inner\" />\n\t{/if}\n\n</div>\n\n<style>\n\th1 {\n\t\tbackground: #555;\n\t\tborder-radius: 3px;\n\t\tcolor: #eee;\n\t\tpadding: 5px 10px;\n\t\tdisplay: inline-block;\n\t\tcursor: pointer;\n\t}\n\n\th1:hover {\n\t\tbackground: #333;\n\t}\n\n\t.inner {\n\t\theight: 100px;\n\t\twidth: 100px;\n\t\tborder-radius: 5px;\n\t\tbackground: cadetblue;\n\t}\n\n\t.outer {\n\t\tposition: relative;\n\t\theight: 180px;\n\t\tmargin-bottom: 40px;\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "Fly",
    "source": "<script>\n\timport { fly } from \"svelte/transition\";\n\n\tlet show = false;\n</script>\n\n<div class=\"outer\">\n\t<h1 on:click={() => (show = !show)}>Fly</h1>\n\n\t{#if show}\n\t\t<div in:fly={{ x: 100 }} out:fly={{ x: -100 }} class=\"inner\" />\n\t{/if}\n\n</div>\n\n<style>\n\th1 {\n\t\tbackground: #555;\n\t\tborder-radius: 3px;\n\t\tcolor: #eee;\n\t\tpadding: 5px 10px;\n\t\tdisplay: inline-block;\n\t\tcursor: pointer;\n\t}\n\n\th1:hover {\n\t\tbackground: #333;\n\t}\n\n\t.inner {\n\t\theight: 100px;\n\t\twidth: 100px;\n\t\tborder-radius: 5px;\n\t\tbackground: cadetblue;\n\t}\n\n\t.outer {\n\t\tposition: relative;\n\t\theight: 180px;\n\t\tmargin-bottom: 40px;\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "Scale",
    "source": "<script>\n\timport { scale } from \"svelte/transition\";\n\n\tlet show = false;\n</script>\n\n<div class=\"outer\">\n\t<h1 on:click={() => (show = !show)}>Scale</h1>\n\n\t{#if show}\n\t\t<div transition:scale class=\"inner\" />\n\t{/if}\n\n</div>\n\n<style>\n\th1 {\n\t\tbackground: #555;\n\t\tborder-radius: 3px;\n\t\tcolor: #eee;\n\t\tpadding: 5px 10px;\n\t\tdisplay: inline-block;\n\t\tcursor: pointer;\n\t}\n\n\th1:hover {\n\t\tbackground: #333;\n\t}\n\n\t.inner {\n\t\theight: 100px;\n\t\twidth: 100px;\n\t\tborder-radius: 5px;\n\t\tbackground: cadetblue;\n\t}\n\n\t.outer {\n\t\tposition: relative;\n\t\theight: 180px;\n\t\tmargin-bottom: 40px;\n\t}\n</style>\n"
  }
]