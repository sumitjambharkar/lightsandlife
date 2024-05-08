export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://lightsandlife.in/sitemap.xml',
    }
  }