import createAutoResetEvent from '../src/createAutoResetEvent';
import delay from 'delay';

export default async function () {
  const acquire = createAutoResetEvent();

  await Promise.all([
    (async () => {
      const release = await acquire();

      console.log('You will see this first.');
      await delay(1000);

      release();
    })(),
    (async () => {
      const release = await acquire();

      console.log('You will see this after a second.');
      await delay(1000);

      release();
    })(),
  ]);

  console.log('You will see this last, after two seconds.');
}
