var Quest = new Array(10);  //this sets up an array for all of the answers that are given

function populate() {
// alert("function populate started");
// this function gives each of the answers 0 points so if someone doesn't answer a question
// the whole thing will continue to work
  for(var i=0; i<10; i++) { Quest[i]=0; }
}

function total() {
// alert("function total started");
// this function adds the number of points each answer is worth together
  myScore=0;
  for (var i=0; i<10; i++) { myScore=myScore+Quest[i]; }
  analyzer(myScore);
}

myContents = new Array();
  myContents[0] = "<h3>당신은 헬아기입니다!</h3><br><div>이제 막 헬스에 눈을 뜬 당신, 운동에 흥미를 느끼기 시작했지만 야식과 술자리의 유혹에 손쉽게 넘어가버리네요. 변해가는 몸을 보며 점차 헬스의 매력을 느끼게 될 것입니다!</div>";
  myContents[1] = "<h3>당신은 헬린이입니다!</h3><br><div>지금처럼 하루하루 운동을 하다보면 어느새 헬창이 되어버린 본인을 발견하실 수 있겠네요!</div>";
  myContents[2] = "<h3>당신은 헬창입니다!</h3><br><div>그 무엇보다 근손실이 두려운 당신, 이미 뇌까지 근육으로 가득합니다. 일상생활 가능하신지요?</div> ";



  // function analyzer (myScore) {
  // // this function uses the total calculated score to figure out which personality type they are
  //   if (myScore> 24)            { myContentsPtr = 2; } //6
  //     else { if (myScore > 9) { myContentsPtr = 1; } //5
  //     else                     { myContentsPtr = 0; } //4
  //       }
  //   myDisplay(myContents[myContentsPtr])
  // }
  function analyzer (myScore) {
  // this function uses the total calculated score to figure out which personality type they are
    if (myScore>24)            { myContentsPtr = 2;
    }  else  if(myScore>9)     { myContentsPtr = 1;
    }  else                    { myContentsPtr = 0;
          }

    myDisplay(myContents[myContentsPtr]);
  }



function myDisplay(myContents) {
//This function will open a new window and show the results calculated
// alert(myContents); **use alert for testing only**.
document.getElementById("result").innerHTML = (myContents);
}

function saver(q, points) {
// this function puts the points that each answer is worth into the array
  q=q-1;
  Quest[q]=points
}
