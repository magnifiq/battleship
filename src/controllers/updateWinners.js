import { addResponse } from '../helpers/addResponse';
import { usersDb, webSocketsDb } from '../store/store.js';

export function updateWinners() {

    try {
        let users = Array.from(usersDb.values());

        let answer = addResponse('update_winners', []);

        Object.keys(webSocketsDb).forEach(id => {
            webSocketsDb[id].send(answer);
        });
    }
    catch (error) {
        console.error('Error: JSON.parse  in updateWinners()', error);
    }
}