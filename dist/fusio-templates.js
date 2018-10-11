angular.module('fusioApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/account/nav.html',
    "<nav class=fusio-nav><div class=fusio-nav-group><h3>Account</h3><ul><li><a href=account>Profile</a></li><li><a href=account/security>Security</a></li><li><a href=account/grant>Grants</a></li><li><a href=account/app>Apps</a></li><li><a href=account/subscription>Subscriptions</a></li></ul></div></nav>"
  );


  $templateCache.put('app/auth/grant.html',
    "<div class=\"container fusio-login-container\"><h1>Authorization</h1><div uib-alert ng-class=\"'alert-danger'\" ng-if=error>{{error}}</div><div uib-alert ng-class=\"'alert-info'\" ng-if=info>{{info}}</div><div ng-if=response.code><div uib-alert ng-class=\"'alert-info'\">You have granted the application access. Provide the following authorization code in order to complete the authentication process.</div><p><b>Authorization code:</b></p><div class=fusio-code>{{ response.code }}</div></div><div ng-if=\"app.name && !response.code && !info\"><p><a href=\"{{ app.url }}\">{{ app.name }}</a> is requesting permission to access:</p><ul><li ng-repeat=\"scope in app.scopes\"><b>{{ scope.description }}</b></li></ul><hr><div><button ng-click=submitAccess(1) class=\"btn btn-primary\">Allow Access</button> <button ng-click=submitAccess(0) class=\"btn btn-default\">No thanks</button></div></div></div>"
  );


  $templateCache.put('app/documentation/documentation.html',
    "<div class=row><div class=\"col-md-2 fusio-sidebar\"><nav class=fusio-nav><div ng-repeat=\"(groupTitle, group) in menu\" class=fusio-nav-group><h3>{{ groupTitle }}</h3><ul><li ng-repeat=\"(title, href) in group\"><a ng-href=\"documentation/{{ href }}\">{{ title }}</a></li></ul></div></nav></div><div class=\"col-md-10 col-md-offset-2\"><div class=fusio-content ng-bind-html=content></div></div></div>"
  );


  $templateCache.put('app/login/login.html',
    "<div class=fusio-login-container><div uib-alert ng-class=\"'alert-danger'\" close=closeResponse() ng-if=\"response.success === false\">{{response.message}}</div><form id=loginForm method=POST ng-submit=login(user)><h1>Login</h1><div class=\"form-group has-feedback\"><input ng-model=user.username id=username required placeholder=Username class=form-control> <span class=\"ion-person form-control-feedback\"></span></div><div class=\"form-group has-feedback\"><input type=password ng-model=user.password id=password required placeholder=Password class=form-control> <span class=\"ion-key form-control-feedback\"></span></div><div class=\"form-group has-feedback\"><button type=submit ng-disabled=\"user.username == '' || user.password == ''\" class=\"btn btn-block btn-default\">Login</button></div></form><div class=fusio-login-ruler></div><p class=\"text-center text-muted\"><small>Don't have an account yet? <a href=./signup>Sign up</a></small></p><button ng-if=\"isConfigured('facebook')\" ng-click=\"authenticate('facebook')\" class=\"btn btn-block btn-facebook\"><i class=ion-social-facebook></i> Sign in with Facebook</button> <button ng-if=\"isConfigured('google')\" ng-click=\"authenticate('google')\" class=\"btn btn-block btn-google-plus\"><i class=ion-social-google></i> Sign in with Google</button> <button ng-if=\"isConfigured('github')\" ng-click=\"authenticate('github')\" class=\"btn btn-block btn-github\"><i class=ion-social-github></i> Sign in with GitHub</button></div>"
  );


  $templateCache.put('app/logout/logout.html',
    "<p>Logging out ...</p>"
  );


  $templateCache.put('app/overview/overview.html',
    "<div ng-include src=\"'docs/overview.html'\"></div>"
  );


  $templateCache.put('app/signup/signup.html',
    "<div class=\"container fusio-login-container\"><div uib-alert ng-class=\"'alert-danger'\" close=closeResponse() ng-if=\"response.success === false\">{{response.message}}</div><div uib-alert ng-class=\"'alert-success'\" close=closeResponse() ng-if=\"response.success === true\">Registration successful. We have send you an activation link to the provided email address.</div><form id=registerForm method=POST ng-submit=register(user) ng-hide=\"response.success == true\"><h1>Sign up</h1><div class=\"form-group has-feedback\"><input class=form-control id=name ng-model=user.name required placeholder=Username> <span class=\"ion-person form-control-feedback\"></span></div><div class=\"form-group has-feedback\"><input type=email class=form-control id=email ng-model=user.email required placeholder=Email> <span class=\"ion-at form-control-feedback\"></span></div><div class=\"form-group has-feedback\"><input type=password class=form-control id=password ng-model=user.password required placeholder=Password> <span class=\"ion-key form-control-feedback\"></span></div><div class=\"form-group has-feedback\"><input type=password class=form-control id=passwordRepeat ng-model=user.passwordRepeat required placeholder=\"Confirm Password\"> <span class=\"ion-key form-control-feedback\"></span></div><div class=form-group><div vc-recaptcha ng-model=user.captcha theme=light></div></div><div class=\"form-group has-feedback\"><button type=submit ng-disabled=\"user.name == '' || user.email == '' || user.password == '' || user.password != user.passwordRepeat || user.captcha == ''\" class=\"btn btn-block btn-default\">Register</button></div></form><div class=fusio-login-ruler></div><p class=\"text-center text-muted\"><small><a href=./login>Log in</a> if you already have an account</small></p></div>"
  );


  $templateCache.put('app/account/app/app.html',
    "<div class=row><div class=\"col-md-2 fusio-sidebar\" ng-include src=\"'app/account/nav.html'\"></div><div class=\"col-md-10 col-md-offset-2\"><div class=fusio-content><h2>Apps</h2><div uib-alert ng-class=\"'alert-info'\">List of your apps, through an app you get a consumer key and secret which enables you to access the protected parts of the API. Click on the show button to see the app key and secret.</div><table class=table><colgroup><col width=*><col width=200><col width=200></colgroup><thead><tr><th>Name</th><th>Create date</th><th></th></tr></thead><tbody><tr ng-repeat=\"app in apps\"><td>{{ app.name }}</td><td>{{ app.date | date:'shortDate' }}</td><td><div class=\"btn-group pull-right\" role=group><button class=\"btn btn-default\" ng-click=showApp(app)>Show</button> <button class=\"btn btn-danger\" ng-click=deleteApp(app)>Delete</button></div></td></tr></tbody></table><a ng-click=createApp() class=\"btn btn-primary\" role=button>Create</a></div></div></div>"
  );


  $templateCache.put('app/account/app/create.html',
    "<form name=accountAppForm ng-submit=create(app)><div class=modal-header><h3 class=modal-title>Create</h3></div><div class=modal-body><div uib-alert ng-class=\"'alert-danger'\" close=closeResponse() ng-if=\"response.success === false\">{{ response.message }}</div><div class=form-group><label for=name>Name:</label><input id=name ng-model=app.name required class=form-control></div><div class=form-group><label for=url>Url:</label><input type=url id=url ng-model=app.url required class=form-control></div><div class=checkbox ng-repeat=\"scope in scopes\"><label><input type=checkbox ng-model=app.scopes[$index] ng-true-value=\"'{{scope.name}}'\" ng-false-value=\"''\"> {{ scope.description }}</label></div></div><div class=modal-footer><button type=submit class=\"btn btn-primary\">Create</button> <button type=button ng-click=close() class=\"btn btn-default\">Cancel</button></div></form>"
  );


  $templateCache.put('app/account/app/detail.html',
    "<div class=modal-header><h3 class=modal-title>{{ app.name }}</h3></div><div class=modal-body><dl><dt>Name</dt><dd>{{ app.name }}</dd><dt>Url</dt><dd>{{ app.url }}</dd><dt>Created on</dt><dd>{{ app.date }}</dd><dt>Scopes</dt><dd><span ng-repeat=\"scope in app.scopes\"><span class=\"label label-primary\">{{ scope }}</span>&nbsp;</span></dd></dl><div class=form-group><label for=appKey class=control-label>App key:</label><input ng-model=app.appKey readonly class=form-control id=appKey></div><div class=form-group><label for=appSecret class=control-label>App secret:</label><input ng-model=app.appSecret readonly class=form-control id=appSecret></div></div><div class=modal-footer><button type=button ng-click=close() class=\"btn btn-default\">Cancel</button></div>"
  );


  $templateCache.put('app/account/grant/grant.html',
    "<div class=row><div class=\"col-md-2 fusio-sidebar\" ng-include src=\"'app/account/nav.html'\"></div><div class=\"col-md-10 col-md-offset-2\"><div class=fusio-content><h2>Grants</h2><div uib-alert ng-class=\"'alert-info'\">List of apps which you have granted access to your account. You can revoke the access at any time, the app can then no longer access the API on behalf of your account.</div><table class=table><colgroup><col width=*><col width=200><col width=200></colgroup><thead><tr><th>Name</th><th>Granted on</th><th></th></tr></thead><tbody><tr ng-repeat=\"grant in grants\"><td>{{ grant.app.name }}</td><td>{{ grant.createDate | date:'shortDate' }}</td><td><button class=\"btn btn-danger pull-right\" ng-click=deleteGrant(grant)>Revoke</button></td></tr></tbody></table></div></div></div>"
  );


  $templateCache.put('app/account/profile/profile.html',
    "<div class=row><div class=\"col-md-2 fusio-sidebar\" ng-include src=\"'app/account/nav.html'\"></div><div class=\"col-md-10 col-md-offset-2\"><div class=fusio-content><h2>Profile</h2><div uib-alert ng-class=\"'alert-danger'\" close=closeResponse() ng-if=\"response.success === false\">{{response.message}}</div><div uib-alert ng-class=\"'alert-success'\" close=closeResponse() ng-if=\"response.success === true\">{{response.message}}</div><div ng-if=email class=\"pull-right visible-lg-block visible-md-block\"><img gravatar-src=email gravatar-size=100></div><form style=max-width:400px ng-submit=update(account)><div class=form-group><label for=username>Username</label><input ng-model=account.name readonly id=username class=form-control></div><div class=form-group><label for=email>Email</label><input ng-model=account.email id=email class=form-control></div><input type=submit class=\"btn btn-primary\" value=Update></form></div></div></div>"
  );


  $templateCache.put('app/account/security/security.html',
    "<div class=row><div class=\"col-md-2 fusio-sidebar\" ng-include src=\"'app/account/nav.html'\"></div><div class=\"col-md-10 col-md-offset-2\"><div class=fusio-content><h2>Security</h2><div uib-alert ng-class=\"'alert-danger'\" close=closeResponse() ng-if=\"response.success === false\">{{response.message}}</div><div uib-alert ng-class=\"'alert-success'\" close=closeResponse() ng-if=\"response.success === true\">{{response.message}}</div><form style=max-width:400px ng-submit=update(account)><div class=form-group><label for=oldPassword>Old password:</label><input type=password id=oldPassword ng-model=account.oldPassword aria-describedby=oldPasswordHelp required minlength=8 maxlength=128 class=form-control> <span class=help-block id=oldPasswordHelp></span></div><div class=form-group><label for=newPassword>New password:</label><input type=password id=newPassword ng-model=account.newPassword aria-describedby=newPasswordHelp required minlength=8 maxlength=128 class=form-control> <span class=help-block id=newPasswordHelp></span></div><div class=form-group><label for=verifyPassword>Verify password:</label><input type=password id=verifyPassword ng-model=account.verifyPassword aria-describedby=verifyPasswordHelp required minlength=8 maxlength=128 class=form-control> <span class=help-block id=verifyPasswordHelp></span></div><button type=submit class=\"btn btn-primary\">Change password</button></form></div></div></div>"
  );


  $templateCache.put('app/account/subscription/create.html',
    "<form name=accountSubscriptionForm ng-submit=create(subscription)><div class=modal-header><h3 class=modal-title>Create</h3></div><div class=modal-body><div uib-alert ng-class=\"'alert-danger'\" close=closeResponse() ng-if=\"response.success === false\">{{ response.message }}</div><div class=form-group><label for=event>Event:</label><select id=event ng-model=subscription.event ng-options=\"event.name as event.name for event in events\" required aria-describedby=eventHelp class=form-control></select><span class=help-block id=statusHelp>The status of the app. Only apps which are <b>Active</b> can request an access token for the API</span></div><div class=form-group><label for=url>Endpoint:</label><input type=url id=url ng-model=subscription.endpoint required class=form-control></div></div><div class=modal-footer><button type=submit class=\"btn btn-primary\">Create</button> <button type=button ng-click=close() class=\"btn btn-default\">Cancel</button></div></form>"
  );


  $templateCache.put('app/account/subscription/detail.html',
    "<div class=modal-header><h3 class=modal-title>{{ subscription.event }}</h3></div><div class=modal-body><dl><dt>Event</dt><dd>{{ subscription.event }}</dd><dt>Endpoint</dt><dd>{{ subscription.endpoint }}</dd></dl><table class=table><thead><tr><th>Status</th><th>Code</th><th>Attempts</th><th>Date</th></tr></thead><tbody><tr ng-repeat=\"response in subscription.responses\"><td><span class=\"label label-info\" ng-if=\"response.status == 1\">Pending</span> <span class=\"label label-success\" ng-if=\"response.status == 2\">Done</span> <span class=\"label label-danger\" ng-if=\"response.status == 3\">Error</span></td><td>{{ response.code }}</td><td>{{ response.attempts }}</td><td>{{ response.executeDate | date:'shortDate' }}</td></tr></tbody></table></div><div class=modal-footer><button type=button ng-click=close() class=\"btn btn-default\">Cancel</button></div>"
  );


  $templateCache.put('app/account/subscription/subscription.html',
    "<div class=row><div class=\"col-md-2 fusio-sidebar\" ng-include src=\"'app/account/nav.html'\"></div><div class=\"col-md-10 col-md-offset-2\"><div class=fusio-content><h2>Subscriptions</h2><div uib-alert ng-class=\"'alert-info'\">List of subscriptions. The API provider can define specific events which you can subscribe to. If such an event occurs the endpoint will receive an HTTP POST request with the provided payload.</div><table class=table><colgroup><col width=*><col width=200><col width=200></colgroup><thead><tr><th>Event</th><th>Endpoint</th><th></th></tr></thead><tbody><tr ng-repeat=\"subscription in subscriptions\"><td>{{ subscription.event }}</td><td>{{ subscription.endpoint }}</td><td><div class=\"btn-group pull-right\" role=group><button class=\"btn btn-default\" ng-click=showSubscription(subscription)>Show</button> <button class=\"btn btn-danger\" ng-click=deleteSubscription(subscription)>Delete</button></div></td></tr></tbody></table><a ng-click=createSubscription() class=\"btn btn-primary\" role=button>Subscribe</a></div></div></div>"
  );

}]);