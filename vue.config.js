const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {

    // 把开发服务器假设在根路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

    // 生成文件的目录名称
    outputDir: "dist",

    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "static",

    // 默认情况下，生成的静
    // 态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
    filenameHashing: true,

    // 不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建,map就是为了方便打印错误位置。
    productionSourceMap: true,

    css: {
        //extract: true, //设为true的话热更新会出问题
        sourceMap: false,

        requireModuleExtension: false,

        loaderOptions: {
            css: {

                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
            },
            sass: {
                data: `@import "@/styles/variables.scss";`
            }
        }
    },

    runtimeCompiler: false,

    // 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
    // 设置为 error 时，这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
    lintOnSave: 'error',

    devServer: {
        port: 3000,

        // 通过设置让浏览器 overlay 同时显示警告和错误 在 devServe 配置项中  ==>
        overlay: {
            warnings: true,
            errors: true
        }
    },

    configureWebpack: {
        name: '基于Vue的前端ui库',
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.json'],
            alias: {
                '@': resolve('src')
            }
        }
    },

    chainWebpack: config => {

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets'))
            .end();

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-f-[name]'
            })
            .end();

        // set preserveWhitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end();

        config

            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            );

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end();
                    config
                        .optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            },
                            commons: {
                                name: 'chunk-commons',
                                test: resolve('src/components'), // can customize your rules
                                minChunks: 3, //  minimum common number
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    });
                    config.optimization.runtimeChunk('single')
                }
            );

        //在单独的进程中，运行打字类型检查器的webpack插件
        config.plugin('fork-ts-checker').tap(([options]) => {
            return [{
                //以下几项都是推荐配置，async false使其可以在页面上显示
                async: false,
                tslint: true,
                vue: true
            }]
        })
    }
};

