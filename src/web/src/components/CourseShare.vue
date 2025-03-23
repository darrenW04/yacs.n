<template>
    <div class="course-share-container">
      <h3 class="text-center">🔗 Share a Course</h3>
      <b-form @submit.prevent="shareCourse">
        <b-form-group label="Select Course:">
          <b-form-select v-model="selectedCourseId" :options="courseOptions" required></b-form-select>
        </b-form-group>
        <b-form-group label="Enter Friend's Email:">
          <b-form-input v-model="email" type="email" placeholder="friend@example.com" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Share Course</b-button>
      </b-form>
  
      <b-alert variant="success" :show="showSuccess" dismissible @dismissed="showSuccess = false">
        Course link shared successfully!
      </b-alert>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      courses: Array,
    },
    data() {
      return {
        selectedCourseId: null,
        email: '',
        showSuccess: false,
      };
    },
    computed: {
      courseOptions() {
        return this.courses.map(course => ({ value: course.id, text: course.name }));
      },
    },
    methods: {
      shareCourse() {
        const course = this.courses.find(c => c.id === this.selectedCourseId);
        const link = `${window.location.origin}/course/${course.id}`;
        console.log(`Sharing course link: ${link} to ${this.email}`);
        this.showSuccess = true;
        this.email = '';
        this.selectedCourseId = null;
      },
    },
  };
  </script>
  
  <style>
  .course-share-container {
    margin: 20px 0;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
  