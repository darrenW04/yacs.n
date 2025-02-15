<template>
  <div class="course-search-container">
    <b-input-group class="mb-3">
      <b-form-input v-model="searchQuery" placeholder="🔍 Search for a course..." @input="filterCourses"></b-form-input>
      <b-input-group-append>
        <b-button variant="primary" @click="filterCourses">Search</b-button>
      </b-input-group-append>
    </b-input-group>
    
    <b-list-group v-if="filteredCourses.length">
      <b-list-group-item v-for="course in filteredCourses" :key="course.id" @click="goToCourse(course)" class="course-item">
        <h5 class="course-title">{{ course.name }}</h5>
        <p class="course-description">{{ course.description || 'No description available.' }}</p>
      </b-list-group-item>
    </b-list-group>
    
    <p v-else class="text-center text-muted">No courses found.</p>
  </div>
</template>

<script>
export default {
  props: {
    courses: Array,
  },
  data() {
    return {
      searchQuery: '',
      filteredCourses: [],
    };
  },
  methods: {
    filterCourses() {
      this.filteredCourses = this.courses.filter(course =>
        course.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    goToCourse(course) {
      this.$router.push(`/course/${course.id}`);
    },
  },
};
</script>

<style>
.course-search-container {
  margin: 20px 0;
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
.course-description {
  color: #666;
  font-size: 0.9em;
}
</style>
