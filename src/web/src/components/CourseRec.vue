<template>
    <div class="course-recommendation-container">
      <b-card v-if="recommendedCourse" class="course-card" header="🎯 Recommended Course">
        <h4 class="text-primary">{{ recommendedCourse.name }}</h4>
        <p class="course-description">{{ recommendedCourse.description || 'No description available.' }}</p>
        <b-button @click="goToCourse(recommendedCourse)" variant="success">
          View Course
        </b-button>
      </b-card>
      <b-button @click="recommendCourse" variant="info" class="recommend-button">
        🔄 Get New Recommendation
      </b-button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      courses: Array,
    },
    data() {
      return {
        recommendedCourse: null,
      };
    },
    mounted() {
      this.recommendCourse();
    },
    methods: {
      recommendCourse() {
        if (this.courses.length === 0) return;
        this.recommendedCourse = this.courses[Math.floor(Math.random() * this.courses.length)];
      },
      goToCourse(course) {
        this.$router.push(`/course/${course.id}`);
      },
    },
  };
  </script>
  
  <style>
  .course-recommendation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
  .course-card {
    width: 80%;
    padding: 15px;
    text-align: center;
  }
  .course-description {
    font-size: 1rem;
    color: #555;
  }
  .recommend-button {
    margin-top: 10px;
  }
  </style>
  