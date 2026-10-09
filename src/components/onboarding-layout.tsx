import { router } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TalaColors as c, TalaFonts as f } from '@/constants/tala';

type OnboardingLayoutProps = {
  step: 2 | 3 | 4;
  children: ReactNode;
  footer: ReactNode;
  onSkip?: () => void;
};

export function OnboardingLayout({ step, children, footer, onSkip }: OnboardingLayoutProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
          <View style={styles.header}>
            <Pressable accessibilityRole="button" accessibilityLabel="Go back" onPress={() => router.back()} style={styles.backButton}>
              <Text style={styles.backArrow}>←</Text>
            </Pressable>
            <Text style={styles.headerTitle}>Onboarding</Text>
            <View style={styles.headerSpacer} />
            <View style={styles.avatar}><Text style={styles.avatarText}>T</Text></View>
          </View>
          <View style={styles.progressRow}>
            <View style={styles.progressPill}>
              {[1, 2, 3, 4].map((item) => <View key={item} style={[styles.progressSegment, item === step && styles.progressActive, item < step && styles.progressDone]} />)}
              <Text style={styles.progressText}>Step {step} of 4</Text>
            </View>
            {onSkip && <Pressable accessibilityRole="button" onPress={onSkip} style={styles.skipButton}><Text style={styles.skipText}>Skip  →</Text></Pressable>}
          </View>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
        <View style={styles.footer}>{footer}</View>
      </View>
    </SafeAreaView>
  );
}

type PrimaryActionProps = { label: string; onPress: () => void };

export function PrimaryAction({ label, onPress }: PrimaryActionProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryPressed]}>
      <Text style={styles.primaryText}>{label}</Text>
      <Text style={styles.primaryArrow}>→</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: c.background },
  content: { flex: 1, width: '100%', maxWidth: 480, alignSelf: 'center', paddingHorizontal: 16, paddingBottom: 8 },
  header: { height: 58, flexDirection: 'row', alignItems: 'center' },
  backButton: { width: 42, height: 42, alignItems: 'center', justifyContent: 'center', marginLeft: -9 },
  backArrow: { color: c.ink, fontSize: 22 },
  headerTitle: { color: c.ink, fontFamily: f.heading, fontSize: 20 },
  headerSpacer: { flex: 1 },
  avatar: { width: 29, height: 29, borderRadius: 15, backgroundColor: c.pine, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: c.paper, fontFamily: f.bold, fontSize: 13 },
  progressRow: { minHeight: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  progressPill: { flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: c.paperMuted, borderRadius: 20, paddingHorizontal: 11, paddingVertical: 7 },
  progressSegment: { width: 6, height: 6, borderRadius: 4, backgroundColor: '#CBD5CE' },
  progressActive: { width: 18, backgroundColor: c.green },
  progressDone: { backgroundColor: c.sage },
  progressText: { marginLeft: 4, color: c.muted, fontFamily: f.semibold, fontSize: 10 },
  skipButton: { minWidth: 54, minHeight: 34, alignItems: 'center', justifyContent: 'center' },
  skipText: { color: c.muted, fontFamily: f.medium, fontSize: 11 },
  scrollView: { flex: 1 },
  body: { paddingTop: 9, paddingBottom: 16 },
  footer: { paddingTop: 8 },
  primaryButton: { minHeight: 54, borderRadius: 27, backgroundColor: c.green, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 9, paddingHorizontal: 22 },
  primaryPressed: { backgroundColor: c.pine },
  primaryText: { color: c.paper, fontFamily: f.bold, fontSize: 13 },
  primaryArrow: { color: c.paper, fontSize: 19, lineHeight: 20 },
});
