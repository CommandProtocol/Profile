let skillCount = 1; // Keep track of how many skills have been added

// Add new skill form
document.getElementById('addSkillBtn').addEventListener('click', function () {
    skillCount++;
    const skillsContainer = document.getElementById('skillsContainer');
    const newSkillForm = `
        <div class="form-group" id="skill${skillCount}">
            <label for="skillName${skillCount}">Skill ${skillCount} Tên:</label>
            <input type="text" id="skillName${skillCount}" class="form-control" name="skillName${skillCount}">
        </div>
        <div class="form-group">
            <label>Form:</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="active${skillCount}" name="skillType${skillCount}" value="Active" checked>
                <label class="form-check-label" for="active${skillCount}">Active</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="passive${skillCount}" name="skillType${skillCount}" value="Passive">
                <label class="form-check-label" for="passive${skillCount}">Passive</label>
            </div>
        </div>
        <div class="form-group">
            <label for="skillDescription${skillCount}">Miêu tả:</label>
            <textarea id="skillDescription${skillCount}" class="form-control" name="skillDescription${skillCount}" rows="3"></textarea>
        </div>
        <div class="form-row">
            <div class="col-md-6">
                <label for="skillDuration${skillCount}">Dura:</label>
                <input type="number" id="skillDuration${skillCount}" class="form-control" name="skillDuration${skillCount}">
            </div>
            <div class="col-md-6">
                <label for="skillCD${skillCount}">CD:</label>
                <input type="number" id="skillCD${skillCount}" class="form-control" name="skillCD${skillCount}">
            </div>
        </div>
    `;
    skillsContainer.insertAdjacentHTML('beforeend', newSkillForm);
});

// Handle form submission
document.getElementById('statsForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let result = '';

    // Gather all stats
    const fields = [
        { id: 'baseStat', label: 'Base Stat' },
        { id: 'effectSlot', label: 'Effect Slot' },
        { id: 'powerType', label: 'Power Type' },
        { id: 'hp', label: 'HP' },
        { id: 'def', label: 'Def' },
        { id: 'atk', label: 'Atk' },
        { id: 'spd', label: 'Spd' },
        { id: 'normalAttack', label: 'Normal Attack' }
    ];

    fields.forEach(field => {
        const value = document.getElementById(field.id).value;
        if (value) {
            result += `**${field.label}**: ${value}\n`;
        }
    });

    // Gather all skills
    for (let i = 1; i <= skillCount; i++) {
        const skillName = document.getElementById(`skillName${i}`).value;
        const skillDescription = document.getElementById(`skillDescription${i}`).value;
        const skillDuration = document.getElementById(`skillDuration${i}`).value;
        const skillCD = document.getElementById(`skillCD${i}`).value;
        const skillType = document.querySelector(`input[name="skillType${i}"]:checked`).value;

        if (skillName || skillDescription || skillDuration || skillCD) {
            result += `\n**Skill ${i}**:\n`;
            if (skillName) result += `**Name**: ${skillName}\n`;
            if (skillType) result += `**Form**: ${skillType}\n`;
            if (skillDescription) result += `**Description**: ${skillDescription}\n`;
            if (skillDuration) result += `**Dura**: ${skillDuration}\n`;
            if (skillCD) result += `**CD**: ${skillCD}\n`;
        }
    }

    // Display result
    document.getElementById('resultText').textContent = result;
    document.getElementById('resultSection').style.display = 'block';
});

// Copy result to clipboard
document.getElementById('copyBtn').addEventListener('click', function () {
    const resultText = document.getElementById('resultText').textContent;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Kết quả đã được sao chép vào clipboard!');
    });
});
