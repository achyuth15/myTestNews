let width=screen.width

if (performance.navigation.type === 1) {
    console.log('Page is being refreshed');
  } else {
    console.log('Page is not being refreshed');
  }

sessionStorage.clear()
function load(arr){
    console.log(arr)
    
}
//let s
function getinitialdata(arrayData,id){
    //sessionStorage.setItem('arrayData',JSON.stringify(arrayData.slice(1,arrayData.length)))
    //console.log(arrayData)
    var storedArrayString = sessionStorage.getItem('arrayData');
    var storedArray = JSON.parse(storedArrayString);
    console.log(storedArray)
    if(id.slice(1,id.length)=='newsInput'){
        window.location.href='newsInput.html'
        history.pushState({}, newTitle, 'newsInput');
        return
    }
    if (id.length>1){
        reloadPage(id)
        return
    }
   

    let mainScriptCon=document.getElementById('MainScriptCon')
    let mainScriptHeight=mainScriptCon.clientHeight
    let dataLength=arrayData.length
    let mainTitle=document.getElementById('Main-Title')
    let mainScript=document.getElementById('Main-Script')
    let mainImg=document.getElementById('mainImg')
    mainImg.setAttribute('src',arrayData[dataLength-1][4])
    let mainNewsId=arrayData[dataLength-1][0]
    //console.log(mainNewsId)
    mainTitle.innerHTML=arrayData[dataLength-1][2]
    mainScript.innerHTML=arrayData[dataLength-1][3]
// changing side bar
    let DivSideBar=document.getElementById('largeSidebarID')
    
// changing side bar
    let count=0
    maxLiElements=10
    let liArray=arrayData.slice(-maxLiElements)
    //console.log(liArray)
    console.log(arrayData.slice(arrayData.length-maxLiElements-9,arrayData.length-maxLiElements))
    liArray.forEach(element => {
        if(element[0] !==mainNewsId && element[0]!=='ID'){
            count+=1
            let rowDivElement=document.createElement('div')
            rowDivElement.setAttribute('class','row siderowcontainer liCard miniCard'+count)
            rowDivElement.setAttribute('onclick','miniCardClick(this)')
            rowDivElement.setAttribute('id',element[0])
            
            colDivElementImg=document.createElement('div')
            colDivElementImg.setAttribute('class','col-3')
            imgElement=document.createElement('img')
            imgElement.setAttribute('src',element[4])
            //imgElement.setAttribute('style','width:100px')
            imgElement.setAttribute('class','sidebarImg')
            imgElement.setAttribute('id','sidebarImgId'+count)
            colDivElementImg.appendChild(imgElement)

            colDivElementP=document.createElement('div')
            colDivElementP.setAttribute('class','col-9 sidebarPara')
            colDivElementP.setAttribute('id','sidebarParaId'+count)
            paraElement=document.createElement('p')
            paraElement.setAttribute('class','card-text')
            paraElement.innerHTML=element[2]
            colDivElementP.appendChild(paraElement)

            rowDivElement.appendChild(colDivElementImg)
            rowDivElement.appendChild(colDivElementP)

            breakElementSidebar=document.createElement('br')
            DivSideBar.appendChild(rowDivElement)
            DivSideBar.appendChild(breakElementSidebar)
            console.log(rowDivElement)
            
        }
        
    });
    let cardElementsArray=arrayData.slice(arrayData.length-maxLiElements-9,arrayData.length-maxLiElements)
    count=1
    cardElementsArray.forEach(element => {
        let cardTitle=document.getElementById('newsCardTitle'+count)
        cardTitle.setAttribute('style','font-size:18px')
        cardTitle.innerHTML=element[2]
        let cardImg=document.getElementById('newsCardImg'+count)
        cardImg.setAttribute('src',element[4])
        cardImg.setAttribute('style','cursor:pointer;height: 150px;')

        let cardElement=document.getElementsByClassName('card'+count)
        cardElement[0].setAttribute('id',element[0])
        cardElement[0].setAttribute('onclick','miniCardClick(this)')
        count+=1
    });
    //CARD ELEMENTS


    //cloning liElements

    let mediumSidebar=document.createElement('div')
    mediumSidebar.setAttribute('class','mediumSidebar')
    let dividerElement=document.getElementById('divider')
    
    const cloneSidebar=document.getElementById('largeSidebarID')
    const clone=cloneSidebar.cloneNode(true)
    clone.setAttribute('class','mediumSidebar')
    mediumSidebar.appendChild(clone)
    //console.log(cloneSidebar)
    dividerElement.appendChild(mediumSidebar)
    console.log(dividerElement)
    //cloning liElements ending
}

function reloadPage(id){
    var newsId=id.split('-').splice(-1)
    var storedArrayString = sessionStorage.getItem('arrayData');
    var storedArray = JSON.parse(storedArrayString);
    console.log(storedArray)
    const found=storedArray.find((item)=>item[0]==newsId)
    const actualID=id.slice(1,id.length-2).split('-').join(' ').trim().toLowerCase()
    console.log(actualID==found[1].toLowerCase())
    if (actualID!==found[1].toLowerCase()){
        window.location.href='page404.html'
        history.pushState({}, newTitle, '/404');
        return
    }
    //Main News Start
    let mainScriptCon=document.getElementById('MainScriptCon')
    let mainTitle=document.getElementById('Main-Title')
    let mainScript=document.getElementById('Main-Script')
    let mainImg=document.getElementById('mainImg')
    mainImg.setAttribute('src',found[4])
    document.getElementById('blank').focus()
    let mainNewsId=found[0]
    //console.log(mainNewsId)
    mainTitle.innerHTML=found[2]
    mainScript.innerHTML=found[3]
    //Main News End

    //change of code

    // changing side bar
    let DivSideBar=document.getElementById('largeSidebarID')
    
// changing side bar
    let count=0
    maxLiElements=10
    let liArray=storedArray.slice(-maxLiElements)
    //console.log(liArray)
    console.log(storedArray.slice(storedArray.length-maxLiElements-9,storedArray.length-maxLiElements))
    liArray.forEach(element => {
        if(element[0] !==mainNewsId && element[0]!=='ID'){
            count+=1
            let rowDivElement=document.createElement('div')
            rowDivElement.setAttribute('class','row siderowcontainer liCard miniCard'+count)
            rowDivElement.setAttribute('onclick','miniCardClick(this)')
            rowDivElement.setAttribute('id',element[0])
            
            colDivElementImg=document.createElement('div')
            colDivElementImg.setAttribute('class','col-3')
            imgElement=document.createElement('img')
            imgElement.setAttribute('src',element[4])
            //imgElement.setAttribute('style','width:100px')
            imgElement.setAttribute('class','sidebarImg')
            imgElement.setAttribute('id','sidebarImgId'+count)
            colDivElementImg.appendChild(imgElement)

            colDivElementP=document.createElement('div')
            colDivElementP.setAttribute('class','col-9 sidebarPara')
            colDivElementP.setAttribute('id','sidebarParaId'+count)
            paraElement=document.createElement('p')
            paraElement.setAttribute('class','card-text')
            paraElement.innerHTML=element[2]
            colDivElementP.appendChild(paraElement)

            rowDivElement.appendChild(colDivElementImg)
            rowDivElement.appendChild(colDivElementP)

            breakElementSidebar=document.createElement('br')
            DivSideBar.appendChild(rowDivElement)
            DivSideBar.appendChild(breakElementSidebar)
        }
        
    });
    let cardElementsArray=storedArray.slice(storedArray.length-maxLiElements-9,storedArray.length-maxLiElements)
    count=1
    cardElementsArray.forEach(element => {
        let cardTitle=document.getElementById('newsCardTitle'+count)
        cardTitle.setAttribute('style','font-size:18px')
        cardTitle.innerHTML=element[2]
        let cardImg=document.getElementById('newsCardImg'+count)
        cardImg.setAttribute('src',element[4])
        cardImg.setAttribute('style','cursor:pointer;height: 150px;')

        let cardElement=document.getElementsByClassName('card'+count)
        cardElement[0].setAttribute('id',element[0])
        cardElement[0].setAttribute('onclick','miniCardClick(this)')
        count+=1
    });
    //CARD ELEMENTS


    //cloning liElements

    let mediumSidebar=document.createElement('div')
    mediumSidebar.setAttribute('class','mediumSidebar')
    let dividerElement=document.getElementById('divider')
    
    const cloneSidebar=document.getElementById('largeSidebarID')
    const clone=cloneSidebar.cloneNode(true)
    clone.setAttribute('class','mediumSidebar')
    mediumSidebar.appendChild(clone)
    //console.log(cloneSidebar)
    dividerElement.appendChild(mediumSidebar)
    console.log(dividerElement)
    //cloning liElements ending
}


function miniCardClick(element){
    const mainContent = document.getElementById('divider');
    const searchContent = document.getElementById('searchResults');
    searchContent.innerHTML=''
    mainContent.setAttribute('style','')
    const searchInput = document.getElementById('searchInput');
    console.log(searchInput.textContent)
    //changing the search input value to null
    searchInput.value=''
    
    var storedArrayString = sessionStorage.getItem('arrayData');
    var storedArray = JSON.parse(storedArrayString);
    //console.log(storedArray)
    const found=storedArray.find((item)=>item[0]==element.id)
    var newURL = '/'+found[1].split(' ').join('-')+'-'+found[0];
    console.log(newURL.split('-').splice(-1))
    var newTitle = element[1];


    let mainScriptCon=document.getElementById('MainScriptCon')
    let mainTitle=document.getElementById('Main-Title')
    let mainScript=document.getElementById('Main-Script')
    let mainImg=document.getElementById('mainImg')
    mainImg.setAttribute('src',found[4])
    document.getElementById('blank').focus()

    //const sessionData = JSON.parse(sessionStorage["users"])
    //var MainNews=sessionData.slice(-1)[0]
    let mainNewsId=found[0]
    //console.log(mainNewsId)
    mainTitle.innerHTML=found[2]
    mainScript.innerHTML=found[3]
    document.body.focus()


    //var newURL = '/'+found[1].split(' ').join('-')+'-'+found[0];
    // Change the URL and title without reloading
    history.pushState({}, newTitle, newURL);

    // You can also update other parts of the page as needed
    document.title = newTitle;
    console.log(window.location.href)   
    
    
}

    // const searchForm = document.getElementById('searchForm');
    // const searchInput = document.getElementById('searchInput');
    // console.log(searchInput)
    // //const searchResultsContainer = document.getElementById('searchResults');

    // // Add an event listener to the form for submission
    // searchForm.addEventListener('submit', function(event) {
    //     // Prevent the default form submission
    //     event.preventDefault();

    //     // Get the search query from the input
    //     const query = searchInput.value;

    //     // Perform a search (this is a placeholder function, replace it with your actual search logic)
    //     performSearch(query);
    // });

    // // Function to perform the search (replace this with your actual search logic)
    function performSearch(query) {

        const mainContent = document.getElementById('divider');
        mainContent.setAttribute('style','display:none')
        
        // Display the search results (this is a placeholder, replace it with your actual results rendering logic)
        //searchResultsContainer.innerHTML = `Search results for: <strong>${query}</strong>`;
        var storedArrayString = sessionStorage.getItem('arrayData');
        var storedArray = JSON.parse(storedArrayString);
        //const found=storedArray.find((item)=>item[1].toLowerCase().includes(query.toLowerCase()))
        const found=storedArray.filter((item)=>item[1].toLowerCase().includes(query.toLowerCase()))
        console.log(found)
        let searchElementsContainer=document.getElementById('searchResults')
        searchElementsContainer.innerHTML=''
        found.forEach(element => {
            
            let itemColumn=document.createElement('div')
            itemColumn.setAttribute('class','col-12 col-md-6 col-lg-4')

            let searchItemContainer=document.createElement('div')
            searchItemContainer.setAttribute('class','row liCard')
            searchItemContainer.setAttribute('id',element[0])
            searchItemContainer.setAttribute('onclick','miniCardClick(this)')

            let searchImg=document.createElement('img')
            searchImg.setAttribute('src',element[4])
            searchImg.setAttribute('class','sidebarImg')




            let searchImgContainer=document.createElement('div')
            searchImgContainer.setAttribute('class','col-3')

            searchImgContainer.appendChild(searchImg)
            searchItemContainer.appendChild(searchImgContainer  )
            
            let searchParaElement=document.createElement('p')
            searchParaElement.setAttribute('class','card-text')
            searchParaElement.innerHTML=element[2]

            let searchParaContainer=document.createElement('div')
            searchParaContainer.setAttribute('class','col-9 sidebarPara')

            searchParaContainer.appendChild(searchParaElement)
            searchItemContainer.appendChild(searchParaContainer)

            itemColumn.appendChild(searchItemContainer)
            searchElementsContainer.appendChild(itemColumn)
        });
    var newURL = '/search?search='+query
    // Change the URL and title without reloading
    history.pushState({}, 'newTitle', newURL);

    // You can also update other parts of the page as needed
    document.title = 'newTitle';
        
    }