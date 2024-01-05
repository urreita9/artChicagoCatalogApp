# React Native Art Catalog App

## Overview
This project, developed during the week of Dec 27 - Dec 31, serves as a React Native Junior Developer job application challenge.

Update - January 5, 2024
Card Component Refactor: Compound Component
Enhancing the reusability and flexibility of the Card component, it now follows the compound component pattern. Below is an example of its usage:
```jsx
<Card artWork={{...}}>
  <Card.Image />
  <Card.Title />
  <Card.Description />
  <Card.IconButton />
</Card>
![Screenshot 2024-01-05 at 16 30 35](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/c87d7b85-05ef-48a5-8c53-6f81b1adb2ca)
![Screenshot 2024-01-05 at 16 30 50](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/19ee2af0-bda5-4bd7-9950-1591b388823d)

The Card component is designed for versatile reuse. You can easily customize each child component by passing custom styles.

## App Features

### Home Screen
- **Header:** Displays the Art Institute of Chicago logo and a map link for directions.
- **Feed:** Presents a list of artworks retrieved from the institute's public API. Initially loads 10 artworks, and as the user scrolls down, an additional set of 10 artworks is fetched for infinite scrolling.

### Favorites Screen
- **Feed:** Similar to the Home screen's feed but exclusively shows artworks that users have liked (by pressing the heart icon).

### ArtWork Details Screen
- **Details:** Offers in-depth information and a high-resolution image for a selected artwork. Users navigate to this screen by selecting an item from the feed.
- **Floating Button:** Positioned at the bottom right corner, this floating action button triggers an animation, revealing two additional buttons (like and a "tickets to the museum" link to the institute's website).

## Key Technologies Used
- **Zustand:** State management for a streamlined and efficient application state.
- **MMKV:** Integrated for data persistence, enabling the app to save and retrieve an array of artwork IDs. This helps in requesting the remaining data when the app is reopened.
- **Responsive Design:** Ensured responsiveness across different devices using `react-native-size-matters` for consistent styles.
- **Animations:** Implemented animations with `react-native-reanimated` for a smooth and engaging user experience.

## Push Notifications
Upon entering the background, the app generates a push notification after a 5-second delay (for demonstration purposes, but this timing can be adjusted). The notification showcases a random artwork from the feed. When users tap the notification, they are directed to the details screen of the highlighted artwork.

## Navigation
- **Bottom Tab Navigator:** Facilitates navigation between Home and Favorites.
- **Stack Navigator:** Utilized for navigating to the Details screen.

## Future Improvements
Given additional time, thorough testing would be conducted to enhance the app's overall quality and reliability.

Feel free to explore the app and provide feedback or suggestions for further improvement!





INSTRUCTIONS: create a .env file in the main directory and put:
API_BASE_URL='the_api_base_url'
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 19 11](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/55d691d4-6bad-4330-b0ae-a9e4c73f9d2e)
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 20 20](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/029464f4-7b00-468b-807c-4fade9ec2d79)
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 20 24](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/07d122a3-b898-4c17-85d7-0f25c8ba578e)
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 20 38](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/42035f24-6781-4c02-8afd-c57a6159f2c9)
![Simulator Screenshot - iPhone SE (3rd generation) - 2023-12-31 at 03 24 07](https://github.com/urreita9/artChicagoCatalogApp/assets/71611977/e6e256fb-3a27-4f60-87ea-ebc0ccc6241b)

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).
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
