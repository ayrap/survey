class Question < ApplicationRecord
  belongs_to :web_survey, inverse_of: :questions
  has_many :answers, inverse_of: :question, dependent: :destroy

end
