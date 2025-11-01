import { Brain, ChevronRight } from 'lucide-react';

interface QuizStartProps {
  onStart: (difficulty: string) => void;
  isLoading: boolean;
}

export default function QuizStart({ onStart, isLoading }: QuizStartProps) {
  const handleDifficultySelect = (difficulty: string) => {
    onStart(difficulty);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-4 rounded-full">
            <Brain className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-3">
          Quiz Generator
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Test your knowledge with 10 random trivia questions
        </p>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Select Difficulty:
          </h2>

          <button
            onClick={() => handleDifficultySelect('easy')}
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg">Easy</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleDifficultySelect('medium')}
            disabled={isLoading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg">Medium</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleDifficultySelect('hard')}
            disabled={isLoading}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg">Hard</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleDifficultySelect('')}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg">Mixed Difficulty</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {isLoading && (
          <div className="mt-6 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 mt-2">Loading questions...</p>
          </div>
        )}
      </div>
    </div>
  );
}
