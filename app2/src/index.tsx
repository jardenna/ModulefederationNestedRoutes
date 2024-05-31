import('./bootstrap').then(({ mount }) => {
  const localRoot = document.getElementById('app2Root') as HTMLElement;
  mount({
    mountPoint: localRoot,
    routingStrategy: 'browser',
  });
});
