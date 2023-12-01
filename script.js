var words = [
    "大叫", "r痕", "講（er)", "拍手", "講快", "答應", "企起身", "閉眼一秒", "串人", "舉中指", "遞野", "舉手", "講（係）", "講酒", "報時",
    "拒絕接觸", "講（開始）", "講（yeah)", "扁嘴", "拍枱", "指自己手機", "講（任何數字）", "答問題", "講（飲）", "un腳", "掂電話", "掂人地",
    "拍手", "講（冇）食野", "飲野", "講（醉）", "講英文", "歡呼"
  ];
  
  function selectRandomWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    var selectedWord = words[randomIndex];
    document.getElementById("selectedWord").textContent = selectedWord;
  }