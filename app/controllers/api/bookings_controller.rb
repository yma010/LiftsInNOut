class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.all
  end

  def create
    @booking = Booking.new(bookings_params)

    @booking.user_id = current_user.id

    if @booking.save
      render json: @booking
    else
      render json: @booking.errors.full_messages, status: 422
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render json: ['Booking removed']
  end

  private

  def bookings_params
    params.require(:booking).permit(:user_id, :listing_id, :guests, :start_date, :end_date)
  end


end
