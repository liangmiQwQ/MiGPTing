/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./language/i18n.ts')

const nextConfig = {
  experimental: {
    serverMinification: true,
    useDeploymentId: true,
    webpackBuildWorker: true,
  },
}

export default withNextIntl(nextConfig)
