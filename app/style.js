c_url_scss = path.match(/src\/scss/);
c_url_js = path.match(/src\/js/);
c_url_layouts = path.match(/blog\/layouts/);
if (c_url_scss() != null) {
  console.log('scss change')
} else if (c_url_layouts() != null ){
  console.log('layouts change')
} else if (c_url_js() != null ){
  console.log('js change')
} else if (c_url_content() != null ){
  console.log('content change')
} else if (c_config_content() != null ){
  console.log('content change')
}
