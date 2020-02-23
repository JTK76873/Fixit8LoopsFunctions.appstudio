names = prompt("Enter an array of names (Use space to seperate names): ")

namesArray = names.split(" ")

for (i = names.length - 1; i >= 0; i--) {
  console.log(namesArray[i])
  }
  