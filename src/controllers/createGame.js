import { addResponse } from '../helpers/addResponse';
import { usersDb, gamesDb, webSocketsDb } from '../store/store.js';
import { addNewObj } from '../helpers/addNewObj';

export function create_game(parsedData, userId) {

    try {

        console.log('\n\n +  create_game userId', userId);
        let gameId = addNewObj('gamesDb');
        gamesDb.set(gameId, {
            idGame: gameId,
            idPlayer: userId,
        });
        let answer = addResponse('create_game', {
            idGame: gameId,
            idPlayer: userId,
        });

        webSocketsDb[userId].send(answer);

    }
    catch (error) {
        console.error('Error: JSON.parse  in create_game()', error);
    }
}