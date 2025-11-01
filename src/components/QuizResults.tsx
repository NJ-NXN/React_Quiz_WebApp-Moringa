import { Trophy, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../types/quiz';
import { decodeHtmlEntities } from '../services/quizApi';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  questions: Question[];
  userAnswers: (string | null)[];
  onRestart: () => void;
}

export default function QuizResults({
  score,
  totalQuestions,
  questions,
  userAnswers,
  onRestart,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage === 100) return 'Perfect Score!';
    if (percentage >= 80) return 'Excellent Work!';
    if (percentage >= 60) return 'Good Job!';
    if (percentage >= 40) return 'Not Bad!';
    return 'Keep Practicing!';
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-blue-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 p-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className={`text-4xl font-bold text-center mb-2 ${getPerformanceColor()}`}>
            {getPerformanceMessage()}
          </h1>

          <div className="text-center mb-8">
            <p className="text-6xl font-bold text-gray-800 mb-2">{percentage}%</p>
            <p className="text-xl text-gray-600">
              You scored {score} out of {totalQuestions}
            </p>
          </div>

          <button
            onClick={onRestart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Take Another Quiz
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Answers</h2>

          <div className="space-y-6">
            {questions.map((question, index) => {
              const isCorrect = userAnswers[index] === question.correct_answer;

              return (
                <div
                  key={index}
                  className={`p-5 rounded-xl border-2 ${
                    isCorrect
                      ? 'border-green-200 bg-green-50'
                      : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-2">
                        {index + 1}. {decodeHtmlEntities(question.question)}
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-700">
                          <span className="font-medium">Your Answer:</span>{' '}
                          <span
                            className={isCorrect ? 'text-green-700' : 'text-red-700'}
                          >
                            {userAnswers[index]
                              ? decodeHtmlEntities(userAnswers[index]!)
                              : 'Not answered'}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-gray-700">
                            <span className="font-medium">Correct Answer:</span>{' '}
                            <span className="text-green-700">
                              {decodeHtmlEntities(question.correct_answer)}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
