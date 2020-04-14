const COOKIE_NAME = 'page_id';
const URL_ARRAY = 'https://cfw-takehome.developers.workers.dev/api/variants';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Return one of 2 URLs
 * @param {Request} request
 */
async function handleRequest(request){
	//collect list of urls
	let response = await fetch(URL_ARRAY);
	let urls = await response.json();
	

	//if cookies exist, set page. else, randomly select page and set cookie
	const cookie = await getCookie(request, COOKIE_NAME);
	let c;
	if(cookie){
		c = cookie;
	} else {
		c = await Math.round(Math.random()); //Get either 0 or 1
	}

	//Fetch data and modify HTML elements:
	const res = await fetch(urls.variants[c]);
	const rewrote = await new HTMLRewriter().on('*', new ElementHandler(c)).transform(res);
	
	//append a cookie if not previously set
	if(!cookie){ await rewrote.headers.append('Set-Cookie', `${COOKIE_NAME}=${c}; path=/`); }
	return rewrote;
}

//rewrite html using this data
data = [
{
	'title' : 'Oneeeeee',
	'h1#title' : 'I am Wen Hong',
	'p#description' : 'Or you can call me Brandon.',
	'a#url' : 'Check out my travels here.',
	'link_out' : 'https://wenhongl.com/travels' 
},
{
	'title' : 'Twoooooo',
	'h1#title' : 'I am Brandon',
	'p#description' : 'Or you can call me Wen Hong.',
	'a#url' : 'Check out my portfolio here.',
	'link_out' : 'https://wenhongl.com/portfolio'
}
]
class ElementHandler {
	constructor(num){
		this.dict = data[num];
	}
	element(element){
		//get element name#id
		let name = element.tagName ;
		let id = element.getAttribute('id');
		if(id!=null){ name += ('#' + id); }

		//if element should be replaced, replace it
		if(this.dict.hasOwnProperty(name)){
			element.setInnerContent(this.dict[name]);
		}
		//for a#url, modify the link
		if(name=='a#url'){
			element.setAttribute('href', this.dict['link_out']);
		}
	}
}

/**
 * Grabs the cookie with name from the request headers
 * @param {Request} request incoming Request
 * @param {string} name of the cookie to grab
 */
function getCookie(request, name) {
  let result = null
  let cookieString = request.headers.get('Cookie')
  if (cookieString) {
    let cookies = cookieString.split(';')
    cookies.forEach(cookie => {
      let cookieName = cookie.split('=')[0].trim()
      if (cookieName === name) {
        let cookieVal = cookie.split('=')[1]
        result = cookieVal
      }
    })
  }
  return result
} // Taken from Cloudflare's template gallery