const socket = require('socket.io');
require("./cmddp");
const mypd = require("./mypd");

const app = socket('3000');
app.on('connection',function(socket){
    console.log('a user connection');
    socket.on(cts.hello,app.helloFun);
    socket.on(cts.signInID,app.signInIDFun);
    socket.on(cts.signIn,app.signInFun);
});

app.signInFun = function(data){
    mypd.checkPlayer(data,function(err,mcheckData){
        if(err){
            console.log("signInIDFun  err = "+JSON.stringify(err));
        }else{
            if(mcheckData.length){
                socket.emit(stc.signInData,"该用户已存在！");
            }else{
                //插入数据
                let PlayerData = {};
                PlayerData.ID = data.ID?data.ID:ID;
                PlayerData.passWord = data.passWord?data.passWord:passWord;
                PlayerData.UID = data.UID?data.UID:PlayerData.ID;
                PlayerData.nickName = data.nickName?data.nickName:"名称";
                PlayerData.gold = 100;
                PlayerData.baoShi = 0;
                mypd.insertPlayerInfo(data,function(err,insertData){
                    console.log("signInFun insertPlayerInfo= "+JSON.stringify(insertData));
                    socket.emit(stc.signInData,"注册成功！");
                });
            }
        }
    });

};
app.helloFun = function(data){
    let hello =  cts.helloData;
    hello=data;
    console.log(hello);
    socket.emit(stc.hello,"你好，client!!!");
};
app.signInIDFun = function(data){
    mypd.checkPlayer(data,function(err,mcheckData){
        if(err){
            console.log("signInIDFun  err = "+JSON.stringify(err));
        }else{
            if(mcheckData.length){
                socket.emit(stc.signInID,"该用户已存在！");
            }else{
                socket.emit(stc.signInID,"可以使用此名称！");
            }
        }
      
    })
};
console.log('listen on 3000');