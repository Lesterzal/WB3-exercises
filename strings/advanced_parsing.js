function parseAndDisplayName(name) {
  console.log(`Name: ${name}`);
  const words = name.split(' ');
  if (words.length === 1) {
    console.log(`Only name: ${name}`);
  } else if (words.length === 2) {
    console.log(`First name: ${words[0]}\nLast name: ${words[1]}`);
  } else if (words.length === 3) {
    console.log(`First name: ${words[0]}\nLast name: ${words[1]}`);
  } else {
    console.log(`Invalid name: ${name}`);
  }
}

parseAndDisplayName("Johan Liebert");
parseAndDisplayName("Wolfgang Grimmer");
parseAndDisplayName("Kenzo Tenma ");
