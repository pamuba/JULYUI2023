var sass = require('node-sass')

module.exports = function(grunt){
    //Configuration
    grunt.initConfig({
        concat:{
            js:{
                src:['js/jQuery.js', 'js/*.js'],
                dest:'build/script.js'
            },
            css:{
                src:['css/*.css'],
                dest:'build/script.css'
            },
        },
        sass:{
            options:{
                implementation:sass,
                // sourceMaps:true
            },
            build:{
                files:[{
                    src:['css/sass/styles.scss'],
                    dest:'build/style.css'
                }]
            }
        },
        uglify:{
            build:{
                files:[{
                    src:'build/script.js',
                    dest:'build/scripts.js'
                }]
            }
        }
    });
    //load the plugins
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')


    //register tasks
    grunt.registerTask("default", ["concat:js"])
    grunt.registerTask("concat-js", ["concat:js"])
    grunt.registerTask("concat-css", ["concat:css"])
    grunt.registerTask("build-sass", ["sass"])
    grunt.registerTask("build-uglify", ["uglify"])


}




