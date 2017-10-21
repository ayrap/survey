module Sessions
  class Builder

    def initialize current_user
      @current_user = current_user
      @current_user.set_access_token
    end

    def show
      {
        id: @current_user.id,
        email: @current_user.email,
        access_token: @current_user.current_token
      }
    end
    
  end
end
