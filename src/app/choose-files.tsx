import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Choice, Note, PageIntro } from '@/components/study-blocks';
import { TalaButton, TalaScreen, TalaSectionTitle } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

const files = ['Biology_Lecture_01.pdf', 'Cell_Structure.pptx', 'Handwritten_Notes.jpg', 'Photosynthesis_Review.pdf', 'Midterm_Outline.docx'];

export default function ChooseFiles() {
  const { selectedFiles, toggleFile } = useStudyDemo();
  const [query, setQuery] = useState('');
  return <TalaScreen title="Choose from Files" subtitle="SOURCE MANUSCRIPTS" footer={<TalaButton label={`Add ${selectedFiles.length} ${selectedFiles.length === 1 ? 'File' : 'Files'} to Material`} icon="→" onPress={() => router.back()} />}>
    <PageIntro eyebrow="Your device" title="Select your sources" description="Tap the sample files you'd like to include in this folio." />
    <TextInput accessibilityLabel="Search sample files" placeholder="Search your files" placeholderTextColor={c.sage} value={query} onChangeText={setQuery} style={s.search} />
    <View style={s.filters}><Text style={s.filterActive}>All files</Text><Text style={s.filter}>Documents</Text><Text style={s.filter}>Images</Text></View>
    <TalaSectionTitle title="Recent files" hint={`${files.length} sample files`} />
    {files.filter((name) => name.toLowerCase().includes(query.toLowerCase())).map((name) => <Choice key={name} label={name} detail={name.endsWith('.jpg') ? 'IMAGE · SAMPLE FILE' : 'DOCUMENT · SAMPLE FILE'} selected={selectedFiles.includes(name)} onPress={() => toggleFile(name)} />)}
    <Note>These are sample files for the UI preview. Device file import will be connected with the local processing feature.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  search: { backgroundColor: c.paper, borderColor: c.outline, borderWidth: 1, borderRadius: 22, paddingHorizontal: 15, height: 44, color: c.ink, fontFamily: f.body, fontSize: 11 },
  filters: { flexDirection: 'row', gap: 7, marginTop: 14 },
  filter: { color: c.sage, backgroundColor: c.paperMuted, borderRadius: 15, paddingHorizontal: 11, paddingVertical: 7, fontFamily: f.semibold, fontSize: 10 },
  filterActive: { color: c.paper, backgroundColor: c.green, borderRadius: 15, paddingHorizontal: 11, paddingVertical: 7, fontFamily: f.semibold, fontSize: 10 },
});
