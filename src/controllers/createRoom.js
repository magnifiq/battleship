import { usersDb, roomsDb, webSocketsDb } from '../store/store.js';
import { addNewObj } from '../helpers/addNewObj';
import { updateRoom } from '../controllers/updateRoom.js';

export function createRoom(parsedData, userId) {

    try {
        console.log('create_room usersDb--', usersDb);
        console.log('create_room socketId', userId);
        if (usersDb.has(userId) === false) {
            console.error('Error in create_room() usersDb.has(userId) returned false', error);
            return;
        }

        let roomId = addNewObj('roomsDb');

        roomsDb.set(roomId, {
            roomId: roomId,
            roomUsers: [{
                name: usersDb.get(userId).name,
                index: userId
            }],
        });

        updateRoom();

    }
    catch (error) {
        console.error('Error in createRoom()', error);
    }
}