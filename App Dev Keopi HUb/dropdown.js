// // Dropdown

// const dropdown = document.querySelectorAll('.dropdown');

// dropdowns.forEach(dropdown => {
//   const select = dropdown.querySelector('.select');
//   const caret = dropdown.querySelector('.caret');
//   const menu = dropdown.querySelector('.menu');
//   const options = dropdown.querySelectAll('.menu li');
//   const selected = dropdown.querySelector('.selected');

//   select.addEventListener('click', () => {
//     select.classList.toggle('select-clicked');
//     caret.classList.toggle('caret-rotate');
//     menu.classList.toggle('menu-open');
//   });
  
//   options.forEach(option => {
//       option.addEventListener('click', () => {      
//         selected.innerText = option.innerText;
//         select.classList.remove('select-clicked');
//         caret.classList.remove('caret-rotate');
//         menu.classList.remove('menu-open');
//         options.forEach(option => {
//           option.classList.remove('active');
//         });

//         option.classList.add('active');
//       });
//   });
// });

// Dropdown

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li'); // Corrected this line
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });
  
  options.forEach(option => {
      option.addEventListener('click', () => {      
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
          option.classList.remove('active');
          select.classList.toggle('select-clicked');
        });

        option.classList.add('active');
      });
  });
});

