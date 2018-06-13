# gerry

Data visualization and interactive simulation of the congressional redistricting process that places 435 mesh-simplified district shapefiles over electoral data of individual counties; written by Jason Kao.

See the demo [here](http://gerryapp.com.s3-website-us-east-1.amazonaws.com/).

## Running it

#### With Live-Reload Server ###

In CMD, type `gulp` to begin a live reload server at `localhost:8080`. 
Currently, hot reloading only detects JS changes so server must be reset for other static resource changes.

#### Typical Node/Express Development Server ###

If you would like to run without a hot reload server in dev mode, static changes can be detected when refreshing
without re-running the dev server . simply run `gulp dev` and then in another console `node app --dev` 
(port can be specified as param but default is `3002`).

#### Optional Flags ###

- **version_bump** : Bump patch version on successful builds (default false)
- **success_notice**  : Display an OS-level success notice
- **error_sound** : Whether to play an OS error sound when compile error happens
- **build_js_debug** : Create a production level build, but do not strip debug messages from console.

**Devpost**: [https://devpost.com/software/gerry](https://devpost.com/software/gerry)
