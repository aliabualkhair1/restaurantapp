import { Routes } from '@angular/router';
import { LogIn } from './Components/AuthenticationModels/log-in/log-in';
import { Home } from './Components/Models/home/home';
import { Registration } from './Components/AuthenticationModels/registration/registration';
import { Menu } from './Components/Models/menu/menu';
import { Menuitems } from './Components/Models/menuitems/menuitems';
import { Dashboard } from './Components/Models/Dashboarditems/dashboard/dashboard';
import { Getallorders } from './Components/Models/getallorders/getallorders';
import { Orderitems } from './Components/Models/orderitems/orderitems';
import { Getreservations } from './Components/Models/getreservations/getreservations';
import { Userreservations } from './Components/Models/getreservations/userreservations/userreservations/userreservations';
import { Getcomplaintsandsuggestions } from './Components/Models/getcomplaintsandsuggestions/getcomplaintsandsuggestions';
import { Getusercomplaintsandsuggestions } from './Components/Models/getcomplaintsandsuggestions/getusercomplaintsandsuggestions/getusercomplaintsandsuggestions/getusercomplaintsandsuggestions';
import { Users } from './Components/Models/users/users';
import { Ordersfeedback } from './Components/Models/ordersfeedback/ordersfeedback';
import { Userordersfeedback } from './Components/Models/ordersfeedback/userordersfeedback/userordersfeedback/userordersfeedback';
import { Reservationsfeedback } from './Components/Models/reservationsfeedback/reservationsfeedback';
import { Userreservationsfeedback } from './Components/Models/reservationsfeedback/userreservationsfeedback/userreservationsfeedback/userreservationsfeedback';
import { Orderspaid } from './Components/Models/Dashboarditems/orderspaid/orderspaid';
import { Userorderspaid } from './Components/Models/Dashboarditems/orderspaid/userorderspaid/userorderspaid/userorderspaid';
import { Reservationsspaid } from './Components/Models/Dashboarditems/reservationspaid/reservationsspaid';
import { Userreservationspaid } from './Components/Models/Dashboarditems/reservationspaid/userreservationspaid/userreservationspaid/userreservationspaid';
import { Orderscancelled } from './Components/Models/Dashboarditems/orderscancelled/orderscancelled';
import { Userorderscancelled } from './Components/Models/Dashboarditems/orderscancelled/userorderscancelled/userorderscancelled/userorderscancelled';
import { Reservationscancelled } from './Components/Models/Dashboarditems/reservationscancelled/reservationscancelled';
import { Userreservationscancelled } from './Components/Models/Dashboarditems/reservationscancelled/userreservationscancelled/userreservationscancelled/userreservationscancelled';
import { Categories } from './Components/Models/Dashboarditems/categories/categories';
import { Addcategory } from './Components/Models/Dashboarditems/categories/addcategory/addcategory/addcategory';
import { Restorecategory } from './Components/Models/Dashboarditems/categories/restorecategory/restorecategory/restorecategory';
import { Addmenu } from './Components/Models/Dashboarditems/categories/addmenu/addmenu';
import { Updatecategory } from './Components/Models/Dashboarditems/categories/updatecategory/updatecategory';
import { Updatemenu } from './Components/Models/menu/updatemenu/updatemenu';
import { Restoremenu } from './Components/Models/menu/restoremenu/restoremenu';
import { Returnunavailablemenu } from './Components/Models/menu/returnunavailablemenu/returnunavailablemenu';
import { Complaintsandsuggestions } from './Components/Models/complaintsandsuggestions/complaintsandsuggestions';
import { Deletedcomplaintsandsuggestions } from './Components/Models/complaintsandsuggestions/deletedcomplaintsandsuggestions/deletedcomplaintsandsuggestions';
import { Addcomplaintandsuggestion } from './Components/Models/complaintsandsuggestions/addcomplaintandsuggestion/addcomplaintandsuggestion';
import { Updatecomplaintandsuggestion } from './Components/Models/complaintsandsuggestions/updatecomplaintandsuggestion/updatecomplaintandsuggestion';
import { Tables } from './Components/Models/tables/tables';
import { Updatetable } from './Components/Models/tables/updatetable/updatetable';
import { Addtable } from './Components/Models/tables/addtable/addtable';
import { Restoredeletedtables } from './Components/Models/tables/restoredeletedtables/restoredeletedtables';
import { Updateuserdetails } from './Components/AuthenticationModels/updateuserdetails/updateuserdetails';
import { Userdetails } from './Components/AuthenticationModels/userdetails/userdetails';
import { ResetPassword } from './Components/AuthenticationModels/reset-password/reset-password';
import { Restoreaccount } from './Components/AuthenticationModels/restoreaccount/restoreaccount';
import { AllMenuitems } from './Components/Models/Dashboarditems/menuitems/menuitems';
import { Restoredeletemenuitems } from './Components/Models/Dashboarditems/menuitems/restoredeletemenuitems/restoredeletemenuitems';
import { Addmenuitem } from './Components/Models/menuitems/addmenuitem/addmenuitem';
import { Updatemenuitem } from './Components/Models/Dashboarditems/menuitems/updatemenuitem/updatemenuitem';
import { Getunavailablemenuitems } from './Components/Models/Dashboarditems/menuitems/getunavailablemenuitems/getunavailablemenuitems';
import { Updatequantity } from './Components/Models/Dashboarditems/menuitems/getunavailablemenuitems/updatequantity/updatequantity';
import { AddReservation } from './Components/reservations/add-reservation/add-reservation';
import { Reservations } from './Components/reservations/reservations';
import { Updatereservation } from './Components/reservations/updatereservation/updatereservation';
import { Getdeletedreservations } from './Components/reservations/getdeletedreservations/getdeletedreservations';
import { _Reservationsfeedback } from './Components/reservationsfeedback/reservationsfeedback';
import { Addreservationfeedback } from './Components/reservationsfeedback/addreservationfeedback/addreservationfeedback';
import { Updatereservationfeedback } from './Components/reservationsfeedback/updatereservationfeedback/updatereservationfeedback';
import { Getdeletedreservationfeedback } from './Components/reservationsfeedback/getdeletedreservationfeedback/getdeletedreservationfeedback';
import { Addorderfeedback } from './Components/Models/userordersfeedback/addorderfeedback/addorderfeedback';
import { UpdateOrderFeedback } from './Components/Models/userordersfeedback/updateorderfeedback/updateorderfeedback';
import { Getdeletedorderfeedback } from './Components/Models/userordersfeedback/getdeletedordersfeedback/getdeletedordersfeedback';
import { UserOrdersFeedback } from './Components/Models/userordersfeedback/userordersfeedback';
import { Userorders } from './Components/Models/userorders/userorders';
import { Deleteduserorders } from './Components/Models/userorders/deleteduserorders/deleteduserorders';
import { UserCart } from './Components/cart/user-cart/user-cart';
import { UserOrderItems } from './Components/Models/userorders/userorderitems/userorderitems';
import { Getdeleteuseritems } from './Components/Models/userorders/deleteduserorders/getdeleteuseritems/getdeleteuseritems';
import { Checkuser } from './Components/AuthenticationModels/checkuser/checkuser';
import { Changepassword } from './Components/AuthenticationModels/checkuser/changepassword/changepassword';
import { roleauthguardGuard } from './Guards/roleauthguard-guard';
import { GetCustomersQuestions } from './Components/Models/Dashboarditems/get-customers-questions/get-customers-questions';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home},
    { path: 'menu', component: Menu },
  { path: 'menu/:name', component: Menu },
  { path: 'restore', component: Restoremenu, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'restoredeletedmenu/:name', component: Restoremenu, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'unavailablemenu', component: Returnunavailablemenu,canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'availablemenu/:name', component: Returnunavailablemenu,canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'menuitems/:id', component: Menuitems },
  {path:'gettables',component:Tables},
  {path:'gettable/:tablenumber',component:Tables},
  { path: 'addtable', component: Addtable, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'updatetables/:id', component: Updatetable, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'restoretables', component: Restoredeletedtables, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'getdeletetable/:tablenumber', component: Restoredeletedtables, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'addmenuitem/:id', component: Addmenuitem, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'dashboard', component: Dashboard, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'users', component: Users, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'getcustomerquestions', component: GetCustomersQuestions, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'orders', component: Getallorders,canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'orderitems/:id', component: Orderitems, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'ordersfeedback', component: Ordersfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'ordersfeedback/:userid', component: Userordersfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'reservations', component: Getreservations, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'reservations/:userid', component: Userreservations, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'reservationsfeedback', component: Reservationsfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'reservationsfeedback/:userid', component: Userreservationsfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'orderspaid', component: Orderspaid, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'orderspaid/:userid', component: Userorderspaid, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'orderscancelled', component: Orderscancelled, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'orderscancelled/:userid', component: Userorderscancelled, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'reservationspaid', component: Reservationsspaid, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'reservationspaid/:userid', component: Userreservationspaid, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'reservationscancelled', component: Reservationscancelled, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
{ path: 'reservationscancelled/:userid', component: Userreservationscancelled, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path:'order',component:Userorders, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] }  },
  { path:'order/:date',component:Userorders, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] }  },
  { path: 'userorderitems/:id', component: UserOrderItems , canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
  { path: 'complaintsandsuggestions', component: Getcomplaintsandsuggestions },
  { path: 'complaintsandsuggestions/:userid', component: Getusercomplaintsandsuggestions },
  { path: 'usercomplaintsandsuggestions', component: Complaintsandsuggestions, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] }  },
  { path: 'addmenu', component: Addmenu, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'updatemenu/:id', component: Updatemenu, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'deletemenu/:id', component: Menu, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'restoredeletedcategories', component: Restorecategory, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'restoredeletedcategories/:name', component: Restorecategory, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'restoredeletedcategories/restore/:id', component: Restorecategory, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'categories', component: Categories, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'categories/:name', component: Categories, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },  
  { path: 'addcategory', component: Addcategory, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'updatecategory/:id', component: Updatecategory, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'addcomplaintsandsuggestions', component: Addcomplaintandsuggestion, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
  { path: 'updatecomplaintsandsuggestions/:id', component: Updatecomplaintandsuggestion, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
  { path: 'userdeletedcomplaintsandsuggestions', component: Deletedcomplaintsandsuggestions, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] }  },
    { path: 'menuitems', component: AllMenuitems, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'restoremenuitems', component: Restoredeletemenuitems, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'updatemenuitem/:id', component: Updatemenuitem, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
   { path: 'unavailable', component: Getunavailablemenuitems, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'available/:id', component: Updatequantity, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
    {path:'reservation',component:Reservations, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
  { path: 'reservation/:date', component: Reservations, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
  { path: 'addreservation/:id', component: AddReservation, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
  { path: 'updatereservation/:id', component: Updatereservation, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] }  },
{ path: 'deletedreservations', component: Getdeletedreservations, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'deletedreservations/:date', component: Getdeletedreservations, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'getreservationsfeedback', component:_Reservationsfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'addreservationfeedback/:id', component: Addreservationfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'updatereservationfeedback/:id', component: Updatereservationfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'deletedreservationsfeedback', component: Getdeletedreservationfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'deletedreservationsfeedback/:date', component: Getdeletedreservationfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'deleteduseritems/:id', component: Getdeleteuseritems, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'deletedorders', component: Deleteduserorders, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'deletedorders/:date', component: Deleteduserorders, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'getordersfeedback', component: UserOrdersFeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'getordersfeedback/:date', component: UserOrdersFeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'addorderfeedback/:id', component: Addorderfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'updateorderfeedback/:id', component: UpdateOrderFeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'deletedordersfeedback', component: Getdeletedorderfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
{ path: 'deletedordersfeedback/:date', component: Getdeletedorderfeedback, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
  { path: 'cart', component: UserCart, canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
  { path: 'login', component: LogIn },
  { path: 'register', component: Registration },
  { path: 'getuserinfo', component: Userdetails , canActivate: [roleauthguardGuard], data: { roles: ['Customer','Staff','AdminAssistant','Admin'] } },
  { path: 'updateuserinfo', component: Updateuserdetails, canActivate: [roleauthguardGuard], data: { roles: ['Admin','AdminAssistant'] } },
  { path: 'restoreaccount', component: Restoreaccount },
  { path: 'resetpassword', component: ResetPassword },
  { path: 'checkdata', component: Checkuser},
  { path: 'changepassword', component: Changepassword },
  { path: '**', redirectTo: 'home' }
];
