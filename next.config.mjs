/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'aceternity.com',
            'images.zdn.dev',
            'images.unsplash.com',
            'encrypted-tbn0.gstatic.com',
            'smulandu2-jbg.sch.id',
            'www.biayatarif.com',
        ],
    },
};

export default nextConfig;
