const http = require('http')
const cheerio = require('cheerio')
const url = 'http://www.jt314.com'

function filter(html){
    const $ = cheerio.load(html)
    const contentList = $('.zcbzz')
    let arrData = []
    contentList.each((item)=>{
        let title = $(this).find('h5').children().text()
        console.log(title, "sdsdsds")
        let content = $(this).find('li')
        let arr =
            {
                itemTitle: title,
                itemArr: []
            }
        content.each((item1)=>{
            arr.itemArr.push($(this).find("a").text())
        })
        arrData = arr
    })
    return arrData
}

function printInfo(filterData) {
    filterData.forEach(item => {
        console.log(item.itemTitle + '\n')
        item.itemArr.forEach(item1=>{
            console.log(item1 + '\n')
        })
    })
}

http.get(url, function(res) {
    let html = ''
    res.on('data', function(data){  // 请求得到的数据
        html += data
    })

    res.on('end', function(){     //请求结束
        let filterData = filter(html)
        console.log(filterData)
       // printInfo(filterData)
    })
}).on('error', function() {
    console.log('获取数据出错！')
})
