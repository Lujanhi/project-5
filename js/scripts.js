// https://teamtreehouse.com/library/asynchronous-programming-with-javascript/what-is-asynchronous-programming/the-javascript-call-stack
//The JavaScript Call Stack

//https://teamtreehouse.com/library/asynchronous-programming-with-javascript/what-is-asynchronous-programming/the-callback-queue-and-event-loop
//The Callback Queue and Event Loop

//https://teamtreehouse.com/library/asynchronous-programming-with-javascript/asynchronous-javascript-with-callbacks/callbacks-review
//Callbacks Review


//https://teamtreehouse.com/library/create-a-promise
// Create a Promise   then()  catch() resolve()

// https://teamtreehouse.com/library/reject-a-promise-and-handle-errors
// Reject a Promise and Handle Errors    catch()  reject ()

//https://teamtreehouse.com/library/asynchronous-programming-with-javascript/understanding-promises/promises-review
// Promises Review  there is code to copy

//From Callbacks to Promises
//https://teamtreehouse.com/library/from-callbacks-to-promises



//https://teamtreehouse.com/library/handle-multiple-promises-with-promiseall
/* const func1 = getJSON('...');
const func2 = getJSON('...');

Promise.all([func1, func2])
  .then(results => {
    console.log('Array of results', results);
  })
  .catch(error => {
    console.error(error);
  }) */

// 

// Global variables that are not assign yet.

let data;
let person;
let a;

// Fetch API Asynchronous Programming Interface

fetch('https://randomuser.me/api/?results=12&nat=us') 
   .then(response => response.json())
   //.then(response => console.log(response)) // checks response
   //.then(data => console.log(data))
   //.then(data => console.log(data.results)) // checks data
   .then(function (data) {

    //https://www.javatpoint.com/json-array //JSON array represents ordered list of values. JSON array can store multiple values. It can store string, number, boolean or object in JSON array.
    //In JSON array, values must be separated by comma.// The [ (square bracket) represents JSON array.
    
    jsonArray = data.results //results 
    jsonArray.forEach(person =>{ // goes through each results,array placing employee's info in each template literal
     
     // storing properties into variable , this is not need but makes it easier.
      let picture = person.picture.large;
      let first = person.name.first;
      let last = person.name.last;
      let email = person.email;
      let city = person.location.city;
      let state = person.location.state;
      
      // gallery of all the 12 employees display 
      // Picture of the employee
      // frist and last name of employee
      //city and state of employeee
      //its appending the gallary card to gallery ID 
      let galleryCard = 
      `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src= ${picture} alt="profile picture"> 
        </div>                                            
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${first} ${last}</h3>
            <p class="card-text">${email}</p>
            <p class="card-text cap">${city}, ${state}</p>
        </div>
      </div>`
        $('.gallery').append(galleryCard);     
      })        
   })

//modal markup

function modalMarkup(a) { 
  //append modal html to body
  $('body').append(
    `<div class="modal-container"> 
        <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
            <img class="modal-img" src = "${jsonArray[a].picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${jsonArray[a].name.first} ${jsonArray[a].name.last}</h3>
            <p class="modal-text">${jsonArray[a].email}</p>
            <p class="modal-text cap">${jsonArray[a].location.city}</p>
            <hr>
            <p class="modal-text">${jsonArray[a].phone}</p>
            <p class="modal-text cap">${jsonArray[a].location.street}, ${jsonArray[a].location.city}, ${jsonArray[a].location.state}, ${jsonArray[a].location.postcode}</p>
            <p class="modal-text">Birthday: ${jsonArray[a].dob.date.slice(5, 7) + "/" + jsonArray[a].dob.date.slice(8, 10) + "/" + jsonArray[a].dob.date.slice(0, 4)}</p>                   
        </div>
    </div>`)


    // closes modal when x button is clicked.
    $("#modal-close-btn").click(function () {
        $('.modal-container').remove()
    });
}  

  // this will allow the user to see the profile that was clcik, this is a click event

 $("#gallery").on("click", ".card", function () {  
  a = ($(this).index()) // this is the index value of the employee that was clcik by the user. 
  modalMarkup(a); // calls the modal mark up                         
})

