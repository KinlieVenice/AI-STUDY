import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { InfoCard, MiniStat, Note, PageIntro } from '@/components/study-blocks';
import { TalaButton, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function SavedQuiz() {
  const { setQuizMode, setSelectedAnswer, setQuizQuestion, setCorrectAnswers, setAnswers } = useStudyDemo();
  function retry() { setQuizMode('multiple-choice'); setSelectedAnswer(null); setQuizQuestion(0); setCorrectAnswers(0); setAnswers([]); router.push('/quiz'); }
  return <TalaScreen title="Saved Quiz" subtitle="STUDY LEDGER" footer={<TalaButton label="Practice Again" icon="→" onPress={retry} />}>
    <PageIntro eyebrow="Saved rehearsal · sample" title="Cell Biology & Glycolysis" description="A practice set for the small structures and big ideas inside every living cell." />
    <View style={s.banner}><TalaTag label="SAMPLE QUIZ" tone="mint" /><Text style={s.bannerTitle}>Ready for another round?</Text><Text style={s.bannerBody}>You can always return to the notes when a question needs another look.</Text></View>
    <View style={s.stats}><MiniStat value="3" label="Sample MCQs" /><MiniStat value="4" label="Practice modes" /><MiniStat value="∞" label="Rehearsals" /></View>
    <TalaSectionTitle title="What you'll practice" />
    <View style={s.cards}><InfoCard icon="◉" title="Cell structures" description="Nucleus, membranes, mitochondria, and chloroplasts" /><InfoCard icon="✦" title="Energy pathways" description="Photosynthesis, respiration, and ATP" /><InfoCard icon="✎" title="Key definitions" description="Recall the ideas in your own words" /></View>
    <TalaSectionTitle title="Source folio" />
    <InfoCard icon="▤" title="General Biology — Midterms" description="Open the folio and original notes" onPress={() => router.push('/material')} />
    <Note>This is a sample saved quiz card. Persistent quiz saving will be added with the offline data layer.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  banner: { borderRadius: 19, backgroundColor: c.pine, padding: 19 },
  bannerTitle: { color: c.paper, fontFamily: f.heading, fontSize: 25, marginTop: 12 },
  bannerBody: { color: c.mint, fontFamily: f.body, fontSize: 11, lineHeight: 17, marginTop: 5 },
  stats: { flexDirection: 'row', gap: 8, marginTop: 12 },
  cards: { gap: 8 },
});
