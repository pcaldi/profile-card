import { Pressable, View } from "react-native"
import { useStyles, UnistylesRuntime } from "react-native-unistyles"

import { stylesheet } from "./styles"
import { ProfileCard } from "@/components/ProfileCard"
import { Sun, Moon } from "lucide-react-native"

export function Home() {

  const { styles, theme } = useStyles(stylesheet)

  // Função para trocar o theme da aplicação, utilizo o UnistylesRuntime.themeName para identificar qual nome está ativo.
  // Passo UnistylesRuntime.setTheme para setar o theme.
  function toggleTheme() {
    if (UnistylesRuntime.themeName === "dark") {
      UnistylesRuntime.setTheme("light")
    } else {
      UnistylesRuntime.setTheme("dark")
    }
  }

  // Função para mudar o Ícone
  const ThemeIcon = () => UnistylesRuntime.themeName === "dark" ? (
    <Sun size={22} color={theme.colors.primary} />
  ) : (
    <Moon size={22} color={theme.colors.primary} />
  )

  return (
    <View style={styles.container}>
      <Pressable style={styles.ToggleTheme} onPress={toggleTheme}>
        {ThemeIcon}
      </Pressable>
      <ProfileCard />
    </View>
  )
}
