module.exports = function(config) {
  config.addPassthroughCopy({ public: './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
  })

  return {
    templateFormats: ['md', 'njk', 'css', 'jpg'],
    dir: {
      input: 'src',
      output: '_site',
    }
  }
}
