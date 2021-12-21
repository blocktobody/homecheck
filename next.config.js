/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    console.log({defaultPathMap, dev, dir, outDir, distDir, buildId});
    return {
      '/dongheng': { page: '/', query: { contentType: 'DONGHENG' } },
      '/interior': { page: '/', query: { contentType: 'INTERIOR' } },
    }
  },
}
