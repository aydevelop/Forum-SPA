import User from '~/Helpers/User'
import Vue from 'vue'

window.User = User
window.EventBus = new Vue()
