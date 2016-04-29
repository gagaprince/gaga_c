var BaseBlockSprite = qc.Sprite.extend({
    model:[],
    brickWidth:30,
    spriteLayer:null,
    sprites:[],
    brickres:null,
    dir:0,
    init:function(brickres,dir){
        this._super();
        this.dir=dir;
        this.brickres = brickres||res.brick_b;
        this.initModel();
        this.initLayer();
        this.initSprites();
    },
    initLayer:function(){
        this.spriteLayer = qc.Layer.create();
        this.addChild(this.spriteLayer);
    },
    initSprites:function(){
        for(var i=0;i<4;i++){
            var sprite = qc.Sprite.create(this.brickres);
            this.sprites.push(sprite);
            this.spriteLayer.addChild(sprite);
        }
        this.resetSpritePosition();
    },
    initModel:function(){
        this.models=[
            [
                [1,1,2],
                [0,0,1]
            ],
            [
                [0,1],
                [0,1],
                [1,2]
            ],
            [
                [1,0,0],
                [2,1,1]
            ],
            [
                [2,1],
                [1,0],
                [1,0]
            ]
        ];
    },
    rotateByDir:function(index){
        //将dir对应到对应的方向上
        this.dir+=index;
        if(this.dir>0){
            this.dir = this.dir%4;
        }else{
            this.dir = 4-(-this.dir)%4;
        }
    },
    rotateLeft:function(){
        this.rotateByDir(-1);
        this.resetSpritePosition();
    },
    rotateRight:function(){
        this.rotateByDir(1);
        this.resetSpritePosition();
    },
    resetSpritePosition:function(){
        var model = this.models[this.dir];
        var pos = this._find2Position(model);
        var k=0;
        for(var i=0;i<model.length;i++){
            var modelItem = model[i];
            for(var j=0;j<modelItem.length;j++){
                if(modelItem[j]>0){
                    var spriteTemp = this.sprites[k];
                    if(spriteTemp){
                        var x = j-pos.x;
                        var y = i-pos.y;
                        spriteTemp.setPosition(qc.p(x*this.brickWidth,-y*this.brickWidth));
                    }
                    k++;
                }
            }
        }
    },
    _find2Position:function(model){
        for(var i=0;i<model.length;i++){
            var modelItem = model[i];
            for(var j=0;j<modelItem.length;j++){
                var value = modelItem[j];
                if(value==2){
                    return qc.p(j,i);
                }
            }
        }
    },
    destory:function(){
        this.sprites = [];
        this._super();
    }
});