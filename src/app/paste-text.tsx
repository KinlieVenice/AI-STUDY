import { router } from 'expo-router';
import { StyleSheet, Text, TextInput } from 'react-native';

import { Note, PageIntro } from '@/components/study-blocks';
import { TalaButton, TalaScreen } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function PasteText() {
  const { noteText, setNoteText } = useStudyDemo();
  return <TalaScreen title="Paste Text" subtitle="YOUR OWN WORDS" footer={<TalaButton label="Add Text to Material" icon="→" onPress={() => router.back()} />}>
    <PageIntro eyebrow="Add a source" title="Paste your notes" description="Bring in an excerpt, a lecture summary, or your own thoughts." />
    <Text style={s.label}>STUDY TEXT</Text>
    <TextInput accessibilityLabel="Study text" value={noteText} onChangeText={setNoteText} multiline textAlignVertical="top" placeholder="Paste or write your notes here..." placeholderTextColor={c.sage} style={s.editor} />
    <Text style={s.count}>{noteText.length} characters</Text>
    <Note>Your text stays on this device during this preview.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  label: { color: c.sage, fontFamily: f.bold, fontSize: 9, letterSpacing: 1.2, marginBottom: 8 },
  editor: { minHeight: 310, borderRadius: 18, borderWidth: 1, borderColor: c.outline, backgroundColor: c.paper, padding: 17, color: c.ink, fontFamily: f.body, fontSize: 13, lineHeight: 21 },
  count: { alignSelf: 'flex-end', marginTop: 8, color: c.muted, fontFamily: f.medium, fontSize: 10 },
});
