// let div = document.createElement('div')

// div.className = 'main'
// // div.setAttribute('title', 'generated title')

// div.style.background = 'green'
// div.padding = '20px'
// div.innerHTML = 'ruhul'

// document.body.appendChild(div)

// // console.log(div)



// let main1 = document.querySelector('.main1')
// main1.style.background = 'green'

// let div = document.createElement('div')

// div.className = 'content_box'

// div.innerHTML= 'hi ruhul'

// main1.appendChild(div)

// let banner = document.querySelector('.banner')

// let div = document.createElement('div')
// let content = document.createElement('div')
// div.className = 'image_part'
// div.innerHTML = 'hi'

// content.className = 'content_section'

// banner.appendChild(content)

// banner.appendChild(div)


// edit and remove elements in dom  
function addLanguage (langName){
  let li = document.createElement('li')
  li.innerHTML = `${langName}`
  let store = document.querySelector('.language')
  store.appendChild(li)
}
addLanguage('Python')
addLanguage('javascript')


function addOptiLanguage(langName){
 let li =   document.createElement('li')
 li.appendChild(document.createTextNode(langName))
 let store2 = document.querySelector('.language')
 store2.appendChild(li)
}

addOptiLanguage('c++')
addLanguage('c')