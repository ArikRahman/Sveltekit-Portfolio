export const createCallAndCleanup = () => ({
    subscribe(runner) {
        let cleanup = null;
        runner((cb) => {
            cleanup?.();
            cleanup = cb() ?? null;
        });
        return () => {
            cleanup?.();
            cleanup = null;
        };
    },
});
