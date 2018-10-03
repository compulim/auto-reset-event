# auto-reset-event

This package mimic the behavior of [`AutoResetEvent`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.autoresetevent) of C#, an acquire-release one semantic.

# How to use

Run `npm install auto-reset-event`.

```js
import createAutoResetEvent from 'auto-reset-event';
import delay from 'delay';

async function main() {
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

main().catch(err => console.error(err));
```

# Contributions

Like us? [Star](https://github.com/compulim/auto-reset-event/stargazers) us.

Want to make it better? [File](https://github.com/compulim/auto-reset-event/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/auto-reset-event/pulls) a pull request.
