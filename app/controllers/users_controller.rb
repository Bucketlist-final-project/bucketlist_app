class UsersController < ApplicationController
  before_action :set_user, only:[
    :show,
    :edit,
    :update,
    :destroy
  ]

  def index
    @users = User.all
    respond_to do |format|
      format.json {render json: @users }
      format.html
    end
  end

  def show
    respond_to do |format|
      format.json {render :json => @user }
      format.html
    end
  end

  def new
    @user = User.new
    respond_to do |format|
      format.json {render json: @user }
      format.html
    end
  end

  def create
    @user = User.new user_params
    @user.save
    respond_to do |format|
      format.json {render json: @user }
      format.html
    end
  end

  def edit
    respond_to do |format|
      format.json {render json: @user }
      format.html
    end
  end

  def update
    @user.update_attributes user_params
    respond_to do |format|
      format.json {render json: @user }
      format.html
    end
  end

  def destroy
    @user.destroy
    respond_to do |format|
      format.json {render head :no_content }
      format.html
    end
  end

private
  
  def set_user
    @user = User.find params[:id]
  end

end
