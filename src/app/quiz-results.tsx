import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { InfoCard, MiniStat, Note, Progress } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { quizQuestions } from '@/data/quiz';
import { useStudyDemo } from '@/state/study-demo';

export default function QuizResults() {
  const { correctAnswers, answers, quizMode } = useStudyDemo();
  const total = quizMode === 'multiple-choice' ? quizQuestions.length : 1;
  const percent = Math.round(correctAnswers / total * 100);
  return <TalaScreen title="Practice Complete" subtitle="YOUR STUDY SESSION" footer={<TalaButton label="Review Your Answers" icon="→" onPress={() => router.push('/answer-review')} />}>
    <View style={s.hero}><TalaTag label="SESSION COMPLETE" tone="mint" /><Text style={s.score}>{percent}%</Text><Text style={s.heroTitle}>{percent >= 70 ? 'A lovely bit of progress.' : 'Every question is practice.'}</Text><Text style={s.heroText}>You answered {correctAnswers} of {total} correctly.</Text></View>
    <View style={s.stats}><MiniStat value={`${correctAnswers}/${total}`} label="Correct" /><MiniStat value={`${total - correctAnswers}`} label="To revisit" /><MiniStat value="1" label="Session" /></View>
    <TalaSectionTitle title="Your performance" />
    <TalaCard><View style={s.barTitle}><Text style={s.sectionText}>Cell biology</Text><Text style={s.sectionText}>{percent}%</Text></View><Progress value={percent} /></TalaCard>
    <TalaSectionTitle title="What to revisit" />
    {quizMode === 'multiple-choice' ? quizQuestions.filter((q, index) => answers[index] !== q.answer).map((q) => <View key={q.question} style={s.miss}><InfoCard icon="✎" title={q.question} description="Open the answer review for the explanation" onPress={() => router.push('/answer-review')} /></View>) : <InfoCard icon="✎" title="Review the practice explanation" description="Go through the sample answer and source notes" onPress={() => router.push('/answer-review')} />}
    <Note>These results are a preview and are saved only for this app session.</Note>
    <View style={s.secondary}><TalaButton label="Back to Folio" secondary onPress={() => router.replace('/material')} /></View>
  </TalaScreen>;
}

const s = StyleSheet.create({
  hero: { backgroundColor: c.pine, borderRadius: 20, padding: 22, alignItems: 'center' },
  score: { color: c.mint, fontFamily: f.heading, fontSize: 68, lineHeight: 78, marginTop: 10 },
  heroTitle: { color: c.paper, fontFamily: f.heading, fontSize: 23, textAlign: 'center' },
  heroText: { color: c.mint, fontFamily: f.body, fontSize: 11, marginTop: 5 },
  stats: { flexDirection: 'row', gap: 8, marginTop: 12 },
  barTitle: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 11 },
  sectionText: { color: c.green, fontFamily: f.semibold, fontSize: 11 },
  miss: { marginBottom: 8 },
  secondary: { marginTop: 16 },
});
