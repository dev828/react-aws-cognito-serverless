import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import { regionsArr } from '../Component.Data';
const CheckRegions = ({ regionList }) => {
  const [regions, setRegions] = React.useState(null);
  const handleChange = name => event => {
    setRegions({ ...regions, [name]: event.target.value });
  };

  console.log('Regions', regions);
  return (
    <React.Fragment>
      <FormControl component='fieldset' style={{ marginTop: '1rem', paddingLeft: '1.25rem'}}>
        <FormGroup>
          {regionsArr.map((region, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  onChange={handleChange(region)}
                  color='primary'
                  value={region}
                  inputProps = {{
                    style: {
                      width: '12px'
                    }
                  }}
                />
              }
              label={<span style = {{fontSize: '0.9375rem'}}>{region}</span>}
            />
          ))}
        </FormGroup>
      </FormControl>
    </React.Fragment>
  );
};

export default CheckRegions;
