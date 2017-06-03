var path = require('path');

module.exports = {
    entry: {
        helloApp: './src/main/js/app.js',
        stopwatchApp: './src/main/js/stopwatch.js',
        metronome: './src/main/js/metronome.js'
    },
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: '/Users/prakarshpandey/Documents/GitHub/spring-kotlin-react-demo/src/main/resources/static',
        filename: '[name]-bundle.js'
    },
    module: {
        loaders: [
            {test: path.join(__dirname, 'src/main/js'), loader: 'babel-loader'},
            {test: path.join(__dirname, 'src/main/js'), loader: 'eslint-loader'}
        ]
    }
};