export default function handleApiError(error, customMessage) {
  if (error.response) {
    console.error(
      `${customMessage} -❌ Status: ${error.response.status}, Data: ${error.response.data}`,
    )
  } else if (error.request) {
    console.error(`${customMessage} -  ❌ No response received:`, error.request)
  } else {
    console.error(`${customMessage} - ❌ Error:`, error.message)
  }
  throw error
}
