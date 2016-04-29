/**
 * L型
 */
var BlockQiSprite = BaseBlockSprite.extend({
    initModel:function(){
        this.models=[
            [
                [2,1,1],
                [1,0,0]
            ],
            [
                [1,2],
                [0,1],
                [0,1]
            ],
            [
                [0,0,1],
                [1,1,2]
            ],
            [
                [1,0],
                [1,0],
                [2,1]
            ]
        ];
    },
    init:function(brickres,dir){
        this._super(brickres,dir);
    }
});
BlockQiSprite.create = function(brickres,dir){
    var block = new BlockQiSprite();
    block.init(brickres,dir);
    return block;
}