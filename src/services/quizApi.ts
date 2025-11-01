import { Question } from '../types/quiz';

const API_BASE_URL = 'https://opentdb.com/api.php';

export const fetchQuizQuestions = async (
  amount: number = 10,
  difficulty?: string,
  category?: string
): Promise<Question[]> => {
  try {
    let url = `${API_BASE_URL}?amount=${amount}`;

    if (difficulty) {
      url += `&difficulty=${difficulty}`;
    }

    if (category) {
      url += `&category=${category}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch quiz questions');
    }

    const data = await response.json();

    if (data.response_code !== 0) {
      throw new Error('No questions available for selected criteria');
    }

    return data.results;
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    throw error;
  }
};

export const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};
