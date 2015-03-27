class ItemCompletesController < ApplicationController
  def index
    @user = User.find params[:user_id]
    @item_completes = @user.item_completes.all
    respond_to do |format|
     format.json {render :json => @item_completes }
     format.html
   end
  end

  def show

  end

  def new
    @item_complete = ItemComplete.new
    respond_to do |format|
     format.json {render json: @item_complete }
     format.html
   end
  end

  def create
    if ItemComplete.exists?(:bucket_list_item_id => params[:bucket_list_item_id]) && ItemComplete.exists?(:user_id => params[:user_id])
      respond_to do |format|
      format.json {render json: @item_complete }
      format.html
      end
    else
      @item_complete = ItemComplete.new item_complete_params
      @item_complete.bucket_list_item_id = params[:bucket_list_item_id]
      @item_complete.user_id = params[:user_id]
      @item_complete.save
      respond_to do |format|
       format.json do
         @item_complete.user = current_user
         render json: @item_complete
       end
      end
    end
  end


  def update

  end

  def destroy

  end

private
  def item_complete_params
    params.require(:item_complete).permit(
      :completed,
      :bucket_list_item_id,
      :user_id
      )
  end
end
