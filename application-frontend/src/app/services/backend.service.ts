import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Device } from '../models/device';
import { Line } from '../models/line';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseURL = environment.apiURL;

  postUser = new User(0,'','','','');
  getUser = new User(0,'','','','');
  putUser = new User(0,'','','','');
  deletedUser = new User(0,'','','','');
  allUsers: User[] = [];

  postDevice = new Device('','',0,'',0);
  getDevice = new Device('','',0,'',0);
  putDevice = new Device('','',0,'',0);
  deletedDevice = new Device('','',0,'',0);
  allDevices: Device[] = [];

  postLine = new Line(0,0,'');
  getLine = new Line(0,0,'');
  putLine = new Line(0,0,'');
  deletedLine = new Line(0,0,'');
  allLines: Line[] = [];

  postPlan = new Plan(0,0,0,0,'');
  getPlan = new Plan(0,0,0,0,'');
  putPlan = new Plan(0,0,0,0,'');
  deletedPlan = new Plan(0,0,0,0,'');
  allPlans: Plan[] = [];


  constructor(private http: HttpClient) { }

  ///////////////
  /////USERS/////
  ///////////////

  /**
   * POST /user
   */
  register(user: User) {
    this.http.post<any>(this.baseURL + 'user', user, {observe: 'response'}).subscribe({
      next : data => this.postUser = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('User registered')
    });
  }

  /**
   * 
   */
  login(userName: string, hashedPw: string) {
    
  }

  /**
   * GET /user/{id}
   */
  getUserById(id: number) {
    this.http.get<any>(this.baseURL + 'user/' + id, {observe: 'response'}).subscribe({
      next : data => this.getUser = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('User retrieved by ID')
    });
  }

  /**
   * GET /user/{email}
   */
  getUserByEmail(email: string) {
    this.http.get<any>(this.baseURL + 'user/' + email, {observe: 'response'}).subscribe({
      next : data => this.getUser = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('User retrieved by email')
    });
  }

  /**
   * GET /user
   */
  getAllUsers() {
    this.http.get<any>(this.baseURL + 'user', {observe: 'response'}).subscribe({
      next : data => this.allUsers = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('All users retrieved')
    });
  }

  /**
   * PUT /user/{id}
   */
  editUser(id: string, user: {}) {
    this.http.put<any>(this.baseURL + 'user/' + id, user, {observe: 'response'}).subscribe({
      next : data => this.putUser = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('User edited')
    });
  }

  // DELETE /user/{id}
  deleteUser(id: string) {
    this.http.delete<any>(this.baseURL + 'user/' + id, {observe: 'response'}).subscribe({
      next : data => this.deletedUser = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('User deleted')
    });
  }

  /////////////////
  /////DEVICES/////
  /////////////////

  /**
   * GET /device
   */
  getAllDevices() {
    this.http.get<any>(this.baseURL + 'device', {observe: 'response'}).subscribe({
      next : data => this.allDevices = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('All devices retrieved')
    });
  }

  /**
   * GET /device/{id}
   */
  getDeviceById(id: string) {
    this.http.get<any>(this.baseURL + 'device/' + id, {observe: 'response'}).subscribe({
      next : data => this.getDevice = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Device retrieved by ID')
    });
  }

  /**
   * POST /device
   */
  createDevice(device: Device) {
    this.http.post<any>(this.baseURL + 'device', {observe: 'response'}).subscribe({
      next : data => this.postDevice = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Device created')
    });
  }

  /**
   * PUT /device/{id}
   */
  updateDevice(id: string) {
    this.http.put<any>(this.baseURL + 'device/' + id, {observe: 'response'}).subscribe({
      next : data => this.putDevice = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Device updated')
    });
  }

  /**
   * DELETE /device/{id}
   */
  deleteDevice(id: string) {
    this.http.delete<any>(this.baseURL + 'device/' + id, {observe: 'response'}).subscribe({
      next : data => this.deletedDevice = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Device deleted')
    });
  }

  ///////////////
  /////LINES/////
  ///////////////

  /**
   * GET /line
   */
  getAllLines() {
    this.http.get<any>(this.baseURL + 'line', {observe: 'response'}).subscribe({
      next : data => this.allLines = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('All lines retrieved')
    });
  }

  /**
   * GET /line/{id}
   */
  getLineById(id: string) {
    this.http.get<any>(this.baseURL + 'line' + id, {observe: 'response'}).subscribe({
      next : data => this.getLine = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Line retrieved by ID')
    });
  }

  /**
   * GET /line/{number}
   */
  getLineByNumber(num: number) {
    this.http.get<any>(this.baseURL + 'line' + num, {observe: 'response'}).subscribe({
      next : data => this.getLine = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Line retrieved by phone number')
    });
  }

  /**
   * POST /line
   */
  createLine() {
    this.http.post<any>(this.baseURL + 'line', {observe: 'response'}).subscribe({
      next : data => this.postLine = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Line created')
    });
  }

  /**
   * PUT /line/{id}
   */
  updateLine(id: string) {
    this.http.put<any>(this.baseURL + 'line/' + id, {observe: 'response'}).subscribe({
      next : data => this.putLine = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Line updated')
    });
  }

  /**
   * DELETE /line/{id}
   */
  deleteLine(id: string) {
    this.http.delete<any>(this.baseURL + 'line/' + id, {observe: 'response'}).subscribe({
      next : data => this.deletedLine = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Line deleted')
    });
  }

  ///////////////
  /////PLANS/////
  ///////////////

  /**
   * GET /plan
   */
  getAllPlans() {

  }

  /**
   * GET /plan/{id}
   */
  getPlanById() {

  }

  /**
   * POST /plan
   */
  createPlan() {

  }

  /**
   * PUT /plan/{id}
   */
  updatePlan() {

  }

  /**
   * DELETE /plan/{id}
   */
  deletePlan() {

  }

}
