import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import './QuizDetail.css'

export default function QuizDetail({ quiz, onStart, onBack }) {
  const iconMap = { pdf: 'ti-file-type-pdf', video: 'ti-video', doc: 'ti-file-text' }

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />
      <div className="screen-header">
        <div className="back-row">
          <i className="ti ti-arrow-left" onClick={onBack} />
          <span className="title">Chi tiết bài tập</span>
          <i className="ti ti-settings" style={{ color: '#fff', fontSize: 20, marginLeft: 'auto', cursor: 'pointer' }} />
        </div>
        {/* Hero card inside header */}
        <div className="card" style={{ display: 'flex', gap: 12 }}>
          <div className="qd-icon-box">
            <i className="ti ti-atom" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#2D1B8E', marginBottom: 3 }}>{quiz.title}</div>
            <div style={{ fontSize: 11, color: '#9B9AC0', marginBottom: 7 }}>
              {quiz.source} · {quiz.subject} · {quiz.totalQuestions} câu hỏi
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <span className="tag tag-purple">Trắc nghiệm</span>
              <span className="tag tag-orange">{quiz.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="screen-body">
        {/* Stats row */}
        <div className="qd-stats">
          <div className="card qd-stat-card">
            <i className="ti ti-star" />
            <div className="qd-stat-num">{quiz.avgScore}</div>
            <div className="qd-stat-lbl">Điểm TB</div>
          </div>
          <div className="card qd-stat-card">
            <i className="ti ti-clock" />
            <div className="qd-stat-num">{quiz.timeLimit / 60}p</div>
            <div className="qd-stat-lbl">Thời gian</div>
          </div>
          <div className="card qd-stat-card">
            <i className="ti ti-users" />
            <div className="qd-stat-num">{quiz.participants}</div>
            <div className="qd-stat-lbl">Đã làm</div>
          </div>
        </div>

        {/* Streak banner */}
        <div className="qd-streak">
          <i className="ti ti-flame" />
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>
              Bạn đang giữ chuỗi <strong>{quiz.streak} ngày</strong> học liên tiếp!
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>
              Tiếp tục để duy trì phong độ nhé!
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <div className="section-title">Mô tả</div>
          <div className="card" style={{ fontSize: 12, color: '#6B65A0', lineHeight: 1.6 }}>
            {quiz.description}
          </div>
        </div>

        {/* Attachments */}
        <div>
          <div className="section-title">Tài liệu đính kèm</div>
          {quiz.attachments.map((att, i) => (
            <div key={i} className="qd-doc">
              <i className={`ti ${iconMap[att.type] || 'ti-file'}`} style={{ color: '#5C4EE5', fontSize: 20 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#2D1B8E' }}>{att.name}</div>
                <div style={{ fontSize: 10, color: '#9B9AC0' }}>{att.size}</div>
              </div>
              <i className="ti ti-download" style={{ color: '#5C4EE5', fontSize: 16, cursor: 'pointer' }} />
            </div>
          ))}
        </div>

        <button className="btn-primary" onClick={onStart} style={{ marginBottom: 16 }}>
          <i className="ti ti-player-play" />
          Bắt đầu làm bài
        </button>
      </div>

      <BottomNav active="profile" />
    </div>
  )
}
