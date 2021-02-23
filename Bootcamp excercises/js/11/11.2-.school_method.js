const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    { id: 10, name: "Jennifer", age: 20 },
    { id: 11, name: "Howard", age: 23 },
    { id: 12, name: "Old-Timmy", age: 86 },
    { id: 13, name: "Houston", age: 21 },
  ],
};

// Take the school object and create the following methods to that object:
// 1. A method called “findPerson” that takes two arguments, a type (either a student or teacher), and an id.It will return a particular object of that person.
//

school.findPerson = (person, id) =>
  school[person].find((item) => item.id === id);

// 2. A method called “assignStudent” that takes two arguments, a student’s id and a subject.Assign all of the students to the first available teacher who teaches that subject and who is not in full capacity. If all of the teachers are in full capacity log to the console “Sorry, no available teachers left”.
//

school.assignStudent = (id, subject) => {
  const student = school.findPerson("students", id);
  const teacher = school.teachers.find(
    (teacher) => teacher.subjects.includes(subject) && teacher.capacityLeft
  );

  if (teacher) {
    teacher.capacityLeft--;
    teacher.students.push(student);
    return teacher;
  } else {
    return "No teachers available";
  }
};

// 3. A method called “assignTeachersSubject” that takes two arguments, the teacher’s id, a new subject.Assign the new subject to that particular teacher if that subject doesn’t exist in their array of subjects4. Create a new method of anything you want.

school.assignTeachersSubject = (teacherId, newSub) => {
  const teacher = school.findPerson("teachers", teacherId);
  if (!teacher.subjects.includes(newSub)) {
    teacher.subjects.push(newSub);
    return teacher;
  } else {
    return "Subject already assigned to this teacher";
  }
};
