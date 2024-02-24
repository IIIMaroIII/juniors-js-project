import Library from './library';

class LocalStorageLib {
  #localStorageKey = 'favorites';
  dataLibrary = [];

  constructor(key) {
    this.#localStorageKey = key || this.#localStorageKey;
    this.dataLibrary = new Library([]);
  }

  saveData() {
    localStorage.setItem(
      this.#localStorageKey,
      JSON.stringify(this.dataLibrary.data)
    );
    alert('Data saved to Local Storage!');
  }

  getData() {
    const strSavedData = localStorage.getItem(this.#localStorageKey);
    return (this.dataLibrary.data = strSavedData
      ? JSON.parse(strSavedData)
      : []);
  }

  addObj(obj) {
    this.getData();
    if (!this.isObjSaved(obj.id)) {
      this.dataLibrary.addObj(obj);
      this.saveData();
    }
  }

  isObjSaved(id) {
    this.getData();
    return this.dataLibrary.getObjById(id) !== undefined;
  }

  remove(obj) {
    this.getData();
    if (this.isObjSaved(obj.id)) {
      this.dataLibrary.remove(obj.id);
      this.saveData();
    }
  }
}

export default LocalStorageLib;
