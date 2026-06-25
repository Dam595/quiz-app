import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { quizzes, users } from '../data/quizData.js'
import './Search.css'

const subjectIcon  = { 'Toán đại cương': 'ti-math-function', 'IT (Lập trình)': 'ti-code', 'EE (Điện - Điện tử)': 'ti-bolt', 'ME (Cơ khí)': 'ti-settings', default: 'ti-help-circle' }
const subjectColor = { 'Toán đại cương': '#5C4EE5', 'IT (Lập trình)': '#1A9E61', 'EE (Điện - Điện tử)': '#E07B3A', 'ME (Cơ khí)': '#FF6B8A', default: '#9B88FF' }
const difficulties = ['Tất cả', 'Dễ', 'Trung bình', 'Khó']
const subjects     = ['Tất cả', 'Toán đại cương', 'IT (Lập trình)', 'EE (Điện - Điện tử)', 'ME (Cơ khí)']

const SORT_OPTIONS = [
  { key: 'default',      label: 'Mặc định',      icon: 'ti-layout-list' },
  { key: 'participants', label: 'Làm nhiều nhất', icon: 'ti-users' },
  { key: 'questions',    label: 'Số câu hỏi',     icon: 'ti-list-numbers' },
  { key: 'alpha',        label: 'Tên đề (A–Z)',   icon: 'ti-sort-ascending-letters' },
]

export default function Search({ onNavigate, onSelectQuiz }) {
  const [query,     setQuery]     = useState('')
  const [diff,      setDiff]      = useState('Tất cả')
  const [subject,   setSubject]   = useState('Tất cả')
  const [sortBy,    setSortBy]    = useState('default')
  const [searchTab, setSearchTab] = useState('quizzes')

  const quizResults = quizzes
    .filter(q => {
      const matchQuery = q.title.toLowerCase().includes(query.toLowerCase()) ||
        q.subject.toLowerCase().includes(query.toLowerCase())
      const matchDiff  = diff    === 'Tất cả' || q.difficulty === diff
      const matchSubj  = subject === 'Tất cả' || q.subject    === subject
      return matchQuery && matchDiff && matchSubj
    })
    .sort((a, b) => {
      if (sortBy === 'participants') return b.participants   - a.participants
      if (sortBy === 'questions')    return b.totalQuestions - a.totalQuestions
      if (sortBy === 'alpha')        return a.title.localeCompare(b.title, 'vi')
      return 0
    })

  const userResults = users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase())
  )

  const activeSortLabel = SORT_OPTIONS.find(o => o.key === sortBy)?.label

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />
      <div className="screen-header">
        <div className="back-row" style={{ marginBottom: 0 }}>
          <i className="ti ti-arrow-left" onClick={() => onNavigate('home')} />
          <span className="title">Khám phá</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="search-search-bar">
        <i className="ti ti-search" />
        <input
          type="text"
          placeholder={searchTab === 'quizzes' ? 'Tìm kiếm quiz, môn học...' : 'Tìm kiếm người dùng...'}
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ background: 'transparent', border: 'none', outline: 'none', flex: 1,
            fontSize: 14, fontFamily: 'Be Vietnam Pro', color: 'var(--text-dark)' }}
        />
        {query && (
          <i className="ti ti-x" onClick={() => setQuery('')}
            style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />
        )}
      </div>

      {/* Tabs */}
      <div className="search-tabs">
        <button
          className={`search-tab-btn ${searchTab === 'quizzes' ? 'active' : ''}`}
          onClick={() => setSearchTab('quizzes')}
        >
          <i className="ti ti-file-text" /> Đề thi
        </button>
        <button
          className={`search-tab-btn ${searchTab === 'users' ? 'active' : ''}`}
          onClick={() => setSearchTab('users')}
        >
          <i className="ti ti-users" /> Người dùng
        </button>
      </div>

      {/* Filter + Sort nằm NGOÀI screen-body để không bị overflow ẩn */}
      {searchTab === 'quizzes' && (
        <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 6, padding: '10px 16px 0' }}>
          {/* Difficulty filter */}
          <div className="search-filter-row">
            {difficulties.map(d => (
              <button key={d} className={`search-filter-btn ${diff === d ? 'active' : ''}`}
                onClick={() => setDiff(d)}>{d}</button>
            ))}
          </div>

          {/* Subject filter */}
          <div className="search-filter-row">
            {subjects.map(s => (
              <button key={s} className={`search-filter-btn ${subject === s ? 'active' : ''}`}
                onClick={() => setSubject(s)}>{s}</button>
            ))}
          </div>

          {/* Sort row */}
          <div className="search-sort-row">
            <span className="search-sort-label">
              <i className="ti ti-arrows-sort" /> Sắp xếp:
            </span>
            <div className="search-sort-pills">
              {SORT_OPTIONS.map(opt => (
                <button
                  key={opt.key}
                  className={`search-sort-pill ${sortBy === opt.key ? 'active' : ''}`}
                  onClick={() => setSortBy(opt.key)}
                >
                  <i className={`ti ${opt.icon}`} />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="screen-body" style={{ paddingTop: 8 }}>

        {searchTab === 'quizzes' && (
          <>
            {/* Result count */}
            <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>
              {quizResults.length} kết quả
              {sortBy !== 'default' && (
                <span className="search-sort-active-badge">
                  <i className="ti ti-check" /> {activeSortLabel}
                </span>
              )}
            </div>

            {quizResults.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
                <i className="ti ti-search-off" style={{ fontSize: 40, display: 'block', marginBottom: 10 }} />
                <div style={{ fontSize: 14, fontWeight: 600 }}>Không tìm thấy kết quả</div>
              </div>
            ) : (
              quizResults.map(q => (
                <div key={q.id} className="search-result-card" onClick={() => onSelectQuiz(q)}>
                  <div className="search-result-icon"
                    style={{ background: subjectColor[q.subject] || subjectColor.default }}>
                    <i className={`ti ${subjectIcon[q.subject] || subjectIcon.default}`} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-mid)', marginBottom: 3 }}>
                      {q.title}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                      {q.source} · {q.subject} · {q.totalQuestions} câu
                    </div>
                    <div style={{ display: 'flex', gap: 5, marginTop: 5 }}>
                      <span className="tag tag-purple">{q.difficulty}</span>
                      <span className="tag tag-orange">{q.participants} người đã làm</span>
                    </div>
                  </div>
                  <i className="ti ti-chevron-right" style={{ color: '#C3BCE8', fontSize: 16 }} />
                </div>
              ))
            )}
          </>
        )}

        {searchTab === 'users' && (
          <>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>
              {userResults.length} người dùng
            </div>

            {userResults.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
                <i className="ti ti-search-off" style={{ fontSize: 40, display: 'block', marginBottom: 10 }} />
                <div style={{ fontSize: 14, fontWeight: 600 }}>Không tìm thấy kết quả</div>
              </div>
            ) : (
              userResults.map(u => (
                <div key={u.id} className="search-result-card" style={{ alignItems: 'center' }}>
                  <div className="search-user-avatar">
                    <i className="ti ti-user" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-mid)', marginBottom: 4 }}>
                      {u.name}
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <i className="ti ti-star" style={{ color: '#FFD166', fontSize: 12 }} />
                        {u.points} điểm
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <i className="ti ti-flame" style={{ color: '#E07B3A', fontSize: 12 }} />
                        {u.streak} ngày
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <i className="ti ti-trophy" style={{ color: '#5C4EE5', fontSize: 12 }} />
                        #{u.rank}
                      </span>
                    </div>
                  </div>
                  <button className="search-add-btn">
                    <i className="ti ti-user-plus" /> Thêm bạn
                  </button>
                </div>
              ))
            )}
          </>
        )}

        <div style={{ height: 16 }} />
      </div>

      <BottomNav active="search" onNavigate={onNavigate} />
    </div>
  )
}