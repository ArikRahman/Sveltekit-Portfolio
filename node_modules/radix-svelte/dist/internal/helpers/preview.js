/* --------------- */
/* Preview Getters */
/* --------------- */
function getPreviewPropsOfComponent(previewProps) {
    return Object.entries(previewProps.props || {}).reduce((acc, [propName, propConfig]) => {
        const defaultValue = propConfig?.default;
        return { ...acc, [propName]: defaultValue };
    }, {});
}
export function getPropsObj(previewMeta) {
    return Object.entries(previewMeta).reduce((acc, [cmp, previewProps]) => ({
        ...acc,
        [cmp]: getPreviewPropsOfComponent(previewProps),
    }), {});
}
