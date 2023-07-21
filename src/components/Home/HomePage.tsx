import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@mui/material'
import { Refresh as RefreshIcon } from '@mui/icons-material'

// Models
import { ITrain } from '../../models/train'

const TrainList: React.FC = () => {
  const [trains, setTrains] = useState<ITrain[]>([])

  const fetchTrainsData = async () => {
    try {
      // Replace the URL with your backend API endpoint
      const response = await axios.get<ITrain[]>(
        'http://localhost:5000/trains/all'
      )
      console.log('Trains List ', response.data)
      setTrains(response.data)
    } catch (error) {
      console.error('Failed to fetch train data:', error)
    }
  }

  useEffect(() => {
    console.log('Use Effect Called')
    fetchTrainsData()
  }, [])

  const handleRefresh = () => {
    console.log('Refresh Button Clicked')
    fetchTrainsData()
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Train Schedules</Typography>
          <ListItemSecondaryAction>
            <IconButton edge="end" color="inherit" onClick={handleRefresh}>
              <RefreshIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Toolbar>
      </AppBar>
      <List>
        {trains.map((train) => (
          <ListItem key={train.trainNumber} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>{train.trainNumber}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={train.trainName}
              secondary={`Departure Time: ${train.departureTime.Hours}hrs:${train.departureTime.Minutes}mins:${train.departureTime.Seconds}secs | Delayed By: ${train.delayedBy}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="seats" color="inherit">
                <Typography variant="subtitle2" color="inherit">
                  Seats:
                </Typography>
                <Typography variant="body2" color="inherit">
                  Sleeper: {train.seatsAvailable.sleeper}
                </Typography>
                <Typography variant="body2" color="inherit">
                  AC: {train.seatsAvailable.AC}
                </Typography>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default TrainList
