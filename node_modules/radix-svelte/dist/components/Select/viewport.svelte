<script context="module">import { useActions } from "../../internal/helpers";
</script>

<script>export let use = [];
</script>

<div {...$$restProps} use:useActions={use ?? []}>
	<slot />
</div>
