import react from '@vitejs/plugin-react';
import { defineConfig, InlineConfig, UserConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [viteTsconfigPaths(), react(), svgr(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/app/setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/app/setupTests.ts'],
    },
  },
} as VitestConfigExport);
