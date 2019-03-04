<template>
  <div v-if="item !== null">

    <div class="item alert alert-danger" v-if="errorMessage !== null">
      {{errorMessage}}
    </div>

    <div class="item alert alert-success" v-if="successMessage !== null">
      {{successMessage}}
    </div>

    <div class="item-half">
      <div class="form-group">
        <label for="address">Company<label class="text-danger">*</label></label>
        <input type="text" class="form-control" placeholder="Enter company here..." v-model="item.company">
      </div>
    </div>

    <div class="item-half">
      <div class="form-group">
        <label for="address">Position<label class="text-danger">*</label></label>
        <input type="text" class="form-control" placeholder="Enter your position here..." v-model="item.position">
      </div>
    </div>

    <div class="item">
      <div class="form-group">
        <label for="address">Company Address<label class="text-danger">*</label></label>
        <input type="text" class="form-control" placeholder="Enter company address here..." v-model="item.company_address">
      </div>
    </div>
  

    <div class="item">
      
      <div class="item-half">
        <div class="form-group">
          <label for="address">Year Started<label class="text-danger">*</label></label>
          <select v-model="item.year_started" class="form-control">
            <option v-for="i in 50" v-bind:value="currentYear - i">{{currentYear - i}}</option>
          </select>
        </div>  
      </div>

      <div class="item-half">
        <div class="form-group">
          <label for="address">Month Started<label class="text-danger">*</label></label>
          <select v-model="item.month_started" class="form-control">
            <option v-for="i in months" v-bind:value="i">{{i}}</option>
          </select>
        </div>  
      </div>

    </div>

    <div class="item">
      <div class="input-group">
        <input type="checkbox" id="formCheck" v-model="item.current_flag">
        <label class="form-check-label" for="formCheck">Still studying here?</label>
      </div>
    </div>

    <div class="item" v-if="item.current_flag === false">
      <div class="item-half">
        <div class="form-group">
          <label for="address">Year Ended</label>
          <select v-model="item.year_ended" class="form-control">
            <option v-for="i in 50" v-bind:value="currentYear - i">{{currentYear - i}}</option>
          </select>
        </div>  
      </div>

      <div class="item-half">
        <div class="form-group">
          <label for="address">Month Ended</label>
          <select v-model="item.month_ended" class="form-control">
            <option v-for="i in months" v-bind:value="i">{{i}}</option>
          </select>
        </div>  
      </div>

    </div>

    <button class="btn btn-primary pull-right" style="margin-top:5px; margin-bottom:5px;" v-on:click="update()">
      Update
    </button>
    <button class="btn btn-danger pull-right" style="margin-top:5px; margin-bottom:5px; margin-right: 5px;" v-on:click="cancel()">
      Cancel
    </button>
    <button class="btn btn-danger" style="margin-top:5px; margin-bottom:5px; margin-right: 5px;" v-on:click="remove()">
      Delete
    </button>
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
  props: ['currentYear', 'months', 'item'],
  data(){
    return {
      user: AUTH.user,
      tokenData: AUTH.tokenData,
      config: CONFIG,
      errorMessage: null,
      successMessage: null
    }
  },
  methods: {
    update(){
      if(this.validate()){
        let parameter = {
          id: this.item.id,
          company: this.item.company,
          company_address: this.item.company_address,
          position: this.item.position,
          current_flag: (this.item.current_flag === true) ? 1 : 0,
          year_started: this.item.year_started,
          month_started: this.item.month_started,
          year_ended: this.item.year_ended,
          month_ended: this.item.month_ended
        }
        this.APIRequest('account_work_experiences/update', parameter).then(response => {
          this.successMessage = 'Successfully Updated.'
          this.errorMessage = null
          this.$parent.retrieve()
        })
      }else{
        this.successMessage = null
        this.errorMessage = 'Please fill up the required fields.'
      }
    },
    cancel(){
      this.item.edit_flag = false
      this.$parent.prevIndex = null
    },
    validate(){
      let t = this.item
      if(t.company !== null && t.company_address !== null && t.position !== null && t.year_started !== null && t.month_started !== null){
        return true
      }
      return false
    },
    remove(){
      let parameter = {
        id: this.item.id
      }
      this.APIRequest('account_work_experiences/delete', parameter).then(response => {
        this.$parent.prevIndex = null
        this.$parent.retrieve()
      })
    }
  }
}
</script>
