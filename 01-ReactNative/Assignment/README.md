# SE05-MSD-01ReactNative

A movie database app made with React Native that can fetch movie, tv-shows and person data.

<p float="left">
<img src="/assets/demo/Home.jpg" alt="drawing" width="200"/>
<img src="/assets/demo/Search-example.jpg" alt="drawing" width="200"/>
<img src="/assets/demo/Search-movie-example.jpg" alt="drawing" width="200"/>
<img src="/assets/demo/Trending.jpg" alt="drawing" width="200"/>
</p>

[Watch live demo](https://youtube.com/shorts/HBCMWmjcoek) or see [More screenshots](https://github.com/Berkanktk/SE05-MSD-01ReactNative/tree/demo/assets/demo).

# Installation

**Download Expo CLI**  
`npm  install -g expo-cli`

**Install packages**  
`npm install `

## For Web

`npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0`

`npm run`

## For Android

1. Download Android SDK or simply Android Studio.
2. Setup the emulator (Pixel_5_API_30)

**Type**  
`cd C:\Users\Berkan\AppData\Local\Android\Sdk\emulator`

**And then run**  
`.\emulator -avd Pixel_5_API_30`

## For Mac

Download Xcode and then run:  
`open -a simulator && npm run ios`

# Tasks

**Build a movie database App with React Native!**

You are tasked to build and design a movie database app, using the elements from the lectures. You are NOT supposed to
use all of them, but you have to use some, and explain why/why not you didn't decide to utilize elements.

**Examples of technologies that you could use:**

1. FlatList
2. SectionList
3. ScrollList
4. React Navigation
5. ContextProvider

In the report please highlight the chosen technologies as such:

**Example**

*I choose to use Flatlist because… and I didnt use Context Providers because.. I could have used a SectionList but..*

It's important to explain why you choose some technologies over others and ofcourse explain why you chose the
technologies you have.

**Database**

For the movies, you could use this API to fetch down the data:
https://developers.themoviedb.org/3

**Hand-in**

Handin a small report of half a page explaining your app, including your app in a zip-file, that can be run by anyone.

**Grading**

You will get points depending on how you build your app and the content of the report. The report should be short, but
highlight the most important elements from your app. Things you are proud of, technical things and so forth. The design
of the app will also have an impact on the grading, so please do spend a little time on styling your app.

# API Specific

See [Documentation](https://developers.themoviedb.org/3/getting-started).
