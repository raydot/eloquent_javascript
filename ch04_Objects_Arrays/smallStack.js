let stack = [];

const pushItem = (item) => {
  stack.push(item);
  // Generic error handling
  return 1;
};

const popItem = () => {
  if (stack.length) {
    stack.pop();
  } else {
    return 0;
  }
  // Generic error handling
  return 1;
};

pushItem(1);
pushItem('spring');
pushItem(99);
popItem();
popItem();
pushItem('tennis');

console.log(stack);
