let likeCount1 = 10019;
let likeBtn1 = document.querySelector('[data-name="heartbeat1"]');

likeBtn1.addEventListener('click', function() {
  if (likeBtn1.classList.contains('liked')) {
    likeCount1--;
    likeBtn1.classList.remove('liked');
  } else {
    likeCount1++;
    likeBtn1.classList.add('liked');
  }
  document.querySelector('#like-count-1').textContent = likeCount1;

  // 아이콘 클래스 추가/제거
  if (likeBtn1.classList.contains('liked')) {
    likeBtn1.classList.add('on');
  } else {
    likeBtn1.classList.remove('on');
  }
});

let likeCount2 = 7236;
let likeBtn2 = document.querySelector('[data-name="heartbeat2"]');
likeBtn2.addEventListener('click', function() {
  if (likeBtn2.classList.contains('liked')) {
    likeCount2--;
    likeBtn2.classList.remove('liked');
  } else {
    likeCount2++;
    likeBtn2.classList.add('liked');
  }
  document.querySelector('#like-count-2').textContent = likeCount2;

  // 아이콘 클래스 추가/제거
  if (likeBtn2.classList.contains('liked')) {
    likeBtn2.classList.add('on');
  } else {
    likeBtn2.classList.remove('on');
  }
});


let bookmarkBtn1 = document.querySelector('[data-name="bookmark1"]');

bookmarkBtn1.addEventListener('click', function() {
  if (bookmarkBtn1.classList.contains('clicked')) {
    bookmarkBtn1.classList.remove('clicked', 'on');
  } else {
    bookmarkBtn1.classList.add('clicked', 'on');
  }
});

let bookmarkBtn2 = document.querySelector('[data-name="bookmark2"]');

bookmarkBtn2.addEventListener('click', function() {
  if (bookmarkBtn2.classList.contains('clicked')) {
    bookmarkBtn2.classList.remove('clicked', 'on');
  } else {
    bookmarkBtn2.classList.add('clicked', 'on');
  }
});
