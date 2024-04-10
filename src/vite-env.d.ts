/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ANIMAL_RACE_ENDPOINT: string
    readonly VITE_POINTS_ENDPOINT: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}