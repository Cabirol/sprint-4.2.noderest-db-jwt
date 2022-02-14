const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    die1: {
        type: Number,
        validate(value){
            if(!(value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6)){
                throw new Error('Die must be an integer between 1 and 6');
            }
        }
    },
    die2: {
        type: Number,
        validate(value){
            if(!(value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6)){
                throw new Error('Die must be an integer between 1 and 6');
            }
        }
    },
    
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
});

gameSchema.methods.generateDice = async function(){
    const game = this;
    const dateTime = [];
    game.regDate = dateTime;
    await game.save();
    return dateTime;
}

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;