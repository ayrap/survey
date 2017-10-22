class CreateResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :responses do |t|
      t.belongs_to :respondent
      t.belongs_to :web_survey

      t.timestamps
    end
  end
end
