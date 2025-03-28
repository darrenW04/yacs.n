<template>
  <div class="course-rating-container">
    <h3 class="text-center">⭐ Rate a Course</h3>
    <b-form @submit.prevent="submitRating">
      <b-form-group label="Select Course:">
        <b-form-select v-model="selectedCourseId" :options="courseOptions" required></b-form-select>
      </b-form-group>
      <b-form-group label="Your Rating:">
        <b-form-rating v-model="ratingValue" stars="5" variant="warning" required></b-form-rating>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit Rating</b-button>
    </b-form>

    <b-alert variant="success" :show="showSuccess" dismissible @dismissed="showSuccess = false">
      Rating submitted successfully!
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
      ratingValue: null,
      showSuccess: false,
    };
  },
  computed: {
    courseOptions() {
      return this.courses.map(course => ({ value: course.id, text: course.name }));
    },
  },
  methods: {
    submitRating() {
      console.log(`Rating for course ${this.selectedCourseId}: ${this.ratingValue} stars`);
      this.showSuccess = true;
      this.selectedCourseId = null;
      this.ratingValue = null;
    },
  },
};
</script>

<style>
.course-rating-container {
  max-width: 500px;
  margin: 20px auto;
}
</style>
