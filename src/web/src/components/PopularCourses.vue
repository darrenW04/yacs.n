<template>
  <div class="popular-courses-container">
    <h3 class="text-center">🔥 Popular Courses</h3>
    <b-list-group>
      <b-list-group-item v-for="course in popularCourses" :key="course.id" @click="goToCourse(course)" class="course-item">
        <h5 class="course-title">{{ course.name }}</h5>
        <p class="course-enrollment">Enrolled: {{ course.enrolled }} students</p>
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
    popularCourses() {
      return [...this.courses].sort((a, b) => b.enrolled - a.enrolled).slice(0, 5);
    },
  },
  methods: {
    goToCourse(course) {
      this.$router.push(`/course/${course.id}`);
    },
  },
};
</script>

<style>
.popular-courses-container {
  margin: 20px 0;
  text-align: center;
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
.course-enrollment {
  color: #666;
}
</style>
