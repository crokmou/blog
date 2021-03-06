module.exports = {
  staticFileGlobs: [
    'public/assets/**/*.js',
    'public/assets/**/*.css',
    'public/assets/**/*.json',
  ],
  root: 'public/',
  runtimeCaching: [{
    urlPattern: /https:\/\/crokmou\.disqus\.com\//,
    handler: 'fastest'
  },{
    urlPattern: /https:\/\/assets\.pinterest\.com\//,
    handler: 'fastest'
  },{
    urlPattern: /https:\/\/cdn\.jsdelivr\.net\//,
    handler: 'fastest'
  },{
    urlPattern: /^https:\/\/code\.jquery\.com\//,
    handler: 'fastest'
  },{
    urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\//,
    handler: 'fastest'
  },{
    urlPattern: /^https:\/\/crokmou\.com\//,
    handler: 'networkFirst'
  },{
    urlPattern: /^https:\/\/images.crokmou\.com\//,
    handler: 'fastest'
  }]
};
