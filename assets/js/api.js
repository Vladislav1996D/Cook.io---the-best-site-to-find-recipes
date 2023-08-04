'use strict'

window.ACCESS_POINT = 'https://api.edamam.com/api/recipes/v2'

const APP_ID = 'dd6a960a'
const API_KEY = '9cd127910850bb178000a789afa458cc'
const TYPE = 'public'

export const fetchData = async function (queries, successCallback) {
  const query = queries?.join('&').replace(/,/g, '=').replace(/ /g, '%20').replace(/\+/g, '%2B')

  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ''}`

  const response = await fetch(url)

  if (response.ok) {
    const data = await response.json()
    successCallback(data)
  }
}
