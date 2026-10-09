import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type MaterialStatus = 'empty' | 'processing' | 'ready';
type QuizMode = 'multiple-choice' | 'true-false' | 'identification' | 'matching';

type StudyDemoState = {
  title: string;
  setTitle: (value: string) => void;
  noteText: string;
  setNoteText: (value: string) => void;
  selectedFiles: string[];
  toggleFile: (name: string) => void;
  materialStatus: MaterialStatus;
  setMaterialStatus: (status: MaterialStatus) => void;
  quizMode: QuizMode;
  setQuizMode: (mode: QuizMode) => void;
  selectedAnswer: string | null;
  setSelectedAnswer: (answer: string | null) => void;
  correctAnswers: number;
  setCorrectAnswers: (count: number) => void;
  quizQuestion: number;
  setQuizQuestion: (index: number) => void;
  answers: string[];
  setAnswers: (answers: string[]) => void;
};

const StudyDemoContext = createContext<StudyDemoState | null>(null);

export function StudyDemoProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState('General Biology — Midterms');
  const [noteText, setNoteText] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [materialStatus, setMaterialStatus] = useState<MaterialStatus>('empty');
  const [quizMode, setQuizMode] = useState<QuizMode>('multiple-choice');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizQuestion, setQuizQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const value = useMemo<StudyDemoState>(() => ({
    title, setTitle, noteText, setNoteText, selectedFiles,
    toggleFile: (name) => setSelectedFiles((current) => current.includes(name) ? current.filter((file) => file !== name) : [...current, name]),
    materialStatus, setMaterialStatus, quizMode, setQuizMode,
    selectedAnswer, setSelectedAnswer, correctAnswers, setCorrectAnswers,
    quizQuestion, setQuizQuestion, answers, setAnswers,
  }), [title, noteText, selectedFiles, materialStatus, quizMode, selectedAnswer, correctAnswers, quizQuestion, answers]);

  return <StudyDemoContext.Provider value={value}>{children}</StudyDemoContext.Provider>;
}

export function useStudyDemo() {
  const value = useContext(StudyDemoContext);
  if (!value) throw new Error('StudyDemoProvider is missing');
  return value;
}
