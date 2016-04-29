class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.in_bounds(params[:bounds])
    render :index
  end

  def show
    @photo = Photo.find_by_id(params[:id])
    if @photo
      render :show
    else
      @errors = ["Can't find the requested photo"]
      render "api/shared/error", status: 404
    end
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      @errors = @photo.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def update
    @photo = Photo.find_by_id(params[:id])
    if @photo.update(photo_params)
      render :show
    else
      @errors = @photo.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    @photo = Photo.find_by_id(params[:id])
    if @photo
      @photo.destroy
      render :index
    else
      @errors = ["Can't find the requested photo"]
      render "api/shared/error", status: 404
    end
  end

  def current_user_photos
    if current_user
      @photos = current_user.photos
      render "api/photos/index.json.jbuilder"
    else
      @errors = ["Access denied, login is required"]
      render "api/shared/error", status: 403
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :lat, :lng, :url)
  end

end
