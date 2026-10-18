/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------
const oTimKiem = document.getElementById("o-tim-kiem");
const dsTin = document.getElementById("list");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");
const oTieuDe = document.getElementById("tin-tieu-de");
const oNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

// F1. Bộ đếm "Đang hiển thị x/y tin" trong #bo-dem.
function capNhatBoDem() {
	const tatCa = dsTin.querySelectorAll("li");
	const dangHien = dsTin.querySelectorAll("li:not(.an)");
	boDem.textContent = `Đang hiển thị ${dangHien.length}/${tatCa.length} tin`;
}

// F2 + F3. Lọc tin khi gõ vào #o-tim-kiem (sự kiện keyup) và thông báo #khong-thay.
function locTin() {
	const tuKhoa = oTimKiem.value;
	const tuKhoaThuong = tuKhoa.toLowerCase();
	let soKhop = 0;
	for (const tin of dsTin.querySelectorAll("li")) {
		const chu = (tin.querySelector("h3").textContent + " " + tin.querySelector("p").textContent).toLowerCase();
		const khop = chu.includes(tuKhoaThuong);
		tin.classList.toggle("an", !khop);
		if (khop) {
			soKhop++;
		}
	}
	if (soKhop === 0) {
		khongThay.classList.remove("an");
		// textContent để từ khoá hiện nguyên văn, không bị diễn giải thành thẻ HTML.
		khongThay.textContent = `Không tìm thấy tin nào cho "${tuKhoa}"`;
	} else {
		khongThay.classList.add("an");
	}
	capNhatBoDem();
}
oTimKiem.addEventListener("keyup", locTin);

// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list.
dsTin.addEventListener("click", (e) => {
	if (!e.target.classList.contains("more")) {
		return;
	}
	const doanVan = e.target.parentNode.querySelector("p");
	const moRong = doanVan.classList.toggle("day-du");
	e.target.textContent = moRong ? "Thu gọn <<" : "Read more >>";
});

// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list.
nutDang.addEventListener("click", () => {
	const tieuDe = oTieuDe.value;
	const noiDung = oNoiDung.value;
	if (tieuDe.trim() === "" || noiDung.trim() === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}

	const tin = document.createElement("li");
	const ngay = document.createElement("span");
	ngay.className = "time";
	ngay.textContent = homNay();
	const h3 = document.createElement("h3");
	h3.textContent = tieuDe;
	const p = document.createElement("p");
	p.textContent = noiDung;
	const nut = document.createElement("button");
	nut.type = "button";
	nut.className = "more";
	nut.textContent = "Read more >>";
	tin.append(ngay, h3, p, nut);
	dsTin.prepend(tin);

	oTieuDe.value = "";
	oNoiDung.value = "";
	baoLoi.textContent = "";
	// Lọc lại để tin mới tuân theo từ khoá đang gõ và cập nhật bộ đếm.
	locTin();
});

capNhatBoDem();
