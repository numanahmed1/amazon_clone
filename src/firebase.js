import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAjTAd3DDJqZ8cslGgIUCJZXZANxx6mFjA',
	authDomain: 'clone-81330.firebaseapp.com',
	databaseURL: 'https://clone-81330.firebaseio.com',
	projectId: 'clone-81330',
	storageBucket: 'clone-81330.appspot.com',
	messagingSenderId: '1077726277327',
	appId: '1:1077726277327:web:0ce89f26f4afee651891ba',
	measurementId: 'G-69RXCZ54MZ'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
