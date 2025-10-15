from django.db import models
from django.utils import timezone


class Game(models.Model):
    name = models.CharField(max_length=255)
    turn = models.IntegerField(default=0)
    ended = models.BooleanField(default=False)


    def winner(self):
        result = []
        playerSorted = sorted(self.players.all(), key=lambda player: player.score, reverse=True)

        for player in playerSorted:
            if len(result) == 0 or player.score == result[0].score:
                result.append(player)
            else:
                break

        # get winners
        # player == 21 if exists
        # players < 21 if no players  at 21
        # Can have multiple winners

        result = sorted(result, key=lambda x: x.score, reverse=True)
        return result 
    
    def current_player(self):

        # filtered_players = players.filtered
        # by stand is False and player < 21
        # get current in filtered_players
        return Player.objects.filter(stand=False, score__lt=21)

    def __str__(self):
        return f"""{self.name}"""

class Player(models.Model):
    name = models.CharField(max_length=50)
    score = models.IntegerField(default=0)
    game = models.ForeignKey(
        "Game",
        on_delete=models.CASCADE,
        related_name="players"
    )
    stand = models.BooleanField(default=False)

    def __str__(self):
        return f"""{self.name} - {self.score}"""