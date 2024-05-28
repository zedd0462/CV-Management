

let currentIndex = 0;

function viewerLoadCV(index) {
    const viewerContent = document.getElementById('viewer-content');
    let cvData = data[index];

    const newContent = fillTemplate(cvData, templateString).getElementById('cv-body');

    viewerContent.innerHTML = "";
    const adoptedNode = document.adoptNode(newContent);
    viewerContent.appendChild(newContent);
}


function ViewerLoadCSS(styleNumber){
    loadCSS("css/style" + styleNumber + ".css");
}

function init(){
    currentIndex = getStartingCVIndex();
    viewerLoadCV(currentIndex);
    ViewerLoadCSS(1);
    const style1 = document.getElementById('style1');
    const style2 = document.getElementById('style2');
    const style3 = document.getElementById('style3');
    const style4 = document.getElementById('style4');
    const style5 = document.getElementById('style5');
    style1.addEventListener('click', function(){
        ViewerLoadCSS(1);
    });
    style2.addEventListener('click', function(){
        ViewerLoadCSS(2);
    });
    style3.addEventListener('click', function(){
        ViewerLoadCSS(3);
    });
    style4.addEventListener('click', function(){
        ViewerLoadCSS(4);
    });
    style5.addEventListener('click', function(){
        ViewerLoadCSS(5);
    });
    const nextButton = document.getElementById('next');
    const previousButton = document.getElementById('previous');
    nextButton.addEventListener('click', nextCV);
    previousButton.addEventListener('click', previousCV);
}

function nextCV(){
    currentIndex = (currentIndex + 1) % data.length;
    viewerLoadCV(currentIndex);
}

function previousCV(){
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    viewerLoadCV(currentIndex);
}

function getStartingCVIndex(){
    try {
        let url = new URL(window.location.href);
        let index = url.searchParams.get("index");
        if(index && index < data.length){
            return parseInt(index);
        }else{
            return 0;
        }
    } catch (error) {
        return 0;
    }
}

init();





