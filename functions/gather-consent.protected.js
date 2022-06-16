
exports.handler = function(context, event, callback) {

  const response = new Twilio.twiml.VoiceResponse();

  response.say({
    language: 'en-GB'
  }, 'Dear customer, please say yes if you agree with us recording this call or say no to not record this call ');
  
  response.gather({
    action: '/record',
    input: 'speech',
    timeout: 2,
    hints: 'yes, no, repeat'
  });
  
  callback(null, response);
};
