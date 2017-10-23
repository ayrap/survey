class ResponsesController < ApiController
  before_action :get_web_survey, only: [:new, :create]

  def create
    @response = @web_survey.responses.build obj_params
    
    if @response.save
      render_success
    else
      obj_errors @response
    end
  end

  private

  def get_web_survey
    @web_survey = WebSurvey.friendly.find(obj_params[:web_survey_id])
  end

  def obj_params
    params.fetch(:response).permit(:web_survey_id, answers_attributes: [:answer, :question_id], respondent_attributes: [:name])
  end
end