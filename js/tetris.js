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
      n: -1,
      m: 3,
    }
    this.downInterval = undefined
    this.duration = 500

    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 39:
          this.moveBlock('m', 1)
          break
        case 37:
          this.moveBlock('m', -1)
          break
        case 40:
          this.moveBlock('n', 1)
          break
        // 아래키
        case 38:
          this.changeDirection()
          break
        case 32:
          this.dropBlock()
          break
        default:
          break
      }
    })
  }

  init() {
    this.makeGround()
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
}
