import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { InfoCard, Note, PageIntro } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function CreateMaterial() {
  const { title, setTitle, noteText, selectedFiles } = useStudyDemo();
  const count = selectedFiles.length + (noteText.trim() ? 1 : 0);
  return <TalaScreen title="Create Material" subtitle="ARCHIVE YOUR CURIOSITY" footer={<TalaButton label="Create Material & Review" icon="→" onPress={() => router.push('/review-content')} />}>
    <PageIntro eyebrow="New folio" title="Gather your study sources" description="Bring your notes together in a quiet place, ready for your next study session." />
    <TalaCard><Text style={s.label}>MATERIAL TITLE</Text><TextInput accessibilityLabel="Material title" value={title} onChangeText={setTitle} placeholder="Name your material" placeholderTextColor={c.sage} style={s.input} /><Text style={s.hint}>Give this collection a name you’ll remember.</Text></TalaCard>
    <TalaSectionTitle title="Your sources" hint={`${count} selected`} />
    <View style={s.grid}>
      <View style={s.gridItem}><InfoCard icon="▤" title="From Files" description="Choose device files" onPress={() => router.push('/choose-files')} /></View>
      <View style={s.gridItem}><InfoCard icon="⇧" title="Upload Files" description="PDF or DOCX" onPress={() => router.push('/choose-files')} /></View>
      <View style={s.gridItem}><InfoCard icon="✎" title="Paste Text" description="Add your own words" onPress={() => router.push('/paste-text')} /></View>
    </View>
    {selectedFiles.map((name) => <View key={name} style={s.source}><Text style={s.sourceIcon}>▣</Text><View style={{ flex: 1 }}><Text style={s.sourceName}>{name}</Text><Text style={s.hint}>Ready to review</Text></View><TalaTag label="ADDED" tone="mint" /></View>)}
    {noteText.trim() && <InfoCard icon="✎" title="Pasted notes" description={`${noteText.trim().length} characters added`} badge="ADDED" onPress={() => router.push('/paste-text')} />}
    <TalaSectionTitle title="Anything to keep in mind?" hint="Optional" />
    <TalaCard><Text style={s.hint}>You can review and edit the extracted text before creating your study material.</Text></TalaCard>
    <Note>Demo preview: you can explore the full study flow with sample content. Local AI and device file importing are not connected yet.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  label: { color: c.sage, fontFamily: f.bold, fontSize: 9, letterSpacing: 1 },
  input: { color: c.ink, fontFamily: f.semibold, fontSize: 14, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: c.outline },
  hint: { color: c.muted, fontFamily: f.body, fontSize: 10, lineHeight: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  gridItem: { width: '48%' },
  source: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 9, padding: 11, backgroundColor: c.paper, borderRadius: 13, borderWidth: 1, borderColor: c.outline },
  sourceIcon: { color: c.sage, fontSize: 20 },
  sourceName: { color: c.ink, fontFamily: f.semibold, fontSize: 11 },
});
