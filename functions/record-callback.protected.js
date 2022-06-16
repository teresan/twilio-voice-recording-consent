
exports.handler = function(context, event, callback) {

  console.log(`Recording URL ${event.RecordingUrl}`);
  callback(null, new Twilio.twiml.VoiceResponse());

};
