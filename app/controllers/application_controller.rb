class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  def current_user
      @current_user ||= User.find(session[:shop_user_id]) if session[:shop_user_id]
    end
    helper_method :current_user

    def authorize
      redirect_to '/login' unless current_user
    end

  end

  protect_from_forgery with: :exception
end
