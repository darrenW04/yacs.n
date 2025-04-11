<template>
    <div class="profile-edit-container">
      <h3 class="text-center">👤 Edit Profile</h3>
      <b-form @submit.prevent="saveProfile">
        <b-form-group label="Name:">
          <b-form-input v-model="user.name" required></b-form-input>
        </b-form-group>
        <b-form-group label="Email:">
          <b-form-input v-model="user.email" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group label="Major:">
          <b-form-input v-model="user.major"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save Changes</b-button>
      </b-form>
  
      <b-alert variant="success" :show="saved" dismissible @dismissed="saved = false">
        Profile updated successfully!
      </b-alert>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: JSON.parse(localStorage.getItem('userProfile')) || {
          name: '',
          email: '',
          major: '',
        },
        saved: false,
      };
    },
    methods: {
      saveProfile() {
        localStorage.setItem('userProfile', JSON.stringify(this.user));
        this.saved = true;
      },
    },
  };
  </script>
  
  <style>
  .profile-edit-container {
    max-width: 500px;
    margin: 20px auto;
  }
  </style>
  