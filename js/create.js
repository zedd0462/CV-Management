let linkCount = 1;
let educationCount = 1;
let skillCount = 1;
let experienceCount = 1;
let languageCount = 1;


function submit(){
    let newCV = createObject();
    if(localStorage.getItem("data") === null){
        localStorage.setItem("data", JSON.stringify([]));
    }
    let tempData = JSON.parse(localStorage.getItem("data"));
    tempData.push(newCV);
    localStorage.setItem("data", JSON.stringify(tempData));
    alert("CV created successfully!");
}

function addLink(){
    linkCount++;
    const profileSection = document.getElementById("profile-section");
    const links = profileSection.querySelector("#links");
    const link = document.createElement("input");
    link.setAttribute("type", "text");
    link.setAttribute("id", `link${linkCount}`);
    link.setAttribute("class", "form-input");
    link.setAttribute("placeholder", "Link");
    links.appendChild(link);
}

function addEducation(){
    educationCount++;
    const educationSection = document.getElementById("education-section");
    const educationRow = document.createElement("div");
    educationRow.setAttribute("class", "education-row");
    const diplomaLabel = document.createElement("div");
    diplomaLabel.setAttribute("class", "form-label");
    diplomaLabel.innerHTML = "Diploma";
    const diploma = document.createElement("input");
    diploma.setAttribute("type", "text");
    diploma.setAttribute("id", `diploma${educationCount}`);
    diploma.setAttribute("class", "form-input");
    diploma.setAttribute("placeholder", "Diploma");
    const organisationLabel = document.createElement("div");
    organisationLabel.setAttribute("class", "form-label");
    organisationLabel.innerHTML = "Organisation";
    const organisation = document.createElement("input");
    organisation.setAttribute("type", "text");
    organisation.setAttribute("id", `organisation${educationCount}`);
    organisation.setAttribute("class", "form-input");
    organisation.setAttribute("placeholder", "Organisation");
    const yearLabel = document.createElement("div");
    yearLabel.setAttribute("class", "form-label");
    yearLabel.innerHTML = "Year";
    const year = document.createElement("input");
    year.setAttribute("type", "text");
    year.setAttribute("id", `year${educationCount}`);
    year.setAttribute("class", "form-input");
    year.setAttribute("placeholder", "Year");
    educationRow.appendChild(diplomaLabel);
    educationRow.appendChild(diploma);
    educationRow.appendChild(organisationLabel);
    educationRow.appendChild(organisation);
    educationRow.appendChild(yearLabel);
    educationRow.appendChild(year);
    educationSection.insertBefore(educationRow, educationSection.querySelector(".input-add"));
}

function addSkill(){
    skillCount++;
    const technologySkillSection = document.getElementById("technology-skill-section");
    const skillRow = document.createElement("div");
    skillRow.setAttribute("class", "skill-row");
    const skillLabel = document.createElement("div");
    skillLabel.setAttribute("class", "form-label");
    skillLabel.innerHTML = "Skill";
    const skill = document.createElement("input");
    skill.setAttribute("type", "text");
    skill.setAttribute("id", `skill${skillCount}`);
    skill.setAttribute("class", "form-input");
    skill.setAttribute("placeholder", "Skill");
    const detailsLabel = document.createElement("div");
    detailsLabel.setAttribute("class", "form-label");
    detailsLabel.innerHTML = "Details (Separated by Comma)";
    const details = document.createElement("textarea");
    details.setAttribute("id", `details${skillCount}`);
    details.setAttribute("class", "form-input");
    details.setAttribute("placeholder", "Details");
    skillRow.appendChild(skillLabel);
    skillRow.appendChild(skill);
    skillRow.appendChild(detailsLabel);
    skillRow.appendChild(details);
    technologySkillSection.insertBefore(skillRow, technologySkillSection.querySelector(".input-add"));
}

function addExperience(){
    experienceCount++;
    const experienceSection = document.getElementById("experience-section");
    const experienceRow = document.createElement("div");
    experienceRow.setAttribute("class", "experience-row");
    const typeLabel = document.createElement("div");
    typeLabel.setAttribute("class", "form-label");
    typeLabel.innerHTML = "Type";
    const type = document.createElement("input");
    type.setAttribute("type", "text");
    type.setAttribute("id", `experience-type${experienceCount}`);
    type.setAttribute("class", "form-input");
    type.setAttribute("placeholder", "Type");
    const organisationLabel = document.createElement("div");
    organisationLabel.setAttribute("class", "form-label");
    organisationLabel.innerHTML = "Organisation";
    const organisation = document.createElement("input");
    organisation.setAttribute("type", "text");
    organisation.setAttribute("id", `experience-organisation${experienceCount}`);
    organisation.setAttribute("class", "form-input");
    organisation.setAttribute("placeholder", "Organisation");
    const titleLabel = document.createElement("div");
    titleLabel.setAttribute("class", "form-label");
    titleLabel.innerHTML = "Title";
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("id", `experience-title${experienceCount}`);
    title.setAttribute("class", "form-input");
    title.setAttribute("placeholder", "Title");
    const technologiesLabel = document.createElement("div");
    technologiesLabel.setAttribute("class", "form-label");
    technologiesLabel.innerHTML = "Technologies (Separated by Comma)";
    const technologies = document.createElement("textarea");
    technologies.setAttribute("id", `experience-technologies${experienceCount}`);
    technologies.setAttribute("class", "form-input");
    technologies.setAttribute("placeholder", "Technologies");
    const yearLabel = document.createElement("div");
    yearLabel.setAttribute("class", "form-label");
    yearLabel.innerHTML = "Year";
    const year = document.createElement("input");
    year.setAttribute("type", "text");
    year.setAttribute("id", `experience-year${experienceCount}`);
    year.setAttribute("class", "form-input");
    year.setAttribute("placeholder", "Year");
    const durationLabel = document.createElement("div");
    durationLabel.setAttribute("class", "form-label");
    durationLabel.innerHTML = "Duration";
    const duration = document.createElement("input");
    duration.setAttribute("type", "text");
    duration.setAttribute("id", `experience-duration${experienceCount}`);
    duration.setAttribute("class", "form-input");
    duration.setAttribute("placeholder", "Duration");
    experienceRow.appendChild(typeLabel);
    experienceRow.appendChild(type);
    experienceRow.appendChild(organisationLabel);
    experienceRow.appendChild(organisation);
    experienceRow.appendChild(titleLabel);
    experienceRow.appendChild(title);
    experienceRow.appendChild(technologiesLabel);
    experienceRow.appendChild(technologies);
    experienceRow.appendChild(yearLabel);
    experienceRow.appendChild(year);
    experienceRow.appendChild(durationLabel);
    experienceRow.appendChild(duration);
    experienceSection.insertBefore(experienceRow, experienceSection.querySelector(".input-add"));
}

function addLanguage(){
    languageCount++;
    const languageSection = document.getElementById("language-section");
    const languageRow = document.createElement("div");
    languageRow.setAttribute("class", "language-row");
    const languageLabel = document.createElement("div");
    languageLabel.setAttribute("class", "form-label");
    languageLabel.innerHTML = "Language";
    const language = document.createElement("input");
    language.setAttribute("type", "text");
    language.setAttribute("id", `language${languageCount}`);
    language.setAttribute("class", "form-input");
    language.setAttribute("placeholder", "Language");
    const levelLabel = document.createElement("div");
    levelLabel.setAttribute("class", "form-label");
    levelLabel.innerHTML = "Level";
    const level = document.createElement("input");
    level.setAttribute("type", "text");
    level.setAttribute("id", `language-level${languageCount}`);
    level.setAttribute("class", "form-input");
    level.setAttribute("placeholder", "Level");
    const certificationLabel = document.createElement("div");
    certificationLabel.setAttribute("class", "form-label");
    certificationLabel.innerHTML = "Certification";
    const certification = document.createElement("input");
    certification.setAttribute("type", "text");
    certification.setAttribute("id", `language-certification${languageCount}`);
    certification.setAttribute("class", "form-input");
    certification.setAttribute("placeholder", "Certification");
    const experienceLabel = document.createElement("div");
    experienceLabel.setAttribute("class", "form-label");
    experienceLabel.innerHTML = "Experience";
    const experience = document.createElement("input");
    experience.setAttribute("type", "text");
    experience.setAttribute("id", `language-experience${languageCount}`);
    experience.setAttribute("class", "form-input");
    experience.setAttribute("placeholder", "Experience");
    languageRow.appendChild(languageLabel);
    languageRow.appendChild(language);
    languageRow.appendChild(levelLabel);
    languageRow.appendChild(level);
    languageRow.appendChild(certificationLabel);
    languageRow.appendChild(certification);
    languageRow.appendChild(experienceLabel);
    languageRow.appendChild(experience);
    languageSection.insertBefore(languageRow, languageSection.querySelector(".input-add"));
}

function createObject(){
    const cv = {
        profile: getProfile(),
        education: getEducation(),
        technologySkills: getTechnologySkills(),
        experiences: getExperience(),
        softSkills: getSoftSkills(),
        languages: getLanguages(),
        interests: getInterests()
    };
    return cv;
}

function getProfile(){
    const profile = {
        photo: getPhoto(),
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        birthday: getBirthday(),
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        professionalSummary: document.getElementById("professional-summary").value,
        links: []
    };
    for(let i = 1; i <= linkCount; i++){
        profile.links.push(document.getElementById(`link${i}`).value);
    }
    return profile;
}

function getBirthday(){
    let birthdayString = document.getElementById("birthday").value;
    let birthdayDate = new Date(birthdayString);
    return {
        day: birthdayDate.getDate(),
        month: birthdayDate.getMonth() + 1,
        year: birthdayDate.getFullYear() //getYear() returns 2 digits ??
    };
}

function getPhoto(){
    let photoString =  document.getElementById("photo").value;
    photoString = photoString.split("\\").pop();
    return `photos/${photoString}`;
}

function getEducation(){
    const education = [];
    for(let i = 1; i <= educationCount; i++){
        education.push({
            diploma: document.getElementById(`diploma${i}`).value,
            organisation: document.getElementById(`organisation${i}`).value,
            year: document.getElementById(`year${i}`).value
        });
    }
    return education;
}

function getTechnologySkills(){
    const technologySkills = [];
    for(let i = 1; i <= skillCount; i++){
        technologySkills.push({
            skill: document.getElementById(`skill${i}`).value,
            details: document.getElementById(`details${i}`).value.split(",").map(e => e.trim())
        });
    }
    return technologySkills;
}

function getExperience(){
    const experiences = [];
    for(let i = 1; i <= experienceCount; i++){
        let experience = {
            type: document.getElementById(`experience-type${i}`).value,
            organisation: document.getElementById(`experience-organisation${i}`).value,
            title: document.getElementById(`experience-title${i}`).value,
            technologies: document.getElementById(`experience-technologies${i}`).value.split(",").map(e => e.trim()),
            year: document.getElementById(`experience-year${i}`).value,
            duration: document.getElementById(`experience-duration${i}`).value
        }
        experiences.push(experience);
    }
    return experiences;
}

function getSoftSkills(){
    return document.getElementById("soft-skills").value.split(",").map(e => e.trim());
}

function getLanguages(){
    const languages = [];
    for(let i = 1; i <= languageCount; i++){
        let lang = {
            language: document.getElementById(`language${i}`).value,
            level: document.getElementById(`language-level${i}`).value,
            certification:  document.getElementById(`language-certification${i}`).value,
            experience: document.getElementById(`language-experience${i}`).value
        }
        languages.push(lang);
    }
    return languages;
}

function getInterests(){
    return document.getElementById("interests").value.split(",").map(e => e.trim());
}
