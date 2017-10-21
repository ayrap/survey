# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171021084438) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.integer  "response_id"
    t.integer  "question_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["question_id"], name: "index_answers_on_question_id", using: :btree
    t.index ["response_id"], name: "index_answers_on_response_id", using: :btree
  end

  create_table "questions", force: :cascade do |t|
    t.integer  "web_surveys_id"
    t.string   "title"
    t.boolean  "is_default"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["web_surveys_id"], name: "index_questions_on_web_surveys_id", using: :btree
  end

  create_table "respondents", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "responses", force: :cascade do |t|
    t.integer  "respondents_id"
    t.integer  "web_surveys_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["respondents_id"], name: "index_responses_on_respondents_id", using: :btree
    t.index ["web_surveys_id"], name: "index_responses_on_web_surveys_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "encrypted_password"
    t.boolean  "is_admin",           default: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  create_table "web_surveys", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title"
    t.string   "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_web_surveys_on_user_id", using: :btree
  end

end
