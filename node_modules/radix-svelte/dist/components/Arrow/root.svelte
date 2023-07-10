<script context="module">"use strict";
</script>

<script>export let width = 10;
export let height = 5;
</script>

<svg {...$$restProps} {width} {height} viewBox="0 0 30 10" preserveAspectRatio="none">
	{#if $$slots.default}
		<slot />
	{:else}
		<polygon points="0,0 30,0 15,10" />
	{/if}
	<slot />
</svg>
