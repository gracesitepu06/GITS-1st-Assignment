document.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.querySelector(".button-profile-edit");
  const form = document.querySelector(".form-input-profile");
  const profileSection = document.querySelector(".profile");

  editBtn.addEventListener("click", () => {
    form.style.display = "block";
    profileSection.style.display = "none";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[name="name"]').value;
    const role = form.querySelector('input[name="role"]').value;
    const availability = form.querySelector('input[name="availability"]').value;
    const age = form.querySelector('input[name="age"]').value;
    const location = form.querySelector('input[name="location"]').value;
    const experience = form.querySelector('input[name="experience"]').value;
    const email = form.querySelector('input[name="email"]').value;

    const profileName = profileSection.querySelector(".profile-name h3");
    const profileRole = profileSection.querySelector(".profile-name p");
    const profileAvailability = profileSection.querySelector(
      ".profile-data tr:nth-child(1) td"
    );
    const profileAge = profileSection.querySelector(
      ".profile-data tr:nth-child(2) td"
    );
    const profileLocation = profileSection.querySelector(
      ".profile-data tr:nth-child(3) td"
    );
    const profileExperience = profileSection.querySelector(
      ".profile-data tr:nth-child(4) td"
    );
    const profileEmail = profileSection.querySelector(
      ".profile-data tr:nth-child(5) td"
    );

    profileName.textContent = name;
    profileRole.textContent = role;
    profileAvailability.textContent = availability;
    profileAge.textContent = age;
    profileLocation.textContent = location;
    profileExperience.textContent = experience;
    profileEmail.textContent = email;

    form.style.display = "none";
    profileSection.style.display = "block";
  });
});
