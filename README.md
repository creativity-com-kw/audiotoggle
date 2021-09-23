## AudioToggle

This is a copy of https://github.com/alongubkin/audiotoggle with slight modifications to improve packaging with cordova.
Cordova plugin for switching between speaker and earpiece when playing audio.

    cordova plugin add cordova-plugin-audiotoggle --save
    
### Supported Platforms

- Android
- iOS

### Usage

To set the current audio mode, use the `setAudioMode` method:

    AudioToggle.setAudioMode(AudioToggle.SPEAKER);
    // or
    AudioToggle.setAudioMode(AudioToggle.EARPIECE);

Android has the following additional options:

    AudioToggle.setAudioMode(AudioToggle.NORMAL);
    // and
    AudioToggle.setAudioMode(AudioToggle.RINGTONE);


For webrtc call (on speaker) on cordova app use CALL_ON_SPEAKER mode, it will prevent echo on android

    AudioToggle.setAudioMode(AudioToggle.CALL_ON_SPEAKER);