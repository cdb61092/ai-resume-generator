/** @type {import('@remix-run/dev').AppConfig} */
export default {
    ignoredRouteFiles: ['**/.*'],
    appDirectory: 'app',
    assetsBuildDirectory: 'public/build',
    publicPath: '/build/',
    serverBuildPath: 'build/index.js',
    browserNodeBuiltinsPolyfill: {
        modules: {
            events: true,
            fs: true,
            buffer: true,
            stream: true,
            zlib: true,
            url: true,
            path: true,
        },
    },
    serverDependenciesToBundle: ['all'],
}
