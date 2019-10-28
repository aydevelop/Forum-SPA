export default function ({ $axios, redirect, store }) {

  $axios.interceptors.request.use(request => {
    {
	  const token = localStorage.getItem('token');
      request.headers.common['Authorization'] = `Bearer ${token}`;
      $axios.setHeader('Authorization', `Bearer ${token}`)
    }

    return request
  })

}
