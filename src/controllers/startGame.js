import { usersDb, webSocketsDb } from '../store/store.js';

export async function startGame(userData) {

    try {
        console.log('start a game', userData);
    }
    catch (error) {
        console.error('Error: JSON.parse  in startGame()', error);
    }
}