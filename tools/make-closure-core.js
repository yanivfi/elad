var compiler = require('google-closure-compiler-js').compile;
var fs = require('fs');

var source = fs.readFileSync('dist/global/elad.umd.js', 'utf8');

var compilerFlags = {
  jsCode: [{src: source}],
  languageIn: 'ES2015',
  createSourceMap: true,
};

var output = compiler(compilerFlags);

fs.writeFileSync('dist/global/elad.umd.min.js', output.compiledCode, 'utf8');
fs.writeFileSync('dist/global/elad.umd.min.js.map', output.sourceMap, 'utf8');