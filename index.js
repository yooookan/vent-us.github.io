//  読み込まれた時実行
jQuery(document).ready(function(){
    //  アスペクト比によるサイズの調整
   aspect_check();
});


//*****  以下関数  *****//
//    アスペクト比によるサイズの調整
function aspect_check(){
    //  platformの横[px]
    var plat_width;
    //  余白[px]
    var space = 50;
    //  platform が 縦横比3:5 のため
    var h_ratio = (screen.height - 3*space)/3;
    var w_ratio = (screen.width - space)/5;
    console.log(h_ratio);
    console.log(w_ratio);
    //  縦比率に合わせるか、横比率に合わせるか
    if(h_ratio > w_ratio)
        plat_width = 5*w_ratio;
    else
        plat_width = 5*h_ratio;
        
    $("#main").css("width",plat_width+"px");

    var msg = "plat_width="+plat_width+"w_ratio"+w_ratio+"h_ratio"+h_ratio;
    console.log(msg);
}

