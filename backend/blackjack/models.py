from django.db import models
from django.utils import timezone
import random

class Game(models.Model):
    name = models.CharField(max_length=255)
    turn = models.IntegerField(default=0)
    ended = models.BooleanField(default=False)

    
    def winner(self):
        result = []
        playerSorted = sorted(self.players.filter(score__lte=21), key=lambda player: player.score, reverse=True)

        for player in playerSorted:
            if len(result) == 0 or player.score == result[0].score:
                result.append(player)
            else:
                break
        return result

        # get winners
        # player == 21 if exists
        # players < 21 if no players  at 21
        # Can have multiple winners

        

    def current_player(self):

        # filtered_players = players.filtered
        # by stand is False and player < 21
        # get current in filtered_players
        active_players = self.players.filter(stand=False, score__lt=21).order_by('id')
        if not active_players:
            return None
        
        # Si tous les joueurs sont en stand, la partie est finie
        if not active_players:
            self.ended = True
            self.save(update_fields=["ended"])
            return None

        # Tourne entre les joueurs encore actifs
        index = self.turn % len(active_players)

        return active_players[index]
            
            


class Player(models.Model):
    name = models.CharField(max_length=50)
    score = models.IntegerField(default=0)
    game = models.ForeignKey(
        "Game",
        on_delete=models.CASCADE,
        related_name="players"
    )
    stand = models.BooleanField(default=False)

    def add_score(self, number_dices):
        points = sum(random.randint(1, 6) for _ in range(number_dices)) 

        self.score += points

        self.save()
        return self.score


