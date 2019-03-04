<template>
  <div>

        <div class="item alert alert-danger" v-if="errorMessage !== null">
          {{errorMessage}}
        </div>

        <div class="item alert alert-success" v-if="successMessage !== null">
          {{successMessage}}
        </div>

        <div class="item-half">
          <div class="form-group">
            <label for="address">Degree<label class="text-danger">*</label></label>
            <input type="text" class="form-control" placeholder="Enter your degree here..." v-model="newBackground.course">
          </div>
        </div>

        <div class="item-half">
          <div class="form-group">
            <label for="address">School<label class="text-danger">*</label></label>
            <select v-model="newBackground.school_id" v-if="schools !== null" class="form-control">
              <option v-bind:value="itemSchool.id" v-for="itemSchool, indexSchool in schools">{{itemSchool.name}}</option>
            </select>
          </div>  
        </div>
        
        <div class="item">
          <div class="item-half">
            <div class="form-group">
              <label for="address">School ID Number</label>
              <input type="text" class="form-control" placeholder="ID Number(Optional)" v-model="newBackground.school_student_code">
            </div>
          </div>
        </div>

        <div class="item">
          
          <div class="item-half">
            <div class="form-group">
              <label for="address">Year Started<label class="text-danger">*</label></label>
              <select v-model="newBackground.year_started" class="form-control">
                <option v-for="i in 50" v-bind:value="currentYear - i">{{currentYear - i}}</option>
              </select>
            </div>  
          </div>

          <div class="item-half">
            <div class="form-group">
              <label for="address">Month Started<label class="text-danger">*</label></label>
              <select v-model="newBackground.month_started" class="form-control">
                <option v-for="i in months" v-bind:value="i">{{i}}</option>
              </select>
            </div>  
          </div>

        </div>

        <div class="item">
          <div class="input-group">
            <input type="checkbox" id="formCheck" v-model="newBackground.current_flag">
            <label class="form-check-label" for="formCheck">Still studying here?</label>
          </div>
        </div>

        <div class="item" v-if="newBackground.current_flag === false">
          <div class="item-half">
            <div class="form-group">
              <label for="address">Year Ended</label>
              <select v-model="newBackground.year_end" class="form-control">
                <option v-for="i in 50" v-bind:value="currentYear - i">{{currentYear - i}}</option>
              </select>
            </div>  
          </div>

          <div class="item-half">
            <div class="form-group">
              <label for="address">Month Ended</label>
              <select v-model="newBackground.month_end" class="form-control">
                <option v-for="i in months" v-bind:value="i">{{i}}</option>
              </select>
            </div>  
          </div>

        </div>
        <button class="btn btn-primary pull-right" style="margin-top:5px; margin-bottom:5px;" v-on:click="create()">Add</button>
        <button class="btn btn-danger pull-right" style="margin-top:5px; margin-bottom:5px; margin-right: 5px;" v-on:click="cancel()">Cancel</button>
  </div>
</template>
<style scoped>
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
  },
  props: ['schools', 'currentYear', 'months'],
  data(){
    return {
      user: AUTH.user,
      tokenData: AUTH.tokenData,
      config: CONFIG,
      newBackground: {
        account_id: null,
        school_student_code: null,
        course: null,
        school_id: null,
        year_started: null,
        current_flag: false,
        month_started: null,
        year_end: null,
        month_end: null
      },
      errorMessage: null,
      successMessage: null
    }
  },
  methods: {
    create(){
      if(this.validate()){
        this.newBackground.account_id = this.user.userID
        this.newBackground.current_flag = (this.newBackground.current_flag === true) ? 1 : 0
        this.APIRequest('account_degrees/create', this.newBackground).then(response => {
          this.successMessage = 'Successfully added.'
          this.errorMessage = null
          this.newBackground = {
            account_id: null,
            school_student_code: null,
            course: null,
            school_id: null,
            year_started: null,
            current_flag: false,
            month_started: null,
            year_end: null,
            month_end: null
          }
          this.$parent.addFlag = false
          this.$parent.retrieve()
        })
      }else{
        this.successMessage = null
        this.errorMessage = 'Please fill up the required fields.'
      }
    },
    cancel(){
      this.$parent.addFlag = false
    },
    validate(){
      let t = this.newBackground
      if(t.course !== null && t.school_id !== null && t.year_started !== null && t.month_started !== null){
        return true
      }
      return false
    }
  }
}
</script>
