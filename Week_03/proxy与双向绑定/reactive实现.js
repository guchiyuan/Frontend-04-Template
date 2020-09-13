let object = {
  a: 1,
  b: 3,
};
let callbacks =[];
let usedReactivities = [];
const reactive = (object) => {
  return new Proxy(object, {
    set(obj, prop, val) {
        obj[prop] = val
        for (const callback of callbacks) {
            callback()
        }
    },
    get(obj, prop) {
        usedReactivities.push([obj,prop])
        return obj[prop]
    },
  });
};

let po = reactive(object);

const effect = (callback) => {
    usedReactivities = [];
    callback()
    console.log(usedReactivities);
    // callbacks.push(callback)
}

effect(() => {
    console.log('effect',po);
})


po.x = 99
