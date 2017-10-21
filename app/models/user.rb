class User < ApplicationRecord
  include Authenticable
  include TokenProcessor

  has_many :access_tokens

  attr_accessor :current_token
  
  has_many :web_surveys
end
