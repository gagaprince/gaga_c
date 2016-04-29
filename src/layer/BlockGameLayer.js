var BlockGameLayer = qc.Layer.extend({
    speed:1000,
    top:300,
    bottom:-300,
    left:-150,
    right:150,
    blockBeginPoss:[
        qc.p(-45,285),
        qc.p(45,285),
        qc.p(-75,285),
        qc.p(75,285)
    ],

    falls:[],
    machineSwitch:false,
    machineInterv:null,

    blockFactory:function(blockType,dir){
        var createSprite= null;
        switch (blockType){
            case 0:
                //我不会告诉你这个是个*****方块
                createSprite = BlockFkSprite.create(res.brick_b,dir);
                break;
            case 1:
                //这tmd是个T啊
                createSprite = BlockTuSprite.create(res.brick_c,dir);
                break;
            case 2:
                //面条君不长这样啊
                createSprite = BlockISprite.create(res.brick_r,dir);
                break;
            case 3:
                //给你跪了~~~Z型
                createSprite = BlockZSprite.create(res.brick_g,dir);
                break;
            case 4:
                //这是一个翻转的Z型
                createSprite = BlockFzSprite.create(res.brick_y,dir);
                break;
            case 5:
                //你知道这是个L么
                createSprite = BlockQiSprite.create(res.brick_b,dir);
                break;
            case 6:
                //翻转的L 长这样
                createSprite = BlockFqSprite.create(res.brick_g,dir);
                break;
        }
        return createSprite;
    },

    giveMeRandomNum:function(num){
        return Math.floor(Math.random()*num);
    },

    fallMachine:function(sprite){
        //坠落机器 咔咔咔 这是干嘛的 不懂不会看代码啊 写注释多累啊
        var nowPosition = sprite.getPosition();
        var newPosition = qc.p(nowPosition.x,nowPosition.y-sprite.brickWidth);
        //这里是不是还要判断能不能下落了啊
        //我就先让它下落 怎么滴！
        sprite.setPosition(newPosition);
    },

    startMachine:function(){
        //一运行这个 方块就开始往下掉了，看砸头上了
        this.machineSwitch = true;
        if(this.machineInterv){
            clearInterval(this.machineInterv);
            this.machineInterv=null;
        }
        var _this = this;
        this.machineInterv = setInterval(function() {
            if (_this.machineSwitch) {
                var falls = _this.falls;
                var fall = falls[0]
                for(var i=0;fall;fall=falls[++i]){
                    _this.fallMachine(fall);
                }
            }
        },this.speed);
    },
    pauseMachine:function(){
        //擦 不掉了， 还能继续掉
        this.machineSwitch = false;
    },
    resumeMachine:function(){
        //擦 又开始掉了

    },
    stopMachine:function(){
        //擦 不掉了 也不能继续掉了
        clearInterval(this.machineInterv);
        this.machineInterv = null;
    },

    createBlock:function(){
        //新建的方块懂不？
        var blockSprite = this.blockFactory(this.giveMeRandomNum(7),this.giveMeRandomNum(4));
        blockSprite.setPosition(this.blockBeginPoss[this.giveMeRandomNum(4)]);
        this.falls.push(blockSprite);
        this.addChild(blockSprite);
    },

    changeBlockDir:function(){
        //改变正在下落的方块的方向
        var fall = this.falls[0];
        if(fall){
            fall.rotateLeft();
        }
    },
    moveBlock:function(dir){
        //左右移动
        var fall = this.falls[0];
        if(fall){
            var nowPosition = fall.getPosition();
            var newPosition = qc.p(nowPosition.x+dir*fall.brickWidth,nowPosition.y);

        }
    },


    handlerFallBlockByKeyCode:function(keycode){
        console.log('keycode:'+e.keyCode);
        switch (keycode){
            case 38:
                //这是上！

                break;
            case 37:
                //你往左箍嘴箍嘴呗
                break;
            case 39:
                //你往右箍嘴箍嘴呗
                break;
            case 40:
                //加速下落
                break;
            case 32:
                //暂停暂停！
                break;
            case 72:
                //h键 用来遮挡屏幕的
                break;
        }
    },

    initListener:function(){
        //让我做啥我做啥，我听你的
        //键盘上下左右的code是多少啊  37左 38上 39右 40下 32空格  72h
        var _this=this;
        document.addEventListener('keydown',function(e){
            var keyCode = e.keyCode;
            _this.handlerFallBlockByKeyCode(keyCode);
        },false);

    },

    init:function(){
        this._super();
        this.createBlock();
        this.startMachine();
        this.initListener();
    }
});
BlockGameLayer.create = function(){
    var blockGameLayer = new BlockGameLayer();
    blockGameLayer.init();
    return blockGameLayer;
}

