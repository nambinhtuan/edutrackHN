# EduTrack – Quản lý điểm THCS (Thông tư 22/2021/TT-BGDĐT)

Chạy trên **Vercel** (miễn phí) + cơ sở dữ liệu **Neon** (miễn phí). Chỉ cần làm **4 bước**, không cần biết lập trình.

## Bước 1 – Tạo database (2 phút)
1. Vào https://neon.tech → đăng nhập bằng Google → **Create project** (vùng *Singapore*).
2. Bấm **Connect**, **copy** chuỗi bắt đầu bằng `postgresql://...` rồi dán tạm vào Notepad.

## Bước 2 – Đưa mã lên GitHub (3 phút)
1. Vào https://github.com/new → đặt tên `edutrack` → chọn **Private** → **Create repository**.
2. Giải nén file ZIP, vào trang repository vừa tạo → bấm **uploading an existing file**.
3. Mở thư mục đã giải nén, **chọn tất cả file và thư mục bên trong** (api, db, migrations, public, vercel.json, package.json, .gitignore…) rồi kéo thả vào GitHub → bấm **Commit changes**.

## Bước 3 – Đưa lên mạng bằng Vercel (3 phút)
1. Vào https://vercel.com → đăng nhập bằng GitHub → **Add New → Project** → **Import** repository `edutrack`.
2. Mở mục **Environment Variables**: ô *Name* gõ `DATABASE_URL`, ô *Value* dán chuỗi đã copy ở Bước 1 → **Add**.
3. Bấm **Deploy**, chờ 1–2 phút. Xong sẽ có đường link dạng `https://edutrack-xxxx.vercel.app`.

## Bước 4 – Tạo tài khoản của bạn (1 phút)
Mở đường link ngay sau khi deploy xong. **Người đầu tiên vào là Quản trị hệ thống**: nhập tên đăng nhập (đã điền sẵn `admin`) và mật khẩu từ 8 ký tự → bấm **Tạo tài khoản và vào hệ thống**. Hãy tự làm bước này ngay, đừng gửi link cho ai trước khi tạo xong.

---

## Sử dụng lần đầu (làm theo thứ tự)
1. **Môn học** → bấm *Tạo 12 môn THCS chuẩn*.
2. **Giáo viên & phân công** → *Thêm giáo viên* (chép mật khẩu hiện ra, gửi cho thầy/cô) → *Phân công* môn và lớp.
3. **Hồ sơ học sinh** → *Tải file Excel mẫu* → điền danh sách → *Nhập từ Excel*. Hệ thống tự tạo lớp và tài khoản phụ huynh (đăng nhập bằng số điện thoại). Bấm *Tải danh sách tài khoản* để in phát cho phụ huynh.
4. **Quản lý lớp** → chọn giáo viên chủ nhiệm cho từng lớp.

Mật khẩu hệ thống cấp cho giáo viên và phụ huynh chỉ dùng được một lần: họ sẽ được yêu cầu đặt mật khẩu mới ngay khi đăng nhập lần đầu.

## Khi cần
* **Cập nhật phiên bản mới:** vào GitHub → *Add file → Upload files* và chép đè file mới; Vercel tự cập nhật, dữ liệu vẫn giữ nguyên.
* **Quên mật khẩu giáo viên/phụ huynh:** *Giáo viên & phân công* hoặc *Tài khoản phụ huynh* → *Cấp lại MK*.
* **Quên mật khẩu Quản trị hệ thống:** vào Neon → *SQL Editor* → chạy `DELETE FROM users WHERE is_super_admin = true;` rồi mở lại website để tạo tài khoản mới.
* **Báo lỗi 500 hoặc “không kết nối được máy chủ”:** kiểm tra biến `DATABASE_URL` trên Vercel (*Settings → Environment Variables*) rồi *Deployments → Redeploy*.
* **Nút Excel không hoạt động:** gửi ảnh chụp màn hình lỗi để được hỗ trợ.
* **Sao lưu:** cuối mỗi học kỳ nên xuất Excel sổ điểm từng lớp để lưu.
