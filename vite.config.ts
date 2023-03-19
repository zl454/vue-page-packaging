import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default defineConfig({
    server: {
        open: true,
        port:8848
    },
    plugins: [
        vue(),
        AutoImport({
            dts: 'src/auto-imports.d.ts',
            imports: ['vue']
        }),
        Components({
            dts: 'src/components/components.d.ts',
            // 配置需要将哪些后缀类型的文件进行自动按需引入
            extensions: ['vue', 'md'],
            // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
            resolvers: [AntDesignVueResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@ant-design/icons-vue$': resolve('./src/assets/antd/icons.ts')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/mixin.scss";'
            }
        }
    }
})
