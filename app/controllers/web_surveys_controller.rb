class WebSurveysController < ApiController 
  before_action :get_web_survey, only: :show

  def index
    @web_surveys = WebSurvey.all
    render json: @web_surveys
  end

  def show
    if @web_survey.present?
      render json: @web_survey
    else
      render json: {error: "Survey not found."}  
    end
  end

  def create
    @web_survey = current_user.web_surveys.new(obj_params)

    if @web_survey.save
      render json: WebSurveySerializer.new(@web_survey).as_json
    else
      obj_errors @web_survey
    end
  end

  private

  def get_web_survey
    @web_survey = WebSurvey.friendly.find(params[:id])
  end

  def obj_params
    params.fetch(:web_survey).permit(:title, questions_attributes: [:id, :web_survey_id, :title, :is_custom])
  end
end
