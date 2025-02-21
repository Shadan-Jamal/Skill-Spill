const academicButtons = document.querySelectorAll("#academicSkills button");
const nonAcademicButtons = document.querySelectorAll("#nonAcademicSkills button");
const selectedSkillsDisplay = document.getElementById("selectedSkills");
const finalSelection = document.getElementById("finalSelection");
const nameInput = document.getElementById("nameInput");

let selectedSkills = [];

function updateSelectedSkills() {
    if (selectedSkills.length === 0) {
        selectedSkillsDisplay.textContent = "None";
    } else {
        selectedSkillsDisplay.textContent = selectedSkills.join(", ");
    }
    finalSelection.style.display = "block";
}

function toggleSkill(button) {
    const skill = button.textContent;

    // Check if skill is already selected
    if (selectedSkills.includes(skill)) {
        // Remove from selected skills
        selectedSkills = selectedSkills.filter(s => s !== skill);
        button.classList.remove("selected");
    } else {
        // Add to selected skills
        selectedSkills.push(skill);
        button.classList.add("selected");
    }

    updateSelectedSkills();
}

academicButtons.forEach(button => {
    button.addEventListener("click", () => toggleSkill(button));
});

nonAcademicButtons.forEach(button => {
    button.addEventListener("click", () => toggleSkill(button));
});

document.getElementById("submit").addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (selectedSkills.length === 0) {
        alert("Please select at least one skill.");
        return;
    }
    alert(`Hello ${name}, you have selected: ${selectedSkills.join(", ")}`);
    // Here, you can send the name and selectedSkills to the server or process it further
});
