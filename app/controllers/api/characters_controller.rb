module Api
  class CharactersController < ApplicationController
    def index
      characters = Character.order('created_at DESC');
      render json: { status: 'SUCCESS', message: 'loaded characters', data: characters }, status: :ok;
    end

    def show
      character = Character.find(params[:id]);
      render json: { status: 'SUCCESS', message: 'loaded character', data: character }, status: :ok;
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
      character = Character.find(params[:id]);
      character.destroy
      render json: { status: 'SUCCESS', message: 'deleted character', data: character }, status: :ok;
    end

    def update 
      character = Character.find(params[:id]);
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
  end
end