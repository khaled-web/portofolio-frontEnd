//.............
//importing
//.............

import React, {
 useReducer,
 useContext,
} from 'react';
import {
 DISPLAY_ALERT,
 CLEAR_ALERT,
 TOGGLE_SIDEBAR,
 SIDEBAR_OPEN,
 SIDEBAR_CLOSE,
 REPLY_MESSAGE_SUCCESS
} from './action';
import reducer from './reducer'

//.............
//App.
//.............

//initialState
const initialState = {
  //authIssues
 isLoading: false,
 showAlert: false,
 alertText: '',
 alertType: '',
 isSidebarOpen:false
}

//AppContext
const AppContext = React.createContext();

//AppProvider->>index.js
const AppProvider = ({children})=>{
 const [state, dispatch]=useReducer(reducer, initialState);


  //openSidebar
  const openSideBar = ()=>{
    dispatch({type:SIDEBAR_OPEN})
  }
  //closeSideBar
  const closeSideBar = ()=>{
    dispatch({type:SIDEBAR_CLOSE})
  }
  //Toggle-sidebar
  const toggleSidebar = ()=>{
    dispatch({type:TOGGLE_SIDEBAR})
  }

  //clearAlert
  const clearAlert = ()=>{
    setTimeout(()=>{
      dispatch({type:CLEAR_ALERT})
    },3000)
  }
  //display alert
  const displayAlert = ()=>{
    dispatch({type:DISPLAY_ALERT})
    clearAlert()
  }
  //replyMessageSuccess
  const replyMessageSuccess = ()=>{
    dispatch({type:REPLY_MESSAGE_SUCCESS})
    clearAlert()
  }

  return <AppContext.Provider value={{
  ...state,
  openSideBar, 
  closeSideBar,
  toggleSidebar,
  clearAlert,
  displayAlert,
  replyMessageSuccess
  }}>
  {children}
 </AppContext.Provider>
}

//useAppContext
const UseAppContext = ()=>{
 return useContext(AppContext)
}

//.............
//exporting.
//.............
//export AppProvider, initialState
export {AppProvider, initialState, UseAppContext}