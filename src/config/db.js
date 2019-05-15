import firebase from 'firebase/app';
import 'firebase/firestore';

const creds = require('./creds.json');

firebase.initializeApp(creds);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export const db = firestore;
