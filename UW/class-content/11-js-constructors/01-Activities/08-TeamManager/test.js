const inquirer = require('inquirer');

let count = 0;
let playersArr = [];
let subArr = [];

function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;

  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense++;
    } else {
      this.defense++;
    }
  };

  this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense--;
    } else {
      this.defense--;
    }
  };

  this.printStats = function() {
    console.log(` 
      Name: ${this.name}
      Position: ${this.position}
      Offense: ${this.offense}
      Defense: ${this.defense}`);
  };
}

function Team(players) {
  this.players = players;
  this.score = 0;

  this.getTeamOffense = function() {
    let totalOffense = 0;
    this.players.forEach(player => {
      totalOffense += player.offense;
    });
    return totalOffense;
  };

  this.getTeamDefense = function() {
    let totalDefense = 0;
    this.players.forEach(player => {
      totalDefense += player.defense;
    });
    return totalDefense;
  };

  this.increaseTeamStats = function() {
    this.players.forEach(player => {
      player.goodGame();
    });
  };

  this.decreaseTeamStats = function() {
    this.players.forEach(player => {
      player.badGame();
    });
  };

  this.printTeamStats = function() {
    this.players.forEach(player => {
      player.printStats();
    });
  };
}

const prompt = () => {
  if (count === 3) {
    const newTeam = new Team(playersArr);
    count = 0;
    playGame(newTeam);
    return;
  } else {
    inquirer
      .prompt([
        {
          name: 'name',
          message: 'Please enter a programmer name'
        },
        {
          name: 'position',
          message: 'Please enter a programmer position'
        },
        {
          name: 'offense',
          message: 'Please enter a programmer offense'
        },
        {
          name: 'defense',
          message: 'Please enter a programmer defense'
        }
      ])
      .then(function(res) {
        let newPlayer = new Player(res.name, res.position, parseInt(res.offense), parseInt(res.defense));
        newPlayer.printStats();
        if (count === 2) {
          subArr.push(newPlayer);
        } else {
          playersArr.push(newPlayer);
        }
        count++;
        prompt();
      });
  }
};

const playGame = team => {
  if (count === 5) {
    if (team.score > 0) {
      team.increaseTeamStats();
      team.printTeamStats();
    } else {
      team.decreaseTeamStats();
    }
    promptAgain();
    return;
  } else {
    let randomNum1 = Math.floor(Math.random() * 20);
    let randomNum2 = Math.floor(Math.random() * 20);

    if (randomNum1 < team.getTeamOffense()) {
      team.score++;
      promptReplace(team);
      count++;
    } else if (randomNum2 > team.totalDefense()) {
      team.score--;
      promptReplace(team);
      count++;
    }
  }
};

const promptAgain = () => {
  if (count === 3) {
    const newTeam = new Team(playersArr);
    playGame(newTeam);
    count = 0;
    return;
  } else {
    inquirer
      .prompt([
        {
          type: 'checkbox',
          message: 'Play again?',
          choices: ['yes', 'no'],
          name: 'answer',
          default: 'no'
        }
      ])
      .then(function(res) {
        if (res.answer == 'yes') {
          count = 0;
          playersArr = [];
          subArr = [];
          prompt();
        } else {
          return;
        }
      });
  }
};

const promptReplace = team => {
  inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Replace a player?',
        choices: ['yes', 'no'],
        name: 'answer',
        default: 'no'
      }
    ])
    .then(function(res) {
      if (res.answer == 'yes') {
        promptPlayerToReplace(team);
      } else {
        playGame(team);
        return;
      }
    });
};

const promptPlayerToReplace = team => {
  inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Replace which player?',
        choices: ['1', '2'],
        name: 'answer',
        default: '2'
      }
    ])
    .then(function(res) {
      if (res.answer == '1') {
        let removed = playersArr.shift();
        playersArr.push(subArr[0]);
        subArr.push(removed);
        playGame(team);
      } else if (res.answer == '2') {
        let removed = playersArr.pop();
        playersArr.push(subArr[0]);
        subArr.push(removed);
        playGame(team);
      } else {
        playGame(team);
        return;
      }
    });
};

prompt();
