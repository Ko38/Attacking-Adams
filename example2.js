class Example2 extends Phaser.Scene{
    constructor(){
        super({key:"Example2"});
    }

    create(){
        this.text = this.add.text(0,0,"Welcome", {font:"40px Impact"});

        var tween = this.tweens.add({
            targets: this.text,
            x: 200,
            y: 250,
            duration: 2000,
            ease:"Elastic",
            easeParams: [1.5,0.5],
            delay: 1000,
            onComplete: function(src,target){
                target[0].x = 0;
                target[0].y = 0;
                target[0].setColor("Red");
            }
        }, this);

        this.input.keyboard.on('keyup', function(e){
            if(e.key == "3"){
                this.scene.start("Example3");
            }
        },this);
    }
}