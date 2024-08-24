document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");

  userForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");

    const age = parseInt(ageInput.value, 10);
    const name = nameInput.value.trim();

    if (!name) {
      alert("Please enter a valid name.");
      return;
    }

    if (!age || isNaN(age) || age < 1) {
      alert("Please enter a valid age (a positive number).");
      return;
    }

    try {
      const result = await checkAge(age, name);
      if (result === "above18") {
        alert(`Welcome, ${name}. You can vote.`);
      } else {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      }
    } catch (error) {
      console.error(error);
      alert(`Oh sorry ${name}. You aren't old enough.`);
    }

    // Reset the form after submission
    userForm.reset();
  });

  function checkAge(age, name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve("above18");
        } else {
          reject("below18");
        }
      }, 4000);
    });
  }
});
