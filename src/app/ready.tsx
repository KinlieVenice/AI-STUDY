import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { OnboardingLayout, PrimaryAction } from '@/components/onboarding-layout';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';

export default function ReadyScreen() {
  return (
    <OnboardingLayout step={4} footer={<PrimaryAction label="Open My Library" onPress={() => router.replace('/library')} />}>
      <View style={styles.hero}>
        <Image
          source={require('../../assets/images/tala-study-room.jpg')}
          style={styles.heroImage}
          contentFit="cover"
          accessibilityLabel="A quiet study desk overlooking green hills"
        />
        <View style={styles.heroCaption}>
          <Text style={styles.heroEyebrow}>TALA STUDY SPACE</Text>
          <Text style={styles.heroText}>A place for every lesson.</Text>
        </View>
      </View>

      <View style={styles.intro}>
        <Text style={styles.title}>Your space is ready.</Text>
        <Text style={styles.subtitle}>Your library begins empty. Add your first lesson when you’re ready, and set up local AI when it becomes available.</Text>
      </View>

      <View style={styles.statusPill}><Text style={styles.statusText}>◉  Study library on this device</Text></View>

      <View style={styles.cards}>
        <View style={styles.card}>
          <View style={styles.cardIcon}><Text style={styles.cardIconText}>▣</Text></View>
          <View style={styles.cardCopy}>
            <Text style={styles.cardTitle}>Collect your study materials</Text>
            <Text style={styles.cardDetail}>Your notes and source files will have a quiet place to live.</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardIcon}><Text style={styles.cardIconText}>✦</Text></View>
          <View style={styles.cardCopy}>
            <Text style={styles.cardTitle}>Add offline AI later</Text>
            <Text style={styles.cardDetail}>A one-time model download will enable on-device study generation.</Text>
          </View>
        </View>
      </View>

      <View style={styles.quote}>
        <Text style={styles.quoteMark}>“</Text>
        <View style={styles.quoteCopy}>
          <Text style={styles.quoteText}>Ang karunungan ay liwanag sa dilim.</Text>
          <Text style={styles.quoteTranslation}>Wisdom is light in the dark.</Text>
        </View>
      </View>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  hero: { height: 180, marginTop: 4, borderRadius: 17, overflow: 'hidden', backgroundColor: c.paperSoft },
  heroImage: { width: '100%', height: '100%' },
  heroCaption: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: 14, backgroundColor: 'rgba(0,39,28,0.84)' },
  heroEyebrow: { color: c.mint, fontFamily: f.bold, fontSize: 9, letterSpacing: 0.9 },
  heroText: { marginTop: 3, color: c.paper, fontFamily: f.heading, fontSize: 18 },
  intro: { marginTop: 18, paddingHorizontal: 2 },
  title: { color: c.ink, fontFamily: f.heading, fontSize: 29, lineHeight: 34 },
  subtitle: { marginTop: 5, color: c.muted, fontFamily: f.body, fontSize: 12, lineHeight: 18 },
  statusPill: { alignSelf: 'flex-start', marginTop: 17, borderRadius: 14, backgroundColor: c.paperMuted, paddingHorizontal: 10, paddingVertical: 7 },
  statusText: { color: c.sage, fontFamily: f.semibold, fontSize: 10 },
  cards: { gap: 11, marginTop: 16 },
  card: { flexDirection: 'row', gap: 11, borderRadius: 20, borderWidth: 1, borderColor: c.outline, padding: 15, backgroundColor: c.paper },
  cardIcon: { width: 34, height: 34, borderRadius: 17, backgroundColor: c.paperSoft, alignItems: 'center', justifyContent: 'center' },
  cardIconText: { color: c.sage, fontSize: 17 },
  cardCopy: { flex: 1 },
  cardTitle: { color: c.ink, fontFamily: f.heading, fontSize: 17, lineHeight: 21 },
  cardDetail: { marginTop: 4, color: c.muted, fontFamily: f.body, fontSize: 11, lineHeight: 16 },
  quote: { marginTop: 16, padding: 15, borderRadius: 16, backgroundColor: c.paperMuted, flexDirection: 'row', gap: 8 },
  quoteMark: { color: c.terracotta, fontFamily: f.heading, fontSize: 29, lineHeight: 28 },
  quoteCopy: { flex: 1 },
  quoteText: { color: c.ink, fontFamily: f.heading, fontSize: 16, lineHeight: 20 },
  quoteTranslation: { marginTop: 3, color: c.muted, fontFamily: f.body, fontSize: 10 },
});
