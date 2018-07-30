console.log('JS');

function handleGenerateClick() {
   console.log('generate-btn clicked');
   $('body').append('<div>new div</div>');
}

function addEventListeners() {
   $('#generate-btn').click(handleGenerateClick);
}

function readyNow() {
   console.log('JQ');
   addEventListeners();
}

$(readyNow);