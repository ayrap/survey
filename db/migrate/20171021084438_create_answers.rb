class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.belongs_to :response
      t.belongs_to :question
      t.timestamps
    end
  end
end
