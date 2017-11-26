module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          'styles.css': 'styles.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);
};
