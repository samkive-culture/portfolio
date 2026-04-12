// Scroll effect 상단 바 계속 잘 보이게
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal 스크롤 하면서 내용 띄우기
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 화면에 나타날 때 띄우기
      entry.target.classList.add('visible');
    } else {
      // 화면에서 사라지면 제거하기
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));