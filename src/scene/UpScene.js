var UpLayer = qc.Layer.extend({
    bgSprite:null,
    bgLayer:null,
    winSize:null,
    midpos:null,
    init:function(){
        this.initData();
        this.initBg();
    },
    initData:function(){
        this.winSize = qc.director.getWinSize();
        this.midpos = qc.p(this.winSize.width/2,this.winSize.height/2);
    },
    initBg:function(){
        this.bgSprite = qc.Sprite.create(res.background);
        this.bgLayer = qc.Layer.create();
        this.addChild(this.bgLayer);
        this.bgLayer.addChild(this.bgSprite);
        this.bgLayer.setPosition(this.midpos);
    }
});

var UpScene = qc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new UpLayer();
        layer.init();
        this.addChild(layer);
    }
});