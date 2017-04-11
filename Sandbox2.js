

var welcomeUser = function () {
  console.log("welcome to heaven and ale.");
}

var checkID = function (person) {
  if ( typeof person == "object" ) {
    console.log(person.age);

    if (person.age < 21 ) {
      console.log("Get Outta Hehre")
    }
    else {
      welcomeUser();
    }

  }
  else {
    console.log("please supply an object.");
  }
}



var user = {
  names: {
    first: "Kyle",
    last: "Taber"
  },
  age: 34,
  num_pets: 2
};

var html = document.getElementById("age");
html.innerHTML += user.age;
