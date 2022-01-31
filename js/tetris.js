'use strict'
import Blocks from './blocks.js'

export default class Tetris {
  constructor() {
    this.N = 20
    this.M = 10

    this.stage = document.querySelector('.stage')

    this.ground = []
    this.blockInfo = {
      type: 'L',
      direction: 0,
      n: 0,
      m: 3,
    }
  }

  init() {
    this.makeGround()
    this.makeNewBlock()
  }

  makeGround() {
    this.ground = []
    for (let i = 0; i < this.N; i++) {
      this.ground.push('<tr>')
      for (let j = 0; j < this.M; j++) {
        this.ground.push('<td></td>')
      }
      this.ground.push('</tr>')
    }
    this.stage.innerHTML = this.ground.join('')
  }

  makeNewBlock() {}

  renderBlock() {}
}
