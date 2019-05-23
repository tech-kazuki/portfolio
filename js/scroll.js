window.addEventListener('load', scroll);

function scroll() {
  const linkBtns = document.getElementsByClassName("link_list");
  const titles = document.getElementsByClassName('title');

  function pageScroll(num) {
    return function() {
      titles[num].scrollIntoView();
    }
  };
  
  for (var i = 0; i < titles.length; i++){
    linkBtns[i].addEventListener('click', pageScroll(i), false);
  };
}
