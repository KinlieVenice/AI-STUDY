import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { InfoCard, MiniStat, Note } from '@/components/study-blocks';
import { TalaButton, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function Practice() {
  const { setQuizMode, setSelectedAnswer, setCorrectAnswers, setQuizQuestion, setAnswers } = useStudyDemo();
  function begin(mode: 'multiple-choice' | 'true-false' | 'identification' | 'matching', route: '/quiz' | '/true-false' | '/identification' | '/matching') {
    setQuizMode(mode); setSelectedAnswer(null); setCorrectAnswers(0); setQuizQuestion(0); setAnswers([]); router.push(route);
  }
  return <TalaScreen title="Quiz Runner" subtitle="PRACTICE YOUR KNOWLEDGE" footer={<TalaButton label="Start Practice Session" icon="→" onPress={() => begin('multiple-choice', '/quiz')} />}>
    <View style={s.hero}><TalaTag label="READY WHEN YOU ARE" tone="mint" /><Text style={s.heroTitle}>Cellular Respiration & Glycolysis</Text><Text style={s.heroText}>A gentle rehearsal of what you’ve learned.</Text></View>
    <View style={s.stats}><MiniStat value="3" label="Sample MCQs" /><MiniStat value="4" label="Practice modes" /><MiniStat value="∞" label="Try again" /></View>
    <TalaSectionTitle title="Select practice mode" hint="Choose one" />
    <View style={s.cards}>
      <InfoCard icon="◉" title="Multiple Choice" description="Choose the best answer from four options" onPress={() => begin('multiple-choice', '/quiz')} />
      <InfoCard icon="✓" title="True or False" description="Decide whether each statement holds up" onPress={() => begin('true-false', '/true-false')} />
      <InfoCard icon="✎" title="Identification" description="Recall an answer in your own words" onPress={() => begin('identification', '/identification')} />
      <InfoCard icon="↔" title="Matching Type" description="Connect terms to their meanings" onPress={() => begin('matching', '/matching')} />
    </View>
    <TalaSectionTitle title="Recent practice" />
    <InfoCard icon="▤" title="Cell Biology & Glycolysis Rehearsal" description="View a sample saved quiz and answer review" onPress={() => router.push('/saved-quiz')} />
    <Note>Practice uses sample questions in this preview. Scores are kept only while the app is open.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  hero: { borderRadius: 20, backgroundColor: c.pine, padding: 20, minHeight: 163, justifyContent: 'center' },
  heroTitle: { color: c.paper, fontFamily: f.heading, fontSize: 28, lineHeight: 31, marginTop: 12 },
  heroText: { color: c.mint, fontFamily: f.body, fontSize: 11, marginTop: 6 },
  stats: { flexDirection: 'row', gap: 8, marginTop: 12 },
  cards: { gap: 8 },
});
