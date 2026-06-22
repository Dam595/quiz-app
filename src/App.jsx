import { useState } from 'react'
import { quizzes } from './data/quizData.js'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import CreateQuiz from './pages/CreateQuiz.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Profile from './pages/Profile.jsx'
import Setting from './pages/Setting.jsx' // 1. Đã bổ sung import Setting
import QuizDetail from './pages/QuizDetail.jsx'
import QuizTaking from './pages/QuizTaking.jsx'
import QuizResult from './pages/QuizResult.jsx'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [selectedQuiz, setSelectedQuiz] = useState(quizzes[0])
  const [resultData, setResultData] = useState(null)

  const navigate = (target) => {
    setScreen(target)
    setResultData(null)
  }

  const selectQuiz = (quiz) => {
    setSelectedQuiz(quiz)
    setScreen('detail')
  }

  // 2. Hàm xử lý tính năng "Ôn tập câu sai" từ màn hình kết quả QuizResult
  const handleRetryWrongOnly = (wrongQuestionIds) => {
    // Tìm các câu hỏi bị sai dựa trên danh sách ID truyền lên từ QuizResult
    const wrongQuestions = selectedQuiz.questions.filter(q => wrongQuestionIds.includes(q.id))
    
    if (wrongQuestions.length === 0) return

    // Tạo một cấu trúc đề thi tạm thời chứa các câu hỏi bị sai
    const wrongQuizSet = {
      ...selectedQuiz,
      title: `Ôn tập câu sai: ${selectedQuiz.title}`,
      questions: wrongQuestions,
      // Tính lại thời gian làm bài giới hạn dựa trên số câu hỏi sai (ví dụ: 15s mỗi câu)
      timeLimit: wrongQuestions.length * 15 
    }

    setSelectedQuiz(wrongQuizSet)
    setResultData(null)
    setScreen('taking') // Chuyển thẳng tới màn hình làm bài
  }

  return (
    <>
      {screen === 'home'    && <Home onNavigate={navigate} onSelectQuiz={selectQuiz} />}
      {screen === 'search'  && <Search onNavigate={navigate} onSelectQuiz={selectQuiz} />}
      {screen === 'create'  && <CreateQuiz onNavigate={navigate} />}
      {screen === 'rank'    && <Leaderboard onNavigate={navigate} />}
      {screen === 'profile' && <Profile onNavigate={navigate} />}
      
      {/* 3. Đã bổ sung điều kiện render cho màn hình Setting */}
      {screen === 'setting' && <Setting onNavigate={navigate} onBack={() => setScreen('profile')} />}

      {screen === 'detail'  && (
        <QuizDetail quiz={selectedQuiz} onStart={() => setScreen('taking')} onBack={() => setScreen('home')} />
      )}
      
      {screen === 'taking'  && (
        <QuizTaking 
          key={Date.now()} // Dùng key này để ép component re-render mới hoàn toàn mỗi khi làm lại
          quiz={selectedQuiz}
          onFinish={(answers, elapsed) => { setResultData({ answers, elapsed }); setScreen('result') }} 
        />
      )}
      
      {screen === 'result' && resultData && (
        <QuizResult 
          quiz={selectedQuiz} 
          answers={resultData.answers} 
          elapsed={resultData.elapsed}
          onRetry={() => { 
            // Nếu làm lại toàn bộ, cần khôi phục lại đề gốc ban đầu (nếu trước đó đang làm đề ôn tập câu sai)
            // Tìm lại đề gốc trong mảng quizzes theo id
            const originalQuiz = quizzes.find(q => q.id === selectedQuiz.id) || selectedQuiz
            setSelectedQuiz(originalQuiz)
            setResultData(null)
            setScreen('taking') 
          }}
          onRetryWrongOnly={handleRetryWrongOnly} // Đèo callback xử lý câu sai xuống QuizResult
          onHome={() => navigate('home')} 
        />
      )}
    </>
  )
}