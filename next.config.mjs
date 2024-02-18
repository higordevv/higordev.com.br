/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: true,
    poweredByHeader: true,
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    devIndicators: {
        buildActivityPosition: "top-right",
    },
    
};

export default nextConfig;
