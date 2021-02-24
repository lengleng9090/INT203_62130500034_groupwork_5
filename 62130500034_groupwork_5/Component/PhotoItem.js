app.component('photo-item',{
    props:{
        picture: {
        type: Array
       }
    },
    template: `
    <div class="row">
    <div class="col-md-4" v-for="(pic,index) in picture">
      <div class="content">
        <a class="space-x-4" @dblclick="toggleView(index)">
          <img class="content-image" v-bind:src="pic.url">
        </a>
        <div class="content-details fadeIn-bottom">
          <div>
            <h3 class="content-title inline-block">{{pic.title}} </h3>
            <img class="inline-block ml-3" style="margin-top: -5px;" v-show="pic.like" height="30"
              width="30" src="./images/like.png" />
            <button v-on:click="toggleLike(index)"
              class="inline-block float-right m-1 w-16 h-8 rounded-md bg-blue-400 text-white text-md hover:shadow hover:bg-blue-600">Like</button>
          </div>
          <p class="content-text"><i class="fa fa-map-marker"></i> {{pic.country}}</p>
        </div>
      </div>
    </div>
    </div>
    `,
    data(){
        return {
            filterResult:null,
            resultNull: false
        }
    },
    methods :{
        toggleLike(index){
            this.picture[index].like = !this.picture[index].like
        },
        toggleView(index){
           this.$emit('viewing',index);
        }
    }
})