import { roomsDb, usersDb, webSocketsDb } from '../store/store.js';
import { addResponse } from '../helpers/addResponse';

export function updateRoom() {
    
    try {
        let roomsWithOnePlayer = Array.from(roomsDb.values());
        console.log('roomsWithOnePlayer', roomsWithOnePlayer);
        let preparedResponse = addResponse('update_room', roomsWithOnePlayer);

        Object.keys(webSocketsDb).forEach(id => {
            webSocketsDb[id].send(preparedResponse);
        });
    }
    catch (error) {
        console.error('Error: JSON.parse  in updateRoom()', error);
    }
}