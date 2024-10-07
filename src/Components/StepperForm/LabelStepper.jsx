import React from 'react';
import {  Stepper, Step,  StepLabel, Button, Typography, Box, styled,} from '@mui/material';
import PropertyType from './PropertyType';

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

// Custom StepLabel component for styling
const CustomStepLabel = styled(StepLabel)(({ theme, active }) => ({
  '& .MuiStepLabel-label': {
    color: active ? '#3f51b5' : theme.palette.text.secondary, // Change color for active step
    fontWeight: active ? 'bold' : 'normal', // Bold for active step
  },
}));

function LabelStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <CustomStepLabel active={activeStep === index}>
              <Typography variant="body2">{label}</Typography>
            </CustomStepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <Typography>All steps completed</Typography>
        ) : (
          <div>
            <Typography>{`Step ${activeStep + 1}`}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </div>
        )}
      </div>
      <div>
        <PropertyType/>
      </div>
    </Box>
  );
}

export default LabelStepper;
