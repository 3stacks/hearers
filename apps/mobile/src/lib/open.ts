import * as WebBrowser from 'expo-web-browser'
import { Alert, Linking, Platform } from 'react-native'
import { APPS, appLink, siblingOf } from './appLink.ts'

/** Open `url` in the in-app browser. */
async function browse(url: string) {
  await WebBrowser.openBrowserAsync(url).catch(() => {
    // The browser did not open. There is nothing more to do.
  })
}

/**
 * Open a link (the Self-Interpreting Bible, further reading, a source). A link
 * to Precentor, Covenant Household, Haddington Bible or A Method for Prayer
 * opens that app when it is on the device. On an iPhone or iPad without that app, a
 * dialog offers the App Store page of the app or the website. Any other link
 * opens in the in-app browser.
 */
export function open(url: string) {
  void (async () => {
    const app = appLink(url, 'hearers')
    if (app) {
      try {
        await Linking.openURL(app)
        return
      } catch {
        // The app is not on the device.
      }
      const sibling = APPS[siblingOf(url, 'hearers') ?? '']
      const store = sibling?.appStore
      if (Platform.OS === 'ios' && sibling && store) {
        Alert.alert(
          `${sibling.name} is not on this ${Platform.isPad ? 'iPad' : 'iPhone'}`,
          `Get ${sibling.name} free from the App Store, or open the website.`,
          [
            { text: 'App Store', onPress: () => void Linking.openURL(store).catch(() => browse(store)) },
            { text: 'Website', onPress: () => void browse(url) },
            { text: 'Cancel', style: 'cancel' },
          ],
        )
        return
      }
    }
    await browse(url)
  })()
}
