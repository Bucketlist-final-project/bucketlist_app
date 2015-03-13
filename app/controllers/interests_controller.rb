class InterestsController < ApplicationController
  before_action :set_interest, only: [
    :show,
    :edit,
    :update,
    :destroy
  ]

  def index
    @interests = Interest.all
    @users = User.all
    respond_to do |format|
      format.json {render json: @interests }
      format.html
    end
  end

  def show
    @users = @interest.users
    respond_to do |format|
      format.json {render json: @interest }
      format.html
    end
  end

  def new
    @interest = Interest.new
    @users = User.all
    respond_to do |format|
      format.json {render json: @interest }
      format.html
    end
  end

  def create
    @interest = Interest.new interest_params
    @interest.save
    respond_to do |format|
      format.json { render json: @interest }
      format.html {redirect_to interests_path}
    end
  end

  def edit
    @users = User.all
    respond_to do |format|
      format.json {render json: @interest }
      format.html
    end
  end

  def update
    @interest.update_attributes interest_params
    respond_to do |format|
      format.json { render json: @interest }
      format.html {redirect_to interests_path}
    end
  end

  def destroy
    @interest.destroy
    respond_to do |format|
      format.json { head :no_content }
      format.html {redirect_to interests_path}
    end
  end

private
  def interest_params
    params.require(:interest).permit(
      :name,
      :image,
      user_ids: []
      )
  end

  def set_interest
    @interest = Interest.find params[:id]
  end

end
