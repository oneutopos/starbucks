
////유튜브
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api"; //유튜브 영상을 재생할 수 있는 명령이 있는 js파일을 가져옴
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); //firstScriptTag 요소 전에 tag 요소를 삽입

function onYouTubeIframeAPIReady() {  //ifraim_api의 api
  new YT.Player('player', {  //id 속성의 값. 앞에 # 넣으면 안됨 !
    videoId: 'An6LvWQuj_8',  //최초 재생할 유튜브 영상 ID
    playerVars:{             //영상을 제어하기 위한 변수들. 객체데이터로 설정
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
    },
    events:{
      onReady: function(event){
        event.target.mute()   //음소거
      }
    }
  });
}
