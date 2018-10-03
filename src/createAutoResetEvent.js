import createDeferred from 'p-defer';

export default () => {
  const queue = [];
  const release = () => {
    queue.shift();

    queue[0] && queue[0].resolve(release);
  };

  return () => {
    const deferred = createDeferred();

    queue.push(deferred);

    if (queue[0] === deferred) {
      deferred.resolve(release);
    }

    return deferred.promise;
  };
}
