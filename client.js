console.log('JS');

function handleGenerateClick() {
   console.log('generate clicked');
   
}

function addEventListeners() {
   $('#generate-btn').click(handleGenerateClick);
}

function readyNow() {
   console.log('JQ');
   addEventListeners();
}

$(readyNow);