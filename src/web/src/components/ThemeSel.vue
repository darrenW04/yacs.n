<template>
    <div class="theme-selector-container">
      <h4>🎨 Theme Selector</h4>
      <b-form-group label="Choose Theme:">
        <b-form-radio-group v-model="selectedTheme" :options="themeOptions" @change="applyTheme">
        </b-form-radio-group>
      </b-form-group>
      <b-alert variant="success" :show="themeSaved" dismissible @dismissed="themeSaved = false">
        Theme applied!
      </b-alert>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTheme: localStorage.getItem('selectedTheme') || 'light',
        themeSaved: false,
        themeOptions: [
          { value: 'light', text: 'Light' },
          { value: 'dark', text: 'Dark' },
          { value: 'blue', text: 'Blue' },
        ],
      };
    },
    methods: {
      applyTheme() {
        document.body.className = '';
        document.body.classList.add(`theme-${this.selectedTheme}`);
        localStorage.setItem('selectedTheme', this.selectedTheme);
        this.themeSaved = true;
      },
    },
    mounted() {
      this.applyTheme();
    },
  };
  </script>
  
  <style>
  .theme-selector-container {
    max-width: 400px;
    margin: 20px auto;
  }
  </style>
  