from twilio.rest import TwilioRestClient

account_sid = "AC02b7f60cc20d48c7ffc34a8bac06bd7e" # Your Account SID from www.twilio.com/console
auth_token  = "7196d6af027843643284809bfb57d1fd"  # Your Auth Token from www.twilio.com/console

client = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="Hello from Python",
    to="+19543946357",    # Replace with your phone number
    from_="+17545818850") # Replace with your Twilio number

print(message.sid)
