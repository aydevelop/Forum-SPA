import AppStorage from '~/Helpers/AppStorage'
export default function ({ $axios, redirect, store }) {

  $axios.interceptors.request.use(request => {
    {
	  const token = localStorage.getItem('token');
      request.headers.common['Authorization'] = `Bearer ${token}`;
      $axios.setHeader('Authorization', `Bearer ${token}`)
    }

    return request
  })

  $axios.onError(error => {
    if (error.response) {
      if (error.response.status === 401) {
        AppStorage.clear()
        redirect('/login')
      }

      if (error.response.status === 500) {
        console.error('Server 500 error')
      }
    }
  })
}
