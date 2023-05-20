import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Radio,
    HStack,
    Button,
    Select
} from '@chakra-ui/react'
import { useState } from 'react'
import { createProduct } from '../../../Redux/AdminRedux/action'
import Admin_Navbar from '../Admin_Navbar/Admin_Navbar'
import "./NewProduct.css"
import Footer from '../../../Components/Footer'

const initalState = {
    "image": "",
    "title": "",
    "brands": "",
    "price": 0,
    "category": "mens"
}


export const NewProduct = () => {
    const [product, setProduct] = useState(initalState)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => { return { ...prev, [name]: name === "price" ? +value : value } })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(product)
        setProduct(initalState)
    }
    return (
        <>
            <div>
                <Admin_Navbar />
            </div>
            <div className='form'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <FormControl style={{marginTop:"50px"}} isRequired>
                        <FormLabel>Title</FormLabel>
                        <Input type='text' name='title' value={product.title} onChange={(e) => { handleChange(e) }} />
                        <FormLabel>Image Link</FormLabel>
                        <Input type='url' name='image' value={product.image} onChange={(e) => { handleChange(e) }} />
                        <FormLabel>Brand</FormLabel>
                        <Input type='text' name='brands' value={product.brands} onChange={(e) => { handleChange(e) }} />
                        <FormLabel>Price</FormLabel>
                        <Input type='number' name='price' value={product.price} onChange={(e) => { handleChange(e) }} />
                        <FormLabel as='legend'>Select The Category</FormLabel>
                        <Select placeholder='Select option' name='category' onChange={(e) => handleChange(e)} >
                            <option value='mens'>Mens </option>
                            <option value='womens'>Womens</option>
                            <option value='mobile_accessories'>Mobile Accessories</option>
                        </Select>
                        <Button style={{marginTop:"30px", marginBottom:"30px"}} colorScheme='teal' variant='outline' type='submit'>
                            Add Products
                        </Button>
                    </FormControl>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}