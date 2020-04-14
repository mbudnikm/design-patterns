const path = require('path')

const { flushPromises, delay } = require('./async')

module.exports = {
  // fakes
  getTodos: () => require('./todos.json'),
  getEmployee: () => require('./employee.json'),
  async__getTodoById: (id) => Promise.resolve(require('./todos.json').find(el => el.id === id)),

  // filenames
  dataFile: path.join(__dirname, 'data.csv'),
  dataFileMultiplied: path.join(__dirname, 'data-multiplied.csv'),

  // utils
  delay,
  flushPromises,
}
