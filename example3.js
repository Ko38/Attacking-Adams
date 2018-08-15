var Example3 = {
    preload: function(){
        this.load.audio('test','INSTOK.WAV');
    },

    create: function(){
        this.soundFX = this.sound.add("test", {loop: "true"});
        this.soundFX.play();
        //this.soundFX.rate = 0.5;
    }
}