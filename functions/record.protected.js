
exports.handler = function(context, event, callback) {

  const speechResult = event.SpeechResult;
  const response = new Twilio.twiml.VoiceResponse();

  if (speechResult.toLowerCase().includes('yes')) {
    response.record({
      action: '/record-callback',
      transcribe: true,
      playBeep: true,
      trim: 'trim-silence',
    });
  } 

  response.say({
    language: 'en-GB'
  }, 'We will now connect to your driver');

  callback(null, response);
};
