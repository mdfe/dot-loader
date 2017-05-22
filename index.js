var dot = require('dot');
var fs = require('fs');

module.exports = function(content) {
  if (this.cacheable) {
    this.cacheable();
  }
  
  dot.templateSettings.selfcontained = true;

  var content = fs.readFileSync(this.resourcePath, 'utf8');
  if(content && content.toString()) {
    content = content.replace(/^\uFEFF/, '');
  }
  return "module.exports = " + dot.template(content);
};
