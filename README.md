# Expo Tab App (Splash → Login → Tabs)

A React Native + Expo starter with:

- 🚀 Custom animated **splash screen** (shown on launch)
- 🔐 **Login screen** shown immediately after the splash, before anything else
- 📱 Bottom **Tab.Navigator** with icons (Home, Search, Profile, Settings) shown after login
- 🎨 Icons via `@expo/vector-icons` (Ionicons)

## App flow

```
Splash Screen  →  Login Screen  →  Tab Navigator (Home / Search / Profile / Settings)
 (~2.5s)           (email/password)      (bottom tabs, each with its own icon)
```

This is controlled in `App.js` via a simple `stage` state machine:
`"splash" → "login" → "app"`.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
   (A `package-lock.json` is already included and was verified during creation.)

2. Start the dev server:
   ```bash
   npx expo start
   ```

3. Run it:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with the **Expo Go** app on your phone
   - Press `w` to run in a browser

## Project structure

```
expo-tab-app/
├── App.js                     # Controls splash -> login -> tabs flow
├── app.json                   # Expo config (name, icon, splash config)
├── babel.config.js
├── package.json
├── assets/                    # icon.png, splash.png, adaptive-icon.png, favicon.png
├── screens/
│   ├── SplashScreen.js        # Animated splash screen
│   ├── LoginScreen.js         # Login form (email + password)
│   ├── HomeScreen.js
│   ├── SearchScreen.js
│   ├── ProfileScreen.js
│   └── SettingsScreen.js
└── navigation/
    └── TabNavigator.js        # Bottom tab navigator with icons
```

## Customizing

- **Splash duration / animation:** edit `screens/SplashScreen.js` (the `setTimeout` controls how long it shows).
- **Real authentication:** replace the placeholder logic in `LoginScreen.js`'s `handleLogin()` with a call to your API/Firebase/Auth0/etc. Currently it accepts any non-empty email + password.
- **Add more tabs:** add a new screen file in `screens/`, then register it in `navigation/TabNavigator.js` with a `<Tab.Screen>` entry and an icon mapping in the `ICONS` object.
- **Logout:** `TabNavigator` receives an `onLogout` prop you can wire up to a button (e.g., in Settings) to call `setStage("login")` in `App.js`.
- **Icons:** browse available icons at https://icons.expo.fyi (Ionicons set is used here).
- **App icon / splash image:** replace the placeholder PNGs in `assets/` with your own artwork (same filenames, `app.json` already points to them).

## Notes

- `node_modules/` is **not** included in this zip (keeps it small) — just run `npm install` first.
- Built with Expo SDK 51, React Navigation 6, and React Native 0.74.
- Web support (`npx expo start` then press `w`) works out of the box — `react-native-web`, `react-dom`, and `@expo/metro-runtime` are already listed as dependencies.
