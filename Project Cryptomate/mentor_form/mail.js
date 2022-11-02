const firebaseConfig = {
  //   copy your firebase config informations
    apiKey: "AIzaSyBp8nRyrpe7eZZ-txx21wt94Q0z_UmOxTg",
    authDomain: "cryptomate-official.firebaseapp.com",
    databaseURL: "https://cryptomate-official-default-rtdb.firebaseio.com",
    projectId: "cryptomate-official",
    storageBucket: "cryptomate-official.appspot.com",
    messagingSenderId: "70290774349",
    appId: "1:70290774349:web:b8fb13e7e67fd5740b3f04",
    measurementId: "G-3PGGEJVLSJ"


};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstname = getElementVal("firstname");
  var lastname = getElementVal("lastname");
  var emailid = getElementVal("emailid");
  var mobileno = getElementVal("mobileno");
  var year = getElementVal("year");
  var msgContent = getElementVal("msgContent");
  var photo = getElementVal("photo");

  saveMessages(firstname, lastname, emailid, mobileno, year, msgContent, photo);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (firstname, lastname, emailid, mobileno, year, msgContent, photo) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    firstname: firstname,
    lastname: lastname,
    emailid: emailid,
    mobileno: mobileno,
    year: year,
    msgContent: msgContent,
    photo: photo,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
