<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AccountWorkExperience;

class AccountWorkExperienceController extends ClassWorxController
{
  function __construct(){
    $this->model = new AccountWorkExperience();
    $this->notRequired = array(
      'year_ended',
      'month_ended'
    );
  }
  public function retrieve(Request $request){
    $data = $request->all();
    $this->model = new AccountWorkExperience();
    $this->retrieveDB($data);
    $result = $this->response['data'];
    if(sizeof($result) > 0){
      $i = 0;
      foreach ($result as $key) {
        $this->response['data'][$i]['edit_flag'] = false;
        $this->response['data'][$i]['current_flag'] = (intval($result[$i]['current_flag']) == 0) ? false : true;
        $i++;
      }
    }
    return $this->response();
  }
}
