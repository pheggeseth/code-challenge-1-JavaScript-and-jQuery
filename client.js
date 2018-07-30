let generateClickCount = 0;

function handleGenerateClick() {
   $('body').append(
      `<div class="generated">
         <p>${generateClickCount += 1}</p>
         <button class="swap-btn">Swap</button>
         <button class="delete-btn">Delete</button>
      </div>`
   );
}

function handleSwapClick() {
   $(this).parent().toggleClass('yellow');
}

function addEventListeners() {
   $('#generate-btn').on('click', handleGenerateClick);
   $('body').on('click', '.swap-btn', handleSwapClick);
}

function readyNow() {
   addEventListeners();
}

$(readyNow);