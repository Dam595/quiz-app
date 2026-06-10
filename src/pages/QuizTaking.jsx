import { useState, useEffect, useRef } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import BottomNav from '../components/BottomNav.jsx'
import './QuizTaking.css'

export default function QuizTaking({ quiz, onFinish }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [answers, setAnswers] = useState([]) // { questionId, chosen, correct }
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit)
  const timerRef = useRef(null)

  const question = quiz.questions[current]
  const progress = ((current) / quiz.questions.length) * 100
  const isLast = current === quiz.questions.length - 1

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          handleFinish([...answers])
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0')
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  const handleConfirm = () => {
    if (selected === null) return
    const newAnswers = [...answers, {
      questionId: question.id,
      chosen: selected,
      correct: selected === question.correct,
    }]
    setAnswers(newAnswers)
    setConfirmed(true)
    if (isLast) {
      clearInterval(timerRef.current)
      setTimeout(() => handleFinish(newAnswers), 800)
    }
  }

  const handleNext = () => {
    setCurrent(c => c + 1)
    setSelected(null)
    setConfirmed(false)
  }

  const handleFinish = (finalAnswers) => {
    const elapsed = quiz.timeLimit - timeLeft
    onFinish(finalAnswers, elapsed)
  }

  const getOptionClass = (idx) => {
    if (!confirmed) return selected === idx ? 'option selected' : 'option'
    if (idx === question.correct) return 'option correct'
    if (idx === selected && selected !== question.correct) return 'option wrong'
    return 'option'
  }

  const correctCount = answers.filter(a => a.correct).length
  const wrongCount = answers.filter(a => !a.correct).length
  const remaining = quiz.questions.length - answers.length

  return (
    <div className="phone-shell screen-enter">
      <StatusBar />
      <div className="screen-header">
        <div className="back-row">
          <i className="ti ti-x" onClick={() => { clearInterval(timerRef.current); onFinish(answers, quiz.timeLimit - timeLeft) }} />
          <span className="title" style={{ fontSize: 14 }}>{quiz.title}</span>
          <div className={`qt-timer ${timeLeft <= 30 ? 'warn' : ''}`}>{formatTime(timeLeft)}</div>
        </div>
        <div className="qt-prog-top">
          <span>Câu {current + 1} / {quiz.questions.length}</span>
          <strong>{Math.round(progress)}%</strong>
        </div>
        <div className="qt-prog-bar">
          <div className="qt-prog-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="screen-body">
        {/* Question */}
        <div className="card">
          <div className="qt-qnum">Câu {current + 1}</div>
          <div className="qt-qtext">{question.text}</div>
        </div>

        {/* Options */}
        <div className="qt-options">
          {question.options.map((opt, idx) => (
            <div
              key={idx}
              className={getOptionClass(idx)}
              onClick={() => !confirmed && setSelected(idx)}
            >
              <div className="opt-letter">{String.fromCharCode(65 + idx)}</div>
              <div className="opt-text">{opt}</div>
              {confirmed && idx === question.correct && (
                <i className="ti ti-check" style={{ color: '#1A9E61', fontSize: 16, marginLeft: 'auto' }} />
              )}
              {confirmed && idx === selected && selected !== question.correct && (
                <i className="ti ti-x" style={{ color: '#E24B4A', fontSize: 16, marginLeft: 'auto' }} />
              )}
            </div>
          ))}
        </div>

        {/* Hint */}
        {confirmed && (
          <div className="qt-hint">
            <i className="ti ti-bulb" />
            <span>{question.hint}</span>
          </div>
        )}

        {/* Action button */}
        {!confirmed ? (
          <button
            className="btn-primary"
            onClick={handleConfirm}
            disabled={selected === null}
            style={{ opacity: selected === null ? 0.5 : 1 }}
          >
            Xác nhận đáp án
          </button>
        ) : !isLast ? (
          <button className="btn-primary" onClick={handleNext}>
            Câu tiếp theo <i className="ti ti-arrow-right" />
          </button>
        ) : null}

        {/* Mini progress dots */}
        <div className="qt-dots">
          {quiz.questions.map((_, i) => {
            let cls = 'dot'
            if (i < answers.length) cls += answers[i].correct ? ' dot-correct' : ' dot-wrong'
            else if (i === current) cls += ' dot-current'
            return <div key={i} className={cls} />
          })}
        </div>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#9B9AC0', marginBottom: 16 }}>
          {correctCount} đúng · {wrongCount} sai · {remaining} chưa làm
        </div>
      </div>

      <BottomNav active="profile" />
    </div>
  )
}
