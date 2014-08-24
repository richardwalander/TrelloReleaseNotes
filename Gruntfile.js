'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['public/js/**/*.js'],
			options: {
				jshintrc: true,
				ignores: ['public/js/lib/**/*.js']
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			js: {
				files: [
					'src/css/**/*.css',
					'src/js/**/*.js',
					'!src/js/popup.js',
					'src/templates/**/*.twig',
					'src/index.html',
					'package.json',
					'config/shim.js'
				],
				tasks: ['shell:browserify']
			}
		},
		shell: {
			browserify: {
				command: '(browserify ./src/js/main.js -d -o ./src/js/popup.js)'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['jshint', 'requirejs', 'less:production']);

};