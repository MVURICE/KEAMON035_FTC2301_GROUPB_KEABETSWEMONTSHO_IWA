const nickName= "Timmy";
const firstName = "Timothy";
if (nickName) {
    console.log(`Good morning, ${nickName}!`);
  } else if (firstName) {
    console.log(`Good morning, ${firstName}!`);
  } else {
    console.log("Good morning!");
  }

// The reason why the original code did not work as expected is that it used single quotes instead of backticks, which are required to create a template literal. Additionally, the variables were not properly interpolated within the string. Using the ${} syntax allows variables to be inserted into a string.