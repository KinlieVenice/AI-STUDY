import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Note, PageIntro } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';

export default function Reviewer() {
  return <TalaScreen title="PDF Reviewer" subtitle="STUDY GUIDE PREVIEW" footer={<TalaButton label="Practice These Ideas" icon="→" onPress={() => router.push('/practice')} />}>
    <PageIntro eyebrow="A study guide for later" title="Your reviewer" description="Key ideas condensed into a page you can revisit while studying." />
    <View style={s.paper}>
      <Text style={s.paperEyebrow}>TALA · STUDY REVIEWER</Text>
      <Text style={s.paperTitle}>Cell Biology & Energy</Text>
      <Text style={s.paperSubtitle}>A short guide to the living cell</Text>
      <View style={s.rule} />
      <Text style={s.heading}>01 / The cell</Text>
      <Text style={s.body}>Cells are the smallest living units. Their membranes regulate what enters and leaves, helping keep conditions stable.</Text>
      <Text style={s.heading}>02 / Key organelles</Text>
      <Text style={s.body}>Nucleus: stores DNA. Mitochondria: release usable energy. Chloroplasts: capture sunlight in plant cells.</Text>
      <Text style={s.heading}>03 / Energy pathways</Text>
      <Text style={s.body}>Photosynthesis stores light energy in glucose. Cellular respiration releases energy from glucose to make ATP.</Text>
      <View style={s.callout}><Text style={s.calloutText}>Remember: structure supports function at every level of the cell.</Text></View>
      <Text style={s.pageNumber}>01 / 01</Text>
    </View>
    <TalaSectionTitle title="Reviewer options" />
    <TalaCard><TalaTag label="PREVIEW" tone="peach" /><Text style={s.optionTitle}>PDF export is coming later</Text><Text style={s.optionText}>This screen is a reading preview; it does not yet create or save a PDF file.</Text></TalaCard>
    <Note>All reviewer content shown here is sample biology material.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  paper: { backgroundColor: c.paper, borderWidth: 1, borderColor: c.outline, padding: 25, minHeight: 510, shadowColor: c.pine, shadowOpacity: 0.08, shadowRadius: 12, elevation: 2 },
  paperEyebrow: { color: c.sage, fontFamily: f.bold, fontSize: 8, letterSpacing: 1.5 },
  paperTitle: { color: c.pine, fontFamily: f.heading, fontSize: 27, marginTop: 14 },
  paperSubtitle: { color: c.muted, fontFamily: f.body, fontSize: 10, marginTop: 3 },
  rule: { height: 1, backgroundColor: c.outline, marginVertical: 21 },
  heading: { color: c.green, fontFamily: f.semibold, fontSize: 12, marginBottom: 7 },
  body: { color: c.ink, fontFamily: f.body, fontSize: 11, lineHeight: 18, marginBottom: 17 },
  callout: { borderLeftWidth: 3, borderLeftColor: c.terracotta, backgroundColor: c.paperSoft, padding: 11, marginTop: 7 },
  calloutText: { color: c.green, fontFamily: f.medium, fontSize: 10, lineHeight: 16 },
  pageNumber: { color: c.sage, fontFamily: f.semibold, fontSize: 8, textAlign: 'right', marginTop: 22 },
  optionTitle: { color: c.ink, fontFamily: f.heading, fontSize: 17, marginTop: 8 },
  optionText: { color: c.muted, fontFamily: f.body, fontSize: 10, lineHeight: 16, marginTop: 4 },
});
