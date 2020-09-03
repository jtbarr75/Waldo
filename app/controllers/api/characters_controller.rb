module Api
  class CharactersController < ApplicationController
    def index
      characters = Character.order('created_at DESC');
      render json: { status: 'SUCCESS', message: 'loaded characters', data: characters }, status: :ok;
    end

    def show
      if character
        body = {
          name: character.name,
          location: character.location_in_puzzle(params[:puzzle_id])
        }
        render json: { status: 'SUCCESS', message: 'loaded character', data: body }, status: :ok;
      else 
        render json: character.errors
      end
    end

    def create
      character = Character.new(character_params)
      if character.save
        render json: { status: 'SUCCESS', message: 'saved character', data: character }, status: :ok;
      else
        render json: { status: 'ERROR', message: 'character not saved', data: character.errors }, status: :unprocessable_entity;
      end
    end

    def destroy
      character&.destroy
      render json: { status: 'SUCCESS', message: 'deleted character', data: character }, status: :ok;
    end

    def update 
      if character.update_attributes(character_params)
        render json: { status: 'SUCCESS', message: 'updated character', data: character }, status: :ok;
      else
        render json: { status: 'ERROR', message: 'character not updated', data: character.errors }, status: :unprocessable_entity;
      end
    end

    private

      def character_params
        params.permit(:name, :xpos, :ypos)
      end

      def character 
        @character ||= Character.find(params[:id])
      end
  end
end