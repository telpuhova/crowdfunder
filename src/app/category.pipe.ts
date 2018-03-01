import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Project[], desiredCategory) {
    let output: Project[] = [];
    if (desiredCategory === "film") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].category === "film") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "games") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].category === "games") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "comics") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].category === "comics") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
