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
UpLayer.create = function(){
    var layer = new UpLayer();
    layer.init();
    return layer;
}
var UpScene = qc.Scene.extend({
    init:function(){
        
    }
});