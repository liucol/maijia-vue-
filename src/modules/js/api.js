/**
 * Created by User on 2018/3/27.
 */
let url = {
   hotLists: '/getgoodsmessage'
}

//开发环境和真实环境的切换
/*let  host = ''*/  /* 'http://rapapi.org/mockjsdata/23334'*/
let  host = 'http://rapapi.org/mockjsdata/32667'

for(let  key in url){
  if(url.hasOwnProperty(key)){
      url[key] = host + url[key]
  }
}

export default url