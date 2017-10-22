class QuestionSerializer < ActiveModel::Serializer
  attributes *%i(id title is_custom)
end
