import React from 'react'
import {
    Button, ButtonGroup, AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { DELETE_PRODUCT } from '../../../Redux/AdminRedux/action';


const Delete = ({ id, handleCon }) => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const handleDelete = (id) => {
        const payload = {
            id
        }
        dispatch(DELETE_PRODUCT(id))
        handleCon()
    }
    return (
        <>
            <Button colorScheme='red' onClick={onOpen}>
                Delete
            </Button>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Product
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={()=>{handleDelete(id);onClose()}} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default Delete



//       <Button flex={1}
    //             fontSize={'sm'}
    //             size="md"
    //             bg={'blue.400'}
    //             color={'white'}
    //             boxShadow={
    //                 '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
    //             }
    //             _hover={{
    //                 bg: 'blue.500',
    //             }}
    //             _focus={{
    //                 bg: 'blue.500',
    //             }} onClick={() => { handleDelete(id) }}>
    //             Delete
    //         </Button>


    //         <Button colorScheme='red' onClick={onOpen}>
    //     Delete Customer
    //   </Button>
