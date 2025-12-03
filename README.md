# Portfolio Website

Trang web portfolio cá nhân được xây dựng bằng React.js, thiết kế hiện đại và responsive.

## Tính năng

- ✨ Giao diện hiện đại và đẹp mắt
- 📱 Responsive design - hoạt động tốt trên mọi thiết bị
- 🎨 Smooth animations và transitions
- 🚀 Performance tối ưu
- 📧 Form liên hệ với tích hợp Telegram notification
- 📱 Nhận thông báo real-time qua Telegram khi có người liên hệ
- 🎯 Sections: Hero, About, Skills, Experience, Projects, Contact

## Cài đặt

### Frontend (React)

1. Clone repository hoặc tải về project
2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm start
```

4. Mở trình duyệt và truy cập: `http://localhost:3000`

### Backend (Telegram Integration)

1. Di chuyển vào thư mục server:
```bash
cd server
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Tạo file `.env` (hoặc copy từ `.env.example`):
```bash
PORT=3001
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

4. Chạy backend server:
```bash
npm start
# hoặc với nodemon (auto-reload)
npm run dev
```

5. Backend server sẽ chạy tại: `http://localhost:3001`

**Lưu ý:** Để form liên hệ hoạt động với Telegram notification, bạn cần chạy cả frontend và backend server.

## Build cho production

```bash
npm run build
```

Files sẽ được build vào thư mục `build/`

## Tùy chỉnh

### Thay đổi thông tin cá nhân

1. **Hero Section** (`src/components/Hero.js`):
   - Thay đổi tên và mô tả
   - Cập nhật links social media
   - Thay đổi avatar placeholder

2. **About Section** (`src/components/About.js`):
   - Cập nhật mô tả về bản thân
   - Thay đổi số liệu thống kê

3. **Skills Section** (`src/components/Skills.js`):
   - Thêm/xóa kỹ năng
   - Điều chỉnh mức độ thành thạo

4. **Experience Section** (`src/components/Experience.js`):
   - Cập nhật kinh nghiệm làm việc
   - Thêm/xóa các vị trí công việc

5. **Projects Section** (`src/components/Projects.js`):
   - Thêm các dự án của bạn
   - Cập nhật links GitHub và Demo
   - Thay đổi hình ảnh dự án

6. **Contact Section** (`src/components/Contact.js`):
   - Cập nhật thông tin liên hệ
   - Thêm links social media

### Thay đổi màu sắc

Chỉnh sửa các biến CSS trong `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

## Cấu trúc thư mục

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Experience.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## Công nghệ sử dụng

### Frontend
- React 18
- React Icons
- CSS3 (Custom Properties, Grid, Flexbox)
- React Scripts

### Backend
- Node.js
- Express
- Axios (Telegram API)
- CORS

## License

MIT License - Tự do sử dụng cho mục đích cá nhân hoặc thương mại.

## Liên hệ

Nếu có câu hỏi hoặc đề xuất, vui lòng tạo issue hoặc liên hệ trực tiếp.

---

Made with ❤️ using React.js

"# Portfolio" 
