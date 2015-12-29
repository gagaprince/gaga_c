qc.game.onStart = function(){
    LoaderScene.preload(start_resources,function(){
        var myGameScene = new GameScene();
        qc.director.runScene(myGameScene);
    });
};
qc.game.run();