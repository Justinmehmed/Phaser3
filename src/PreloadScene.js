import { Scene } from 'phaser'

class PreloadScene extends Scene {
    constructor() {
        super('preload')
    }

    preload() {
        this.load.image('fall','assets/Fall.png')
    }

    create() {
    
    this.add.image(400,400, 'fall').setScale(5).refreshBody
    this.add.text(200, 200, 'Press Enter To Start', {fontSize: '35px', fill: '#999'})
    this.add.text(120, 250, 'Use the Arrow keys to move', {fontSize: '35px', fill: '#999'})
    this.add.text(300, 500, 'Good Luck :)', {fontSize: '35px', fill: '#999'});



    this.input.keyboard.on('keydown-ENTER', () => this.scene.start('game'))
    }
}

export default PreloadScene