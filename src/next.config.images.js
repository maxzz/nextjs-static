// export const repo = 'dist';    // <- change-me-to-your-repo
// export const assetPrefix = `/${repo}/`;
// export const basePath = `/${repo}`;

const repo = 'dist';    // <- change-me-to-your-repo

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    assetPrefix: isDev ? '' : `/${repo}/`,
    basePath: isDev ? '' : `/${repo}`,
};