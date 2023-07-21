import { IDepartureTime } from './departureTime'
import { ISeatsAvailable } from './seatsAvailable'
import { IPrice } from './price'

/**
 * @description Interface for Train
 * @interface
 * @property {string} trainName - The name of the train
 * @property {string} trainNumber - The number of the train
 * @property {IDepartureTime} departureTime - The departure time of the train
 * @property {ISeatsAvailable} seatsAvailable - The seats available in the train
 * @property {IPrice} price - The price of the train
 * @property {number} delayedBy - The delay of the train in minutes
 */
export interface ITrain {
  trainName: string
  trainNumber: string
  departureTime: IDepartureTime
  seatsAvailable: ISeatsAvailable
  price: IPrice
  delayedBy: number
}
