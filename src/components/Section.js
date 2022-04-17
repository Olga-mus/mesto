export default class Section {
  //items — это массив данных, которые нужно добавить на страницу, renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
  //containerSelector - селектор контейнера, в который нужно добавлять созданные элементы.
  constructor({items, renderer}, containerSelector) {
    this._container = containerSelector;
    this._renderer = renderer;
    this._items = items;
  }

//отвечает за отрисовку всех элементов.
  renderItems() {
    this._items.forEach(item => {
      this.addItem(this._renderer(item));
    })
  }

  //принимает DOM-элемент и добавляет его в контейнер.
  addItem(item) {  //готовая разметка
    this._container.prepend(item);
  }

}
