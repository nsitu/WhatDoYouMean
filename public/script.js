
const app = Vue.createApp({ 
    data(){
        return {  
            word: null,
            results: null,
            loading: false,
            notice: "Search the OED.",
            audioPlayers:[]
        }
    },
    methods:{       
        search(){
          /* reset data for a new search */  
          this.results = null
          this.notice = null
          this.audioPlayers=[]
          /* search for a definition */
          if (this.word){
            this.loading = true
            axios.get('/search/'+this.word)
              .then(response => {
                  if (response.data.error){ 
                    this.notice = "Word Not Found." 
                  }
                  else{  
                    this.results = response.data.results
                  }
                  this.loading = false
              })
              .catch(error => { 
                this.notice = "Oops, that didn't work." 
                this.loading = false
              });
          }
          /* Give useful feedback if the form is blank. */
          else{
            this.notice = "Please enter a word.";
          }
        },
        audioPlayer(element) {
          this.audioPlayers.push(element)
        }
    },  
    watch: {
      results: { 
        handler(){  
            this.audioPlayers.forEach( (audioPlayer) => {
              if (audioPlayer != null ) audioPlayer.load() 
            })
        }
      }
    }
}).mount('#app')