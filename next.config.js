/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname:"vpxfyftnadjflbjxurvt.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig
