<script context="module">import { useCollection } from "../../internal/helpers";
import { Dialog } from "../Dialog";
import { getCancelCollection } from "./content.svelte";
</script>

<script>"use strict";
const cancelCollection = getCancelCollection();
</script>

<Dialog.Close
	{...$$restProps}
	use={[
		...($$restProps.use ?? []),
		[
			useCollection,
			{
				collection: cancelCollection,
			},
		],
	]}
>
	<slot />
</Dialog.Close>
