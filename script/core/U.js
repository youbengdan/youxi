//会重复且全局调用的工具
U = {};

U.tongzhi = function (str) {
    cc.loader.loadRes("prefabs/tongZhiBox", function (err, prefab) {
        var tongzhi = cc.instantiate(prefab);
        cc.director.getScene().addChild(tongzhi);
        tongzhi.x = cc.winSize.width / 2;
        tongzhi.y = cc.winSize.height / 2;
        tongzhi.runAction(
            cc.sequence(
                cc.fadeOut(2),
                cc.callFunc(function () {
                    tongzhi.removeFromParent();
                })
            ));
        tongzhi.getChildByName("tongZhi").string = str;
    });
};
U.signIn = function () {
    cc.loader.loadRes("prefabs/signIn", function (err, prefab) {
        var signIn = cc.instantiate(prefab);
        cc.director.getScene().addChild(signIn);
        signIn.x = cc.winSize.width / 2;
        signIn.y = cc.winSize.height / 2;
    });
};
U.soketInit = function () {
    if (!socketClient.socket) {
        socketClient.socket.init();
    }
};