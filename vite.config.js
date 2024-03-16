// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                shop: resolve(__dirname, '.webs/shop.html'),
                detail: resolve(__dirname, '.webs/view.html'),
                cart: resolve(__dirname, '.webs/cart.html'),
                checkout: resolve(__dirname, '.webs/check_out.html'),
                login: resolve(__dirname, '.webs/lognin.html'),
            },
        },
    },
})