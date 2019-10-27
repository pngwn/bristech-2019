// generated file -- no touchy
export default [
  {
    "type": "svelte",
    "name": "App",
    "source": "<script>\n\timport {\n\t\tPlayIcon,\n\t\tPauseIcon,\n\t\tSkipBackIcon,\n\t\tSkipForwardIcon,\n\t\tVolumeIcon,\n\t\tPlusIcon,\n\t} from \"svelte-feather-icons\";\n\timport Progess from \"./Progress.svelte\";\n\timport VolumeBar from \"./VolumeBar.svelte\";\n\timport { clips, get_current_clip, calculate_seconds } from \"./clips.js\";\n\n\tlet current_time = 0;\n\tlet duration;\n\tlet paused;\n\tlet playback_rate = 1;\n\tlet volume = 0.5;\n\n\tlet volume_showing = false;\n\n\t$: current_clip = get_current_clip(clips, current_time);\n\n\tconst set_clip = index => {\n\t\tif (!clips[index]) return;\n\t\tcurrent_time = calculate_seconds(clips[index].start);\n\t};\n</script>\n\n<h1>{clips[current_clip].name}</h1>\n\n<video\n\tsrc=\"/images/commercials.mp4\"\n\tbind:currentTime={current_time}\n\tbind:playbackRate={playback_rate}\n\tbind:paused\n\tbind:volume\n\tbind:duration />\n\n<div class=\"controls\">\n\t{#if paused || paused === undefined}\n\t\t<span on:click={() => (paused = false)}>\n\t\t\t<PlayIcon />\n\t\t</span>\n\t{:else}\n\t\t<span on:click={() => (paused = true)}>\n\t\t\t<PauseIcon />\n\t\t</span>\n\t{/if}\n\n\t<span\n\t\tclass:inactive={!clips[current_clip - 1]}\n\t\ton:click={() => set_clip(current_clip - 1)}>\n\t\t<SkipBackIcon />\n\t</span>\n\n\t<span\n\t\tclass:inactive={!clips[current_clip + 1]}\n\t\tclass=\"skip\"\n\t\ton:click={() => set_clip(current_clip + 1)}>\n\t\t<SkipForwardIcon />\n\t</span>\n\n\t<Progess bind:current_time {duration} />\n\n\t<span\n\t\tclass:volume-bar={volume_showing}\n\t\tclass=\"volume\"\n\t\ton:click={() => (volume_showing = !volume_showing)}>\n\t\t<VolumeIcon />\n\n\t\t{#if volume_showing}\n\t\t\t<VolumeBar bind:volume />\n\t\t{/if}\n\t</span>\n\n\t<span class=\"playbackrate\" on:click={() => (playback_rate += 0.1)}>\n\t\t<PlusIcon />\n\t</span>\n\n</div>\n\n<style>\n\t:global(body) {\n\t\tbackground: #333;\n\t}\n\n\th1 {\n\t\tmargin-top: 100px;\n\t\tcolor: #eee;\n\t\ttext-align: center;\n\t\ttext-transform: uppercase;\n\t}\n\n\tvideo,\n\t.controls {\n\t\tmargin: auto;\n\t\twidth: 600px;\n\t\tborder-radius: 3px;\n\t}\n\n\tvideo {\n\t\tdisplay: block;\n\t\toutline: none;\n\t}\n\n\t.controls {\n\t\tbackground: #000;\n\t\theight: 20px;\n\t\tmargin-top: 10px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tcolor: #fff;\n\t\tpadding: 5px 0;\n\t}\n\n\tspan {\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tmargin: 10px;\n\t\tcursor: pointer;\n\t}\n\n\t.skip {\n\t\tmargin-left: 0;\n\t\tmargin-right: 20px;\n\t}\n\n\t.playbackrate {\n\t\tmargin-left: 0;\n\t}\n\n\t.volume {\n\t\tmargin-left: 20px;\n\t\tposition: relative;\n\t\tz-index: 2;\n\t}\n\n\t.volume-bar {\n\t\tcolor: #000;\n\t}\n\n\t.inactive {\n\t\topacity: 0.5;\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "Progress",
    "source": "<script>\n\texport let current_time;\n\texport let duration;\n\n\tlet width;\n\n\t$: progress = current_time / duration;\n\n\tconst handle_click = e => {\n\t\tconst { x } = e.target.getBoundingClientRect();\n\t\tcurrent_time = ((e.clientX - x) / width) * duration;\n\t};\n</script>\n\n<div on:click={handle_click} class=\"container\" bind:offsetWidth={width}>\n\t<div style=\"width:{progress * width}px\" class=\"line\" />\n\t<span style=\"transform:translateX({progress * width}px)\" class=\"bobbler\" />\n</div>\n\n<style>\n\t.container {\n\t\twidth: 100%;\n\t\theight: 6px;\n\t\tborder-radius: 2.5px;\n\t\tbackground: #666;\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t}\n\n\t.line {\n\t\tborder-radius: 3px;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\theight: 100%;\n\t\twidth: 0;\n\t\tbackground: #ccc;\n\t}\n\n\t.bobbler {\n\t\tposition: absolute;\n\t\ttop: -2px;\n\t\tleft: -2px;\n\t\twidth: 10px;\n\t\theight: 10px;\n\t\tbackground: #fff;\n\t\tborder-radius: 50%;\n\t\tbox-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);\n\t}\n</style>\n"
  },
  {
    "type": "svelte",
    "name": "VolumeBar",
    "source": "<script>\n\texport let volume;\n\n\tconst handle_click = e => {\n\t\tconst { bottom } = e.target.getBoundingClientRect();\n\t\tconst new_volume = (bottom - e.clientY) / 100;\n\t\tvolume = new_volume > 1 ? 0 : new_volume;\n\t};\n</script>\n\n<div class=\"container\" on:click|stopPropagation={handle_click}>\n\t<div style=\"transform: scaleY({volume})\" class=\"current\" />\n</div>\n\n<style>\n\t.container {\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: -6px;\n\t\tborder-radius: 2px;\n\t\twidth: 20px;\n\t\theight: 100px;\n\t\tbackground: #ccc;\n\t\tz-index: -1;\n\t\toverflow: hidden;\n\t}\n\n\t.current {\n\t\ttransform-origin: 100% 100%;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbottom: 0;\n\t\tposition: absolute;\n\t\tbackground: cyan;\n\t}\n</style>\n"
  },
  {
    "type": "js",
    "name": "clips",
    "source": "export const clips = [\n\t{\n\t\tname: \"SPEEDWAY 79 POWER FUEL\",\n\t\tstart: \"0:00\",\n\t\tend: \"1:04\",\n\t},\n\t{\n\t\tname: \"ESSO EXTRA GASOLINE\",\n\t\tstart: \"1:04\",\n\t\tend: \"1:59\",\n\t},\n\t{\n\t\tname: \"BANK OF AMERICA timeplan\",\n\t\tstart: \"1:59\",\n\t\tend: \"2:23\",\n\t},\n\t{\n\t\tname: \"LUCKY STRIKE cigarettes\",\n\t\tstart: \"2:23\",\n\t\tend: \"3:23\",\n\t},\n\t{\n\t\tname: \"MURIEL cigars\",\n\t\tstart: \"3:23\",\n\t\tend: \"4:24\",\n\t},\n\t{\n\t\tname: \"KOOL menthol cigarettes\",\n\t\tstart: \"4:24\",\n\t\tend: \"5:26\",\n\t},\n\t{\n\t\tname: \"MARLOBORO cigarettes\",\n\t\tstart: \"5:26\",\n\t\tend: \"6:32\",\n\t},\n\t{\n\t\tname: \"ROBERT BURNS cigars\",\n\t\tstart: \"6:32\",\n\t\tend: \"7:32\",\n\t},\n\t{\n\t\tname: \"WINSTON cigarettes\",\n\t\tstart: \"7:32\",\n\t\tend: \"8:08\",\n\t},\n\t{\n\t\tname: \"AJAX Cleaning Products\",\n\t\tstart: \"8:08\",\n\t\tend: \"9:18\",\n\t},\n];\n\nexport const calculate_seconds = time =>\n\ttime\n\t\t.split(\":\")\n\t\t.map((t, i) => (i === 0 ? +t * 60 : +t))\n\t\t.reduce((a, n) => a + n, 0);\n\nexport const get_current_clip = (clips, current) => {\n\tconst index = clips.findIndex(\n\t\t({ start, end }) =>\n\t\t\tcurrent >= calculate_seconds(start) && current < calculate_seconds(end),\n\t);\n\n\treturn index === -1 ? 0 : index;\n};\n"
  }
]