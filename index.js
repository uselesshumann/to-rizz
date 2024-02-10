// the click count for `No` button clicks
let noButtonClick = 0;
// the click limit for the `No` button
const NO_BUTTON_CLICK_LIMIT = 5;

// getting the html elements
const imageElement = document.querySelector("img");
const yesBtnElement = document.querySelector(".yes_button");
const noBtnElement = document.querySelector(".no_button");
const textElement = document.querySelector("h1");

// ============= adding the click event listener to the `NO` button ============= //
noBtnElement.addEventListener("click", () => {
  // check if the noButtonClick count is more than 6 times or not

  // if the noButtonClick count is more than 6 times it won't do nothing such as changing the image or changing the text
  if (noButtonClick >= NO_BUTTON_CLICK_LIMIT) return;

  // increase the NO_BUTTON_CLICK count when the user clicks `No` button
  noButtonClick = noButtonClick + 1;

  // change the image when the user clicks the `No` button
  imageElement.src = ImageSrcArray[noButtonClick];

  // change the `No` button text when the user clicks the `No` button
  noBtnElement.innerText = YesButtonArray[noButtonClick];

  // make the `Yes` button bigger by changing class name when the user clicks the `No` button
  yesBtnElement.className = `yes_button_${noButtonClick}`;
});

// ============= adding the click event listener to the `YES` button ============= //
yesBtnElement.addEventListener("click", () => {
  const SUCCESS_IMAGE = "./images/success.jpg";
  const SUCCESS_MESSAGE = "Yayy !!!Mwah chi bby :3";

  // change the image when the user clicks the `YES` button
  imageElement.src = SUCCESS_IMAGE;

  // change the "Will you be my valentine?" text when the user clicks the `YES` button
  textElement.innerHTML = SUCCESS_MESSAGE;

  // hide `YES` and `NO` button by adding hidden class name
  yesBtnElement.classList.add("hidden");
  noBtnElement.classList.add("hidden");
});

// the images that will change when the user clicks the `No` button
const ImageSrcArray = [
  "./images/image-1.jpg",
  "./images/image-2.jpg",
  "./images/image-3.jpg",
  "./images/image-4.jpg",
  "./images/image-5.jpg",
  "./images/image-6.jpg",
];

// the text that will change when the user clicks the `Yes` button
const YesButtonArray = [
  "No",
  "Bruh FR?",
  "Okay..seriouly??",
  "You're so mean honey",
  "Don't bully me TT",
  "One Last chance pookie, will you?:>",
];
