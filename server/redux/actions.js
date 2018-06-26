let Player = require('../classes/player.js');

const ATTACK = 'ATTACK';
const ATTACK_ALL = 'ATTACK_ALL';
const CURE = 'CURE';
const SHIELD = 'SHIELD';
const HP_PLUS = 'HP_PLUS';
const HP_MINUS = 'HP_MINUS';
const AP_PLUS = 'AP_PLUS';
const AP_MINUS = 'AP_MINUS';

const DIVINE = 'DIVINE';
const WEAVE = 'WEAVE';
const OBSCURE = 'OBSCURE';
const SCRY = 'SCRY';
const REFRESH = 'REFRESH';
const LEARN = 'LEARN';

const START_TURN = 'START_TURN';
const END_TURN = 'END_TURN';

const ADD_PLAYER = 'ADD_PLAYER';
const REMOVE_PLAYER = 'REMOVE_PLAYER';
const GAME_SETUP = 'GAME_SETUP';
const GAME_START = 'GAME_START';
const GAME_END = 'GAME_END';
const TURN_START = 'TURN_START';
const TURN_END = 'TURN_END';
const DIVINE_STEP_START = 'DIVINE_STEP_START';
const DIVINE_STEP_END = 'DIVINE_STEP_END';
const ACTION_STEP_START = 'ACTION_STEP_START';
const ACTION_STEP_END = 'ACTION_STEP_END';

function attack(actor, target, value, chain = false){
    return {
        type: ATTACK,
        actor: actor, 
        target: target,
        value: value,
        chain: chain,
        message: actor.name+' attacked '+target.name+' for '+value+' damage'
    }
}

function attackAll(actor, value){
    return {
        type: ATTACK_ALL,
        actor: actor,
        value: value,
        message: actor.name+' attacked everyone else for '+value+' damage'
    }
}

function cure(actor, value){
    return {
        type: CURE,
        actor: actor,
        value: value,
        message: actor.name+' healed '+value+' points'
    }
}

function shield(actor, value){
    return {
        type: SHIELD,
        actor: actor,
        value: value,
        message: actor.name+' gained '+value+' Shields'
    }
};

function hpPlus(actor, value){
    return {
        type: HP_PLUS,
        actor: actor,
        value: value,
        message: actor.name+' gained '+value+' Regen tokens'
    }
};

function hpMinus(actor, target, value){
    return {
        type: HP_MINUS,
        actor: actor,
        target: target,
        message: actor.name+' passed '+target.name+' '+value+' Burn tokens'
    }
};

function apPlus(actor, value){
    return {
        type: AP_PLUS,
        actor: actor,
        value: value,
        message: actor.name+' gained '+value+' Haste tokens'
    }
};

function apMinus(actor, target, value){
    return {
        type: AP_MINUS,
        actor: actor,
        target: target,
        value: value,
        message: actor.name+' passed '+target.name+' '+value+' Slow tokens'
    }
};

function divine(actor, value, yx){
    return {
        type: DIVINE,
        actor: actor,
        value: value,
        yx: yx,
        message: actor.name+' looked at '+value+' cards'
    }
};

function weave(actor, yx1, yx2){
    return {
        type: WEAVE,
        actor: actor,
        yx1: yx1,
        yx2: yx2,
        message: actor.name+' wove cards'
    }
};

function obscure(actor, value, yx){
    return {
        type: OBSCURE,
        actor: actor,
        value: value,
        yx: yx,
        message: actor.name+' obscured '+value+' cards'
    }
};

function scry(actor, value, yx){
    return {
        type: SCRY,
        actor: actor,
        value: value,
        yx: yx,
        message: actor.name+' scried '+value+' cards'
    }
};

function refresh(actor, yx){
    return {
        type: REFRESH,
        actor: actor,
        yx: yx,
        message: actor.name+' refreshed a card'
    }
};

function learn(actor, draw, keep){
    return {
        type: LEARN,
        actor: actor,
        draw: draw,
        keep: keep,
        message: actor.name+' learned '+keep+' new spells'
    }
};

function addPlayer(socket, name){
    return {
        type: ADD_PLAYER,
        socket: socket,
        name: name,
        message: 'Created player '+name
    }
}

function removePlayer(player){
    return {
        type: REMOVE_PLAYER,
        player: player,
        message: 'Removed player '+player.name
    }
}

function gameSetup(){
    return {
        type: GAME_SETUP,
        message: 'Set up gameboard'
    }
};

function gameStart(){};

function gameEnd(){};

function turnStart(){};

function turnEnd(){};

function divineStepStart(){};

function divineStepEnd(){};

function actionStepEnd(){};

function actionStepEnd(){};

module.exports = {
    // card effects
    ATTACK, ATTACK_ALL, CURE, SHIELD, HP_PLUS, HP_MINUS, AP_PLUS, AP_MINUS,
    // card manipulators
    DIVINE, WEAVE, SCRY, OBSCURE, REFRESH, LEARN,
    // meta events
    ADD_PLAYER, REMOVE_PLAYER, GAME_SETUP, GAME_START, GAME_END, TURN_START, TURN_END, DIVINE_STEP_START, DIVINE_STEP_END, ACTION_STEP_START, ACTION_STEP_END,
    // creator functions for effects
    attack, attackAll, cure, shield, hpPlus, hpMinus, apPlus, apMinus, 
    // creator functions for manipulators
    divine, weave, scry, obscure, refresh, learn, 
    // creator functions for meta events
    addPlayer, removePlayer, gameSetup, gameStart, gameEnd, turnStart, turnEnd, divineStepStart, divineStepEnd, actionStepStart, actionStepEnd,
}