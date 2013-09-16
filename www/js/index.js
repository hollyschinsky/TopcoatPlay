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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onLoad: function() {
        console.log("On load");
        var slideMenuButton = document.getElementById('slide-menu-button');
        slideMenuButton.onclick = function (e) {
            var cl = document.body.classList;
            if (cl.contains('left-nav')) {
                cl.remove('left-nav');
            } else {
                cl.add('left-nav');
            }
        };
        this.showView('button-bar-tpl');
        var tab = document.getElementById('tab1');
        tab.classList.add('is-active');
    },
    toggle: function(elName) {
        var overlay = document.getElementById(elName);
        var cl = overlay.classList;
        if (cl.contains('off')) {
            cl.remove('off');
            var progress_bar = document.getElementById('progress_bar')

            setInterval(function(){
                var attr= progress_bar.getAttribute('style');
                var width = parseInt(attr.substring(attr.length-3,attr.length-1))+10;
                if (width=="100"){
                    progress_bar.setAttribute('style', 'width:'+width+'%');
                    cl.add('off');
                } else progress_bar.setAttribute('style', 'width:'+width+'%');
            },600);
        } else {
            cl.add('off');
        }
    },
    setRange: function() {
        var range = document.getElementById('range');

    },
    showView: function(template) {
        var content = document.getElementById('content');
        if (template=='overlay') {
            document.getElementById('tab1').classList.remove('is-active');
            this.toggle('overlay');
        }
        else {
            content.innerHTML = $("#"+template).html();

//        if (template=='overlay-tpl') {
//            var progress_bar = document.getElementById('progress_bar')
//
//            setInterval(function(){
//                var attr= progress_bar.getAttribute('style');
//                var width = parseInt(attr.substring(attr.length-3,attr.length-1))+10;
//                if (width!="100") progress_bar.setAttribute('style', 'width:'+width+'%');
//                //else cl.add('off');
//            },600);
//        }

            if (template!='button-bar-tpl') document.getElementById('tab1').classList.remove('is-active');
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var slideMenuButton = document.getElementById('slide-menu-button');
        slideMenuButton.onclick = function (e) {
            var cl = document.body.classList;
            if (cl.contains('left-nav')) {
                cl.remove('left-nav');
            } else {
                cl.add('left-nav');
            }
        };
    }
};
