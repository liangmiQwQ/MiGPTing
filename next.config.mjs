/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverMinification: true,
    useDeploymentId: true,
    webpackBuildWorker: true,
  },
}

export default nextConfig
