import {Routes} from '@angular/router'



import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';


export const appRoutes : Routes =[
   
    {path:'question',component:QuestionComponent,},
    {path:'result',component:ResultComponent,},
    {path:'',redirectTo:'/question',pathMatch:'full'}
]; 