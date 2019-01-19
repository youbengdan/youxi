
cc.Class({
    extends: cc.Component,

    properties: {
        ID:cc.EditBox,
        password1:cc.EditBox,
        password2:cc.EditBox,
        IDText:cc.Label,
        password1Text:cc.Label,
        password2Text:cc.Label,
        signinBut:cc.Node,
    },


    onLoad () {
        U.soketInit();
        cc.log("onLoad!!!")
        this.bUtsignin="";
        this.signinBut.opacity = 75;
    },
  
    clickButton(err,bUtData){
        cc.log("clickButton bUtData = ",bUtData);
        
        if(bUtData =="signin"){
            cts.signInData.ID = this.ID.string;
            cts.signInData.password = this.password1.string;
            socketClient.cts(cts.signIn,cts.signInData);
            socketClient.stc(cts.signInIDData,function(data){
                let str = "注册";
                let srt1 = '';
                if(data==1){
                    srt1 = "成功!"
                }else if(data ==2){
                    srt1 = "失败!"
                }else{
                    srt1 = "出错!"
                }
                U.tongzhi(str+str1);
            })
        }else if(bUtData =="IDEBox"){
            this.bUtsignin = bUtData;
        }
        if(bUtData != "IDEBox"){
            if(this.ID.string && this.ID.string.length >= 6&&
            this.bUtsignin =="IDEBox"){
                this.bUtsignin = '';
                cts.signInIDData = this.ID.string;
                socketClient.cts(cts.signInIDData,cts.signInIDData)
                socketClient.stc(cts.signInIDData,function(data){
                    this.IDText.string = data;
                })
            }

        }
    },
    update (dt) {
        if(this.ID.string && this.ID.string.length < 6){
            this.IDText.string ="账号长度不能小于6";
            this.signinBut.opacity = 75;
        }else if(this.IDText.string==="账号长度不能小于6"){
            this.IDText.string = '';
        };
        if(this.password1.string && this.password1.string.length
        &&this.password1.string<6){
            this.password1Text.string = "密码长度不能小于6";
            this.signinBut.opacity = 75;
        }else if(this.password1Text.string == "密码长度不能小于6"){
            this.password1Text.string ="";
        };

        if(this.password2.string && this.password2.string.length
            &&this.password2.string<6){
            this.password2Text.string = "密码长度不能小于6";
            this.signinBut.opacity = 75;
        }else if(this.password2Text.string == "密码长度不能小于6"){
            this.password2Text.string ="";
        }
        if(this.password2.string&&this.password1.string){
            if(this.password2>=6&&this.password1>=6){
                if(this.password1.string!=this.password2.string){
                    this.password2Text.string = "密码必须一致!";
                    this.signinBut.opacity = 75;
                }else if(this.password2Text.string == "密码必须一致!"){
                    this.password2Text.string = "";
                }
                if(this.IDText.string =="可以使用此名称！"){
                    this.signinBut.opacity = 255;
                }
                
            }
        }
        
    },
});
