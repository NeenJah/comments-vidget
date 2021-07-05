
export class StorageArray {

  constructor(key) {
    this.key = key;
    if (!localStorage.getItem(key)) {
      this.set(new Array);
    }
  }

  get() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  set(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }

  push(value) {
    const sArr = this.get(),
      newLength = sArr.push(value);
    this.set(sArr);
    return newLength;
  }

  splice() {
    const sArr = this.get(),
      delArr = sArr.splice(...arguments);
    this.set(sArr);
    return delArr;
  }

  clear() {
    this.set(new Array);
  }

  map() {
    const sArr = this.get();

    return Array.prototype.map.apply(sArr, arguments);
  }

  get length() {
    return this.get().length;
  }

}