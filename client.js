let generateClickCount = 0;


function handleGenerateClick() {
   let newDiv = $('<div>new div</div>');
   generateClickCount += 1;
   newDiv.append(`<p>${generateClickCount}</p>`);

   $('body').append(newDiv);
}

function addEventListeners() {
   $('#generate-btn').click(handleGenerateClick);
}

function readyNow() {
   addEventListeners();
}

$(readyNow);