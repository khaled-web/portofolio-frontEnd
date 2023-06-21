import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 TOGGLE_SIDEBAR,
 REPLY_MESSAGE_SUCCESS
} from './action'

const reducer = (state, action) => {
 //openSideBar
 if (action.type === SIDEBAR_OPEN) {
  return {
   ...state,
   isSidebarOpen: true
  }
 }
 //closeSideBar
 if (action.type === SIDEBAR_CLOSE) {
  return {
   ...state,
   isSidebarOpen: false
  }
 }
 //toggle-sidebar
 if (action.type === TOGGLE_SIDEBAR) {
  return {
   ...state,
   isSidebarOpen: !state.isSidebarOpen
  }
 }
 //clear alert
 if (action.type === CLEAR_ALERT) {
  return {
   ...state,
   showAlert: false,
   alertType: '',
   alertText: ''
  }
 }
 //display alert
 if (action.type === DISPLAY_ALERT) {
  return {
   ...state,
   showAlert: true,
   alertType: 'danger',
   alertText: 'Please provide all values'
  }
 }
 //serverMessageSuccess
 if (action.type === REPLY_MESSAGE_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'success',
   alertText: 'I Will Contact You Soon...',
  }
 }

 throw new Error(`no such action : ${action.type}`)
}

export default reducer;