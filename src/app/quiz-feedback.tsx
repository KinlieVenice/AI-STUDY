import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Choice, Note, PageIntro, Progress } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { quizQuestions } from '@/data/quiz';
import { useStudyDemo } from '@/state/study-demo';

export default function QuizFeedback() {
  const { quizQuestion, selectedAnswer, setSelectedAnswer, setQuizQuestion } = useStudyDemo();
  const question = quizQuestions[Math.min(quizQuestion, quizQuestions.length - 1)];
  const correct = selectedAnswer === question.answer;
  const last = quizQuestion === quizQuestions.length - 1;
  function next() {
    if (last) router.replace('/quiz-results');
    else { setQuizQuestion(quizQuestion + 1); setSelectedAnswer(null); router.replace('/quiz'); }
  }
  return <TalaScreen title="Answer Feedback" subtitle={`QUESTION ${quizQuestion + 1} OF ${quizQuestions.length}`} footer={<TalaButton label={last ? 'See Your Results' : 'Next Question'} icon="→" onPress={next} />}>
    <View style={s.progress}><Progress value={(quizQuestion + 1) / quizQuestions.length * 100} /></View>
    <PageIntro eyebrow={correct ? 'Well done' : 'Keep learning'} title={correct ? 'That’s right.' : 'A good thing to revisit.'} description={question.question} />
    <TalaTag label={correct ? 'CORRECT ANSWER' : 'ANSWER REVIEW'} tone={correct ? 'mint' : 'peach'} />
    <View style={s.answers}>{question.options.map((option) => <Choice key={option} label={option} selected={selectedAnswer === option} correct={option === question.answer} wrong={selectedAnswer === option && !correct} />)}</View>
    <TalaCard><Text style={s.cardEyebrow}>WHY IT MATTERS</Text><Text style={s.cardTitle}>{question.explanation}</Text></TalaCard>
    <Note>{`From your sample notes: “${question.source}”`}</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  progress: { marginBottom: 22 },
  answers: { marginTop: 16, marginBottom: 14 },
  cardEyebrow: { color: c.sage, fontFamily: f.bold, fontSize: 9, letterSpacing: 1 },
  cardTitle: { color: c.ink, fontFamily: f.body, fontSize: 12, lineHeight: 20, marginTop: 8 },
});
