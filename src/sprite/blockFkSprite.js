/**
 *  方型
 */
var BlockFkSprite = BaseBlockSprite.extend({
    initModel:function(){
        this.models=[
            [
                [2,1],
                [1,1]
            ]
        ];
    },
    rotateLeft:function(){
    },
    rotateRight:function(){},
    init:function(brickres,dir){
        this._super(brickres,dir);
    }
});
BlockFkSprite.create = function(brickres,dir){
    var block = new BlockFkSprite();
    block.init(brickres,0);
    return block;
}