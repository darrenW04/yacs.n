<template>
    <div class="course-reminder-container">
      <h3 class="text-center">⏰ Set Course Reminder</h3>
      <b-form @submit.prevent="setReminder">
        <b-form-group label="Choose Course:">
          <b-form-select v-model="selectedCourseId" :options="courseOptions" required></b-form-select>
        </b-form-group>
        <b-form-group label="Reminder Date & Time:">
          <b-form-datepicker v-model="reminderDate" required></b-form-datepicker>
          <b-form-timepicker v-model="reminderTime" required></b-form-timepicker>
        </b-form-group>
        <b-button type="submit" variant="warning">Set Reminder</b-button>
      </b-form>
  
      <b-alert variant="success" :show="success" dismissible @dismissed="success = false">
        Reminder has been set!
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
        reminderDate: null,
        reminderTime: null,
        success: false,
      };
    },
    computed: {
      courseOptions() {
        return this.courses.map(course => ({ value: course.id, text: course.name }));
      },
    },
    methods: {
      setReminder() {
        const reminder = {
          courseId: this.selectedCourseId,
          datetime: `${this.reminderDate} ${this.reminderTime}`,
        };
        console.log('Reminder Set:', reminder);
        this.success = true;
      },
    },
  };
  </script>
  
  <style>
  .course-reminder-container {
    max-width: 500px;
    margin: 20px auto;
  }
  </style>
  