class WebSurveysController < ApiController 
  def index
    @web_surveys = WebSurvey.all
    render json: @web_surveys
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

  def obj_params
    params.fetch(:web_survey).permit(:title, questions_attributes: [:id, :web_survey_id, :title, :is_default])
  end
end
