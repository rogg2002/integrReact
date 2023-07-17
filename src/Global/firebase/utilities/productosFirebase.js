import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where} from 'firebase/firestore/lite'
import { firebaseDb } from '../config/config'

// creo base de datos
const actualCollection='productos'
const productosDb= collection(firebaseDb, actualCollection)

// ...........en CRUD CREATE...................
// creo funcio para agregar productos a nuestra base de datos
//Agregar documento con ID automatico  - addDoc
export const addProduct= (doc)=>
    addDoc(productosDb, doc)


//Agregar varios documentossss con Id automatico
export const addProducts=(docs)=>
docs.forEach(item => addProduct(item))

//otra funcion para agregar producto con ID
// Agregar documentos con ID propio
export const addProductWithId =(newDoc)=>{
    const id= newDoc.id.toString()
    const docRef = doc(firebaseDb, actualCollection, id)
// borro campo de id para no repetir elementos
    delete newDoc.id

    const res = setDoc(docRef, newDoc, {merge:false}).then(()=>'Se actualizo bien').catch(()=>'problemas de escritura')

    return res 

}


// Agrego documantosss con id propio
export const addProductsWithId = (docs) =>
docs.forEach(doc=>addProductWithId(doc))
//...............................................


//.........en CRUD READ..............
// Obtener documentos   --- getDocs
export const getProducts = async () =>{
    const collection = await getDocs(productosDb)
    console.log(collection.docs)
    const products = collection.docs.map(doc => 
        {
            return {...doc.data(), id: doc.id}
        })
        return products
}

// creo otra funcion
//buscamos un producto por id
export const getProductById =(id)=>{
    const idString = id.toString()
    const itemRef = doc(firebaseDb, actualCollection, idString)
    getDoc(itemRef).then( res => console.log(res.data()))

}

// busco producto por un campo
export const getProductByName =async(name)=>{
    const dataRef= query(productosDb, where('y','==', name))  // y es el campo que quiero mapear, como puede ser name
    let found = await getDocs(dataRef)
    found = found.docs.map(doc=> doc.data())
    console.log(found)
    return found
}
//...............................................

//.......en CRUD UPDATE.........
// Actualizar o crear
// para configurar un producto OJO con esta funcion puedo crear un nuevo elemento
export const setProduct = async ( values, merge=false) =>{
    console.log(values)
    const id= values.id.toString()
    delete values.id
    const itemRef= doc(firebaseDb, actualCollection, id)
    setDoc(itemRef, values,{merge})
}
//Actualizar o ignorar
// para setear un elemento sin que me cree otro si uso otro id 
export const updateProduct = async ( values, merge=false) =>{
    console.log(values)
    const id= values.id.toString()
    delete values.id
    const itemRef= doc(firebaseDb, actualCollection, id)
    updateDoc(itemRef, values,{merge})
}
//..............................................

// ........en CRUD  DELETE..........
// Borrar un documento
export const deleteProduct=(id)=>{
    const idToString= id.toString()
    //delete values.id

    const itemRef= doc(firebaseDb, actualCollection, idToString)
    deleteDoc(itemRef)
}


