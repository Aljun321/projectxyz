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
        <label for="address">Company<label class="text-danger">*</label></label>
        <input type="text" class="form-control" placeholder="Enter company here..." v-model="newWork.company">
      </div>
    </div>

    <div class="item-half">
      <div class="form-group">
        <label for="address">Position<label class="text-danger">*</label></label>
        <input type="text" class="form-control" placeholder="Enter your position here..." v-model="newWork.position">
      </div>
    </div>

    <div class="item">
      <div class="form-group">
        <label for="address">Company Address<label class="text-danger">*</label></label>
        <input type="text" class="form-control" placeholder="Enter company address here..." v-model="newWork.company_address">
      </div>
    </div>
  

    <div class="item">
      
      <div class="item-half">
        <div class="form-group">
          <label for="address">Year Started<label class="text-danger">*</label></label>
          <select v-model="newWork.year_started" class="form-control">
            <option v-for="i in 50" v-bind:value="currentYear - i">{{currentYear - i}}</option>
          </select>
        </div>  
      </div>

      <div class="item-half">
        <div class="form-group">
          <label for="address">Month Started<label class="text-danger">*</label></label>
          <select v-model="newWork.month_started" class="form-control">
            <option v-for="i in months" v-bind:value="i">{{i}}</option>
          </select>
        </div>  
      </div>

    </div>

    <div class="item">
      <div class="input-group">
        <input type="checkbox" id="formCheck" v-model="newWork.current_flag">
        <label class="form-check-label" for="formCheck">Still working here?</label>
      </div>
    </div>

    <div class="item" v-if="newWork.current_flag === false">
      <div class="item-half">
        <div class="form-group">
          <label for="address">Year Ended</label>
          <select v-model="newWork.year_ended" class="form-control">
            <option v-for="i in 50" v-bind:value="currentYear - i">{{currentYear - i}}</option>
          </select>
        </div>  
      </div>

      <div class="item-half">
        <div class="form-group">
          <label for="address">Month Ended</label>
          <select v-model="newWork.month_ended" class="form-control">
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
      newWork: {
        account_id: null,
        company: null,
        position: null,
        company_address: null,
        year_started: null,
        month_started: null,
        current_flag: false,
        year_ended: null,
        month_ended: null
      },
      errorMessage: null,
      successMessage: null
    }
  },
  methods: {
    create(){
      if(this.validate()){
        this.newWork.account_id = this.user.userID
        this.newWork.current_flag = (this.newWork.current_flag === true) ? 1 : 0
        this.APIRequest('account_work_experiences/create', this.newWork).then(response => {
          this.successMessage = 'Successfully added.'
          this.errorMessage = null
          this.newWork = {
            account_id: null,
            company: null,
            position: null,
            company_address: null,
            year_started: null,
            month_started: null,
            current_flag: false,
            year_ended: null,
            month_ended: null
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
      let t = this.newWork
      if(t.company !== null && t.position !== null && t.company_address !== null && t.year_started !== null && t.month_started !== null){
        return true
      }
      return false
    }
  }
}
</script>
