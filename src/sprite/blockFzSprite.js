/**
 * 反Z型
 */
var BlockFzSprite = BaseBlockSprite.extend({
    initModel:function(){
        this.models=[
            [
                [0,1,1],
                [1,2,0]
            ],
            [
                [1,0],
                [2,1],
                [0,1]
            ],
            [
                [0,1,1],
                [1,2,0]
            ],
            [
                [1,0],
                [2,1],
                [0,1]
            ]
        ];
    },
    init:function(brickres,dir){
        this._super(brickres,dir);
    }
});
BlockFzSprite.create = function(brickres,dir){
    var block = new BlockFzSprite();
    block.init(brickres,dir);
    return block;
}