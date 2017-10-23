class AnswerSerializer < ActiveModel::Serializer
  attributes *%i(id answer)
end
