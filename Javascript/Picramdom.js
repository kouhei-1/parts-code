console.clear();
function picramdom(min , max){
  let n = Math.round(min+Math.random()*(max - min));
  return n;
}

console.log(picramdom(0,0));

/*
picramdom(<min値> , <max値>);
↑こちらのminとmaxに値を入れてmin~maxまでの整数がランダムに表示されます。


_____________
ex.
▶︎ picramdom(12,16)

▶︎ 13
_____________

そんな感じでできるからやってみやがれください
*/
