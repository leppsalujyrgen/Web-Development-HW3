<template>
    <main id="app">
        <header>
            <strong>Welcome to your dashboard!</strong>
        </header>
        <section id="container">
            <section id="main">
                <div class="content">
                    <UserInfo :currentUser="currentUser" v-if="toggleActive"></UserInfo>
                    <CoursesInfo :coursesList="currentUser.coursesList" :currentUser="currentUser" v-else></CoursesInfo>
                </div>
                <div class="controls">
                    <button id="profile-button" :class="[toggleActive ? 'pill' : 'pill pill.active']" @click="showProfile">Profile</button>
                    <button id="courses-button" :class="[toggleActive ? 'pill pill.active' : 'pill']" @click="showCourses">Courses</button>
                </div>
            </section>
        </section>
        <FooterInfo/>
    </main>
</template>

<script>
    import UserInfo from "./components/UserInfo";
    import {User} from "./components/User"
    import CoursesInfo from "./components/CoursesInfo";
    import {Course} from "./components/Course"
    import FooterInfo from "./components/FooterInfo";

    export default {
        name: 'app',

        data: () => {
            return {
                coursesList: [
                    new Course("Agile software development", 1, 82),
                    new Course("System modelling", 1, 85),
                    new Course("Object-oriented programming", 2, 99),
                    new Course("Estonian Language Level A2", 2, 65)
                ],
                currentUser: new User("John", "Doe", "11/10/1990", "Software engineering", "2.7"),
                toggleActive: true,
            }
        },

        components: {
            FooterInfo,
            CoursesInfo,
            UserInfo
        },

        methods: {
            showProfile: function () {
                this.toggleActive = true;
            },

            showCourses: function () {
                this.toggleActive = false;
            }
        },

        created() {
            this.currentUser.coursesList = this.coursesList;
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
        font-family: 'Livvic', sans-serif;
    }

    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: #eaeaea;
    }

    main {
        position: relative;
        min-height: 100%;
        padding-bottom: 110px;
    }

    header {
        padding: 20px;
        background-color: #2196F3;
        color: #ffffff;
        text-align: center;
        margin-bottom: 10px;
        height: 60px;
    }



    #container {
        width: 80%;
        max-width: 900px;
        min-width: 320px;
        padding: 15px;
        background-color: #ffffff;
        margin: 0 auto;
    }

    .content {
        padding: 10px;
        border: 1px solid #cbcbcb;
    }

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

    .controls .pill {
        border: 1px solid #cbcbcb;
        background-color: #eaeaea;
        padding: 10px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top: none;
        margin-top: -1px;
        outline: none !important;
    }

    .controls .pill.active {
        background-color: #ffffff;
        border-top: 1px solid #ffffff;
        padding: 10px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top: none;
        margin-top: -1px;
        outline: none !important;
    }

    .controls .pill:hover {
        cursor: pointer;
    }

</style>
