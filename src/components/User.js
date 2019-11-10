export class User {
    constructor(firstName, lastName, birthDate, faculty, gpa) {
        this._fullName = firstName + " " + lastName;
        this._coursesList = [];
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = birthDate;
        this._faculty = faculty;
        this._gpa = gpa;
    }


    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get birthDate() {
        return this._birthDate;
    }

    set birthDate(value) {
        this._birthDate = value;
    }

    get faculty() {
        return this._faculty;
    }

    set faculty(value) {
        this._faculty = value;
    }

    get gpa() {
        return this._gpa;
    }

    set gpa(value) {
        this._gpa = value;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    get coursesList() {
        return this._coursesList;
    }

    set coursesList(value) {
        this._coursesList = value;
        this.updateGpa();
    }

    addCourse(course) {
        this._coursesList.push(course);
        this.updateGpa();
    }

    updateGpa() {
        let courses = this.coursesList;

        if (!(courses || courses.length === 0)) {
            this._gpa = 0.0;
            return;
        }

        let pointsSum = 0.0;
        courses.forEach(course => {
            let gradePoints = course.grade;
            if (gradePoints > 90)
                pointsSum += 5;
            else if (gradePoints > 80)
                pointsSum += 3;
            else if (gradePoints > 70)
                pointsSum += 2;
            else if (gradePoints > 60)
                pointsSum += 1;
            else if (gradePoints > 50)
                pointsSum += 0.5;
        });

        this._gpa = Math.round(pointsSum / courses.length * 100) / 100;
    }


}