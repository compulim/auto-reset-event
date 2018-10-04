# auto-reset-event

This package mimic the behavior of [`AutoResetEvent`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.autoresetevent) of C#, an acquire-release one semantic.

[![npm version](https://badge.fury.io/js/auto-reset-event.svg)](https://badge.fury.io/js/auto-reset-event) [![Build Status](https://travis-ci.org/compulim/auto-reset-event.svg?branch=master)](https://travis-ci.org/compulim/auto-reset-event)

# Background

Although JavaScript is single-threaded, one might want to limit number of concurrent asynchronous operations. For example, a task that requires multiple asynchronous steps to complete can use this package to limit its concurrency.

# How to use

Run `npm install auto-reset-event`.

## Code snippets

```js
import createAutoResetEvent from 'auto-reset-event';

// Create an acquire-release queue
const acquire = createAutoResetEvent();

// Acquire a single lock, this function will not be resolved until the lock is acquired
const release = await acquire();

// Do the non-parallelized asynchronous work

// Release the lock
release();
```

## Full sample

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

# Samples

`auto-reset-event` can be used to limit concurrency for asynchronous operations.

## Slowing down web traffic for debugging purpose

We can use `auto-reset-event` to easily slow down concurrent requests by limiting its concurrency and serving rate. In this sample, we slowed down serving static content by serving one request every second.

```js
import { createServer } from 'restify';
import createAutoResetEvent from 'auto-reset-event';
import delay from 'delay';
import serveHandler from 'serve-handler';

const server = createServer();
const acquireSlowLock = createAutoResetEvent();

server.get('/public/*', async (req, res) => {
  // If ?slow is added to the URL, we will slow it down by serving one request every second
  if ('slow' in req.query) {
    // Make sure it is not cached, so we can replay the slow behavior easily
    res.noCache();

    const release = await acquireSlowLock();

    await delay(1000);
    release();
  }

  await serveHandler(req, res, { path: join(__dirname, './public') });
});

server.listen(process.env.PORT || 80);
```

# Contributions

Like us? [Star](https://github.com/compulim/auto-reset-event/stargazers) us.

Want to make it better? [File](https://github.com/compulim/auto-reset-event/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/auto-reset-event/pulls) a pull request.
