export interface IEvent {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IWorkShop {
  id: number;
  name: string;
  eventId: number;
  start: Date;
  end: Date;
  createdAt: Date;
  updatedAt: Date;
}
