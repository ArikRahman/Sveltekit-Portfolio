<script context="module">import { useActions } from "../../internal/helpers";
</script>

<script>export let use = [];
</script>

<span aria-hidden {...$$restProps} use:useActions={use ?? []}>
	<slot>▼</slot>
</span>
