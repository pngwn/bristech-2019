<script>
	export let name = "Franklin";
	export let salutation;
	export let age;

	let middle_bit = "-";

	$: full_name = `${salutation} ${name}`;
	$: full_age = `${middle_bit} ${age}`;

	setTimeout(() => (middle_bit = ":"), 5000);
</script>

<h1>{full_name}</h1>

<p>Age {full_age}</p>
