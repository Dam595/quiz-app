// ─── Current User ─────────────────────────────────────────────────────────────
export const currentUser = {
  id: 'u0',
  name: 'Nguyễn Đặng Anh Dũng',
  avatar: null,
  points: 590,
  streak: 48,
  rank: 56,
  quizzesCreated: 5,
  quizzesDone: 36,
  accuracy: 75,
  badges: ['🔥 Streak 30', '⭐ Top 100', '📚 Học giỏi'],
}

// ─── Users ────────────────────────────────────────────────────────────────────
export const users = [
  { id: 'u1', name: 'Phùng Thanh Độ',   points: 1240, streak: 62, rank: 1,  avatar: 'ti ti-user' },
  { id: 'u2', name: 'Trần Minh Khoa',   points: 1180, streak: 45, rank: 2,  avatar: 'ti ti-user' },
  { id: 'u3', name: 'Lê Thu Hương',     points: 1050, streak: 38, rank: 3,  avatar: 'ti ti-user' },
  { id: 'u4', name: 'Dũng Thanh Nội',   points: 980,  streak: 29, rank: 4,  avatar: 'ti ti-user' },
  { id: 'u5', name: 'Nguyễn Thị Mai',   points: 920,  streak: 31, rank: 5,  avatar: 'ti ti-user' },
  { id: 'u6', name: 'Bùi Văn Hải',      points: 870,  streak: 22, rank: 6,  avatar: 'ti ti-user' },
]

// ─── Quizzes ──────────────────────────────────────────────────────────────────
export const quizzes = [
  // ── 1. Xác suất thống kê ────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Xác suất thống kê',
    subject: 'Toán đại cương', source: 'Fami',
    totalQuestions: 12, avgScore: 590,
    timeLimit: 900, difficulty: 'Trung bình',
    participants: 248, streak: 48,
    description: 'Ôn tập lý thuyết xác suất cơ bản, biến cố, quy tắc cộng và nhân xác suất dành cho học sinh lớp 12.',
    attachments: [
      { name: 'Lý thuyết xác suất cơ bản.pdf', size: '2.4 MB', type: 'pdf' },
      { name: 'Video bài giảng (Thầy Hùng)',    size: '18 MB',  type: 'video' },
    ],
    questions: [
      {
        id: 1, text: 'Xác suất để gieo 1 con xúc xắc ra mặt 6 chấm là bao nhiêu?',
        hint: 'Con xúc xắc có 6 mặt bằng nhau.',
        options: ['1/3','1/4','1/6','1/2'], correct: 2,
        explanation: 'Không gian mẫu gồm 6 kết quả đồng khả năng {1,2,3,4,5,6}. Biến cố "ra mặt 6 chấm" chỉ có 1 kết quả thuận lợi → P = 1/6 ≈ 0.167.',
      },
      {
        id: 2, text: 'Biến cố đối của biến cố A là gì?',
        hint: 'Xảy ra khi A không xảy ra.',
        options: ['Luôn xảy ra','Không xảy ra khi A xảy ra','Độc lập với A','Xác suất bằng 0'], correct: 1,
        explanation: 'Biến cố đối Ā là biến cố xảy ra khi và chỉ khi A không xảy ra. Tính chất: P(A) + P(Ā) = 1.',
      },
      {
        id: 3, text: 'Hộp có 4 bi đỏ và 6 bi xanh. Lấy 2 bi, xác suất được đúng 1 bi đỏ?',
        hint: 'Dùng tổ hợp C(n,k).',
        options: ['8/15','4/9','16/45','2/5'], correct: 0,
        explanation: 'C(4,1)×C(6,1) = 4×6 = 24 cách chọn 1 đỏ + 1 xanh. Tổng cách chọn 2 bi từ 10: C(10,2) = 45. P = 24/45 = 8/15.',
      },
      {
        id: 4, text: 'Hai biến cố A và B độc lập khi nào?',
        hint: 'Độc lập: A không ảnh hưởng B.',
        options: ['P(A∩B)=P(A)+P(B)','P(A∩B)=P(A)×P(B)','P(A∪B)=P(A)×P(B)','P(A)=P(B)'], correct: 1,
        explanation: 'Định nghĩa độc lập thống kê: P(A∩B) = P(A)·P(B). Nghĩa là việc B xảy ra không làm thay đổi xác suất của A và ngược lại.',
      },
      {
        id: 5, text: 'Công thức xác suất có điều kiện P(A|B) bằng?',
        hint: 'Xác suất A khi biết B đã xảy ra.',
        options: ['P(A)×P(B)','P(A∪B)/P(B)','P(A∩B)/P(B)','P(B)/P(A)'], correct: 2,
        explanation: 'P(A|B) = P(A∩B)/P(B) với P(B) > 0. Ý nghĩa: thu hẹp không gian mẫu về các trường hợp B đã xảy ra rồi tính tỉ lệ A trong đó.',
      },
      {
        id: 6, text: 'Gieo đồng xu 3 lần. Xác suất được đúng 2 lần mặt sấp?',
        hint: 'C(3,2)×(1/2)²×(1/2)¹',
        options: ['1/4','3/8','1/2','1/8'], correct: 1,
        explanation: 'Phân phối nhị thức: P(X=2) = C(3,2)×(0.5)²×(0.5)¹ = 3×0.25×0.5 = 3/8.',
      },
      {
        id: 7, text: 'P(A)=0.4, P(B)=0.3, A và B xung khắc. P(A∪B)=?',
        hint: 'Xung khắc: P(A∪B)=P(A)+P(B).',
        options: ['0.12','0.58','0.70','0.65'], correct: 2,
        explanation: 'A và B xung khắc → P(A∩B)=0. Theo công thức cộng: P(A∪B) = P(A)+P(B) = 0.4+0.3 = 0.7.',
      },
      {
        id: 8, text: '100 học sinh có 60 nam, 40 nữ. Xác suất chọn nữ?',
        hint: 'P = số nữ / tổng.',
        options: ['0.4','0.6','0.5','0.3'], correct: 0,
        explanation: 'P(chọn nữ) = 40/100 = 0.4. Đây là xác suất cổ điển: số kết quả thuận lợi / tổng số kết quả đồng khả năng.',
      },
      {
        id: 9, text: 'Biến cố chắc chắn có xác suất bằng?',
        hint: 'Luôn xảy ra trong mọi phép thử.',
        options: ['0','0.5','1','Không xác định'], correct: 2,
        explanation: 'Biến cố chắc chắn (Ω) bao gồm toàn bộ không gian mẫu → P(Ω) = 1. Ngược lại biến cố bất khả P(∅) = 0.',
      },
      {
        id: 10, text: 'Rút 1 lá bài từ 52 lá, xác suất rút được Át?',
        hint: 'Có 4 con Át trong 52 lá.',
        options: ['1/13','1/52','4/13','1/4'], correct: 0,
        explanation: '4 con Át (bích, cơ, rô, nhép) / 52 lá tổng = 4/52 = 1/13 ≈ 0.077.',
      },
      {
        id: 11, text: 'Phép thử tung đồng xu có không gian mẫu là?',
        hint: 'Liệt kê tất cả kết quả có thể.',
        options: ['{Sấp}','{Ngửa}','{Sấp, Ngửa}','{Sấp, Ngửa, Đứng}'], correct: 2,
        explanation: 'Không gian mẫu Ω = tập hợp tất cả kết quả có thể = {Sấp, Ngửa}. Trường hợp đứng thẳng không được xét trong mô hình chuẩn.',
      },
      {
        id: 12, text: 'P(A) + P(Ā) = ? (Ā là biến cố đối của A)',
        hint: 'Tổng xác suất của A và đối của A.',
        options: ['0','0.5','2','1'], correct: 3,
        explanation: 'Tiên đề xác suất: A và Ā xung khắc và hợp lại thành Ω → P(A) + P(Ā) = P(Ω) = 1. Đây là tính chất nền tảng để tính xác suất bổ sung.',
      },
    ],
  },

  // ── 2. Giải tích 2 ──────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Giải tích 2',
    subject: 'Toán đại cương', source: 'Fami',
    totalQuestions: 10, avgScore: 520,
    timeLimit: 720, difficulty: 'Khó',
    participants: 183, streak: 0,
    description: 'Tích phân, vi phân hàm nhiều biến, ứng dụng trong kinh tế và kỹ thuật.',
    attachments: [{ name: 'Giải tích 2 tóm tắt.pdf', size: '3.1 MB', type: 'pdf' }],
    questions: [
      {
        id: 1, text: 'Đạo hàm của f(x) = x³ - 3x² + 2 tại x=1 là?',
        hint: "f'(x) = 3x² - 6x",
        options: ['-3','-1','0','3'], correct: 0,
        explanation: "f'(x) = 3x² - 6x. Tại x=1: f'(1) = 3(1)² - 6(1) = 3 - 6 = -3.",
      },
      {
        id: 2, text: '∫x²dx bằng?',
        hint: 'Công thức tích phân cơ bản: ∫xⁿdx = xⁿ⁺¹/(n+1)',
        options: ['x³','x³/3+C','2x+C','3x²+C'], correct: 1,
        explanation: 'Áp dụng quy tắc tích phân lũy thừa: ∫x²dx = x^(2+1)/(2+1) + C = x³/3 + C. Luôn thêm hằng số tích phân C.',
      },
      {
        id: 3, text: 'Đạo hàm riêng của f(x,y)=x²y theo x là?',
        hint: 'Coi y là hằng số.',
        options: ['2xy','x²','2x','xy²'], correct: 0,
        explanation: 'Đạo hàm riêng theo x: coi y là hằng số → ∂f/∂x = 2x·y = 2xy.',
      },
      {
        id: 4, text: '∫₀¹ 2x dx bằng?',
        hint: 'Tích phân xác định từ 0 đến 1.',
        options: ['0','1','2','4'], correct: 1,
        explanation: '∫2x dx = x². Áp dụng cận: [x²]₀¹ = 1² - 0² = 1.',
      },
      {
        id: 5, text: 'Giới hạn lim(x→0) sinx/x bằng?',
        hint: 'Giới hạn đặc biệt quan trọng.',
        options: ['0','∞','1','Không tồn tại'], correct: 2,
        explanation: 'Đây là giới hạn đặc biệt cơ bản: lim(x→0) sin(x)/x = 1. Có thể chứng minh bằng quy tắc L\'Hôpital hoặc định lý kẹp.',
      },
      {
        id: 6, text: 'Hàm f(x)=e^x có đạo hàm là?',
        hint: 'Đặc biệt của hàm mũ e.',
        options: ['xe^(x-1)','e^x','e^(x-1)','ln(x)'], correct: 1,
        explanation: 'Hàm e^x là hàm duy nhất có đạo hàm bằng chính nó: (e^x)\' = e^x. Đây là tính chất đặc biệt của cơ số e (số Euler ≈ 2.718).',
      },
      {
        id: 7, text: "Điều kiện cần cực trị của hàm một biến f(x) tại x₀?",
        hint: 'Điều kiện cần của cực trị.',
        options: ["f'(x₀)>0","f'(x₀)<0","f'(x₀)=0","f''(x₀)=0"], correct: 2,
        explanation: "Điều kiện cần: f'(x₀) = 0 (điểm dừng). Điều kiện đủ cần xét thêm dấu của f''(x₀): nếu f''(x₀) > 0 → cực tiểu, f''(x₀) < 0 → cực đại.",
      },
      {
        id: 8, text: '∫(1/x)dx bằng?',
        hint: 'Nguyên hàm của 1/x.',
        options: ['1/x²+C','ln|x|+C','-1/x²+C','x·ln(x)+C'], correct: 1,
        explanation: '∫(1/x)dx = ln|x| + C với x ≠ 0. Cần dùng giá trị tuyệt đối |x| để hàm xác định với cả x âm.',
      },
      {
        id: 9, text: 'Đạo hàm của ln(x) là?',
        hint: 'Hàm logarithm tự nhiên.',
        options: ['1/x','ln(x)/x','x·ln(x)','e^x'], correct: 0,
        explanation: '(ln x)\' = 1/x với x > 0. Đây là kết quả từ định nghĩa đạo hàm hoặc từ quy tắc đạo hàm hàm ngược của e^x.',
      },
      {
        id: 10, text: 'Tích phân ∫sin(x)dx bằng?',
        hint: 'Nguyên hàm của sin.',
        options: ['cos(x)+C','-cos(x)+C','sin(x)+C','-sin(x)+C'], correct: 1,
        explanation: '∫sin(x)dx = -cos(x) + C. Kiểm tra: đạo hàm của -cos(x) là -(-sin x) = sin(x) ✓.',
      },
    ],
  },

  // ── 3. Đại số tuyến tính ────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Đại số tuyến tính',
    subject: 'Toán đại cương', source: 'Fami',
    totalQuestions: 6, avgScore: 480,
    timeLimit: 600, difficulty: 'Trung bình',
    participants: 312, streak: 0,
    description: 'Ma trận, định thức, hệ phương trình tuyến tính và không gian vector.',
    attachments: [{ name: 'ĐSTT công thức.pdf', size: '1.8 MB', type: 'pdf' }],
    questions: [
      {
        id: 1, text: 'Ma trận đơn vị I có tính chất?',
        hint: 'Phần tử đường chéo chính.',
        options: ['Tất cả phần tử = 1','Đường chéo = 1, còn lại = 0','Tất cả phần tử = 0','Định thức = 0'], correct: 1,
        explanation: 'Ma trận đơn vị I_n có phần tử a_ii = 1 (đường chéo chính) và a_ij = 0 với i≠j. Tính chất: A·I = I·A = A.',
      },
      {
        id: 2, text: 'Định thức của ma trận [[1,2],[3,4]] là?',
        hint: 'det = ad - bc',
        options: ['-2','-4','2','10'], correct: 0,
        explanation: 'det([[1,2],[3,4]]) = 1×4 - 2×3 = 4 - 6 = -2.',
      },
      {
        id: 3, text: 'Hệ phương trình Ax=b có nghiệm duy nhất khi?',
        hint: 'Liên quan đến det(A).',
        options: ['det(A)=0','det(A)≠0','b=0','A=I'], correct: 1,
        explanation: 'Hệ Ax=b có nghiệm duy nhất khi và chỉ khi A khả nghịch, tương đương det(A) ≠ 0. Khi đó x = A⁻¹b.',
      },
      {
        id: 4, text: 'Tích của ma trận A(m×n) và B(n×p) có kích thước?',
        hint: 'Số cột A phải = số hàng B.',
        options: ['m×n','n×p','m×p','p×m'], correct: 2,
        explanation: 'A(m×n)·B(n×p) = C(m×p). Điều kiện nhân được: số cột của A = số hàng của B (cùng bằng n). Kết quả có m hàng và p cột.',
      },
      {
        id: 5, text: 'Vector (1,0,0) thuộc không gian?',
        hint: 'Không gian 3 chiều thực.',
        options: ['R¹','R²','R³','R⁴'], correct: 2,
        explanation: 'Vector (1,0,0) có 3 thành phần → thuộc R³. Đây còn là vector đơn vị e₁ của cơ sở chuẩn trong R³.',
      },
      {
        id: 6, text: 'Rank của ma trận bằng 0 khi nào?',
        hint: 'Số hàng/cột độc lập tuyến tính.',
        options: ['Ma trận là I','Ma trận là ma trận không','Ma trận vuông','det(A)≠0'], correct: 1,
        explanation: 'Rank(A) = số hàng (hoặc cột) độc lập tuyến tính tối đa. Ma trận không (toàn số 0) không có hàng nào độc lập → Rank = 0.',
      },
    ],
  },

  // ── 4. Độ chính xác kỹ thuật ────────────────────────────────────────────────
  {
    id: 4,
    title: 'Độ chính xác kỹ thuật',
    subject: 'ME (Cơ khí)', source: 'Fami',
    totalQuestions: 6, avgScore: 610,
    timeLimit: 600, difficulty: 'Khó',
    participants: 156, streak: 0,
    description: 'Sai số đo lường, độ chính xác, độ tin cậy trong thí nghiệm vật lý.',
    attachments: [{ name: 'Sai số đo lường.pdf', size: '2.9 MB', type: 'pdf' }],
    questions: [
      {
        id: 1, text: 'Sai số tuyệt đối là gì?',
        hint: 'Độ chênh lệch giữa giá trị đo và giá trị thực.',
        options: ['Tỉ lệ phần trăm sai số','Giá trị đo trừ giá trị thực','Căn bậc hai của phương sai','Giá trị trung bình'], correct: 1,
        explanation: 'Sai số tuyệt đối Δx = |x_đo - x_thực|. Đơn vị của sai số tuyệt đối trùng với đơn vị của đại lượng đo.',
      },
      {
        id: 2, text: 'Đơn vị của sai số tương đối là?',
        hint: 'So sánh sai số với giá trị đo được.',
        options: ['m/s','%','kg','Không có đơn vị'], correct: 3,
        explanation: 'Sai số tương đối δ = Δx/x_thực (không đơn vị) hoặc biểu diễn bằng % khi nhân thêm 100. Cả hai đáp án "%" và "không có đơn vị" đều chấp nhận được nhưng dạng gốc không có đơn vị.',
      },
      {
        id: 3, text: 'Phép đo có độ chính xác cao khi sai số tuyệt đối?',
        hint: 'Sai số nhỏ = chính xác cao.',
        options: ['Lớn','Bằng 1','Nhỏ','Bằng 0.5'], correct: 2,
        explanation: 'Độ chính xác tỉ lệ nghịch với sai số. Sai số tuyệt đối càng nhỏ → giá trị đo càng gần giá trị thực → độ chính xác càng cao.',
      },
      {
        id: 4, text: 'Sai số hệ thống xuất phát từ?',
        hint: 'Lỗi cố định, lặp lại.',
        options: ['Người đọc số liệu','Thiết bị hoặc phương pháp đo','Môi trường ngẫu nhiên','Tính toán sai'], correct: 1,
        explanation: 'Sai số hệ thống có tính lặp lại và hướng xác định, thường do thiết bị không được hiệu chỉnh đúng hoặc phương pháp đo có khuyết điểm cố hữu.',
      },
      {
        id: 5, text: 'Để giảm sai số ngẫu nhiên, ta nên?',
        hint: 'Tăng số lần đo.',
        options: ['Thay thiết bị','Đo nhiều lần lấy trung bình','Đo một lần thật cẩn thận','Dùng đơn vị khác'], correct: 1,
        explanation: 'Sai số ngẫu nhiên tuân theo phân phối xác suất và triệt tiêu nhau theo luật số lớn. Đo n lần và lấy trung bình giúp giảm sai số ngẫu nhiên theo tỉ lệ 1/√n.',
      },
      {
        id: 6, text: 'Giá trị trung bình của n phép đo x₁,x₂,...xₙ là?',
        hint: 'Cộng tất cả rồi chia n.',
        options: ['x₁·x₂·...·xₙ','(x₁+x₂+...+xₙ)/n','max(x₁,...,xₙ)','x₁/n'], correct: 1,
        explanation: 'Giá trị trung bình (mean) x̄ = Σxᵢ/n. Đây là ước lượng tốt nhất (không thiên lệch) của giá trị thực khi các sai số phân phối đối xứng.',
      },
    ],
  },

  // ── 5. Lịch sử lớp 12 ──────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Lịch sử lớp 12',
    subject: 'History', source: 'Studocu',
    totalQuestions: 5, avgScore: 540,
    timeLimit: 900, difficulty: 'Dễ',
    participants: 420, streak: 0,
    description: 'Ôn tập lịch sử Việt Nam và thế giới hiện đại chương trình lớp 12.',
    attachments: [{ name: 'Tóm tắt lịch sử 12.pdf', size: '4.2 MB', type: 'pdf' }],
    questions: [
      {
        id: 1, text: 'Chiến thắng Điện Biên Phủ diễn ra năm nào?',
        hint: 'Kết thúc kháng chiến chống Pháp.',
        options: ['1950','1953','1954','1955'], correct: 2,
        explanation: 'Chiến dịch Điện Biên Phủ diễn ra từ 13/3 đến 7/5/1954, kết thúc bằng sự thất bại hoàn toàn của quân Pháp và buộc Pháp ký Hiệp định Giơnevơ.',
      },
      {
        id: 2, text: 'Hiệp định Giơnevơ ký kết năm nào?',
        hint: 'Ngay sau chiến thắng Điện Biên Phủ.',
        options: ['1953','1954','1955','1956'], correct: 1,
        explanation: 'Hiệp định Giơnevơ ký ngày 21/7/1954, công nhận độc lập, chủ quyền của Việt Nam, Lào, Campuchia và quy định vĩ tuyến 17 là ranh giới tạm thời.',
      },
      {
        id: 3, text: 'Chiến dịch Hồ Chí Minh kết thúc ngày nào?',
        hint: 'Ngày giải phóng miền Nam.',
        options: ['30/4/1974','30/4/1975','1/5/1975','2/9/1975'], correct: 1,
        explanation: 'Chiến dịch Hồ Chí Minh kết thúc ngày 30/4/1975 với sự kiện xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập, thống nhất đất nước.',
      },
      {
        id: 4, text: 'Nước Việt Nam Dân chủ Cộng hòa ra đời năm?',
        hint: 'Bác Hồ đọc Tuyên ngôn Độc lập.',
        options: ['1944','1945','1946','1947'], correct: 1,
        explanation: 'Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.',
      },
      {
        id: 5, text: 'Chiến tranh thế giới thứ 2 kết thúc năm?',
        hint: 'Nhật Bản đầu hàng.',
        options: ['1944','1945','1946','1947'], correct: 1,
        explanation: 'Chiến tranh thế giới thứ 2 kết thúc năm 1945: Đức đầu hàng tháng 5, Nhật đầu hàng ngày 2/9/1945 sau khi Mỹ ném 2 quả bom nguyên tử xuống Hiroshima và Nagasaki.',
      },
    ],
  },

  // ── 6. Lập trình C cơ bản ───────────────────────────────────────────────────
  {
    id: 6,
    title: 'Lập trình C cơ bản',
    subject: 'IT (Lập trình)', source: 'Fami',
    totalQuestions: 5, avgScore: 510,
    timeLimit: 600, difficulty: 'Trung bình',
    participants: 374, streak: 0,
    description: 'Kiến thức nền tảng ngôn ngữ C: kiểu dữ liệu, con trỏ, mảng, hàm.',
    attachments: [{ name: 'C Programming Basics.pdf', size: '2.1 MB', type: 'pdf' }],
    questions: [
      {
        id: 'c_q1', text: "Trong ngôn ngữ C, kích thước kiểu 'int' trên hệ điều hành 32-bit thường là?",
        hint: 'Nhớ lại kiến trúc thanh ghi 32-bit.',
        options: ['1 byte','2 byte','4 byte','8 byte'], correct: 2,
        explanation: "Trên kiến trúc 32-bit (và hầu hết 64-bit hiện đại), int chiếm 4 byte (32 bit), biểu diễn giá trị từ -2,147,483,648 đến 2,147,483,647.",
      },
      {
        id: 'c_q2', text: "Toán tử '*' khi đặt trước tên biến con trỏ có ý nghĩa gì?",
        hint: 'Đây là thao tác dereference.',
        options: ['Lấy địa chỉ biến','Khai báo con trỏ','Truy cập giá trị tại địa chỉ con trỏ trỏ tới','Tính tích hai số'], correct: 2,
        explanation: "Toán tử dereference (*ptr) truy cập giá trị tại địa chỉ mà ptr đang lưu. Phân biệt: &var lấy địa chỉ của var, *ptr đọc/ghi giá trị tại địa chỉ đó.",
      },
      {
        id: 'c_q3', text: 'Mảng int a[5] trong C được lưu trong bộ nhớ như thế nào?',
        hint: 'Các phần tử liên tiếp nhau.',
        options: ['Ngẫu nhiên trong heap','Liên tiếp nhau trong bộ nhớ','Lưu trong thanh ghi CPU','Phân tán trên stack và heap'], correct: 1,
        explanation: 'Mảng C được lưu trữ liên tiếp (contiguous) trong bộ nhớ. a[0] tại địa chỉ base, a[1] tại base+4, a[2] tại base+8,... (mỗi int 4 byte). Tên mảng a là con trỏ tới a[0].',
      },
      {
        id: 'c_q4', text: "Hàm printf(\"%d\", x) với x = 3.7 (kiểu float) sẽ in ra gì?",
        hint: '%d dùng cho số nguyên.',
        options: ['3.7','3','Lỗi biên dịch','Giá trị không xác định'], correct: 3,
        explanation: 'Dùng sai format specifier (%d cho float) gây Undefined Behavior — giá trị in ra phụ thuộc trình biên dịch và kiến trúc máy, không thể dự đoán. Phải dùng %f cho float.',
      },
      {
        id: 'c_q5', text: 'Từ khóa "static" trong khai báo biến cục bộ có tác dụng?',
        hint: 'Biến tồn tại xuyên suốt vòng đời chương trình.',
        options: ['Biến nằm trong stack','Biến bị xóa sau mỗi lần gọi hàm','Biến giữ nguyên giá trị giữa các lần gọi hàm','Biến chỉ đọc'], correct: 2,
        explanation: 'Biến static cục bộ được lưu trong vùng data segment (không phải stack), khởi tạo một lần duy nhất và giữ giá trị giữa các lần gọi hàm. Dùng để đếm số lần gọi hàm chẳng hạn.',
      },
    ],
  },

  // ── 7. Cấu trúc dữ liệu & Giải thuật ───────────────────────────────────────
  {
    id: 7,
    title: 'Cấu trúc dữ liệu & Giải thuật',
    subject: 'IT (Lập trình)', source: 'Fami',
    totalQuestions: 5, avgScore: 495,
    timeLimit: 600, difficulty: 'Khó',
    participants: 209, streak: 0,
    description: 'Stack, Queue, Linked List, Big-O, sắp xếp và tìm kiếm cơ bản.',
    attachments: [{ name: 'DSA Cheatsheet.pdf', size: '1.5 MB', type: 'pdf' }],
    questions: [
      {
        id: 'dsa_q1', text: 'Độ phức tạp thời gian trung bình của thuật toán Quick Sort là?',
        hint: 'Liên quan đến n và logarithm.',
        options: ['O(n)','O(n log n)','O(n²)','O(log n)'], correct: 1,
        explanation: 'Quick Sort trung bình O(n log n) do mỗi lần phân hoạch chia mảng thành 2 phần xấp xỉ bằng nhau (log n tầng đệ quy × O(n) mỗi tầng). Trường hợp xấu nhất O(n²) khi pivot luôn chọn phần tử min/max.',
      },
      {
        id: 'dsa_q2', text: 'Cấu trúc dữ liệu Stack hoạt động theo nguyên tắc nào?',
        hint: 'Vào sau ra trước.',
        options: ['FIFO','LIFO','Random Access','Priority'], correct: 1,
        explanation: 'Stack theo nguyên tắc LIFO (Last In First Out) — phần tử được push vào sau cùng sẽ được pop ra đầu tiên. Ứng dụng: quản lý lời gọi hàm, undo/redo, duyệt cây DFS.',
      },
      {
        id: 'dsa_q3', text: 'Trong Linked List đơn, thao tác truy cập phần tử thứ k có độ phức tạp?',
        hint: 'Phải duyệt từ đầu.',
        options: ['O(1)','O(log n)','O(k)','O(n²)'], correct: 2,
        explanation: 'Linked List không có random access như mảng. Để tới node thứ k phải duyệt tuần tự từ head qua k-1 con trỏ next → O(k) ≈ O(n). Đây là nhược điểm so với mảng (O(1)).',
      },
      {
        id: 'dsa_q4', text: 'Thuật toán Binary Search yêu cầu điều kiện gì với mảng đầu vào?',
        hint: 'Phải được sắp xếp trước.',
        options: ['Mảng ngẫu nhiên','Mảng đã sắp xếp','Mảng kích thước lẻ','Mảng chứa số nguyên dương'], correct: 1,
        explanation: 'Binary Search dựa vào tính chất đã sắp xếp để loại bỏ nửa mảng mỗi bước → O(log n). Với mảng chưa sắp, kết quả sai. Độ phức tạp: O(log n) so với Linear Search O(n).',
      },
      {
        id: 'dsa_q5', text: 'Cây nhị phân tìm kiếm (BST) có tính chất gì?',
        hint: 'Node trái < gốc < node phải.',
        options: [
          'Node trái ≥ gốc ≥ node phải',
          'Tất cả node bằng nhau',
          'Node trái < gốc < node phải',
          'Node phải < gốc < node trái',
        ], correct: 2,
        explanation: 'BST: với mỗi node, tất cả node cây con trái < node hiện tại < tất cả node cây con phải. Tính chất này cho phép tìm kiếm O(log n) trung bình bằng cách đi theo nhánh trái/phải.',
      },
    ],
  },

  // ── 8. Mạch điện cơ bản ────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Mạch điện cơ bản',
    subject: 'EE (Điện - Điện tử)', source: 'Fami',
    totalQuestions: 5, avgScore: 530,
    timeLimit: 600, difficulty: 'Trung bình',
    participants: 195, streak: 0,
    description: 'Định luật Ohm, Kirchhoff, mạch nối tiếp - song song, công suất điện.',
    attachments: [{ name: 'Mạch điện cơ bản.pdf', size: '1.9 MB', type: 'pdf' }],
    questions: [
      {
        id: 'ee_q1', text: 'Định luật Ohm phát biểu mối quan hệ giữa U, I, R là?',
        hint: 'U = ?',
        options: ['U = I + R','U = I × R','U = I / R','U = R / I'], correct: 1,
        explanation: 'Định luật Ohm: U = I·R, trong đó U (volt) là hiệu điện thế, I (ampere) là cường độ dòng điện, R (ohm) là điện trở. Suy ra I = U/R và R = U/I.',
      },
      {
        id: 'ee_q2', text: 'Hai điện trở R₁=4Ω và R₂=6Ω mắc song song. Điện trở tương đương là?',
        hint: '1/R_tđ = 1/R₁ + 1/R₂',
        options: ['10 Ω','2.4 Ω','5 Ω','1.2 Ω'], correct: 1,
        explanation: '1/R_tđ = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 → R_tđ = 12/5 = 2.4 Ω. Lưu ý: điện trở tương đương song song luôn nhỏ hơn điện trở nhỏ nhất trong mạch.',
      },
      {
        id: 'ee_q3', text: 'Định luật Kirchhoff về dòng điện (KCL) phát biểu?',
        hint: 'Tổng dòng vào = tổng dòng ra tại một nút.',
        options: [
          'Tổng điện áp trong vòng kín = 0',
          'Tổng dòng điện đến một nút = 0',
          'Dòng điện chỉ chạy một chiều',
          'Điện trở tỉ lệ thuận với nhiệt độ',
        ], correct: 1,
        explanation: 'KCL (Kirchhoff\'s Current Law): Tổng đại số các dòng điện tại một nút = 0, tức ΣI_vào = ΣI_ra. Đây là hệ quả của bảo toàn điện tích.',
      },
      {
        id: 'ee_q4', text: 'Công suất tiêu thụ trên điện trở R có dòng I chạy qua là?',
        hint: 'P = U·I = I²·R',
        options: ['P = I/R','P = I²·R','P = U/I','P = R/I²'], correct: 1,
        explanation: 'P = U·I = (I·R)·I = I²·R. Hoặc P = U²/R. Công suất (watt) là tốc độ tiêu thụ năng lượng điện, chuyển thành nhiệt trong điện trở.',
      },
      {
        id: 'ee_q5', text: 'Tụ điện trong mạch DC ổn định (steady state) hoạt động như?',
        hint: 'Dòng DC không qua tụ ở trạng thái ổn định.',
        options: ['Dây dẫn lý tưởng','Điện trở thuần','Mạch hở (open circuit)','Nguồn điện áp'], correct: 2,
        explanation: 'Ở trạng thái DC ổn định, tụ điện đã nạp đầy → không có dòng qua tụ → tụ tương đương mạch hở. Ngược lại, cuộn cảm ở DC ổn định tương đương dây dẫn (short circuit).',
      },
    ],
  },

  // ── 9. Điện tử số ──────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Điện tử số',
    subject: 'EE (Điện - Điện tử)', source: 'Fami',
    totalQuestions: 4, avgScore: 460,
    timeLimit: 480, difficulty: 'Khó',
    participants: 141, streak: 0,
    description: 'Logic cổng, đại số Boole, mạch tổ hợp và mạch tuần tự.',
    attachments: [{ name: 'Digital Electronics.pdf', size: '2.3 MB', type: 'pdf' }],
    questions: [
      {
        id: 'dig_q1', text: 'Cổng logic NAND tương đương với tổ hợp nào?',
        hint: 'NAND = NOT + AND.',
        options: ['NOT sau OR','NOT sau AND','AND sau NOT','OR sau NOT'], correct: 1,
        explanation: 'NAND(A,B) = NOT(A AND B) = (A·B)\'. Cổng NAND là "universal gate" — có thể tạo bất kỳ hàm logic nào chỉ từ NAND. Bảng chân trị: chỉ ra 0 khi cả A và B đều là 1.',
      },
      {
        id: 'dig_q2', text: "Số nhị phân 1011₂ tương đương với số thập phân nào?",
        hint: '2³ + 2¹ + 2⁰',
        options: ['9','10','11','13'], correct: 2,
        explanation: '1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀.',
      },
      {
        id: 'dig_q3', text: "Biểu thức Boole A + A' (A OR NOT A) bằng?",
        hint: 'Định luật bù.',
        options: ['0','A','1','2A'], correct: 2,
        explanation: "Định luật bù (complement law): A + A' = 1 (luôn đúng). Tương tự A·A' = 0. Đây là hai trong số các tiên đề cơ bản của đại số Boole.",
      },
      {
        id: 'dig_q4', text: 'Flip-Flop D lưu trữ giá trị khi nào?',
        hint: 'Triggered by clock edge.',
        options: [
          'Khi D = 1',
          'Liên tục theo thời gian thực',
          'Tại cạnh lên (hoặc xuống) của xung clock',
          'Khi nguồn điện được cấp',
        ], correct: 2,
        explanation: 'Flip-Flop D (Data/Delay) là mạch tuần tự: Q lấy giá trị của D tại cạnh lên (positive edge) của clock. Giữa hai cạnh clock, Q giữ nguyên giá trị dù D thay đổi. Đây là cơ chế đồng bộ hóa cơ bản.',
      },
    ],
  },

  // ── 10. Cơ học kỹ thuật ────────────────────────────────────────────────────
  {
    id: 10,
    title: 'Cơ học kỹ thuật',
    subject: 'ME (Cơ khí)', source: 'Fami',
    totalQuestions: 4, avgScore: 500,
    timeLimit: 480, difficulty: 'Trung bình',
    participants: 167, streak: 0,
    description: 'Tĩnh học, động học, động lực học, ứng suất và biến dạng vật liệu.',
    attachments: [{ name: 'Cơ học kỹ thuật.pdf', size: '3.4 MB', type: 'pdf' }],
    questions: [
      {
        id: 'me_q1', text: 'Điều kiện cân bằng tĩnh của một vật rắn là?',
        hint: 'ΣF = 0 và ΣM = 0',
        options: [
          'Tổng lực bằng 0',
          'Tổng moment bằng 0',
          'Tổng lực = 0 VÀ tổng moment = 0',
          'Vật đứng yên',
        ], correct: 2,
        explanation: 'Cân bằng tĩnh đòi hỏi đồng thời: ΣFx=0, ΣFy=0 (tổng hợp lực = 0) và ΣM_O = 0 (tổng moment quanh mọi điểm = 0). Thiếu một điều kiện, vật có thể tịnh tiến hoặc quay.',
      },
      {
        id: 'me_q2', text: "Định luật Newton II: F = ma. Nếu F=20N, m=4kg thì gia tốc a bằng?",
        hint: 'a = F/m',
        options: ['2 m/s²','5 m/s²','80 m/s²','0.2 m/s²'], correct: 1,
        explanation: 'a = F/m = 20/4 = 5 m/s². Định luật II Newton: lực tổng hợp tác dụng lên vật bằng tích khối lượng và gia tốc, chiều gia tốc trùng chiều lực tổng hợp.',
      },
      {
        id: 'me_q3', text: 'Ứng suất pháp (normal stress) σ được tính bằng?',
        hint: 'Lực chia diện tích mặt cắt.',
        options: ['σ = F·A','σ = F/A','σ = A/F','σ = F²/A'], correct: 1,
        explanation: 'Ứng suất pháp σ = F/A (N/m² = Pa), trong đó F là lực vuông góc với mặt cắt, A là diện tích mặt cắt ngang. Kéo dương (+), nén âm (-). Vật liệu bền khi σ < σ_giới hạn.',
      },
      {
        id: 'me_q4', text: "Định luật Hooke cho vật liệu đàn hồi tuyến tính phát biểu?",
        hint: 'ε = σ/E',
        options: [
          'Biến dạng tỉ lệ thuận với thời gian',
          'Ứng suất tỉ lệ thuận với biến dạng (σ = E·ε)',
          'Lực tỉ lệ nghịch với biến dạng',
          'Biến dạng không phụ thuộc lực',
        ], correct: 1,
        explanation: 'Định luật Hooke: σ = E·ε, trong đó E là module đàn hồi Young (Pa), ε = ΔL/L là biến dạng tương đối (không đơn vị). Áp dụng trong vùng đàn hồi (trước giới hạn chảy).',
      },
    ],
  },

  // ── 11. Nhiệt động lực học kỹ thuật ────────────────────────────────────────
  {
    id: 11,
    title: 'Nhiệt động lực học kỹ thuật',
    subject: 'ME (Cơ khí)', source: 'Fami',
    totalQuestions: 4, avgScore: 470,
    timeLimit: 480, difficulty: 'Khó',
    participants: 112, streak: 0,
    description: 'Các nguyên lý nhiệt động lực học, chu trình Carnot, entropy.',
    attachments: [{ name: 'Thermodynamics.pdf', size: '2.7 MB', type: 'pdf' }],
    questions: [
      {
        id: 'td_q1', text: 'Nguyên lý 1 nhiệt động lực học phát biểu về?',
        hint: 'Bảo toàn năng lượng.',
        options: [
          'Nhiệt chỉ truyền từ nóng sang lạnh',
          'Năng lượng được bảo toàn: Q = ΔU + W',
          'Entropy luôn tăng',
          'Nhiệt độ tuyệt đối không thể đạt 0K',
        ], correct: 1,
        explanation: 'Nguyên lý 1 (Bảo toàn năng lượng): Q = ΔU + W, nhiệt lượng cấp vào = tăng nội năng + công thực hiện. Không thể tạo ra máy sinh công mà không cần năng lượng (động cơ vĩnh cửu loại 1 bất khả thi).',
      },
      {
        id: 'td_q2', text: 'Hiệu suất lý thuyết tối đa của động cơ nhiệt Carnot là?',
        hint: 'η = 1 - T_lạnh/T_nóng (nhiệt độ tuyệt đối)',
        options: ['η = T_L/T_H','η = 1 - T_L/T_H','η = (T_H - T_L)/T_L','η = T_H/T_L'], correct: 1,
        explanation: 'Hiệu suất Carnot η = 1 - T_L/T_H (T tính bằng Kelvin). Đây là giới hạn trên của mọi động cơ nhiệt. VD: T_H=600K, T_L=300K → η_max = 1 - 300/600 = 50%.',
      },
      {
        id: 'td_q3', text: 'Nguyên lý 2 nhiệt động lực học theo phát biểu Clausius là?',
        hint: 'Hướng truyền nhiệt tự nhiên.',
        options: [
          'Nhiệt có thể tự truyền từ lạnh sang nóng',
          'Không thể tự truyền nhiệt từ vật lạnh sang vật nóng mà không tốn công',
          'Entropy của hệ cô lập luôn giảm',
          'Nhiệt lượng bằng công thực hiện',
        ], correct: 1,
        explanation: 'Phát biểu Clausius: "Nhiệt không thể tự truyền từ vật lạnh sang vật nóng" — cần cung cấp thêm công (như tủ lạnh, điều hòa). Tương đương với entropy của hệ cô lập ΔS ≥ 0.',
      },
      {
        id: 'td_q4', text: 'Đơn vị của entropy trong hệ SI là?',
        hint: 'Entropy = Q/T',
        options: ['J','J/K','W/K','Pa·m³'], correct: 1,
        explanation: 'Entropy S định nghĩa qua dS = δQ_rev/T → đơn vị J/K (Joule trên Kelvin). Entropy là thước đo mức độ hỗn loạn/phân tán năng lượng của hệ.',
      },
    ],
  },
]

// ─── Leaderboard ──────────────────────────────────────────────────────────────
export const leaderboard = [
  { rank: 1,  name: 'Phùng Thanh Độ',        points: 1240, streak: 62, avatar: null, subject: 'EE (Điện - Điện tử)' },
  { rank: 2,  name: 'Trần Minh Khoa',         points: 1180, streak: 45, avatar: null, subject: 'Toán đại cương' },
  { rank: 3,  name: 'Lê Thu Hương',           points: 1050, streak: 38, avatar: null, subject: 'IT (Lập trình)' },
  { rank: 4,  name: 'Dũng Thanh Nội',         points: 980,  streak: 29, avatar: null, subject: 'Toán đại cương' },
  { rank: 5,  name: 'Nguyễn Thị Mai',         points: 920,  streak: 31, avatar: null, subject: 'ME (Cơ khí)' },
  { rank: 6,  name: 'Bùi Văn Hải',            points: 870,  streak: 22, avatar: null, subject: 'Toán đại cương' },
  { rank: 7,  name: 'Pham Quốc Tuấn',         points: 810,  streak: 18, avatar: null, subject: 'IT (Lập trình)' },
  { rank: 8,  name: 'Hoàng Lan Anh',          points: 760,  streak: 25, avatar: null, subject: 'Toán đại cương' },
  { rank: 9,  name: 'Võ Thành Long',          points: 700,  streak: 14, avatar: null, subject: 'EE (Điện - Điện tử)' },
  { rank: 10, name: 'Đinh Thị Nga',           points: 650,  streak: 20, avatar: null, subject: 'Toán đại cương' },
  { rank: 42, name: 'Nguyễn Đặng Anh Dũng',  points: 590,  streak: 48, avatar: null, subject: 'Toán đại cương', isCurrentUser: true },
]