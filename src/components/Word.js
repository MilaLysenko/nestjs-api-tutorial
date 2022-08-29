import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Grid, Paper, Typography, TextField, Tooltip } from '@mui/material';

export default function Word(props) {
  const handleCardChange = event => {
    props.onCardChange(event);
  };

  return (
    <Box sx={{ width: '100%', marginBottom: '15px' }}>
      <Paper>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#7b519d',
              borderRadius: '3px 3px 0 0',
              padding: '8px 16px'
            }}>
            <Box component="div">
              <Typography variant="button" color="warning.light">
                {props.count}
              </Typography>
            </Box>

            <Tooltip title="Delete the Word">
              <IconButton
                onClick={() => props.handleRemoveWord(props.uid)}
                edge="end"
                aria-label="delete"
                color="warning">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>

        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <TextField
                  fullWidth
                  multiline
                  helperText="TERM"
                  id="title"
                  label="Enter term"
                  name="term"
                  variant="standard"
                  value={props.term}
                  onChange={handleCardChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  multiline
                  helperText="DEFINITION"
                  id="definition"
                  label="Enter definition"
                  name="definition"
                  variant="standard"
                  value={props.definition}
                  onChange={handleCardChange}
                />
              </Grid>

              <Grid item xs={12} sm={1}>
                <Tooltip title="Add an Image">
                  <Box
                    component="span"
                    sx={{
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                      height: '50px',
                      border: '1px dashed #4a3365',
                      overflow: 'hidden'
                    }}>
                    <Button sx={{ textTransform: 'uppercase', fontSize: '10px' }}>image</Button>
                  </Box>
                </Tooltip>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
}
