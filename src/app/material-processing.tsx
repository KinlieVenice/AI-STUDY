import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { InfoCard, Note, PageIntro, Progress } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function MaterialProcessing() {
  const { title, setMaterialStatus } = useStudyDemo();
  return <TalaScreen title="Material Folio" subtitle="IN PROGRESS" footer={<TalaButton label="Open Completed Preview" icon="→" onPress={() => { setMaterialStatus('ready'); router.replace('/material'); }} />}>
    <View style={s.hero}><TalaTag label="PREPARING YOUR FOLIO" tone="mint" /><Text style={s.title}>{title || 'General Biology — Midterms'}</Text><Text style={s.subtitle}>A quiet space for everything you’re learning.</Text></View>
    <TalaCard><Text style={s.stage}>Preview progress</Text><Progress value={64} /><Text style={s.note}>Sources gathered · notes being organized</Text></TalaCard>
    <TalaSectionTitle title="What you’ll find here" />
    <View style={s.cards}><InfoCard icon="✎" title="Original Notes" description="A clean reading view for your source material" badge="PREVIEW" /><InfoCard icon="▤" title="PDF Reviewer" description="A printable summary of key ideas" badge="PREVIEW" /><InfoCard icon="✦" title="Practice Quiz" description="Check your understanding" badge="PREVIEW" /></View>
    <PageIntro eyebrow="Study wherever you are" title="Your shelf stays close" description="The completed preview includes connected notes, a reviewer, and practice screens." />
    <Note tone="peach">No local AI model has generated these artifacts. Open the completed preview to explore the sample study screens.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  hero: { backgroundColor: c.pine, borderRadius: 19, padding: 20, marginBottom: 13 },
  title: { color: c.paper, fontFamily: f.heading, fontSize: 28, lineHeight: 32, marginTop: 14 },
  subtitle: { color: c.mint, fontFamily: f.body, fontSize: 11, marginTop: 7 },
  stage: { color: c.green, fontFamily: f.bold, fontSize: 11, marginBottom: 12 },
  note: { color: c.muted, fontFamily: f.body, fontSize: 10, marginTop: 9 },
  cards: { gap: 9, marginBottom: 25 },
});
