import { usersDb, roomsDb, gamesDb, webSocketsDb } from '../store/store.js';

let enumCouner = {
    usersDb: 0,
    roomsDb: 0,
    gamesDb: 0,
    webSocketsDb: 0,
};

export function addNewObj(entityType) {
    try {
        return ++enumCouner[entityType.toString()];
    }
    catch (error) {
        console.error('Error in generate_new_entity()', error);
    }
}