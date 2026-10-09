import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { InfoCard, Note, PageIntro } from '@/components/study-blocks';
import { TalaButton, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

const sample = 'Cells are the basic unit of life. The nucleus stores genetic information, while mitochondria release energy through cellular respiration. Photosynthesis converts light energy into chemical energy in plant cells.';

export default function ReviewContent() {
  const { title, noteText, setNoteText, selectedFiles, setMaterialStatus } = useStudyDemo();
  const [content, setContent] = useState(noteText || sample);
  return <TalaScreen title="Review Content" subtitle="CHECK YOUR SOURCES" footer={<TalaButton label="Confirm & Continue" icon="→" onPress={() => { setMaterialStatus('processing'); router.push('/processing'); }} />}>
    <PageIntro eyebrow="Before we begin" title="Make sure everything reads right" description="Review the text and sources that will shape your study material." />
    <View style={s.summary}><TalaTag label="CONTENT READY" tone="mint" /><Text style={s.summaryTitle}>{title || 'Untitled material'}</Text><Text style={s.summaryMeta}>{selectedFiles.length} sample files · {noteText.trim() ? '1 text note' : 'Sample biology text'}</Text></View>
    <TalaSectionTitle title="Extracted content" hint="Editable" />
    <TextInput accessibilityLabel="Review extracted content" multiline textAlignVertical="top" value={content} onChangeText={(value) => { setContent(value); setNoteText(value); }} style={s.editor} />
    <TalaSectionTitle title="Source manuscripts" />
    {(selectedFiles.length ? selectedFiles : ['Biology sample passage']).map((file) => <View key={file} style={s.source}><InfoCard icon="▣" title={file} description="Ready for the study preview" /></View>)}
    <Note tone="peach">The next screens preview a study flow using sample biology content. No document extraction or AI processing has happened yet.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  summary: { backgroundColor: c.pine, borderRadius: 18, padding: 18 },
  summaryTitle: { color: c.paper, fontFamily: f.heading, fontSize: 22, marginTop: 10 },
  summaryMeta: { color: c.mint, fontFamily: f.body, fontSize: 10, marginTop: 4 },
  editor: { minHeight: 210, backgroundColor: c.paper, borderWidth: 1, borderColor: c.outline, borderRadius: 17, padding: 15, color: c.ink, fontFamily: f.body, fontSize: 12, lineHeight: 20 },
  source: { marginBottom: 8 },
});
