import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
// import viteCompression from 'vite-plugin-compression'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import vitePluginImp from 'vite-plugin-imp'
import { resolve } from 'path'
import qiankun from 'vite-plugin-qiankun'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') // 加载环境变量
  return {
    define: {
      'process.env': env
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: "@import '@/assets/styles/var.less';", // 配置全局定义的样式  不用再引用
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#4377FE' //设置antd主题色
          }
        }
      }
    },
    esbuild: {
      jsxInject: `import React from 'react'`
    },
    plugins: [
      react({
        babel: {
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      }),
      qiankun('react-app', { // 微应用名字，与主应用注册的微应用名字保持一致
        useDevMode: true
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: env['VITE_TITLE']
          }
        }
      }),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: name => `antd/es/${name}/style`
          }
        ]
      }),
      eslintPlugin({
        cache: false,
        // throwOnError: true,
        // throwOnWarning: true,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.d.ts'],
        exclude: ['node_modules', 'easy.ai', 'build']
      })
      // //开启gzip压缩  ng需要配合  体积不是很大不建议使用
      // viteCompression({
      //   verbose: true,
      //   disable: false,
      //   threshold: 10240,
      //   algorithm: 'gzip',
      //   ext: '.gz'
      // })
    ],
    build: {
      target: 'modules', //浏览器兼容性modules|esnext
      outDir: 'easy.ai', // 指定输出路径
      assetsDir: 'static', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器,terser构建后文件体积更小
      sourcemap: false, // 构建后是否生成soutrce map文件
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      chunkSizeWarningLimit: 1500, //警报门槛，限制大文件大小B为单位
      terserOptions: {
        compress: {
          drop_console: true, // 生产环境移除console
          drop_debugger: true, // 生产环境移除debugger
          pure_funcs: ['console.log']
        }
      },
      // 大文件切割 分包
      rollupOptions: {
        // treeshake: false,
        output: {
          //静态资源分类打包
          chunkFileNames: env['VITE_NAME'] + '/static/js/[name]-[hash].js',
          entryFileNames: env['VITE_NAME'] + '/static/js/[name]-[hash].js',
          assetFileNames: env['VITE_NAME'] + '/static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            //静态资源分拆打包
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    },
    // 添加 browserslist 配置
    browserslist: [
      'defaults',
      'Android >= 4.4' // 根据你的需求设置最低支持的安卓版本
    ],
    server: {
      host: '0.0.0.0',
      port: 3001,
      open: true,
      // 反向代理
      proxy: {
        '/api': {
          target: env['VITE_BASE_API'],
          changeOrigin: true
          // rewrite: path => path.replace(/^\/api/, 'api')
        }
      }
    }
  }
})
