const fs = require("fs");

let statuses = ["Inactive", "Pending", "Blacklisted", "Active"];
let organizations = ["Lendsqr", "Irorun", "Lendstar", "Lendspr"];
let usernames = ["Timothy", "James", "Lola", "Victor", "Grace"];
let emails = [
  "userA@example.com",
  "userB@example.com",
  "userC@example.com",
  "userD@example.com",
  "userE@example.com",
];
let phoneNumbers = [
  "08012345678",
  "08023456789",
  "08034567890",
  "08045678901",
  "08056789012",
];
let randomDate = function () {
  let start = new Date(2020, 0, 1);
  let end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
let formatDate = function (date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};
let generateRandomData = function (num) {
  let data = [];
  for (let i = 1; i <= num; i++) {
    let dateJoined = randomDate();
    data.push({
      id: i,
      organization:
        organizations[Math.floor(Math.random() * organizations.length)],
      Username: usernames[Math.floor(Math.random() * usernames.length)],
      Email: emails[Math.floor(Math.random() * emails.length)],
      Phone_number:
        phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)],
      Date_joined: formatDate(dateJoined),
      Status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return data;
};
let randomData = generateRandomData(500);

fs.writeFileSync(
  "randomData.json",
  JSON.stringify(randomData, null, 2),
  "utf-8"
);

// console.log(randomData);
