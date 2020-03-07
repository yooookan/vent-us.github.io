var newarrive =
    [["uQdN-PQq1Ac/0.jpg","Processing紹介"],["JGZdshcgZwY/0.jpg","Bandicam紹介"],["K8n9qjZsWaU/0.jpg","キネクト+MMM"],["04tbHlEoq1g/0.jpg","ニューラルネットワークを使ってみよう　第一回"],["9aQuTXokgDc/0.jpg","初めてのストアアプリ 1"],["JqWswbv0kBE/0.jpg","初めてのストアアプリ 2"],["vzWIiwU6KS0/0.jpg","初めてのストアアプリ 3"]];


window.onload = function (){

    sumnail();
    //mouseMoveListner(0);
   
}

function sumnail(){
    
//      var span = document.createElement('span');
//        span.innerHTML = ['<h1>新着動画</h1>'].join('');
//        document.getElementById('thumbnail').insertBefore(span,null);  
    
     for(var i=0;i<newarrive.length;i++){
        var span = document.createElement('span');
        span.innerHTML = 
            ['<div id="newarrive" style="position: relative;" ><a href="artwork/newarrive_',i,'.html"><img  src="http://img.youtube.com/vi/',newarrive[i][0],'" width="320" height="240" alt="サムネがないよ" class="overblack" /><div class="font" style="position:absolute; top:35px; left:5px; width:295px;">',newarrive[i][1],'</div></a></div>'].join('');
        document.getElementById('thumbnail').insertBefore(span,null);  
    }

    
//    var span = document.createElement('span');
//        span.innerHTML = ['<h1>動画一覧</h1>'].join('');
//        document.getElementById('thumbnail').insertBefore(span,null);  
    
    
//     for(var i=0;i<youtube.length;i++){
//        var span = document.createElement('span');
//        span.innerHTML = 
//            ['<div id="youtube" style="position: relative;" ><a href="artwork/artwork_',i,'.html"><img ommousemove="mouseMoveListner(',i,')" src="http://img.youtube.com/vi/',youtube[i][0],'" width="200" height="200" alt="サムネがないよ" class="overblack" /><div class="font" style="position:absolute; top:35px; left:5px; width:195px;">',youtube[i][1],'</div></a></div>'].join('');
//        document.getElementById('thumbnail').insertBefore(span,null);  
//    }
    
}



//'<img class="thumb" src="', e.target.result,
//                            '" title="', escape(theFile.name), '"/>  
//"http://img.youtube.com/vi/Mi9uNu35Gmk/0.jpg"
//onmousemove =function(){<FONT style="color : #ffffff ; background-color : #995511 ;" >オオイヌノフグリ</FONT> };
/*
<iframe width="640" height="360" src="//www.youtube.com/embed/m3JAtvsqfF8?feature=player_embedded" frameborder="0" allowfullscreen></iframe>
http://www.youtube.com/watch?feature=player_embedded&v=m3JAtvsqfF8
*/