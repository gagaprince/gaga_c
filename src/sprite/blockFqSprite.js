/**
 * 反L型
 */
var BlockFqSprite = BaseBlockSprite.extend({
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
    init:function(brickres,dir){
        this._super(brickres,dir);
    }
});
BlockFqSprite.create = function(brickres,dir){
    var block = new BlockFqSprite();
    block.init(brickres,dir);
    return block;
}