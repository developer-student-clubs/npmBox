import MagicString from 'magic-string';
import fs from 'fs'

const s = new MagicString('problems = 99');

s.update(0, 8, 'answer');
s.toString(); // 'answer = 99'

s.update(11, 13, '42'); // character indices always refer to the original string
s.toString(); // 'answer = 42'

s.prepend('var ').append(';'); // most methods are chainable
s.toString(); // 'var answer = 42;'

const map = s.generateMap({
  source: 'source.js',
  file: 'converted.js.map',
  includeContent: true
}); // generates a v3 sourcemap

fs.writeFileSync('converted.js', s.toString());
fs.writeFileSync('converted.js.map', map.toString());