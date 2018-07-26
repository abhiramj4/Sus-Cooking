<template>
    <div class="row toolbar">
      <div align="left" class="col-sm-6"><h1>Sus Cooking</h1></div>
      <div align="right" class="col-sm-6">
        <search-recipes @searchRecords='searchRecipe' />
      </div>
    </div> <!--row -->
</template>

<script>
  import SearchRecipe from "./SearchRecipe.vue";
  export default {
    name: "ToolBar",
    components: {
      "search-recipes": SearchRecipe
    },
    methods : {
      searchRecipe: function(terms) {
        //this.searchTerms = terms;
        this.$emit('searchRecords', terms);
      } //searchRecipe
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  h1 { color: ivory; 
      /*font-family: "Great Vibes", 
      cursive;*/
      font-family:"Righteous", cursive;
      font-size: 40px; 
      line-height: 10px; 
      font-weight: bold; 
      margin-bottom: 20px; 
      margin-top: 10px; 
      margin-left: 20px;
      text-align: left; 
      text-shadow: 0 1px 1px rgb(11, 12, 11);
 }

 .toolbar {
   /*margin-bottom: 20px; */
   background:rgb(3, 3, 3)  ;
   padding:15px;
 }
</style>