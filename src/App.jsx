import { useState } from 'react'
import { quizzes } from './data/quizData.js'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import CreateQuiz from './pages/CreateQuiz.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Profile from './pages/Profile.jsx'
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

  return (
    <>
      {screen === 'home'    && <Home onNavigate={navigate} onSelectQuiz={selectQuiz} />}
      {screen === 'search'  && <Search onNavigate={navigate} onSelectQuiz={selectQuiz} />}
      {screen === 'create'  && <CreateQuiz onNavigate={navigate} />}
      {screen === 'rank'    && <Leaderboard onNavigate={navigate} />}
      {screen === 'profile' && <Profile onNavigate={navigate} />}
      {screen === 'detail'  && (
        <QuizDetail quiz={selectedQuiz} onStart={() => setScreen('taking')} onBack={() => setScreen('home')} />
      )}
      {screen === 'taking'  && (
        <QuizTaking key={Date.now()} quiz={selectedQuiz}
          onFinish={(answers, elapsed) => { setResultData({ answers, elapsed }); setScreen('result') }} />
      )}
      {screen === 'result' && resultData && (
        <QuizResult quiz={selectedQuiz} answers={resultData.answers} elapsed={resultData.elapsed}
          onRetry={() => { setResultData(null); setScreen('taking') }}
          onHome={() => navigate('home')} />
      )}
    </>
  )
}