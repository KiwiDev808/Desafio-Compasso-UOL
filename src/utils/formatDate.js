export function formatDate(dateString) {
  const todayDate = new Date()
  const passedDate = new Date(dateString)

  const formatedString = passedDate.toDateString().slice(4)
  if (passedDate.getFullYear() !== todayDate.getFullYear()) {
    return formatedString
  }

  return formatedString.slice(0, 7)
}
