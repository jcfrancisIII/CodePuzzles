var localNoobTest = {
  isNoob () {
    /* for testing true
    var getLocalNoob = localStorage.getItem('localNoobTest')
    // console.log('from local store ' + JSON.stringify(getLocalNoob))

    // After trying to get the data it will return true or null
    // test those then return the value that coresponds to the claim button being opened
    if (getLocalNoob === null && getLocalNoob !== true) {
      // console.log(`yes isNoob`)
      return true
    } else {
      // console.log(`no isNoob`)
      return false
    }
    */
    return false
  },
  isCompleteNoob () {
    /* for testing true
    var getLocalCompleteNoob = localStorage.getItem('localCompleteNoobTest')
    // console.log('from local store ' + JSON.stringify(getLocalCompleteNoob))

    // After trying to get the data it will return true or null
    // test those then return the value that coresponds to the initial dialogue being opened
    if (getLocalCompleteNoob === null && getLocalCompleteNoob !== true) {
      // console.log(`yes isCompleteNoob`)
      return true
    } else {
      // console.log(`no isCompleteNoob`)
      return false
    }
     */
    return true
  }
}
console.log(`is a noob ${localNoobTest.isNoob()}`)
// console.log(`is a completenoob ${localNoobTest.isCompleteNoob()}`)

export {localNoobTest}
