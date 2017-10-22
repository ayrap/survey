class WebSurveySerializer < ActiveModel::Serializer
  attributes *%i(id title questions slug)

  has_many :questions
end
