module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*'],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        cwd: 'public/',
                        src: ['**/*'],
                        dest: 'dist/'
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', ['copy']);
};
