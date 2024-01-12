import { Image, Text, View } from "react-native"

import { Techs } from "@/components/Techs"
import { stylesheet } from "./styles"
import { useStyles, UnistylesRuntime } from "react-native-unistyles"

export function ProfileCard() {
  const { styles } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      {UnistylesRuntime.themeName === "dark" ? (
        <Image
          source={require("@/assets/images/paulo.png")}
          style={styles.avatar}
        />
      ) : (
        <Image
          source={require("@/assets/images/paulo_02.png")}
          style={styles.avatar}
        />
      )
      }
      <Image
        source={require("@/assets/images/react_logo.png")}
        style={styles.react_logo}
      />

      <View style={styles.content}>
        <View style={styles.greeting}>
          <Image
            source={require("@/assets/images/hi.gif")}
            style={styles.emotion}
          />
          <Text style={styles.message}>Olá, eu sou</Text>
        </View>
        <Text style={styles.username}>Paulo Caldi</Text>

        <Techs />
      </View>
    </View>
  )
}
