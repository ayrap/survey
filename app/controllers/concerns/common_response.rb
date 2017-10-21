module CommonResponse
  extend ActiveSupport::Concern

  def render_obj obj = nil
    render json: @obj
  end

  def obj_errors obj=nil
    obj ||= @obj
    render json: { message: 'Validation failed', errors: obj.errors.full_messages }, status: 422
  end

  def render_success
    render json: {success: true}
  end
end
