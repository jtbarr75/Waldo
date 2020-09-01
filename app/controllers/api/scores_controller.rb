module Api
  class ScoresController < ApplicationController
    def index
      @scores = Score.order('time ASC');
      render json: { status: 'SUCCESS', message: 'loaded scores', data: @scores }, status: :ok;
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
end

