[Screen Recording 2023-12-31 at 02.49.36.zip](https://github.com/urreita9/artChicagoCatalogApp/files/13800404/Screen.Recording.2023-12-31.at.02.49.36.zip)Hi! This is a challenge I made this past week (Dec 27 - Dec 31) for a React Native JR Job Position!

The app:

Basically has three screens:
- Home:
   - Header: Art Institute of Chicago logo and a map link to get directions
   - Feed: List of artworks requested to the institute's public api. It gets 10, and when you scroll down and get to the bottom of the screen, gets another 10: infinite scroll.
- Favorites:
   - Feed: Same component as before. But here we get only the ones that we liked (pressing on the heart icon).
- ArtWork details:
   - Details: A screen where we can see more data and a better picture from a given artwork. We get here pressing on an item from the Feed.
   - Floating Button: A floating action butotn on the bottom right corner of the screen. It has an animation where two other buttons appear (like and a "tickets to the museum" link to the insitute's website).

I used zustand, integrated with mmkv (storage library) so that we can persist data when we close the app. We save an array of artworks id's, and when we re open the app, we use them to request the rest of the data.

Push notifications:
- as requested, everytime the app gets on the background, a push notification gets triggered -5 seconds after this event (just for showasing, it could be any given time)- sending the user a random artwork from the Feed. When the notification gets pressed, the user is taken to the details screen of that artwork.

Navigation:
- Bottom tab navigator: Home / Favorites
- Stack navigator: Details

With a few more days i'd definetly do some testing.


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

INSTRUCTIONS: create a .env file in the main directory and put:
API_BASE_URL='the_api_base_url'
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 19 11](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/55d691d4-6bad-4330-b0ae-a9e4c73f9d2e)
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 20 20](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/029464f4-7b00-468b-807c-4fade9ec2d79)
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 20 24](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/07d122a3-b898-4c17-85d7-0f25c8ba578e)
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 20 38](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/42035f24-6781-4c02-8afd-c57a6159f2c9)
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 24 07](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/e6e256fb-3a27-4f60-87ea-ebc0ccc6241b)


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
# artChicagoCatalogApp
