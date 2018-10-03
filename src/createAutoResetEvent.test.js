import hasResolved from 'has-resolved';

import createAutoResetEvent from './createAutoResetEvent';

test('should acquire one at a time', async () => {
  const acquire = createAutoResetEvent();

  const p1 = acquire();
  const p2 = acquire();

  expect(await hasResolved(p1)).toBe(true);
  expect(await hasResolved(p2)).toBe(false);

  (await p1)();

  expect(await hasResolved(p2)).toBe(true);

  (await p2)();
});
