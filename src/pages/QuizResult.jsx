import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import './QuizResult.css'

export default function QuizResult({ quiz, answers, elapsed, onRetry, onHome }) {
  const correctCount = answers.filter(a => a.correct).length
  const wrongCount = answers.filter(a => !a.correct).length
  const accuracy = Math.round((correctCount / quiz.questions.length) * 100)
  const pointsEarned = correctCount * 10 + Math.floor((quiz.timeLimit - elapsed) / 10)
  const rank = Math.max(1, 248 - Math.floor(correctCount * 8.5))
  const rankImproved = correctCount >= 8 ? 14 : 3

  const formatElapsed = (s) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}p${sec}s`
  }

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />

      {/* Purple header */}
      <div className="qr-header">
        <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 3 }}>
          {correctCount >= 10 ? '🎉 Xuất sắc!' : correctCount >= 7 ? '✨ Hoàn thành!' : '💪 Cố lên nào!'}
        </div>
        <div style={{ fontSize: 12, color: '#C3BCE8' }}>
          {quiz.title} · {quiz.questions.length} câu hỏi
        </div>
      </div>

      <div className="screen-body" style={{ paddingTop: 0 }}>
        {/* Score circle */}
        <div className="qr-score-wrap">
          <div className="qr-score-circle">
            <div className="qr-score-big">{correctCount}/{quiz.questions.length}</div>
            <div style={{ fontSize: 10, color: '#9B9AC0', marginTop: 2 }}>Đúng / Tổng</div>
          </div>
        </div>

        {/* Accuracy ring */}
        <div className="card" style={{ textAlign: 'center', padding: '14px 16px' }}>
          <div className="qr-accuracy-label">Tỷ lệ chính xác</div>
          <div className="qr-accuracy-ring-wrap">
            <svg viewBox="0 0 80 80" width="80" height="80">
              <circle cx="40" cy="40" r="32" fill="none" stroke="#E2E0FF" strokeWidth="8" />
              <circle
                cx="40" cy="40" r="32"
                fill="none"
                stroke="#5C4EE5"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 32}`}
                strokeDashoffset={`${2 * Math.PI * 32 * (1 - accuracy / 100)}`}
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
                style={{ transition: 'stroke-dashoffset 1s ease' }}
              />
              <text x="40" y="44" textAnchor="middle" fontSize="16" fontWeight="800" fill="#5C4EE5">{accuracy}%</text>
            </svg>
          </div>
        </div>

        {/* Stats grid */}
        <div className="qr-stats">
          <div className="card qr-stat">
            <div className="qr-stat-icon icon-green"><i className="ti ti-check" /></div>
            <div><div className="qr-stat-val">{correctCount}</div><div className="qr-stat-lbl">Câu đúng</div></div>
          </div>
          <div className="card qr-stat">
            <div className="qr-stat-icon icon-red"><i className="ti ti-x" /></div>
            <div><div className="qr-stat-val">{wrongCount}</div><div className="qr-stat-lbl">Câu sai</div></div>
          </div>
          <div className="card qr-stat">
            <div className="qr-stat-icon icon-purple"><i className="ti ti-clock" /></div>
            <div><div className="qr-stat-val">{formatElapsed(elapsed)}</div><div className="qr-stat-lbl">Thời gian</div></div>
          </div>
          <div className="card qr-stat">
            <div className="qr-stat-icon icon-orange"><i className="ti ti-star" /></div>
            <div><div className="qr-stat-val">+{pointsEarned}</div><div className="qr-stat-lbl">Điểm nhận</div></div>
          </div>
        </div>

        {/* Rank banner */}
        <div className="qr-rank-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <i className="ti ti-trophy" style={{ color: '#FFD166', fontSize: 24 }} />
            <div>
              <div style={{ fontSize: 11, color: '#C3BCE8', fontWeight: 600 }}>Xếp hạng của bạn</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#FFD166' }}>
                #{rank} <span style={{ fontSize: 12, fontWeight: 500, color: '#9B8FE0' }}>/ {quiz.participants} người</span>
              </div>
            </div>
          </div>
          <div className="qr-rank-badge">
            <div style={{ fontSize: 9, color: '#C3BCE8' }}>Tăng</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#4ADE80' }}>▲ {rankImproved}</div>
          </div>
        </div>

        {/* Answer review */}
        <div>
          <div className="section-title">Xem lại đáp án</div>
          {quiz.questions.map((q, i) => {
            const ans = answers[i]
            const isCorrect = ans?.correct
            return (
              <div key={q.id} className="qr-answer-row">
                <div className={`qr-ans-indicator ${isCorrect ? 'correct' : 'wrong'}`}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#2D1B8E', marginBottom: 3 }}>{q.text.substring(0, 60)}…</div>
                  <div style={{ fontSize: 11, color: isCorrect ? '#1A9E61' : '#E24B4A' }}>
                    Đáp án: {q.options[q.correct]}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
          <button className="btn-outline" onClick={onRetry}><i className="ti ti-refresh" /> Làm lại</button>
          <button className="btn-filled" onClick={onHome}><i className="ti ti-home" /> Trang chủ</button>
        </div>
        <button className="btn-outline" style={{ width: '100%', marginBottom: 16 }}>
          <i className="ti ti-share" /> Chia sẻ kết quả
        </button>
      </div>

      <BottomNav active="profile" />
    </div>
  )
}
