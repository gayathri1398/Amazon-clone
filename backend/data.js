const data ={
    products:[
        {
            _id:1,
            name:"Nike Slim Shirts",
            category:"shirts",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLAMgM3AoDdgJe289iPT2crK9qyjoauD73A&usqp=CAU",
            imgprod:"https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/primary_fecfd990-3741-4913-9bf4-32f6d816782b.jpeg",
            price: 120,
            brand:"Nike",
            countInStock:10,
            description:"high quality product",
            rating: 4.5,
            numOfReviews:10
        },
        {
            _id:2,
            name:"Adidas Fit Shirt",
            category:"shirts",
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwCV7EfiSdTbZeEDasH39etgsyIf3wY8ASw&usqp=CAU',
            imgprod:"https://cdn2.stylicy.com/global/image-5727-115983157-1-big-hr.jpg",
            price: 120,
            brand:"Adidas",
            countInStock:14,
            description:"high quality product",
            rating: 4.0,
            numOfReviews:4
        },
        {
            _id:3,
            name:"Lacoste Free Shirts",
            category:"shirts",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1N6CxK2gfKxYge49Cy2GEcmVEQvoOaqCugw&usqp=CAU",
            imgprod:"https://www.bebasic.ch/out/pictures/master/product/1/lacoste-men-polo-green-ss-l1212-00-132_f_1.jpg",
            price: 150,
            brand:"Lacoste",
            countInStock:0,
            description:"high quality product",
            rating: 3.5,
            numOfReviews:6
        },
        {
            _id:4,
            name:"Nike Slim Pant",
            category:"Pant",
            image:"data:image/jpeg;base64,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",
            imgprod:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14536482/2021/7/15/f4cb88d1-84d6-4a59-b96f-2b6b0031bbc21626333447226-Nike-Dri-FIT-Mens-Tapered-Camo-Training-Pants-51816263334465-1.jpg",
            price: 160,
            brand:"Nike",
            countInStock:10,
            description:"high quality product",
            rating: 4,
            numOfReviews:8
        },
        {
            _id:5,
            name:"Puma Slim Pant",
            category:"Pant",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTCRI5_xrexBncVo8-BnHrIrwBwh0OoSdnQ&usqp=CAU",
            imgprod:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/531014/01/mod01/fnd/IND/fmt/png/BMW-M-Motorsport-T7-Men's-Track-Slim-Pants",
            price: 180,
            brand:"Puma",
            countInStock:17,
            description:"high quality product",
            rating: 5,
            numOfReviews:5
        },
        {
            _id:6,
            name:"Adidas Fit Pant",
            category:"Pant",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBcbvre0844iEVvRq93uTud_YsiS5KbY2wA&usqp=CAU",
            imgprod:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
            price: 90,
            brand:"Adidas",
            countInStock:10,
            description:"high quality product",
            rating: 4.5,
            numOfReviews:10
        }
    ]
}
export default data;