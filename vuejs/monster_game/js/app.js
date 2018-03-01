new Vue({
  el: '#monster_game',
  data:{
    gameRunning: false,
    yourLife: 100,
    monsterLife: 100,
    actions: [
      {
        id: 1,
        label: 'Basic attacking',
        dmg: 5,
      },
      {
        id: 2,
        label: 'Special attacking',
        dmg: 12
      },
      {
        id: 3,
        label: 'Healing',
        dmg: 9,
      },
      {
        id: 4,
        label: 'Desistiu'
      },
      {
        id: 5,
        label: 'Monster attacking',
        dmg: 7
      }
    ],
    log: []
  },
  methods: {
    startGame: function() {
      this.resetGame();
    },
    callAction: function(idAction) {
      var monsterHealthBar = document.getElementById('monsterBar');

      if(idAction !== 3 && idAction !== 4) {
        var action = this.actions.filter(function(e) {
          return e.id == idAction
        })

        this.monsterLife -= action[0].dmg;
      } else if(idAction == 3) {

      } else {

      }

      // MONSTER ATTACK 
      var getMonster = this.actions.filter(function(e) {
          return e.id == 5
      })

      this.yourLife -= getMonster[0].dmg;
    },
    resetGame: function() {
      this.gameRunning = true;
      this.log = [];
      this.yourLife = 100;
      this.monsterLife = 100;
    },
    endGame: function(message) {
      alert(message);
      this.gameRunning = false;
    }
  },
  watch: {
    yourLife: function(e) {
      if(e <= 0 && e < this.monsterLife) {
        this.endGame('O monstro ganhou.')
      }
    },
    monsterLife: function(e) {
      if(e <= 0 && e < this.yourLife) {
        this.endGame('Você ganhou.')
      }
    }
  }
});
