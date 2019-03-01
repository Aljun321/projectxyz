<?php

namespace App\Http\Controllers;

use App\Account;
use App\AccountDegree;
use App\AccountInformation;
use App\AccountProfile;
use App\AccountSchool;
use App\AccountSemester;
use App\NotificationSetting;
use App\Semester;
use App\School;
use App\AccountWorkExperience;
use App\Notification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\Jobs\Email;
class AccountController extends ClassWorxController
{
     function __construct(){  
        $this->model = new Account();
        $this->validation = array(  
          "email" => "unique:accounts",
          "username"  => "unique:accounts"
        );
        $this->notRequired = array(
          'status',
          'active_semester',
          'active_organization',
          'active_course'
        );
    }

    public function create(Request $request){
     $request = $request->all();
     $referralCode = $request['referral_code'];
     $dataAccount = array(
      'code'              => $this->generateCode(),
      'password'        => Hash::make($request['password']),
      'status'          => 'NOT_VERIFIED',
      'email'           => $request['email'],
      'username'        => $request['username'],
      'account_type'    => $request['account_type'],
      'active_semester' => null,
      'created_at'      => Carbon::now()
     );
     $this->model = new Account();
     $this->insertDB($dataAccount);
     if($this->response['data'] > 0 ){
        $accountId = $this->response['data'];
        $this->createDetails($accountId);
        app('App\Http\Controllers\EmailController')->verification($accountId);
        if($referralCode != null){
            app('App\Http\Controllers\InvitationController')->confirmReferral($referralCode);
         }
        return $this->response();
     }else{
        return $this->response();
     }
    }

    public function createDetails($accountId){
      $info = new AccountInformation();
      $info->account_id = $accountId;
      $info->created_at = Carbon::now();
      $info->save();
    }
    
    public function generateCode(){
      $code = 'A-'.substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 126);
      $codeExist = Account::where('code', '=', $code)->get();
      if(sizeof($codeExist) > 0){
        $this->generateCode();
      }else{
        return $code;
      }
    }

    public function verify(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $this->retrieveDB($data);
      dispatch(new Email($this->response['data'][0], 'verification')); // Send Email
      return $this->response();
    }

    public function updateByVerification(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $this->updateDB($data);
      return $this->response();
    }

    public function updateAction(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $this->updateDB($data);
      return $this->response();
    }

    public function updateActiveSemester(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $this->updateDB($data);
      return $this->response();
    }

    public function update(Request $request){ 
      $data = $request->all();
      $result = Account::where('code', '=', $data['code'])->where('username', '=', $data['username'])->get();
      if(sizeof($result) > 0){
        $updateData = array(
          'id'        => $result[0]['id'],
          'password'  => Hash::make($data['password'])
        );
        $this->model = new Account();
        $this->updateDB($updateData);
        if($this->response['data'] == true){
          dispatch(new Email($result[0], 'reset_password'));
          return $this->response();
        }else{
          return response()->json(array('data' => false));
        }
      }else{
        return response()->json(array('data' => false));
      }
    }
    public function hashPassword($password){
      $data['password'] = Hash::make($password);
      return $data;
    }
    public function customValidate($text){
      $validation = array('email' => 'required|email'); 
      return $this->validateReply($text, $validation);
    }

    public function validateReply($text, $validation){
      $validator = Validator::make($text, $validation);
      if($validator->fails()){
        return false;
      }
      else
        return true;
    }

    public function retrieve(Request $request){
      $data = $request->all();
      $this->model = new Account();
      $result = $this->retrieveDB($data);

      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $accountId = $result[$i]['id'];
          $activeSemesterId = $result[$i]['active_semester'];
          $result[$i]['account_information_flag'] = false;
          $result[$i]['account_profile_flag'] = false;
          $accountInfoResult = AccountInformation::where('account_id', '=', $result[$i]['id'])->get();
          $accountProfileResult = AccountProfile::where('account_id', '=', $result[$i]['id'])->orderBy('created_at', 'DESC')->get();
          $result[$i]['account_information'] = (sizeof($accountInfoResult) > 0) ? $accountInfoResult[0] : null;
          $result[$i]['account_profile'] = (sizeof($accountProfileResult) > 0) ? $accountProfileResult[0] : null;
          $accountDegree = $this->getAccountDegrees($accountId);
          $result[$i]['account_degree'] = $accountDegree;
          $result[$i]['account_work'] = $this->getAccountWorks($accountId);
          $result[$i]['schools'] = ($accountDegree != null) ? $accountDegree[0]['school'] : null;
          $result[$i]['active_semester_details'] = (intval($activeSemesterId) == 0 || $activeSemesterId == null) ? null : $this->getActiveSemester($activeSemesterId);
          $result[$i]['my_semesters'] = $this->getSemesters($result[$i]['id']);
          $result[$i]['school_semesters'] = ($accountDegree == null) ? null : $this->getSchoolSemesters($accountDegree[0]['school']['id']);
          $result[$i]['notifications'] = $this->getNotification($accountId);
          $result[$i]['notification_settings'] = $this->getNotificationSettings($accountId);
          $i++;
        }
        return response()->json(array('data' => $result));
      }else{
        return $this->response();
      }
    }

    public function getNotificationSettings($accountId){
      $result = NotificationSetting::where('account_id', '=', $accountId)->get();
      return (sizeof($result) > 0) ? $result[0] : null;
    }

    public function getAccountWorks($accountId){
      $result = AccountWorkExperience::where('account_id', '=', $accountId)->orderBy('year_started', 'DESC')->get();
      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $result[$i]['edit_flag'] = false;
          $result[$i]['current_flag'] = (intval($result[$i]['current_flag']) == 1) ? true : false; 
          $i++;
        }
        return $result;
      }else{
        return null;
      }
    }

    public function getAccountDegrees($accountId){
      $result = AccountDegree::where('account_id', '=', $accountId)->orderBy('year_started', 'DESC')->get();
      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $result[$i]['edit_flag'] = false;
          $result[$i]['current_flag'] = (intval($result[$i]['current_flag']) == 1) ? true : false; 
          $school = School::where('id', '=', $result[$i]['school_id'])->get();
          $result[$i]['school'] = (sizeof($school) > 0) ? $school[0] : null; 
          $i++;
        }
        return $result;
      }else{
        return null;
      }
    }

    public function requestReset(Request $request){
      $data = $request->all();
      $result = Account::where('email', '=', $data['email'])->get();
      if(sizeof($result) > 0){
        dispatch(new Email($result[0], 'request_reset'));
        return response()->json(array('data' => true));
      }else{
        return response()->json(array('data' => false));
      }
    }

    public function testMail(Request $request){
      $data = $request->all();
      dispatch(new Email($data, 'test')); // Send Email
    }

    public function getSchools($accountId){
      $result = AccountSchool::where('account_id', '=', $accountId)->leftJoin('schools', 'schools.id', '=', 'account_schools.school_id')->get();
      return (sizeof($result) > 0) ? $result : null;
    }

    public function getActiveSemester($accountSemesterId){
      $result = AccountSemester::where('id', '=', $accountSemesterId)->get();
      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $semesterResult = Semester::where('id', '=', $result[$i]['semester_id'])->get();
          $result[$i]['semester_details'] = (sizeof($semesterResult) > 0) ? $semesterResult[0] : null;
          $i++;
        }
        return $result[0];
      }else{
        return null;
      }
    }

    public function getSemesters($accountId){
      $result = AccountSemester::where('account_id', '=', $accountId)->orderBy('created_at', 'DESC')->get();
      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $semesterResult = Semester::where('id', '=', $result[$i]['semester_id'])->get();
          $result[$i]['semester_details'] = (sizeof($semesterResult) > 0) ? $semesterResult[0] : null;
          $i++;
        }
        return $result;
      }else{
        return null;
      }
    }

    public function getNotification($accountId){
      $result = NotificationSetting::where('account_id', '=', $accountId)->get();
      return (sizeof($result) > 0) ? $result : null;
    }

    public function getSchoolSemesters($schoolId){
      $result = Semester::where('school_id', '=', $schoolId)->orderBy('start_date', 'DESC')->get();
      return (sizeof($result) > 0) ? $result : null;
    }

}