// Get Elements by ID

const form = document.getElementById('form');
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNumber = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");
const acknowledgement = document.getElementById("acknowledgement");

// Functions
function isValid(formData) {
  return Object.values(formData).every((value) => value === true);
}

function validateForm() {
  const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
  const orderNumberRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/;
  const checkBoxes = complaintsGroup.querySelectorAll('input[type="checkbox"]');
  const otherComplaint = document.getElementById("other-complaint");
  const radios = solutionsGroup.querySelectorAll('input[type="radio"]');
  const otherSolution = document.getElementById("other-solution");

  return {
    "full-name": fullName.value ? true : false,
    "email": emailRegex.test(email.value),
    "order-no": orderNumberRegex.test(orderNumber.value),
    "product-code": productCodeRegex.test(productCode.value),

    "quantity": !isNaN(quantity.value) && quantity.value > 0,
    "complaints-group": Array.from(checkBoxes).some(checkbox => checkbox.checked),

    "complaint-description": (otherComplaint.checked && complaintDescription.value.length >= 20) || (!otherComplaint.checked),
    "solutions-group": Array.from(radios).some(radio => radio.checked),
    "solution-description": (otherSolution.checked && solutionDescription.value.length >= 20) || (!otherSolution.checked)

  };
}

// Change Border Colours
fullName.addEventListener("change", () => {
  const formValidation = validateForm();
  fullName.style.borderColor = formValidation["full-name"] ? "green" : "red";
});

email.addEventListener("change", () => {
  const formValidation = validateForm();
  email.style.borderColor = formValidation["email"] ? "green" : "red";
});

orderNumber.addEventListener("change", () => {
  const formValidation = validateForm();
  orderNumber.style.borderColor = formValidation["order-no"] ? "green" : "red";
});

productCode.addEventListener("change", () => {
  const formValidation = validateForm();
  productCode.style.borderColor = formValidation["product-code"] ? "green" : "red";
});

quantity.addEventListener("change", () => {
  const formValidation = validateForm();
  quantity.style.borderColor = formValidation["quantity"] ? "green" : "red";
});

complaintsGroup.addEventListener("change", () => {
  
 const formValidation = validateForm();
 complaintsGroup.style.borderColor = formValidation["complaints-group"] ? "green" : "red";
});

complaintDescription.addEventListener("change", () => {
  
const formValidation = validateForm();
complaintDescription.style.borderColor = formValidation["complaint-description"] ? "green" : "red";
});

solutionsGroup.addEventListener("change", () => {
  
 const formValidation = validateForm();

 solutionsGroup.style.borderColor = formValidation["solutions-group"] ? "green" : "red";
});

solutionDescription.addEventListener("change", () => {
  
const formValidation = validateForm();

solutionDescription.style.borderColor = formValidation["solution-description"] ? "green" : "red";
});

// Submitting Form
form.addEventListener("submit", (e) => {
  e.preventDefault;
  if(isValid(validateForm())) {
    acknowledgement.innerHTML = "Form Submitted";

  } else {
    acknowledgement.innerHTML = "Form Declined";
  }
})
