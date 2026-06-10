# QuizApp — Hướng dẫn chạy trên VS Code

## Yêu cầu
- Node.js >= 18 (tải tại https://nodejs.org)
- VS Code

---

## Cách chạy (3 bước)

### 1. Giải nén & mở trong VS Code
```
File → Open Folder → chọn thư mục quiz-app
```

### 2. Mở Terminal trong VS Code
```
Terminal → New Terminal  (hoặc Ctrl + `)
```

### 3. Cài packages và chạy
```bash
npm install
npm run dev
```

Mở trình duyệt tại: **http://localhost:5173**

---

## Cấu trúc dự án

```
quiz-app/
├── src/
│   ├── data/
│   │   └── quizData.js      ← Câu hỏi & dữ liệu Quiz (chỉnh sửa ở đây)
│   ├── components/
│   │   ├── StatusBar.jsx    ← Thanh trạng thái trên cùng
│   │   └── BottomNav.jsx    ← Thanh điều hướng dưới cùng
│   ├── pages/
│   │   ├── QuizDetail.jsx   ← Màn 1: Chi tiết bài Quiz
│   │   ├── QuizDetail.css
│   │   ├── QuizTaking.jsx   ← Màn 2: Làm bài (có đếm giờ)
│   │   ├── QuizTaking.css
│   │   ├── QuizResult.jsx   ← Màn 3: Kết quả
│   │   └── QuizResult.css
│   ├── App.jsx              ← Điều hướng giữa 3 màn hình
│   ├── index.css            ← Design system (màu sắc, font, layout)
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Tùy chỉnh nội dung

### Thêm câu hỏi mới
Mở `src/data/quizData.js`, thêm object vào mảng `questions`:
```js
{
  id: 13,
  text: 'Câu hỏi của bạn ở đây?',
  hint: 'Gợi ý giải thích...',
  options: ['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'],
  correct: 0,  // index của đáp án đúng (0 = A, 1 = B, ...)
}
```

### Đổi màu chủ đạo
Mở `src/index.css`, chỉnh biến CSS:
```css
:root {
  --purple: #5C4EE5;   /* màu chính */
  --orange: #FF8C42;   /* màu streak */
}
```

### Đổi thời gian làm bài
Trong `src/data/quizData.js`, chỉnh `timeLimit` (đơn vị: giây):
```js
timeLimit: 600,  // 10 phút
```

---

## Các bước mở rộng tiếp theo

| Tính năng | Công nghệ gợi ý |
|-----------|----------------|
| Nhiều môn học, nhiều bài | Thêm data vào quizData.js |
| Lưu điểm cao | localStorage |
| Backend thật | Node.js + Express hoặc Firebase |
| Database | Supabase (miễn phí) |
| Deploy lên web | Vercel (miễn phí, 1 lệnh) |
