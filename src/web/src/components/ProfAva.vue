<template>
  <div class="profile-avatar-container text-center">
    <h4>🖼️ Profile Avatar</h4>
    <b-avatar :src="avatarUrl" size="6rem" class="mb-2"></b-avatar>
    <b-form-file @change="handleFileChange" accept="image/*" browse-text="Upload Avatar"></b-form-file>
    <b-alert variant="success" :show="uploadSuccess" dismissible @dismissed="uploadSuccess = false">
      Avatar updated!
    </b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl: localStorage.getItem('userAvatar') || '',
      uploadSuccess: false,
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.avatarUrl = e.target.result;
          localStorage.setItem('userAvatar', this.avatarUrl);
          this.uploadSuccess = true;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style>
.profile-avatar-container {
  margin: 30px auto;
  max-width: 300px;
}
</style>
