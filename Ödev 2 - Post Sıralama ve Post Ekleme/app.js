const posts =[
    {title:'Başlık 1',content:'İçerik 1'},
    {title:'Başlık 2',content:'İçerik 2'},
    {title:'Başlık 3',content:'İçerik 3'},
    {title:'Başlık 4',content:'İçerik 4'}
]

const listPosts = () =>{
    posts.map(post =>{
        console.log(`Title:${post.title} Content:${post.content}`)
    })
}

const addPost = (data)=>{
    posts.push(data)
}


const showPost = async () => {  
    try{
        await addPost({title:'Başlık 5',content:'İçerik 5'})
        listPosts()
        
    }catch(err){
        console.log(err)
    }
}

showPost() 