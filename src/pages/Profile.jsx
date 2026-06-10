import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { currentUser, quizzes } from '../data/quizData.js'
import './Profile.css'

const tabs = ['Chuỗi', 'Thống số', 'Chi tiết']

export default function Profile({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Thống số')
  const myQuizzes = quizzes.slice(0, 2)

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />
      {/* Purple top with avatar */}
      <div className="profile-header">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
          <i className="ti ti-arrow-left" style={{ color:'#fff', fontSize:20, cursor:'pointer' }}
            onClick={() => onNavigate('home')} />
          <i className="ti ti-settings" style={{ color:'#fff', fontSize:20, cursor:'pointer' }} />
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          <div className="profile-avatar-wrap">
            <div className="profile-avatar"><i className="ti ti-user" /></div>
            <div className="profile-avatar-edit"><i className="ti ti-pencil" /></div>
          </div>
          <div style={{ fontSize:18, fontWeight:800, color:'#fff' }}>{currentUser.name}</div>
        </div>
        {/* Stats row */}
        <div className="profile-stats-row">
          <div className="profile-stat">
            <i className="ti ti-star" />
            <div className="profile-stat-num">{currentUser.points}</div>
            <div className="profile-stat-lbl">ĐIỂM</div>
          </div>
          <div className="profile-stat">
            <i className="ti ti-flame" style={{ color:'#FF8C42' }} />
            <div className="profile-stat-num">{currentUser.streak}</div>
            <div className="profile-stat-lbl">CHUỖI</div>
          </div>
          <div className="profile-stat">
            <i className="ti ti-trophy" style={{ color:'#FFD166' }} />
            <div className="profile-stat-num">#{currentUser.rank}</div>
            <div className="profile-stat-lbl">THỨ HẠNG</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        {tabs.map(t => (
          <button key={t} className={`profile-tab ${activeTab === t ? 'active' : ''}`}
            onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      <div className="screen-body" style={{ background:'var(--bg)' }}>
        {activeTab === 'Chuỗi' && (
          <>
            <div className="card" style={{ textAlign:'center', padding:'20px 16px' }}>
              <i className="ti ti-flame" style={{ fontSize:48, color:'#FF8C42', display:'block', marginBottom:10 }} />
              <div style={{ fontSize:36, fontWeight:800, color:'var(--text-mid)' }}>{currentUser.streak}</div>
              <div style={{ fontSize:14, color:'var(--text-muted)', marginTop:4 }}>Ngày học liên tiếp</div>
              <div className="profile-streak-bar-wrap">
                {Array.from({length:7}, (_,i) => (
                  <div key={i} className={`profile-streak-day ${i < 5 ? 'done' : ''}`}>
                    <div className="profile-streak-dot" />
                    <div style={{ fontSize:10, color:'var(--text-muted)', marginTop:4 }}>
                      {['T2','T3','T4','T5','T6','T7','CN'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-title">Huy hiệu</div>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                {currentUser.badges.map((b,i) => (
                  <div key={i} className="profile-badge">{b}</div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'Thống số' && (
          <>
            <div className="card" style={{ padding:'16px' }}>
              <div style={{ fontSize:13, fontWeight:700, color:'var(--text-mid)', marginBottom:16 }}>
                Quiz theo môn học
              </div>
              {[
                { subject:'Math', score:8, total:10, color:'#C3BCE8' },
                { subject:'History', score:6, total:10, color:'#FF8C42' },
                { subject:'Physics', score:3, total:10, color:'#5C4EE5' },
              ].map(item => (
                <div key={item.subject} style={{ marginBottom:12 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', fontSize:12,
                    color:'var(--text-muted)', marginBottom:5 }}>
                    <span>{item.subject}</span>
                    <span style={{ fontWeight:700, color:'var(--text-mid)' }}>{item.score}/{item.total}</span>
                  </div>
                  <div style={{ background:'#E2E0FF', borderRadius:8, height:8, overflow:'hidden' }}>
                    <div style={{ width:`${item.score*10}%`, height:'100%', background:item.color, borderRadius:8,
                      transition:'width 0.5s' }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="profile-mini-stats">
              <div className="card profile-mini-stat">
                <i className="ti ti-pencil" style={{ color:'var(--purple)', fontSize:22 }} />
                <div style={{ fontSize:22, fontWeight:800, color:'var(--text-mid)' }}>{currentUser.quizzesCreated}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)' }}>Quiz đã tạo</div>
              </div>
              <div className="card profile-mini-stat" style={{ background:'var(--purple)' }}>
                <i className="ti ti-check" style={{ color:'#fff', fontSize:22 }} />
                <div style={{ fontSize:22, fontWeight:800, color:'#fff' }}>{currentUser.quizzesDone}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,0.8)' }}>Quiz đã làm</div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'Chi tiết' && (
          <>
            <div className="card">
              <div style={{ fontSize:13, fontWeight:700, color:'var(--text-mid)', marginBottom:10 }}>
                Bạn đã chơi {currentUser.quizzesDone} Quiz tháng này!
              </div>
              {/* Accuracy ring */}
              <div style={{ display:'flex', alignItems:'center', gap:16 }}>
                <svg viewBox="0 0 80 80" width={80} height={80}>
                  <circle cx={40} cy={40} r={32} fill="none" stroke="#E2E0FF" strokeWidth={8} />
                  <circle cx={40} cy={40} r={32} fill="none" stroke="var(--purple)" strokeWidth={8}
                    strokeDasharray={`${2*Math.PI*32}`}
                    strokeDashoffset={`${2*Math.PI*32*(1-currentUser.accuracy/100)}`}
                    strokeLinecap="round" transform="rotate(-90 40 40)" />
                  <text x={40} y={45} textAnchor="middle" fontSize={16} fontWeight={800} fill="#5C4EE5">
                    {currentUser.accuracy}%
                  </text>
                </svg>
                <div>
                  <div style={{ fontSize:13, color:'var(--text-muted)', marginBottom:4 }}>Tỷ lệ chính xác</div>
                  <div style={{ fontSize:22, fontWeight:800, color:'var(--text-mid)' }}>{currentUser.accuracy}%</div>
                </div>
              </div>
            </div>
            <div className="profile-mini-stats">
              <div className="card profile-mini-stat">
                <i className="ti ti-pencil" style={{ color:'var(--purple)', fontSize:22 }} />
                <div style={{ fontSize:22, fontWeight:800, color:'var(--text-mid)' }}>{currentUser.quizzesCreated}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)' }}>Quiz đã tạo</div>
              </div>
              <div className="card profile-mini-stat" style={{ background:'var(--purple)' }}>
                <i className="ti ti-check" style={{ color:'#fff', fontSize:22 }} />
                <div style={{ fontSize:22, fontWeight:800, color:'#fff' }}>{currentUser.quizzesDone}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,0.8)' }}>Quiz đã làm</div>
              </div>
            </div>
          </>
        )}
        <div style={{ height: 16 }} />
      </div>

      <BottomNav active="profile" onNavigate={onNavigate} />
    </div>
  )
}