var GameLayer = qc.Layer.extend({
    winSize:null,
    middlePos:null,

    init:function(){
        this._super();
        this.winSize = qc.director.getWinSize();
        this.middlePos = qc.p(this.winSize.width/2,this.winSize.height/2);
        var bg = qc.Sprite.create(res.bg);
        bg.setPosition(this.middlePos);
        var frontBg = qc.Sprite.create(res.frontBg);
        frontBg.setPosition(this.middlePos);
        frontBg.setScale(0.75,1);
        var blockGameLayer = BlockGameLayer.create();
        blockGameLayer.setPosition(this.middlePos);

        this.addChild(bg);
        this.addChild(frontBg);
        this.addChild(blockGameLayer);
    }
});

var MyScene = qc.Scene.extend({
    onEnter:function(){
        this._super();
        var gameLayer = new GameLayer();
        gameLayer.init();
        this.addChild(gameLayer);
    }
});