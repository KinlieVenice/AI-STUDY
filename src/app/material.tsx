import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { InfoCard, MiniStat, Note } from '@/components/study-blocks';
import { TalaButton, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function Material() {
  const { title, selectedFiles } = useStudyDemo();
  return <TalaScreen title="Material Folio" subtitle="STUDY READY" footer={<TalaButton label="Start a Practice Session" icon="→" onPress={() => router.push('/practice')} />}>
    <View style={s.hero}><Image source={require('../../assets/images/tala-onboarding-3.jpg')} style={s.image} contentFit="cover" accessibilityLabel="Study notes in warm light" /><View style={s.heroText}><TalaTag label="STUDY READY" tone="mint" /><Text style={s.title}>{title || 'General Biology — Midterms'}</Text><Text style={s.subtitle}>Your study sanctuary, gathered in one folio.</Text></View></View>
    <View style={s.stats}><MiniStat value="3" label="Study tools" /><MiniStat value="3" label="Sample questions" /><MiniStat value="1" label="Folio" /></View>
    <TalaSectionTitle title="Open your study tools" hint="Sample content" />
    <View style={s.cards}><InfoCard icon="✎" title="Original Notes" description="Read, highlight, and revisit your source notes" onPress={() => router.push('/notes')} /><InfoCard icon="▤" title="PDF Reviewer" description="A concise, printable study guide" onPress={() => router.push('/reviewer')} /><InfoCard icon="✦" title="Time to Practice" description="Choose a quiz mode and see what you know" onPress={() => router.push('/practice')} /></View>
    <TalaSectionTitle title="Your study ledger" hint="Recent practice" />
    <InfoCard icon="✓" title="Cell Biology & Glycolysis" description="Review a sample saved quiz and answers" onPress={() => router.push('/saved-quiz')} />
    <TalaSectionTitle title="Source manuscripts" />
    {(selectedFiles.length ? selectedFiles : ['Biology sample passage']).map((source) => <View key={source} style={s.source}><InfoCard icon="▣" title={source} description="Included in this preview" onPress={() => router.push('/notes')} /></View>)}
    <Note>This folio uses sample biology content. Your title and pasted text are retained while the app is open.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  hero: { height: 245, borderRadius: 20, overflow: 'hidden', backgroundColor: c.pine },
  image: { width: '100%', height: '100%' },
  heroText: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: 17, backgroundColor: 'rgba(0,39,28,0.87)' },
  title: { color: c.paper, fontFamily: f.heading, fontSize: 27, lineHeight: 30, marginTop: 9 },
  subtitle: { color: c.mint, fontFamily: f.body, fontSize: 10, marginTop: 3 },
  stats: { flexDirection: 'row', gap: 8, marginTop: 13 },
  cards: { gap: 9 },
  source: { marginBottom: 8 },
});
