import "./productcard.css"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { GET_PRODUCT } from '../../../Redux/AdminRedux/action';
import ProductList from './ProductList';
import Admin_Navbar from '../Admin_Navbar/Admin_Navbar';
import { Page } from "./Page";
import Footer from "../../../Components/Footer";
export const Product = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(7)
    const [con, setCon] = useState(false)
    const { products, isLoading, isError } = useSelector((store) => { return { products: store.AdminReducer.products, isLoading: store.ProductReducer.isLoading, isError: store.ProductReducer.isError } }, shallowEqual)
    useEffect(() => {
        dispatch(GET_PRODUCT(page))
    }, [page, con])
    const handleChange = (e) => {
        setPage(page + e)
    }
    const handleCon = () => { setCon(!con) }
    return (
        <div>
            <div>
                <Admin_Navbar />
            </div>
            <div className="main">
                {products.length > 0 && products.map((el) =>
                    <div className="card">
                        <ProductList key={el.id} {...el} page={page} handleCon={handleCon} />
                    </div>
                )}
            </div>
            <div>
                <Button isDisabled={page === 1 ? true : false} onClick={() => handleChange(-1)}>
                    Prev
                </Button>
                <Button>
                    {page}
                </Button>
                <Button isDisabled={page === 7 ? true : false} onClick={() => handleChange(+1)}>
                    Next
                </Button>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
