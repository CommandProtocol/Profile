let skillCount = 1;

function addSkill() {
    skillCount++;
    const skillContainer = document.getElementById('skills-container');
    const newSkillForm = document.createElement('div');
    newSkillForm.classList.add('skill-form');
    newSkillForm.id = `skill${skillCount}`;

    newSkillForm.innerHTML = `
        <h4>Skill ${skillCount}:</h4>
        <label for="skill${skillCount}Name">Tên:</label>
        <input type="text" id="skill${skillCount}Name" class="input-field">

        <label for="skill${skillCount}Form">Form:</label>
        <input type="checkbox" id="skill${skillCount}Passive"> Passive
        <input type="checkbox" id="skill${skillCount}Active" class="input-field" checked> Active

        <label for="skill${skillCount}Desc">Miêu tả:</label>
        <textarea id="skill${skillCount}Desc" class="input-field"></textarea>

        <label for="skill${skillCount}Dura">Dura:</label>
        <input type="number" id="skill${skillCount}Dura" class="input-field">

        <label for="skill${skillCount}CD">CD:</label>
        <input type="number" id="skill${skillCount}CD" class="input-field">
    `;
    skillContainer.appendChild(newSkillForm);
}

function submitForm() {
    const resultDiv = document.getElementById('result');
    const resultDetails = document.getElementById('resultDetails');

    const baseStat = document.getElementById('baseStat').value;
    const effectSlot = document.getElementById('effectSlot').value;
    const powerType = document.getElementById('powerType').value;
    const hp = document.getElementById('hp').value;
    const def = document.getElementById('def').value;
    const ref = document.getElementById('ref').value;
    const atk = document.getElementById('atk').value;
    const spd = document.getElementById('spd').value;
    const regularAttack = document.getElementById('regularAttack').value;

    let result = '';

    if (baseStat) result += `**Base Stat**: ${baseStat}<br>`;
    if (effectSlot) result += `**Effect Slot**: ${effectSlot}<br>`;
    if (powerType) result += `**Phân loại sức mạnh**: ${powerType}<br>`;
    if (hp) result += `**Hp**: ${hp}<br>`;
    if (def) result += `**Def**: ${def}<br>`;
    if (ref) result += `**Ref**: ${ref}<br>`;
    if (atk) result += `**Atk**: ${atk}<br>`;
    if (spd) result += `**Spd**: ${spd}<br>`;
    if (regularAttack) result += `**Đòn Đánh Thường**: ${regularAttack}<br>`;

    for (let i = 1; i <= skillCount; i++) {
        const skillName = document.getElementById(`skill${i}Name`).value;
        const skillForm = document.getElementById(`skill${i}Active`).checked ? "Active" : "Passive";
        const skillDesc = document.getElementById(`skill${i}Desc`).value;
        const skillDura = document.getElementById(`skill${i}Dura`).value;
        const skillCD = document.getElementById(`skill${i}CD`).value;

        if (skillName || skillForm || skillDesc || skillDura || skillCD) {
            result += `<h4>Skill ${i}:</h4>`;
            if (skillName) result += `**Tên**: ${skillName}<br>`;
            if (skillForm) result += `**Form**: ${skillForm}<br>`;
            if (skillDesc) result += `**Miêu tả**: ${skillDesc}<br>`;
            if (skillDura) result += `**Dura**: ${skillDura}<br>`;
            if (skillCD) result += `**CD**: ${skillCD}<br>`;
        }
    }

    resultDetails.innerHTML = result;
    resultDiv.style.display = 'block';
}

function copyResult() {
    const resultText = document.getElementById('resultDetails').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Kết quả đã được sao chép!');
    });
}
