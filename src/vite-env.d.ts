/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ANIMAL_RACE_ENDPOINT: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}