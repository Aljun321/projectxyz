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
            <label for="address">Degree<label class="text-danger">*</label></label>
            <input type="text" class="form-control" placeholder="Enter your degree here..." v-model="item.course">
          </div>
        </div>

        <div class="item-half">
          <div class="form-group">
            <label for="address">School<label class="text-danger">*</label></label>
            <select v-model="item.school_id" v-if="schools !== null" class="form-control">
              <option v-bind:value="itemSchool.id" v-for="itemSchool, indexSchool in schools">{{itemSchool.name}}</option>
            </select>
          </div>  
        </div>
        
        <div class="item">
          <div class="item-half">
            <div class="form-group">
              <label for="address">School ID Number</label>
              <input type="text" class="form-control" placeholder="ID Number(Optional)" v-model="item.school_student_code">
            </div>
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
              <label for="address">Year Ended<label class="text-danger">*</label></label>
              <select v-model="item.year_end" class="form-control">
                <option v-for="i in 50" v-bind:value="currentYear - i">{{currentYear - i}}</option>
              </select>
            </div>  
          </div>

          <div class="item-half">
            <div class="form-group">
              <label for="address">Month Ended<label class="text-danger">*</label></label>
              <select v-model="item.month_end" class="form-control">
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
  props: ['schools', 'currentYear', 'months', 'item'],
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
          school_id: this.item.school_id,
          course: this.item.course,
          current_flag: (this.item.current_flag === true) ? 1 : 0,
          year_started: this.item.year_started,
          month_started: this.item.month_started,
          year_end: this.item.year_end,
          month_end: this.item.month_end,
          school_student_code: this.item.school_student_code
        }
        this.APIRequest('account_degrees/update', parameter).then(response => {
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
      if(t.course !== null && t.school_id !== null && t.year_started !== null && t.month_started !== null){
        return true
      }
      return false
    },
    remove(){
      let parameter = {
        id: this.item.id
      }
      this.APIRequest('account_degrees/delete', parameter).then(response => {
        this.$parent.prevIndex = null
        this.$parent.retrieve()
      })
    }
  }
}
</script>
