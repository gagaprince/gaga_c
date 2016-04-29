/**
 * Z型
 */
var BlockZSprite = BaseBlockSprite.extend({
    initModel:function(){
        this.models=[
            [
                [1,1,0],
                [0,2,1]
            ],
            [
                [0,1],
                [2,1],
                [1,0]
            ],
            [
                [1,1,0],
                [0,2,1]
            ],
            [
                [0,1],
                [2,1],
                [1,0]
            ]
        ];
    },
    init:function(brickres,dir){
        this._super(brickres,dir);
    }
});
BlockZSprite.create = function(brickres,dir){
    var block = new BlockZSprite();
    block.init(brickres,dir);
    return block;
}