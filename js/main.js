// Get Current Day in Calendar
getCurrentDate();

function getCurrentDate(){
   let dayIx = new Date().getDay(); // 0 is Sunday
   dayIx = dayIx === 0 ? 6 : dayIx - 1; // Monday (0) is first in week

   let rows = document.querySelector('#calendar').querySelectorAll('tbody tr');
   let rowIx = 0;
   rows.forEach(row => {
      if (rowIx === dayIx)
      row.classList.toggle('table-success');
      rowIx++;
   })
}

//ToDo - Implement ReCaptcha
function onClick(e) {
   e.preventDefault();
   grecaptcha.enterprise.ready(async () => {
   const token = await grecaptcha.enterprise.execute('6LfxQfopAAAAAKZVKzth87qPOlT6wcXLujX7bqJ7', {action: 'LOGIN'});
   });
}