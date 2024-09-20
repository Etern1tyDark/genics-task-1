const inputBtn = document.getElementById("input-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contactList = document.querySelector(".contact-list");

inputBtn.addEventListener("click", function () {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  if (nameValue && emailValue) {
    const avatarUrl = `https://api.dicebear.com/9.x/identicon/svg?seed=${nameValue}`; // identicon avatar api usage

    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-item_info");

    const contactAvatar = document.createElement("div");
    contactAvatar.classList.add("contact-item_image");
    const avatarImg = document.createElement("img");
    avatarImg.src = avatarUrl;
    contactAvatar.appendChild(avatarImg);

    const contactBody = document.createElement("div");
    contactBody.classList.add("contact-item_body");

    const contactName = document.createElement("p");
    contactName.classList.add("contact-item_name");
    contactName.textContent = nameValue;
    const contactEmail = document.createElement("p");
    contactEmail.classList.add("contact-item_email");
    contactEmail.textContent = emailValue;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("contact-item_delete");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function () {
      contactItem.remove();
    });

    // append new contact
    contactBody.appendChild(contactName);
    contactBody.appendChild(contactEmail);
    contactInfo.appendChild(contactAvatar);
    contactInfo.appendChild(contactBody);
    contactItem.appendChild(contactInfo);
    contactItem.appendChild(deleteButton);
    contactList.appendChild(contactItem);

    // clear input
    nameInput.value = "";
    emailInput.value = "";
  } else {
    alert("Please enter the respective contact to both fields~");
  }
});
