function loadTemplate(templateString){
    let parser = new DOMParser();
    let template = parser.parseFromString(templateString, 'text/html');
    return template;
}

function loadCSS(cssURL){
    const oldLink = document.getElementById('cv-style');
    if(oldLink){
        oldLink.href = cssURL;
        return;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssURL;
    link.id="cv-style";
    document.head.appendChild(link);
}

function fillTemplate(cv, templateString){

    let template = loadTemplate(templateString);
    
    template.getElementById('profileName').innerHTML = cv.profile.firstName + ' ' + cv.profile.lastName;
    template.getElementById('profilePicture').src = cv.profile.photo;
    template.getElementById('professionalSummary').innerHTML = cv.profile.professionalSummary;

    let birthday = "Né le " +
        cv.profile.birthday.day +'/'+
        cv.profile.birthday.month + '/' +
        cv.profile.birthday.year;
    
    template.getElementById('birthday').innerHTML = birthday;
    template.getElementById('phone').innerHTML = cv.profile.phone;
    template.getElementById('email').innerHTML = cv.profile.email;
    template.getElementById('address').innerHTML = cv.profile.address;

    let languages = '';
    let langOldContent = template.getElementById('languages').innerHTML;
    for (const language of cv.languages) {
        let languageItem = `<div class="language">${language.language} - ${language.level}</div>`;
        languages += languageItem;
    }
    template.getElementById('languages').innerHTML = langOldContent + languages;

    let softSkills = '';
    let softSkillsOldContent = template.getElementById('softskills').innerHTML;
    for (const skill of cv.softSkills) {
        let skillItem = `<div class="softskill">${skill}</div>`;
        softSkills += skillItem;
    }
    template.getElementById('softskills').innerHTML = softSkillsOldContent + softSkills;

    let hobbies = '';
    let hobbiesOldContent = template.getElementById('hobbies').innerHTML;
    for (const hobby of cv.interests) {
        let hobbyItem = `<div class="hobby">${hobby}</div>`;
        hobbies += hobbyItem;
    }
    template.getElementById('hobbies').innerHTML = hobbiesOldContent + hobbies;

    let education = '';
    let educationOldContent = template.getElementById('education').innerHTML;
    for (const edu of cv.education) {
        let eduItem = `
        <div class="diploma">
            <div class="year">${edu.year}</div>
            <div class="type">${edu.diploma}</div>
            <div class="faculty">${edu.organisation}</div>
        </div>`;
        education += eduItem;
    }
    template.getElementById('education').innerHTML = educationOldContent + education;

    let skills = '';
    let skillsOldContent = template.getElementById('skills').innerHTML;
    for (const skill of cv.technologySkills) {
        let skillItem = `
        <div class="skillgroup">
            <div class="title">${skill.skill}</div>
            <div class="subskills"><div class="skill">`;
        for (const detail of skill.details) {
            skillItem += `${detail}` + ", ";
        }
        if(skill.details.length > 0){
            skillItem = skillItem.slice(0, -2);
            skillItem += '.';
        }
        skillItem += `</div></div></div>`;
        skills += skillItem;
    }
    template.getElementById('skills').innerHTML = skillsOldContent + skills;

    let experiences = '';
    let experiencesOldContent = template.getElementById('experiences').innerHTML;
    for (const exp of cv.experiences) {
        let technologies = 'Technologies utilisées: ';
        for(const tech of exp.technologies){
            technologies += tech + ', ';
        }
        if(exp.technologies.length > 0){
            technologies = technologies.slice(0, -2);
            technologies += '.';
        }
        if(!exp.title.endsWith('.')){
            exp.title += '.';
        }

        let expItem = `
        <div class="experience">
            <div class="date">${exp.year}</div>
            <div class="title">${exp.type}</div>
            <div class="company">${exp.organisation}</div>
            <div class="subject">${exp.title}</div>
            <div class="location">${technologies}</div>
            <div class="location">Duration : ${exp.duration}</div>
        </div>`;
        experiences += expItem;
    }
    template.getElementById('experiences').innerHTML = experiencesOldContent + experiences;

    return template;
}