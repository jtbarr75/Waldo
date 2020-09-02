
class ScoresController < ApplicationController
  def index
    @scores = Score.order('time ASC');
  end

  def create
    @score = Score.new(score_params)
    if @score.save
      render json: { status: 'SUCCESS', message: 'saved score', data: @score }, status: :ok;
    else
      render json: { status: 'ERROR', message: 'score not saved', data: @score.errors }, status: :unprocessable_entity;
    end
  end

  private 

  def score_params
    params.permit(:name, :time)
  end
end

