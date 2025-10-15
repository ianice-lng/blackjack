from ninja import NinjaAPI, Schema
from blackjack import services
from pydantic import computed_field
api = NinjaAPI()


class StartGameSchema(Schema): 
    name: str = "partie1"
    players: list[str] = ["Joueur 1", "Joueur 2"]

class PlayerSchema(Schema):
    name: str
    score: int
    stand: bool

    class Config:
        from_attributes = True


class GameSchema(Schema):
    id: int
    name: str
    turn: int
    ended: bool
    players: list[PlayerSchema]
    winners: list[PlayerSchema] | None = None
    current_players: list[PlayerSchema] | None = None
    class Config:
        from_attributes = True

class PlaySchema(Schema):
    dices: int


@api.post("/start", response=GameSchema)
def start(request, data: StartGameSchema):
    game = services.start_game(data.name, data.players)
    return game


@api.post("/play")
def play(request):
    pass

@api.get("/{id}", response=GameSchema)
def get_game(request, id:int):
    game = services.get_game(id)

    winners = [PlayerSchema.model_validate(p) for p in game.winner()]
    current_player = game.current_player()  # un seul joueur ou None
    current = (
        [PlayerSchema.model_validate(current_player)]
        if current_player
        else []
    )

    game_data = GameSchema.model_validate(game).model_dump()
    game_data["winners"] = winners
    game_data["current_players"] = current
    return game_data

@api.post("/play/{id}", response=GameSchema)
def play(request, id:int, data: PlaySchema):
    game = services.get_game(id)
    current_player = game.current_player()
    print("test" + str(current_player.name))
    current_player.add_score(data.dices)
    current = (
        [PlayerSchema.model_validate(current_player)]
        if current_player
        else []
    )
    game.turn += 1
    game.save()
    winners = [PlayerSchema.model_validate(p) for p in game.winner()]
    game_data = GameSchema.model_validate(game).model_dump()
    game_data["winners"] = winners
    game_data["current_players"] = current
    return game_data
