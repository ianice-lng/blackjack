from blackjack.models import Game, Player


def start_game(name, player_names):
        game = Game.objects.create(name=name, turn=0, ended=False)

        for player_name in player_names:
            Player.objects.create(name=player_name, game=game)

        return game

def get_game(id_game=None):
    if id_game:
        return Game.objects.filter(id= id_game)
    else: 
        return "Le nom de la game est None"
    