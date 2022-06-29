const sliderImage=[
    {
        id:1,
        img:'https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg',
        desc:''
    },
    {
        id:2,
        img:'https://static.vecteezy.com/system/resources/previews/001/431/920/original/abstract-green-background-free-vector.jpg',
        desc:''
    },
    {
        id:3,
        img:'https://media.istockphoto.com/photos/dark-black-and-blue-grungy-wall-background-for-display-or-montage-of-picture-id1150477705?k=20&m=1150477705&s=612x612&w=0&h=Yrqw1w6bEJ40kZFTSovkLtu4VE52zLgl-n6AE1t2BuM=',
        desc:''
    },
    {
        id:4,
        img:'https://learn.canva.com/wp-content/uploads/2020/02/removing-background-images_Unsplash.jpeg',
        desc:''
    }
]
const root=document.querySelector('.img-root');

sliderImage.map((el)=>{
    let image=`<div class="img-slider">
        <img src=${el.img} />
    </div>`
    root.innerHTML += image;
})