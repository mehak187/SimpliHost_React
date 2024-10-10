import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box, styled } from '@mui/material';
import PropertyType from './PropertyType';
import HostLogo from '../../assets/img/host-logo.png';
import PropertyAddress from './PropertyAddress';
import UploadImages from './UploadImages';
import PropertySpace from './PropertySpace';
import EditImages from './EditImages';
import AminitiesDetails from './AminitiesDetails';
import PropertyTitle from './PropertyTitle';
import PropertyDescription from './PropertyDescription';
import SetPricePage from './SetPricePage';
import HouseRules from './HouseRules';

// Define your steps
const steps = [
    'Property Type',
    'Property Address',
    'Property Space',
    'Upload Images',
    'Edit Images',
    'Amenities Details',
    'Property Title',
    'Property Description',
    'House Rules',
    'Set Price',
];

// Custom StepLabel component for styling both the label and the circle
const CustomStep = styled(Step)(({ theme, active }) => ({
    '& .MuiStepLabel-root': {
        '& .MuiStepIcon-root': {
            color: active ? '#3f51b5' : theme.palette.grey[400], // Blue for active, grey for inactive
            border: `2px solid ${active ? '#3f51b5' : theme.palette.grey[400]}`, // Blue border for active
            backgroundColor: active ? 'white' : theme.palette.grey[200], // White circle for active, grey for inactive
            borderRadius: '50%',
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    '& .MuiStepLabel-label': {
        color: active ? '#3f51b5' : theme.palette.text.secondary, // Blue for active step, grey for inactive
        fontWeight: active ? 'bold' : 'normal', // Bold for active step
    },
}));

function LabelStepper() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    // Render the content of the current step
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <PropertyType />;
            case 1:
                return <PropertyAddress />;
            case 2:
                return <PropertySpace />;
            case 3:
                return <UploadImages />;
            case 4:
                return <EditImages />;
            case 5:
                return <AminitiesDetails />;
            case 6:
                return <PropertyTitle />;
            case 7:
                return <PropertyDescription/>;
            case 8:
                return <HouseRules/>;
            case 9:
                return <SetPricePage/>;
            default:
                return <Typography>Unknown step</Typography>;
        }
    };

    return (
        <div className=''>
            <div className='bg-lgrey py-3'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <img src={HostLogo} alt="" className='host-img' />
                        </div>
                        <div>
                            <button className='bg-blue text-white shadow rounded-3 py-2 px-3 border-0'>Save & Exit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4 container'>
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => (
                            <CustomStep key={label} active={activeStep === index}>
                                <StepLabel>
                                    <Typography variant="body2">{label}</Typography>
                                </StepLabel>
                            </CustomStep>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <Typography>All steps completed</Typography>
                        ) : (
                            <div>
                                {getStepContent(activeStep)} {/* Render the content based on the active step */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                    <Button
                                        className='bg-lgrey text-dark rounded-3 py-2 px-4 fw-semi border text-decoration-none'
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{
                                            mr: 1,
                                            backgroundColor: '#F7F7F7',
                                            color: 'dark',
                                            padding: '10px 20px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Back
                                    </Button>

                                    <Button
                                        variant="contained"
                                        className='bg-lblue text-blue rounded-3 py-2 px-4 fw-semi border-0 text-decoration-none'
                                        onClick={handleNext}
                                        sx={{
                                            backgroundColor: activeStep === steps.length - 1 ? '#32F0CD' : '#32F0CD',
                                            color: 'blue',
                                            padding: '10px 20px',
                                            borderRadius: '8px',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </div>
                        )}
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default LabelStepper;
