

const post =[];


function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            post.push({title: 'Post1'});
            resolve();
        }, 1000)
    }) 
}



function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            var date = new Date();
            var currentTtime = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();     
            resolve()
        }, 1000)
    }) 
}

function deletePost(){
    
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            
            if(post.length>0) {
                const popElem = post.pop()
                resolve(popElem)
            } else {
                reject('ERROR')
            }
   },1000)
   
        
    })
    
    
 }

Promise.all([createPost({title: 'Post1', body: 'This is Post Five'}), updateLastUserActivityTime(),deletePost()])

