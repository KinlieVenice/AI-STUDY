import { Pressable, StyleSheet, Text, View, type ViewStyle } from 'react-native';

import { TalaCard, TalaTag } from '@/components/tala-screen';
import { TalaColors as c, TalaFonts as f } from '@/constants/tala';

export function PageIntro({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <View style={s.intro}>
    {eyebrow && <Text style={s.eyebrow}>{eyebrow.toUpperCase()}</Text>}
    <Text style={s.title}>{title}</Text>
    {description && <Text style={s.description}>{description}</Text>}
  </View>;
}

export function InfoCard({ title, description, badge, icon, onPress, style }: { title: string; description?: string; badge?: string; icon?: string; onPress?: () => void; style?: ViewStyle }) {
  const card = <TalaCard style={style}>
    <View style={s.cardRow}>
      {icon && <View style={s.icon}><Text style={s.iconText}>{icon}</Text></View>}
      <View style={s.cardCopy}><Text style={s.cardTitle}>{title}</Text>{description && <Text style={s.cardDescription}>{description}</Text>}</View>
      {onPress && <Text style={s.chevron}>›</Text>}
    </View>
    {badge && <View style={s.badge}><TalaTag label={badge} tone="mint" /></View>}
  </TalaCard>;
  return onPress ? <Pressable accessibilityRole="button" onPress={onPress}>{card}</Pressable> : card;
}

export function Note({ children, tone = 'mint' }: { children: string; tone?: 'mint' | 'peach' }) {
  return <View style={[s.note, tone === 'peach' && s.notePeach]}><Text style={s.noteText}>{children}</Text></View>;
}

export function Progress({ value }: { value: number }) {
  return <View style={s.progressTrack}><View style={[s.progressFill, { width: `${Math.min(100, Math.max(0, value))}%` }]} /></View>;
}

export function Choice({ label, detail, selected, onPress, correct, wrong }: { label: string; detail?: string; selected?: boolean; onPress?: () => void; correct?: boolean; wrong?: boolean }) {
  const content = <>
    <View style={[s.radio, selected && s.radioSelected]}>{selected && <View style={s.radioDot} />}</View>
    <View style={s.cardCopy}><Text style={s.choiceText}>{label}</Text>{detail && <Text style={s.cardDescription}>{detail}</Text>}</View>
  </>;
  const style = [s.choice, selected && s.choiceSelected, correct && s.choiceCorrect, wrong && s.choiceWrong];
  return onPress ? <Pressable accessibilityRole="button" accessibilityState={{ selected }} onPress={onPress} style={style}>{content}</Pressable> : <View style={style}>{content}</View>;
}

export function MiniStat({ value, label }: { value: string; label: string }) {
  return <View style={s.stat}><Text style={s.statValue}>{value}</Text><Text style={s.statLabel}>{label}</Text></View>;
}

const s = StyleSheet.create({
  intro: { marginBottom: 20 },
  eyebrow: { color: c.sage, fontFamily: f.bold, fontSize: 9, letterSpacing: 1.5, marginBottom: 8 },
  title: { color: c.pine, fontFamily: f.heading, fontSize: 32, lineHeight: 36 },
  description: { color: c.muted, fontFamily: f.body, fontSize: 12, lineHeight: 19, marginTop: 7 },
  cardRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  icon: { width: 37, height: 37, borderRadius: 11, backgroundColor: c.paperMuted, alignItems: 'center', justifyContent: 'center' },
  iconText: { color: c.green, fontSize: 18 },
  cardCopy: { flex: 1 },
  cardTitle: { color: c.ink, fontFamily: f.semibold, fontSize: 12, lineHeight: 18 },
  cardDescription: { color: c.muted, fontFamily: f.body, fontSize: 10, lineHeight: 15, marginTop: 3 },
  chevron: { color: c.sage, fontSize: 23 },
  badge: { marginTop: 11 },
  note: { backgroundColor: '#E8F4EB', borderRadius: 14, padding: 13, marginTop: 16 },
  notePeach: { backgroundColor: '#FCEADF' },
  noteText: { color: c.green, fontFamily: f.medium, fontSize: 10, lineHeight: 16 },
  progressTrack: { height: 8, backgroundColor: c.paperMuted, borderRadius: 8, overflow: 'hidden' },
  progressFill: { height: 8, backgroundColor: c.sage, borderRadius: 8 },
  choice: { flexDirection: 'row', gap: 11, alignItems: 'center', borderRadius: 15, borderWidth: 1, borderColor: c.outline, backgroundColor: c.paper, padding: 15, marginBottom: 9 },
  choiceSelected: { borderColor: c.sage, backgroundColor: '#EAF4EB' },
  choiceCorrect: { borderColor: c.sage, backgroundColor: '#DFF2E6' },
  choiceWrong: { borderColor: c.terracotta, backgroundColor: '#FBECE5' },
  radio: { width: 18, height: 18, borderWidth: 1.5, borderColor: c.sage, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  radioSelected: { borderColor: c.green },
  radioDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: c.green },
  choiceText: { color: c.ink, fontFamily: f.semibold, fontSize: 11 },
  stat: { flex: 1, padding: 13, borderRadius: 14, backgroundColor: c.paper, borderWidth: 1, borderColor: c.outline, alignItems: 'center' },
  statValue: { color: c.green, fontFamily: f.heading, fontSize: 23 },
  statLabel: { color: c.muted, fontFamily: f.medium, fontSize: 9, textAlign: 'center' },
});
