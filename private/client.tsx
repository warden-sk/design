import * as babel from '@babel/standalone';
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';

babel.registerPlugin('test', Test);

const TEMPLATE_CODE = 'const test = <div pX={1} pY={2}>test</div>;';

function Client() {
  const [compiled, updateCompiled] = React.useState<string>();

  function compileCode(code: string) {
    try {
      const { code: compiledCode } = babel.transform(code, {
        plugins: ['test'],
        presets: ['react', ['typescript', { allExtensions: true, isTSX: true }]],
      });

      updateCompiled(compiledCode);
    } catch (e) {
      updateCompiled(e.message);
    }
  }

  React.useEffect(() => compileCode(TEMPLATE_CODE), []);

  return (
    <>
      <textarea defaultValue={TEMPLATE_CODE} onChange={e => compileCode(e.target.value)} />
      <textarea value={compiled} />
    </>
  );
}

ReactDOM.render(<Client />, document.getElementById('client'));
