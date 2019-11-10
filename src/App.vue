<template>
    <main id="app">
        <HeaderInfo :titleText="titleText"></HeaderInfo>
        <section id="container">
            <UserProfile :currentUser="currentUser"></UserProfile>
        </section>
        <FooterInfo/>
    </main>
</template>

<script>
    import FooterInfo from "./components/FooterInfo";
    import HeaderInfo from "./components/HeaderInfo";
    import UserProfile from "./components/UserProfile";
    import {Course} from "./components/Course"
    import {User} from "./components/User"

    export default {
        name: 'app',

        components: {
            HeaderInfo, FooterInfo, UserProfile
        },

        data: () => {
            return {
                coursesList: [
                    new Course("Agile software development", 1, 82),
                    new Course("System modelling", 1, 85),
                    new Course("Object-oriented programming", 2, 99),
                    new Course("Estonian Language Level A2", 2, 65)
                ],
                currentUser: new User("John", "Doe", "11/10/1990", "Software engineering", "2.7"),

                titleText: "Welcome to your dashboard!"
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
</style>
