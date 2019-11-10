<template>
    <div id="courses-container" class="tab">
        <h1 class="title">Courses</h1>
        <table id="courses">
            <thead>
            <tr>
                <th>#</th>
                <th>Course Title</th>
                <th>Semester</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="course in coursesList" v-bind:key="course">
                <td>{{coursesList.indexOf(course)+1}}</td>
                <td>{{course.title}}</td>
                <td>{{course.semester}}</td>
                <td>{{course.grade}}</td>
            </tr>
            </tbody>
        </table>
        <br>
        <br>
        <div>
            <button id="add-course-button" class="blue-button" v-on:click="toggleNewCourseForm">+</button>
            <span id="add-course" v-bind:class="{ hide: !addCourseFormActive }">
                                <input class="input" type="text" placeholder="Course title" id="title" v-model="newCourseForm.title">
                                <input class="input" type="number" min="1" max="8" placeholder="Semester" id="semester" v-model="newCourseForm.semester">
                                <input class="input" type="number" min="0" max="100" placeholder="Grade" id="grade" v-model="newCourseForm.grade">
                                <button class="green-button" id="save-course" v-on:click="addNewCourse">Save</button>
                                <button class="grey-button" id="cancel-course" v-on:click="clearNewCourseForm">Cancel</button>
                            </span>
        </div>
    </div>
</template>

<script>
    import {Course} from "./Course"
    export default {
        name: "CoursesInfo",
        props: ['coursesList', 'currentUser'],

        data: () => {
            return {
                newCourseForm: {
                    title: "",
                    semester: "",
                    grade: ""
                },
                addCourseFormActive: false,
            }
        },

        methods: {
            toggleNewCourseForm: function () {
                this.addCourseFormActive = !this.addCourseFormActive;
            },

            addNewCourse: function () {
                this.currentUser.addCourse(new Course(this.newCourseForm.title, this.newCourseForm.semester, this.newCourseForm.grade));
                this.clearNewCourseForm();
            },

            clearNewCourseForm: function () {
                this.newCourseForm.title = "";
                this.newCourseForm.semester = "";
                this.newCourseForm.grade = "";
                this.toggleNewCourseForm();
            }
        }
    }


</script>

<style scoped>

    table {
        width: 100%;
        border-collapse: collapse;

    }

    table th {
        padding: 8px 12px;
        text-align: left;
        border: 1px solid #cbcbcb;
        background-color: #03A9F4;
        color: #ffffff;
    }

    table td {
        padding: 8px 12px;
        border: 1px solid #cbcbcb;
    }

    .blue-button {
        background-color: #2196F3;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
    }

    .green-button {
        background-color: #69f378;
        color: #ffffff;
        border: none;
        padding: 10px 10px;
    }

    .grey-button {
        background-color: #e1e8e6;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
    }

    .input {
        border: 1px solid #cccccc;
        padding: 10px 20px;
        min-width: 135px;
    }

    .hide {
        display: none;
    }

</style>