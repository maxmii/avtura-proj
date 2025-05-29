export interface IStands {
  id: string;
  lat: number;
  long: number;
  standFacing: string;
  boxLength: number;
  boxWidth: number;
}

export interface IStandsResponseData {
  lat: number;
  long: number;
  stand_facing: string;
  box_length: number;
  box_width: number;
}
