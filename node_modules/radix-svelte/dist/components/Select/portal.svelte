<script context="module">import Portal, {} from "../../internal/components/Portal/Portal.svelte";
</script>

<script>export let target = "body";
</script>

<Portal {target} {...$$restProps}>
	<slot />
</Portal>
