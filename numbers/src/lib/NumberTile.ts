export interface NumberTileConfig{
    scene: Phaser.Scene
    value: integer 
    spriteKey: string
}

export default class NumberTile {

    config : NumberTileConfig
    container: Phaser.GameObjects.Container
    sprite: Phaser.GameObjects.Sprite
    text: Phaser.GameObjects.Text

    constructor(config: NumberTileConfig) {

        this.config = config

        this.sprite = config.scene.make.sprite({ 
            key: config.spriteKey,
        });

        this.text = new Phaser.GameObjects.Text(config.scene,-8,-12, config.value.toString(),{ 
            fontFamily: "NunitoExtraBold", 
            fontSize: "24px",
            shadow: {
                offsetX: 2,
                offsetY: 2, 
                color: "#000000",
                fill: true
            }
        });

        this.text.setText(this.config.value.toString())
        this.container = config.scene.make.container({})
        this.container.setSize(64,64)
        this.container.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            console.log(pointer, localX, localY, event )
            console.log("OMG you just clicked " + this.config.value)
        }, this);
    

        this.container.add(this.sprite)
        this.container.add(this.text)
        this.container.sendToBack(this.sprite)


    }

    setPosition(x: integer, y: integer) {
        this.container.setPosition(x, y, 0, 0)
    }

}


