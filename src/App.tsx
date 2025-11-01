import { useState } from 'react';
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizResults from './components/QuizResults';
import { QuizState } from './types/quiz';
import { fetchQuizQuestions } from './services/quizApi';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    isLoading: false,
    isQuizComplete: false,
  });

  const [hasStarted, setHasStarted] = useState(false);

  const handleStartQuiz = async (difficulty: string) => {
    setQuizState((prev) => ({ ...prev, isLoading: true }));

    try {
      const questions = await fetchQuizQuestions(10, difficulty);
      setQuizState({
        questions,
        currentQuestionIndex: 0,
        score: 0,
        userAnswers: new Array(questions.length).fill(null),
        isLoading: false,
        isQuizComplete: false,
      });
      setHasStarted(true);
    } catch (error) {
      console.error('Error starting quiz:', error);
      setQuizState((prev) => ({ ...prev, isLoading: false }));
      alert('Failed to load quiz questions. Please try again.');
    }
  };

  const handleAnswerSelect = (answer: string) => {
    const updatedAnswers = [...quizState.userAnswers];
    updatedAnswers[quizState.currentQuestionIndex] = answer;
    setQuizState((prev) => ({
      ...prev,
      userAnswers: updatedAnswers,
    }));
  };

  const handleNextQuestion = () => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const selectedAnswer = quizState.userAnswers[quizState.currentQuestionIndex];

    let newScore = quizState.score;
    if (selectedAnswer === currentQuestion.correct_answer) {
      newScore++;
    }

    if (quizState.currentQuestionIndex === quizState.questions.length - 1) {
      setQuizState((prev) => ({
        ...prev,
        score: newScore,
        isQuizComplete: true,
      }));
    } else {
      setQuizState((prev) => ({
        ...prev,
        score: newScore,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  };

  const handleRestart = () => {
    setQuizState({
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      userAnswers: [],
      isLoading: false,
      isQuizComplete: false,
    });
    setHasStarted(false);
  };

  if (quizState.isQuizComplete) {
    return (
      <QuizResults
        score={quizState.score}
        totalQuestions={quizState.questions.length}
        questions={quizState.questions}
        userAnswers={quizState.userAnswers}
        onRestart={handleRestart}
      />
    );
  }

  if (!hasStarted) {
    return <QuizStart onStart={handleStartQuiz} isLoading={quizState.isLoading} />;
  }

  return (
    <QuizQuestion
      question={quizState.questions[quizState.currentQuestionIndex]}
      currentIndex={quizState.currentQuestionIndex}
      totalQuestions={quizState.questions.length}
      selectedAnswer={quizState.userAnswers[quizState.currentQuestionIndex]}
      onAnswerSelect={handleAnswerSelect}
      onNext={handleNextQuestion}
    />
  );
}

export default App;
