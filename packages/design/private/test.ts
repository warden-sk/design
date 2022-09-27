import fs from 'fs';
import path from 'path';
import css from '.';
import { testRows } from './toString';

/* (1) */ css();

const testRows2 = testRows.sort((left, right) => left.localeCompare(right, 'sk'));

let rows = ['# Properties'];

rows = [...rows, '| # | Name |']
rows = [...rows, '| --- | --- |']

rows = [...rows, ...[...new Set(testRows2)].map((row, i) => `| ${i + 1}. | ${row.replaceAll(/\\/g, '')} |`)];

fs.writeFileSync(path.resolve(__dirname, '../README.md'), rows.join('\n'));
