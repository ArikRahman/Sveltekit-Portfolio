
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const CSF_MDTVTexturesDirectory: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_cache: string;
	export const ZELLIJ_SESSION_NAME: string;
	export const XDG_SESSION_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const CSF_DrawPluginDefaults: string;
	export const NODE: string;
	export const LC_ADDRESS: string;
	export const CSF_LANGUAGE: string;
	export const DOTNET_ROOT: string;
	export const LC_NAME: string;
	export const CSF_MIGRATION_TYPES: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const CSF_OCCTResourcePath: string;
	export const GTK_RC_FILES: string;
	export const NO_AT_BRIDGE: string;
	export const npm_config_globalconfig: string;
	export const XCURSOR_SIZE: string;
	export const CSF_STEPDefaults: string;
	export const EDITOR: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const QSYS_ROOTDIR: string;
	export const XDG_SESSION_TYPE: string;
	export const DRAWHOME: string;
	export const npm_config_init_module: string;
	export const SYSTEMD_EXEC_PID: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const CSF_StandardLiteDefaults: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const MOTD_SHOWN: string;
	export const VSCODE_INJECTION: string;
	export const GTK2_RC_FILES: string;
	export const HOME: string;
	export const LC_PAPER: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const LOCAL_GIT_DIRECTORY: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const INVOCATION_ID: string;
	export const MANAGERPID: string;
	export const INIT_CWD: string;
	export const CSF_ShadersDirectory: string;
	export const DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
	export const CSF_EXCEPTION_PROMPT: string;
	export const CHROME_DESKTOP: string;
	export const CSF_XmlOcafResource: string;
	export const KDE_SESSION_UID: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const CSF_SHMessage: string;
	export const npm_config_npm_version: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const LC_IDENTIFICATION: string;
	export const npm_package_name: string;
	export const VSCODE_NONCE: string;
	export const npm_config_prefix: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const CSF_StandardDefaults: string;
	export const KDE_SESSION_VERSION: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const CSF_IGESDefaults: string;
	export const DISPLAY: string;
	export const CSF_XCAFDefaults: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const LC_TELEPHONE: string;
	export const LC_MEASUREMENT: string;
	export const XDG_VTNR: string;
	export const CSF_PluginDefaults: string;
	export const UBUNTU_MENUPROXY: string;
	export const CSF_TObjMessage: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const CASROOT: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const HAXE_STD_PATH: string;
	export const npm_package_json: string;
	export const LC_TIME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const CSF_XSMessage: string;
	export const XCURSOR_THEME: string;
	export const MMGT_CLEAR: string;
	export const KDE_FULL_SESSION: string;
	export const GDK_BACKEND: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const npm_config_metrics_registry: string;
	export const CSF_TObjDefaults: string;
	export const npm_config_node_gyp: string;
	export const ZELLIJ: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_global_prefix: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const HG: string;
	export const MAIL: string;
	export const DRAWDEFAULT: string;
	export const npm_node_execpath: string;
	export const LC_NUMERIC: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		CSF_MDTVTexturesDirectory: string;
		XDG_CONFIG_DIRS: string;
		npm_config_cache: string;
		ZELLIJ_SESSION_NAME: string;
		XDG_SESSION_PATH: string;
		TERM_PROGRAM_VERSION: string;
		CSF_DrawPluginDefaults: string;
		NODE: string;
		LC_ADDRESS: string;
		CSF_LANGUAGE: string;
		DOTNET_ROOT: string;
		LC_NAME: string;
		CSF_MIGRATION_TYPES: string;
		COLOR: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		CSF_OCCTResourcePath: string;
		GTK_RC_FILES: string;
		NO_AT_BRIDGE: string;
		npm_config_globalconfig: string;
		XCURSOR_SIZE: string;
		CSF_STEPDefaults: string;
		EDITOR: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		QSYS_ROOTDIR: string;
		XDG_SESSION_TYPE: string;
		DRAWHOME: string;
		npm_config_init_module: string;
		SYSTEMD_EXEC_PID: string;
		_: string;
		XAUTHORITY: string;
		CSF_StandardLiteDefaults: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		MOTD_SHOWN: string;
		VSCODE_INJECTION: string;
		GTK2_RC_FILES: string;
		HOME: string;
		LC_PAPER: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		LOCAL_GIT_DIRECTORY: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		INVOCATION_ID: string;
		MANAGERPID: string;
		INIT_CWD: string;
		CSF_ShadersDirectory: string;
		DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
		CSF_EXCEPTION_PROMPT: string;
		CHROME_DESKTOP: string;
		CSF_XmlOcafResource: string;
		KDE_SESSION_UID: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		CSF_SHMessage: string;
		npm_config_npm_version: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		LC_IDENTIFICATION: string;
		npm_package_name: string;
		VSCODE_NONCE: string;
		npm_config_prefix: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		CSF_StandardDefaults: string;
		KDE_SESSION_VERSION: string;
		PAM_KWALLET5_LOGIN: string;
		CSF_IGESDefaults: string;
		DISPLAY: string;
		CSF_XCAFDefaults: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		LC_TELEPHONE: string;
		LC_MEASUREMENT: string;
		XDG_VTNR: string;
		CSF_PluginDefaults: string;
		UBUNTU_MENUPROXY: string;
		CSF_TObjMessage: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		CASROOT: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		HAXE_STD_PATH: string;
		npm_package_json: string;
		LC_TIME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		CSF_XSMessage: string;
		XCURSOR_THEME: string;
		MMGT_CLEAR: string;
		KDE_FULL_SESSION: string;
		GDK_BACKEND: string;
		npm_config_noproxy: string;
		PATH: string;
		npm_config_metrics_registry: string;
		CSF_TObjDefaults: string;
		npm_config_node_gyp: string;
		ZELLIJ: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_global_prefix: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		HG: string;
		MAIL: string;
		DRAWDEFAULT: string;
		npm_node_execpath: string;
		LC_NUMERIC: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
