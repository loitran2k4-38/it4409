/* ============================================================
   IT4409 - Landing page cá nhân
   JavaScript tăng cường trải nghiệm.
   Trang vẫn hiển thị và dùng được đầy đủ nếu trình duyệt tắt JS.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Tự động cập nhật năm ở footer ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- 2. Làm nổi bật mục đang xem trên thanh điều hướng ---------- */
  var navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
  var sections = [];

  navLinks.forEach(function (link) {
    var section = document.querySelector(link.getAttribute('href'));
    if (section) {
      sections.push({ link: link, section: section });
    }
  });

  if (sections.length === 0) return;

  // IntersectionObserver nhẹ hơn nhiều so với lắng nghe sự kiện scroll
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      var match = sections.find(function (item) {
        return item.section === entry.target;
      });
      if (!match) return;

      navLinks.forEach(function (l) { l.classList.remove('is-active'); });
      match.link.classList.add('is-active');
    });
  }, {
    // Chỉ tính là "đang xem" khi section nằm ở khoảng giữa màn hình
    rootMargin: '-45% 0px -50% 0px'
  });

  sections.forEach(function (item) {
    observer.observe(item.section);
  });

});
