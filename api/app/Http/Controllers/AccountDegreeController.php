<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AccountDegree;
class AccountDegreeController extends ClassWorxController
{
    function __construct(){
      $this->model = new AccountDegree();
      $this->notRequired = array(
        'school',
        'address',
        'school_student_code',
        'course',
        'year_started',
        'year_end',
        'month_end'
      );
    }

    public function retrieve(Request $request){
      $data = $request->all();
      $this->model = new AccountDegree();
      $this->retrieveDB($data);
      $result = $this->response['data'];
      // details
      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $this->response['data'][$i]['school'] = app('App\Http\Controllers\SchoolController')->retrieveById($result[$i]['school_id']);
          $this->response['data'][$i]['edit_flag'] = false;
          $this->response['data'][$i]['current_flag'] = (intval($result[$i]['current_flag']) == 0) ? false : true;
          $i++;
        }
      }
      return $this->response();
    }
}
