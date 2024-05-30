function search(){
    let keyword = document.getElementById('search-input').value;
    let searchType = document.getElementById('search-by').value;
    if(keyword == ""){
        display([]);
    }else{
        let searchResult;
        if(searchType == "name"){
            searchResult = findByName(data, keyword);
        }else if(searchType == "tech"){
            searchResult = findByTechnology(data, keyword);
        }
        display(searchResult);
    }
}

function findByName(data , name){
    let result = [];
    for (const cvEntry of data) {
        let fullName = cvEntry.profile.firstName + " " + cvEntry.profile.lastName;
        fullName = fullName.toLowerCase();
        if (fullName.includes(name.toLowerCase())){
            result.push(cvEntry);
        }
    }
    return result;
}

function findByTechnology(data, technology){
    let result = [];
    let keyword = technology.toLowerCase();
    let added = false;
    for (const cvEntry of data) {
        //console.log("Searching in " + cvEntry.profile.firstName + " " + cvEntry.profile.lastName);
        added = false;
        for (const skillgroup of cvEntry.technologySkills) {
            if(skillgroup.skill.toLowerCase().includes(keyword)){
                result.push(cvEntry);
                added = true;
                break;
            }else{
                for (const detail of skillgroup.details){
                    if(detail.toLowerCase().includes(keyword)){
                        result.push(cvEntry);
                        added=true;
                        break;
                    }
                }
            }
            if(added){
                break;
            }
        }
    }
    return result;
}

function display(data){
    const searchResultSpace = document.getElementById('search-results');
    searchResultString = "";
    if(data.length == 0){
        searchResultString = "No result has been found!";
    }else{
        for (const cvEntry of data) {
            searchResultString += createSearchResultEntity(cvEntry);
        }
    }
    searchResultSpace.innerHTML = searchResultString;
}

function createSearchResultEntity(cvEntry){
    let result = `
        <div class="result-entity">
            <div class="result-photo"><img src="${cvEntry.profile.photo}" alt=""></div>
            <div class="result-name">${cvEntry.profile.firstName} ${cvEntry.profile.lastName}</div>
            <div class="result-button">
                <div class="view-cv-button" onclick="location.href='viewer.html?index=${data.indexOf(cvEntry)}'">View</div>
            </div>
        </div>
    `;
    return result;
}