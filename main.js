qc.game.onStart = function(){
    LoaderScene.preload(start_resources,function(){
        var scene = new UpScene();
    });
};
qc.game.run();