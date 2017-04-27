// API `auth_token`
// Use for:
// 1. Settings TFA (Settings/Security)
// 2. Sign In

// API `auth_code`
// Use for:
// 1. Withdrawal


// ====================
Case 1. Without TFA

  1.1 In Settings TFA
    a.First request (force_sms = false)
      => Authy
      {  
        "message":"translation missing: en.authy.Ignored: SMS is not needed for smartphones. Pass force=true if you want to actually send it anyway",
        "ignored":true
      }

    b.Resend (force_sms = true)
      => SMS
      {  
        "message":"SMS token was sent",
        "ignored":null
      }

  1.2 In Withdrawal Panel
      => Email
      {  
        "message":"Authentication code has been sent to your email address",
        "email_sent":true
      }

// ====================
Case 2. With TFA
  
  2.1 In Settings TFA
    a.First request (force_sms = false)
      => Authy
      {  
        "message":"translation missing: en.authy.Ignored: SMS is not needed for smartphones. Pass force=true if you want to actually send it anyway",
        "ignored":true
      }

    b.Resend (force_sms = true)
      => SMS
      {  
        "message":"SMS token was sent",
        "ignored":null
      }

  2.2 In Withdrawal Panel
    => Authy
    {  
      "message":"translation missing: en.authy.Ignored: SMS is not needed for smartphones. Pass force=true if you want to actually send it anyway",
      "ignored":true
    }

  2.3 In Sign In
    a.First request (force_sms = false)
      => Authy
      {  
        "message":"translation missing: en.authy.Ignored: SMS is not needed for smartphones. Pass force=true if you want to actually send it anyway",
        "ignored":true
      }

    b.Resend (force_sms = true)
    => SMS
      {  
        "message":"SMS token was sent",
        "ignored":null
      }

