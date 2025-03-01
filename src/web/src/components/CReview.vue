<template>
    <div class="course-reviews-container">
      <h3 class="text-center">📝 Course Reviews</h3>
      <b-list-group>
        <b-list-group-item v-for="review in courseReviews" :key="review.id" class="review-item">
          <h5 class="review-course">{{ review.courseName }}</h5>
          <p class="review-text">"{{ review.text }}"</p>
          <p class="review-author">- {{ review.author }}</p>
        </b-list-group-item>
      </b-list-group>
      
      <b-form @submit.prevent="addReview">
        <b-form-group label="Add a Review:">
          <b-form-input v-model="newReview.text" placeholder="Write your review..." required></b-form-input>
        </b-form-group>
        <b-form-group label="Your Name:">
          <b-form-input v-model="newReview.author" placeholder="Your name..." required></b-form-input>
        </b-form-group>
        <b-form-group label="Course:">
          <b-form-select v-model="newReview.courseName" :options="courseOptions" required></b-form-select>
        </b-form-group>
        <b-button type="submit" variant="success">Submit Review</b-button>
      </b-form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      courses: Array,
    },
    data() {
      return {
        courseReviews: JSON.parse(localStorage.getItem('courseReviews')) || [],
        newReview: { text: '', author: '', courseName: '' },
      };
    },
    computed: {
      courseOptions() {
        return this.courses.map(course => ({ value: course.name, text: course.name }));
      },
    },
    methods: {
      addReview() {
        this.courseReviews.push({ ...this.newReview, id: Date.now() });
        localStorage.setItem('courseReviews', JSON.stringify(this.courseReviews));
        this.newReview = { text: '', author: '', courseName: '' };
      },
    },
  };
  </script>
  
  <style>
  .course-reviews-container {
    margin: 20px 0;
  }
  .review-item {
    padding: 15px;
    transition: background 0.2s;
  }
  .review-item:hover {
    background: rgba(0, 123, 255, 0.2);
  }
  .review-course {
    font-weight: bold;
  }
  .review-author {
    font-style: italic;
    color: #666;
  }
  .review-text {
    font-size: 1rem;
    color: #333;
  }
  </style>
  