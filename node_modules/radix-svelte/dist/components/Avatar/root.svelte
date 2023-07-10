<script context="module">import { reactiveContext } from "../../internal/helpers";
import { useActions } from "../../internal/helpers/useActions";
const { getContext, setContext } = reactiveContext({
    imageLoadingStatus: "idle"
});
export const getAvatarRootContext = getContext;
</script>

<script>"use strict";
setContext();
</script>

<span {...$$restProps} use:useActions={$$restProps.use}>
	<slot />
</span>
