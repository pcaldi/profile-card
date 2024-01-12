export const fonts = {
  primary: {
    regular: 'Urbanist_400Regular',
    bold: 'Urbanist_700Bold',
    extraBold: 'Urbanist_800ExtraBold',
  },

  size: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 22
  },
} as const // objetos que não mudam, para o typescript lidar melhor.
