app.component('photo-search',{
    props:{inputSearch:String},
    emits:['update:inputSearch'],
    template: `
    <button v-on:click="toggleSearch" v-show="!useSearch" class="inline-block float-right pt-5 pr-5">
      <span class="material-icons">
        search
      </span>
    </button>

    <div v-show="useSearch" class="inline-block float-right pt-5 pr-5">
      <input :value="inputSearch" @input="$emit('update:inputSearch',$event.target.value)"  placeholder="search something ...">
      <button v-on:click="toggleSearch" class="btn btn-danger btn-sm ml-2">cancel</button>
    </div>
    <p v-show="useSearch">Search result : {{inputSearch}}</p>
    `,
    data(){
        return {
            useSearch : false
        }
    },
    methods :{
        toggleSearch(){
            this.useSearch = !this.useSearch
        }

    }
})