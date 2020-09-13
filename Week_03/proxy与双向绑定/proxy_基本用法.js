let object = {
  a: 1,
  b: 3,
};

let po = new Proxy(object, {
  set(obj, prop, val) {
    console.log(obj, prop, val);
  },
});

po.x = 4
