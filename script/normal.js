//重设Android设备头部
function init(){
    var header = document.querySelector('header');
    $api.fixStatusBar(header);
    if (api.systemType == 'ios') {
        $api.fixIos7Bar(header);
    }
    $api.fixStatusBar(header);
    api.setStatusBarStyle({
        style: 'light'
    });
}

//返回上一页
function goback(){
    api.closeWin();
}

//打开子窗口
//attr -- 变成json字符串 {"name":"111","age":"111"}
function openChildWin(name,attr){
    var data = eval("("+attr+")");
    api.openWin({
        name: name,
        url: name + '.html',
        pageParam:data
    });
}

//拨打电话
function call(number){
    var tel = "10068"
    if(!!number){
        tel = number;
    }
    api.call({
        type: 'tel_prompt',
        number: tel
    });
}

//弹出底部导航
function shareShop(){
    api.actionSheet({
        title: '商店分享',
        cancelTitle: '取消',
        buttons: ['QQ', '微信', '微博']
    }, function(ret, err) {
        var index = ret.buttonIndex;
        alert("分享成功！");
    });
}
