export default {
  titleTemplate: (chunk) =>
    chunk ? chunk + ' - Campus INSA CVL' : 'Campus INSA CVL',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'google-site-verification',
      content: 'ptyOlDji9-TUHXNtcYQrxO9Fq8bOsX0duCRrByMlrsc',
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: 'fr_FR',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content:
        'https://raw.githubusercontent.com/Campus-INSA-CVL/campus-website/master/static/icon.png?token=AKZLUYA3V5QXSSQYTXWCOLC7ACPPW',
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'Campus INSA CVL',
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary',
    },

    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content:
        'https://raw.githubusercontent.com/Campus-INSA-CVL/campus-website/master/static/icon.png?token=AKZLUYA3V5QXSSQYTXWCOLC7ACPPW',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
}
