// import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
export default defineEventHandler(async (event) => {
  var myHeaders = new Headers();
  for (let i = 1; i < event.req.rawHeaders.length; i += 2)
    myHeaders.append(event.req.rawHeaders[i - 1], event.req.rawHeaders[i]);

  // var urlencoded = new URLSearchParams();
  // urlencoded.append("tab_id", "b674e1eb792f48e167aa34717a89e0e829082");

  var requestOptions = {
    method: event.req.method,
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  return {
    ok: true,
    message: '測試 [' + event.req.method + '] ' + event.req.url,
    data: await fetch('https://api.zxcv.cx' + event.req.url.replace('/api', ''), requestOptions)
      .then(response => response.text())
  }
})