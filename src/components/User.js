export class User {
    constructor(firstName, lastName, birthDate, faculty, gpa) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        this.birthDate = birthDate;
        this.faculty = faculty;
        this.gpa = gpa;
    }
}