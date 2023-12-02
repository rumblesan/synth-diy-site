module.exports = function(config) {
  config.addPassthroughCopy({ public: './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
  })

  return {
    templateFormats: ['md', 'njk', 'css', 'jpg', 'pdf', 'png'],
    dir: {
      input: 'src',
      output: '_site',
    }
  }
}
