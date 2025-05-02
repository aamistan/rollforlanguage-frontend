/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    readonly VITE_APP_NAME: string
    readonly VITE_APP_ENV: string
    readonly VITE_DEFAULT_LOCALE: string
    readonly VITE_SUPPORTED_LOCALES: string
    readonly VITE_AUTH_STRATEGY: string
    readonly VITE_POSTHOG_API_KEY: string
    readonly VITE_SENTRY_DSN: string
    readonly VITE_FEATURE_REALTIME: string
    readonly VITE_FEATURE_AUDIO: string
    readonly VITE_FEATURE_SOCIAL_LOGIN: string
    // add more as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  