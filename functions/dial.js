
exports.handler = function(context, event, callback) {

  const destination = event.To;
  const response = new Twilio.twiml.VoiceResponse()
  const dial = response.dial({
    callerId: context.CALLER_ID,
  });

  dial.number({
    url: '/gather-consent',
  }, destination);

  callback(null, response);
};
