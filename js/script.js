(function() {
  const submit = document.querySelector("#form");

  document.addEventListener("DOMContentLoaded", function() {
    let display = new Display();
    display.checkField();
    display.disabledSubmit();
  });
  const display = new Display();
  submit.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = this.querySelector(".customer-box");
    const course = this.querySelector(".course-box");
    const author = this.querySelector(".author-box");

    const customer = new Customer(name.value, course.value, author.value);


    display.feedback(customer);
    display.clearField();
  });
  function Display() {
    this.name = document.querySelector(".customer-box");
    this.course = document.querySelector(".course-box");
    this.author = document.querySelector(".author-box");
    this.customerList = document.querySelector(".customer-list");

  }

  Display.prototype.checkField = function() {
    this.name.addEventListener("blur", this.validation);
    this.course.addEventListener("blur", this.validation);
    this.author.addEventListener("blur", this.validation);
  };

  Display.prototype.validation = function() {
    if (this.value === "") {
      this.classList.remove("complete");
      this.style.borderColor = "red";
    } else {
      this.style.borderColor = "green";
      this.classList.add("complete");
    }

    const completeForm = document.querySelectorAll(".complete");
    console.log(completeForm);
    if (completeForm.length === 3) {
      document.querySelector(".submit-btn").disabled = false;
    } else {
      document.querySelector(".submit-btn").disabled = true;
    }
  };

  Display.prototype.disabledSubmit = function() {
    const btn = document.querySelector(".submit-btn");
    btn.disabled = true;
  };

  Display.prototype.feedback = function(customer) {
    const feedback = document.querySelector(".feedback");
    const loadingbar = document.querySelector(".loading-bar");

    feedback.classList.remove("hide");
    loadingbar.classList.remove("hide");

    const self = this;
    self.disabledSubmit();

    setTimeout(function() {
      feedback.classList.add("hide");
      loadingbar.classList.add("hide");
      self.addCustomer(customer);
    }, 3000);
  };
  Display.prototype.addCustomer = function(customer) {
    const div = document.createElement("div");

    div.classList.add("col-11", "col-md-6", "col-lg-4", "mx-auto", "my-3");
    div.innerHTML = `<div class="card">
    <img src="img/IMG-20160709-WA0002.jpg" alt="" class="card-img-top">
    <div class="card-body">
        <h6 class="text-capitalize mb-3"><span class="badge badge-warning ">Name:</span><span
                class="ml-2" id="customer-name">${customer.name}</span></h6>
        <h6 class="text-capitalize my-3"><span class="badge badge-success">Course:</span><span
                class="ml-2" id="course-name">${customer.course}</span>
        </h6>
        <h6 class="text-capitalize mt-3"><span class="badge badge-danger">Author:</span><span
                class="ml-2" id="author-name">${customer.author}</span>
        </h6>
    </div>
      </div>`;
    this.customerList.appendChild(div);
  };

  Display.prototype.clearField = function() {
    this.name.value = "";
    this.course.value = "";
    this.author.value = "";
    this.name.style.borderColor = "brown";
    this.course.style.borderColor = "brown";
    this.author.style.borderColor = "brown";
  };

  function Customer(name, course, author) {
    this.name = name;
    this.course = course;
    this.author = author;
  }
})();

// (function() {
//   const submitBtn = document.querySelector("#form");
//   document.addEventListener("DOMContentLoaded", () => {
//     const profile = new Profile();
//     console.log(profile);
//     profile.checkField();
//     profile.submitvalidate();
//   });

//   submitBtn.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const name = this.querySelector(".customer-box");
//     const course = this.querySelector(".course-box");
//     const author = this.querySelector(".author-box");

//     let customer = new Customer(name.value, course.value, author.value);
//     let profile = new Profile();

//     profile.feedback(customer);
//     profile.clearfield();
//   });

//   function Profile() {
//     this.name = document.querySelector(".customer-box");
//     this.course = document.querySelector(".course-box");
//     this.author = document.querySelector(".author-box");
//     this.customerList = document.querySelector(".customer-list");
//   }

//   Profile.prototype.checkField = function() {
//     this.name.addEventListener("blur", this.validate);
//     this.course.addEventListener("blur", this.validate);
//     this.author.addEventListener("blur", this.validate);
//   };

//   Profile.prototype.validate = function() {
//     if (this.value === "") {
//       this.style.borderColor = "red";
//     } else {
//       console.log(this);
//       this.style.borderColor = "green";
//       this.classList.add("complete");
//     }

//     const conditionMet = document.querySelectorAll(".complete");

//     if (conditionMet.length === 3) {
//       document.querySelector(".submit-btn").disabled = false;
//     } else {
//       document.querySelector(".submit-btn").disabled = true;
//     }
//   };

//   Profile.prototype.clearfield = function() {
//     this.name.value = "";
//     this.course.value = "";
//     this.author.value = "";
//     this.name.style.borderColor = "brown";
//     this.course.style.borderColor = "brown";
//     this.author.style.borderColor = "brown";
//   };

//   Profile.prototype.submitvalidate = function() {
//     const btn = document.querySelector(".submit-btn");
//     btn.disabled = true;
//   };

//   Profile.prototype.feedback = function(customer) {
//     const feedback = document.querySelector(".feedback");
//     const loading = document.querySelector(".loading-bar");

//     feedback.classList.remove("hide");
//     loading.classList.remove("hide");

//     const self = this;
//     self.submitvalidate();

//     setTimeout(function() {
//       feedback.classList.add("hide");
//       loading.classList.add("hide");
//       self.addCustomer(customer);
//     }, 3000);
//   };

//   Profile.prototype.addCustomer = function(customer) {
//     let random = this.getRandom();
//     const div = document.createElement("div");
//     div.classList.add("col-11", "col-md-6", "col-lg-4", "mx-auto", "my-3");
//     div.innerHTML = `<div class="card">
//         <img src="img/cust-${random}.jpg" alt="" class="card-img-top">
//         <div class="card-body">
//       <h6 class="text-capitalize mb-3"><span class="badge badge-warning ">Name:</span><span
//               class="ml-2" id="customer-name">${customer.name}</span></h6>
//       <h6 class="text-capitalize my-3"><span class="badge badge-success">Course:</span><span
//               class="ml-2" id="course-name">${customer.course}</span>
//       </h6>
//       <h6 class="text-capitalize mt-3"><span class="badge badge-danger">Author:</span><span
//               class="ml-2" id="author-name">${customer.author}</span>
//            </h6>
//           </div>
//         </div>`;

//     this.customerList.appendChild(div);
//   };

//   Profile.prototype.getRandom = function() {
//     let random = Math.floor(Math.random() * 5 + 1);
//     return random;
//   };
//   function Customer(name, course, author) {
//     this.name = name;
//     this.course = course;
//     this.author = author;
//   }
// })();
