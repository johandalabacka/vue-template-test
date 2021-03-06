// vue.config.js

// publicPath: './' so built version uses relative paths

// Then I develop the package for the vue template I use
// yarn link @lu.se\vue-template and it is symlinked into
// node_modules and gives errors if symlinks false is not set.
module.exports = {
    publicPath: './',
    chainWebpack: (config, ...rest) => {
        config.resolve.set('symlinks', false)
    }
}

