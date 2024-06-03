//debug
console.log("#debug: create.js loaded");

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

/*
    {
        profile : {
            photo: "photos/Abdelhamid_Fadel.png",
            firstName: "Abdelhamid",
            lastName: "Fadel",
            birthday: {
                day: 29,
                month: 11,
                year: 2000
            },
            phone: "+212767347766",
            email: "fadelabdelhamid1@gmail.com",
            address: "El Jadida, Maroc",
            professionalSummary: `
                                Étudiant passionné en ingénierie logicielle
                                à la recherche d’opportunités pour acquérir
                                de nouvelles compétences et appliquer mes
                                connaissances en programmation.
                                Je possède de solides compétences techniques
                                dans les langages de programmation tels que
                                Java, JavaScript et C. Maîtrise des technologies
                                Web telles que Java Enterprise Edition(JEE) et
                                Node.js. Je recherche un environnement de travail
                                stimulant où je peux apprendre, évoluer et
                                contribuer à des projets de développement de
                                logiciels passionnants.
                                `,
            links: ["https://www.linkedin.com/in/fadelabdelhamid/", "https://twitter.com/a_fadel_dev/"]
        },
        education: [
            {
                diploma: "Master Qualité du Logiciel (MQL)",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2025
            },
            {
                diploma: "Licence Professionnelle - Ingénierie des Systèmes d’information et Réseaux",
                organisation: "EST Safi - Université Cadi Ayyad - Safi",
                year: 2021
            },
            {
                diploma: "Diplôme Universitaire de Technologie - Génie Informatique",
                organisation: "EST Safi - Université Cadi Ayyad - Safi",
                year: 2020
            },
            {
                diploma: "Baccalauréat",
                organisation: "Lycée Abou Chouaib Doukkali - El Jadida",
                year: 2018
            }
        ],
        technologySkills: [
            {
                skill: "Jakarta Enterprise Edition (JEE)",
                details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                    "modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                    "Administration Tomcat"
                ]
            },
            {
                skill: "Ingénierie du Web",
                details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Express.js", "PHP"]
            },
            
            {
                skill: "Ingénierie DevOps",
                details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "JUnit"]
            },
            {
                skill: "Bases de données",
                details: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"]
            },
            {
                skill: "Analyse et conception",
                details: ["UML", "MERISE", "Design Patterns"]
            },
            {
                skill: "Web Services",
                details: ["REST", "SOAP"]
            },
            {
                skill: "Technologies XML",
                details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                    "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
            }
        ],
        experiences: [
            {
                type: "Stage",
                organisation: "Laboratoire LAPSSI ESTS - Safi",
                title: "Estimation des mesures du corps humain à partir d’images, en utilisant des techniques de Computer vision",
                technologies: ["Python", "Tensoflow", "Keras"],
                year: 2021,
                duration: "2 mois"
            },
            {
                type: "Stage",
                organisation: "Laboratoire LAPSSI ESTS - Safi",
                title: "Détection des maladies des plantes à partir des images en utilisant des techniques de Computer vision",
                technologies: ["Python", "Tensoflow", "Keras"],
                year: 2020,
                duration: "2 mois"
            },
            {
                type: "Stage",
                organisation: "OCP Jorf Lasfar",
                title: "Développement d’une application web, pour la gestion des réparations du matériel",
                technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                year: 2019,
                duration: "2 mois"
            }
        ],
        softSkills: [
            "Créativité", "Curiosité", "Flexibilité", "Autonomie", "Adaptabilité",
            "Sens du détail", "Bonne communication", "Gestion de l’information"
        ],
        languages: [
            {
                language: "Français",
                level: "B2",
                certification: "TCF",
                experience: ""
            },
            {
                language: "Anglais",
                level: "C1",
                certification: "",
                experience: "" 
            },
            {
                language: "Arabe",
                level: "Langue maternelle",
                certification: "",
                experience: ""
            }
        ],
        interests: ["Jeux d'échecs", "Jeux vidéo", "Formula 1", "Volleyball"]
    }
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/create.css">
    <title>CV Creation</title>
    <script src="js/create.js"></script>
</head>
<body>
    <div class="container">
        <div class="title">Create a new CV</div>
        <div class="sub-container">
            <div class="form-container">
                <div class="form-section" id="profile-section">
                    <div class="form-title">Profile</div>
                    <div class="form-row">
                        <div class="form-label">Photo</div>
                        <input type="file" id="photo" class="form-input">
                    </div>
                    <div class="form-row">
                        <div class="form-label">First Name</div>
                        <input type="text" id="first-name" class="form-input" placeholder="First Name">
                    </div>
                    <div class="form-row">
                        <div class="form-label">Last Name</div>
                        <input type="text" id="last-name" class="form-input" placeholder="Last Name">
                    </div>
                    <div class="form-row">
                        <div class="form-label">Birthday</div>
                        <input type="date" id="birthday" class="form-input">
                    </div>
                    <div class="form-row">
                        <div class="form-label">Phone</div>   
                        <input type="tel" id="phone" class="form-input" placeholder="Phone">
                    </div>
                    <div class="form-row">
                        <div class="form-label">Email</div>
                        <input type="email" id="email" class="form-input" placeholder="Email">
                    </div>
                    <div class="form-row">
                        <div class="form-label">Address</div>
                        <input type="text" id="address" class="form-input" placeholder="Address">
                    </div>
                    <div class="form-row">
                        <div class="form-label">Professional Summary</div>
                        <textarea id="professional-summary" class="form-input" placeholder="Professional Summary"></textarea>
                    </div>
                    <div class="form-row" id="links">
                        <div class="form-label" >Links</div>
                        <input type="text" id="link1" class="form-input" placeholder="Link">
                    </div>
                    <div class="input-add">
                        <div id="add-link" onclick="addLink()">Add Link</div>
                    </div>
                </div>
                <div class="form-section" id="education-section">
                    <div class="form-title">Education</div>
                    <div class="education-row">
                        <div class="form-label">Diploma</div>
                        <input type="text" id="diploma1" class="form-input" placeholder="Diploma">
                        <div class="form-label">Organisation</div>
                        <input type="text" id="organisation1" class="form-input" placeholder="Organisation">
                        <div class="form-label">Year</div>
                        <input type="text" id="year1" class="form-input" placeholder="Year">
                    </div>
                    <div class="input-add">
                        <div id="add-education" onclick="addEducation()">Add Education</div>
                    </div>
                </div>
                <div class="form-section" id="technology-skill-section">
                    <div class="form-title">Technology Skills</div>
                    <div class="skill-row">
                        <div class="form-label">Skill</div>
                        <input type="text" id="skill1" class="form-input" placeholder="Skill">
                        <div class="form-label">Details (Separated by Comma)</div>
                        <textarea id="details1" class="form-input" placeholder="Details"></textarea>
                    </div>
                    <div class="input-add">
                        <div id="add-skill" onclick="addSkill()">Add Skill</div>
                    </div>
                </div>
                <div class="form-section" id="experience-section">
                    <div class="form-title">Experience</div>
                    <div class="experience-row">
                        <div class="form-label">Type</div>
                        <input type="text" id="experience-type1" class="form-input" placeholder="Type">
                        <div class="form-label" >Organisation</div>
                        <input type="text" id="experience-organisation1" class="form-input" placeholder="Organisation">
                        <div class="form-label">Title</div>
                        <input type="text" id="experience-title1" class="form-input" placeholder="Title">
                        <div class="form-label">Technologies (Separated by Comma)</div>
                        <textarea id="experience-technologies1" class="form-input" placeholder="Technologies"></textarea>
                        <div class="form-label">Year</div>
                        <input type="text" id="experience-year1" class="form-input" placeholder="Year">
                        <div class="form-label">Duration</div>
                        <input type="text" id="experience-duration1" class="form-input" placeholder="Duration">
                    </div>
                    <div class="input-add">
                        <div id="add-skill" onclick="addExperience()">Add Experience</div>
                    </div>
                </div>
                <div class="form-section" id="softskills-section">
                    <div class="form-title">Soft Skills</div>
                    <div class="softskills-row">
                        <div class="form-label">Soft Skills(Comma Separated)</div>
                        <textarea id="soft-skills" class="form-input" placeholder="Soft Skills"></textarea>
                    </div>
                </div>
                <div class="form-section" id="language-section">
                    <div class="form-title">Languages</div>
                    <div class="language-row">
                        <div class="form-label">Language</div>
                        <input type="text" id="language" class="form-input" placeholder="Language">
                        <div class="form-label">Level</div>
                        <input type="text" id="language-level" class="form-input" placeholder="Level">
                        <div class="form-label">Certification</div>
                        <input type="text" id="language-certification" class="form-input" placeholder="Certification">
                        <div class="form-label">Experience</div>
                        <input type="text" id="language-experience" class="form-input" placeholder="Experience">
                    </div>
                    <div class="input-add">
                        <div id="add-language" onclick="addLanguage()">Add Language</div>
                    </div>
                </div>
                <div class="form-section" id="interests-section">
                    <div class="form-title">Interests</div>
                    <div class="interests-row">
                        <div class="form-label">Interests(Comma Separated)</div>
                        <textarea id="interests" class="form-input" placeholder="Interests"></textarea>
                    </div>
                </div>
                <div class="form-section" id="submit-section">
                    <div class="submit-row">
                        <div id="create-cv" onclick="getProfile()">Create CV</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
*/