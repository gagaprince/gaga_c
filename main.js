qc.game.onStart = function(){
    LoaderScene.preload(start_resources,function(){
        var myScene = new MyScene();
        qc.director.runScene(myScene);
    });
};
qc.game.run();