
// window.alert('Welcome to my Profile Card')

const time = new Date().getHours()
const morning = 12;
const afternoon = 18;
// const night= 18;
if (time  < 12) {
  window.alert('Hello, Good Morning. Welcome to my Profile Card!')

} else if ( time < 18) {
  window.alert('Hello, Good Afternoon. Welcome to my Profile Card!')

}  else {
  window.alert('Hello, Good Evening. Welcome to my Profile Card!')
}