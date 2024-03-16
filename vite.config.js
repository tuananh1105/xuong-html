// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                shop: resolve(__dirname, './webs/shop.html'),
                view: resolve(__dirname, './webs/view.html'),
                cart: resolve(__dirname, './webs/cart.html'),
                check_out: resolve(__dirname, './webs/check_out.html'),
                lognin: resolve(__dirname, './webs/lognin.html'),
            },
        },
    },
})
