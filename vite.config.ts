/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.{idea,git,cache,output,temp}/**',
            './src/config/**',
            './UiTest/**/*.{ts,js}'
        ],
        watch: false,
        environment: 'jsdom',
        coverage: {
            include: ['src/**/*.{ts,js}'],
            all: true,
            enabled: true,
            provider: 'v8',
            reporter: ['text', 'json', 'html']
        } as any
    }
});
