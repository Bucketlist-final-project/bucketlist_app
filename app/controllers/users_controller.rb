class UsersController < ApplicationController
  before_action :authenticate_user!
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

  def update
    if params[:update] == true
      params[:bucket_list_items].each do |item|
        bli = BucketListItem.find(item[:id])
        if @user.bucket_list_items.exclude?(bli)
          @user.bucket_list_items << bli
        end
      end
    else
      @user = User.find params[:id]
      @user.bucket_list_items.delete(BucketListItem.find(params[:bucket_list_item_id]))
    end
      @user.update_attributes user_params
      respond_to do |format|
        format.json {render json: @user }
        format.html
      end
  end

  def destroy
    @bucket_list_item = @user.bucket_list_items.find params[:bucket_list_item_id]
    @bucket_list_item.delete
    respond_to do |format|
      format.json {render head :no_content }
      format.html
    end
  end

private

  def user_params
    params.require(:user).permit(
      :user_id,
      :bucket_list_item_id,
      bucket_list_item_ids: []
      )
  end

  def set_user
    @user = User.find params[:id]
  end

end
