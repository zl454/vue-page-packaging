import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path'

export default ({ mode, command }) => {
    const prodMock = false;
    const VITE_PORT = 8848
    const VITE_PROXY_URL = 'https://222.222.222.222'
    return defineConfig({
        server: {
            open: true,
            port: VITE_PORT
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
            }),
            viteMockServe({
                mockPath: './src/mock', // 设置模拟.ts 文件的存储文件夹
                localEnabled: command === 'serve', // 设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
                prodEnabled: command !== 'serve' && prodMock, // 设置打包是否启用 mock 功能
                supportTs: true, // 打开后，可以读取 ts ⽂件模块。请注意，打开后将⽆法监视.js ⽂件。
                logger: true, //是否在控制台显示请求日志
                watchFiles: true, // 监视⽂件更改，并重新加载 mock 数据
                /* 如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.{ts,js}
                这样做的好处是,可以动态控制生产环境是否开启 mock 且在没有开启的时候 mock.js 不会被打包。
                如果代码直接写在main.ts内，则不管有没有开启,最终的打包都会包含mock.js
                */
                injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `
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
}
