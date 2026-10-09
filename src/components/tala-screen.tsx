import { router } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TalaColors as c, TalaFonts as f } from '@/constants/tala';

type ScreenProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  back?: boolean;
  right?: ReactNode;
};

export function TalaScreen({ title, subtitle, children, footer, back = true, right }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.frame}>
        <View style={styles.header}>
          {back && <Pressable accessibilityRole="button" accessibilityLabel="Go back" onPress={() => router.back()} style={styles.back}><Text style={styles.backText}>←</Text></Pressable>}
          <View style={styles.headerCopy}>
            <Text style={styles.headerTitle}>{title}</Text>
            {subtitle && <Text style={styles.headerSubtitle}>{subtitle}</Text>}
          </View>
          {right}
        </View>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
        {footer && <View style={styles.footer}>{footer}</View>}
      </View>
    </SafeAreaView>
  );
}

type ButtonProps = { label: string; onPress: () => void; secondary?: boolean; disabled?: boolean; icon?: string };

export function TalaButton({ label, onPress, secondary, disabled, icon }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [styles.button, secondary ? styles.buttonSecondary : styles.buttonPrimary, disabled && styles.buttonDisabled, pressed && !disabled && styles.buttonPressed]}>
      <Text style={[styles.buttonText, secondary ? styles.buttonTextSecondary : styles.buttonTextPrimary]}>{label}</Text>
      {icon && <Text style={[styles.buttonIcon, secondary ? styles.buttonTextSecondary : styles.buttonTextPrimary]}>{icon}</Text>}
    </Pressable>
  );
}

export function TalaCard({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function TalaTag({ label, tone = 'sage' }: { label: string; tone?: 'sage' | 'mint' | 'peach' | 'paper' }) {
  const toneStyle = tone === 'mint' ? styles.tagMint : tone === 'peach' ? styles.tagPeach : tone === 'paper' ? styles.tagPaper : styles.tagSage;
  return <View style={[styles.tag, toneStyle]}><Text style={styles.tagText}>{label}</Text></View>;
}

export function TalaSectionTitle({ title, hint }: { title: string; hint?: string }) {
  return <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>{title}</Text>{hint && <Text style={styles.sectionHint}>{hint}</Text>}</View>;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: c.background },
  frame: { flex: 1, width: '100%', maxWidth: 520, alignSelf: 'center', backgroundColor: c.background },
  header: { minHeight: 58, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', gap: 8, borderBottomWidth: 1, borderBottomColor: c.outline },
  back: { width: 33, height: 40, marginLeft: -7, alignItems: 'center', justifyContent: 'center' },
  backText: { color: c.ink, fontSize: 22 },
  headerCopy: { flex: 1 },
  headerTitle: { color: c.ink, fontFamily: f.heading, fontSize: 19, lineHeight: 23 },
  headerSubtitle: { color: c.sage, fontFamily: f.medium, fontSize: 10, marginTop: 1 },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 18, paddingTop: 18, paddingBottom: 30 },
  footer: { paddingHorizontal: 18, paddingTop: 9, paddingBottom: 8, borderTopWidth: 1, borderTopColor: c.outline, backgroundColor: c.background },
  button: { minHeight: 50, borderRadius: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingHorizontal: 18 },
  buttonPrimary: { backgroundColor: c.green },
  buttonSecondary: { backgroundColor: c.paperMuted },
  buttonDisabled: { opacity: 0.5 },
  buttonPressed: { opacity: 0.85 },
  buttonText: { fontFamily: f.bold, fontSize: 12 },
  buttonTextPrimary: { color: c.paper },
  buttonTextSecondary: { color: c.green },
  buttonIcon: { fontSize: 17 },
  card: { padding: 16, borderWidth: 1, borderColor: c.outline, borderRadius: 18, backgroundColor: c.paper },
  tag: { alignSelf: 'flex-start', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 5 },
  tagSage: { backgroundColor: '#E8F0E9' },
  tagMint: { backgroundColor: c.mint },
  tagPeach: { backgroundColor: '#FCE7DC' },
  tagPaper: { backgroundColor: c.paperMuted },
  tagText: { color: c.green, fontFamily: f.semibold, fontSize: 9 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, marginBottom: 10 },
  sectionTitle: { color: c.ink, fontFamily: f.heading, fontSize: 18 },
  sectionHint: { color: c.sage, fontFamily: f.medium, fontSize: 10 },
});
