# IT4409 - Công nghệ Web và Dịch vụ trực tuyến

Bài tập và project môn IT4409 - Trường Công nghệ Thông tin và Truyền thông, Đại học Bách khoa Hà Nội.

## Landing page cá nhân

Trang giới thiệu cá nhân viết bằng **HTML5 + CSS3 thuần**, không dùng framework hay thư viện ngoài.

### Cấu trúc

```
it4409/
├── assets/
│   ├── script.js   # JS tăng cường (trang vẫn chạy đủ nếu tắt JS)
│   └── style.css   # Toàn bộ style
├── CNAME           # Tên miền tùy chỉnh cho GitHub Pages
├── README.md
└── index.html      # Trang chính
```

Trang được xuất bản tại **https://loitran.id.vn** qua GitHub Pages.

### Cách chạy

Mở trực tiếp `index.html` bằng trình duyệt, hoặc dùng một web server tĩnh:

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

### Nội dung trang

| Phần | Nội dung |
|------|----------|
| Hero | Thông tin cá nhân: họ tên, MSSV, lớp, email |
| Giới thiệu | Mô tả bản thân, kỹ năng, mục tiêu học kỳ |
| Môn học | Thông tin học phần và nội dung các chương |
| Tiến độ | Thanh tiến độ tổng và bảng trạng thái từng bài tập |
| Nhật ký | Dòng thời gian các mốc đã hoàn thành |
| Liên hệ | Form liên hệ có validation phía trình duyệt |

### Kiến thức áp dụng (Lec 2 - HTML)

- Thẻ ngữ nghĩa: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<time>`
- Form và input: `<form>`, `<input>`, `<select>`, `<textarea>`, `<fieldset>`, radio, checkbox
- Validation không cần JavaScript: `required`, `pattern`, `type="email"`
- Bảng có `<caption>`, `<thead>`, `<th scope>`
- SEO: `<title>`, `<meta name="description">`, phân cấp `<h1>`-`<h6>`, alt text
- Danh sách: `<ul>`, `<ol>`, `<dl>`/`<dt>`/`<dd>`

## Thông tin sinh viên

| | |
|---|---|
| Họ tên | Trần Bá Lợi |
| MSSV | 20225357 |
| Lớp | Kỹ thuật máy tính 05 |
| Khóa | K67 |
| Email | loi.tb225358@sis.hust.edu.vn |

## Còn là dữ liệu mẫu

- Tên giảng viên và tỉ lệ đánh giá (phần môn học)
- Nội dung phần "Giới thiệu bản thân" và danh sách kỹ năng
- Trạng thái bài tập và giá trị `value` của thẻ `<progress>` — cần cập nhật sau mỗi bài
