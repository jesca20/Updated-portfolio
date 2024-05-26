var bioContent = document.getElementById('bio-content');
var bioButton = document.getElementById('bio-button');

bioButton.onclick = function(){
    if(bioContent.className=='open'){
        bioContent.className= '';
    } 
    else {
       bioContent.className = 'open';
       proContent.className = '';
       eduContent.className = '';
       workContent.className= '';
    }
};

var eduContent = document.getElementById('edu-content');
var eduButton = document.getElementById('edu-button');

eduButton.onclick = function(){
    if(eduContent.className=='open'){
        eduContent.className= '';
    } 
    else {
       eduContent.className = 'open';
       bioContent.className= '';
       workContent.className= '';
       proContent.className= '';
    }
};

var workContent = document.getElementById('work-content');
var workButton = document.getElementById('work-button');

workButton.onclick = function(){
    if(workContent.className=='open'){
        workContent.className= '';
    } 
    else {
       workContent.className = 'open';
       eduContent.className = '';
       bioContent.className= '';
       proContent.className= '';
    }
};

var proContent = document.getElementById('pro-content');
var proButton = document.getElementById('pro-button');

proButton.onclick = function(){
    if(proContent.className=='open'){
        proContent.className= '';
    } 
    else {
       proContent.className = 'open';
       eduContent.className = '';
       bioContent.className= '';
       workContent.className= '';
    }
};

