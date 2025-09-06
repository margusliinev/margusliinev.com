import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    server: { port: 3000 },
    build: { outDir: 'build' },
    plugins: [
        viteTsConfigPaths({
            projects: ['./tsconfig.json'],
        }),
        tanstackStart(),
        viteReact(),
        tailwindcss(),
    ],
});
