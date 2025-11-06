// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students using the Student interface
const student1: Student = {
  firstName: "Hopewell",
  lastName: "Olaoluwa",
  age: 24,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Mary",
  lastName: "Okafor",
  age: 22,
  location: "Abuja",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement("table");

// Optional: add basic styling
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.style.width = "60%";
table.style.margin = "20px auto";
table.style.textAlign = "left";

// Create table header row
const headerRow: HTMLTableRowElement = document.createElement("tr");
const headerFirstName: HTMLTableCellElement = document.createElement("th");
const headerLocation: HTMLTableCellElement = document.createElement("th");

headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";

headerFirstName.style.border = "1px solid black";
headerLocation.style.border = "1px solid black";
headerFirstName.style.padding = "8px";
headerLocation.style.padding = "8px";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Loop through studentsList and append rows dynamically
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  firstNameCell.style.border = "1px solid black";
  locationCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
