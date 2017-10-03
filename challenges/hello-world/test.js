const assert = require('assert')
const helloWorld = require('./solution')

/* eslint-env mocha */
describe('hello-world', () => {
  it('exports a function', () => assert.equal(typeof helloWorld, 'function'))

  it('greets the world when receiving no parameter', () => {
    assert.equal(helloWorld(), 'Hello, World!')
  })

  it('greets someone when receiving his/her name', () => {
    ;['john', 'jane', 'josh'].forEach(name => {
      assert.equal(helloWorld(name), `Hello, ${name}!`)
    })
  })
})
