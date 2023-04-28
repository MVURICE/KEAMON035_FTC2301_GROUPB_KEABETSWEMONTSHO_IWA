// const MONTHS = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
// ]

// const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// // Only edit below 

// const createArray = (length) => {
//     const result = []

//     for (let i= 0; i< length; i++) {
//         result.push(undefined)
//     }
// }

// const createData = () => {
//     const current = new Date()
//     current.setDate(1)
//     const startDay = current.getDay()
//     const daysInMonth = getDaysInMonth(current)

//     const weeks = createArray(5)
//     const days = createArray(7)
//     let value = null

//     for (weekIndex in weeks) {
//         value = {
//             week: parseInt(weekIndex) + 1,
//             days: []
//         }

//         for (dayIndex in days) {
//             value = parseInt(dayIndex) - startDay
//             isValid = days > 0 && days <= daysInMonth

//             value.days.push({
// 				dayOfWeek: parseInt(dayIndex) + 1,
// 				value: isValid ? day : '',
// 			  });
//         }
// 		weeks[weekIndex] = value;
//     }
//     console.log(value)
// 	return weeks;
// }

// const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//         <td class="${classString}">
//             ${value}
//         </td>

//         ${existing}
//     `;

//     return result;
// };
  
// const createHtml = (data) => {
//     let result = ''
//     for (let week in data) {
//         let inner = ""
//         inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${data[week].week}`)
//         for (let dayOfWeek in data[week].days) {
//             let classString = 'table__cell'
//             const value = data[week].days[dayOfWeek].value
//             const isToday = new Date().getDate() === value
//             const isWeekend = dayOfWeek == 0 || dayOfWeek == 6
//             const isAlternate = week % 2 == 0
//             if (isToday) classString = `${classString} table__cell_today`
//             if (isWeekend) classString = `${classString} table__cell_weekend`
//             if (isAlternate) classString = `${classString} table__cell_alternate`
//             inner = addCell(inner, classString, value)
//         }
//         result += `<tr>${inner}</tr>`
//     }
//     return result
// }


// // Only edit above

// const current = new Date()
// document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

// const data = createData()
// document.querySelector('[data-content]').innerHTML = createHtml(data)




// scripts.js

// const MONTHS = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
// ]

// const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// // Only edit below 

// const createArray = (length) => {
//     const result = []

//     for (let i = 0; i < length; i++) { // changed the for loop syntax to fix syntax errors
//         result.push(null) // added push() method to add null values to the array
//     }

//     return result // added return statement to return the created array
// }

// const createData = () => {
//     const current = new Date() // added parentheses to create a new Date object

//     current.setDate(1)

//     const startDay = current.getDay() // changed day to getDay() to get the day of the week
//     const daysInMonth = getDaysInMonth(current)

//     const weeks = createArray(5)
//     const days = createArray(7)
//     let value = null
//     const result = []

//     for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) { // added let keyword to declare the loop variable
//         value = {
//             week: weekIndex + 1,
//             days: []
//         }

//         for (let dayIndex = 0; dayIndex < days.length; dayIndex++) { // added let keyword to declare the loop variable
//             const day = dayIndex - startDay + 1
//             const isValid = day > 0 && day <= daysInMonth

//             value.days.push({
//                 dayOfWeek: dayIndex + 1,
//                 value: isValid ? day : null, // changed to ternary operator to set value to null if not valid
//             })
//         }

//         result.push(value) // added push() method to add value to the result array
//     }

//     return result // added return statement to return the created data
// }

// const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//         <td ${classString}>
//             ${value}
//         </td>

//         ${existing}
//     `

//     return result // added return statement to return the created cell
// }

// const createHtml = (data) => {
//     let result = ''

//     for (let week of data) { // changed to for...of loop to iterate over the array
//         let inner = ""
//         addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`) // changed single quotes to backticks to allow string interpolation
    
//         for (let day of week.days) { // changed to for...of loop to iterate over the array of days
//             let classString = 'table__cell' // declared classString variable

//             const isToday = new Date().toDateString() === new Date(current.getFullYear(), current.getMonth(), day.value).toDateString() // check if the current date is equal to the value date
//             const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7 // check if the day is a weekend day
//             const isAlternate = week.week % 2 === 0 // check if the week is alternate

//             if (isToday) classString += ' table__cell_today' // concatenate class name if today
//             if (isWeekend) classString += ' table__













// scripts.js

// const MONTHS = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
  
//   const getDaysInMonth = (date) =>
//     new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
//   // Only edit below
  
//   const createArray = (length) => {
//     const result = [];
  
//     for (let i = 0; i < length; i++) {
//       result.push(null);
//     }
  
//     return result;
//   };
  
//   const createData = () => {
//     const current = new Date();
//     current.setDate(1);
  
//     const startDay = current.getDay();
//     const daysInMonth = getDaysInMonth(current);
  
//     const weeks = createArray(5);
//     const days = createArray(7);
//     let result = [];
  
//     for (let weekIndex in weeks) {
//       let value = {
//         week: parseInt(weekIndex) + 1,
//         days: [],
//       };
  
//       for (let dayIndex in days) {
//         let day = parseInt(dayIndex) - startDay + 1;
//         let isValid = day > 0 && day <= daysInMonth;
  
//         value.days.push({
//           dayOfWeek: parseInt(dayIndex) + 1,
//           value: isValid ? day : null,
//         });
//       }
  
//       result.push(value);
//     }
  
//     return result;
//   };
  
//   const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//       <td class="${classString}">
//         ${value}
//       </td>
//       ${existing}`;
  
//     return result;
//   };
  
//   const createHtml = (data) => {
//     let result = '';
  
//     for (let { week, days } of data) {
//       let inner = '';
//       inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);
  
//       for (let { dayOfWeek, value } of days) {
//         let classString = 'table__cell';
//         let isToday = new Date().getDate() === value;
//         let isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
//         let isAlternate = week % 2 === 0;
  
//         if (isToday) classString += ' table__cell_today';
//         if (isWeekend) classString += ' table__cell_weekend';
//         if (isAlternate) classString += ' table__cell_alternate';
  
//         inner = addCell(inner, classString, value || '');
//       }
  
//       result += `<tr>${inner}</tr>`;
//     }
  
//     return result;
//   };
  
//   // Only edit above
  
//   const current = new Date();
//   document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
  
//   const data = createData();
//   document.querySelector('[data-content]').innerHTML = createHtml(data);
  


// scripts.js

// const MONTHS = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
  
//   const getDaysInMonth = (date) =>
//     new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
//   // Only edit below
  
//   const createArray = (length) => {
//     const result = [];
  
//     for (let i = 0; i < length; i++) {
//       result.push(null);
//     }
  
//     return result;
//   };
  
//   const createData = () => {
//     const current = new Date();
//     current.setDate(1);
  
//     const startDay = current.getDay();
//     const daysInMonth = getDaysInMonth(current);
  
//     const weeks = createArray(5);
//     const days = createArray(7);
  
//     let value = null;
//     let result = [];
  
//     for (let weekIndex in weeks) {
//       value = {
//         week: parseInt(weekIndex) + 1,
//         days: [],
//       };
  
//       for (let dayIndex in days) {
//         let day = parseInt(dayIndex) - (startDay + 1);
//         const isValid = (day > 0) && (day <= daysInMonth);
  
//         value.days.push({
//           dayOfWeek: parseInt(dayIndex) + 1,
//           value: isValid ? day : null,
//         });
//       }
  
//       result.push(value);
//     }
  
//     return result;
//   };
  
//   const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//       <td class="${classString}">
//           ${value}
//       </td>
//       ${existing}
//     `;
//     return result;
//   };
  
//   const createHtml = (data) => {
//     let result = "";
  
//     for (let { week, days } of data) {
//       let inner = "";
//       inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);
  
//       for (let { dayOfWeek, value } of days) {
//         let classString = "table__cell";
//         const isToday = new Date().getDate() === value;
//         const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
//         const isAlternate = week % 2;
  
//         if (isToday) classString += " table__cell_today";
//         if (isWeekend) classString += " table__cell_weekend";
//         if (isAlternate) classString += " table__cell_alternate";
  
//         inner = addCell(inner, classString, value);
//       }
  
//       result += `<tr>${inner}</tr>`;
//     }
  
//     return result;
//   };
  
//   // Only edit above
  
//   const current = new Date();
//   document.querySelector("[data-title]").innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
  
//   const data = createData();
//   document.querySelector("[data-content]").innerHTML = createHtml(data);
  










const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
  // Fix 1: Corrected syntax of createArray function
  const createArray = (length) => {
    const result = [];
  
    // Fix 2: Changed the for loop syntax to use proper variable declaration and increment
    for (let i = 0; i < length; i++) {
      result.push(null); // Fix 3: Push null into the result array
    }
  
    return result;
  };
  
  // Fix 4: Added return statement to createData function
  const createData = () => {
    const current = new Date();
    current.setDate(1);
  
    const startDay = current.getDay(); // Fix 5: Changed day to getDay
    const daysInMonth = getDaysInMonth(current);
  
    const weeks = createArray(5);
    const days = createArray(7);
    let value = null;
    const result = [];
  
    for (const weekIndex in weeks) {
      value = {
        week: parseInt(weekIndex) + 1,
        days: [],
      };
  
      for (const dayIndex in days) {
        const day = dayIndex - startDay + 1; // Fix 6: Corrected calculation for day
        const isValid = day > 0 && day <= daysInMonth;
  
        value.days.push({
          dayOfWeek: parseInt(dayIndex) + 1,
          value: isValid ? day : '',
        });
      }
  
      result.push(value); // Fix 7: Push value object into result array
    }
  
    return result;
  };
  
  // Fix 8: Added return statement to addCell function
  const addCell = (existing, classString, value) => {
    return /* html */ `
      <td class="${classString}">
        ${value}
      </td>
      ${existing}
    `;
  };
  
  const createHtml = (data) => {
    let result = '';
  
    for (const { week, days } of data) { // Fix 9: Destructure the data object
      let inner = '';
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`); // Fix 10: Template literal for Week string
  
      for (const { dayOfWeek, value } of days) { // Fix 11: Destructure the days object
        let classString = 'table__cell';
        const isToday = new Date().getDate() === value;
        const isWeekend = dayOfWeek === 1 || dayOfWeek === 7; // Fix 12: Corrected OR operator
        const isAlternate = week % 2 === 0; // Fix 13: Corrected modulo operator
  
        if (isToday) classString = `${classString} table__cell_today`;
        if (isWeekend) classString += ' table__cell_weekend'; // Fix 14: Corrected string concatenation
        if (isAlternate) classString += ' table__cell_alternate'; // Fix 15: Corrected string concatenation
  
        inner = addCell(inner, classString, value);
      }
  
      result += `<tr>${inner}</tr>`; // Fix 16: Concatenate inner to result
    }
  
    return result; // Fix
  
  }


  // Only edit above
  
  const current = new Date();
  document.querySelector("[data-title]").innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
  
  const data = createData();
  document.querySelector("[data-content]").innerHTML = createHtml(data);
  



  