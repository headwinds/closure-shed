// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.events');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('example.utils.http_fx');
goog.require('goog.object');
goog.require('ajax.core');
goog.require('example.db');
goog.require('example.utils.js');
goog.require('reagent.impl.template');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return example.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),(function (db,p__31829){
var vec__31830 = p__31829;
var _ = cljs.core.nth.call(null,vec__31830,(0),null);
var active_demo = cljs.core.nth.call(null,vec__31830,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),(function (db,p__31833){
var vec__31834 = p__31833;
var _ = cljs.core.nth.call(null,vec__31834,(0),null);
var active_demo = cljs.core.nth.call(null,vec__31834,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-add-log","post-add-log",2016590953),(function (p__31837,p__31838){
var map__31839 = p__31837;
var map__31839__$1 = ((((!((map__31839 == null)))?(((((map__31839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31839):map__31839);
var db = cljs.core.get.call(null,map__31839__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31840 = p__31838;
var _ = cljs.core.nth.call(null,vec__31840,(0),null);
var vals = cljs.core.nth.call(null,vec__31840,(1),null);
var username = cljs.core.deref.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(vals));
var goal = cljs.core.deref.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501).cljs$core$IFn$_invoke$arity$1(vals));
var major_bonus = cljs.core.deref.call(null,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816).cljs$core$IFn$_invoke$arity$1(vals));
var minor_bonus = cljs.core.deref.call(null,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816).cljs$core$IFn$_invoke$arity$1(vals));
var sidequest_bonus = cljs.core.deref.call(null,new cljs.core.Keyword(null,"sidequest-bonus","sidequest-bonus",979738100).cljs$core$IFn$_invoke$arity$1(vals));
var payload = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"goal","goal",-2073396501),goal,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816),major_bonus,new cljs.core.Keyword(null,"minor-bonus","minor-bonus",-1950556957),minor_bonus,new cljs.core.Keyword(null,"sidequest-bonus","sidequest-bonus",979738100),sidequest_bonus], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.POST.call(null,"/api/logs/add",payload,new cljs.core.Keyword(null,"post-add-log-success","post-add-log-success",-2009973737),new cljs.core.Keyword(null,"post-add-log-fail","post-add-log-fail",-1120993213))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"post-add-log-success","post-add-log-success",-2009973737),(function (db,p__31844){
var vec__31845 = p__31844;
var _ = cljs.core.nth.call(null,vec__31845,(0),null);
var response = cljs.core.nth.call(null,vec__31845,(1),null);
var success_notification_31848 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Log added!",new cljs.core.Keyword(null,"type","type",1174270348),"success",new cljs.core.Keyword(null,"show","show",-576705889),true], null);
example.utils.js.log.call(null,"post-add-log-success",response);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"post-add-log-fail","post-add-log-fail",-1120993213),(function (db,p__31849){
var vec__31850 = p__31849;
var _ = cljs.core.nth.call(null,vec__31850,(0),null);
var response = cljs.core.nth.call(null,vec__31850,(1),null);
var fail_notification_31853 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Log failed!",new cljs.core.Keyword(null,"type","type",1174270348),"error",new cljs.core.Keyword(null,"show","show",-576705889),true], null);
example.utils.js.log.call(null,"post-add-log-fail",response);

return db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-logs","fetch-logs",1340819569),(function (p__31854,p__31855){
var map__31856 = p__31854;
var map__31856__$1 = ((((!((map__31856 == null)))?(((((map__31856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31856):map__31856);
var db = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31857 = p__31855;
var _ = cljs.core.nth.call(null,vec__31857,(0),null);
var vals = cljs.core.nth.call(null,vec__31857,(1),null);
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(vals);
var limit = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(vals);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,"/api/logs/get",new cljs.core.Keyword(null,"fetch-logs-success","fetch-logs-success",440672751),new cljs.core.Keyword(null,"fetch-logs-failure","fetch-logs-failure",-1277115617))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch-logs-success","fetch-logs-success",440672751),(function (db,p__31861){
var vec__31862 = p__31861;
var _ = cljs.core.nth.call(null,vec__31862,(0),null);
var response = cljs.core.nth.call(null,vec__31862,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"logs","logs",1068148008),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch-accounts-failure","fetch-accounts-failure",130164813),(function (db,p__31865){
var vec__31866 = p__31865;
var _ = cljs.core.nth.call(null,vec__31866,(0),null);
var response = cljs.core.nth.call(null,vec__31866,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032),response);
}));
example.events.code = "bd12d017f3674ad65f5ea9712cf9c29d5b807112";
example.events.client_id = "28964";
example.events.redirect_uri = "http://localhost/exchange_token";
example.events.response_type = "code";
example.events.scope = "view_private,write";
example.events.approval_prompt = "force";
example.events.strava_authorize_url = ["https://www.strava.com/oauth/authorize?","client_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.client_id),"&","response_type=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.response_type),"&","redirect_uri=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.redirect_uri),"&","approval_prompt=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.approval_prompt),"&","scope=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.scope)].join('');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"strava-authorize","strava-authorize",-1027866404),(function (db,_){
cljs.core.print.call(null,"GET auth: ",example.events.strava_authorize_url);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,example.events.strava_authorize_url,new cljs.core.Keyword(null,"process-response","process-response",-26308683),new cljs.core.Keyword(null,"bad-response","bad-response",1911422950))], null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__31869){
var vec__31870 = p__31869;
var _ = cljs.core.nth.call(null,vec__31870,(0),null);
var response = cljs.core.nth.call(null,vec__31870,(1),null);
cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.js__GT_clj.call(null,response));

return cljs.core.print.call(null,"good response",response);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__31873){
var vec__31874 = p__31873;
var _ = cljs.core.nth.call(null,vec__31874,(0),null);
var response = cljs.core.nth.call(null,vec__31874,(1),null);
cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.js__GT_clj.call(null,response));

return cljs.core.print.call(null,"bad response",response);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-authorize-strava","get-authorize-strava",-961827637),(function (p__31877,p__31878){
var map__31879 = p__31877;
var map__31879__$1 = ((((!((map__31879 == null)))?(((((map__31879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31879):map__31879);
var db = cljs.core.get.call(null,map__31879__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31880 = p__31878;
var _ = cljs.core.nth.call(null,vec__31880,(0),null);
var vals = cljs.core.nth.call(null,vec__31880,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,"/api/strava/authorize",new cljs.core.Keyword(null,"get-authorize-strava-success","get-authorize-strava-success",1351159201),new cljs.core.Keyword(null,"get-authorize-strava-fail","get-authorize-strava-fail",1507233561))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-authorize-strava-success","get-authorize-strava-success",1351159201),(function (db,p__31884){
var vec__31885 = p__31884;
var _ = cljs.core.nth.call(null,vec__31885,(0),null);
var response = cljs.core.nth.call(null,vec__31885,(1),null);
return cljs.core.print.call(null,"strava authoize success ",response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-authorize-strava-fail","get-authorize-strava-fail",1507233561),(function (db,p__31888){
var vec__31889 = p__31888;
var _ = cljs.core.nth.call(null,vec__31889,(0),null);
var response = cljs.core.nth.call(null,vec__31889,(1),null);
return cljs.core.print.call(null,"strava authoize fail ",response);
}));
example.events.github_origin = "https://api.github.com";
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-github-events","get-github-events",2123865953),(function (p__31892,p__31893){
var map__31894 = p__31892;
var map__31894__$1 = ((((!((map__31894 == null)))?(((((map__31894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31894):map__31894);
var db = cljs.core.get.call(null,map__31894__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__31895 = p__31893;
var _ = cljs.core.nth.call(null,vec__31895,(0),null);
var vals = cljs.core.nth.call(null,vec__31895,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.github_origin),"/orgs/reagent-project/events"].join(''),new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),(function (db,p__31899){
var vec__31900 = p__31899;
var _ = cljs.core.nth.call(null,vec__31900,(0),null);
var response = cljs.core.nth.call(null,vec__31900,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964),(function (db,p__31903){
var vec__31904 = p__31903;
var _ = cljs.core.nth.call(null,vec__31904,(0),null);
var response = cljs.core.nth.call(null,vec__31904,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"adam",new cljs.core.Keyword(null,"email","email",1415816706),"whatever",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null));
}));

//# sourceMappingURL=events.js.map?rel=1538262333063
