class CreateWebSurveys < ActiveRecord::Migration[5.0]
  def change
    create_table :web_surveys do |t|
      t.belongs_to :user
      t.string :title
      t.string :slug

      t.timestamps
    end
  end
end
