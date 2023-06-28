// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Platform {
			env?: {
				YOUR_KV_NAMESPACE: KVNamespace;
				YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
			};

			context: {
				waitUntil(promise: Promise<any>): void;
			};

			caches: CacheStorage & { default: Cache }
			}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
