import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LayoutDefault from '../layouts/LayoutDefault'
import Image from '../components/elements/Image'

import { useLocation } from 'react-router-dom'
import Button from '../components/elements/Button'
import { Box, Grid, Chip, Modal, Typography, TextField } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import Swal from 'sweetalert2'

import EventImage from '../assets/images/img-1.jpeg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
const EventSingle = props => {
    const { state } = useLocation()
    const [value, setValue] = useState("Controlled")
    const [tags, setTags]= useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        getTags()
    }, [])

    const getTags = () => {
        const tagsArr = state.tags
        setTags(tagsArr.split(" "))
    }

    const handleRegister = () => {
        handleClose()
        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Registered for event successfully",
            footer: '<a href="https://" style={{color: "red"}}>View event in your account</a>'
        })
    }

    return (
        <LayoutDefault>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box className='card-style'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box>
                                <h6 variant="h6" component="h2">
                                Register for {state.title}
                                </h6>
                                <p sx={{ mt: 2 }}>
                                    Kindly provide valid information.
                                </p>

                                <Box
                                    component="form"
                                    sx={{ mt: 3,
                                        '& .MuiTextField-root': { width: "100%" },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <div>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={6} sm={6}>
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="First Name"
                                                    multiline
                                                    maxRows={4}
                                                    value=""
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} sm={6}>
                                                <TextField
                                                    id="outlined-textarea"
                                                    label="Last Name"
                                                    multiline
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} sm={6}>
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="Email address"
                                                    multiline
                                                    maxRows={4}
                                                    value=""
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} sm={6}>
                                                <TextField
                                                    id="outlined-textarea"
                                                    label="Phone Number"
                                                    multiline
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12} sm={12}>
                                                <TextField
                                                    id="outlined-textarea"
                                                    label="Company Name"
                                                    multiline
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12} sm={12}>
                                                <Button className="button button-wide-mobile button-primary button-lg" onClick={handleRegister}>Register</Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Box>
                            </Box>
                            

                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box style={{background: `url(${state.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100%"}}>

                            </Box>
                        </Grid>
                    </Grid>
                    
                    
                </Box>
            </Modal>
            <section style={{backgroundColor: "black", padding: "50px", marginTop: "80px"}}>
            <Box className="container-sm" style={{textAlign: "center"}} >
                <h2 style={{color: "white"}}>{state.title}</h2>
                <p style={{color: "#ccc"}}><CalendarMonthIcon fontSize="small"/><span style={{position: "relative"}}>{state.date}, {state.time}</span></p>
                <Button onClick={handleOpen} className="button button-primary button-wide-mobile button-sm" style={{width: "320px"}}>Register</Button>
            </Box>
        </section>
        <section className='container-sm'>
            <Box sx={{mt: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{p: 2}} md={8} sm={8}>
                        <Box>
                            <Image src={state.image} />
                            <h3>{state.title}</h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <Box>
                                {/* <Stack spacing={1}> */}
                                <h4>Tags</h4>
                                    { state.tags.split(" ").map((tag, index) => (
                                        <Chip key={index} variant='outlined' sx={{mr: 1, mb: 1}} label={tag}></Chip>
                                    )) }
                                {/* </Stack> */}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{p: 2}} md={4} sm={4}>
                        <Box>
                            
                            <h6><CalendarMonthIcon fontSize="small"/><span style={{position: "absolute"}}>&nbsp; Date and Time</span></h6>
                            <p style={{marginTop: "-20px", marginLeft: "32px"}}>{state.date}, {state.time}</p>
                                        <br/>
                            <h6><FmdGoodIcon fontSize="small"/><span style={{position: "absolute"}}>&nbsp; Location</span></h6>
                            <p style={{marginTop: "-20px", marginLeft: "32px"}}>
                            Falala Plaza, Plot C50 Road 5221 behind falala plaza, Gwarimpa, Abuja, Federal Capital Territory 900108
                            </p>
                            <Button onClick={handleOpen} className="button button-primary button-wide-mobile button-sm" style={{width: "100%"}}>Register for this Event</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8844366190797!2d7.492786950548641!3d9.074291590744078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd42594163dd1%3A0x2b97d2308e5f8ee1!2sTranscorp%20Hilton%20Abuja!5e0!3m2!1sen!2sng!4v1657305234126!5m2!1sen!2sng" width="100%" height="450" style={{border: "0"}} allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Grid>
                </Grid>
            </Box>
        </section>
        </LayoutDefault>
    )
}

EventSingle.propTypes = {}

export default EventSingle