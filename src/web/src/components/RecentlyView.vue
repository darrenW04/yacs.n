<template>
    <div class="recently-viewed-container">
      <h3 class="text-center">🕒 Recently Viewed Courses</h3>
      <b-list-group>
        <b-list-group-item v-for="course in recentlyViewed" :key="course.id" @click="goToCourse(course)" class="course-item">
          <h5 class="course-title">{{ course.name }}</h5>
          <p class="course-timestamp">Viewed: {{ formatTimestamp(course.timestamp) }}</p>
        </b-list-group-item>
      </b-list-group>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recentlyViewed: JSON.parse(localStorage.getItem('recentCourses')) || [],
      };
    },
    methods: {
      goToCourse(course) {
        this.$router.push(`/course/${course.id}`);
      },
      formatTimestamp(timestamp) {
        return new Date(timestamp).toLocaleString();
      },
    },
    watch: {
      '$route'() {
        const course = this.$route.params;
        if (course.id) {
          this.recentlyViewed = [course, ...this.recentlyViewed.filter(c => c.id !== course.id)].slice(0, 5);
          localStorage.setItem('recentCourses', JSON.stringify(this.recentlyViewed));
        }
      },
    },
  };
  </script>
  
  <style>
  .recently-viewed-container {
    margin: 20px 0;
    text-align: center;
  }
  .course-item {
    cursor: pointer;
    transition: background 0.2s;
  }
  .course-item:hover {
    background: rgba(0, 123, 255, 0.2);
  }
  .course-title {
    font-weight: bold;
  }
  .course-timestamp {
    color: #666;
    font-size: 0.9em;
  }
  </style>
  