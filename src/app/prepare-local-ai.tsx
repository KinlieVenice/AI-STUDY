import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { OnboardingLayout, PrimaryAction } from '@/components/onboarding-layout';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';

const features = [
  { icon: '⌁', title: 'Designed for on-device work', detail: 'Study materials can stay on your phone while Tala prepares notes and practice.' },
  { icon: '▣', title: 'Your files stay local', detail: 'Imported source files are kept in the app’s private storage.' },
  { icon: '✦', title: 'Offline after setup', detail: 'Once a model is installed, studying does not need a live connection.' },
];

export default function PrepareLocalAIScreen() {
  return (
    <OnboardingLayout step={3} footer={
      <View style={styles.footer}>
        <PrimaryAction label="Continue" onPress={() => router.push('/ready')} />
        <Text style={styles.footerNote}>You can explore your library before model setup.</Text>
      </View>
    }>
      <View style={styles.intro}>
        <Text style={styles.title}>Meet your study brain.</Text>
        <Text style={styles.subtitle}>Tala is designed to run a small language model on your phone after a one-time download.</Text>
      </View>

      <View style={styles.folio}>
        <View style={styles.hero}>
          <Image
            source={require('../../assets/images/tala-onboarding-3.jpg')}
            style={styles.heroImage}
            contentFit="cover"
            accessibilityLabel="Watercolor notebook and pens on a sunlit desk"
          />
          <View style={styles.heroBadge}><Text style={styles.heroBadgeText}>LOCAL AI SETUP</Text></View>
          <View style={styles.heroCaption}>
            <Text style={styles.heroName}>Tala on-device model</Text>
            <Text style={styles.heroStatus}>One-time download needed</Text>
          </View>
        </View>
        <View style={styles.folioBody}>
          <View style={styles.statusBox}>
            <View style={styles.statusRow}>
              <View style={styles.statusDot} />
              <Text style={styles.statusTitle}>Model status</Text>
              <Text style={styles.statusValue}>Not installed</Text>
            </View>
            <Text style={styles.statusDetail}>Model download is not available in this preview. You can continue to your library.</Text>
          </View>
          <Text style={styles.sectionLabel}>HOW OFFLINE STUDY WILL WORK</Text>
          <View style={styles.features}>
            {features.map((feature) => (
              <View key={feature.title} style={styles.feature}>
                <View style={styles.featureIcon}><Text style={styles.featureIconText}>{feature.icon}</Text></View>
                <View style={styles.featureCopy}>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDetail}>{feature.detail}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  intro: { paddingHorizontal: 3, paddingBottom: 16 },
  title: { color: c.green, fontFamily: f.heading, fontSize: 29, lineHeight: 35 },
  subtitle: { marginTop: 4, color: c.muted, fontFamily: f.body, fontSize: 12, lineHeight: 18 },
  folio: { overflow: 'hidden', borderRadius: 18, backgroundColor: c.paper, borderWidth: 1, borderColor: c.outline },
  hero: { height: 170, position: 'relative', backgroundColor: c.paperSoft },
  heroImage: { width: '100%', height: '100%' },
  heroBadge: { position: 'absolute', top: 12, right: 12, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 5, backgroundColor: 'rgba(252,249,239,0.94)' },
  heroBadgeText: { color: c.sage, fontFamily: f.bold, fontSize: 9, letterSpacing: 0.7 },
  heroCaption: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: 15, paddingVertical: 11, backgroundColor: 'rgba(0,39,28,0.84)' },
  heroName: { color: c.paper, fontFamily: f.heading, fontSize: 18, lineHeight: 22 },
  heroStatus: { color: '#D9EADF', fontFamily: f.medium, fontSize: 10 },
  folioBody: { padding: 13 },
  statusBox: { padding: 13, borderRadius: 14, backgroundColor: c.paperSoft },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  statusDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: c.terracotta },
  statusTitle: { flex: 1, color: c.ink, fontFamily: f.semibold, fontSize: 11 },
  statusValue: { color: c.terracotta, fontFamily: f.bold, fontSize: 10 },
  statusDetail: { marginTop: 7, color: c.muted, fontFamily: f.body, fontSize: 10, lineHeight: 15 },
  sectionLabel: { marginTop: 19, marginBottom: 9, color: c.sage, fontFamily: f.bold, fontSize: 9, letterSpacing: 0.8 },
  features: { gap: 8 },
  feature: { flexDirection: 'row', gap: 9, padding: 10, borderRadius: 12, backgroundColor: c.paperSoft },
  featureIcon: { width: 27, height: 27, borderRadius: 14, backgroundColor: '#E3F2E8', alignItems: 'center', justifyContent: 'center' },
  featureIconText: { color: c.sage, fontSize: 15 },
  featureCopy: { flex: 1 },
  featureTitle: { color: c.ink, fontFamily: f.semibold, fontSize: 11 },
  featureDetail: { marginTop: 2, color: c.muted, fontFamily: f.body, fontSize: 10, lineHeight: 15 },
  footer: { gap: 7 },
  footerNote: { color: c.muted, textAlign: 'center', fontFamily: f.body, fontSize: 10 },
});
