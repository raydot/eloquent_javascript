let queue = [];

const pushItem = (item) => {
  queue.push(item);
  // Generic error handling
  return 1;
};

const popItem = () => {
  if (queue.length !== 0) {
    queue.shift();
  } else {
    return 0;
  }
  //Generic error handling
  return 1;
};

pushItem('Alex');
pushItem('Betty');
pushItem('Choi');
pushItem('Darryl');
popItem();
popItem();
pushItem('Echo');

console.log(queue);
