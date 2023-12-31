import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ilogin} from "../interfaces/ilogin";
import {Observable} from "rxjs";
import {Itoken} from "../interfaces/itoken";
import {Imassage} from "../interfaces/imassage";
import {Iaccount} from "../interfaces/iaccount";
import {Iposts} from "../interfaces/iposts";
import {Itypes} from "../interfaces/itypes";
import {Icategory} from "../interfaces/icategory";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //baseURL = "http://192.168.22.31:8080/codebase/api/";
  baseURL = "http://91.101.23.138/codebase/api/";
  //baseURLCapi = "";

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  /*
  The Login and Logout api call will be shown here.
   */
  login(login:Ilogin): Observable<Itoken> {
    return this.http.get<Itoken>(this.baseURL + 'login/login.php?email='+login.email+'&password='+login.password);
  }

  logout(data:Ilogin): Observable<Imassage> {
    let body = JSON.stringify(data);
    return this.http.put<Imassage>(this.baseURL + 'login/logout.php', body, {headers: this.headers});
  }

  checkOwner(): Observable<any> {
    return this.http.get(this.baseURL + 'account/check.php');
  }

  /*
  All accounts and profile api call will be coming down below.
   */
  createAccount(account: Iaccount): Observable<Imassage> {
    const body = JSON.stringify(account);
    return this.http.post<Imassage>(this.baseURL + 'account/insert.php', body, {headers: this.headers});
  }

  getProfileData(data: Iaccount): Observable<Iaccount> {
    //console.log('ApiService: ', data);
    return this.http.get<Iaccount>(this.baseURL + 'profile/single.php?id=' +data.account_id);
  }

  getTeam(data: Iaccount): Observable<Iaccount[]> {
    return this.http.get<Iaccount[]>(this.baseURL + 'profile/teams.php?id='+data.instructor_id+'&role_id='+data.role_id);
  }

  getAccounts(): Observable<Iaccount[]> {
    return this.http.get<Iaccount[]>(this.baseURL + 'profile/profiles.php');
  }

  studentCounter(data: Iaccount): Observable<any> {
    return this.http.get(this.baseURL + 'account/studentCounter.php?role_id='+data.role_id);
  }

  /*
  Posts and Articles goes here with all api calls
   */
  counter(data: Iposts): Observable<any> {
    return this.http.get(this.baseURL + 'forum/counter.php?type_id='+data.post_type_id);
  }

  getPostTypes(): Observable<Itypes[]> {
    return this.http.get<Itypes[]>(this.baseURL + 'forum/post_types.php');
  }

  getCategoryList(): Observable<Icategory[]> {
    return this.http.get<Icategory[]>(this.baseURL + 'categories/category_list.php');
  }

  getCategories(post_type_id: any): Observable<Icategory[]> {
    return this.http.get<Icategory[]>(this.baseURL + 'categories/categories.php?type_id='+post_type_id);
  }

  getSingleType(id: Itypes):Observable<Itypes> {
    return this.http.get<Itypes>(this.baseURL + 'types/single.php?type_id='+id.post_type_id);
  }

  getSingleCategory(id: Icategory): Observable<Icategory> {
    return this.http.get<Icategory>(this.baseURL + 'categories/single.php?id=' + id.category_id);
  }

  getForumPosts(id: Iposts): Observable<Iposts[]> {
    return this.http.get<Iposts[]>(this.baseURL + 'forum/posts.php?id='+id.category_id);
  }
}
