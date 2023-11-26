/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
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
