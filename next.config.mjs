/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/blog/digital-marketing-services-in-andheri',
                destination:'/',
                permanent:false,
            }
        ]
    }
};

export default nextConfig;
