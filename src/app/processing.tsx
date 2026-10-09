import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Note, PageIntro, Progress } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaSectionTitle } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function Processing() {
  const { setMaterialStatus } = useStudyDemo();
  return <TalaScreen title="Preparing Your Folio" subtitle="ON-DEVICE STUDY PREVIEW" footer={<TalaButton label="View Folio Progress" icon="→" onPress={() => router.push('/material-processing')} />}>
    <Image source={require('../../assets/images/tala-onboarding-3.jpg')} style={s.image} contentFit="cover" accessibilityLabel="Study notes on a wooden table" />
    <PageIntro eyebrow="The quiet work begins" title="A little preparation" description="Your sources are gathered. The study folio preview is ready to explore." />
    <TalaCard><View style={s.progressTop}><Text style={s.progressTitle}>Preparing your study space</Text><Text style={s.progressValue}>Preview</Text></View><Progress value={64} /><Text style={s.caption}>A sample of the progress view</Text></TalaCard>
    <TalaSectionTitle title="The journey" />
    {['Sources gathered', 'Notes organized', 'Reviewer composed', 'Practice questions prepared'].map((stage, index) => <View key={stage} style={s.stage}><Text style={s.stageNumber}>{index + 1}</Text><Text style={s.stageLabel}>{stage}</Text><Text style={s.stageState}>{index < 2 ? 'Ready' : 'Preview'}</Text></View>)}
    <Note tone="peach">This is a visual preview. The on-device AI model has not been installed or run.</Note>
    <View style={s.secondary}><TalaButton label="Return to Library" secondary onPress={() => { setMaterialStatus('empty'); router.replace('/library'); }} /></View>
  </TalaScreen>;
}

const s = StyleSheet.create({
  image: { width: '100%', height: 185, borderRadius: 18, marginBottom: 20 },
  progressTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 13 },
  progressTitle: { color: c.ink, fontFamily: f.semibold, fontSize: 11 },
  progressValue: { color: c.sage, fontFamily: f.bold, fontSize: 10 },
  caption: { color: c.muted, fontFamily: f.body, fontSize: 10, marginTop: 9 },
  stage: { flexDirection: 'row', alignItems: 'center', gap: 11, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: c.outline },
  stageNumber: { color: c.paper, backgroundColor: c.sage, borderRadius: 13, width: 25, height: 25, overflow: 'hidden', textAlign: 'center', textAlignVertical: 'center', fontFamily: f.bold, fontSize: 10 },
  stageLabel: { color: c.ink, fontFamily: f.medium, fontSize: 11, flex: 1 },
  stageState: { color: c.sage, fontFamily: f.semibold, fontSize: 9 },
  secondary: { marginTop: 17 },
});
