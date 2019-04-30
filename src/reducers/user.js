const jsonUserInformation = sessionStorage.getItem('userInformation') ? JSON.parse(sessionStorage.getItem('userInformation')) : {}

const initUserState = {
  name: jsonUserInformation.name || '',
  phone: jsonUserInformation.phone || '',
  theme: jsonUserInformation.theme || ''
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