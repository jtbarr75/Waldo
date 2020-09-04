class PuzzlesController < ApplicationController
  def index 
    @puzzles = Puzzle.all
  end

  def show
    @puzzle = Puzzle.includes(:characters, :locations).find(params[:id])
    respond_to do |format| 
      format.html
      format.json do
        body = {
          id: @puzzle.id,
          name: @puzzle.name,
          characters: @puzzle.characters,
          numCharacters: @puzzle.num_characters
        }
        render json: body
      end
    end
  end
end
