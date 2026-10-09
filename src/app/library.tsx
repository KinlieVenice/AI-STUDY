import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { TalaButton, TalaCard, TalaScreen, TalaSectionTitle, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';
import { useStudyDemo } from '@/state/study-demo';

export default function LibraryScreen() {
  const { materialStatus, setMaterialStatus, title } = useStudyDemo();
  const [query, setQuery] = useState('');
  const hasMaterial = materialStatus !== 'empty';
  const search = query.trim().toLowerCase();
  const materialMatches = !search || title.toLowerCase().includes(search);
  const quizMatches = !search || 'cell biology glycolysis rehearsal'.includes(search);

  return (
    <TalaScreen title="Tala" subtitle="YOUR STUDY LIBRARY" back={false} right={<View style={styles.avatar}><Text style={styles.avatarText}>T</Text></View>} footer={<LibraryNav hasMaterial={hasMaterial} />}>
      <View style={styles.hero}>
        <Image source={require('../../assets/images/tala-study-room.jpg')} style={styles.heroImage} contentFit="cover" accessibilityLabel="Sunlit study room overlooking the countryside" />
        <View style={styles.heroWash}>
          <TalaTag label="✦  SANCTUARY SHELF" tone="mint" />
          <Text style={styles.heroTitle}>My Little Library</Text>
          <Text style={styles.heroSubtitle}>A place for every lesson, even when you’re offline.</Text>
        </View>
      </View>
      <TextInput
        accessibilityLabel="Search materials"
        placeholder="Search notes, folios, or artifacts..."
        placeholderTextColor={c.sage}
        value={query}
        onChangeText={setQuery}
        style={styles.search}
      />
      <View style={styles.chips}><TalaTag label="All Folios" tone="mint" /><TalaTag label="Biology" tone="paper" /><TalaTag label="Mathematics" tone="paper" /></View>
      {hasMaterial ? (
        <>
          {materialMatches && <><TalaSectionTitle title="Your folios" hint="On this device" />
          <Pressable accessibilityRole="button" onPress={() => router.push(materialStatus === 'processing' ? '/material-processing' : '/material')}>
            <TalaCard style={styles.materialCard}>
              <Image source={require('../../assets/images/tala-onboarding-3.jpg')} style={styles.materialImage} contentFit="cover" accessibilityLabel="Open notebook on a desk" />
              <View style={styles.materialCopy}>
                <TalaTag label={materialStatus === 'processing' ? 'SYNTHESIZING' : 'STUDY READY'} tone={materialStatus === 'processing' ? 'peach' : 'mint'} />
                <Text style={styles.materialTitle}>{title || 'General Biology — Midterms'}</Text>
                <Text style={styles.materialMeta}>Notes · Flashcards · Practice quiz</Text>
                <Text style={styles.openText}>Open folio  →</Text>
              </View>
            </TalaCard>
          </Pressable></>}
          {quizMatches && <><TalaSectionTitle title="Saved practice" hint="Review anytime" />
          <Pressable accessibilityRole="button" onPress={() => router.push('/saved-quiz')}><TalaCard><Text style={styles.savedTitle}>Cell Biology & Glycolysis Rehearsal</Text><Text style={styles.materialMeta}>Sample quiz · Open quiz  →</Text></TalaCard></Pressable></>}
          {!materialMatches && !quizMatches && <TalaCard style={{ marginTop: 20 }}><Text style={styles.savedTitle}>No matching folios</Text><Text style={styles.materialMeta}>Try another search or create a new material.</Text></TalaCard>}
        </>
      ) : (
        <>
          <TalaCard style={styles.emptyCard}>
            <Text style={styles.emptyIllustration}>▥</Text>
            <TalaTag label="BLANK CANVAS" tone="mint" />
            <Text style={styles.emptyTitle}>Your little library starts here.</Text>
            <Text style={styles.emptyText}>Gather a text PDF, DOCX, or your own notes. Tala will keep every study page together.</Text>
            <View style={styles.emptyAction}><TalaButton label="Create First Material" onPress={() => router.push('/create-material')} icon="＋" /></View>
          </TalaCard>
          <TalaSectionTitle title="A little inspiration" hint="Try a sample" />
          <View style={styles.inspiration}>
            <Pressable accessibilityRole="button" onPress={() => { setMaterialStatus('ready'); router.push('/material'); }} style={styles.inspirationCard}><Text style={styles.inspirationIcon}>▣</Text><Text style={styles.inspirationTitle}>Open a sample folio</Text><Text style={styles.inspirationText}>Explore every study screen</Text></Pressable>
            <Pressable accessibilityRole="button" onPress={() => router.replace('/')} style={styles.inspirationCard}><Text style={styles.inspirationIcon}>✦</Text><Text style={styles.inspirationTitle}>Replay onboarding</Text><Text style={styles.inspirationText}>See how Tala works</Text></Pressable>
          </View>
        </>
      )}
    </TalaScreen>
  );
}

function LibraryNav({ hasMaterial }: { hasMaterial: boolean }) {
  return <View style={styles.nav}>
    <Pressable accessibilityRole="button" onPress={() => router.replace('/library')} style={styles.navItem}><Text style={styles.navIcon}>▣</Text><Text style={styles.navText}>Library</Text></Pressable>
    <Pressable accessibilityRole="button" accessibilityLabel="Create material" onPress={() => router.push('/create-material')} style={styles.navPlus}><Text style={styles.navPlusText}>＋</Text></Pressable>
    <Pressable accessibilityRole="button" onPress={() => router.push(hasMaterial ? '/material' : '/create-material')} style={styles.navItem}><Text style={styles.navIcon}>▤</Text><Text style={styles.navText}>Folios</Text></Pressable>
  </View>;
}

const styles = StyleSheet.create({
  avatar: { width: 29, height: 29, borderRadius: 15, backgroundColor: c.pine, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: c.paper, fontFamily: f.bold, fontSize: 12 },
  hero: { height: 172, borderRadius: 18, overflow: 'hidden', backgroundColor: c.paperSoft },
  heroImage: { width: '100%', height: '100%' },
  heroWash: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: 14, backgroundColor: 'rgba(0,39,28,0.82)' },
  heroTitle: { marginTop: 6, color: c.paper, fontFamily: f.heading, fontSize: 24 },
  heroSubtitle: { color: '#E2EEE6', fontFamily: f.body, fontSize: 10 },
  search: { height: 44, marginTop: 15, paddingHorizontal: 15, borderRadius: 22, borderWidth: 1, borderColor: c.outline, color: c.ink, backgroundColor: c.paper, fontFamily: f.body, fontSize: 11 },
  chips: { marginTop: 10, flexDirection: 'row', gap: 6 },
  emptyCard: { marginTop: 20, minHeight: 280, alignItems: 'center', justifyContent: 'center' },
  emptyIllustration: { color: c.sage, fontSize: 58, lineHeight: 73 },
  emptyTitle: { marginTop: 12, color: c.ink, fontFamily: f.heading, fontSize: 21, textAlign: 'center' },
  emptyText: { maxWidth: 270, marginTop: 5, color: c.muted, fontFamily: f.body, fontSize: 11, lineHeight: 17, textAlign: 'center' },
  emptyAction: { width: '100%', maxWidth: 230, marginTop: 18 },
  inspiration: { flexDirection: 'row', gap: 10 },
  inspirationCard: { flex: 1, minHeight: 95, padding: 12, borderRadius: 15, backgroundColor: c.paper, borderWidth: 1, borderColor: c.outline },
  inspirationIcon: { color: c.sage, fontSize: 18 },
  inspirationTitle: { color: c.ink, fontFamily: f.heading, fontSize: 14 },
  inspirationText: { color: c.muted, fontFamily: f.body, fontSize: 9 },
  materialCard: { padding: 0, overflow: 'hidden' },
  materialImage: { width: '100%', height: 145 },
  materialCopy: { padding: 15 },
  materialTitle: { marginTop: 8, color: c.ink, fontFamily: f.heading, fontSize: 20 },
  materialMeta: { marginTop: 5, color: c.muted, fontFamily: f.body, fontSize: 10 },
  openText: { marginTop: 11, color: c.green, fontFamily: f.bold, fontSize: 11 },
  savedTitle: { color: c.ink, fontFamily: f.heading, fontSize: 17 },
  nav: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 59 },
  navItem: { minWidth: 72, alignItems: 'center' },
  navIcon: { color: c.green, fontSize: 17 },
  navText: { color: c.green, fontFamily: f.semibold, fontSize: 9 },
  navPlus: { width: 43, height: 43, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: c.green },
  navPlusText: { color: c.paper, fontSize: 25, lineHeight: 30 },
});
