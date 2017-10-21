class UsersController < ApiController
  skip_before_action :authenticate_request, only: [:create]

  def create
    user = User.create(obj_params)
    if user.valid?
      render json: Sessions::Builder.new(user).show
    else
      obj_errors user
    end
  end

  private

  def obj_params
    params.require(:user).permit(*%i(
      email
      password
    ))
  end
end
  