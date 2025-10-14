from django.db import models
from django.utils import timezone


class Game(models.Model):
    name = models.CharField(max_length=255)
    turn = models.IntegerField(default=0)
    ended = models.BooleanField(default=False)
    players = models.ManyToManyField('Player', related_name='games')
    
    def __init__(self, name, players):
        self.name = name
        self.players = players


    # @classmethod

    # ANCIEN CODE
    # def start_game(cls, name, players):
    #     game = cls.objects.create(name=name, turn=0, ended=False, players=players)
    #     return game
    

class Player(models.Model):
    name = models.CharField(max_length=50)
    score = models.IntegerField(default=0)
    game = models.ForeignKey(
        "Game",
        on_delete=models.CASCADE
    )
    stand = models.BooleanField(default=False)

    def __init__(self, name, game):
        self.name = name
        self.game = game
