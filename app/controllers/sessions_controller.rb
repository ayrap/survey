class SessionsController < ApiController
  skip_before_action :authenticate_request, only: :create

  def create
    @user = User.find_by_credentials(params[:user])
    if @user.present? && @user.set_access_token
      render json: Sessions::Builder.new(@user).show
    else
      fail InvalidCredentialsError
    end
  end

  def destroy
    if current_user.destroy_token
      render_success
    else
      fail InvalidRequestError
    end
  end
end