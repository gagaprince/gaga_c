var PanLayer = qc.Layer.extend({
    bgSprite:null,
    frameCache:null,
    panWidth:0,
    panHeight:0,

    _beginX:0,
    _beginY:0,

    panArray:[
        0,0,0,
        0,0,0,
        0,0,0
    ],
    init:function(){
        this.initFrameCache();
        this.initBg();
        this.initWindow();
    },
    initFrameCache:function(){
        var frameCache = qc.SpriteFrameCache._getInstance();
        frameCache.addSpriteFrames(res.fishplist,res.fishes);
        this.frameCache = frameCache;
    },
    initBg:function(){
        var frameCache = this.frameCache;
        var frame = frameCache.getSpriteFrame("window-border.png");
        this.bgSprite = qc.Sprite.create(frame);
        var rect = this.bgSprite.getTextureRect();
        this.panWidth = rect.width;
        this.panHeight = rect.height;
        this.addChild(this.bgSprite);
    },
    initWindow:function(){

        this.initWindowBegin();
        var winSprite = WinSprite.create(0);
        this.addChild(winSprite);
    },
    initWindowBegin:function(){
        var width = this.panWidth/3;
        var height = this.panHeight/3;
        var
    },
    _findWinValue:function(x,y){//第x行 第y列
        return this.panArray[x+3*y];
    },
    _giveMePositionByXY:function(x,y){

    }
});

PanLayer.create = function(){
    var layer = new PanLayer();
    layer.init();
    return layer;
}