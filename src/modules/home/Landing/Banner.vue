<template>
	<div class="cw-banner">
    <div class="text text-white">
      <span class="title">
        <h1>Experience Exclusivity</h1>
      </span>
      <span class="description">
        <h4>CLASSWORX is an online management platform that improves the connectivity between students and teachers and it's easy to use.</h4>
         <button class="btn btn-warning btn-banner" v-on:click="redirect('/signup')"> Get started today</button>
      </span>
    </div>
    <div class="image">
      <img src="../../../assets/img/banner.png" style="margin-bottom: 5px;">
    </div>
	</div>
</template>
<style scoped>
.cw-banner{
  width: 100%;
  float: left;
  height: 500px;
  background: #23002c;
}

.btn-banner{
  padding-top: 0px !important;
  padding: 50px;
  margin-top: 25px;
  font-size: 20px !important;
  height: 50px !important;
  line-height: 50px !important;
  margin-left: 1%;
  border-radius: 98px;
}

.text{
  width: 40%;
  float: left;
  margin-left: 10%;
  margin-top: 100px;
}
.text .title{
  width: 100%;
  float: left;
}
.title h1{
  font-size: 50px;
}
.text .description{
  margin-top: 25px;
  width: 100%;
  float: left;
  text-align: justify;
}
.image{
  width: 45%;
  margin-right: 5%;
  float: left;
  margin-top: 50px;
  display: block;
}

.image img{
  width: 100%;
}

@media screen and (max-width: 992px){
  .text{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
  }
  .title{
    text-align: center;
  }

  .image{
    display: none;
  }
}

</style>
<script>
import ROUTER from '../../../router'
import AUTH from '../../../services/auth'
export default {
  mounted(){
  },
  data(){
    return {
    }
  },
  methods: {
    redirect(parameter){
      ROUTER.push(parameter)
    }
  }
}
</script>
