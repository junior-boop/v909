module.exports = {
   i18n : {
    locales : ['en', 'fr'],
    defaultLocale : 'en', 
    domains :[ 
        {
            domain: process.env.DOMAIN,
            defaultLocale: 'fr',
            // other locales that should be handled on this domain
            locales: ['fr'],
        }
    ],
    hostname : "media.graphcms.com"
    },
    images: {
        domains: ['media.graphcms.com'],
    },
}