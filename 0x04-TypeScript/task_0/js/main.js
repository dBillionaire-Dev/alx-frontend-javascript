// main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 24,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
table.border = "1";
table.style.borderCollapse = "collapse";
table.style.marginTop = "20px";

// Create header row
const headerRow = table.insertRow();
const firstNameHeader = headerRow.insertCell();
firstNameHeader.textContent = "First Name";
const locationHeader = headerRow.insertCell();
locationHeader.textContent = "Location";

// Add student rows
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append to body
document.body.appendChild(table);

