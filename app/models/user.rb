class User < ApplicationRecord
  include Authenticable
  include TokenProcessor

  has_many :access_tokens

  attr_accessor :current_token
  
  has_many :web_surveys

  def self.find_by_credentials(credentials)
    user = self.find_by(email: credentials.fetch(:email, ''))
    user if user.present? && user.valid_password?(credentials.fetch(:password, ''))
  end
end
