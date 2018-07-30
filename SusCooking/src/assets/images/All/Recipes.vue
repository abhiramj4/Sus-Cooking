<template>
    <div id="content" class="main-area">
        <div  class="panel-body" >
            <div class="row" >      
                <div class="col-sm-8">   

                    <nav class="navbar navbar-custom ">
                      <div class="container-fluid">
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                          </button>

                        </div>
                          <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#veg#');">Veg</a></li>
                            </ul>
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#non-veg#');">Non. Veg</a></li>
                            </ul>
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#starters#');">Starters</a></li>
                            </ul>
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="#recipeFilter" @click="getRecipeType('#drinks#');">Drinks</a></li>
                            </ul>
                            <ul class="nav navbar-nav">
                              <li><a class="page-scroll" href="About.html" >About</a></li>
                            </ul>      
                          </div>
                      </div>
                    </nav>

                    <div id="mainReceipe" class="singlePageRecipe">
                        <!-- Your Recipe Title starts  here  -->
            
                       <h1><span style="color: #993366;"><strong>Stir Fried Chicken (Chinese Style)</strong></span></h1>
                        <img src="builds/StirFriedChicken.jpg" class="lazyload" alt="" />
                        <br>
                        <span style="color: #0000ff;"><strong>Ingredients</strong></span>
                        <ul>
                        <li>Boneless chicken breasts cubed 1lb</li>
                        <li>Bell peppers red and green cubed 2 cups</li>
                        <li>Zucchini cubed 2 cups</li>
                        <li>Mushroom chopped 2 cups</li>
                        <li>Scallions chopped 1 tbsp</li>
                        <li>Sesame seeds 1 tbsp</li>
                        <li>Ginger minced 1 tbsp</li>
                        <li>Garlic minced 1 tbsp</li>
                        <li>Roasted cashew nuts 2 tbsp</li>
                        <li>Chili sauce 1 tbsp or as per spice level</li>
                        <li>Soya sauce 1 tbsp</li>
                        <li>Sesame oil 1 tsp</li>
                        <li>Vegetable oil as required</li>
                        </ul>
                        <span style="color: #0000ff;"><strong>Marinade</strong></span>
                        <ul>
                        <li>Soya sauce 1 tbsp</li>
                        <li>Corn starch 1 tbsp</li>
                        <li>Dry Sherry 2 tbsp</li>
                        <li>Sesame oil 1 tsp</li>
                        <li>Salt as required</li>
                        </ul>
                        <span style="color: #0000ff;"><strong>Method</strong></span>
                        <p>In a bowl, whisk all ingredients under marinade. Add chicken to the marinade and set aside for about 30 minutes.</p>
                        <p>In a wok heat sesame oil and add minced ginger garlic and brown them. Add chicken and stir fry till chicken is cooked. Remove chicken and set aside.</p>
                        <p>Clean the wok and heat vegetable oil. Stir fry the vegetables. Start with zucchini followed by mushrooms and then bell peppers. Add salt. When the vegetables are cooked bring back the chicken to the wok. Add soya sauce and chili sauce and stir fry on high heat, roughly about a minute or two.</p>
                        <p>Add cashew nuts and sesame seeds to the chicken. Toss and mix well to finish. Garnish with chopped scallions. Serve with jasmine rice!</p>

                        <span style="color: #0000ff;"><strong>Notes</strong></span>
                        <p>Use less salt than usual, as soya sauce makes food salty.&nbsp;</p>
                        <!-- Your Recipe content ends  here  -->
                        <div style="display: flex;flex-direction: column;align-content: flex-end;">
                            <div class="fb-like" href="http://suscooking.com/StirFriedChicken.html" data-layout="standard" data-action="like" data-size="small"
                                data-show-faces="true" data-share="true"></div>
                            <div class="fb-comments" data-href="http://suscooking.com/StirFriedChicken.html" data-numposts="5"></div>
                        </div>

                    </div>  <!-- End of mainReceipe page -->
                </div>    

                <div class="col-sm-4 columnRecipeCards" >  <!-- columnRecipeCards  style="background-color:#bbb;" -->
                    <div id="recipeList" :class="{ hide: hideRecipeListpanel }">
                        <ul class="cards" >
                            <li v-for="(aReceipe, i) in getLastFewRecipes(allRecipes, 5)" :key="i"  class= "card-item" >
                                <a href="#" @click="redirectURL(`/${aReceipe.recipeImage}`);">
                                    <figure class="card">
                                        <img class="lazyload" :src="require(`/${aReceipe.recipeImage}`)">
                                        <figcaption class="caption">
                                            <h3 class="caption-title" :style = "getFontColor36Px()" >{{aReceipe.recipeName}}</h3>
                                            <p v-html="`${aReceipe.recipeDescShort}`"></p>
                                        </figcaption>
                                    </figure>
                                </a> 
                            </li>
                        </ul>
                    </div>          <!-- recipeList -->
                </div>  
            </div>              <!-- end of row -->   

            <div class="rowRecipeThumpNail" id="recipeFilter" >
                <div v-for="(aReceipe, i) in getRecipesShuffled(allRecipes, 20)" :key="i"  class= "card-item" >
                    <div class="columnRecipeThumpNail">
                        <a href="#" @click="redirectURL(`/${aReceipe.recipeImage}`);">
                            <figure class="card">
                                <img class="img-thumbnail lazyload" :src="require(`/${aReceipe.recipeImage}`)"><br>
                                <div  :style = "getFontColor()" >{{aReceipe.recipeName}}</div>
                            </figure>
                        </a> 
                    </div>
                </div>
            </div>
        </div>          <!-- panel-body -->

      <!-- Start Footer bottom Area -->
        <footer>
          <br><br><br>
          <div class="footer-area-bottom">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="copyright text-center">
                    <p>
                      &copy; Copyright <strong>SusCooking.com</strong>. All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

    </div>      <!-- end of content -->

</template>

<script>
export default {
  name: "Recipes",
  props: ["allRecipes"],
  data() {
    return {
      selectedRecipeName: "",
      selectedRecipeDescShort: "",
      selectedRecipeDescLong: "",
      selectedRecipeImage: "GreekSalad.jpg",
      hideRecipeDetailpanel: true,
      hideRecipeListpanel: false
    }; //return
  }, //Data

  methods: {
    getRecipeType: function (recipeType){
      const input = document.querySelector('#SearchApts')
      input.value = recipeType ;
      const event = new Event('input', {
                        cancelable: true,
                        bubbles: true
                     });
      input.dispatchEvent(event);
    },
    requestDetailRecipe: function(aReceipe) {
      console.log("details Requested" + aReceipe.recipeName);
      this.hideRecipeDetailpanel = false;
      this.hideRecipeListpanel = true;
      this.selectedRecipeName = aReceipe.recipeName;
      this.selectedRecipeDescShort = aReceipe.recipeDescShort;
      this.selectedRecipeDescLong = aReceipe.recipeDescLong;
      this.selectedRecipeImage = aReceipe.recipeImage;
    },
    requestHome: function() {
      this.hideRecipeDetailpanel = true;
      this.hideRecipeListpanel = false;
    },
    redirectURL: function(recipeImage) {
      window.location = recipeImage.replace(".jpg", "") + ".html";
    },
    shuffleArray: function(anArray) {
      for (var i = anArray.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = anArray[randomIndex];

        anArray[randomIndex] = anArray[i];
        anArray[i] = itemAtIndex;
      }

      return anArray;
    },
    getLastFewRecipes: function(allMyRecipes, maxNum) {
      if (allMyRecipes.length < 4) return allMyRecipes;

      var myNewRecipes = allMyRecipes.reverse();
      return myNewRecipes.slice(0, maxNum);
    },
    getRecipesShuffled: function(allMyRecipes, maxNum) {
      if (allMyRecipes.length < 4) return allMyRecipes;

      if (maxNum == "ALL") {
        maxNum = allMyRecipes.length;
      }

      var recipeScrampleArray = this.shuffleArray (allMyRecipes);

      return recipeScrampleArray.slice(0, maxNum);
    },
    getFontColor: function() {
      var colorArray = [
        "#42b983",
        "#0000FF",
        "#800000",
        "#d84194",
        "#4897cc",
        "#53cc48",
        "#dda652",
        "#db6f31",
        "#7951e6"
      ];
      var random = colorArray[Math.floor(Math.random() * colorArray.length)];
      //console.log("color: " + colorArray[random]);
      return " color: " + random;
    },
    getFontColor36Px: function() {
      var colorArray = [
        "#42b983",
        "#0000FF",
        "#800000",
        "#d84194",
        "#4897cc",
        "#53cc48",
        "#dda652",
        "#db6f31",
        "#7951e6"
      ];
      var random = colorArray[Math.floor(Math.random() * colorArray.length)];
      //console.log("color: " + colorArray[random]);
      return "font-weight: bold;font-size: 24px; color: " + random;
    }
  } // methods
};
</script>

<style>
#box {
  background-color: white;
  max-width: 300px;
  height: 224px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.portfolio-image {
  height: 224px;
  width: 300px;
  /*width: 531px;
  height: 397px; */
}

.border {
  border-color: grey;
  border-width: 5px;
  border-style: solid;
}

.gutter {
  margin-bottom: 30px;
}
</style>