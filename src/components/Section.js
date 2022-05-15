export default class Section {

  constructor({
    items,
    renderer
  }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._items = items;
    this._renderer = renderer;
  }

  // renderItems() {
  //   this._items.forEach(data => {
  //     this._renderer(data);
  //     // renderItems(items)
  //   })
  // }

  renderItems(items, userId) {
    items.forEach(data => {
      this._renderer(data, userId);
    })
  }

  addItem(element) {
    this._container.prepend(element);
  }

}
