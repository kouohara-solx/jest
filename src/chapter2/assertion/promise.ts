const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
};

const successCallBack = () => {
  console.log("success");
};
const failCallBack = () => {
  console.log("fail");
};

doSomethingAsync().then(successCallBack).catch(failCallBack);

const taskPromise = (name, total) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      total += 1;
      console.log(`${name} task done! Total: ${total}`);
      resolve(total);
    }, 1000);
  });
};

taskPromise("task-1", 0)
  .then((total) => taskPromise("task-2", total))
  .then((total) => taskPromise("task-3", total))
  .then((total) => taskPromise("task-4", total));
