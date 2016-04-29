/**
 * 土型
 */
var BlockTuSprite = BaseBlockSprite.extend({
    initModel:function(){
        this.models=[
            [
                [0,1,0],
                [1,2,1]
            ],
            [
                [1,0],
                [2,1],
                [1,0]
            ],
            [
                [1,2,1],
                [0,1,0]
            ],
            [
                [0,1],
                [1,2],
                [0,1]
            ]
        ];
    },
    init:function(brickres,dir){
        this._super(brickres,dir);
    }
});
BlockTuSprite.create = function(brickres,dir){
    var block = new BlockTuSprite();
    block.init(brickres,dir);
    return block;
}