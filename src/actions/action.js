export const actionTypes = {
  FILTER_TEXT_CHANGED : 'FILTER_TEXT_CHANGED'
}

export const filterTextChanged = text => ({
  type: actionTypes.FILTER_TEXT_CHANGED,
  text
})