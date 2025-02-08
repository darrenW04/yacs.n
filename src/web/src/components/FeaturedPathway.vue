<template>
    <div class="featured-pathway-container">
      <b-card v-if="featuredPathway" class="featured-card" header="🌟 Featured Pathway">
        <h4 class="text-primary">{{ featuredPathway["Name"][0] }}</h4>
        <p class="pathway-description">{{ featuredPathway.Description || 'No description available.' }}</p>
        <b-button @click="goPage(featuredPathwayName)" variant="success">
          Explore Pathway
        </b-button>
      </b-card>
      <b-button @click="pickFeaturedPathway" variant="warning" class="refresh-button">
        🔄 Refresh Featured Pathway
      </b-button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pathways: Array,
    },
    data() {
      return {
        featuredPathway: null,
      };
    },
    mounted() {
      this.pickFeaturedPathway();
    },
    computed: {
      featuredPathwayName() {
        return this.featuredPathway ? this.featuredPathway["Name"][0] : '';
      }
    },
    methods: {
      pickFeaturedPathway() {
        if (this.pathways.length === 0) return;
        const allPathways = this.pathways.flatMap(category => category.Pathways);
        this.featuredPathway = allPathways[Math.floor(Math.random() * allPathways.length)];
      },
      goPage(pathwayName) {
        this.$router.push(`/explore/${pathwayName}`);
      },
    },
  };
  </script>
  
  <style>
  .featured-pathway-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
  .featured-card {
    width: 80%;
    padding: 15px;
    text-align: center;
  }
  .pathway-description {
    font-size: 1rem;
    color: #555;
  }
  .refresh-button {
    margin-top: 10px;
  }
  </style>
  