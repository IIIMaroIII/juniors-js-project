import Library from './library';

import KEY_LOCALSTORAGE from './constants';
class LocalStorageLib {
  #localStorageKey = 'favorites';
  dataLibrary = [];

  constructor(key) {
    this.#localStorageKey = key || this.#localStorageKey;
    this.dataLibrary = new Library(localStorage.getItem(this.#localStorageKey));
  }

  saveData() {
    localStorage.setItem(
      this.#localStorageKey,
      JSON.stringify(this.dataLibrary.data)
    );
  }

  getData() {
    const strSavedData = localStorage.getItem(this.#localStorageKey);
    return (this.dataLibrary.data = strSavedData
      ? JSON.parse(strSavedData)
      : []);
  }

  addObj(obj) {
    this.getData();
    if (!this.isObjSaved(obj._id)) {
      this.dataLibrary.addObj(obj);
      this.saveData();
    }
  }

  isObjSaved(_id) {
    this.getData();
    return this.dataLibrary.getObjById(_id) !== undefined;
  }

  remove(_id) {
    this.getData();
    if (this.isObjSaved(_id)) {
      this.dataLibrary.removeObj(_id);
      this.saveData();
    }
  }
}

const Local = new LocalStorageLib(KEY_LOCALSTORAGE);

export default Local;





/**

function addLocal() {
  // let Obj = [
  //   '643282b1e85766588626a0c6',
  //   '643282b1e85766588626a07b',
  //   '643282b1e85766588626a0a6',
  //   '643282b2e85766588626a164',
  // ];

  if (!Local.isObjSaved(Object._id)) {
    Local.addObj(Object);
  } else {
    Local.remove(Object._id);
  }
}

addToShopList.addEventListener("click", () => { changeButton(); addLocal(); });

 */