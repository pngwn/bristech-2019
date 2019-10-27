export const clips = [
	{
		name: "SPEEDWAY 79 POWER FUEL",
		start: "0:00",
		end: "1:04",
	},
	{
		name: "ESSO EXTRA GASOLINE",
		start: "1:04",
		end: "1:59",
	},
	{
		name: "BANK OF AMERICA timeplan",
		start: "1:59",
		end: "2:23",
	},
	{
		name: "LUCKY STRIKE cigarettes",
		start: "2:23",
		end: "3:23",
	},
	{
		name: "MURIEL cigars",
		start: "3:23",
		end: "4:24",
	},
	{
		name: "KOOL menthol cigarettes",
		start: "4:24",
		end: "5:26",
	},
	{
		name: "MARLOBORO cigarettes",
		start: "5:26",
		end: "6:32",
	},
	{
		name: "ROBERT BURNS cigars",
		start: "6:32",
		end: "7:32",
	},
	{
		name: "WINSTON cigarettes",
		start: "7:32",
		end: "8:08",
	},
	{
		name: "AJAX Cleaning Products",
		start: "8:08",
		end: "9:18",
	},
];

export const calculate_seconds = time =>
	time
		.split(":")
		.map((t, i) => (i === 0 ? +t * 60 : +t))
		.reduce((a, n) => a + n, 0);

export const get_current_clip = (clips, current) => {
	const index = clips.findIndex(
		({ start, end }) =>
			current >= calculate_seconds(start) && current < calculate_seconds(end),
	);

	return index === -1 ? 0 : index;
};
