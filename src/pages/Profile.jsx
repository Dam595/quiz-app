import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { currentUser } from '../data/quizData.js'
import './Profile.css'

const tabs = ['Tổng quan', 'Lịch sử']

const quizHistory = [
  { id: 1, quizTitle: 'Toán học cơ bản', date: '22/06/2026', score: 9, total: 10, accuracy: 90, duration: '5:32' },
  { id: 2, quizTitle: 'Lịch sử Việt Nam', date: '21/06/2026', score: 7, total: 10, accuracy: 70, duration: '8:14' },
  { id: 3, quizTitle: 'Vật lý đại cương', date: '20/06/2026', score: 6, total: 10, accuracy: 60, duration: '7:05' },
  { id: 4, quizTitle: 'Toán nâng cao', date: '19/06/2026', score: 10, total: 10, accuracy: 100, duration: '4:48' },
  { id: 5, quizTitle: 'Địa lý thế giới', date: '18/06/2026', score: 5, total: 10, accuracy: 50, duration: '9:20' },
  { id: 6, quizTitle: 'Sinh học tế bào', date: '17/06/2026', score: 8, total: 10, accuracy: 80, duration: '6:11' },
]

function AccuracyBadge({ accuracy }) {
  const color = accuracy >= 80 ? '#1A9E61' : accuracy >= 60 ? '#E07B3A' : '#E03E3E'
  const bg = accuracy >= 80 ? '#E8F8EF' : accuracy >= 60 ? '#FFF3E8' : '#FFF0F0'
  return (
    <span className="ph-history-badge" style={{ color, background: bg }}>
      {accuracy}%
    </span>
  )
}

export default function Profile({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Tổng quan')

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />

      <div className="profile-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <i className="ti ti-arrow-left" style={{ color: '#fff', fontSize: 20, cursor: 'pointer' }}
            onClick={() => onNavigate('home')} />
          <i className="ti ti-settings" style={{ color: '#fff', fontSize: 20, cursor: 'pointer' }}
            onClick={() => onNavigate('setting')} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div className="profile-avatar-wrap">
            <div className="profile-avatar"><i className="ti ti-user" /></div>
            <div className="profile-avatar-edit"><i className="ti ti-pencil" /></div>
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{currentUser.name}</div>
        </div>
        <div className="profile-stats-row">
          <div className="profile-stat">
            <i className="ti ti-star" />
            <div className="profile-stat-num">{currentUser.points}</div>
            <div className="profile-stat-lbl">ĐIỂM</div>
          </div>
          <div className="profile-stat">
            <i className="ti ti-flame" style={{ color: '#FF8C42' }} />
            <div className="profile-stat-num">{currentUser.streak}</div>
            <div className="profile-stat-lbl">CHUỖI</div>
          </div>
          <div className="profile-stat">
            <i className="ti ti-trophy" style={{ color: '#FFD166' }} />
            <div className="profile-stat-num">#{currentUser.rank}</div>
            <div className="profile-stat-lbl">THỨ HẠNG</div>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        {tabs.map(t => (
          <button key={t} className={`profile-tab ${activeTab === t ? 'active' : ''}`}
            onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      <div className="screen-body">

        {/* ── TAB 1: TỔNG QUAN ── */}
        {activeTab === 'Tổng quan' && (
          <>
            {/* Streak card */}
            <div className="section-title">Chuỗi ngày học</div>
            <div className="card ph-streak-card">
              <div className="ph-streak-hero">
                <i className="ti ti-flame" />
                <div>
                  <div className="ph-streak-num">{currentUser.streak}</div>
                  <div className="ph-streak-lbl">Ngày liên tiếp</div>
                </div>
              </div>
              <div className="profile-streak-bar-wrap">
                {['T2','T3','T4','T5','T6','T7','CN'].map((day, i) => (
                  <div key={i} className={`profile-streak-day ${i < 5 ? 'done' : ''}`}>
                    <div className="profile-streak-dot" />
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4 }}>{day}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats bars */}
            <div className="section-title" style={{ marginTop: 20 }}>Quiz theo môn học</div>
            <div className="card" style={{ padding: 16 }}>
              {[
                { subject: 'Toán học', score: 8, total: 10, color: 'var(--purple)' },
                { subject: 'Lịch sử', score: 6, total: 10, color: '#E07B3A' },
                { subject: 'Vật lý', score: 3, total: 10, color: '#1A9E61' },
              ].map(item => (
                <div key={item.subject} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12,
                    color: 'var(--text-muted)', marginBottom: 5 }}>
                    <span>{item.subject}</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-mid)' }}>{item.score}/{item.total}</span>
                  </div>
                  <div style={{ background: '#E2E0FF', borderRadius: 8, height: 8, overflow: 'hidden' }}>
                    <div style={{ width: `${item.score * 10}%`, height: '100%', background: item.color,
                      borderRadius: 8, transition: 'width 0.5s' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Mini stats */}
            <div className="profile-mini-stats" style={{ marginTop: 8 }}>
              <div className="card profile-mini-stat">
                <i className="ti ti-pencil" style={{ color: 'var(--purple)', fontSize: 22 }} />
                <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-mid)' }}>{currentUser.quizzesCreated}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Quiz đã tạo</div>
              </div>
              <div className="card profile-mini-stat" style={{ background: 'var(--purple)' }}>
                <i className="ti ti-check" style={{ color: '#fff', fontSize: 22 }} />
                <div style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{currentUser.quizzesDone}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>Quiz đã làm</div>
              </div>
            </div>

            {/* Accuracy ring */}
            <div className="section-title" style={{ marginTop: 20 }}>Tỷ lệ chính xác</div>
            <div className="card ph-accuracy-card">
              <svg viewBox="0 0 80 80" width={80} height={80}>
                <circle cx={40} cy={40} r={32} fill="none" stroke="#E2E0FF" strokeWidth={8} />
                <circle cx={40} cy={40} r={32} fill="none" stroke="var(--purple)" strokeWidth={8}
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - currentUser.accuracy / 100)}`}
                  strokeLinecap="round" transform="rotate(-90 40 40)" />
                <text x={40} y={45} textAnchor="middle" fontSize={16} fontWeight={800} fill="#5C4EE5">
                  {currentUser.accuracy}%
                </text>
              </svg>
              <div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 6 }}>Trung bình toàn bộ quiz</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-mid)' }}>{currentUser.accuracy}%</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
                  Dựa trên {currentUser.quizzesDone} bài đã làm
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="section-title" style={{ marginTop: 20 }}>Huy hiệu</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {currentUser.badges.map((b, i) => (
                <div key={i} className="profile-badge">{b}</div>
              ))}
            </div>
          </>
        )}

        {/* ── TAB 2: LỊCH SỬ ── */}
        {activeTab === 'Lịch sử' && (
          <>
            <div className="ph-history-meta">
              <i className="ti ti-history" />
              <span>{quizHistory.length} bài đã hoàn thành</span>
            </div>
            {quizHistory.map(item => (
              <div key={item.id} className="ph-history-card">
                <div className="ph-history-top">
                  <div className="ph-history-title">{item.quizTitle}</div>
                  <AccuracyBadge accuracy={item.accuracy} />
                </div>
                <div className="ph-history-bottom">
                  <span className="ph-history-meta-item">
                    <i className="ti ti-calendar" />{item.date}
                  </span>
                  <span className="ph-history-meta-item">
                    <i className="ti ti-check" />{item.score}/{item.total} câu đúng
                  </span>
                  <span className="ph-history-meta-item">
                    <i className="ti ti-clock" />{item.duration}
                  </span>
                </div>
              </div>
            ))}
          </>
        )}

        <div style={{ height: 16 }} />
      </div>

      <BottomNav active="profile" onNavigate={onNavigate} />
    </div>
  )
}