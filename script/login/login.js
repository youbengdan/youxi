cc.Class({
    extends: cc.Component,

    properties: {
        IDEBox:cc.EditBox,
        password:cc.EditBox,
    },


    start () {
        
        // U.soketInit();
        // socketClient.cts(cts.hello,(cts.hello = "你好，server!!!"))
        // socketClient.stc(stc.hello,function(data){
        //     cc.log(data)
        // })
    },
    clickButton (err,butData){
        cc.log("login clickButton butData = ",butData);
        switch(butData){
            case "signIn":
                U.signIn();
                
            break;
            case "login":
            break;
            case "forget":
            break;
            default:
            break;
        }
    },

    update (dt) {},
});
