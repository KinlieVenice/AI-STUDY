import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Choice, Note, PageIntro, Progress } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function TrueFalse() {
  const { selectedAnswer, setSelectedAnswer, setAnswers, setCorrectAnswers } = useStudyDemo();
  function submit() { if (!selectedAnswer) return; setAnswers([selectedAnswer]); setCorrectAnswers(selectedAnswer === 'False' ? 1 : 0); router.push('/quiz-results'); }
  return <TalaScreen title="True or False" subtitle="PRACTICE SESSION" footer={<TalaButton label="Check Answer" icon="→" disabled={!selectedAnswer} onPress={submit} />}>
    <View style={s.top}><Text style={s.progressText}>Question 1 of 1</Text><TalaTag label="CELL BIOLOGY" tone="mint" /></View><Progress value={100} />
    <View style={s.space}><PageIntro eyebrow="Consider the statement" title="True or false?" description="Think through what you've learned before choosing." /></View>
    <TalaCard style={s.statement}><Text style={s.statementText}>“The nucleus is the organelle that releases most of the cell’s usable energy.”</Text></TalaCard>
    <View style={s.choices}><Choice label="True" selected={selectedAnswer === 'True'} onPress={() => setSelectedAnswer('True')} /><Choice label="False" selected={selectedAnswer === 'False'} onPress={() => setSelectedAnswer('False')} /></View>
    <Note>Tip: think about which organelle carries DNA and which helps make ATP.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  progressText: { color: c.green, fontFamily: f.semibold, fontSize: 11 },
  space: { marginTop: 25 },
  statement: { backgroundColor: c.pine, borderColor: c.pine, paddingVertical: 28 },
  statementText: { color: c.paper, fontFamily: f.heading, fontSize: 24, lineHeight: 31 },
  choices: { marginTop: 24 },
});
