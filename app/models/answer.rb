class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :response

  validates_presence_of :answer, message: "can't be blank."

end
