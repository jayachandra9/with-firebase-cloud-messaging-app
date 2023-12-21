// pages/_app.js
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/messaging";
import { firebaseCloudMessaging } from "../utils/webPush";

const MyApp = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(true);

  useEffect(() => {
    // Initialize Firebase if not already initialized
    // if (!firebase.apps.length) {
    //   firebase.initializeApp({
    //     apiKey: "AIzaSyDStIHC8a4QE6Uo8ttYTtDCTFTY5UM6LtI",
    //     projectId: "testevisitnb",
    //     messagingSenderId: "917945671984",
    //     appId: "1:917945671984:web:44da0f4e5e54470314e8f5",
    //   });
    //   setFirebaseInitialized(true);
    // }
  }, []);

  useEffect(() => {
    if (firebaseInitialized) {
      // Service Worker registration code
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(function (registration) {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch(function (error) {
            console.error("Service Worker registration failed:", error);
          });
      }

      // Check Service Worker status code
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .getRegistration()
          .then(function (registration) {
            if (registration) {
              console.log("Service Worker is registered:", registration);

              if (registration.active) {
                console.log("Service Worker is active:", registration.active);
              } else {
                console.log("Service Worker is not yet active");
              }
            } else {
              console.log("Service Worker is not registered");
            }
          })
          .catch(function (error) {
            console.error("Error checking Service Worker registration:", error);
          });
      } else {
        console.log("Service Worker is not supported in this browser");
      }

      // Initialize Firebase Cloud Messaging
      firebaseCloudMessaging.init();
    }
  }, [firebaseInitialized]);
};

export default MyApp;
