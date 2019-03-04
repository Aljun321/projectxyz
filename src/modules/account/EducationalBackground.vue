<template>
  <div>
    <span class="header">Education Background <i class="fa fa-plus pull-right" style="line-height: 50px; padding-right: 20px;" @click="addFlag = true"></i></span>
      <span class="content">
        <create v-if="addFlag === true" :schools="schools" :currentYear="currentYear" :months="months"></create>
        <view-eb v-if="data !== null" :data="data" :schools="schools" :currentYear="currentYear" :months="months"></view-eb>
      </span>
    </span>
  </div>
</template>
<style scoped>

.header{
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  border-bottom: solid 1px #ddd;
  float: left;
}
.content{
  width: 100%;
  min-height: 50px;
  float: left;
  overflow-y: hidden;
}

.inputs{
  width: 65%;
  float: left;
  margin-right: 5%;
  min-height: 50px;
  overflow-y: hidden;
}
.item-half{
  width: 48%;
  float: left;
  margin-right: 2%;
}
.item{
  width: 100%;
  float: left;
}
</style>
<script>
import ROUTER from '../../router'
import AUTH from '../../services/auth'
import CONFIG from '../../config.js'
export default {
  mounted(){
    this.retrieve()
    this.getSchools()
  },
  data(){
    return {
      user: AUTH.user,
      tokenData: AUTH.tokenData,
      config: CONFIG,
      data: null,
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      currentYear: 2020,
      addFlag: false,
      schools: null
    }
  },
  components: {
    'create': require('modules/account/CreateEdBack.vue'),
    'view-eb': require('modules/account/ViewEdBack.vue')
  },
  methods: {
    retrieve(){
      let parameter = {
        condition: [{
          value: this.user.userID,
          column: 'account_id',
          clause: '='
        }]
      }
      this.APIRequest('account_degrees/retrieve', parameter).then(response => {
        if(response.data.length > 0){
          this.data = response.data
        }else{
          this.data = null
        }
      })
    },
    getSchools(){
      let parameter = {
        'sort': {
          'name': 'ASC'
        }
      }
      this.APIRequest('schools/retrieve', parameter).then(response => {
        if(response.data.length > 0){
          this.schools = response.data
        }else{
          this.schools = null
        }
      })
    }
  }
}
</script>
