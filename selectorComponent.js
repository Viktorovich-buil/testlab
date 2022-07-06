const SELECTORITEMS = [
  {
    id: 0,
    name: ''
  },
  {
    id: 2,
    name: 'London'
  },
  {
    id: 3,
    name: 'Moscow'
  },
  {
    id: 4,
    name: 'Penza'
  },
];

const selectorComponent = {
  items: [],
  container: null,

  init(items) {
    this.items = items;
    this.container = document.querySelector('#selector');
    this.render();
  },

  createOption(item) {
    const { id, name } = item;
    return `<option class="option" value="${id}">${name}</option>`
  },

  render() {
    let result = '';
    if (this.items && this.items.length !== 0) {
      this.items.forEach(item => {
        result += this.createOption(item)
      });
      this.container.innerHTML = `
    <select class="select">
    ${result}
    </select>
    `
    } else {
      this.container.innerHTML = `
    <select class="select">
    <option class="option" value="">No data</option>
    </select>
    `
    };
  },
}


selectorComponent.init(SELECTORITEMS);
