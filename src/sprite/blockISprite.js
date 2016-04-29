/**
 * I型
 */
var BlockISprite = BaseBlockSprite.extend({
    initModel:function(){
        this.models=[
            [
                [1],
                [1],
                [2],
                [1]
            ],
            [
                [1,1,2,1]
            ],
            [
                [1],
                [1],
                [2],
                [1]
            ],
            [
                [1,1,2,1]
            ]
        ];
    },
    init:function(brickres,dir){
        this._super(brickres,dir);
    }
});
BlockISprite.create = function(brickres,dir){
    var block = new BlockISprite();
    block.init(brickres,dir);
    return block;
}