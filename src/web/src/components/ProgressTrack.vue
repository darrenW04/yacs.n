<template>
    <div class="course-progress-container">
      <h3 class="text-center">📊 Your Course Progress</h3>
      <b-list-group>
        <b-list-group-item v-for="course in progressCourses" :key="course.id" class="course-item">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h5 class="course-title">{{ course.name }}</h5>
              <p class="progress-text">{{ course.progress }}% Completed</p>
            </div>
            <b-progress :value="course.progress" :max="100" show-progress animated></b-progress>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      courses: Array,
    },
    computed: {
      progressCourses() {
        return this.courses.filter(course => course.progress !== undefined);
      },
    },
  };
  </script>
  
  <style>
  .course-progress-container {
    margin: 20px 0;
    text-align: center;
  }
  .course-item {
    padding: 15px;
    transition: background 0.2s;
  }
  .course-item:hover {
    background: rgba(0, 123, 255, 0.2);
  }
  .course-title {
    font-weight: bold;
  }
  .progress-text {
    font-size: 0.9em;
    color: #666;
  }
  </style>
  