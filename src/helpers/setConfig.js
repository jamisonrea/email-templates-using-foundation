const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

module.exports = function(options) {
  const dirPartials = path.resolve(__dirname, '../data/partials');
  const staticFilePath = path.resolve(__dirname, '../data', './' + options.data.root.staticFile);
  const scriptFilePath = path.resolve(__dirname, '../data', './' + options.data.root.scriptFile);
  const demoFilePath = path.resolve(__dirname, '../data', './' + options.data.root.demoFile);
  const isDemo = process.env.NODE_ENV === 'production' ? false : !!options.data.root.demoFile;

  let staticObj;
  let scriptObj;
  let demoObj;
  let config = {};

  // Get file convert to JSON, or throw exception on error
  // Need to try catch each file separately, otherwise if one file fails, other files will be skipped
  try {
    staticObj = yaml.safeLoad(fs.readFileSync(staticFilePath, 'utf8'));
  } catch (e) {
  }

  try {
    scriptObj = yaml.safeLoad(fs.readFileSync(scriptFilePath, 'utf8'));
  } catch (e) {
  }

  try {
    demoObj = yaml.safeLoad(fs.readFileSync(demoFilePath, 'utf8'));
  } catch (e) {
  }

  _.merge(config, staticObj);
  !isDemo && _.merge(config, scriptObj); // We do not want to merge the script if we're testing a demo
  isDemo && _.merge(config, demoObj); // We want to merge, not assign: things can be half defined in each file

  //-------
  // still use configFile as config, should remove later
  var configFileKey = options.data.root.configFile;
  if (configFileKey) {
    config = options.data.root[configFileKey];
  }
  //-------

  var files = fs.readdirSync(dirPartials);
  var defaultConfig = {};
  files.reduce((prev, currentFile) => {
    return _.merge(prev, options.data.root[path.basename(currentFile, '.yml')]);
  }, defaultConfig);

  options.data.root.config = _.assign(defaultConfig, config); // override default config if any
};
