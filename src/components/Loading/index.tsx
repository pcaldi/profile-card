import { View, ActivityIndicator } from 'react-native'

import { stylesheet } from './styles'
import { useStyles } from 'react-native-unistyles'

export function Loading() {
  // Utilizo o hook useStyles para passar meu style.
  const { styles } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#369EFF" />
    </View>
  )
}
