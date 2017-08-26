# Project Skeleton

### Gulp complex commands:
* `gulp` create build **with** localhost server and browsersync;
* `gulp dev` create build **without** localhost server and browsersync.

### SCSS
* All custom **scss** files locate in `src/scss/` folder;
* Entry point for all scss is `src/scss/app.scss` you can **import** all your *.scss* files from here;
* You **don't need** to write **prefixes** for different browsers like `-webkit` it will be done by the gulp.

### Images
* All **images** placed in `src/images/` folder will be automatically **optimized** and put in `build/images/` folder;
* To **clear** `build/images/` folder use `gulp imageClean` task.

### Vendor
* After installing the extension you must **include its files**:
  * **js files** must be included in `src/vendor_entries/vendor.js` by adding new elements to the **array**;
  * **css or sass files** must be included in `src/vendor_entries/vendor.scss` using `@import`.

### Production
* `gulp production` task creates the `production/` folder in the root of the project with **build files only**;
* It will **help you** to **create clear** instances of code for the **production** or **further implementation**.
