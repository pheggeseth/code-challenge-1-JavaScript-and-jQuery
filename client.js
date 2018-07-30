let generateClickCount = 0;

function readyNow() {
   $('#generate-btn').on('click', function() {
      $('body').append(
         `<div class="generated">
            <p>${generateClickCount += 1}</p>
            <button class="swap-btn">Swap</button>
            <button class="delete-btn">Delete</button>
         </div>`
      );
   });
   
   $('body').on('click', '.swap-btn', function() {
      $(this).parent().toggleClass('yellow');
   });
   
   $('body').on('click', '.delete-btn', function() {
      $(this).parent().remove();
   });
}

$(readyNow);