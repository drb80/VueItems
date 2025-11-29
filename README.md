A simple Vue frontend to an API that returns what and when items. For
Rails, you'll need a ```protect\_from\_forgery with: :null\_session if
Rails.env.development?``` in your items controller to get around the CSRF
error during development.
