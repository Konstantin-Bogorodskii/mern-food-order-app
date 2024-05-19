import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@app': path.resolve(__dirname, './src/app'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@widgets': path.resolve(__dirname, './src/widgets')
		}
	},
	server: {
		port: 3000
	}
});
