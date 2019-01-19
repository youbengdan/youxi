cts = {
    hello : 1000,
    helloData :"",
    login :1001,
    loginData : {ID :'',passWord :''},
    signIn : 1002,
    signInData :{ID :'',passWord :''},
    forgetPassWord : 1003,
    forgetPassWordData :{ID :'',passWord :''},
    signInID :1004,       //查看id是否存在
    signInIDData:"",

};
stc = {
    hello : 1000,
    helloData :"",
    login :1001,
    loginData : {ID :'',passWord :'',UID :'',nickName : '',
        headUrl : '',gold : 0,baoShi : 0,},
    signIn : 1002,
    signInData :{num:0}, //1成功，2失败，3出错
    forgetPassWord : 1003,
    forgetPassWordData :{num:0},//1成功，2失败，3出错
    signInID :1004,
    signInIDData:"",
};