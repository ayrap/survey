class WebSurveySerializer < ActiveModel::Serializer
  attributes *%i(id title questions slug)

  has_many :questions

  attribute :responses do
    object.responses&.map do |response|
      {
        respondent: response&.respondent&.name,
        answers: answers(response)
      }
    end
  end

  def answers response
    response.answers&.map do |answer|
      {
        answer: answer&.answer,
        question: answer&.question&.title,
        id: answer&.id
      }
    end
  end
end
