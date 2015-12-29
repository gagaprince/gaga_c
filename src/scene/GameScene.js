var GameLayer = qc.Layer.extend({
    bgSprit:null,
    winSize:null,
    init:function(){
        this.winSize = qc.director.getWinSize();
        this.initBg();
        this.initPan();
    },
    initBg:function(){
        var winSize = this.winSize;
        this.bgSprit = qc.Sprite.create(res.bg);
        this.addChild(this.bgSprit);
        this.bgSprit.setPosition(qc.p(winSize.width/2,winSize.height/2));
        this.bgSprit.setScale(0.5);
    },
    initPan:function(){
        var winSize = this.winSize;
        var panLay = PanLayer.create();
        this.addChild(panLay);
        panLay.setPosition(qc.p(winSize.width/2,winSize.height/2));
        panLay.setScale(0.5);
    }
});
var GameScene = qc.Scene.extend({
    onEnter:function(){
        this._super();
        var gameLayer = new GameLayer();
        gameLayer.init();
        this.addChild(gameLayer);
    }
});