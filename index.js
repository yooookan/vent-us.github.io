//  �ǂݍ��܂ꂽ�����s
jQuery(document).ready(function(){
    //  �A�X�y�N�g��ɂ��T�C�Y�̒���
   aspect_check();
});


//*****  �ȉ��֐�  *****//
//    �A�X�y�N�g��ɂ��T�C�Y�̒���
function aspect_check(){
    //  platform�̉�[px]
    var plat_width;
    //  �]��[px]
    var space = 50;
    //  platform �� �c����3:5 �̂���
    var h_ratio = (screen.height - 3*space)/3;
    var w_ratio = (screen.width - space)/5;
    console.log(h_ratio);
    console.log(w_ratio);
    //  �c�䗦�ɍ��킹�邩�A���䗦�ɍ��킹�邩
    if(h_ratio > w_ratio)
        plat_width = 5*w_ratio;
    else
        plat_width = 5*h_ratio;
        
    $("#main").css("width",plat_width+"px");

    var msg = "plat_width="+plat_width+"w_ratio"+w_ratio+"h_ratio"+h_ratio;
    console.log(msg);
}

