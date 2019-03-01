<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Login Notification</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }
            .header, .text{
                width: 90%;
                float:left;
                min-height: 10px;
                overflow-y: hidden;
                margin: 0 5% 0 5%;
            }
            .header{
                margin-top: 25px;
            }
            .header img{
                float: left;
                margin-right: 10px;
            }
            .header span{
                font-size: 40px;
                font-weight: 600;
                float: left;
            }
            .text-primary{
                color:#3f0050;   
            }
            .text-secondary{
                color:#028170;
            }
            .text{
                color: #555;
                font-size: 18px;
            }
            .button{
                width: 300px;
                height: 50px;
                background: #028170;
                border: none;
                color: #fff;
                font-size: 16px;
                margin-top: 25px;
                margin-bottom: 25px;
                border-radius: 5px;
            }
            .button:hover{
                cursor: pointer;
            }
            .footer{
                width: 100%;
                margin: 25px 0 25px 0;
                border-top: solid 1px #aaa;
                text-align: center;
                float: left;
            }
            .footer label{
                margin-top: 10px;
                color: #555;
            }
        </style>
    </head>
    <body>
        <span class="header">
            <img src=http://api.classworx.co/api/public/storage/image/logo.png height="60px" width="60px">
            <span><label class="text-primary">CLASS</label><label class="text-secondary">WORX</label></span>
        </span>
        <span class="text">
            <h3>New login</h3>
            Hello {{$user->username}}!
            <br>
            <br>
            There's a login on {{$date}}.
            <br>
            <br>
        </span>
        <span class="text">
            If you did not make this action, please <a href="http://classworx.co/#/reset_password/{{$user->username}}/{{$user->code}}">reset</a> your password to secure your account and reply to this message to notify us.
        </span>
        <span class="footer">
            <label>Copyright @CLASWORX.CO 2018</label>
            <br>
            <label>3rd Floor, Bunzel Bldg., TechHub Area, University of San Carlos - Talamban Campus, Talamban, Cebu City, Philippines</label>
        </span>
    </body>
</html>
