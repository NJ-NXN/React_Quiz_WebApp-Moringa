import { CheckCircle2, Circle } from 'lucide-react';
import { Question } from '../types/quiz';
import { decodeHtmlEntities } from '../services/quizApi';

interface QuizQuestionProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
}

export default function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
}: QuizQuestionProps) {
  const allAnswers = [
    question.correct_answer,
    ...question.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor(
                question.difficulty
              )}`}
            >
              {question.difficulty.toUpperCase()}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>

          <p className="text-xs text-gray-500 mb-4">{question.category}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {decodeHtmlEntities(question.question)}
          </h2>
        </div>

        <div className="space-y-3 mb-8">
          {allAnswers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(answer)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                selectedAnswer === answer
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              {selectedAnswer === answer ? (
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
              ) : (
                <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
              )}
              <span className="text-gray-800 font-medium">
                {decodeHtmlEntities(answer)}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}
