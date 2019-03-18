const mix = require('laravel-mix');

mix.js( 'src/js/app.js', 'public/js/app.js')
//.extract()
.sass( 'src/scss/app.scss', 'public/css/app.css')
.options({
    processCssUrls: false,
})
.copyDirectory('src/img', 'public/img');