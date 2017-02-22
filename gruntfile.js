module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    cleancss: false,
                    optimization: 2,
                    dumpLineNumbers: 'false'
                },
                files: {
                    "css/style.css": "less/style.less"
                    
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
};