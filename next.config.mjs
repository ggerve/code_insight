const repoName = 'code_insight'; // CHANGE THIS if your repo name is different
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: basePath, // Set base path for GitHub Pages subdirectory
  assetPrefix: assetPrefix, // Set asset prefix for GitHub Pages subdirectory
  images: {
    unoptimized: true, // Disable Next.js Image Optimization (recommended for static export)
  },
};

export default nextConfig; 