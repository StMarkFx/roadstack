const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["your-image-domain.com"],
    },
    experimental: {
      appDir: true,
    },
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  };
  
  module.exports = nextConfig;
  