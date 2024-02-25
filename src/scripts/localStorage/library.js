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

  getObjById(id) {
    return this.#data.find(obj => obj.id === id);
  }

  setObjById(id, newObj) {
    this.#data = this.#data.map(obj => (obj.id === id ? newObj : obj));
  }

  addObj(newObj) {
    this.#data.push(newObj);
  }

  removeObg(id) {
    const index = this.#data.findIndex(obj => obj.id === id);
    if (index !== -1) {
      this.#data.splice(index, 1);
    }
  }

  updateObj(newObj) {
    this.#data = this.#data.map(obj =>
      obj.id === obj.id ? (obj.id === newObj.id ? newObj : obj) : obj
    );
  }
}

export default Library;
