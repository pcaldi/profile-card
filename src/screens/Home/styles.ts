import { createStyleSheet } from "react-native-unistyles"

// Exporto o stylesheet com o "createStyleSheet" pegando o theme
export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 94,
    backgroundColor: theme.colors.background,
  },
  ToggleTheme: {
    alignItems: "flex-end",
    marginBottom: 54,
  }
}))
