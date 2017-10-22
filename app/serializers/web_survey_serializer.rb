class WebSurveySerializer < ActiveModel::Serializer
  attributes *%i(id title questions)

  has_many :questions
end
