<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Services\SocialAccountService;
use Illuminate\Support\Facades\Log;
use Socialite;

class SocialAuthController extends Controller
{
    public function redirect($social)
    {
        return Socialite::driver($social)->redirect();
    }

    public function callback($social)
    {
        $user = SocialAccountService::createOrGetUser(Socialite::driver($social)->user(), $social);
        auth()->login($user);
$cookie_name = "user";
$value = $user->name;
$cookie_value = $value;
// 86400 = 1 day
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
setcookie("login","true");
        return redirect()->to('/');
        
    }
}
?>



