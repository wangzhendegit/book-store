/**
 * Created by cff on 2017/12/11.
 */

//移动端适配处理
setRem();
window.addEventListener('orientationchange',setRem);
window.addEventListener('resize',setRem);
function setRem() {
  var html = document.querySelector('html');
  var width = html.getBoundingClientRect().width;
  if (width > 414){
    width = 414;
  }
  html.style.fontSize = width/16 + 'px';
}




