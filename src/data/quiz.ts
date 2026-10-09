export const quizQuestions = [
  {
    question: 'What is the primary role of mitochondria in a cell?',
    options: ['Store genetic information', 'Release usable energy from nutrients', 'Capture light for photosynthesis', 'Control what enters the cell'],
    answer: 'Release usable energy from nutrients',
    explanation: 'Mitochondria carry out cellular respiration, turning energy in nutrients into ATP the cell can use.',
    source: 'Mitochondria release usable energy through cellular respiration.',
  },
  {
    question: 'Where is most of a eukaryotic cell’s genetic information stored?',
    options: ['Nucleus', 'Cell membrane', 'Mitochondrion', 'Cytoplasm'],
    answer: 'Nucleus',
    explanation: 'The nucleus houses DNA and helps direct the cell’s activity.',
    source: 'The nucleus stores genetic information.',
  },
  {
    question: 'What do chloroplasts use to begin photosynthesis?',
    options: ['Sound', 'Light', 'Heat alone', 'ATP from animals'],
    answer: 'Light',
    explanation: 'Chloroplasts capture light energy, which plants use to build glucose.',
    source: 'Chloroplasts capture light for photosynthesis.',
  },
] as const;
