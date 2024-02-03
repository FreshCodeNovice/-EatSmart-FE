/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverActions: true,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src/');
        config.resolve.alias['@/lib'] = path.join(__dirname, 'src/lib');

        return config;
    },
};

module.exports = nextConfig;
