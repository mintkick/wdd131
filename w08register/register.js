var count = 1;

function participantTemplate(count) {
  // count is the current number of participants shown
  return `<section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
}

function submitTemplate(info) {
  return `Thank you ${info.name} for registering. You have registered ${count} participants and owe $${info.sum} in Fees.`;
  // return `hi bob.!`;
}

function totalFees() {
  // the selector below lets us grab any element that has an id that begins with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]");
  console.log(feeElements);
  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
  // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
  feeElements = [...feeElements];
  // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
  // Remember that the text that was entered into the input element will be found in the .value of the element.
  // let total = feeElements.reduce((total, feeElements.value) => total + feeElements.value, 0);
  let total = feeElements.reduce((total, currentValue) => {
    return +total + +currentValue.value; // here I'm using the unary '+' operator to instantly convert the number string to an int!
  }, 0);
  // once you have your total make sure to return it!
  console.log(feeElements);
  console.log(total);
  return total;
}

function addNewParticipant() {
  document
    .querySelector("#add")
    .insertAdjacentHTML("beforebegin", participantTemplate(++count));
}

function submitForm(event) {
  // submissionInfo = new submissionInfo();
  event.preventDefault();
  //   document
  //     .querySelector("form")
  //     .insertAdjacentHTML("afterend", submitTemplate());
  document.querySelector("#summary").innerText = submitTemplate({
    name: document.querySelector("#adult_name").value,
    sum: totalFees(),
  });
  document.querySelector("form").style.display = "none";
}

// we do beforebegin add button because the add button will always be at the end of the grid
document.querySelector("#add").addEventListener("click", addNewParticipant);
// searched [ javascript how do you pass a function argument without using parentheses ] but realized I didn't need to pass in count as it's a variable within scope

document.querySelector("form").addEventListener("submit", submitForm, false);
