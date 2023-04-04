import React, { useContext } from 'react';
import { ReactDOM } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import Navbar from './Navbar';
import axios from 'axios';
import { AppContext } from './App';
import Footer from './footer';


export default function Productsm() {
    const {
        pId, setPId
    } = useContext(AppContext)
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getProduct(pId);
    }, [])

    const getProduct = async (id) => {
        setLoading(true);
        const path = 'https://fakestoreapi.com/products/' + (id + 1)
        axios.get(path)
            .then((res) => {
                setProduct(res.data)
            })
        setLoading(false)
    }


    useEffect(() => {
        console.log(product)
    }, [product])

    const Loading = () => {
        return (
            <>
                {/* <div className="col-md-6">
                    <Skeleton height={400} /> 
                </div>
                <div className="col-md-6">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div> */}
                Loading .... 
            </>
        )
    }
    const ShowProduct = () => {
        return (

            <>
                <div className="col-md-6 imgg">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead">
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className="dispay-6 fw-bold my-6">
                        ${product.price}
                    </h3>
                    <p className="lead text-black-50">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2">
                        Add to Cart
                    </button>
                    <button className="btn btn-outline-dark ms-2 px-3 py-2 ">
                        Go to Cart
                    </button>
                </div>
            </>
        )
    }
    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row py-4">

                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
