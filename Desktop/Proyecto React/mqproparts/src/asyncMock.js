const products = [
    { 
        id: '1', 
        name: 'Selectora Rapida Falcon Chevy Torino', 
        price: 46000, 
        category: 'Selectora Rapida ', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 25, 
        description:'Selectora Rapida Falcon Chevy Torino'
    },
    { id: '2', 
    name: 'Selectora rapida para vw Senda-Gol', 
    price: 38000, 
    category: 'Selectora Rapida ', 
    img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', 
    stock: 16, 
    description:'Selectora rapida para vw Senda-Gol'},
    { id: '3',
     name: 'Selectora rapida para caja lancia Fiat',
      price: 30000,
       category: 'Selectora Rapida ',
        img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', 
        stock: 10, 
        description:'Selectora rapida para caja lancia Fiat'},

    { id: '4',
     name: 'Selectora Rapida Caja A230 Dodge Gtx Rt Polara',
      price: 47000,
       category: 'Selectora Rapida ',
        img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', 
        stock: 10, 
        description:'Selectora Rapida Caja A230 Dodge Gtx Rt Polara'}
]



export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}