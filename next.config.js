/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  // assetPrefix: isProd ?  './' : '',
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   console.log({defaultPathMap, dev, dir, outDir, distDir, buildId});
  //   return {
  //     '/dongheng': { page: '/', query: { contentType: 'dongheng' } },
  //     '/interior': { page: '/', query: { contentType: 'interior' } },
  //   }
  // },
}
