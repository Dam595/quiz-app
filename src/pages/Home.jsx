import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { quizzes, currentUser } from '../data/quizData.js'
import './Home.css'

const subjectIcon = { Math: 'ti-math-function', Physics: 'ti-atom', History: 'ti-book', default: 'ti-help-circle' }
const subjectColor = { Math: '#5C4EE5', Physics: '#E07B3A', History: '#1A9E61', default: '#9B88FF' }

export default function Home({ onNavigate, onSelectQuiz }) {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Chào buổi sáng' : hour < 18 ? 'Chào buổi chiều' : 'Chào buổi tối'
  const recent = quizzes[4]
  const trending = quizzes.slice(0, 3)

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />
      <div className="home-header">
        <div className="home-greeting-row">
          <div>
            <div className="home-greeting"><i className="ti ti-sun" /> {greeting}</div>
            <div className="home-username">{currentUser.name}</div>
          </div>
          <div className="home-avatar" onClick={() => onNavigate('profile')}>
            <i className="ti ti-user" />
          </div>
        </div>
        {/* Recent activity pill */}
        <div className="home-recent" onClick={() => onSelectQuiz(recent)}>
          <div>
            <div className="home-recent-label">Hoạt động gần đây</div>
            <div className="home-recent-title">{recent.title}</div>
          </div>
          <div className="home-recent-pct">55%</div>
        </div>
      </div>

      <div className="screen-body">
        {/* Stats row */}
        <div className="home-stats">
          <div className="home-stat-card">
            <i className="ti ti-star" />
            <div className="home-stat-num">{currentUser.points}</div>
            <div className="home-stat-lbl">Điểm</div>
          </div>
          <div className="home-stat-card">
            <i className="ti ti-flame" style={{ color: '#FF8C42' }} />
            <div className="home-stat-num">{currentUser.streak}</div>
            <div className="home-stat-lbl">Chuỗi</div>
          </div>
          <div className="home-stat-card">
            <i className="ti ti-trophy" style={{ color: '#FFD166' }} />
            <div className="home-stat-num">#{currentUser.rank}</div>
            <div className="home-stat-lbl">Xếp hạng</div>
          </div>
        </div>

        {/* Trending */}
        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
            <div className="section-title" style={{ marginBottom:0 }}>Thịnh hành</div>
            <span style={{ fontSize:12, color:'var(--purple)', fontWeight:600, cursor:'pointer' }}
              onClick={() => onNavigate('search')}>Xem thêm</span>
          </div>
          {trending.map(q => (
            <div key={q.id} className="home-quiz-row" onClick={() => onSelectQuiz(q)}>
              <div className="home-quiz-icon" style={{ background: subjectColor[q.subject] || subjectColor.default }}>
                <i className={`ti ${subjectIcon[q.subject] || subjectIcon.default}`} />
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:700, color:'var(--text-mid)' }}>{q.title}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:2 }}>
                  {q.source} · {q.subject} · {q.totalQuestions} câu hỏi
                </div>
              </div>
              <i className="ti ti-chevron-right" style={{ color:'#C3BCE8', fontSize:16 }} />
            </div>
          ))}
        </div>

        {/* Streak reminder */}
        <div className="home-streak-banner">
          <i className="ti ti-flame" />
          <div>
            <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>Duy trì chuỗi {currentUser.streak} ngày!</div>
            <div style={{ fontSize:11, color:'rgba(255,255,255,0.8)', marginTop:2 }}>Làm ít nhất 1 quiz hôm nay nhé</div>
          </div>
        </div>
        <div style={{ height:16 }} />
      </div>

      <BottomNav active="home" onNavigate={onNavigate} />
    </div>
  )
}