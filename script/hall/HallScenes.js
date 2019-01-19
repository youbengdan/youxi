
cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    onLoad () {
        cc.log('hallScenes onLoad');
        let self = this;
        socketClient.init();
        socketClient.cts(cts.hello,(cts.hello = "你好，server!!!"))
        socketClient.stc(stc.hello,function(data){
            cc.log(data)
        })
    },

    // start () {
    //     cc.log('hallScenes start');
    // },

    update (dt) {
        // cc.log("-------update")
    },
});
