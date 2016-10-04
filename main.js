qc.game.onStart = function(){
    LoaderScene.preload(start_resources,function(){
        var myScene = new UpScene();
        qc.director.runScene(myScene);
    });
};
qc.game.run();