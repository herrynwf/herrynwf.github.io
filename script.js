var words = [
    "大叫", "r痕", "講er", "拍手", "講快", "答應", "企起身", "閉眼多於一秒", "串人", "舉手指", "遞野", "舉手", "講係", "講酒", "報時",
    "拒絕接觸", "講開始", "講yeah", "扁嘴", "掂枱", "掂手機", "講(數字)", "答問題", "講飲", "un腳", "掂電話", "掂人地",
    "拍手", "講食野", "飲野", "講醉", "講(英文)", "歡呼", "講喂", "手掂臉", "翹手","講飲"
  ];

  var preInd=-1;
  
  function selectRandomWord() {
    var randomIndex;
    do{
      randomIndex= Math.floor(Math.random() * words.length);
    } while(randomIndex===preInd);
    preInd=randomIndex
    var selectedWord = words[randomIndex];
    document.getElementById("selectedWord").textContent = selectedWord;
  }

 function toggle(){
  document.body.classList.toggle("darkM");
 }