<template>
  <div>
    <span class="header">Work Experiences<i class="fa fa-plus pull-right" style="line-height: 50px; padding-right: 20px;" @click="addFlag = true"></i></span>
      <span class="content">
        <create v-if="addFlag === true" :currentYear="currentYear" :months="months"></create>
        <view-workexperiences v-if="data !== null" :data="data" :currentYear="currentYear" :months="months"></view-workexperiences>
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
  margin-bottom: 100px;
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
      addFlag: false
    }
  },
  components: {
    'create': require('modules/account/CreateWork.vue'),
    'view-workexperiences': require('modules/account/ViewWorkExperiences.vue')
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
      this.APIRequest('account_work_experiences/retrieve', parameter).then(response => {
        if(response.data.length > 0){
          this.data = response.data
        }else{
          this.data = null
        }
      })
    }
  }
}
</script>
