function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const upRank = document.getElementById('app').querySelector('ul.ranked-list')
  for (i = 0; i < upRank.length; i++) {
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n)
  }
}

function deepestChild() {
  
}