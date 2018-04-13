const defaultState = {
  menuActive: 'home'
}
export const root = (state = defaultState, action) => {
    switch (action.type) {
      case 'CHANGE_MENU':
        return {
          ...state,
          menuActive: action.menuActive
        }

      default:
        return state
    }
  }
  