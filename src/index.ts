/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

WA.chat.sendChatMessage('Welcome to Computer System Servicing Class!', 'Mr.Abala');

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();


WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', closePopUp)

WA.room.onEnterZone('clock1', () => {
    currentPopup =  WA.ui.openPopup("clockPopup1","It's " + time,[]);
})

WA.room.onLeaveZone('clock1', closePopUp)


WA.room.onEnterZone('nook', () => {
    currentPopup =  WA.ui.openPopup("nookPopup","Welcome to Meeting Room! ",[]);
})

WA.room.onLeaveZone('nook', closePopUp)

WA.room.onEnterZone('entrance', () => {
    currentPopup =  WA.ui.openPopup("entrancePopup","Welcome to Computer System Servicing Laboratory! ",[]);
})

WA.room.onLeaveZone('entrance', closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
   }
}