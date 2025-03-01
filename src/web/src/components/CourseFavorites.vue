<template>
    <div class="course-favorites-container">
      <h3 class="text-center">⭐ Favorite Courses</h3>
      <b-list-group>
        <b-list-group-item v-for="course in favoriteCourses" :key="course.id" @click="goToCourse(course)" class="course-item">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h5 class="course-title">{{ course.name }}</h5>
              <p class="course-category">Category: {{ course.category || 'Uncategorized' }}</p>
            </div>
            <b-button variant="danger" @click.stop="removeFavorite(course)">Remove</b-button>
          </div>
        </b-list-group-item>
      </b-list-group>
      
      <p v-if="!favoriteCourses.length" class="text-center text-muted">No favorite courses yet.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        favoriteCourses: JSON.parse(localStorage.getItem('favoriteCourses')) || [],
      };
    },
    methods: {
      goToCourse(course) {
        this.$router.push(`/course/${course.id}`);
      },
      removeFavorite(course) {
        this.favoriteCourses = this.favoriteCourses.filter(c => c.id !== course.id);
        localStorage.setItem('favoriteCourses', JSON.stringify(this.favoriteCourses));
      },
    },
  };
  </script>
  
  <style>
  .course-favorites-container {
    margin: 20px 0;
  }
  .course-item {
    cursor: pointer;
    transition: background 0.2s;
  }
  .course-item:hover {
    background: rgba(255, 165, 0, 0.2);
  }
  .course-title {
    font-weight: bold;
  }
  .course-category {
    font-style: italic;
    color: #888;
  }
  </style>
  