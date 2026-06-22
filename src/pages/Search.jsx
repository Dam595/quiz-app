import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import { quizzes } from '../data/quizData.js'
import './Search.css'

const subjectIcon  = { Math: 'ti-math-function', Physics: 'ti-atom', History: 'ti-book', default: 'ti-help-circle' }
const subjectColor = { Math: '#5C4EE5', Physics: '#E07B3A', History: '#1A9E61', default: '#9B88FF' }
const difficulties = ['Tất cả', 'Dễ', 'Trung bình', 'Khó']
const subjects     = ['Tất cả', 'Math', 'Physics', 'History']

const SORT_OPTIONS = [
  { key: 'default',      label: 'Mặc định',       icon: 'ti-layout-list' },
  { key: 'participants', label: 'Làm nhiều nhất',  icon: 'ti-users' },
  { key: 'questions',    label: 'Số câu hỏi',      icon: 'ti-list-numbers' },
  { key: 'alpha',        label: 'Tên đề (A–Z)',    icon: 'ti-sort-ascending-letters' },
]

export default function Search({ onNavigate, onSelectQuiz }) {
  const [query,   setQuery]   = useState('')
  const [diff,    setDiff]    = useState('Tất cả')
  const [subject, setSubject] = useState('Tất cả')
  const [sortBy,  setSortBy]  = useState('default')

  const results = quizzes
    .filter(q => {
      const matchQuery = q.title.toLowerCase().includes(query.toLowerCase()) ||
        q.subject.toLowerCase().includes(query.toLowerCase())
      const matchDiff  = diff    === 'Tất cả' || q.difficulty === diff
      const matchSubj  = subject === 'Tất cả' || q.subject    === subject
      return matchQuery && matchDiff && matchSubj
    })
    .sort((a, b) => {
      if (sortBy === 'participants') return b.participants    - a.participants
      if (sortBy === 'questions')    return b.totalQuestions  - a.totalQuestions
      if (sortBy === 'alpha')        return a.title.localeCompare(b.title, 'vi')
      return 0
    })

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

      <div className="search-search-bar">
        <i className="ti ti-search" />
        <input
          type="text"
          placeholder="Tìm kiếm quiz, môn học..."
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

      <div className="screen-body" style={{ paddingTop: 12 }}>
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

        {/* Result count */}
        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>
          {results.length} kết quả
          {sortBy !== 'default' && (
            <span className="search-sort-active-badge">
              <i className="ti ti-check" /> {activeSortLabel}
            </span>
          )}
        </div>

        {results.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
            <i className="ti ti-search-off" style={{ fontSize: 40, display: 'block', marginBottom: 10 }} />
            <div style={{ fontSize: 14, fontWeight: 600 }}>Không tìm thấy kết quả</div>
          </div>
        ) : (
          results.map(q => (
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
        <div style={{ height: 16 }} />
      </div>

      <BottomNav active="search" onNavigate={onNavigate} />
    </div>
  )
}