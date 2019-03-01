<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateNotificationSettingsChangeColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('notification_settings', function (Blueprint $table) {
            $table->dropColumn(['sms', 'email', 'fb_messenger', 'otp']);
            $table->string('code')->after('id')->nullable();
            $table->unsignedInteger('email_login')->default(0)->after('code');
            $table->unsignedInteger('email_otp')->default(0)->after('email_login');
            $table->unsignedInteger('sms_login')->default(0)->after('email_otp');
            $table->unsignedInteger('sms_otp')->default(0)->after('sms_login');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('notification_settings', function (Blueprint $table) {
            //
        });
    }
}
