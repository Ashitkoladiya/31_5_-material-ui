import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

function Doctors(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [salary, setSalary] = React.useState('');
    const [age, setAge] = React.useState('');
    const [submit , setSubmit]=React.useState('Doctors');


    let Doctor ={
        name:yup.string().required("enter doctor name"),
        email:yup.string().required("enter email address"),
        salary:yup.string().required("enter your salary"),
        age:yup.string().required("enter your age"),
    }

    let schema , initValue;

    if(submit === "Doctors")
    {
        schema = yup.object().shape(Doctors);
       
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    let cours= JSON.parse(localStorage.getItem("cours") || "[]")
    let doctordata ={
        // id :Math.floor(Math.random()*1000),
        name :name,
        salary,
        email,
        age
    }
    

    cours.push(doctordata)

    const handleSubmit = ()=>{
        localStorage.setItem("cours", JSON.stringify(cours));
        
        setEmail();
        setSalary();
        setName();
        setAge();
        handleClose();
    }

    
    <Formik>

    </Formik>
   
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Doctor
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Detail</DialogTitle>
                <DialogContent>
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="salary"
                        label="Enter salary"
                        type="salary"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setSalary(e.target.value)}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="age"
                        label="Enter Age"
                        type="age"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setAge(e.target.value)}
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Doctors;