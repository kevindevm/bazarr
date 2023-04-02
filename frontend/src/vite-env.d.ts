/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_CAN_UPDATE: string;
  readonly VITE_HAS_UPDATE: string;
  readonly VITE_QUERY_DEV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
