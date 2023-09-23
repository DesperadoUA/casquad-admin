import axios from 'axios'
import config from '~/DAL/config'
export default {
    methods: {
        async selectFile(index){
            const file = this.$refs[this.action_key][index].files[0]
            if(file) {
                const reader = new FileReader();
                reader.onloadend = async () => {
                  const user = this.$store.getters['user/getUser']
                  const data = {
                      session: user.session,
                      id: user.id,
                      file: {
                        name: file.name,
                        base64: reader.result
                      }
                  }
                  const result = await axios.post(config.API_URL+'uploads', data)
                  this.currenData[index].src = result.data.src
                  const currenData = {
                    key: this.action_key,
                    value: this.currenData
                  }
                  this.$store.dispatch(this.action, currenData)    
                }
                reader.readAsDataURL(file);
            }
          }
    }
}