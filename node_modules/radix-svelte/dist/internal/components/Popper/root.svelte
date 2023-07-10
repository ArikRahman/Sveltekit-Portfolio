<script context="module">import { reactiveContext } from "../../helpers";
const { getContext, setContext } = reactiveContext({
    anchor: null,
    arrow: null
});
export const getRootContext = getContext;
</script>

<script>"use strict";
setContext();
</script>

<slot />
