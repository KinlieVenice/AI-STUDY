import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Choice, Progress } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { quizQuestions } from '@/data/quiz';
import { useStudyDemo } from '@/state/study-demo';

export default function Quiz() {
  const { quizQuestion, selectedAnswer, setSelectedAnswer, setAnswers, answers, correctAnswers, setCorrectAnswers } = useStudyDemo();
  const question = quizQuestions[Math.min(quizQuestion, quizQuestions.length - 1)];
  function submit() {
    if (!selectedAnswer) return;
    setAnswers([...answers, selectedAnswer]);
    if (selectedAnswer === question.answer) setCorrectAnswers(correctAnswers + 1);
    router.replace('/quiz-feedback');
  }
  return <TalaScreen title="Practice Session" subtitle="MULTIPLE CHOICE" footer={<TalaButton label="Submit Answer" icon="→" disabled={!selectedAnswer} onPress={submit} />}>
    <View style={s.progressRow}><Text style={s.progressText}>Question {quizQuestion + 1} of {quizQuestions.length}</Text><TalaTag label="CELL BIOLOGY" tone="mint" /></View>
    <Progress value={(quizQuestion + 1) / quizQuestions.length * 100} />
    <TalaCard style={s.questionCard}><Text style={s.eyebrow}>CHOOSE THE BEST ANSWER</Text><Text style={s.question}>{question.question}</Text></TalaCard>
    <Text style={s.section}>Your answer</Text>
    {question.options.map((option, index) => <Choice key={option} label={`${String.fromCharCode(65 + index)}.  ${option}`} selected={selectedAnswer === option} onPress={() => setSelectedAnswer(option)} />)}
    <Text style={s.helper}>Take your time. You can review each answer after submitting.</Text>
  </TalaScreen>;
}

const s = StyleSheet.create({
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 13 },
  progressText: { color: c.green, fontFamily: f.semibold, fontSize: 11 },
  questionCard: { marginTop: 25, paddingVertical: 26, backgroundColor: c.pine, borderColor: c.pine },
  eyebrow: { color: c.mint, fontFamily: f.bold, fontSize: 9, letterSpacing: 1.2 },
  question: { color: c.paper, fontFamily: f.heading, fontSize: 25, lineHeight: 31, marginTop: 14 },
  section: { color: c.ink, fontFamily: f.heading, fontSize: 19, marginTop: 25, marginBottom: 12 },
  helper: { color: c.muted, fontFamily: f.body, fontSize: 10, lineHeight: 16, marginTop: 8 },
});
