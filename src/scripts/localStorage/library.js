
class Library {
  #data = [];

  constructor(data) {
    this.#data = data || [];
  }

  get data() {
    return this.#data;
  }

  set data(newObj) {
    this.#data = newObj;
  }

  getObjById(_id) {
    return this.#data.find(obj => obj._id === _id);
  }

  setObjById(_id, newObj) {
    this.#data = this.#data.map(obj => (obj._id === _id ? newObj : obj));
  }

  addObj(newObj) {
    this.#data.push(newObj);
  }

  removeObj(_id) {
    const index = this.#data.findIndex(obj => obj._id === _id);
    if (index !== -1) {
      this.#data.splice(index, 1);
    }
  }

  updateObj(newObj) {
    this.#data = this.#data.map(obj =>
      obj._id === obj._id ? (obj._id === newObj._id ? newObj : obj) : obj
    );
  }
}

export default Library;