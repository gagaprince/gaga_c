var WinSprite = qc.Sprite.extend({
    openFrame:null,
    closeFrame:null,
    mySprite:null,
    isOpenFlag:null,
    init:function(isOpen){
        this.isOpenFlag = isOpen;
        this.initSprite(isOpen);
    },
    initSprite:function(isOpen){
        var frameCache = qc.SpriteFrameCache._getInstance();
        frameCache.addSpriteFrames(res.fishplist,res.fishes);
        this.openFrame = frameCache.getSpriteFrame("window-open.png");
        this.closeFrame = frameCache.getSpriteFrame("window-close.png");

        if(isOpen){
            this.mySprite = qc.Sprite.create(this.openFrame);
        }else{
            this.mySprite = qc.Sprite.create(this.closeFrame);
        }
        this.addChild(this.mySprite);
    },
    reflectFlag:function(){
        this.isOpenFlag = !this.isOpenFlag;
        if(this.isOpenFlag){
            this.mySprite.setSpriteFrame(this.openFrame);
        }else{
            this.mySprite.setSpriteFrame(this.closeFrame);
        }
    },
    isOpen:function(){
        return this.isOpenFlag;
    }
});
WinSprite.create = function(isOpen){
    var sprite = new WinSprite();
    sprite.init(isOpen);
    return sprite;
}