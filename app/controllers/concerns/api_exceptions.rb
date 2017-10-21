module ApiExceptions
  extend ActiveSupport::Concern
    
  included do
    class InvalidCredentialsError < StandardError; end
    rescue_from InvalidCredentialsError do
      render json: { error: "Your email and password don't match" }, status: :unauthorized
    end

    # if token is an invalid (either old token or token does not exist)
    class ExpiredSessionError < StandardError; end
    rescue_from ExpiredSessionError do
      render json: { error: 'Your session has expired' }, status: :unauthorized 
    end

    # if auth token is missing
    class UnauthorizedAccessError < StandardError; end
    rescue_from UnauthorizedAccessError do
      render json: { error: 'Access Denied' }, status: 403
    end

    # if a process is halted
    class ServiceError < StandardError; end
    rescue_from ServiceError do
      render json: {errors: @service.errors}, status: 422
    end

    # invalid request
    class InvalidRequestError < StandardError; end
    rescue_from InvalidRequestError do
      render json: {error: "Request is invalid"}, status: 422
    end
  end
end
