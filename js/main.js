let remaining = 10;//残りの文字
//texta.addEventListener("keydown", (event) => {
texta.addEventListener("keyup", () => {//keydownとkeyupとkeypressの違いがわからない？？？？？？？？？？？？？？？？？？？？？？？？？？
  const texta = document.getElementById('texta');
  const count = document.getElementById('count');
  //テキストエリアに入った文字列を取得
  let val = texta.value;
  //文字列からエンター削除
  val = val.replace(/\s?/g, "");
  //残り文字数計算
  let co = remaining - val.length;
  //10文字を超えた場合赤文字にする
  if(co < 0){
    count.className = "cou";
    //残り文字が10文字以内の場合黒文字にする
  }else if(co >= 0){
    count.className = "";
  }
  count.textContent = `残り${co}文字`;
  });