getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/1.css')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插到头里面
                document.head.appendChild(style)
            }else{
                alert('加载css失败')
            }
        }
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }else{
                alert('加载js失败')
            }
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }else{
                alert('加载html失败')
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >=200 && request.status  < 300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
                alert('加载xml失败')
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            }else{
                alert('加载json失败')
            }
        }
    }
    request.send()
}

let n = 1
getPAGE.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    console.log('one')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const array = JSON.parse(request.response)
                array.forEach(item => {
                        const li = document.createElement('li')
                        li.textContent = item.id
                        xxx.appendChild(li)
                    })
            }else(
                alert(`没有第${n+1}页了！`)
            )
            n+=1
        }
    }
    request.send()
}