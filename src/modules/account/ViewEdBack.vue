<template>
  <div>
    <span v-for="item, index in data" class="holder">
      <span class="item-holder" v-if="item.edit_flag === false">
        <span class="item">
          <label><b>{{item.course}}</b></label>
          <i class="fa fa-pencil action-link text-green pull-right" style="font-size: 20px;" v-on:click="edit(index)"></i>
        </span>
        <span class="item" v-if="item.school !== null">
          <label><i class="fa fa-university"></i>{{item.school.name}}</label>
        </span>
        <span class="item" v-if="item.school_student_code !== null && item.school_student_code !== ''">
          <label><i class="fas fa-id-card-alt"></i>{{item.school_student_code}}</label></span>
        <span class="item">
          <label><i class="fa fa-calendar"></i>{{item.month_started + ' ' + item.year_started + ' - '}}</label>
          <label v-if="item.current_flag === false">{{'Current'}}</label>
          <label v-if="item.current_flag === true">{{item.month_end + ' ' + item.year_end}}</label>
        </span>
      </span>
      <update-eb v-else :item="item" :schools="schools" :currentYear="currentYear" :months="months"></update-eb>
    </span>
  </div>
</template>
<style scoped>
.holder{
  width: 100%;
  float: left;
  margin-bottom: 10px;
}
.item{
  width: 98%;
  float: left;
  margin-right: 2%;
}
.item label i{
  padding-right: 10px;
}
</style>
<script>
import ROUTER from '../../router'
import AUTH from '../../services/auth'
import CONFIG from '../../config.js'
export default {
  mounted(){
  },
  props: ['data', 'schools', 'currentYear', 'months'],
  data(){
    return {
      user: AUTH.user,
      tokenData: AUTH.tokenData,
      config: CONFIG,
      prevIndex: null
    }
  },
  components: {
    'update-eb': require('modules/account/UpdateEdBack.vue')
  },
  methods: {
    edit(index){
      if(this.prevIndex === null){
        this.data[index].edit_flag = true
        this.prevIndex = index
      }else{
        if(this.prevIndex !== index){
          this.data[this.prevIndex].edit_flag = false
          this.data[index].edit_flag = true
          this.prevIndex = index
        }
      }
    },
    retrieve(){
      this.$parent.retrieve()
    }
  }
}
</script>
