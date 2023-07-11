function Submit() {
  let error = false;

  // Username
  let username = document.getElementById("username");
  if(username.value.length <= 0) {
    error = true;
    alert("Username cannot be empty");
    return;
  } else if(username.value.length <= 6) {
    error = true;
    alert("Username must be at least 6 characters");
    return;
  }

  // Pass
  let password = document.getElementById("password");
  if(!validatePassword(password.value)) {
    error = true;
    return;
  }

  // Confirm Pass
  let confirmPass = document.getElementById("repass");
  if (password.value !== confirmPass.value) {
    error = true;
    alert("Your passwords do not match");
    return;
  }

 // Email
 let email = document.getElementById("email");
 if(!email.value.endsWith("@gmail.com")) {
   error = true
   alert("Email must end with @gmail.com");
   return;
 }

  // Gender
  let male = document.getElementById("male");
  let female = document.getElementById("female");

  if (!male.checked && !female.checked) {
    error = true;
    alert("Gender cannot be empty");
    return;
  }

  // TOC
  let tos = document.getElementById("toc");
  if (!tos.checked) {
    error = true;
    alert("You must agree to the terms and conditions");
    return;
  }

  if(error === false) {
    alert("Registration Successful");
    window.location.href = 'registration.html'
  }
}

function validatePassword(password) {
  if (password.length === 0) {
    alert("Password cannot be empty");
    return false;
  } else if (!password.match(/[a-z]/)) {
    alert('Must contain lowercase letter (a-z)');
    return false;
  } else if (!password.match(/[A-Z]/)) {
    alert('Must contain uppercase letter (A-Z)');
    return false;
  } else if (!password.match(/[0-9]/)) {
    alert('Must contain number (0-9)');
    return false;
  }

  let hasNumber = false;
  let hasAlphabet = false;
  for (let i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      hasAlphabet = true;
    } else {
      hasNumber = true;
    }

    if (hasAlphabet && hasNumber) {
      return true;
    }
  }
  alert("Password must be alphanumeric");
  return false;
}

// Add event listeners to question headers
const questionHeaders = document.querySelectorAll('.question-header');
questionHeaders.forEach(header => {
  header.addEventListener('click', toggleQuestion);
});

// Toggle question answers
function toggleQuestion() {
  const question = this.parentElement;
  const answer = question.querySelector('.question-answer');
  const isOpen = question.classList.contains('open');

  // Close all other open questions
  const allQuestions = document.querySelectorAll('.question');
  allQuestions.forEach(q => {
    if (q !== question && q.classList.contains('open')) {
      q.classList.remove('open');
    }
  });

  // Toggle the current question
  question.classList.toggle('open');
}

function addToCart(button) {
  const card = button.parentNode.parentNode;
  const image = card.querySelector(".image");
  const name = card.querySelector(".clothes-name").textContent;
  const price = card.querySelector(".bottom-side p:last-child").textContent;

  const modal = document.getElementById("modal");
  const modalImage = modal.querySelector(".modal-product-image");
  const modalName = modal.querySelector(".modal-product-name");
  const modalPrice = modal.querySelector(".modal-product-price");
  const successText = modal.querySelector(".success-text");

  modalImage.src = image.src;
  modalName.textContent = name;
  modalPrice.textContent = price;

  modal.style.display = "block";
  successText.textContent = "Successfully added to cart!";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

