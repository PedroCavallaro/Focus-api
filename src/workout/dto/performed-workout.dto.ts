import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { PerformedWorkoutItem } from './create-workout.dto';

export class PerformedWorkoutDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  hours: number;

  @IsNotEmpty()
  exercises: Array<PerformedWorkoutItem>;
}
