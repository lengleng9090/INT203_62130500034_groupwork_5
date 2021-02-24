app.component('photo-view',{
    props:{
       hasview:Boolean,
       viewimg:String
    },
    template: `
    <div v-show="hasview" class="grid justify-items-stretch flex flex-col  p-3 m-2" style="background-color:#21211f;">
            <span class="material-icons" style="color: white;" v-on:click="closeView">
              disabled_by_default
              </span>
          <img v-bind:src="viewimg" style="width: 80%;" class="justify-self-center"/>
    </div>
    `,
    data(){
        return {
        }
    },
    methods :{
        closeView(){
            this.$emit('close');
        }
    }
})