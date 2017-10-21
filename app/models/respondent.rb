class Respondent < ApplicationRecord
  has_one :response, dependent: :destroy
end
