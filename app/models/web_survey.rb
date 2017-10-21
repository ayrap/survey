class WebSurvey < ApplicationRecord
  has_many :questions, inverse_of: :web_survey, dependent: :destroy
  has_many :responses, inverse_of: :web_survey, dependent: :destroy
end
