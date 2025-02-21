<template>
  <div class="course-category-filter-container">
    <h3 class="text-center">📂 Filter by Category</h3>
    <b-form-group label="Select a Category:" class="category-select">
      <b-form-select v-model="selectedCategory" :options="categoryOptions" @change="filterCourses"></b-form-select>
    </b-form-group>
    
    <b-list-group v-if="filteredCourses.length">
      <b-list-group-item v-for="course in filteredCourses" :key="course.id" @click="goToCourse(course)" class="course-item">
        <h5 class="course-title">{{ course.name }}</h5>
        <p class="course-description">{{ course.description || 'No description available.' }}</p>
      </b-list-group-item>
    </b-list-group>
    
    <p v-else class="text-center text-muted">No courses found in this category.</p>
  </div>
</template>

<script>
export default {
  props: {
    courses: Array,
  },
  data() {
    return {
      selectedCategory: null,
      filteredCourses: [],
    };
  },
  computed: {
    categoryOptions() {
      const categories = [...new Set(this.courses.map(course => course.category))];
      return [{ value: null, text: 'All Categories' }, ...categories.map(cat => ({ value: cat, text: cat }))];
    },
  },
  methods: {
    filterCourses() {
      if (!this.selectedCategory) {
        this.filteredCourses = this.courses;
      } else {
        this.filteredCourses = this.courses.filter(course => course.category === this.selectedCategory);
      }
    },
    goToCourse(course) {
      this.$router.push(`/course/${course.id}`);
    },
  },
  mounted() {
    this.filterCourses();
  },
};
</script>

<style>
.course-category-filter-container {
  margin: 20px 0;
}
.category-select {
  max-width: 300px;
  margin: 0 auto 20px;
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
