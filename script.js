const week = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];


// const links = [
//   ["국어(허)", "zoommtg://zoom.us/join?action=join&confno=5377141697&pwd=dimigo"],
//   ["수학(류)", "zoommtg://zoom.us/join?action=join&confno=6838770867&pwd=dimigo"],
//   ["수학(김)", "https://teams.microsoft.com/l/team/19%3a3bc99faef2654410ba199d1d143b200c%40thread.tacv2/conversations?groupId=5eb418d5-652a-473d-b11d-6981e06a2203&tenantId=b6d94080-6cb3-403b-8a0f-5c44c2448089"],
//   ["영어(양)", "zoommtg://zoom.us/join?action=join&confno=7654919677&pwd=dimigo"],
//   ["진로(공)", "zoommtg://zoom.us/join?action=join&confno=4700404365&pwd=dimigo"],
//   ["사회(이)", "https://bit.ly/34rBBfM"],
//   ["한국사(박)", "zoommtg://zoom.us/join?action=join&confno=3955689232&pwd=dimigo"],
//   ["과학(김)", "zoommtg://zoom.us/join?action=join&confno=4361766687&pwd=dimigo"],
//   ["체육(김)", "zoommtg://zoom.us/join?action=join&confno=7760965125&pwd=dimigo"],
//   ["진로(상)", "zoommtg://zoom.us/join?action=join&confno=3490119479&pwd=dimigo"],
//   ["미술(전)", "zoommtg://zoom.us/join?action=join&confno=5135798594&pwd=dimigo"],
//   ["음악(이)", "https://bit.ly/34rBBfM"],
//   ["진로(택)", "https://bit.ly/34rBBfM"],
//   ["상경(김)", "zoommtg://zoom.us/join?action=join&confno=8402132429&pwd=dimigo"],
//   ["플밍(김)", "zoommtg://zoom.us/join?action=join&confno=6471668401&pwd=dimigo"],
//   ["IOT(하)", "https://whaleon.naver.com/on/2107509260?p=a6b7b5615aa04084b50f67ca1316a8f7"],
//   ["컴일(조)", "zoommtg://zoom.us/join?action=join&confno=3650046422&pwd=dimigo"],
//   ["진로(오)", "zoommtg://zoom.us/join?action=join&confno=3853069417&pwd=dimigo"],
//   ["정통(박)", "zoommtg://zoom.us/join?action=join&confno=3335559622&pwd=dimigo"],
//   ["빅데(하)", "https://whaleon.naver.com/on/2107509260?p=a6b7b5615aa04084b50f67ca1316a8f7"],

//   ["영어(이)", "zoommtg://zoom.us/join?action=join&confno=7126847915&pwd=dimigo"],
//   ["마광(정)", "zoommtg://zoom.us/join?action=join&confno=3154650453&pwd=dimigo"],
//   ["중국어(정)", "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo"],
//   ["진로(정)", "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo"],
//   ["한국사(박)", "zoommtg://zoom.us/join?action=join&confno=3955689232&pwd=dimigo"],
//   ["공수(이)", "zoommtg://zoom.us/join?action=join&confno=8792076928&pwd=dimigo"],
//   ["수학(이)", "zoommtg://zoom.us/join?action=join&confno=8792076928&pwd=dimigo"],
//   ["문학(김)", "zoommtg://zoom.us/join?action=join&confno=7054578862&pwd=dimigo"],
//   ["정처(이)", "zoommtg://zoom.us/join?action=join&confno=5363759347&pwd=dimigo"],
//   ["플밍(임)", "zoommtg://zoom.us/join?action=join&confno=4679526373&pwd=py2020"],
//   ["수학(장)", "zoommtg://zoom.us/join?action=join&confno=7965443330&pwd=dimigo"],
//   ["진로(전)", "zoommtg://zoom.us/join?action=join&confno=5135798594&pwd=dimigo"],
//   ["정보관(이)", "zoommtg://zoom.us/join?action=join&confno=9044839453&pwd=dimigo"],
//   ["성직(이)", "zoommtg://zoom.us/join?action=join&confno=9044839453&pwd=dimigo"],
//   ["광고(정)", "zoommtg://zoom.us/join?action=join&confno=97538693028&pwd=dimigo"],
//   ["운동(이)", "zoommtg://zoom.us/join?action=join&confno=3490119479&pwd=dimigo"],
//   ["응화(마)", "zoommtg://zoom.us/join?action=join&confno=2121961647&pwd=dimigo"],
//   ["회계(최)", "zoommtg://zoom.us/join?action=join&confno=5379758850&pwd=dimigo"],
//   ["물리(전)", "zoommtg://zoom.us/join?action=join&confno=2693268647&pwd=dimigo"],
// ];



const links = {
  월요일: [
    "zoommtg://zoom.us/join?action=join&confno=3154650453&pwd=dimigo",//마케팅
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//중국어
    "index.html",//음콘
    "zoommtg://zoom.us/join?action=join&confno=8792076928&pwd=dimigo",//수학
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//진로
    "zoommtg://zoom.us/join?action=join&confno=7054578862&pwd=dimigo",//문학
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//HR
  ],
  화요일: [
    "zoommtg://zoom.us/join?action=join&confno=8179896337&pwd=dimigo",//광콘
    "zoommtg://zoom.us/join?action=join&confno=8179896337&pwd=dimigo",//광콘
    "zoommtg://zoom.us/join?action=join&confno=3490119479&pwd=dimigo",//체육
    "zoommtg://zoom.us/join?action=join&confno=3154650453&pwd=dimigo",//마케팅
    "zoommtg://zoom.us/join?action=join&confno=7126847915&pwd=dimigo",//영어
    "zoommtg://zoom.us/join?action=join&confno=8792076928&pwd=dimigo",//수학
    "index.html",//음콘
  ],
  금요일: [
   "zoommtg://zoom.us/join?action=join&confno=3154650453&pwd=dimigo",//마케팅
   "index.html", //음콘
   "zoommtg://zoom.us/join?action=join&confno=5379758850&pwd=dimigo",// 회계
   "zoommtg://zoom.us/join?action=join&confno=5379758850&pwd=dimigo",// 회계
   "zoommtg://zoom.us/join?action=join&confno=8792076928&pwd=dimigo",// 수학
   "", //CA
   ""],
  목요일: [
    "zoommtg://zoom.us/join?action=join&confno=8179896337&pwd=dimigo",//광콘
    "zoommtg://zoom.us/join?action=join&confno=8179896337&pwd=dimigo",//광콘
    "zoommtg://zoom.us/join?action=join&confno=7054578862&pwd=dimigo",//문학
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//중국어
    "zoommtg://zoom.us/join?action=join&confno=7126847915&pwd=dimigo",//영어
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//진로
    "zoommtg://zoom.us/join?action=join&confno=3490119479&pwd=dimigo",//체육
  ],
  수요일: [
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//중국어
    "zoommtg://zoom.us/join?action=join&confno=7054578862&pwd=dimigo",//문학
    "zoommtg://zoom.us/join?action=join&confno=5379758850&pwd=dimigo",//회계
    "zoommtg://zoom.us/join?action=join&confno=5379758850&pwd=dimigo",//회계
    "index.html",//음콘
    "zoommtg://zoom.us/join?action=join&confno=3154650453&pwd=dimigo",//마케팅
    "zoommtg://zoom.us/join?action=join&confno=7126847915&pwd=dimigo",//영어 
  ],
  토요일: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  일요일: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
};

const otherLinks = {
  월요일: [
    "zoommtg://zoom.us/join?action=join&confno=3154650453&pwd=dimigo",//마케팅
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//중국어
    "zoommtg://zoom.us/join?action=join&confno=4679526373&pwd=py2020",//플밍
    "zoommtg://zoom.us/join?action=join&confno=8792076928&pwd=dimigo",//수학
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//진로
    "zoommtg://zoom.us/join?action=join&confno=7054578862&pwd=dimigo",//문학
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//HR
  ],
  화요일: [
    "zoommtg://zoom.us/join?action=join&confno=5363759347&pwd=dimigo", //정보처리
    "zoommtg://zoom.us/join?action=join&confno=5363759347&pwd=dimigo", //정보처리
    "zoommtg://zoom.us/join?action=join&confno=3490119479&pwd=dimigo",//체육
    "zoommtg://zoom.us/join?action=join&confno=3154650453&pwd=dimigo",//마케팅
    "zoommtg://zoom.us/join?action=join&confno=7126847915&pwd=dimigo",//영어
    "zoommtg://zoom.us/join?action=join&confno=8792076928&pwd=dimigo",//수학
    "zoommtg://zoom.us/join?action=join&confno=4679526373&pwd=py2020",//플밍
  ],

  금요일: ["zoommtg://zoom.us/join?action=join&confno=3154650453&pwd=dimigo",//마케팅
   "zoommtg://zoom.us/join?action=join&confno=4679526373&pwd=py2020", //플밍
   "zoommtg://zoom.us/join?action=join&confno=5379758850&pwd=dimigo", //회계
   "zoommtg://zoom.us/join?action=join&confno=5379758850&pwd=dimigo", //회계
   "zoommtg://zoom.us/join?action=join&confno=8792076928&pwd=dimigo", //수학
   "index.html", //CA
   "index.html" //수업없음
  ],
  목요일: [
    "zoommtg://zoom.us/join?action=join&confno=5363759347&pwd=dimigo",//정보처리
    "zoommtg://zoom.us/join?action=join&confno=5363759347&pwd=dimigo",//정보처리
    "zoommtg://zoom.us/join?action=join&confno=7054578862&pwd=dimigo",//문학
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//중국어
    "zoommtg://zoom.us/join?action=join&confno=7126847915&pwd=dimigo",//영어
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//진로
    "zoommtg://zoom.us/join?action=join&confno=3490119479&pwd=dimigo",//체육
  ],
  수요일: [
    "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo",//중국어
    "zoommtg://zoom.us/join?action=join&confno=7054578862&pwd=dimigo",//문학
    "zoommtg://zoom.us/join?action=join&confno=5379758850&pwd=dimigo",//회계
    "zoommtg://zoom.us/join?action=join&confno=5379758850&pwd=dimigo",//회계
    "zoommtg://zoom.us/join?action=join&confno=4679526373&pwd=py2020",//플밍
    "zoommtg://zoom.us/join?action=join&confno=3154650453&pwd=dimigo",//마케팅
    "zoommtg://zoom.us/join?action=join&confno=7126847915&pwd=dimigo",//영어
  ],

  토요일: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  일요일: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
};

//요일
const dayName = ["일", "월", "화", "수", "목", "금", "토"];

function getTodayLabel() {
  const today = new Date().getDay();
  const todayLabel = week[today];

  return todayLabel;
}

let date = getTodayLabel();

const titleDom = document.getElementById("title_Day");

function setInnerHTML() {
  for (let i = 0; i < week.length; i++) {
      if (date === week[i]) {
      titleDom.innerHTML = dayName[i];
      break;
    }
  }
};


const timeTable={
  월요일: ["마케팅", "중국어", "음콘", "수학", "진로", "문학", "HR"],
  화요일: ["광콘", "광콘", "체육", "수학", "마케팅", "영어", "음콘"],
  금요일: ["마케팅", "음콘", "회계", "회계", "수학", "CA", "자습"],
  목요일: ["광콘", "광콘", "문학", "중국어", "영어", "진로", "체육"],
  수요일: ["중국어", "문학", "회계", "회계", "음콘", "마케팅", "영어"],
  토요일: ["자습", "자습", "자습", "자습", "자습", "자습", "자습"],
  일요일: ["자습", "자습", "자습", "자습", "자습", "자습", "자습"]
};

const otherTimeTable={
  월요일: ["마케팅", "중국어", "플밍", "수학", "진로", "문학", "HR"],
  화요일: ["정처", "정처", "체육", "마케팅", "영어", "수학", "플밍"],
  금요일: ["마케팅", "플밍", "회계", "회계", "수학", "CA", "자습"],
  목요일: ["정처", "정처", "문학", "중국어", "영어", "진로", "체육"],
  수요일: ["중국어", "문학", "회계", "회계", "플밍", "마케팅", "영어"],
  토요일: ["자습", "자습", "자습", "자습", "자습", "자습", "자습"],
  일요일: ["자습", "자습", "자습", "자습", "자습", "자습", "자습"]
};

let status = true;

//main
function otherSubjects(y) {
  if (status) {
    console.log("광고콘텐츠 음악콘텐츠");
    status = false;
    document.querySelector('#change').value = '광고콘텐츠 음악콘텐츠';
    for (let i = 0; i < 7; i++) {
      let y = getTodayLabel();
      let x = document.getElementsByClassName("h")[i];
      console.log(y);
      x.innerHTML = `<a class="h_1" href="${links[y][i]}">${timeTable[y][i]}</a>`;
    }
  }  else {
    console.log("정보처리 프로그래밍");
    status = true;
    for (let i = 0; i < 7; i++) {
      let y = getTodayLabel();
      let x = document.getElementsByClassName("h")[i];//i는 1교시 ~ 7교시
      console.log(y);
      x.innerHTML = `<a class="h_1" href="${otherLinks[y][i]}">${otherTimeTable[y][i]}</a>`;
      } 
      document.querySelector('#change').value = "정보처리 프로그래밍";
  }
};
// 시계
var clockTarget = document.getElementById("clock");

function clock() {
    var date = new Date();
    var month = date.getMonth();
    var clockDate = date.getDate();
    var day = date.getDay();
    var weeks = ['일', '월', '화', '수', '목', '금', '토'];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    clockTarget .innerText = `${month+1}월 ${clockDate}일 ${weeks[day]}요일 ` +

    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
    
  }

function init() {
clock();
setInterval(clock, 1000);
}

// 시계 끝
// function backTick(){
//   if (document.querySelector('#change').value === "정보처리 프로그래밍")
// };


setInterval (
  function nowClass () {
    today = new Date();
      c_hour = today.getHours();
      c_min = today.getMinutes();
      let x = c_hour
      let y = c_min
      if ((x >= 8 && y >= 45) && (x < 9)){
        { for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
          let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
          console.log(document.getElementsByClassName("nowClass"), i);
            x.innerText = "지금은 조회시간"
            return;
          }
        }
      } else if ((x >= 9) && (x <= 9 && y <=50)){
        for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
          let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
          console.log(document.getElementsByClassName("nowClass"), i);
            x.innerHTML = `지금은 ${status ? otherTimeTable[y][0] : timeTable[y][0]}시간`;
          return;        
        } 
      } else if ((x >= 10) && (x <= 10 && y < 50)){
          for (let i = 0; i < 7; i++){
            let y = getTodayLabel();
            let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
            console.log(document.getElementsByClassName("nowClass"), i);
              x.innerHTML = `지금은 ${status ? otherTimeTable[y][1] : timeTable[y][1]}시간`;
            return;        
          }
      } else if ((x >= 11) && (x <= 11 && y < 50)){
          for (let i = 0; i < 7; i++){
            let y = getTodayLabel();
            let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
            console.log(document.getElementsByClassName("nowClass"), i);
              x.innerHTML = `지금은 ${status ? otherTimeTable[y][2] : timeTable[y][2]}시간`;
            return;
          }
      } else if ((x >= 12) && (x <= 12 && y < 50)){
          for (let i = 0; i < 7; i++){
            let y = getTodayLabel();
            let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
            console.log(document.getElementsByClassName("nowClass"), i);
              x.innerHTML = `지금은 ${status ? otherTimeTable[y][3] : timeTable[y][3]}시간`;
            return;
          }
      } else if ((x >= 22 && y >= 50)||(x >= 23 && y >= 00)){
        if ((x <= 6 && y <= 35)||(x <= 24 && y <= 59)){
          for (let i = 0; i < 7; i++){
            let y = getTodayLabel();
            let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
            console.log(document.getElementsByClassName("nowClass"), i);
              x.innerText = "Good Night."
            return;
          }
        }
    } else if ((x >= 19 && y >= 50)||(x >= 20 && y >= 00)){
      if ((x <= 22 && y < 50)||(x <= 19 && y <= 59)){
        for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
          let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
          console.log(document.getElementsByClassName("nowClass"), i);
            x.innerText = "지금은 야자시간"
          return;
        }
      }
  } else if ((x >= 18 && y >= 35)||(x >= 19 && y >= 00)){
    if ((x <= 19 && y <= 50)||(x <= 18 && y <= 59)){
      for (let i = 0; i < 7; i++){
        let y = getTodayLabel();
        let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
        console.log(document.getElementsByClassName("nowClass"), i);
          x.innerText = "지금은 저녁시간"
        return;        
      }
    }
  }  else if ((x >= 17 && y >= 10)||(x >= 18 && y >= 00)){
    if ((x <= 18 && y < 35)||(x <= 17 && y <= 59)){
      for (let i = 0; i < 7; i++){
        let y = getTodayLabel();
        let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
        console.log(document.getElementsByClassName("nowClass"), i);
          x.innerText = "지금은 방과후시간"
        return;        
      }
    }
  } else if ((x >= 16 && y > 40)||(x >= 17 && y >= 00)){
    if ((x <= 17 && y < 10)||(x <= 16 && y <= 59)){
        for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
          let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
          console.log(document.getElementsByClassName("nowClass"), i);
            x.innerText = "지금은 종례시간"
          return;        
        }
    }
  } else if ((x >= 15 && y >= 50)||(x >= 16 && y >= 00)){
        if ((x <= 16 && y <= 40)||(x <= 15 && y <= 59)){
          for (let i = 0; i < 7; i++){
            let y = getTodayLabel();
            let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
            console.log(document.getElementsByClassName("nowClass"), i);
              x.innerHTML = `지금은 ${status ? otherTimeTable[y][6] : timeTable[y][6]}시간`;
            return;        
          }
        }
    } else if ((x >= 14 && y >= 50)||(x >= 15 && y >= 00)){
      if ((x <= 15 && y <= 40)||(x <= 14 && y <= 59)){
        for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
          let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
          console.log(document.getElementsByClassName("nowClass"), i);
            x.innerHTML = `지금은 ${status ? otherTimeTable[y][5] : timeTable[y][5]}시간`;
          // window.open(
          //     `"zoommtg://zoom.us/join?action=join&confno=${otherLinks[y][5]}"`,"newWin")
            return;
        }
      }
    } else if ((x >= 13 && y >= 50)||(x >= 14 && y >= 00)){
      if ((x <= 14 && y <= 40)||(x <= 13 && y <= 59)){
        for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
          let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
          console.log(document.getElementsByClassName("nowClass"), i);
            x.innerHTML = `지금은 ${status ? otherTimeTable[y][4] : timeTable[y][4]}시간`;
          return;        
        }
      }
  } else if ((x >= 12 && y >= 50)||(x >= 13 && y >= 00)){
        if ((x <= 13 && y < 50)||(x <= 12 && y <= 59)){
            for (let i = 0; i < 7; i++){
              let y = getTodayLabel();
              let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
              console.log(document.getElementsByClassName("nowClass"), i);
                x.innerText = "지금은 점심시간"
              return;        
            }
          }
        } else if ((x >= 00 && y >= 00) && (x <= 6 && y <= 35)){
            for (let i = 0; i < 7; i++){
              let y = getTodayLabel();
              let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
              console.log(document.getElementsByClassName("nowClass"), i);
                x.innerText = "Good Night."
              return;
          }
      } else {
        for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
          let x = document.getElementsByClassName("nowClass")[i]; //i는 1교시 ~ 7교시
          console.log(document.getElementsByClassName("nowClass"), i);
            x.innerText = "지금은 쉬는 시간"
          return;
        }
    }
  }, 1000);


setInterval(
function openLinks(){
  today = new Date();
  c_hour = today.getHours();
  c_min = today.getMinutes();
  let x = c_hour
  let y = c_min   
    if ((x >= 8 && y >= 43) && (x <= 8 && y <=43)){
      console.log("조회");
      { 
              window.open(
              "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo","newWin") //조회
      }
    } else if ((x >= 8 && y>=55) && (x <= 8 && y <=55)){
      console.log("1교시");
      for (let i = 0; i < 7; i++){
        let y = getTodayLabel();
              window.open(
              `${status ? otherLinks[y][0] : links[y][0]}`,"newWin") //1교시
          }
    } else if ((x >= 9 && y>=55) && (x <= 9 && y <=55)){
      console.log("2교시");
      for (let i = 0; i < 7; i++){
        let y = getTodayLabel();
              window.open(
              `${status ? otherLinks[y][1] : links[y][1]}`,"newWin") //2교시
          }
    } else if ((x >= 10 && y>=55) && (x <= 10 && y <=55)){
      console.log("3교시");
        for (let i = 0; i < 7; i++){
        let y = getTodayLabel();
              window.open(
              `${status ? otherLinks[y][2] : links[y][2]}`,"newWin")//3교시
          }
    } else if ((x >= 11 && y>=55) && (x <= 11 && y<= 55)){
      console.log("4교시");
      for (let i = 0; i < 7; i++){
        let y = getTodayLabel();
              window.open(
              `${status ? otherLinks[y][3] : links[y][3]}`,"newWin") //4교시
              }
  }  else if ((x >= 16 && y >= 40) && (x <= 16 && y <= 40)){
    console.log("종례");
              window.open(
              "zoommtg://zoom.us/join?action=join&confno=7722593481&pwd=dimigo","newWin")//종례
} else if ((x >= 15 && y >= 45) && (x <= 15 && y <= 45)){
  console.log("7교시");
        for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
                window.open(
                `${status ? otherLinks[y][6] : links[y][6]}`,"newWin")//7교시
      }
  } else if ((x >= 14 && y >= 45) && (x <= 14&& y <= 45)){
    console.log("6교시");
        for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
                window.open(
                `${status ? otherLinks[y][5] : links[y][5]}`,"newWin")//6교시
    }
  } else if ((x >= 13 && y >= 45) && (x <= 13 && y <= 45)){
    console.log("5교시");
        for (let i = 0; i < 7; i++){
          let y = getTodayLabel();
                window.open(
                `${status ? otherLinks[y][4] : links[y][4]}`,"newWin")//5교시
    }
  }
},59999);


init();
otherSubjects();
setInnerHTML();