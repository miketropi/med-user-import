const mix = require('laravel-mix');

mix
  .js('./src/admin.js', 'dist/med-user-import.admin.bundle.js')
  .react()
  .sass('./src/scss/main.scss', 'css/med-user-import.admin.bundle.css')
  .setPublicPath('dist')