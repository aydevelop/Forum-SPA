import User from '~/Helpers/User'
import Vue from 'vue'

window.User = User
window.EventBus = new Vue()



import Echo from "laravel-echo"

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'a32233ed6ed4fe56efce',
    cluster: 'eu',
    encrypted: true
});