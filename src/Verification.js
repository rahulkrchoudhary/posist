//export default verification;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mainLogo from'./image.png';
import something from'./img2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['General Details', 'Verification of details'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <div className="steper">
          <h2>Enter Your Details</h2>
     <div>
      <label>Enter Name of Channel

      </label>
      <input
      type="text"
      autoFocus
      placeholder="Enter Name of channel"
      
      />
      </div>
      <div>
      <label>Select type of channel

      </label>
      <select  class="form-field" formControlName="type" id="type" required>
              <option value="" disabled selected>Select your option</option>
              <option value="">type1</option>
               <option> type2</option>
               <option> type 3 </option>
  
              
             </select>
    
      </div>
      <div>
      <label>Enter Description

      </label>
      <input
      type="text"
      autoFocus
      placeholder="Enter Description"
      />
      </div>
      <div>
      <label>Enter member id to send invite

      </label>
      <input
      type="text"
      autoFocus
      placeholder="Enter member id "
      
      />
      
      </div>
    

  </div>;
    case 1:
      return <div className="steper">
      <h2>Confirm Your Details</h2>

  <div><img  src={mainLogo} alt="fireSpot"/></div>
  
  <div>
  <label>Tell something About channel

  </label>
  <input
  type="text"
  autoFocus
  placeholder="Enter description"
  />
  </div>
  <div>
  <label>Add attcahments 

  </label>
  <input
  type="file"
  autoFocus
  placeholder="Enter Phone no"
  
  />
  
  </div>


</div>;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
                
            <div className="steper">
          <h2>Your Successfully created a channel</h2>
          <br></br>
    
          <div><img  src={something} alt="fireSpot" width="450px"/></div>

  </div>;
                
                
                </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button  variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}