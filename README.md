# COSTINHA PORRA

----------

Segue o boilerplate

Based on  [Gulp](http://gulpjs.com/) with [Stylus](http://stylus-lang.com/) and [postCSS](http://postcss.org/).
Also uses [PHP](https://secure.php.net/) includes.


**Features:**

 - Gulpfile ready to run and dependencies listed on package.json file
 - Minifiers and concatenators
 - Useful meta tags
 - old IE Conditionals (and alert for no IE 9 < support)
 - Some useful vanilla JS scripts (WIP)
 - Stylus mixins
 - Media query variables

**How to use:**

    npm install

Will install all dependencies, then:

    gulp

 To run the default function (Starts stylus, creates/minifies CSS and JS files, watches for changes). 

You can also run specific functions: 

    gulp stylus // Runs stylus task only
    gulp css // Processes css on src folder 
    gulp compress // Concatenates and minifies JS files
    gulp images // Image compression

Since the files are .php you need a web server to run them, i recommend [EasyPHP.](http://www.easyphp.org/)


