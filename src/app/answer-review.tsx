import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Note, PageIntro } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { quizQuestions } from '@/data/quiz';
import { useStudyDemo } from '@/state/study-demo';

export default function AnswerReview() {
  const { answers, quizMode } = useStudyDemo();
  return <TalaScreen title="Answer Review" subtitle="LEARN FROM EVERY QUESTION" footer={<TalaButton label="Return to Folio" icon="→" onPress={() => router.replace('/material')} />}>
    <PageIntro eyebrow="Your study ledger" title="A closer look at your answers" description="See the key idea behind each question and where it came from." />
    {quizMode === 'multiple-choice' ? quizQuestions.map((question, index) => <View key={question.question} style={s.review}>
      <TalaCard><TalaTag label={`QUESTION ${index + 1}`} tone={answers[index] === question.answer ? 'mint' : 'peach'} /><Text style={s.question}>{question.question}</Text><Text style={s.yourAnswer}>Your answer: {answers[index] || 'Not answered'}</Text><Text style={s.correctAnswer}>Correct answer: {question.answer}</Text><Text style={s.explanation}>{question.explanation}</Text><Text style={s.source}>FROM THE NOTES · {question.source}</Text></TalaCard>
    </View>) : <>
      <TalaCard><TalaTag label={quizMode.toUpperCase().replace('-', ' ')} tone="mint" /><Text style={s.question}>{quizMode === 'true-false' ? 'The nucleus releases most usable energy.' : quizMode === 'identification' ? 'What is the cell’s energy-carrying molecule?' : 'Match each organelle to its function.'}</Text><Text style={s.yourAnswer}>Your answer: {answers.join(' · ') || 'Not answered'}</Text><Text style={s.correctAnswer}>Correct answer: {quizMode === 'true-false' ? 'False — mitochondria release usable energy.' : quizMode === 'identification' ? 'ATP' : 'Nucleus → DNA · Mitochondria → energy · Chloroplast → light'}</Text><Text style={s.explanation}>Review the original notes to connect each structure with its role in the cell.</Text></TalaCard>
    </>}
    <TalaSectionTitle title="Keep exploring" />
    <Note>Answers are part of this in-memory preview. They reset when you close the app.</Note>
    <View style={s.secondary}><TalaButton label="Read Original Notes" secondary onPress={() => router.push('/notes')} /></View>
  </TalaScreen>;
}

const s = StyleSheet.create({
  review: { marginBottom: 10 },
  question: { color: c.ink, fontFamily: f.heading, fontSize: 19, lineHeight: 24, marginTop: 12 },
  yourAnswer: { color: c.muted, fontFamily: f.body, fontSize: 11, marginTop: 12 },
  correctAnswer: { color: c.green, fontFamily: f.semibold, fontSize: 11, marginTop: 5 },
  explanation: { color: c.ink, fontFamily: f.body, fontSize: 11, lineHeight: 18, marginTop: 12 },
  source: { color: c.sage, fontFamily: f.medium, fontSize: 9, lineHeight: 15, marginTop: 12 },
  secondary: { marginTop: 15 },
});
