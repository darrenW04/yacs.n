<template>
    <div class="profile-bio-container">
      <h4>✍️ Edit Bio</h4>
      <b-form-textarea
        v-model="bio"
        placeholder="Write something about yourself..."
        rows="4"
        max-rows="6"
      ></b-form-textarea>
      <b-button class="mt-2" variant="primary" @click="saveBio">Save Bio</b-button>
  
      <b-alert variant="success" :show="saved" dismissible @dismissed="saved = false">
        Bio saved successfully!
      </b-alert>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bio: localStorage.getItem('userBio') || '',
        saved: false,
      };
    },
    methods: {
      saveBio() {
        localStorage.setItem('userBio', this.bio);
        this.saved = true;
      },
    },
  };
  </script>
  
  <style>
  .profile-bio-container {
    max-width: 500px;
    margin: 20px auto;
  }
  </style>
  