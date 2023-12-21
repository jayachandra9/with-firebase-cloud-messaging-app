import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem("fcm_token");
  },

  init: async function () {
    firebase.initializeApp({
      apiKey: "AIzaSyDStIHC8a4QE6Uo8ttYTtDCTFTY5UM6LtI",
      projectId: "testevisitnb",
      messagingSenderId: "917945671984",
      appId: "1:917945671984:web:44da0f4e5e54470314e8f5",
    });

    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false;
      }

      const messaging = firebase.messaging();
      await Notification.requestPermission();
      const token = await messaging.getToken();

      localforage.setItem("fcm_token", token);
      console.log("fcm_token", token);
    } catch (error) {
      console.error(error);
    }
  },
};

export { firebaseCloudMessaging };
