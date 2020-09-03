class PuzzlesController < ApplicationController
  def index 
    @puzzles = Puzzle.all
  end

  def show
    @puzzle = Puzzle.includes(:characters, :locations).find(params[:id])
  end
end
