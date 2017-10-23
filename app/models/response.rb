class Response < ApplicationRecord
  belongs_to :web_survey
  belongs_to :respondent
  has_many :answers, dependent: :destroy

  validates :answers, presence: true

  accepts_nested_attributes_for :answers
  accepts_nested_attributes_for :respondent
  
end
