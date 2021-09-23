var exec = require('cordova/exec');

exports.BLUETOOTH = 'bluetooth';
exports.SPEAKER = 'speaker';
exports.EARPIECE = 'earpiece';
exports.NORMAL = 'normal';
exports.RINGTONE = 'ringtone';
exports.CALL_ON_SPEAKER = 'call_on_speaker';

exports.setAudioMode = function (mode) {
	cordova.exec(null, null, 'AudioTogglePlugin', 'setAudioMode', [mode]);
};