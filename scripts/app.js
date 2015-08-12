requirejs.config({
    baseUrl: 'bower_components',
    paths: {
        scripts: '../scripts',
        jquery: 'jquery/dist/jquery',
        d3: 'd3/d3'
    }
});

requirejs(['scripts/main']);