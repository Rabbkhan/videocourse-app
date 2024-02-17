/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images:{

        domains:['media.graphassets.com'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
      
};

 

export default nextConfig;
