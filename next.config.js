const isDev = process.env.NODE_ENV === 'development';

const repo = 'dist';    // <- change-me-to-your-repo
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    assetPrefix: isDev ? undefined : assetPrefix,
    basePath: isDev ? undefined : basePath,

    /**
       * Disable server-based image optimization. Next.js does not support
       * dynamic features with static exports.
       *
       * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
       */
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
