import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { OnboardingLayout, PrimaryAction } from '@/components/onboarding-layout';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';

const chapters = [
  {
    number: 'CHAPTER 01', icon: '▣', title: 'Gather your study materials', tag: 'Offline Vault',
    detail: 'Import a text PDF or DOCX, or paste your notes directly. Your material stays on this device.',
    sample: 'Lecture_Bio101.pdf', sampleTag: 'On device', tone: c.paperMuted,
  },
  {
    number: 'CHAPTER 02', icon: '✦', title: 'Let Tala organize your lessons', tag: 'On-Device',
    detail: 'Create structured notes, flashcards, and practice questions from your source material.',
    sample: 'Key concepts · Study cards', sampleTag: 'From your notes', tone: '#E7F5EC',
  },
  {
    number: 'CHAPTER 03', icon: '▤', title: 'Read, practice, and remember', tag: 'Spaced Recall',
    detail: 'Review a little at a time with notes, quizzes, and flashcards you can revisit offline.',
    sample: 'Recall: Krebs Cycle · 1/5', sampleTag: 'Tap to flip', tone: '#F7F0E8',
  },
];

export default function HowItWorksScreen() {
  return (
    <OnboardingLayout
      step={2}
      onSkip={() => router.replace('/library')}
      footer={
        <View style={styles.footer}>
          <PrimaryAction label="Continue to Step 3" onPress={() => router.push('/prepare-local-ai')} />
          <Pressable accessibilityRole="button" onPress={() => router.replace('/library')} style={styles.skipFooter}>
            <Text style={styles.skipFooterText}>Skip setup and open your library</Text>
          </Pressable>
        </View>
      }>
      <View style={styles.intro}>
        <View style={styles.eyebrowPill}><Text style={styles.eyebrow}>✿  THE TALA METHOD</Text></View>
        <Text style={styles.title}>Study your own way.</Text>
        <Text style={styles.subtitle}>A quiet, personal companion for every lecture and set of notes.</Text>
      </View>
      <View style={styles.chapters}>
        {chapters.map((chapter) => (
          <View key={chapter.number} style={styles.card}>
            <View style={styles.cardMain}>
              <View style={[styles.iconCircle, { backgroundColor: chapter.tone }]}><Text style={styles.icon}>{chapter.icon}</Text></View>
              <View style={styles.cardCopy}>
                <View style={styles.cardTopRow}>
                  <Text style={styles.chapterLabel}>{chapter.number}</Text>
                  <Text style={styles.tag}>{chapter.tag}</Text>
                </View>
                <Text style={styles.cardTitle}>{chapter.title}</Text>
                <Text style={styles.cardDetail}>{chapter.detail}</Text>
              </View>
            </View>
            <View style={styles.sampleRow}>
              <Text style={styles.sampleText}>{chapter.sample}</Text>
              <Text style={styles.sampleTag}>{chapter.sampleTag}</Text>
            </View>
          </View>
        ))}
      </View>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  intro: { paddingHorizontal: 3, paddingBottom: 15 },
  eyebrowPill: { alignSelf: 'flex-start', paddingHorizontal: 9, paddingVertical: 5, borderRadius: 14, backgroundColor: '#E7F5EC' },
  eyebrow: { color: c.sage, fontFamily: f.bold, fontSize: 9, letterSpacing: 1 },
  title: { marginTop: 12, color: c.ink, fontFamily: f.heading, fontSize: 32, lineHeight: 38 },
  subtitle: { marginTop: 3, color: c.muted, fontFamily: f.body, fontSize: 13, lineHeight: 19 },
  chapters: { gap: 12 },
  card: { borderRadius: 24, backgroundColor: c.paper, padding: 14, borderWidth: 1, borderColor: '#F0EDE5' },
  cardMain: { flexDirection: 'row', gap: 12 },
  iconCircle: { width: 39, height: 39, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  icon: { color: c.green, fontSize: 18 },
  cardCopy: { flex: 1 },
  cardTopRow: { minHeight: 22, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5 },
  chapterLabel: { color: c.sage, fontFamily: f.bold, fontSize: 9, letterSpacing: 0.6 },
  tag: { overflow: 'hidden', color: c.sage, backgroundColor: '#E7F5EC', fontFamily: f.semibold, fontSize: 9, borderRadius: 8, paddingHorizontal: 6, paddingVertical: 3 },
  cardTitle: { color: c.ink, fontFamily: f.heading, fontSize: 18, lineHeight: 22 },
  cardDetail: { marginTop: 3, color: c.muted, fontFamily: f.body, fontSize: 11, lineHeight: 16 },
  sampleRow: { marginTop: 12, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 12, backgroundColor: c.paperSoft, flexDirection: 'row', justifyContent: 'space-between', gap: 6 },
  sampleText: { flexShrink: 1, color: c.muted, fontFamily: f.medium, fontSize: 10 },
  sampleTag: { color: c.sage, fontFamily: f.semibold, fontSize: 9 },
  footer: { gap: 4 },
  skipFooter: { minHeight: 38, alignItems: 'center', justifyContent: 'center' },
  skipFooterText: { color: c.muted, fontFamily: f.medium, fontSize: 10 },
});
