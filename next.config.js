/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    distDir: 'dist'
    // assetPrefix: '/personal-website',

}

module.exports = nextConfig
