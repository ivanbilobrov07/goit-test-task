export type IStatus = {
  FULFILLED: string;
  IDLE: string;
  REJECTED: string;
  PENDING: string;
};

export const STATUS: IStatus = {
  FULFILLED: 'Fulfilled',
  IDLE: 'Idle',
  REJECTED: 'Rejected',
  PENDING: 'Pending',
};
