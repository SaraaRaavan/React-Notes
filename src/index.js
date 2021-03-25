import React from "react";
import ReactDOM from "react-dom";
import { firebase } from "@firebase/app";
import "firebase/firestore";
import "./index.css";
import App from "./App";

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAidmnTBlqPxYqU4sj_gWs2vcdx4_aAPiI",
  authDomain: "note-pad-69203.firebaseapp.com",
  projectId: "note-pad-69203",
  storageBucket: "note-pad-69203.appspot.com",
  messagingSenderId: "924166775004",
  appId: "1:924166775004:web:fcfed6995f60884ff59419",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
