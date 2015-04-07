class BucketListItemsController < ApplicationController

  before_action :set_bucket_list_item, only:[
    :show,
    :edit,
    :update,
    :destroy
  ]

  def index
    @bucket_list_items = BucketListItem.all
    respond_to do |format|
      format.json { render json: @bucket_list_items }
      format.html
    end
  end

  def show
    respond_to do |format|
      format.json { render json: @bucket_list_item }
      format.html
    end
  end

  def create
    params[:bucket_list_item] = { image: params[:image], name: params[:name], description: params[:description], street_address: params[:street_address], city: params[:city], state: params[:state], zip_code: params[:zip_code], latitude: params[:latitude], longitude: params[:longitude]}

    @bucket_list_item = BucketListItem.new bucket_list_item_params
    @bucket_list_item.save
    respond_to do |format|
      format.json { render :json => @bucket_list_item }
    end
  end

  def update
    @users = @bucket_list_item.users
    @bucket_list_item.update bucket_list_item_params
    respond_to do |format|
      format.json do
        render json: @bucket_list_item
      end
      format.html {redirect_to bucket_list_items_path}
    end
  end

  def destroy
    @bucket_list_item.delete
    respond_to do |format|
      format.json { head :no_content }
      format.html {redirect_to bucket_list_items_path}
    end
  end

private
  def bucket_list_item_params
    params.require(:bucket_list_item).permit(
      :name,
      :description,
      :street_address,
      :city,
      :state,
      :zip_code,
      :image,
      :latitude,
      :longitude,
      :image_file_name,
      user_ids: []
      )
  end

  def set_bucket_list_item
    @bucket_list_item = BucketListItem.find params[:id]
  end
end
