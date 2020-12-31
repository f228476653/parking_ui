var replace = require('replace-in-file');
var package = require("./package.json");
var buildVersion = package.version;
var options = {
    files: ['src/environments/environment.dev.ts', 'src/environments/environment.prod.ts', 'src/environments/environment.kevin.ts', 'src/environments/environment.pad-devel.ts', 'src/environments/environment.pad-poc.ts', 'src/environments/environment.qa.ts', 'src/environments/environment.ray.ts', 'src/environments/environment.show.ts', 'src/environments/environment.tp.ts', 'src/environments/environment.ts'],
    from: /version: '(.*)'/g,
    to: "version: '" + buildVersion + "'",
    allowEmptyPaths: false,
};

try {
    var changedFiles = replace.sync(options);
    if (changedFiles == 0) {
        throw "nothng changed";
    }
    console.log('Build version set: ' + buildVersion);
} catch (error) {
    console.error('Error occurred:', error);
    throw error;
}