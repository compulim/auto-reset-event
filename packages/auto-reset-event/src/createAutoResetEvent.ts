export default function createAutoResetEvent() {
  const queue: PromiseWithResolvers<() => void>[] = [];
  const release = () => {
    queue.shift();

    queue[0] && queue[0].resolve(release);
  };

  return () => {
    const resolvers = Promise.withResolvers<() => void>();

    queue.push(resolvers);

    if (queue[0] === resolvers) {
      resolvers.resolve(release);
    }

    return resolvers.promise;
  };
}
