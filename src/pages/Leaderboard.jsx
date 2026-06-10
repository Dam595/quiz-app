import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { leaderboard } from '../data/quizData.js'
import './Leaderboard.css'

const periods = ['Tuần', 'Tháng', 'Tổng']
const subjectColor = { Math:'#5C4EE5', Physics:'#E07B3A', History:'#1A9E61' }

function initials(name) {
  return name.split(' ').slice(-2).map(n => n[0]).join('').toUpperCase()
}

export default function Leaderboard({ onNavigate }) {
  const [period, setPeriod] = useState('Tuần')
  const top3 = leaderboard.slice(0, 3)
  const rest = leaderboard.slice(3).filter(u => !u.isCurrentUser)
  const me = leaderboard.find(u => u.isCurrentUser)
  const rankColors = ['#FFD166','#C0C0C0','#CD7F32']

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />
      <div className="screen-header">
        <div className="back-row" style={{ marginBottom:12 }}>
          <span className="title" style={{ fontSize:18 }}>Bảng xếp hạng</span>
          <i className="ti ti-settings" style={{ color:'#fff', fontSize:20, marginLeft:'auto' }} />
        </div>
        {/* Period tabs */}
        <div style={{ display:'flex', background:'rgba(255,255,255,0.15)', borderRadius:12, padding:3 }}>
          {periods.map(p => (
            <button key={p} className={`lb-period-btn ${period === p ? 'active' : ''}`}
              onClick={() => setPeriod(p)}>{p}</button>
          ))}
        </div>
      </div>

      <div className="screen-body">
        {/* Top 3 podium */}
        <div className="lb-podium">
          {/* 2nd */}
          <div className="lb-podium-item" style={{ marginTop: 30 }}>
            <div className="lb-avatar" style={{ background: subjectColor[top3[1].subject] || '#888' }}>
              {initials(top3[1].name)}
            </div>
            <div className="lb-rank-medal" style={{ background: rankColors[1] }}>2</div>
            <div className="lb-podium-name">{top3[1].name.split(' ').slice(-1)[0]}</div>
            <div className="lb-podium-pts">{top3[1].points} đ</div>
          </div>
          {/* 1st */}
          <div className="lb-podium-item lb-first">
            <i className="ti ti-crown" style={{ color:'#FFD166', fontSize:22, marginBottom:4 }} />
            <div className="lb-avatar lb-avatar-lg" style={{ background: subjectColor[top3[0].subject] || '#888' }}>
              {initials(top3[0].name)}
            </div>
            <div className="lb-rank-medal" style={{ background: rankColors[0] }}>1</div>
            <div className="lb-podium-name">{top3[0].name.split(' ').slice(-1)[0]}</div>
            <div className="lb-podium-pts">{top3[0].points} đ</div>
          </div>
          {/* 3rd */}
          <div className="lb-podium-item" style={{ marginTop: 50 }}>
            <div className="lb-avatar" style={{ background: subjectColor[top3[2].subject] || '#888' }}>
              {initials(top3[2].name)}
            </div>
            <div className="lb-rank-medal" style={{ background: rankColors[2] }}>3</div>
            <div className="lb-podium-name">{top3[2].name.split(' ').slice(-1)[0]}</div>
            <div className="lb-podium-pts">{top3[2].points} đ</div>
          </div>
        </div>

        {/* List */}
        {rest.map(user => (
          <div key={user.rank} className="lb-row">
            <div className="lb-row-rank">#{user.rank}</div>
            <div className="lb-avatar-sm" style={{ background: subjectColor[user.subject] || '#888' }}>
              {initials(user.name)}
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13, fontWeight:700, color:'var(--text-mid)' }}>{user.name}</div>
              <div style={{ fontSize:11, color:'var(--text-muted)', display:'flex', alignItems:'center', gap:4 }}>
                <i className="ti ti-flame" style={{ color:'#FF8C42', fontSize:12 }} />
                {user.streak} ngày · {user.subject}
              </div>
            </div>
            <div style={{ fontSize:15, fontWeight:800, color:'var(--purple)' }}>{user.points}</div>
          </div>
        ))}

        {/* Current user sticky row */}
        {me && (
          <div className="lb-row lb-me-row">
            <div className="lb-row-rank" style={{ color:'var(--purple)' }}>#{me.rank}</div>
            <div className="lb-avatar-sm" style={{ background:'var(--purple)' }}>
              {initials(me.name)}
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13, fontWeight:700, color:'var(--purple)' }}>Bạn</div>
              <div style={{ fontSize:11, color:'var(--text-muted)', display:'flex', alignItems:'center', gap:4 }}>
                <i className="ti ti-flame" style={{ color:'#FF8C42', fontSize:12 }} />
                {me.streak} ngày
              </div>
            </div>
            <div style={{ fontSize:15, fontWeight:800, color:'var(--purple)' }}>{me.points}</div>
          </div>
        )}
        <div style={{ height: 16 }} />
      </div>

      <BottomNav active="rank" onNavigate={onNavigate} />
    </div>
  )
}