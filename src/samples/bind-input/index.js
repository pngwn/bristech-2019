// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\tlet text_value = \"Hello\";\n\tlet number_value = 10;\n\tlet date_value = \"2019-10-05\";\n</script>\n\n<div>\n\n\t<input bind:value={text_value} />\n\t<p>\n\t\t<code>{text_value}</code>\n\t</p>\n\n\t<input type=\"number\" bind:value={number_value} />\n\t<p>\n\t\t<code>{number_value}</code>\n\t</p>\n\n\t<input type=\"date\" bind:value={date_value} />\n\t<p>\n\t\t<code>{date_value}</code>\n\t</p>\n\n</div>\n\n<style>\n\tdiv {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 180px 1fr;\n\t\tgrid-template-rows: repeat(3, 40px);\n\t\tgrid-gap: 10px;\n\t}\n\n\tinput {\n\t\tmargin: 0;\n\t}\n\n\tp {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\n\tcode {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 100%;\n\t\tpadding: 0 10px;\n\t\tborder-radius: 3px;\n\t\tbackground: #333;\n\t\tcolor: #eee;\n\t\tfont-size: 1.5em;\n\t\tfont-weight: bold;\n\t\tbox-sizing: border-box;\n\t}\n</style>\n"
  }
]