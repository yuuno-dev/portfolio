export const motionTokens = {
  duration: {
    fast: 0.18,
    normal: 0.35,
    slow: 0.6,
    dayNight: 0.95,
    ambient: 5.4,
    ambientSlow: 6.2,
  },
  easing: {
    smooth: [0.22, 1, 0.36, 1] as const,
    sharp: [0.4, 0, 0.2, 1] as const,
    ambient: 'easeInOut' as const,
  },
  distance: {
    sm: 8,
    md: 16,
    lg: 24,
  },
}

export const springs = {
  gentle: { type: 'spring' as const, stiffness: 120, damping: 18 },
  snappy: { type: 'spring' as const, stiffness: 300, damping: 28 },
}
