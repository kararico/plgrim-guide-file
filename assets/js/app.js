var _w;
var _htmlBody;
var _navTarget;
var _btnArrowTop;
var _btnCopy;

function create() {
  _w = $(window);
  _htmlBody = $("html, body");
  _navTarget = $(".nav-list").find("li");
  _btnArrowTop = $(".js-btn-scrollMove");
  _btnCopy = $(".js-btnClickCopy");
}

function addEvent() {
  headerTargetCheck();
  scrollEvent(null);
  _w.on("scroll", scrollEvent);
  _btnArrowTop.on("click", btnArrowTopClick);
  _btnCopy.on("click", btnCopyClick);
}

function headerTargetCheck() {
  var urlArr = [];
  var pahtName = _w[0].location.pathname.split("/")[1].split(".")[0];
  for (var i = 0; i < $(".nav-list").find("li").length; i++) {
    var gnbLinkValue = $(".nav-list")
      .find("li")
      .eq(i)
      .find("a")[0]
      .href.split("/")[3]
      .split(".")[0];
    urlArr.push(gnbLinkValue);
  }

  var indexPath = urlArr.lastIndexOf(pahtName);
  $(".nav-list").find("li").eq(indexPath).addClass("on");
}

function scrollEvent() {
  var sT = $(this).scrollTop();
  if (sT > 0) {
    _btnArrowTop.css("opacity", 1);
  } else {
    _btnArrowTop.css("opacity", 0);
  }
}

function btnArrowTopClick() {
  _htmlBody.animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
}

function btnCopyClick() {
  var htmlTag = document.querySelector(".language-xml").textContent;
  var textarea = document.createElement("textarea");
  textarea.textContent = htmlTag;
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("텍스트 복사완료");
}

$(document).ready(function () {
  create();
  addEvent();
});
