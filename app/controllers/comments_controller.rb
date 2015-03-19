class CommentsController < ApplicationController

 # before_action :set_bucket_list_item, only:[
 #   :index,
 #   :show,
 #   :new,
 #   :create,
 #   :edit,
 #   :update,
 #   :destroy
 # ]

 before_action :set_comment, only:[
   :show,
   :edit,
   :update,
   :destroy
 ]

 def index
   @comments = @bucket_list_item.comments
   respond_to do |format|
     format.json {render json: @comments }
     format.html
   end
 end

 def show
   respond_to do |format|
     format.json {render json: @comment }
     format.html
   end
 end

 def new
   @comment = Comment.new
   respond_to do |format|
     format.json {render json: @comment }
     format.html
   end
 end

 def create
  @comment = Comment.new comment_params
  @comment.bucket_list_item_id = params[:bucket_list_item_id]
  @comment.user = current_user
  @comment.save
  respond_to do |format|
    format.json do
      @comment.user = current_user
      render json: @comment
     end
     format.html { redirect_to bucket_list_item_path }
   end
 end

 def edit
   respond_to do |format|
     format.json {render json: @comment }
     format.html
   end
 end

 def update
  @comment.update_attributes comment_params
  @comment.bucket_list_item_id = params[:bucket_list_item_id]
  @comment.user = current_user   
   respond_to do |format|
     format.json do
       @comment.user = current_user
       render json: @comment
    end
     format.html {redirect_to bucket_list_item_path}
   end
 end

 def destroy
   @comment.destroy
   respond_to do |format|
     format.json { head :no_content }
     format.html {redirect_to interests_path}
   end
 end

private

 def comment_params
   params.require(:comment).permit(
     :content,
     :user_id,
     :bucket_list_id
     )
 end

 def set_comment
   @comment = Comment.find params[:id]
 end


end

# def show
#  @riff = Riff.find params[:id]
#  riffjson = @riff.to_json
#  riffjson.merge(s3_url: @riff.s3_url)
#  respond_to do |format|
#    format.json { render riffjson }
#  end
# end
