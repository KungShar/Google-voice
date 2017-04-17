/**
 * For Google Voice
 * @Author zbinlin <zbinlin@outlook.com>
 */
var sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

var composeClick = function x(btn) {
  var rect = btn.getBoundingClientRect();
  var x = Math.floor(rect.clientX + rect.width * Math.random());
  var y = Math.floor(rect.clientY + rect.height * Math.random());
  var screenX = Math.floor(x + window.screen.availLeft);
  var screenY = Math.floor(y + window.screen.availTop);
  const mousedown = new MouseEvent("mousedown", {
    screenX: screenX,
    screenY: screenY,
    clientX: x,
    clientY: y,
  });
  const click = new MouseEvent("click", {
    screenX: screenX,
    screenY: screenY,
    clientX: x,
    clientY: y,
  });
  const mouseup = new MouseEvent("mouseup", {
    screenX: screenX,
    screenY: screenY,
    clientX: x,
    clientY: y,
  });
  btn.dispatchEvent(mousedown);
  return sleep(150 + Math.random() * 30)
    .then(() => {
      btn.dispatchEvent(click);
      return sleep(30 + Math.random() * 30);
    }).then(() => {
      btn.dispatchEvent(mouseup);
    });
}

function task() {
  var btn = document.querySelector(".continueButton");
  if (!btn) {
    alert("Finish");
    return;
  }
  composeClick(btn)
    .then(() => {
      // 在此调整点击时间间隔
      return sleep(500 + Math.random() * 3000);
    })
    .then(() => {
      task();
    });
}
task();
