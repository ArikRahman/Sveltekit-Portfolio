<script context="module">import { collectionContext } from "../../internal/helpers";
import { Dialog } from "../Dialog";
const cancelCollectionCtx = collectionContext();
export const getCancelCollection = cancelCollectionCtx.getContext;
</script>

<script>const cancelCollection = cancelCollectionCtx.setContext();
export let openAutoFocus = void 0;
$: resolvedOpenAutoFocus = openAutoFocus === void 0 ? $cancelCollection[0] : true;
</script>

<Dialog.Content
	role="alertdialog"
	on:pointerDownOutside={(e) => {
		e.detail.preventDefault();
	}}
	openAutoFocus={resolvedOpenAutoFocus}
	{...$$restProps}
>
	<slot />
</Dialog.Content>
