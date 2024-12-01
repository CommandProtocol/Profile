document.addEventListener("DOMContentLoaded", function () {
    let skillCounter = 1;

    // Add Skill
    document.getElementById("addSkillBtn").addEventListener("click", function () {
        skillCounter++;

        const skillsContainer = document.getElementById("skillsContainer");
        const skillForm = document.createElement("div");
        skillForm.classList.add("form-group");
        skillForm.id = "skill" + skillCounter;

        skillForm.innerHTML = `
            <label for="skillName${skillCounter}">Skill ${skillCounter} Tên:</label>
            <input type="text" id="skillName${skillCounter}" class="form-control" name="skillName${skillCounter}">

            <label>Form:</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="active${skillCounter}" name="skillType${skillCounter}" value="Active" checked>
                <label class="form-check-label" for="active${skillCounter}">Active</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="passive${skillCounter}" name="skillType${skillCounter}" value="Passive">
                <label class="form-check-label" for="passive${skillCounter}">Passive</label>
            </div>

            <label for="skillDescription${skillCounter}">Miêu tả:</label>
            <textarea id="skillDescription${skillCounter}" class="form-control" name="skillDescription${skillCounter}" rows="3"></textarea>

            <div class="form-row">
                <div class="col-md-6">
                    <label for="skillDuration${skillCounter}">Dura:</label>
                    <input type="number" id="skillDuration${skillCounter}" class="form-control" name="skillDuration${skillCounter}">
                </div>
                <div class="col-md-6">
                    <label for="skillCD${skillCounter}">CD:</label>
                    <input type="number" id="skillCD${skillCounter}" class="form-control" name="skillCD${skillCounter}">
                </div>
            </div>
        `;

        skillsContainer.appendChild(skillForm);
    });

    // Handle form submission
    document.getElementById("statsForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const resultSection = document.getElementById("resultSection");
        const resultText = document.getElementById("resultText");
        let formData = new FormData(event.target);
        let result = "";

        formData.forEach((value, key) => {
            if (value) {
                result += `**${key}**: ${value}\n`;
            }
        });

        resultText.textContent = result;
        resultSection.style.display = "block";
    });

    // Copy result to clipboard
    document.getElementById("copyBtn").addEventListener("click", function () {
        const resultText = document.getElementById("resultText");
        navigator.clipboard.writeText(resultText.textContent);
        alert("Kết quả đã được sao chép!");
    });
});
