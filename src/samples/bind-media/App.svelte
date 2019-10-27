<script>
	import {
		PlayIcon,
		PauseIcon,
		SkipBackIcon,
		SkipForwardIcon,
		VolumeIcon,
		PlusIcon,
	} from "svelte-feather-icons";
	import Progess from "./Progress.svelte";
	import VolumeBar from "./VolumeBar.svelte";
	import { clips, get_current_clip, calculate_seconds } from "./clips.js";

	let current_time = 0;
	let duration;
	let paused;
	let playback_rate = 1;
	let volume = 0.5;

	let volume_showing = false;

	$: current_clip = get_current_clip(clips, current_time);

	const set_clip = index => {
		if (!clips[index]) return;
		current_time = calculate_seconds(clips[index].start);
	};
</script>

<h1>{clips[current_clip].name}</h1>

<video
	src="/images/commercials.mp4"
	bind:currentTime={current_time}
	bind:playbackRate={playback_rate}
	bind:paused
	bind:volume
	bind:duration />

<div class="controls">
	{#if paused || paused === undefined}
		<span on:click={() => (paused = false)}>
			<PlayIcon />
		</span>
	{:else}
		<span on:click={() => (paused = true)}>
			<PauseIcon />
		</span>
	{/if}

	<span
		class:inactive={!clips[current_clip - 1]}
		on:click={() => set_clip(current_clip - 1)}>
		<SkipBackIcon />
	</span>

	<span
		class:inactive={!clips[current_clip + 1]}
		class="skip"
		on:click={() => set_clip(current_clip + 1)}>
		<SkipForwardIcon />
	</span>

	<Progess bind:current_time {duration} />

	<span
		class:volume-bar={volume_showing}
		class="volume"
		on:click={() => (volume_showing = !volume_showing)}>
		<VolumeIcon />

		{#if volume_showing}
			<VolumeBar bind:volume />
		{/if}
	</span>

	<span class="playbackrate" on:click={() => (playback_rate += 0.1)}>
		<PlusIcon />
	</span>

</div>

<style>
	:global(body) {
		background: #333;
	}

	h1 {
		margin-top: 100px;
		color: #eee;
		text-align: center;
		text-transform: uppercase;
	}

	video,
	.controls {
		margin: auto;
		width: 600px;
		border-radius: 3px;
	}

	video {
		display: block;
		outline: none;
	}

	.controls {
		background: #000;
		height: 20px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		padding: 5px 0;
	}

	span {
		height: 20px;
		width: 20px;
		margin: 10px;
		cursor: pointer;
	}

	.skip {
		margin-left: 0;
		margin-right: 20px;
	}

	.playbackrate {
		margin-left: 0;
	}

	.volume {
		margin-left: 20px;
		position: relative;
		z-index: 2;
	}

	.volume-bar {
		color: #000;
	}

	.inactive {
		opacity: 0.5;
	}
</style>
