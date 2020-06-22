import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCwTompJHTRx59wiNikmKS_Cq7zFOsNYCo',
  authDomain: 'e-commerce-db-d1e92.firebaseapp.com',
  databaseURL: 'https://e-commerce-db-d1e92.firebaseio.com',
  projectId: 'e-commerce-db-d1e92',
  storageBucket: 'e-commerce-db-d1e92.appspot.com',
  messagingSenderId: '762802187722',
  appId: '1:762802187722:web:782b83cc314a32680b7333',
  measurementId: 'G-1JT53PPCJ8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log('Error creating user', e.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
