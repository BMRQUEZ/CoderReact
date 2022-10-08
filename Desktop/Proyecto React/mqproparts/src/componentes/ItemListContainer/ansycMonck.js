const products =[
    { id :'1',
      name : 'Selectora Rapida',
      price :'46000',
      category: 'Selectora de Cambios',
      img: '',
      stock: '25',
      description : 'Selectora Rapida Falcon Chevy Torino'

    },
    { id :'2',
      name : 'Selectora Rapida',
      price :'38000',
      category: 'Selectora de Cambios',
      img: '',
      stock: '25',
      description : 'Selectora rapida para vw Senda-Gol'

    },
    { id :'3',
      name : 'Selectora Rapida',
      price :'30000',
      category: 'Selectora de Cambios',
      img: '',
      stock: '25',
      description : 'Selectora rapida para caja lancia Fiat'

    },
    { id :'4',
      name : 'Selectora Rapida',
      price :'47000',
      category: 'Selectora de Cambios',
      img: '',
      stock: '25',
      description : 'Selectora Rapida Caja A230 Dodge Gtx Rt Polara'

    }
]
export const getProducts = () => {
  return new Promise ((resolve) => {
    setTimeout(()=>{resolve(products)
    },1000) 
  })
}
export const getProduct = (id) => {
  return new Promise ((resolve) => {
    setTimeout(()=>{resolve(products.find(prod => prod.id === id ))
    },1000) 
  })
}