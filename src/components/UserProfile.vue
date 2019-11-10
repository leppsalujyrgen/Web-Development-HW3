/*eslint no-unused-vars: "error"*/
<template>
    <section id="main">
        <div class="content">
            <UserInfo :currentUser="currentUser" v-if="toggleActive"></UserInfo>
            <CoursesInfo :currentUser="currentUser" v-else></CoursesInfo>
        </div>
        <div class="controls">
            <button id="profile-button" :class="[toggleActive ? 'pill' : 'pill pill-active']" v-on:focus="'pill-hover'"
                    @click="showProfile">Profile
            </button>
            <button id="courses-button" :class="[toggleActive ? 'pill pill-active' : 'pill']" @click="showCourses">
                Courses
            </button>
        </div>
    </section>
</template>

<script>
    import UserInfo from "./UserInfo";
    import CoursesInfo from "./CoursesInfo";

    export default {
        name: 'UserProfile',
        props: ['currentUser'],

        data: () => {
            return {
                toggleActive: true,
            }
        },

        components: {
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
    }
</script>

<style>
    main {
        position: relative;
        min-height: 100%;
        padding-bottom: 110px;
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

    .controls .pill-active {
        background-color: #CCD1D1;
        border-top: 1px solid #ffffff;
    }

    .controls .pill-hover {
        cursor: pointer;
    }

</style>