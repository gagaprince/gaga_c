var UpLayer = qc.Layer.extend({
    bgSprite:null,
    bgLayer:null,
    init:function(){
        this.initBg();
    },
    initBg:function(){
        this.bgSprite = qc.Sprite.create(res.background);
        this.bgLayer = qc.Layer.create();
        this.addChild(this.bgLayer);
        this.bgLayer.addChild(this.bgLayer);
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