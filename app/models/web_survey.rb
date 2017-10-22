class WebSurvey < ApplicationRecord
  extend FriendlyId
  friendly_id :uuid, use: :slugged

  has_many :questions, inverse_of: :web_survey, dependent: :destroy
  has_many :responses, inverse_of: :web_survey, dependent: :destroy

  accepts_nested_attributes_for :questions

  def uuid
    slug || SecureRandom.uuid
  end
end
