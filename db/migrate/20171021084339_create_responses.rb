class CreateResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :responses do |t|
      t.belongs_to :respondents
      t.belongs_to :web_surveys

      t.timestamps
    end
  end
end
