import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue, Image
} from '@chakra-ui/react';
import { Update } from './Update';
import Delete from './Delete';


export default function ProductList({ image, brands, title, price, category, id, page, handleCon }) {
    return (
        <Center key={id} py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundImage: `url(${image})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={200}
                        width={282}
                        objectFit={'cover'}
                        src={image}
                    />
                </Box>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {title}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    @{brands}
                </Text>
                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #price - ₹ {price}
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #category - {category}
                    </Badge>
                </Stack>

                <Stack mt={8} direction={'row'} spacing={5}>

                    <Update id={id} price={price} title={title} brands={brands} category={category} image={image} page={page} handleCon={handleCon} />

                    <Delete id={id} handleCon={handleCon} />
                </Stack>
            </Box>
        </Center>
    );
}
