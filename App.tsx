import '@/libs/unistyles' // importo por primeiro o theme.
import { StatusBar } from "expo-status-bar"
import {
  useFonts,
  Urbanist_700Bold,
  Urbanist_400Regular,
  Urbanist_800ExtraBold,
} from "@expo-google-fonts/urbanist"

import { Home } from "@/screens/Home"
import { Loading } from "@/components/Loading"

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_700Bold,
    Urbanist_400Regular,
    Urbanist_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home />
    </>
  )
}
