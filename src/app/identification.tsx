import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Note, PageIntro, Progress } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function Identification() {
  const { selectedAnswer, setSelectedAnswer, setAnswers, setCorrectAnswers } = useStudyDemo();
  function submit() { const answer = selectedAnswer?.trim() || ''; setAnswers([answer]); setCorrectAnswers(answer.toLowerCase().includes('atp') ? 1 : 0); router.push('/quiz-results'); }
  return <TalaScreen title="Identification" subtitle="PRACTICE SESSION" footer={<TalaButton label="Submit Answer" icon="→" disabled={!selectedAnswer?.trim()} onPress={submit} />}>
    <View style={s.top}><Text style={s.progressText}>Question 1 of 1</Text><TalaTag label="RECALL" tone="mint" /></View><Progress value={100} />
    <View style={s.space}><PageIntro eyebrow="Find the word" title="What is it called?" description="Recall the term from your notes." /></View>
    <TalaCard style={s.question}><Text style={s.questionText}>What is the main energy-carrying molecule made during cellular respiration?</Text></TalaCard>
    <Text style={s.label}>YOUR ANSWER</Text>
    <TextInput accessibilityLabel="Identification answer" autoCapitalize="characters" placeholder="Type your answer here" placeholderTextColor={c.sage} value={selectedAnswer || ''} onChangeText={setSelectedAnswer} style={s.input} />
    <Note>A short answer is enough. You can review the explanation on the next screen.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  progressText: { color: c.green, fontFamily: f.semibold, fontSize: 11 },
  space: { marginTop: 25 },
  question: { backgroundColor: c.pine, borderColor: c.pine, paddingVertical: 28 },
  questionText: { color: c.paper, fontFamily: f.heading, fontSize: 24, lineHeight: 31 },
  label: { color: c.sage, fontFamily: f.bold, fontSize: 9, letterSpacing: 1, marginTop: 25, marginBottom: 8 },
  input: { height: 56, backgroundColor: c.paper, borderWidth: 1, borderColor: c.outline, borderRadius: 14, paddingHorizontal: 15, color: c.ink, fontFamily: f.semibold, fontSize: 14 },
});
