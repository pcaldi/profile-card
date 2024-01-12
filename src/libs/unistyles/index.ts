import { UnistylesRegistry } from 'react-native-unistyles'

import { dark, light } from './theme'

import { breakpoints } from './tokens/breakpoints'

// Conteúdo de breakpoint pego ele dinamicamente com o "typeof"
type AppBreakpoint = typeof breakpoints;

// Conteúdo de light e dark estou pegando dinamicamente com o "typeof"
interface AppTheme {
  light: typeof light,
  dark: typeof dark
}

// Declaro o módulo para 'react-native-unistyles' para sobrescrever a tipagem
declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoint { }
  export interface UnistylesThemes extends AppTheme { }
}

// Registrando o Theme na aplicação.
UnistylesRegistry.addBreakpoints(breakpoints).addThemes({
  dark, light
}).addConfig({
  initialTheme: 'light', // Tenho que passar essa propriedade para dizer qual será Theme a inicial.
  adaptiveThemes: true, // Propriedade que define o Theme da aplicação igual ao do dispositivo do usuário.
})
