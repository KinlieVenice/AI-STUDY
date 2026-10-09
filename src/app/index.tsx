import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TalaColors, TalaFonts } from '@/constants/tala';

const colors = {
  ...TalaColors,
  butter: TalaColors.mint,
  butterInk: TalaColors.sage,
  quiet: TalaColors.paperMuted,
};

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.brandMark} accessibilityElementsHidden><Text style={styles.brandMarkText}>✦</Text></View>
            <Text style={styles.brandName}>Tala</Text>
            <View style={styles.headerSpacer} />
            <Text style={styles.headerCaption}>YOUR STUDY COMPANION</Text>
          </View>

          <View style={styles.offlineBadge}>
            <View style={styles.offlineDot} />
            <Text style={styles.offlineBadgeText}>Made for offline study · Handa Lagi</Text>
          </View>

          <View style={styles.sceneCard}>
            <View style={styles.sceneFrame}>
              <Image
                source={require('../../assets/images/tala-study-room.jpg')}
                style={styles.sceneImage}
                contentFit="cover"
                accessibilityLabel="A cozy study desk beside a sunlit window overlooking green hills"
              />
              <View style={styles.sceneLabel}>
                <Text style={styles.sceneLabelLeaf}>✦</Text>
                <Text style={styles.sceneLabelText}>Tala Rural Studio</Text>
              </View>
            </View>
            <View style={styles.sceneFooter}>
              <View style={styles.sceneFooterGroup}>
                <View style={styles.sceneFooterDot} />
                <Text style={styles.sceneFooterText}>Handmade for Filipino Students</Text>
              </View>
              <Text style={styles.sceneFooterText}>⌁ Study on your device</Text>
            </View>
          </View>

          <View style={styles.message}>
            <Text style={styles.title}>Your little world of learning.</Text>
            <Text style={styles.description}>Turn your lessons into reviewers, notes, quizzes, and flashcards.</Text>
            <View style={styles.supportBadge}>
              <Text style={styles.supportIcon}>☼</Text>
              <Text style={styles.supportText}>Made for studying, even offline.</Text>
            </View>
          </View>

          <View style={styles.steps} accessibilityLabel="Onboarding step 1 of 4">
            <View style={[styles.step, styles.activeStep]} />
            <View style={styles.step} />
            <View style={styles.step} />
            <View style={styles.step} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.actions}>
            <Pressable
              accessibilityRole="button"
              onPress={() => router.push('/how-it-works')}
              style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryPressed]}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
              <Text style={styles.primaryArrow}>→</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              onPress={() => Alert.alert('Restore study files', 'Restore will be available when the library is ready.')}
              style={styles.restoreButton}>
              <Text style={styles.restoreIcon}>⌁</Text>
              <Text style={styles.restoreText}>Already have study files? </Text>
              <Text style={styles.restoreLink}>Restore</Text>
            </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  scrollView: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  content: { width: '100%', maxWidth: 480, alignSelf: 'center', paddingHorizontal: 20, paddingBottom: 12 },
  header: { height: 56, flexDirection: 'row', alignItems: 'center' },
  brandMark: { width: 28, height: 28, borderRadius: 8, backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center' },
  brandMarkText: { color: colors.paper, fontSize: 18, lineHeight: 24 },
  brandName: { marginLeft: 9, color: colors.ink, fontFamily: TalaFonts.heading, fontSize: 21 },
  headerSpacer: { flex: 1 },
  headerCaption: { color: colors.green, fontFamily: TalaFonts.bold, fontSize: 9, letterSpacing: 1.25 },
  offlineBadge: { alignSelf: 'center', minHeight: 26, marginTop: 4, marginBottom: 14, paddingHorizontal: 13, borderRadius: 20, backgroundColor: colors.butter, flexDirection: 'row', alignItems: 'center', gap: 7 },
  offlineDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.butterInk },
  offlineBadgeText: { color: colors.green, fontFamily: TalaFonts.semibold, fontSize: 11 },
  sceneCard: { overflow: 'hidden', borderRadius: 14, backgroundColor: colors.paper, borderWidth: 1, borderColor: colors.outline, shadowColor: '#34453E', shadowOpacity: 0.08, shadowRadius: 14, shadowOffset: { width: 0, height: 4 }, elevation: 2 },
  sceneFrame: { width: '100%', aspectRatio: 4 / 3, position: 'relative' },
  sceneImage: { width: '100%', height: '100%' },
  sceneLabel: { position: 'absolute', top: 12, right: 12, flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: 'rgba(255,253,247,0.93)', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 },
  sceneLabelLeaf: { color: colors.green, fontSize: 12 },
  sceneLabelText: { color: colors.muted, fontFamily: TalaFonts.semibold, fontSize: 10 },
  sceneFooter: { minHeight: 41, paddingHorizontal: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 7 },
  sceneFooterGroup: { flexDirection: 'row', alignItems: 'center', gap: 5, flexShrink: 1 },
  sceneFooterDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.green },
  sceneFooterText: { color: colors.muted, fontFamily: TalaFonts.semibold, fontSize: 9, flexShrink: 1 },
  message: { alignItems: 'center', marginTop: 26 },
  title: { maxWidth: 320, color: colors.ink, textAlign: 'center', fontFamily: TalaFonts.heading, fontSize: 32, lineHeight: 38, letterSpacing: -0.7 },
  description: { maxWidth: 310, color: colors.muted, textAlign: 'center', fontFamily: TalaFonts.body, fontSize: 14, lineHeight: 22, marginTop: 9 },
  supportBadge: { marginTop: 16, flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: colors.quiet, borderRadius: 20 },
  supportIcon: { color: colors.green, fontSize: 15, lineHeight: 16 },
  supportText: { color: colors.green, fontFamily: TalaFonts.semibold, fontSize: 11 },
  steps: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 7, marginTop: 23, marginBottom: 18 },
  step: { width: 7, height: 7, borderRadius: 5, backgroundColor: '#DCDAD0' },
  activeStep: { width: 22, backgroundColor: colors.green },
  actions: { width: '100%', maxWidth: 480, alignSelf: 'center', paddingHorizontal: 20, paddingBottom: 8, gap: 4 },
  primaryButton: { height: 55, borderRadius: 13, backgroundColor: colors.green, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  primaryPressed: { backgroundColor: '#1E4332' },
  primaryButtonText: { color: '#FFFFFF', fontFamily: TalaFonts.bold, fontSize: 13 },
  primaryArrow: { color: '#FFFFFF', fontSize: 21, lineHeight: 23 },
  restoreButton: { minHeight: 43, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  restoreIcon: { color: colors.butterInk, fontSize: 16, marginRight: 5 },
  restoreText: { color: colors.muted, fontFamily: TalaFonts.body, fontSize: 11 },
  restoreLink: { color: colors.muted, fontFamily: TalaFonts.bold, fontSize: 11, textDecorationLine: 'underline' },
});
