import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { Choice, Note, PageIntro } from '@/components/study-blocks';
import { TalaButton, TalaScreen, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

const terms = ['Nucleus', 'Mitochondria', 'Chloroplast'];
const definitions = ['Captures light energy', 'Stores genetic information', 'Releases usable energy'];
const correct: Record<string, string> = { Nucleus: 'Stores genetic information', Mitochondria: 'Releases usable energy', Chloroplast: 'Captures light energy' };

export default function Matching() {
  const { setAnswers, setCorrectAnswers } = useStudyDemo();
  const [term, setTerm] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({});
  function selectDefinition(definition: string) { if (!term) return; setPairs((current) => ({ ...current, [term]: definition })); setTerm(null); }
  function submit() { setAnswers(terms.map((item) => `${item}: ${pairs[item]}`)); setCorrectAnswers(terms.every((item) => pairs[item] === correct[item]) ? 1 : 0); router.push('/quiz-results'); }
  return <TalaScreen title="Matching Type" subtitle="PRACTICE SESSION" footer={<TalaButton label="Check Matches" icon="→" disabled={Object.keys(pairs).length < terms.length} onPress={submit} />}>
    <PageIntro eyebrow="Connect the ideas" title="Find each match" description="Tap a term, then tap the meaning that belongs with it." />
    <TalaTag label={`${Object.keys(pairs).length} OF ${terms.length} MATCHED`} tone="mint" />
    <Text style={s.heading}>Terms</Text>
    {terms.map((item) => <Choice key={item} label={item} detail={pairs[item] ? `Matched: ${pairs[item]}` : undefined} selected={term === item} onPress={() => setTerm(item)} />)}
    <Text style={s.heading}>Meanings</Text>
    {definitions.map((definition) => <Choice key={definition} label={definition} selected={Object.values(pairs).includes(definition)} onPress={() => selectDefinition(definition)} />)}
    <Note>To change a match, select the term again and choose another meaning.</Note>
  </TalaScreen>;
}

const s = StyleSheet.create({
  heading: { color: c.ink, fontFamily: f.heading, fontSize: 19, marginTop: 25, marginBottom: 10 },
});
