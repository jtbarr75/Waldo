class PuzzlesController < ApplicationController
  def show
    @puzzle = Puzzle.includes(:characters, :locations).find(params[:id])
  end
end
