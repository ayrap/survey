class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.belongs_to :web_surveys
      t.string :title
      t.boolean :is_default

      t.timestamps
    end
  end
end
