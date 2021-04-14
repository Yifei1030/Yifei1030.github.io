
function inputAnswer(){
 var response=prompt("请问小丽，小玲，小娟分别买了什么？请用空格分隔");
  if(response==="手套 裙子 发夹"){
    alert("难不住你啊，咋这么聪明呢！")
  }
  else{
    alert("不对哦，请重新填写答案。")
  }
}

function showTip1(){
  var x=document.getElementById("tip1");
  x.style.color = "red"

}

function showTip2(){
  var y=document.getElementById("tip2");
  y.style.color = "red"
  var z=document.getElementById("tip3");
  z.style.color = "red"
}
