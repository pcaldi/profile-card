import { createStyleSheet } from "react-native-unistyles"

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: "100%",
    height: 154,
    borderRadius: 10,
    backgroundColor: theme.colors.shape,
    position: "relative",
    flexDirection: "row",
  },
  avatar: {
    height: 235,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  react_logo: {
    position: "absolute",
    top: 0,
  },
  content: {
    marginLeft: 180,
    justifyContent: "center",
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  emotion: {
    width: 20,
    height: 20,
  },
  message: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.sm,
    fontFamily: theme.fonts.primary.regular,
  },
  username: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.xl,
    fontFamily: theme.fonts.primary.extraBold,
    marginBottom: 32,
  },
}))
