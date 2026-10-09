import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Note, PageIntro } from '@/components/study-blocks';
import { TalaButton, TalaCard, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function Notes() {
  const { title, noteText } = useStudyDemo();
  return <TalaScreen title="Original Notes" subtitle="QUIET READING MODE" footer={<TalaButton label="Open PDF Reviewer" icon="→" onPress={() => router.push('/reviewer')} />}>
    <PageIntro eyebrow="Chapter one · biology" title="The Living Cell" description={title || 'General Biology — Midterms'} />
    <TalaTag label="SOURCE NOTES" tone="mint" />
    <TalaSectionTitle title="A small world within" />
    <Text style={s.paragraph}>Every living organism begins with cells. Each cell is a miniature world: a boundary, a source of energy, and a way to carry the instructions of life.</Text>
    <TalaCard style={s.quote}><Text style={s.quoteText}>“The cell is the basic structural and functional unit of life.”</Text><Text style={s.quoteSource}>KEY DEFINITION</Text></TalaCard>
    <TalaSectionTitle title="Inside the cell" />
    <Text style={s.paragraph}>The nucleus stores genetic information. Mitochondria release usable energy through cellular respiration. In plant cells, chloroplasts capture light for photosynthesis.</Text>
    <View style={s.bullet}><Text style={s.dot}>•</Text><Text style={s.bulletText}>Nucleus — holds DNA and guides cell activity.</Text></View>
    <View style={s.bullet}><Text style={s.dot}>•</Text><Text style={s.bulletText}>Mitochondria — turn nutrients into usable energy.</Text></View>
    <View style={s.bullet}><Text style={s.dot}>•</Text><Text style={s.bulletText}>Chloroplasts — convert sunlight into chemical energy.</Text></View>
    {noteText.trim() && <><TalaSectionTitle title="Your added notes" /><TalaCard><Text style={s.paragraph}>{noteText}</Text></TalaCard></>}
    <Note>This is a sample reader. Your pasted text appears above when you add it to the folio.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  paragraph: { color: c.ink, fontFamily: f.body, fontSize: 13, lineHeight: 23, marginBottom: 14 },
  quote: { backgroundColor: '#E8F4EB', borderColor: '#D3E5D9', marginVertical: 9 },
  quoteText: { color: c.green, fontFamily: f.heading, fontSize: 19, lineHeight: 25 },
  quoteSource: { color: c.sage, fontFamily: f.bold, fontSize: 8, letterSpacing: 1.2, marginTop: 9 },
  bullet: { flexDirection: 'row', gap: 8, marginBottom: 10 },
  dot: { color: c.terracotta, fontSize: 18 },
  bulletText: { color: c.ink, fontFamily: f.body, fontSize: 12, lineHeight: 20, flex: 1 },
});
