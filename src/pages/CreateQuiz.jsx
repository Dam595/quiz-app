import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import './CreateQuiz.css'

const emptyQuestion = () => ({ text:'', options:['','','',''], correct:0, hint:'' })

export default function CreateQuiz({ onNavigate }) {
  const [step, setStep] = useState(1) // 1=info, 2=questions, 3=done
  const [info, setInfo] = useState({ title:'', subject:'Math', difficulty:'Trung bình', timeLimit:15 })
  const [questions, setQuestions] = useState([emptyQuestion()])
  const [activeQ, setActiveQ] = useState(0)

  const q = questions[activeQ]
  const updateQ = (field, val) => {
    const updated = questions.map((item, i) => i === activeQ ? { ...item, [field]: val } : item)
    setQuestions(updated)
  }
  const updateOption = (idx, val) => {
    const opts = [...q.options]; opts[idx] = val
    updateQ('options', opts)
  }
  const addQuestion = () => {
    setQuestions([...questions, emptyQuestion()])
    setActiveQ(questions.length)
  }
  const removeQuestion = (idx) => {
    if (questions.length === 1) return
    const updated = questions.filter((_, i) => i !== idx)
    setQuestions(updated)
    setActiveQ(Math.min(activeQ, updated.length - 1))
  }

  if (step === 3) return (
    <div className="phone-shell screen-enter">
      <StatusBar />
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        background:'var(--bg)', gap:20, padding:32 }}>
        <div style={{ width:90, height:90, borderRadius:'50%', background:'var(--purple-light)',
          display:'flex', alignItems:'center', justifyContent:'center' }}>
          <i className="ti ti-check" style={{ fontSize:44, color:'var(--purple)' }} />
        </div>
        <div style={{ fontSize:20, fontWeight:800, color:'var(--text-mid)', textAlign:'center' }}>
          Quiz đã được tạo!
        </div>
        <div style={{ fontSize:13, color:'var(--text-muted)', textAlign:'center' }}>
          "{info.title}" với {questions.length} câu hỏi đã sẵn sàng.
        </div>
        <button className="btn-primary" onClick={() => onNavigate('home')}>
          <i className="ti ti-home" /> Về trang chủ
        </button>
        <button className="btn-outline" style={{ width:'100%' }} onClick={() => { setStep(1); setInfo({ title:'', subject:'Math', difficulty:'Trung bình', timeLimit:15 }); setQuestions([emptyQuestion()]); setActiveQ(0) }}>
          Tạo quiz khác
        </button>
      </div>
      <BottomNav active="create" onNavigate={onNavigate} />
    </div>
  )

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />
      <div className="screen-header">
        <div className="back-row">
          <i className="ti ti-arrow-left" onClick={() => step === 1 ? onNavigate('home') : setStep(1)} />
          <span className="title">{step === 1 ? 'Tạo Quiz mới' : 'Thêm câu hỏi'}</span>
          <div className="cq-step-badge">{step}/2</div>
        </div>
        {/* Step indicator */}
        <div style={{ display:'flex', gap:6 }}>
          {[1,2].map(s => (
            <div key={s} style={{ height:4, flex:1, borderRadius:4,
              background: s <= step ? '#fff' : 'rgba(255,255,255,0.3)' }} />
          ))}
        </div>
      </div>

      <div className="screen-body">
        {step === 1 ? (
          <>
            <div className="section-title">Thông tin Quiz</div>
            <div className="card" style={{ display:'flex', flexDirection:'column', gap:12 }}>
              <div>
                <div className="cq-label">Tên Quiz *</div>
                <input type="text" placeholder="Vd: Xác suất thống kê"
                  value={info.title} onChange={e => setInfo({ ...info, title: e.target.value })} />
              </div>
              <div>
                <div className="cq-label">Môn học</div>
                <select value={info.subject} onChange={e => setInfo({ ...info, subject: e.target.value })}>
                  <option>Math</option>
                  <option>Physics</option>
                  <option>History</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                </select>
              </div>
              <div>
                <div className="cq-label">Độ khó</div>
                <div style={{ display:'flex', gap:8 }}>
                  {['Dễ','Trung bình','Khó'].map(d => (
                    <button key={d} className={`cq-diff-btn ${info.difficulty === d ? 'active' : ''}`}
                      onClick={() => setInfo({ ...info, difficulty: d })}>{d}</button>
                  ))}
                </div>
              </div>
              <div>
                <div className="cq-label">Thời gian làm bài (phút)</div>
                <input type="number" min="5" max="60" value={info.timeLimit}
                  onChange={e => setInfo({ ...info, timeLimit: parseInt(e.target.value) || 15 })} />
              </div>
            </div>
            <button className="btn-primary"
              disabled={!info.title.trim()}
              onClick={() => setStep(2)}>
              Tiếp theo <i className="ti ti-arrow-right" />
            </button>
            <div style={{ height: 16 }} />
          </>
        ) : (
          <>
            {/* Question tabs */}
            <div className="cq-qtabs">
              {questions.map((_, i) => (
                <button key={i} className={`cq-qtab ${activeQ === i ? 'active' : ''}`}
                  onClick={() => setActiveQ(i)}>
                  {i + 1}
                  {questions.length > 1 && activeQ === i && (
                    <span className="cq-qtab-del" onClick={e => { e.stopPropagation(); removeQuestion(i) }}>×</span>
                  )}
                </button>
              ))}
              <button className="cq-qtab-add" onClick={addQuestion}>
                <i className="ti ti-plus" />
              </button>
            </div>

            <div className="card" style={{ display:'flex', flexDirection:'column', gap:12 }}>
              <div>
                <div className="cq-label">Câu hỏi {activeQ + 1} *</div>
                <textarea rows={3} placeholder="Nhập nội dung câu hỏi..."
                  value={q.text} onChange={e => updateQ('text', e.target.value)}
                  style={{ resize:'none' }} />
              </div>
              <div>
                <div className="cq-label">Các đáp án</div>
                {q.options.map((opt, i) => (
                  <div key={i} className={`cq-option-row ${q.correct === i ? 'correct' : ''}`}
                    onClick={() => updateQ('correct', i)}>
                    <div className="cq-opt-letter">{String.fromCharCode(65+i)}</div>
                    <input type="text" placeholder={`Đáp án ${String.fromCharCode(65+i)}`}
                      value={opt} onChange={e => updateOption(i, e.target.value)}
                      onClick={e => e.stopPropagation()}
                      style={{ background:'transparent', border:'none', flex:1, padding:'0', fontSize:13 }} />
                    {q.correct === i && <i className="ti ti-check" style={{ color:'var(--green)', fontSize:16 }} />}
                  </div>
                ))}
                <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:4 }}>Bấm vào hàng để chọn đáp án đúng</div>
              </div>
              <div>
                <div className="cq-label">Gợi ý (không bắt buộc)</div>
                <input type="text" placeholder="Giải thích ngắn gọn..."
                  value={q.hint} onChange={e => updateQ('hint', e.target.value)} />
              </div>
            </div>

            <button className="btn-primary" onClick={() => setStep(3)}
              disabled={questions.some(q2 => !q2.text.trim() || q2.options.some(o => !o.trim()))}>
              <i className="ti ti-check" /> Hoàn tất tạo Quiz
            </button>
            <div style={{ height: 16 }} />
          </>
        )}
      </div>
      <BottomNav active="create" onNavigate={onNavigate} />
    </div>
  )
}