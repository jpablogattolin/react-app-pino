import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { collection , getDocs} from "firebase/firestore";
import db from "../../db/firebase-config";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
  
    const {categoryId}=useParams();

    const [productos,setProducts]= useState ([])

    const getData=async () => {
        try {
            const document= collection (db, "productos")
            const col = await getDocs (document)
            const result= col.docs.map ((doc =>doc={id:doc.id,...doc.data()}))
            setProducts (result)
        } catch (error) {
            console.log (error)
        }
        }

        useEffect (()=> {
            getData()
        }, [])
    }

  
export default ItemListContainer;