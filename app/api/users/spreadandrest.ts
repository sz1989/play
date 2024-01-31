// typescript playground: typescriptlang.org/play
// REST operator: condense multiple elements into an array
const addThreeNumsInREST = (...x: number[]) => {
  console.log(x[0] + x[1] + x[2]);
};

const args: number[] = [1, 2, 3];
addThreeNumsInREST(...args); // SPREAD operator
let args2 = [...args]; // typescript infer number[]
args2.push(4);
const args3: (number | string)[] = [5, 6, "a"];
console.log([...args, "free", ...args3]); // array concatenation

const multiply = (multiplier: number, ...theArgs: number[]) => {
  return theArgs.map((element) => multiplier * element);
};

console.log(multiply(1, 2, 3, 4));

function debounce(cb: (...arg: any[]) => void, delay = 1000) {
  let timeout: string | number | NodeJS.Timeout | undefined;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const updateTxt = debounce((txt) => {
  console.log(txt);
}, 250);

interface CallbackFun {
  (msg: string): void;
}

function delayMsg(msg: string, delay: number, callback: CallbackFun) {
  setTimeout(() => {
    callback(msg);
  });
}
