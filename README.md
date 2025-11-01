# Quiz Generator
https://react-quiz-generator-3lba.bolt.host/
A modern, interactive quiz web application built with React, TypeScript, and Tailwind CSS. Test your knowledge with trivia questions from various categories and difficulty levels using the Open Trivia Database API.

## Features

- **Multiple Difficulty Levels**: Choose from Easy, Medium, Hard, or Mixed difficulty
- **10 Random Questions**: Each quiz session generates 10 unique trivia questions
- **Real-time Feedback**: Interactive UI with progress tracking and instant results
- **Comprehensive Review**: Review all questions with correct answers after completion
- **Beautiful Design**: Modern, responsive interface with smooth animations
- **Score Tracking**: Get detailed performance feedback with percentage scores
- **Free API Integration**: Uses Open Trivia Database (OpenTDB) for unlimited questions

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **API**: Open Trivia Database (OpenTDB)

## Project Structure

```
src/
├── components/
│   ├── QuizStart.tsx      # Start screen with difficulty selection
│   ├── QuizQuestion.tsx   # Question display and answer selection
│   └── QuizResults.tsx    # Results screen with score and review
├── services/
│   └── quizApi.ts         # API integration and data fetching
├── types/
│   └── quiz.ts            # TypeScript interfaces and types
├── App.tsx                # Main application component with state management
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quiz-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## How It Works

### Component Architecture

The application follows a clean, modular component-based architecture:

1. **QuizStart**: Landing page where users select their preferred difficulty level
2. **QuizQuestion**: Displays one question at a time with multiple choice answers
3. **QuizResults**: Shows final score with a detailed review of all answers

### State Management

The app uses React hooks (`useState`) for state management:

- `quizState`: Manages quiz data, current question, score, and user answers
- `hasStarted`: Tracks whether the quiz has been initiated

### Data Flow

1. User selects difficulty level
2. App fetches 10 questions from Open Trivia Database API
3. Questions are displayed one at a time
4. User selections are stored in state
5. Score is calculated as questions are answered
6. Final results show score percentage and detailed review

### API Integration

The app uses the **Open Trivia Database (OpenTDB)** API:

- **Endpoint**: `https://opentdb.com/api.php`
- **Features**: Free, no authentication required, 4000+ questions
- **Rate Limit**: 1 request per 5 seconds per IP
- **Categories**: Science, History, Entertainment, Sports, and more

Query parameters:
- `amount`: Number of questions (default: 10)
- `difficulty`: easy, medium, or hard
- `type`: multiple (multiple choice questions)

## Key Features Explained

### Progressive Disclosure
The UI reveals information gradually, starting with difficulty selection, then questions one by one, and finally comprehensive results.

### Answer Randomization
Correct and incorrect answers are shuffled randomly for each question to prevent pattern recognition.

### HTML Entity Decoding
API responses may contain HTML entities which are automatically decoded for proper display.

### Responsive Design
The application is fully responsive with:
- Mobile-first approach
- Flexible layouts using Tailwind CSS
- Smooth transitions and animations
- Touch-friendly interface elements

## Learning Outcomes

This project demonstrates:

1. **React Component Architecture**: Separation of concerns with reusable components
2. **State Management**: Using hooks for local state management
3. **API Integration**: Fetching and handling external data
4. **TypeScript**: Type-safe development with interfaces
5. **Event Handling**: User interactions and form submissions
6. **Conditional Rendering**: Dynamic UI based on application state
7. **Props Communication**: Parent-child component data flow
8. **Error Handling**: Graceful error management and user feedback

## Future Enhancements

Potential improvements for learning:

- Add category selection (Science, History, Sports, etc.)
- Implement timer for each question
- Add leaderboard with local storage
- Include true/false question support
- Add sound effects and animations
- Implement difficulty-based scoring
- Add social sharing features
- Store quiz history and statistics

## API Documentation

**Open Trivia Database API**
- Website: [https://opentdb.com](https://opentdb.com)
- Documentation: [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php)
- No API key required
- Free for personal and educational use

## License

This project is open source and available for educational purposes.

## Acknowledgments

- Quiz questions provided by [Open Trivia Database](https://opentdb.com)
- Icons by [Lucide React](https://lucide.dev)
- Built with [Vite](https://vitejs.dev) and [React](https://react.dev)
