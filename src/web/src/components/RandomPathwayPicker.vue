<template>
    <div class="random-pathway-container">
      <b-button @click="pickRandomPathway" variant="primary" class="random-button">
        🎲 Random Pathway
      </b-button>
  
      <b-modal v-model="showModal" title="Random Pathway" hide-footer>
        <div v-if="randomPathway">
          <h4 class="text-primary">{{ randomPathway["Name"][0] }}</h4>
          <ul>
            <li v-for="course in randomPathway.Courses" :key="course" @click="goPage(course)" class="courseInPath">
              {{ course }}
            </li>
          </ul>
        </div>
        <div v-else>
          <p>No pathways available.</p>
        </div>
      </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pathways: Array,
    },
    data() {
      return {
        showModal: false,
        randomPathway: null,
      };
    },
    methods: {
      pickRandomPathway() {
        if (this.pathways.length === 0) return;
        const allPathways = this.pathways.flatMap(category => category.Pathways);
        this.randomPathway = allPathways[Math.floor(Math.random() * allPathways.length)];
        this.showModal = true;
      },
      goPage(course) {
        this.$router.push(`/explore/${course}`);
      },
    },
  };
  </script>
  
  <style>
  .random-pathway-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .random-button {
    font-size: 1.2em;
    padding: 10px 20px;
  }
  .courseInPath {
    cursor: pointer;
    list-style: none;
    padding: 5px;
  }
  .courseInPath:hover {
    background-color: rgba(39, 130, 230, 0.5);
  }
  </style>
  