import firebase from 'firebase';

// <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCcJp__deygDuCI6SgFtN51Y2sHoKcowqE",
//     authDomain: "push-notifications-59c1d.firebaseapp.com",
//     databaseURL: "https://push-notifications-59c1d.firebaseio.com",
//     projectId: "push-notifications-59c1d",
//     storageBucket: "push-notifications-59c1d.appspot.com",
//     messagingSenderId: "359397596234"
//   };
//   firebase.initializeApp(config);
// </script>

export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: "359397596234"
    });
    
    // navigator.serviceWorker
    //     .register('/serviceWorker.js')
    //     .then((registration) => {
    //         firebase.messaging().useServiceWorker(registration);
    // });
}

// Requesting permission to send notifications
export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
  
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('user token: ', token);
  
      return token;
    } catch (error) {
      console.error(error);
    }
  }
