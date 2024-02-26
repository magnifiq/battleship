import { addResponse } from '../helpers/addResponse';
import { usersDb, webSocketsDb } from '../store/store.js';
import { updateRoom } from '../controllers/updateRoom.js';
import { updateWinners } from '../controllers/updateWinners.js';
import { addNewObj } from '../helpers/addNewObj';


export function registration(userData, userId) {

    try {
        console.log('reg userData', userData, 'userId', userId);
        let { data } = userData;
        usersDb.set(userId, { id: userId, name: data.name, password: data.password });
        let answer = addResponse('reg', {
            name: data.name,
            index: userId,
            error: false,
            errorText: '',
        });


        webSocketsDb[userId].send(answer);
        updateRoom();
        updateWinners();

    }
    catch (error) {
        console.error('error in reg', error);
    }
}