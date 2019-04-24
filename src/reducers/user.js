const initUserState = {
  name: '',
  passWord: '',
  phone: '',
  theme: ''
}
const user = (state = initUserState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_INFORMATION':
      return [
        ...state,
        ...action.userInformation
      ]
    default:
      return state
  }
}
export default user