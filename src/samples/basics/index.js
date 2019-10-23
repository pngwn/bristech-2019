// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport Nested from \"./Nested.svelte\";\n</script>\n\n<Nested salutation=\"Doctor\" age={10 * 33} />\n"
  },
  {
    "type": "svelte",
    "name": "Nested",
    "source": "<script>\n\texport let name = \"Franklin\";\n\texport let salutation;\n\texport let age;\n\n\tlet middle_bit = \"-\";\n\n\t$: full_name = `${salutation} ${name}`;\n\t$: full_age = `${middle_bit} ${age}`;\n\n\tsetTimeout(() => (middle_bit = \":\"), 5000);\n</script>\n\n<h1>{full_name}</h1>\n\n<p>Age {full_age}</p>\n"
  }
]