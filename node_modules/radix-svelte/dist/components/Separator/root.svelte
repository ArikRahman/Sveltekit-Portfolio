<script context="module">import { useActions } from "../../internal/helpers";
</script>

<script>export let orientation = "horizontal";
export let decorative = false;
export let use = [];
</script>

<div
	data-orientation={orientation}
	role={decorative ? 'none' : 'separator'}
	{...$$restProps}
	use:useActions={use ?? []}
/>
