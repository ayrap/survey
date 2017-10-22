class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.belongs_to :web_survey
      t.string :title
      t.boolean :is_custom, default: false

      t.timestamps
    end
  end
end
