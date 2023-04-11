/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage); 
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage); 
var localStorage = window.localStorage; 
function setLocalStorage() { 
    var name = prompt("Please enter your name");
    var age = prompt("Please enter your age");
    var job = prompt("Please enter your job");
    localStorage.setItem("Name", name); 
    localStorage.setItem("Job", job); 
    localStorage.setItem("Age", age); 
 } 

 function showLocalStorage() { 
    alert("Name: " +localStorage.getItem("Name") +
    "\nAge: "+localStorage.getItem("Age")+ 
    "\nJob: "+localStorage.getItem("Job")); 
    } 	
 document.getElementById("getLocation").addEventListener("click", getLocation);

 function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + 
    "\nLongitude: " + position.coords.longitude);
  }